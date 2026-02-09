import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchTreatments } from "../api/reports";

type SubItem = { title: string; summary?: string; duration?: string; price?: string };
type Category = "All" | "Face" | "Skin" | "Body" | "Hair";

type Treatment = {
  id?: string;
  title: string;
  summary?: string;
  duration?: string;
  price?: string;
  category?: Category;
  items?: SubItem[]; // when a treatment is a group (Fillers)
};

/* ------------------------------- Constants -------------------------------- */

const CATS: Category[] = ["All", "Face", "Skin", "Body", "Hair"];
const VIEW_URL = "https://lakidisaesthetic.gr/";

/* -------------------------- Category normalization ------------------------ */

const normalizeCategory = (val: any): Category => {
  const s = (val ?? "").toString().trim().toLowerCase();
  if (s.startsWith("face")) return "Face";
  if (s.startsWith("skin")) return "Skin";
  if (s.startsWith("body")) return "Body";
  if (s.startsWith("hair")) return "Hair";
  return "All";
};

// Heuristic inference if the backend category is missing/unknown
const inferCategory = (title?: string, summary?: string): Category => {
  const txt = ((title || "") + " " + (summary || "")).toLowerCase();

  if (/(hair\s*removal|hair\s*laser)/.test(txt)) return "Hair";
  if (
    /(botox|dysport|filler|thread|jawline|lips?|chin|nasolabial|marionette|temple|cheek|tear\s*trough)/.test(txt) ||
    /double\s*chin/.test(txt)
  )
    return "Face";
  if (/(facial|hydrafacial|peel|peeling|mesotherapy|exosome|polynucleotide|prp)/.test(txt)) return "Skin";
  if (/(hifu|radiofrequency|rf|pressotherapy|carboxy)/.test(txt)) return "Body";
  return "All";
};

/* ------------------------------ Ranges helpers ---------------------------- */

const durationRange = (list: SubItem[]) => {
  const nums: number[] = [];
  const num = (s: string) => (isFinite(+s) ? +s : NaN);
  list.forEach((it) => {
    if (!it.duration) return;
    const ds = it.duration.replace(/[^\d–\- ]/g, "");
    const parts = ds
      .split(/[–-]/)
      .map((p) => p.trim())
      .filter(Boolean);
    if (parts.length === 1) {
      const n = num(parts[0]);
      if (!isNaN(n)) nums.push(n);
    } else if (parts.length >= 2) {
      const a = num(parts[0]),
        b = num(parts[1]);
      if (!isNaN(a)) nums.push(a);
      if (!isNaN(b)) nums.push(b);
    }
  });
  if (!nums.length) return undefined;
  const lo = Math.min(...nums),
    hi = Math.max(...nums);
  return lo === hi ? `${lo} min` : `${lo}–${hi} min`;
};

const priceRange = (list: SubItem[]) => {
  const euros: number[] = [];
  list.forEach((it) => {
    if (!it.price) return;
    const found = it.price.match(/\d+/g) || [];
    euros.push(...found.map((n) => +n).filter((n) => isFinite(n)));
  });
  if (!euros.length) return undefined;
  const lo = Math.min(...euros),
    hi = Math.max(...euros);
  return lo === hi ? `€${lo}` : `€${lo}–${hi}`;
};

/* ------------------------------ Fallback list ----------------------------- */

