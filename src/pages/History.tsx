import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fetchHistory, fetchReport } from "../api/reports";

/* ----------------------------- Types / helpers ---------------------------- */
type HistoryItem = {
  id: string;
  createdAt: string | number | Date;
  summary?: string;
};

type Metrics = {
  emotion?: string;
  symmetry?: number;
  symmetryMm?: number;
  symmetryPctIPD?: number;
  symmetryBucket?: string;
  symmetryStdMm?: number;
  ageEstimate?: number;
  ageLow?: number;
  ageHigh?: number;
};

type Suggestion = {
  id?: string;
  name: string;
  description?: string;
  durationMin?: number; // minutes
  priceMin?: number;
  priceMax?: number;
};

type ReportType = {
  id: string;
  createdAt: string;
  userName?: string;
  summary?: string;
  metrics?: Metrics;
  details?: string[];            // top features
  suggestions?: Suggestion[];    // suggested treatments
  disclaimer?: string;
  aiReportGreek?: string;        // backend writes English text to this key
  raw?: Record<string, any>;     // optional extra fields
};

declare global {
  interface Window { pdfMake?: any }
}

const euro = (n?: number) => (Number.isFinite(n!) ? `€${n}` : "—");
const priceRange = (min?: number, max?: number) => {
  const a = Number.isFinite(min!) ? (min as number) : undefined;
  const b = Number.isFinite(max!) ? (max as number) : undefined;
  if (a == null && b == null) return "—";
  if (a != null && b != null) return a === b ? euro(a) : `${euro(a)}–${euro(b)}`;
  return euro(a ?? b);
};
const durationTxt = (min?: number) => (Number.isFinite(min!) ? `${min}′` : "—");

function buildFallbackSummary(r: ReportType) {
  const m = r.metrics || {};
  const age = Number.isFinite(m.ageEstimate!)
    ? `Age estimate: ${m.ageEstimate}${
        Number.isFinite(m.ageLow!) && Number.isFinite(m.ageHigh!)
          ? ` (${m.ageLow}–${m.ageHigh})`
          : ""
      }`
    : "Age estimate: —";

  const asym = Number.isFinite(m.symmetryMm!)
    ? `Face asymmetry: ${m.symmetryMm!.toFixed(1)} mm${
        Number.isFinite(m.symmetryPctIPD!)
          ? ` (${(m.symmetryPctIPD! * 100).toFixed(1)}% IPD)`
          : ""
      }${m.symmetryBucket ? `, ${m.symmetryBucket}` : ""}`
    : "Face asymmetry: —";

  const emo = `Dominant expression: ${m.emotion || "—"}`;
  return `${age}. ${asym}. ${emo}.`;
}

function toDate(d: string | number | Date) {
  return d instanceof Date ? d : new Date(d);
}
function startOfWeek(date = new Date()) {
  const d = new Date(date);
  const day = d.getDay();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - day);
  return d;
}
function startOfMonth(date = new Date()) {
  const d = new Date(date.getFullYear(), date.getMonth(), 1);
  d.setHours(0, 0, 0, 0);
  return d;
}
function groupByDate(items: HistoryItem[]) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const week = startOfWeek(new Date());
  const month = startOfMonth(new Date());

  const groups = {
    today: [] as HistoryItem[],
    thisWeek: [] as HistoryItem[],
    thisMonth: [] as HistoryItem[],
    older: [] as HistoryItem[],
  };

  for (const it of items) {
    const d = toDate(it.createdAt);
    const d0 = new Date(d);
    d0.setHours(0, 0, 0, 0);

    if (d0.getTime() === today.getTime()) groups.today.push(it);
    else if (d0 >= week) groups.thisWeek.push(it);
    else if (d0 >= month) groups.thisMonth.push(it);
    else groups.older.push(it);
  }
  return groups;
}
function formatDate(dt: string | number | Date, locale: string) {
  try {
    return new Date(dt).toLocaleString(locale, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return String(dt);
  }
}

/* ---------------------- pdfmake loader (CDN, once) ----------------------- */
function ensurePdfMake(): Promise<void> {
  if (window.pdfMake?.vfs) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const add = (src: string) =>
      new Promise<void>((res, rej) => {
        const el = document.createElement("script");
        el.src = src;
        el.async = true;
        el.onload = () => res();
        el.onerror = () => rej(new Error(`Failed to load ${src}`));
        document.head.appendChild(el);
      });
    add("https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js")
      .then(() => add("https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js"))
      .then(() => resolve())
      .catch(reject);
  });
}

