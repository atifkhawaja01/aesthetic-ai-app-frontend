import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReport } from "../api/reports";

/* ----------------------------- Types / helpers ---------------------------- */
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
  interface Window {
    pdfMake?: any;
  }
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

function escapeHTML(s: any) {
  return String(s ?? "").replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c] as string));
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

    // pdfmake requires both core and the vfs fonts file
    add("https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js")
      .then(() =>
        add("https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js")
      )
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
    try {
      const data = await toDataURL(u);
      return data;
    } catch {}
  }
  return null;
}

/* ------------------------------- Component -------------------------------- */
const Report: React.FC = () => {
  const { id } = useParams();
  const [report, setReport] = useState<ReportType | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    if (!id) return;
    setErr(null);
    fetchReport(id)
      .then(setReport)
      .catch((e) => setErr(String(e?.message || e)));
  }, [id]);

  const dateText = useMemo(() => {
    if (!report?.createdAt) return "";
    try {
      return new Date(report.createdAt).toLocaleString();
    } catch {
      return String(report.createdAt);
    }
  }, [report?.createdAt]);

  /* -------------------------- Build pdfmake docDef ------------------------- */
  function buildDocDefinition(r: ReportType, dateStr: string, logoData?: string | null) {
    const m = r.metrics || {};
    const summary = r.summary || buildFallbackSummary(r);
    const aiReport = r.aiReportGreek || "-";
    const details = Array.isArray(r.details) ? r.details.slice(0, 5) : [];
    const sugg = Array.isArray(r.suggestions) ? r.suggestions : [];
    const disclaimer =
      r.disclaimer ||
      "This AI analysis is informational and does not replace a consultation with a qualified clinician.";

    // Small helper to render the "pills" as a light table row
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

    const docDefinition = {
      pageSize: "A4" as const,
      pageMargins: [40, 60, 40, 60] as const,
      defaultStyle: { fontSize: 10, color: "#111" },
      styles: {
        h1: { fontSize: 20, bold: true, color: "#0b1020", margin: [0, 12, 0, 8] },
        h2: { fontSize: 13, bold: true, color: "#19a3a3", margin: [0, 10, 0, 6] },
        h3: { fontSize: 14, bold: true, color: "#0b1020", margin: [0, 8, 0, 6] },
        muted: { color: "#334155" },
        pillCell: { fillColor: "#f7fafc" },
        ctaBox: { fillColor: "#f0f9ff", color: "#0369a1" },
        ctaTitle: { fontSize: 12, bold: true, color: "#0369a1", margin: [0, 0, 0, 4] },
      },
      header: (currentPage: number) => {
        // first page header with teal background + logo
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
          layout: {
            fillColor: () => "#19a3a3",
            hLineWidth: () => 0,
            vLineWidth: () => 0,
          },
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

{ text: "Patient Report", style: "h2" },
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

        // Call-to-Action Section - Added right after the report ends
        { text: "🚀 Your Next Steps", style: "h3", margin: [0, 20, 0, 8] },
        
        {
          table: {
            widths: ["*"],
            body: [
              [
                {
                  stack: [
                    { text: "📧 Share Your Report", style: "ctaTitle" },
                    { text: "Email your report to our specialists for personalized feedback:", margin: [0, 2, 0, 4] },
                    { text: "alakidis@gmail.com", bold: true, color: "#19a3a3", margin: [0, 0, 0, 8] },
                    
                    { text: "📞 Quick Consultation", style: "ctaTitle", margin: [0, 8, 0, 0] },
                    { text: "Prefer to speak directly? Call us at:", margin: [0, 2, 0, 4] },
                    { text: "+30 231 700 4222", bold: true, color: "#19a3a3", margin: [0, 0, 0, 8] },
                    
                    { text: "🎯 Book Your Appointment", style: "ctaTitle", margin: [0, 8, 0, 0] },
                    { text: "Ready to take the next step? Schedule your consultation:", margin: [0, 2, 0, 4] },
                    { 
                      text: "👉 Book Now: https://lakidisaesthetics.setmore.com/?lang=Greek", 
                      bold: true, 
                      color: "#dc2626",
                      link: "https://lakidisaesthetics.setmore.com/?lang=Greek",
                      margin: [0, 0, 0, 4]
                    },
                  ],
                  margin: [12, 8],
                }
              ]
            ]
          },
          layout: {
            fillColor: () => "#f0f9ff",
            hLineWidth: () => 1,
            vLineWidth: () => 1,
            hLineColor: () => "#bae6fd",
            vLineColor: () => "#bae6fd",
          },
          margin: [0, 8, 0, 0]
        },

        // Final encouragement
        {
          text: "Your journey to better skin starts here! We look forward to helping you achieve your aesthetic goals.",
          alignment: "center",
          italics: true,
          color: "#475569",
          margin: [0, 16, 0, 0]
        }
      ],
    };

    return docDefinition;
  }

  /* --------------------------- Direct PDF download ------------------------ */
  async function downloadPDF() {
    if (!report) return;
    try {
      setDownloading(true);
      await ensurePdfMake();            // load library + fonts
      const logoBase64 = await loadLogoBase64().catch(() => null);
      const docDef = buildDocDefinition(report, dateText || "", logoBase64);
      window.pdfMake.createPdf(docDef).download(`report_${report.id}.pdf`);
    } catch (e: any) {
      alert(e?.message || "PDF download failed.");
    } finally {
      setDownloading(false);
    }
  }

  if (err)
    return (
      <div className="card" style={{ color: "#fecaca" }}>
        {err}
      </div>
    );
  if (!report) return <div className="card">Loading…</div>;

  const m = report.metrics || {};

  return (
    <>
      {/* keep your theme + prominent download */}
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
        .report-card{
          background: var(--card);
          border: 1px solid var(--cardBorder);
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 18px 40px rgba(0,0,0,.35);
          color: var(--ink);
        }
        .report-header{
          display:flex; align-items:center; justify-content:space-between; gap:10px;
          margin-bottom: 10px;
        }
        .download-btn{
          border: none;
          display: inline-flex; align-items: center; gap: 10px;
          padding: 12px 16px; border-radius: 12px; cursor: pointer;
          font-weight: 800; letter-spacing: .2px; font-size: 14px;
          color: #fff;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          box-shadow: 0 8px 28px rgba(55,195,182,0.35);
        }
        .download-btn:hover{ filter: brightness(1.05); }
        .download-btn[disabled]{ opacity:.7; cursor: not-allowed; }
        .download-btn .ico{ font-size: 18px; }
        .report-section{ margin: 12px 0 6px; }
        .report-section h3{ margin: 0 0 6px; }
        .muted{ color: var(--muted2); }
        .small{ font-size: 12px; opacity: .85; }
        .prewrap{ white-space: pre-wrap; }
        .pill-row{ display:flex; gap:8px; flex-wrap: wrap; }
        .pill{
          background: var(--pillBg); border: 1px solid var(--pillBr);
          padding: 6px 10px; border-radius: 999px; font-size: 14px;
        }
        .pill-key{ color: var(--muted); font-weight: 600; margin-right: 4px; }
        .bullets{ margin: 0; padding-left: 18px; }
        .suggest-grid{
          display: grid; gap: 10px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 780px){
          .suggest-grid{ grid-template-columns: repeat(2, 1fr); }
        }
        .suggest-card{
          background: #0f172a; border: 1px solid #24324a; border-radius: 12px; padding: 12px;
        }
        .suggest-title{ font-weight: 800; }
        .suggest-sub{ color: var(--muted2); margin-top: 4px; }
        .cta-row{ margin-top: 14px; display:flex; }
        .cta{
          text-decoration: none; text-align: center;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          color: #fff; padding: 12px 16px; border-radius: 12px; font-weight: 800;
          box-shadow: 0 8px 28px rgba(55,195,182,0.35);
        }
        .cta.wide{ width: 100%; }
        .warn{
          background: rgba(220,38,38,0.06);
          border: 1px solid rgba(220,38,38,0.25);
          border-radius: 12px;
          padding: 10px 12px;
          color: #fecaca;
        }
        /* ✅ Mobile only safe space for bottom nav */
        @media (max-width: 768px) {
          .report-card {
            padding-bottom: 80px; /* space so CTA/book button stays above bottom nav */
          }
        }
      `}</style>

      <div className="grid">
        <div className="report-card">
          {/* Header */}
          <div className="report-header">
            <h2 style={{margin:0}}>📖 Report</h2>
            <button
              className="download-btn"
              onClick={downloadPDF}
              title="Download PDF"
              disabled={downloading}
            >
              <span className="ico">⬇️</span>
              <span>{downloading ? "Preparing…" : "Download PDF"}</span>
            </button>
          </div>

          {/* Summary */}
          <div className="report-section">
            <h3>📖 Summary</h3>
            {report.summary ? (
              <p className="muted">{report.summary}</p>
            ) : (
              <p className="muted">{buildFallbackSummary(report)}</p>
            )}
            {dateText && <p className="muted small">{dateText}</p>}
          </div>

          {/* Key metrics */}
          <div className="report-section">
            <h3>📊 Key metrics</h3>
            <div className="pill-row">
              <div className="pill">
                <span className="pill-key">Age estimate:</span>{" "}
                {Number.isFinite(m.ageEstimate!)
                  ? `${m.ageEstimate} ${
                      Number.isFinite(m.ageLow!) && Number.isFinite(m.ageHigh!)
                        ? `(${m.ageLow}–${m.ageHigh})`
                        : ""
                    }`
                  : "—"}
              </div>
              <div className="pill">
                <span className="pill-key">Face asymmetry:</span>{" "}
                {Number.isFinite(m.symmetryMm!)
                  ? `${m.symmetryMm!.toFixed(1)} mm`
                  : "—"}
                {Number.isFinite(m.symmetryPctIPD!) &&
                  ` (${(m.symmetryPctIPD! * 100).toFixed(1)}% IPD)`}
                {m.symmetryBucket ? `, ${m.symmetryBucket}` : ""}
              </div>
              <div className="pill">
                <span className="pill-key">Dominant expression:</span>{" "}
                {m.emotion || "—"}
              </div>
            </div>
          </div>

          {/* AI Report */}
          {report.aiReportGreek && (
            <div className="report-section">
              <h3>🤖 AI Report</h3>
              <p className="muted prewrap">{report.aiReportGreek}</p>
            </div>
          )}

          {/* Details (top features) */}
          {!!report.details?.length && (
            <div className="report-section">
              <h3>🔎 Details</h3>
              <ul className="bullets">
                {report.details.slice(0, 5).map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Suggested Treatments */}
          {!!report.suggestions?.length && (
            <div className="report-section">
              <h3>💡 Suggested Treatments</h3>
              <div className="suggest-grid">
                {report.suggestions.map((s, i) => (
                  <div className="suggest-card" key={`${s.id || i}-${s.name}`}>
                    <div className="suggest-title">{s.name}</div>
                    {s.description && (
                      <div className="suggest-sub">{s.description}</div>
                    )}
                    <div className="pill-row" style={{marginTop:8}}>
                      <div className="pill">
                        <span className="pill-key">Duration:</span>{" "}
                        {durationTxt(s.durationMin)}
                      </div>
                      <div className="pill">
                        <span className="pill-key">Cost:</span>{" "}
                        {priceRange(s.priceMin, s.priceMax)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Disclaimer + CTA */}
          {report.disclaimer && (
            <>
              <div className="report-section warn">
                <strong>⚠️ Disclaimer: </strong>
                Results are for informational purposes only and not a medical
                diagnosis.
                <p className="muted" style={{ marginTop: 8 }}>
                  {report.disclaimer}
                </p>
              </div>

              <div className="cta-row">
                <a className="cta wide" href="https://lakidisaesthetics.setmore.com/" target="_blank" rel="noopener noreferrer">
                  📅 BOOK APPOINTMENT
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Report;