const DEFAULT_TREATMENTS: Treatment[] = [
  { title: "Botox / Dysport", summary: "Wrinkle reduction (forehead, frown lines, crow’s feet).", duration: "15–20 min", price: "€150–280", category: "Face" },
  {
    title: "Fillers (Hyaluronic Acid)",
    summary: "Restore or refine facial contours with hyaluronic acid.",
    category: "Face",
    items: [
      { title: "Cheekbones", summary: "Restore volume & contour.", duration: "20–30 min", price: "€250–350" },
      { title: "Temples", summary: "Correct hollow temples.", duration: "20 min", price: "€200–300" },
      { title: "Under-eye hollows (tear trough)", summary: "Reduce dark circles & tired look.", duration: "20 min", price: "€280–350" },
      { title: "Midface / cheeks", summary: "Correct fat loss & sagging.", duration: "25 min", price: "€250–400" },
      { title: "Fine lines (smoker’s lines)", summary: "Smooth fine wrinkles.", duration: "15 min", price: "€180–250" },
      { title: "Nasolabial folds", summary: "Reduce laugh lines (“sadness wrinkles”).", duration: "20 min", price: "€250–350" },
      { title: "Lips", summary: "Volume, contour, hydration.", duration: "20 min", price: "€200–300" },
      { title: "Chin", summary: "Improve projection & shape.", duration: "20 min", price: "€250–350" },
      { title: "Marionette lines (mouth corners)", summary: "Lift downturned corners.", duration: "15 min", price: "€200–250" },
      { title: "Jawline", summary: "Define lower face contour.", duration: "25 min", price: "€300–400" }
    ]
  },
  { title: "Profhilo / Jalupro / Karisma", summary: "Biostimulating injectable hyaluronic acids that trigger collagen & elastin production.", duration: "20 min", price: "€220–300", category: "Skin" },
  { title: "Polynucleotides", summary: "Regenerative injectables to improve skin elasticity, texture & quality (face & body).", duration: "20 min", price: "€350", category: "Skin" },
  { title: "Exosomes", summary: "Innovative cellular therapy for scars, stretch marks, acne marks, surgical scars.", duration: "20–30 min", price: "€350", category: "Skin" },
  { title: "Platelet Rich Plasma (PRP)", summary: "Autologous plasma therapy enriched with platelets for healing, acne scars, stretch marks & rejuvenation.", duration: "30 min", price: "€150", category: "Skin" },
  { title: "Mesotherapy (Face & Body)", summary: "Microinjections of vitamins, amino acids & hyaluronic acid for hydration & glow.", duration: "20–25 min", price: "€100–180", category: "Skin" },
  { title: "Laser Hair Removal (Candela GentleMax Pro)", summary: "Permanent hair reduction using Alexandrite & Nd:YAG laser.", duration: "15–60 min (by area)", price: "€30–120 / session", category: "Hair" },
  { title: "HydraFacial & Advanced Facials", summary: "Multistep cleansing, exfoliation & hydration treatment with vacuum technology.", duration: "40–60 min", price: "€80–150", category: "Skin" },
  { title: "HIFU / RF / Pressotherapy / Carboxytherapy", summary: "Non-invasive skin tightening, fat reduction & circulation improvement.", duration: "30–60 min", price: "€100–250", category: "Body" },
  { title: "Chemical Peelings", summary: "Controlled exfoliation with acids for skin renewal, hyperpigmentation & acne.", duration: "20–30 min", price: "€80–150", category: "Skin" },
  { title: "Threads (PDO / COG Threads)", summary: "Absorbable threads for lifting & skin tightening.", duration: "30–40 min", price: "€250–600", category: "Face" },
  { title: "Double Chin Lipolysis (LemonBottle / Aqualyx)", summary: "Injectable fat dissolving for the double chin.", duration: "20 min", price: "€150–250 / session", category: "Face" }
];

/* -------------------------------- Component ------------------------------- */