/* --------- Load clinic logo and convert to base64 (avoid CORS issues) ---- */
async function toDataURL(url: string): Promise<string> {
  const res = await fetch(url, { mode: "cors" });
  if (!res.ok) throw new Error("logo fetch failed");
  const blob = await res.blob();
  return await new Promise<string>((resolve, reject) => {
    const fr = new FileReader();
    fr.onloadend = () => resolve(fr.result as string);
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}
async function loadLogoBase64(): Promise<string | null> {
  const candidates = [
    "/assets/clinic_logo.png",
    `${(window as any).PUBLIC_URL || ""}/assets/clinic_logo.png`,
    `${window.location.origin}/assets/clinic_logo.png`,
    "/clinic_logo.png",
  ];
  for (const u of candidates) {
    try { return await toDataURL(u); } catch {}
  }
  return null;
}

/* ----------------------- Build pdfmake docDefinition ---------------------- */
function buildDocDefinition(r: ReportType, dateStr: string, logoData?: string | null) {
  const m = r.metrics || {};
  const summary = r.summary || buildFallbackSummary(r);
  const aiReport = r.aiReportGreek || "-";
  const details = Array.isArray(r.details) ? r.details.slice(0, 5) : [];
  const sugg = Array.isArray(r.suggestions) ? r.suggestions : [];
  const disclaimer =
    r.disclaimer ||
    "This AI analysis is informational and does not replace a consultation with a qualified clinician.";

  const pillRow = [
    {
      table: {
        widths: ["*", "*", "*"],
        body: [
          [
            { text: `Age estimate: ${
              Number.isFinite(m.ageEstimate!)
                ? `${m.ageEstimate}${
                    Number.isFinite(m.ageLow!) && Number.isFinite(m.ageHigh!)
                      ? ` (${m.ageLow}–${m.ageHigh})`
                      : ""
                  }`
                : "—"
            }`, style: "pillCell" },
            { text: `Face asymmetry: ${
              Number.isFinite(m.symmetryMm!) ? `${m.symmetryMm!.toFixed(1)} mm` : "—"
            }${
              Number.isFinite(m.symmetryPctIPD!) ? ` (${(m.symmetryPctIPD! * 100).toFixed(1)}% IPD)` : ""
            }${m.symmetryBucket ? `, ${m.symmetryBucket}` : ""}`, style: "pillCell" },
            { text: `Dominant expression: ${m.emotion || "—"}`, style: "pillCell" },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 0.6,
        vLineWidth: () => 0.6,
        hLineColor: () => "#c9d5e6",
        vLineColor: () => "#c9d5e6",
        paddingLeft: () => 8,
        paddingRight: () => 8,
        paddingTop: () => 6,
        paddingBottom: () => 6,
      },
    },
  ];

  const treatments = sugg.length
    ? sugg.map((s) => ({
        margin: [0, 4, 0, 4],
        table: {
          widths: ["*"],
          body: [
            [
              {
                stack: [
                  { text: s.name, bold: true },
                  ...(s.description ? [{ text: s.description, color: "#333" }] : []),
                  {
                    columns: [
                      { text: `Duration: ${durationTxt(s.durationMin)}` },
                      { text: `Cost: ${priceRange(s.priceMin, s.priceMax)}`, alignment: "right" },
                    ],
                    margin: [0, 4, 0, 0],
                  },
                ],
              },
            ],
          ],
        },
        layout: {
          fillColor: () => "#f9fbfd",
          hLineColor: () => "#cfd8e3",
          vLineColor: () => "#cfd8e3",
        },
      }))
    : [{ text: "-", margin: [0, 2, 0, 2] }];

  return {
    pageSize: "A4" as const,
    pageMargins: [40, 60, 40, 60] as const,
    defaultStyle: { fontSize: 10, color: "#111" },
    styles: {
      h1: { fontSize: 20, bold: true, color: "#0b1020", margin: [0, 12, 0, 8] },
      h2: { fontSize: 13, bold: true, color: "#19a3a3", margin: [0, 10, 0, 6] },
      muted: { color: "#334155" },
      pillCell: { fillColor: "#f7fafc" },
    },
    header: (currentPage: number) => {
      if (currentPage > 1) return {};
      return {
        margin: [0, 0, 0, 12],
        table: {
          widths: [70, "*"],
          body: [
            [
              logoData ? { image: logoData, width: 70, alignment: "left", margin: [12, 8, 0, 8] } : { text: "" },
              {
                margin: [0, 8, 12, 8],
                stack: [
                  { text: "Dr Antonios Medical Clinic", bold: true, color: "#fff" },
                  { text: "Ermou 53, 5th floor, Thessaloniki 546 23", color: "#fff" },
                  { text: "Tel: 2317 004 222 | Mob: 6944 275 175", color: "#fff" },
                  { text: "Email: alakidis@gmail.com", color: "#fff" },
                ],
              },
            ],
          ],
        },
        layout: { fillColor: () => "#19a3a3", hLineWidth: () => 0, vLineWidth: () => 0 },
      };
    },
    footer: () => ({
      margin: [0, 8, 0, 0],
      columns: [
        {
          text: "© 2025 Dr Antonios | www.alakidisaesthetic.gr | alakidis@gmail.com | Dr Antonios (Doctor)",
          alignment: "center",
          color: "#19a3a3",
          fontSize: 9,
        },
      ],
    }),
    content: [
      { text: "PATIENT MEDICAL REPORT", style: "h1", alignment: "center" },

      { text: "Patient", style: "h2" },
      { text: `Name: ${r.userName || "Patient"}` },
      { text: `Report ID: ${r.id}${r.createdAt ? `   •   Date: ${dateStr}` : ""}`, style: "muted", margin: [0, 2, 0, 0] },

      { text: "📖 Summary", style: "h2", margin: [0, 10, 0, 4] },
      { text: summary },

      { text: "📊 Key metrics", style: "h2" },
      ...pillRow,

      { text: "🤖 AI Report", style: "h2" },
      { text: aiReport },

      { text: "🔍 Key Observations", style: "h2" },
      details.length ? { ul: details } : { text: "-" },

      { text: "💡 Suggested Treatments", style: "h2" },
      ...treatments,

      { text: "⚠️ Disclaimer", style: "h2" },
      { text: disclaimer, style: "muted" },
    ],
  };
}

/* -------------------------------- Component ------------------------------ */
const History: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [items, setItems] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const locale = i18n.language?.toLowerCase().startsWith("el") ? "el-GR" : "en-US";

  // ✅ Safe translator: returns fallback if the key resolves to an object or empty
  const safeT = (key: string, fallback: string) => {
    const v = t(key, { defaultValue: "" }) as any;
    return typeof v === "string" && v.trim() ? v : fallback;
  };

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setErr(null);
    fetchHistory()
      .then((list: any) => {
        if (!mounted) return;
        const arr: HistoryItem[] = Array.isArray(list)
          ? list
          : Array.isArray(list?.items)
          ? list.items
          : [];
        arr.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
        setItems(arr);
      })
      .catch((e) => setErr(e?.message || "Failed to load history"))
      .finally(() => setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  const grouped = useMemo(() => groupByDate(items), [items]);

  async function handleDownload(id: string) {
    try {
      setDownloadingId(id);
      await ensurePdfMake();
      const r: ReportType = await fetchReport(id);
      if (!r) throw new Error("Report not found");
      const dateStr = r.createdAt ? new Date(r.createdAt).toLocaleString(locale) : "";

      const logoBase64 = await loadLogoBase64().catch(() => null);
      const docDef = buildDocDefinition(r, dateStr, logoBase64);
      window.pdfMake.createPdf(docDef).download(`report_${id}.pdf`);
    } catch (e: any) {
      alert(e?.message || "Download failed");
    } finally {
      setDownloadingId(null);
    }
  }

  const Section: React.FC<{ title: string; list: HistoryItem[] }> = ({ title, list }) => {
    if (!list?.length) return null;
    return (
      <div style={{ marginBottom: 22 }}>
        <div className="sec-title">{title}</div>
        <div className="cards">
          {list.map((h) => (
            <div className="card-row" key={h.id}>
              <div className="row-top">
                <div className="date">{formatDate(h.createdAt, locale)}</div>
              </div>
              {h.summary && <div className="summary">{h.summary}</div>}
              <div className="actions">
                <Link className="btn-outline" to={`/report/${h.id}`}>
                  {safeT("history.viewReport", "View report")}
                </Link>
                <button
                  className="btn-ghost"
                  onClick={() => handleDownload(h.id)}
                  disabled={downloadingId === h.id}
                  title={safeT("history.download", "Download PDF")}
                >
                  {downloadingId === h.id
                    ? safeT("common.preparing", "Preparing…")
                    : safeT("history.download", "Download")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Inline styles to match your theme */}
      <style>{`
        :root{
          --bg:#0A192F;
          --card: rgba(17,24,39,0.95);
          --cardBorder: rgba(55,195,182,0.22);
          --ink:#fff;
          --muted:#9aa4b2;
          --muted2:#cbd5e1;
          --accent:#37C3B6;
          --accent2:#2CA59A;
          --pillBg:#0f172a;
          --pillBr:#24324a;
        }
        .page{ background:var(--bg); color:var(--ink); min-height:calc(100vh - 72px); padding:16px; }
        .container{ width:100%; max-width:1100px; margin:0 auto; }

        .shell{ background:var(--card); border:1px solid var(--cardBorder); border-radius:18px; padding:18px; box-shadow:0 18px 40px rgba(0,0,0,.35); }
        .heading{ margin:0 0 10px; font-size:1.5rem; font-weight:800; }
        .error{ color:#fca5a5; background:rgba(220,38,38,.08); border:1px solid rgba(220,38,38,.25); padding:10px 12px; border-radius:10px; text-align:center; margin-bottom:10px; }
        .loading{ color:var(--muted2); }

        .sec-title{ color:#9fcfff; font-size:16px; font-weight:700; margin:10px 0; }
        .cards{ display:grid; gap:12px; }
        .card-row{
          background: linear-gradient(180deg, #0e1526, #0b1120);
          border: 1px solid #1f2937;
          border-radius: 14px;
          padding: 14px;
          box-shadow: 0 12px 28px rgba(0,0,0,.35);
        }
        .row-top{ display:flex; align-items:center; justify-content:space-between; gap:10px; }
        .date{ color:#cbe1ff; font-weight:700; }
        .summary{ color:var(--muted2); margin-top:6px; }

        .actions{ display:flex; gap:10px; margin-top:12px; flex-wrap:wrap; }
        .btn-outline{
          border:1.5px solid var(--accent); color:#fff; background:transparent; text-decoration:none;
          padding:10px 14px; border-radius:12px; font-weight:800;
        }
        .btn-outline:hover{ background:rgba(55,195,182,.12); }
        .btn-ghost{
          border:none; color:#6ea8fe; background:transparent; cursor:pointer; font-weight:700; padding:10px 8px;
        }
        .btn-ghost[disabled]{ opacity:.6; cursor:not-allowed; }

        .empty{
          color:var(--muted2);
          background:#0e1526; border:1px solid #1f2937; border-radius:14px;
          padding:14px; text-align:center;
        }
      `}</style>

      <div className="page">
        <div className="container">
          <div className="shell">
            <h2 className="heading">{safeT("history.title", "History")}</h2>
            {err && <div className="error">{err}</div>}
            {loading ? (
              <div className="loading">{safeT("common.loading", "Loading…")}</div>
            ) : items.length === 0 ? (
              <div className="empty">
                {safeT("history.emptyTitle", "No reports yet. Start by running your first analysis!")}
              </div>
            ) : (
              <>
                <Section title={safeT("history.today", "Today")} list={grouped.today} />
                <Section title={safeT("history.thisWeek", "This week")} list={grouped.thisWeek} />
                <Section title={safeT("history.thisMonth", "This month")} list={grouped.thisMonth} />
                <Section title={safeT("history.older", "Older")} list={grouped.older} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
