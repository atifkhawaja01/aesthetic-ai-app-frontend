import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { uploadPhotos, startAnalysis } from "../api/reports";

// Normalize the /uploads response into {front,left,right} server paths
function normalizeUpload(up: any) {
  const arr = Array.isArray(up?.files) ? up.files : [];
  const findPath = (field: string) =>
    arr.find((f: any) => f?.field === field)?.path ??
    up?.[field] ??
    up?.paths?.[field] ??
    up?.uploaded?.[field] ??
    null;

  return {
    front: findPath("front"),
    left: findPath("left"),
    right: findPath("right"),
  };
}

type Slot = "front" | "left" | "right";

const Scan: React.FC = () => {
  const { t } = useTranslation();
  const nav = useNavigate();

  const [front, setFront] = useState<File | null>(null);
  const [left, setLeft] = useState<File | null>(null);
  const [right, setRight] = useState<File | null>(null);

  const [frontURL, setFrontURL] = useState<string | null>(null);
  const [leftURL, setLeftURL] = useState<string | null>(null);
  const [rightURL, setRightURL] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const [chooserOpen, setChooserOpen] = useState(false);
  const [activeSlot, setActiveSlot] = useState<Slot | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  const galleryInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const setForSlot = (slot: Slot, file: File | null) => {
    const url = file ? URL.createObjectURL(file) : null;
    if (slot === "front") {
      if (frontURL) URL.revokeObjectURL(frontURL);
      setFront(file);
      setFrontURL(url);
    } else if (slot === "left") {
      if (leftURL) URL.revokeObjectURL(leftURL);
      setLeft(file);
      setLeftURL(url);
    } else {
      if (rightURL) URL.revokeObjectURL(rightURL);
      setRight(file);
      setRightURL(url);
    }
  };

  const errMsg = (e: any) =>
    e?.response?.data?.message ||
    e?.response?.data?.error ||
    e?.message ||
    "Upload/analysis failed";

  const isReady = !!(front && left && right);

  function openChooser(slot: Slot) {
    if (loading) return;
    setActiveSlot(slot);
    setChooserOpen(true);
  }

  function onPickFromDevice() {
    if (!activeSlot) return;
    galleryInputRef.current?.click();
  }

  function onTakePhoto() {
    if (!activeSlot) return;
    cameraInputRef.current?.click();
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!activeSlot) return;
    const f = e.target.files?.[0] || null;
    if (f && !f.type.startsWith("image/")) {
      setError("ONLY_IMAGES_ALLOWED");
      e.target.value = "";
      return;
    }
    setForSlot(activeSlot, f);
    e.target.value = "";
    setChooserOpen(false);
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!isReady) {
      setError(t("missingPhotosMsg") || "Please upload all three photos.");
      return;
    }

    setLoading(true);
    setPhase(t("uploadingPhotos") || "Uploading photos…");
    try {
      const up = await uploadPhotos(front!, left!, right!);
      const files = normalizeUpload(up);

      if (!files.front || !files.left || !files.right) {
        throw new Error("Upload succeeded but server did not return file paths.");
      }

      setPhase(t("analyzingFace") || "Analyzing face…");
      const report = await startAnalysis(files);
      if (!report?.id) throw new Error("Analysis did not return a report id.");

      nav(`/report/${report.id}`);
    } catch (e: any) {
      const msg = errMsg(e);
      const isFaceNotFound =
        e?.response?.status === 422 ||
        msg === "NO_FACE_DETECTED" ||
        e?.response?.data?.error === "NO_FACE_DETECTED";

      if (isFaceNotFound) {
        setError(t("noFaceDetected") || "No face detected. Please try clearer photos.");
      } else if (msg === "MISSING_IMAGES") {
        setError(t("missingPhotosMsg") || "Please upload all three photos.");
      } else if (msg === "ONLY_IMAGES_ALLOWED") {
        setError(t("invalidFileMsg") || "Only image files are allowed.");
      } else {
        setError(t("analysisFailedMsg") || "Analysis failed. Please try again.");
      }
    } finally {
      setLoading(false);
      setPhase("");
    }
  };

  return (
    <>
      <style>{`
        :root{
          --bg:#0A192F;
          --bg2:#162947;
          --card: rgba(17,24,39,0.95);
          --cardBorder: rgba(55,195,182,0.25);
          --text:#FFFFFF;
          --muted:#9aa4b2;
          --muted2:rgba(255,255,255,0.85);
          --accent:#37C3B6;
          --accent2:#2CA59A;
        }

        .page{
          background: var(--bg);
          color: var(--text);
          min-height: calc(100vh - 72px);
          padding: 24px 16px 40px;
        }
        @media(max-width:768px){
          .page{ padding-bottom: 80px; } /* extra padding for navbar overlap */
        }
        .container{ width:100%; max-width:1100px; margin:0 auto; }

        /* stack: thumbnails card centered, then CTA card centered */
        .stack{ display:grid; gap:20px; }
        .centered-card{
          background: var(--card);
          border: 1px solid var(--cardBorder);
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 18px 40px rgba(0,0,0,.35);
          width: 100%;
          max-width: 980px;
          margin: 0 auto;
        }

        .head{
          text-align:center;
          margin-bottom: 14px;
        }
        .head h2{ margin:0 0 6px; font-size: clamp(1.5rem, 3vw, 2rem); }
        .head p{ margin:0; color: var(--muted2); opacity:.9; }

        .grid-3{
          display:grid; gap:16px;
          grid-template-columns: repeat(3, 1fr);
          justify-items:center;
        }
        @media (max-width: 800px){
          .grid-3{ grid-template-columns: 1fr; }
        }

        .slot{ display:flex; flex-direction:column; align-items:center; gap:8px; }
        .thumb{
          width: 200px; height: 200px;
          border-radius: 16px; overflow:hidden;
          border: 2px solid rgba(55,195,182,0.25);
          background: #0f1430;
          position: relative;
        }
        @media (max-width: 480px){
          .thumb{ width: 170px; height: 170px; }
        }

        /* Ensure placeholder thumbnails fill the box nicely (contain) */
        .thumb .placeholder, .thumb img.preview{
          position:absolute; inset:0; width:100%; height:100%;
        }
        .thumb .placeholder img{
          width:100%; height:100%; object-fit: contain; opacity:.95;
        }
        .thumb img.preview{
          object-fit: cover; /* user images should fill */
        }

        .slot-actions{
          position:absolute; bottom:8px; left:50%; transform:translateX(-50%);
          display:flex; gap:8px; align-items:center; justify-content:center;
          background: rgba(16,23,43,.78); border-radius:999px;
          padding: 6px 10px; border: 1px solid rgba(55,195,182,.25);
        }
        .chip{
          border:none; border-radius:999px;
          padding: 8px 14px;
          background: rgba(255,255,255,.08); color:#fff;
          font-weight:700; cursor:pointer;
          font-size: 13px; line-height: 1.15;
          max-width: 140px;
          white-space: normal;
          text-align:center;
        }
        .chip:hover{ filter:brightness(1.1); }

        .slot-label{
          color: var(--text); font-weight:800; text-align:center;
        }

        .cta{
          text-align:center;
        }
        .btn-primary{
          width: 100%;
          max-width: 680px;
          border: none; color:#fff; font-weight:800;
          padding: 16px 18px; border-radius: 12px; cursor:pointer;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          box-shadow: 0 8px 28px rgba(55,195,182,0.35);
          font-size: 1.05rem;
          margin: 8px auto 0;
        }
        .btn-primary:disabled{ opacity:.6; cursor:not-allowed; }
        .btn-primary:not(:disabled):hover{ filter:brightness(1.05); }

        .tips{ color: var(--muted); font-size:14px; margin-top:8px; }

        .alert{
          color:#fca5a5; background: rgba(220,38,38,0.08);
          border:1px solid rgba(220,38,38,0.25);
          padding:10px 12px; border-radius:10px;
          text-align:center; margin: 10px auto 0; max-width: 680px;
        }

        /* chooser modal */
        .modal-backdrop{
          position: fixed; inset: 0; background: rgba(0,0,0,.55);
          display:flex; align-items:center; justify-content:center;
          z-index: 60;
        }
        .modal{
          width: min(460px, 92%);
          background: #0F1A36;
          border: 1px solid rgba(55,195,182,.25);
          border-radius: 16px;
          padding: 18px 16px 12px;
          box-shadow: 0 22px 44px rgba(0,0,0,.45);
          color: #e8eeff;
        }
        .modal h4{ margin:0 0 12px; font-size:1.25rem; text-align:center; }
        .modal-actions{ display:grid; gap:10px; margin-bottom:10px; }
        .modal-btn{
          height:48px; border-radius:10px; border:1px solid rgba(55,195,182,.25);
          background:rgba(255,255,255,.04); color:#e8eeff; font-weight:700; cursor:pointer;
        }
        .modal-btn:hover{ filter:brightness(1.05); }
        .modal-cancel{ text-align:right; }
        .modal-cancel button{
          background:transparent; border:none; color:#9fb0d0; font-size:15px; cursor:pointer;
        }

        /* scanning overlay */
        .overlay{
          position: fixed; inset: 0; display:flex; align-items:center; justify-content:center;
          background: rgba(0,0,0,.6); z-index: 70;
        }
        .overlay-card{
          background:#0F1A36; border:1px solid rgba(55,195,182,.25);
          color:#e8eeff; padding:18px; border-radius:14px; min-width:260px; text-align:center;
        }
        .spinner{
          width:30px; height:30px; border-radius:50%;
          border:3px solid rgba(255,255,255,.25); border-top-color: var(--accent);
          margin:0 auto; animation: spin .9s linear infinite;
        }
        @keyframes spin{ to { transform: rotate(360deg); } }
      `}</style>

      {/* Hidden inputs */}
      <input
        ref={galleryInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <div className="page">
        <div className="container">
          <div className="stack">
            {/* 1) Thumbnails card (centered) */}
            <div className="centered-card">
              <div className="head">
                <h2>{t("upload3Photos") || "Upload 3 photos"}</h2>
                <p>{t("cameraTips") || "Face camera straight on, in good light."}</p>
              </div>

              <div className="grid-3">
                {(["front", "left", "right"] as Slot[]).map((slot) => {
                  const url =
                    slot === "front" ? frontURL : slot === "left" ? leftURL : rightURL;
                  const placeholder = `/assets/scan/${slot}.png`;
                  return (
                    <div className="slot" key={slot}>
                      <div className="thumb" onClick={() => openChooser(slot)}>
                        {url ? (
                          <img className="preview" src={url} alt={`${slot} preview`} />
                        ) : (
                          <div className="placeholder">
                            <img src={placeholder} alt={`${slot} placeholder`} />
                          </div>
                        )}
                        <div className="slot-actions">
                          {isMobile && (
                            <button
                              type="button"
                              className="chip"
                              title={t("camera") || "Camera"}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveSlot(slot);
                                onTakePhoto();
                              }}
                            >
                              📷 {t("camera") || "Camera"}
                            </button>
                          )}
                          <button
                            type="button"
                            className="chip"
                            title={t("uploadFromGallery") || "Upload from device"}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveSlot(slot);
                              onPickFromDevice();
                            }}
                          >
                            ⬆️ {t("uploadFromGallery") || "Upload from device"}
                          </button>
                        </div>
                      </div>
                      <div className="slot-label">
                        {slot === "front"
                          ? t("frontFace") || "Front"
                          : slot === "left"
                          ? t("leftProfile") || "Left"
                          : t("rightProfile") || "Right"}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2) CTA card */}
            <form className="centered-card cta" onSubmit={submit}>
              {error && <div className="alert">{error}</div>}
              <button className="btn-primary" disabled={!isReady || loading}>
                {loading
                  ? t("pleaseWait") || "Please wait…"
                  : t("startAnalysis") || "Start analysis"}
              </button>
              <p className="tips">
                {t("privacyNote") ||
                  "Your photos are processed securely and used only to generate your report."}
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Chooser modal */}
      {chooserOpen && (
        <div className="modal-backdrop" onClick={() => setChooserOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h4>{t("selectSource") || "Select source"}</h4>
            <div className="modal-actions">
              {isMobile && (
                <button className="modal-btn" onClick={onTakePhoto}>
                  📷 {t("camera") || "Camera"}
                </button>
              )}
              <button className="modal-btn" onClick={onPickFromDevice}>
                ⬆️ {t("uploadFromGallery") || "Upload from device"}
              </button>
            </div>
            <div className="modal-cancel">
              <button onClick={() => setChooserOpen(false)}>
                {t("cancel") || "Cancel"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scanning/Uploading overlay */}
      {loading && (
        <div className="overlay">
          <div className="overlay-card">
            <div className="spinner" />
            <div style={{ marginTop: 10 }}>{phase || t("working") || "Working…"}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Scan;
