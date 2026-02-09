import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getProfile, updateProfile } from "../api/auth";
import { useTranslation } from "react-i18next";

type User = {
  id?: string;
  email?: string;
  name?: string;
  phone?: string;
};

const PHOTO_KEY = "profile.photo.dataurl";
const NOTIF_KEY = "profile.pref.notifications";
const LANG_KEY = "lang";

const Profile: React.FC = () => {
  const { auth, setAuth, logout } = useAuth() as any;
  const { t, i18n } = useTranslation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [logoutMsg, setLogoutMsg] = useState<string | null>(null);

  // avatar
  const [photo, setPhoto] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  // prefs
  const [notif, setNotif] = useState<boolean>(() => {
    const raw = typeof window !== "undefined" ? localStorage.getItem(NOTIF_KEY) : null;
    return raw ? raw === "1" : true;
  });

  // language modal
  const [langOpen, setLangOpen] = useState(false);
  
  // contact modal
  const [contactOpen, setContactOpen] = useState(false);

  // Ensure UI uses persisted language on first render
  useEffect(() => {
    const saved = (typeof window !== "undefined"
      ? localStorage.getItem(LANG_KEY)
      : null) as "en" | "el" | null;
    if (saved && i18n.language !== saved) {
      i18n.changeLanguage(saved);
    }
  }, [i18n]);

  /* -------------------- load profile + locally saved avatar ------------------- */
  useEffect(() => {
    setEmail(auth?.user?.email || "");
    if (!auth?.user?.id) return;

    getProfile(auth.user.id)
      .then((u: User) => {
        setName(u?.name || "");
        setPhone(u?.phone || "");
        setAuth({ token: auth.token, user: { ...auth.user, ...u } });
      })
      .catch(() => {
        /* ignore */
      });

    const p = typeof window !== "undefined" ? localStorage.getItem(PHOTO_KEY) : null;
    if (p) setPhoto(p);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth?.user?.id]);

  /* --------------------------------- actions -------------------------------- */

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth?.user?.id) return;
    setSaving(true);
    setMsg(null);
    try {
      const u = await updateProfile(auth.user.id, { name, phone });
      setAuth({ token: auth.token, user: { ...auth.user, ...u } });
      setMsg(t("profile.saved", "Saved"));
    } catch (e: any) {
      setMsg(t("profile.updateFailed", "Update failed"));
    } finally {
      setSaving(false);
      window.setTimeout(() => setMsg(null), 2500);
    }
  };

  // change language and persist
  const applyLang = async (code: "en" | "el") => {
    await i18n.changeLanguage(code);
    localStorage.setItem(LANG_KEY, code);
    setLangOpen(false);
  };

  // open file picker
  const pickPhoto = () => fileRef.current?.click();

  // compress to ~300x300 and store as dataURL (local-only; not sent to API)
  const handlePicked = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    e.target.value = "";
    if (!f) return;
    if (!f.type.startsWith("image/")) return;

    const dataUrl = await fileToDataURL(f);
    const resized = await resizeSquare(dataUrl, 320); // ~300px, jpeg
    localStorage.setItem(PHOTO_KEY, resized);
    setPhoto(resized);
  };

  const toggleNotif = (v: boolean) => {
    setNotif(v);
    localStorage.setItem(NOTIF_KEY, v ? "1" : "0");
  };

  // robust logout handler
  const handleLogout = async () => {
    try {
      setLogoutMsg(null);
      // some auth providers expose logout as sync; some async
      if (typeof logout === "function") {
        const maybePromise = logout();
        if (maybePromise && typeof (maybePromise as Promise<void>).then === "function") {
          await (maybePromise as Promise<void>);
        }
      } else {
        // fallback: clear minimal auth state if logout not provided
        setAuth(null);
        try {
          localStorage.removeItem("token");
        } catch {
          /* ignore */
        }
      }
    } catch (err) {
      setLogoutMsg(t("auth.logoutFailed", "Logout failed. Please try again."));
      window.setTimeout(() => setLogoutMsg(null), 3000);
    }
  };

  /* --------------------------------- ui ------------------------------------- */

  const langLabel =
    i18n.language?.toLowerCase().startsWith("el")
      ? t("lang.el", "Ελληνικά")
      : t("lang.en", "English");

  return (
    <>
      {/* Inline styles – same theme as your other screens */}
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
        .page{ background:var(--bg); color:var(--ink); min-height:calc(100vh - 72px); padding:16px; display:flex; flex-direction:column; }
        .container{ width:100%; max-width:1100px; margin:0 auto; flex:1; }

        .grid2{
          display:grid; gap:16px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px){
          .grid2{ grid-template-columns: 0.9fr 1.1fr; align-items:start; }
        }

        .cardx{
          background:var(--card);
          border:1px solid var(--cardBorder);
          border-radius:18px;
          padding:18px;
          box-shadow:0 18px 40px rgba(0,0,0,.35);
        }

        .header{
          display:flex; flex-direction:column; align-items:center; padding:8px 8px 18px;
          background: linear-gradient(180deg, #0b1020, #0e1526);
          border-radius:14px;
        }
        .title{ font-size:1.4rem; font-weight:800; margin:4px 0 12px; }

        .avatar-wrap{
          position:relative; width:132px; height:132px; margin-bottom:12px;
        }
        .avatar{
          width:132px; height:132px; border-radius:50%;
          border:3px solid var(--accent);
          object-fit:cover; background:#0e1526;
        }
        .cam-btn{
          position:absolute; right:0; bottom:0; border:none; cursor:pointer;
          background:linear-gradient(135deg, var(--accent), var(--accent2));
          color:#fff; width:40px; height:40px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          box-shadow:0 8px 22px rgba(55,195,182,.35);
        }

        .uname{ color:#cfe3ff; font-size:14px; margin-top:2px; }

        .row{ display:flex; gap:10px; flex-wrap:wrap; }

        .field{ display:flex; flex-direction:column; gap:6px; }
        .label{ color:var(--muted); font-size:14px; }
        .input{
          background:#0f172a; color:var(--ink);
          border:1px solid #24324a; border-radius:12px; padding:12px;
          outline:none;
        }
        .input:focus{ border-color:var(--accent); box-shadow:0 0 0 2px rgba(55,195,182,.15); }

        .btn-primary{
          border:none; color:#fff; font-weight:800; padding:12px 16px; border-radius:12px; cursor:pointer;
          background:linear-gradient(135deg, var(--accent), var(--accent2));
          box-shadow:0 8px 28px rgba(55,195,182,.35);
        }
        .btn-primary:disabled{ opacity:.6; cursor:not-allowed; }

        .pill{
          background:var(--pillBg); border:1px solid var(--pillBr); border-radius:999px;
          padding:6px 10px; font-size:14px;
        }

        .alert{
          color:#fca5a5; background:rgba(220,38,38,.08); border:1px solid rgba(220,38,38,.25);
          padding:10px 12px; border-radius:10px; text-align:center;
        }

        /* switch */
        .switch{
          --w: 46px; --h: 26px;
          width:var(--w); height:var(--h); border-radius:999px;
          background:#24324a; position:relative; cursor:pointer; border:1px solid #2b3b5a;
        }
        .switch.kn{
          background: linear-gradient(135deg, rgba(55,195,182,.35), rgba(44,165,154,.35));
        }
        .thumb{
          position:absolute; top:2px; left:2px; width:22px; height:22px; border-radius:50%;
          background:#cbd5e1; transition:left .18s ease;
        }
        .kn .thumb{ left: calc(100% - 24px); background:#fff; }

        /* modal */
        .modal-backdrop{ position:fixed; inset:0; background:rgba(0,0,0,.55); display:flex; align-items:center; justify-content:center; z-index:60; }
        .modal{
          width:min(420px, 92%); background:#0F1A36; border:1px solid var(--cardBorder);
          border-radius:16px; padding:16px; color:#e8eeff; box-shadow:0 22px 44px rgba(0,0,0,.45);
        }
        .modal h4{ margin:0 0 10px; font-size:1.15rem; text-align:center; }
        .modal-actions{ display:grid; gap:10px; }
        .modal-btn{
          height:44px; border-radius:10px; border:1px solid rgba(55,195,182,.25);
          background:rgba(255,255,255,.04); color:#e8eeff; font-weight:700; cursor:pointer;
        }
        .modal-btn:hover{ filter:brightness(1.05); }
        .modal-cancel{ margin-top:6px; text-align:right; }
        .modal-cancel button{ background:transparent; border:none; color:#9fb0d0; cursor:pointer; }

        .section-title{ font-weight:800; margin:6px 0 10px; }
        .divider{ height:1px; background:#1f2937; margin:12px 0; }

        /* logout button container */
        .logout-wrap{
          margin-top:24px;
          text-align:center;
          position:relative;
          z-index: 2; /* ensure it's above any lingering overlays */
        }
        .logout-btn{
          background:#dc2626;
          background:linear-gradient(135deg,#ef4444,#dc2626);
          color:#fff;
          border:none;
          padding:12px 20px;
          border-radius:12px;
          font-weight:700;
          cursor:pointer;
          box-shadow:0 8px 20px rgba(220,38,38,.35);
        }
        .logout-btn:hover{ filter:brightness(1.05); }
        .logout-space{ height:70px; } /* spacing so it doesn't hide under navbar */

        /* Contact Us Section Styles */
        .contact-section {
          margin-top: 20px;
          text-align: center;
        }
        
        .contact-btn {
          border: none;
          color: #fff;
          font-weight: 700;
          padding: 14px 24px;
          border-radius: 14px;
          cursor: pointer;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 8px 28px rgba(102, 126, 234, 0.35);
          width: 100%;
          max-width: 280px;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
        }
        
        .contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(102, 126, 234, 0.45);
        }
        
        /* Contact Modal Styles */
        .contact-modal {
          width: min(500px, 95%);
          background: #0F1A36;
          border: 1px solid var(--cardBorder);
          border-radius: 20px;
          padding: 24px;
          color: #e8eeff;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }
        
        .contact-header {
          text-align: center;
          margin-bottom: 24px;
        }
        
        .contact-title {
          font-size: 1.4rem;
          font-weight: 800;
          margin: 0 0 8px 0;
          background: linear-gradient(135deg, #37C3B6, #667eea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .contact-subtitle {
          color: var(--muted);
          font-size: 0.95rem;
        }
        
        .contact-grid {
          display: grid;
          gap: 16px;
          margin-bottom: 20px;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(55, 195, 182, 0.15);
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .contact-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(55, 195, 182, 0.3);
          transform: translateX(4px);
        }
        
        .contact-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          flex-shrink: 0;
        }
        
        .contact-content {
          flex: 1;
          text-align: left;
        }
        
        .contact-label {
          font-size: 0.85rem;
          color: var(--muted);
          margin-bottom: 4px;
        }
        
        .contact-value {
          font-weight: 600;
          font-size: 1rem;
          color: #fff;
        }
        
        .contact-link {
          color: var(--accent);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .contact-link:hover {
          color: #fff;
          text-decoration: underline;
        }
        
        .social-links {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 20px;
        }
        
        .social-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          text-decoration: none;
          font-size: 1.3rem;
          transition: all 0.3s ease;
        }
        
        .social-btn:hover {
          background: linear-gradient(135deg, #667eea, #764ba2);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }
        
        .website-btn {
          width: 100%;
          margin-top: 16px;
          padding: 14px;
          border-radius: 12px;
          background: linear-gradient(135deg, #37C3B6, #2CA59A);
          color: #fff;
          text-decoration: none;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
        }
        
        .website-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(55, 195, 182, 0.4);
        }

        @media (max-width: 480px) {
          .contact-modal {
            padding: 20px 16px;
          }
          
          .contact-item {
            padding: 14px;
            gap: 12px;
          }
          
          .contact-icon {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }
          
/* ensure the image sits nicely inside the round button */
.social-btn img {
  width: 24px;
  height: 24px;
  object-fit: contain;
  display: block;
}

      `}</style>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handlePicked}
      />

      <div className="page">
        <div className="container">
          <div className="grid2">
            {/* LEFT: Avatar + basic info */}
            <div className="cardx">
              <div className="header">
                <div className="title">
                  {t("profile.title", "My Profile")}
                </div>
                <div className="avatar-wrap">
                  <img
                    className="avatar"
                    src={photo || "/assets/avatar.png"}
                    alt={t("profile.avatarAlt", "Avatar")}
                  />
                  <button
                    className="cam-btn"
                    type="button"
                    onClick={pickPhoto}
                    aria-label={t("profile.changePhoto", "Change photo")}
                    title={t("profile.changePhoto", "Change photo")}
                  >
                    📷
                  </button>
                </div>
                <div style={{ fontWeight: 800, fontSize: 18 }}>
                  {name || t("profile.yourName", "Your name")}
                </div>
                <div className="uname">
                  {email ? `@${email.split("@")[0]}` : ""}
                </div>
              </div>

              <div style={{ marginTop: 12 }} className="row">
                <div className="pill">
                  {t("profile.email", "Email")}: {email || "-"}
                </div>
                <div className="pill">
                  {t("profile.language", "Language")}: {langLabel}
                </div>
                <div className="pill">
                  {t("profile.notifications", "Notifications")}:{" "}
                  {notif ? t("common.on", "On") : t("common.off", "Off")}
                </div>
              </div>

              {/* Contact Us Section */}
              <div className="contact-section">
                <button 
                  className="contact-btn"
                  onClick={() => setContactOpen(true)}
                >
                  📞 {t("profile.contactUs", "Contact Us")}
                </button>
              </div>

              <p style={{ color: "var(--muted)", marginTop: 12 }}>
                {t(
                  "profile.photoLocalNote",
                  "Your profile photo is only stored on this device for privacy and is not uploaded to our servers."
                )}
              </p>
            </div>

            {/* RIGHT: Form + preferences */}
            <form className="cardx" onSubmit={save}>
              <div className="section-title">
                {t("profile.accountDetails", "Account details")}
              </div>
              <div className="field">
                <label className="label">
                  {t("profile.fullName", "Full name")}
                </label>
                <input
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("profile.fullNamePh", "Enter your full name")}
                />
              </div>

              <div className="field" style={{ marginTop: 10 }}>
                <label className="label">
                  {t("profile.contactNumber", "Contact number")}
                </label>
                <input
                  className="input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t("profile.contactNumberPh", "Enter your number")}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  marginTop: 14,
                }}
              >
                <button className="btn-primary" disabled={saving} type="submit">
                  {saving
                    ? t("profile.saving", "Saving…")
                    : t("profile.saveChanges", "Save changes")}
                </button>
                {msg && (
                  <span className="pill" style={{ borderRadius: 8 }}>
                    {msg}
                  </span>
                )}
              </div>

              <div className="divider" />

              <div className="section-title">
                {t("profile.preferences", "Preferences")}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <div>
                  <div style={{ fontWeight: 700 }}>
                    {t("profile.language", "Language")}
                  </div>
                <div style={{ color: "var(--muted)" }}>{langLabel}</div>
                </div>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => setLangOpen(true)}
                  style={{ padding: "10px 14px" }}
                >
                  {t("common.change", "Change")}
                </button>
              </div>

              <div className="divider" />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <div>
                  <div style={{ fontWeight: 700 }}>
                    {t("profile.notifications", "Notifications")}
                  </div>
                  <div style={{ color: "var(--muted)" }}>
                    {t(
                      "profile.notificationsDesc",
                      "Email reminders and important updates"
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  className={`switch ${notif ? "kn" : ""}`}
                  onClick={() => toggleNotif(!notif)}
                  aria-pressed={notif}
                  aria-label={t("profile.toggleNotifications", "Toggle notifications")}
                >
                  <span className="thumb" />
                </button>
              </div>
            </form>
          </div>

          {/* Logout button */}
          <div className="logout-wrap">
            <button
              type="button"
              className="logout-btn"
              onClick={handleLogout}
              aria-label={t("auth.logout", "Log out")}
            >
              {t("auth.logout", "Log out")}
            </button>
            {logoutMsg && (
              <div style={{ marginTop: 10 }} className="alert">
                {logoutMsg}
              </div>
            )}
          </div>

          {/* Add space at bottom so button not hidden by navbar */}
          <div className="logout-space" />
        </div>
      </div>

      {/* Language modal */}
      {langOpen && (
        <div className="modal-backdrop" onClick={() => setLangOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h4>{t("profile.selectLanguage", "Select language")}</h4>
            <div className="modal-actions">
              <button className="modal-btn" onClick={() => applyLang("en")}>
                {t("lang.en", "English")}
              </button>
              <button className="modal-btn" onClick={() => applyLang("el")}>
                {t("lang.el", "Ελληνικά")}
              </button>
            </div>
            <div className="modal-cancel">
              <button onClick={() => setLangOpen(false)}>
                {t("common.close", "Close")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Us Modal */}
      {contactOpen && (
        <div className="modal-backdrop" onClick={() => setContactOpen(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <div className="contact-header">
              <h3 className="contact-title">
                {t("profile.contactUs", "Contact Us")}
              </h3>
              <p className="contact-subtitle">
                {t("profile.contactSubtitle", "Get in touch with Lakidis Aesthetic Clinic")}
              </p>
            </div>
            
            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-content">
                  <div className="contact-label">
                    {t("profile.primaryPhone", "Primary Phone")}
                  </div>
                  <div className="contact-value">
                    <a href="tel:2317004222" className="contact-link">
                      2317 004 222
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-content">
                  <div className="contact-label">
                    {t("profile.mobilePhone", "Mobile Phone")}
                  </div>
                  <div className="contact-value">
                    <a href="tel:6944275175" className="contact-link">
                      6944 275 175
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-content">
                  <div className="contact-label">
                    {t("profile.emailAddress", "Email Address")}
                  </div>
                  <div className="contact-value">
                    <a href="mailto:alakidis@gmail.com" className="contact-link">
                      alakidis@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <a 
              href="https://lakidisaesthetic.gr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="website-btn"
            >
              🌐 {t("profile.visitWebsite", "Visit Our Website")}
            </a>
            
<div className="social-links">
  <a
    href="https://www.instagram.com/lakidis/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-btn"
    title="Instagram"
  >
    <img
      src={`${import.meta.env.BASE_URL}assets/insta-ico.png`}
      alt="Instagram"
      style={{ width: "26px", height: "26px", objectFit: "contain" }}
    />
  </a>

  <a
    href="https://www.facebook.com/LA.AestheticMed/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-btn"
    title="Facebook"
  >
    <img
      src={`${import.meta.env.BASE_URL}assets/facebook-icon.png`}
      alt="Facebook"
      style={{ width: "26px", height: "26px", objectFit: "contain" }}
    />
  </a>
</div>

            
            <div className="modal-cancel">
              <button onClick={() => setContactOpen(false)}>
                {t("common.close", "Close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;

/* ------------------------- helpers: image utilities ------------------------ */
async function fileToDataURL(file: File): Promise<string> {
  await file.arrayBuffer(); // hint for Safari
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result as string);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

function resizeSquare(src: string, size = 320): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;
      // cover-fit crop
      const ratio = Math.max(size / img.width, size / img.height);
      const w = img.width * ratio;
      const h = img.height * ratio;
      const x = (size - w) / 2;
      const y = (size - h) / 2;
      ctx.drawImage(img, x, y, w, h);
      resolve(canvas.toDataURL("image/jpeg", 0.85));
    };
    img.crossOrigin = "anonymous";
    img.src = src;
  });
}