const Treatments: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [serverItems, setServerItems] = useState<Treatment[] | null>(null);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<Category>("All");
  const [open, setOpen] = useState<Record<string, boolean>>({}); // expanded cards

  // helper: safe translation with fallback to English string
  const TT = (key: string, fallback: string) => {
    const v = t(key, { defaultValue: "" }) as any;
    return typeof v === "string" && v.trim() ? v : fallback;
  };

  // visible label for category (keeps internal value stable)
  const catLabel = (c: Category) => {
    switch (c) {
      case "All":
        return TT("all", "All");
      case "Face":
        return TT("face", "Face");
      case "Skin":
        return TT("skin", "Skin");
      case "Body":
        return TT("body", "Body");
      case "Hair":
        return TT("hair", "Hair");
      default:
        return c;
    }
  };

  /* Load from backend; normalize; else fallback to default list */
  useEffect(() => {
    let mounted = true;
    fetchTreatments()
      .then((d: any) => {
        const items = (d?.items || d || []) as any[];
        if (!mounted) return;
        if (Array.isArray(items) && items.length) {
          const normalized: Treatment[] = items.map((it, idx) => {
            const title = it.title ?? it.name ?? "Treatment";
            const summary = it.summary ?? it.description ?? "";
            const rawCat = normalizeCategory(it.category);
            const inferred = inferCategory(title, summary);
            return {
              id: it.id ?? String(idx),
              title,
              summary,
              duration: it.duration ?? it.time ?? "",
              price: it.price ?? it.cost ?? "",
              category: rawCat !== "All" ? rawCat : inferred, // prefer backend, else inferred
              items: Array.isArray(it.items) ? it.items : undefined
            };
          });
          setServerItems(normalized);
        } else {
          setServerItems([]); // triggers fallback usage
        }
      })
      .catch(() => setServerItems([]));
    return () => {
      mounted = false;
    };
  }, []);

  /* Data pipeline: derive ranges for grouped cards, apply search + filters */
  const data = useMemo<Treatment[]>(() => {
    const base = serverItems && serverItems.length ? serverItems : DEFAULT_TREATMENTS;

    const withDerived = base.map<Treatment>((t) => {
      if ((!t.duration || !t.price) && Array.isArray(t.items) && t.items.length) {
        return { ...t, duration: t.duration || durationRange(t.items), price: t.price || priceRange(t.items) };
      }
      return t;
    });

    const needle = q.trim().toLowerCase();
    return withDerived.filter((t) => {
      const effCat = t.category && t.category !== "All" ? t.category : inferCategory(t.title, t.summary);
      const inCat = cat === "All" || effCat === cat;
      if (!needle) return inCat;
      const hay = (
        t.title +
        " " +
        (t.summary || "") +
        " " +
        (t.duration || "") +
        " " +
        (t.price || "") +
        " " +
        (t.items || []).map((i) => i.title + " " + (i.summary || "")).join(" ")
      ).toLowerCase();
      return inCat && hay.includes(needle);
    });
  }, [serverItems, q, cat]);

  const toggle = (k: string) => setOpen((s) => ({ ...s, [k]: !s[k] }));

  return (
    <>
      <style>{`
        :root {
          --ink: #ffffff;
          --muted: #9aa4b2;
          --muted2: #cbd5e1;
          --pillBg: #0f172a;
          --pillBr: #24324a;
        }
        .treats-top { display:flex; gap:12px; flex-wrap:wrap; align-items:center; }
        .treats-search {
          display:flex; align-items:center; gap:8px;
          background:#0f172a; border:1px solid #cfcfcfff; border-radius:14px;
          padding:10px 12px; max-width:560px; flex:1;
        }
        .treats-search input { flex:1; border:none; outline:none; background:transparent; color:var(--ink); }
        .treat-chips { display:flex; gap:8px; flex-wrap:wrap; }
        .treat-chip { padding:8px 12px; border-radius:999px; border:1px solid #22304a; color:#9aa4b2; background: transparent; cursor:pointer; }
        .treat-chip.active { background:#182235; color:#e2e8f0; border-color:#2b3b5a; }

        .treat-grid { display:grid; gap:14px; margin-top:14px; }
        @media (max-width: 619px){ .treat-grid{ grid-template-columns: 1fr; } }
        @media (min-width: 620px) and (max-width: 899px){ .treat-grid{ grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 900px) and (max-width: 1199px){ .treat-grid{ grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1200px){ .treat-grid{ grid-template-columns: repeat(4, 1fr); } }

        .treat-card {
          position: relative;
          background: linear-gradient(180deg, #0e1526, #0b1120);
          border: 1px solid #1f2937;
          border-radius: 16px;
          padding: 16px;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
          box-shadow: 0 12px 28px rgba(0,0,0,.35);
          overflow:hidden;
        }
        .treat-card::after {
          content:"";
          position:absolute; inset: -1px;
          border-radius: 16px;
          padding: 1px;
          background: linear-gradient(135deg, transparent, transparent, rgba(55,195,182,.45));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          opacity: 0; transition: opacity .2s ease;
          pointer-events: none;
        }
        .treat-card:hover { transform: translateY(-4px); border-color: rgba(55,195,182,.25); }
        .treat-card:hover::after { opacity: 1; }

        .t-title { font-weight:800; font-size:18px; }
        .t-sub { color: var(--muted2); margin-top:4px; min-height: 40px; }

        .row { display:flex; gap:8px; flex-wrap:wrap; margin-top:10px; }
        .pill { background: var(--pillBg); border: 1px solid var(--pillBr); padding: 6px 10px; border-radius: 999px; font-size: 14px; }
        .pill b { color: var(--muted); font-weight:600; margin-right:4px; }

        .actions { display:flex; gap:10px; margin-top:12px; flex-wrap:wrap; }
        .btn-link { background: transparent; border: none; color: #6ea8fe; cursor: pointer; padding: 0; }
        .ext-link { color: #6ea8fe; text-decoration: none; }

        .subcard { background:#0f172a; border:1px solid #24324a; border-radius:12px; padding:12px; }
        .sub-title { font-weight:700; }
        .sub-sub { color: var(--muted2); margin-top:4px; }

        .empty { background: #111827; border:1px solid #1f2937; border-radius: 16px; padding: 16px; color: #cbd5e1; }

        /* ✅ Mobile only safe space for bottom nav */
@media (max-width: 768px) {
  .treat-grid {
    padding-bottom: 80px; /* adjust to match your nav height */
  }
}
      `}</style>

      <div className="grid" style={{ gap: 16 }}>
        <div className="card">
          <h2 style={{ marginTop: 0 }}>{TT("treatments", "Treatments")}</h2>

          {/* Top controls */}
          <div className="treats-top">
            <div className="treats-search">
              <span aria-hidden>🔎</span>
              <input
                placeholder={TT("searchTreatments", "Search treatments")}
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>

            <div className="treat-chips">
              {CATS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`treat-chip ${c === cat ? "active" : ""}`}
                  aria-pressed={c === cat}
                >
                  {catLabel(c)}
                </button>
              ))}
            </div>
          </div>

          {/* Cards grid */}
          <div className="treat-grid">
            {data.map((t, idx) => {
              const key = (t.id ?? t.title) + ":" + idx;
              const grouped = Array.isArray(t.items) && t.items.length > 0;
              const isOpen = !!open[key];

              return (
                <div className="treat-card" key={key}>
                  <div className="t-title">{t.title}</div>
                  {t.summary && <div className="t-sub">{t.summary}</div>}

                  {/* Always visible badges */}
                  <div className="row">
                    {t.duration && <div className="pill"><b>{TT("duration", "Duration")}:</b> {t.duration}</div>}
                    {t.price && <div className="pill"><b>{TT("price", "Price")}:</b> {t.price}</div>}
                    {t.category && t.category !== "All" && (
                      <div className="pill"><b>{TT("category", "Category")}:</b> {catLabel(t.category)}</div>
                    )}
                  </div>

                  {/* Expanded details */}
                  {isOpen && (
                    <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
                      {grouped ? (
                        t.items!.map((it, i) => (
                          <div className="subcard" key={i}>
                            <div className="sub-title">
                              {t.title} — {it.title}
                            </div>
                            {it.summary && <div className="sub-sub">{it.summary}</div>}
                            <div className="row" style={{ marginTop: 8 }}>
                              {it.duration && <div className="pill"><b>{TT("duration", "Duration")}:</b> {it.duration}</div>}
                              {it.price && <div className="pill"><b>{TT("price", "Price")}:</b> {it.price}</div>}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="subcard">
                          <div className="sub-title">{TT("details", "Details")}</div>
                          <div className="row" style={{ marginTop: 8 }}>
                            {t.duration && <div className="pill"><b>{TT("duration", "Duration")}:</b> {t.duration}</div>}
                            {t.price && <div className="pill"><b>{TT("price", "Price")}:</b> {t.price}</div>}
                          </div>
                          {t.summary && <div className="sub-sub" style={{ marginTop: 8 }}>{t.summary}</div>}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="actions">
                    <button
                      className="btn-link"
                      onClick={() => toggle(key)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") toggle(key);
                      }}
                    >
                      {isOpen ? TT("hideDetails", "Hide details") : TT("viewDetails", "View details")}
                    </button>

                    <a className="ext-link" href={VIEW_URL} target="_blank" rel="noopener noreferrer">
                      {TT("viewMore", "View more")} ↗
                    </a>
                  </div>
                </div>
              );
            })}

            {!data.length && <div className="empty">{TT("noResults", "No treatments found.")}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Treatments;
