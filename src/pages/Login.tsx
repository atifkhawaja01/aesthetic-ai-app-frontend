import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { login as loginApi } from "../api/auth";
import { useAuth } from "../context/AuthContext";

const Login: React.FC = () => {
  const { t, i18n } = useTranslation();
  const nav = useNavigate();
  const location = useLocation();
  const { setAuth } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);

  // Demo: no clinic logo/branding

  const nextFromQuery = (() => {
    try {
      const qs = new URLSearchParams(location.search);
      return qs.get("next");
    } catch {
      return null;
    }
  })();

  // Language change function
  const applyLang = async (code: "en" | "el") => {
    await i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setLangOpen(false);
  };

  const currentLang = i18n.language?.startsWith("el") ? "el" : "en";
  const langFlag = currentLang === "el" ? "🇬🇷" : "🇺🇸";
  const langName = currentLang === "el" ? "Ελληνικά" : "English";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    try {
      const data = await loginApi(email, password);
      setAuth(data);
      const dest =
        (nextFromQuery && decodeURIComponent(nextFromQuery)) ||
        (location.state as any)?.from?.pathname ||
        "/home";
      nav(dest, { replace: true });
    } catch (e: any) {
      setErr(
        e?.response?.data?.message ||
          e?.response?.data?.error ||
          t("invalidEmailOrPassword") ||
          "Invalid credentials"
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <style>{`
        :root {
          --bg: #0b0f17;
          --card: rgba(17,24,39,0.85);
          --text: #e6edf3;
          --muted: #9aa4b2;
          --accent: #37C3B6;
          --accent-2: #2CA59A;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: var(--bg);
          height: 100vh;
          font-family: system-ui, -apple-system, sans-serif;
        }

        /* Mobile Layout - Always visible by default */
        .mobile-container {
          min-height: 100vh;
          padding: 20px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg);
        }

        .auth-card {
          width: 100%;
          max-width: 400px;
          background: var(--card);
          border: 1px solid rgba(55,195,182,0.15);
          border-radius: 18px;
          padding: 28px 24px;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
          backdrop-filter: blur(10px);
        }

        .brand-badge {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          margin: 0 auto 14px;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
          box-shadow: 0 10px 30px rgba(55,195,182,0.3);
        }

        .brand-logo {
          width: 70px;
          height: 70px;
          border-radius: 10px;
          object-fit: contain;
          display: block;
        }

        .auth-title { 
          text-align: center; 
          margin: 8px 0 4px; 
          color: var(--text); 
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .auth-sub { 
          text-align: center; 
          color: var(--muted); 
          margin: 0 0 24px; 
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .auth-form { display: grid; gap: 16px; }
        .label { 
          font-size: 14px; 
          color: var(--muted); 
          font-weight: 500;
          margin-bottom: 4px;
          display: block;
        }

        .input-group {
          position: relative;
          display: flex; 
          align-items: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 2px 10px;
          transition: all 0.3s ease;
        }

        .input-group input {
          flex: 1;
          border: none; 
          outline: none;
          background: transparent; 
          color: var(--text);
          padding: 14px 8px 14px 6px;
          font-size: 15px;
        }

        .input-group:focus-within {
          border-color: var(--accent);
          box-shadow: 0 0 0 2px rgba(55,195,182,0.15);
        }

        .input-icon { 
          opacity: .8; 
          margin-right: 8px; 
          font-size: 16px;
        }

        .input-toggle {
          position: absolute;
          right: 8px;
          border: none;
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          font-size: 18px;
          line-height: 1;
          padding: 4px;
        }

        .btn-primary {
          width: 100%;
          border: none;
          color: #fff;
          font-weight: 700;
          padding: 16px;
          border-radius: 12px;
          cursor: pointer;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
          box-shadow: 0 4px 15px rgba(55,195,182,0.4);
          font-size: 15px;
          transition: all 0.3s ease;
          margin-top: 8px;
        }

        .btn-primary:disabled {
          opacity: .6;
          cursor: not-allowed;
        }

        .btn-primary:not(:disabled):hover {
          filter: brightness(1.05);
          transform: translateY(-1px);
        }

        .alert {
          color: #fca5a5;
          background: rgba(220,38,38,0.08);
          border: 1px solid rgba(220,38,38,0.25);
          padding: 12px 14px;
          border-radius: 10px;
          text-align: center;
          font-size: 14px;
        }

        .auth-foot { 
          text-align: center; 
          margin-top: 20px; 
          color: var(--text); 
          font-size: 14px;
        }
        
        .link { 
          color: var(--accent); 
          text-decoration: none; 
          font-weight: 600;
        }
        
        .link:hover { color: var(--accent-2); }

        /* Language Switcher Styles */
        .lang-switcher {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 50;
        }

        .lang-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(17,24,39,0.9);
          border: 1px solid rgba(55,195,182,0.3);
          border-radius: 12px;
          color: var(--text);
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .lang-btn:hover {
          border-color: var(--accent);
          background: rgba(17,24,39,0.95);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(55,195,182,0.2);
        }

        .lang-flag {
          font-size: 18px;
        }

        .lang-name {
          font-size: 13px;
        }

        /* Language Modal */
        .lang-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          backdrop-filter: blur(4px);
        }

        .lang-modal {
          width: min(320px, 90%);
          background: rgba(17,24,39,0.95);
          border: 1px solid rgba(55,195,182,0.25);
          border-radius: 18px;
          padding: 24px;
          color: var(--text);
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
          backdrop-filter: blur(20px);
        }

        .lang-modal-title {
          text-align: center;
          margin: 0 0 20px;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text);
        }

        .lang-options {
          display: grid;
          gap: 12px;
          margin-bottom: 16px;
        }

        .lang-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .lang-option:hover {
          background: rgba(55,195,182,0.1);
          border-color: rgba(55,195,182,0.4);
          transform: translateX(4px);
        }

        .lang-option.active {
          background: rgba(55,195,182,0.15);
          border-color: var(--accent);
        }

        .lang-option-flag {
          font-size: 20px;
          width: 24px;
          text-align: center;
        }

        .lang-option-name {
          font-weight: 600;
          font-size: 14px;
        }

        .lang-option-code {
          color: var(--muted);
          font-size: 12px;
          margin-left: auto;
        }

        .lang-modal-close {
          width: 100%;
          padding: 12px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: var(--muted);
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .lang-modal-close:hover {
          border-color: var(--accent);
          color: var(--text);
        }

        /* Desktop Layout - Hidden by default, shown only on desktop */
        .desktop-container {
          display: none;
        }

        /* Desktop Styles */
        @media (min-width: 1024px) {
          body {
            overflow: hidden;
          }

          .mobile-container {
            display: none;
          }

          .desktop-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            height: 100vh;
            overflow: hidden;
            min-height: 100vh;
            position: relative;
          }

          .auth-left-side {
            background: 
              linear-gradient(135deg, rgba(11,15,23,0.85) 0%, rgba(17,24,39,0.75) 100%),
              url("${import.meta.env.BASE_URL}assets/img2.jpg") center/cover no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
          }

          .auth-left-side::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, 
              rgba(55,195,182,0.15) 0%, 
              rgba(11,15,23,0.6) 50%,
              rgba(17,24,39,0.7) 100%);
            z-index: 1;
          }

          .side-content {
            position: relative;
            z-index: 2;
            text-align: center;
            color: var(--text);
            max-width: 85%;
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
          }

          .side-logo {
            width: 140px;
            height: 140px;
            margin: 0 auto 30px;
            border-radius: 24px;
            background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
            padding: 18px;
            box-shadow: 
              0 25px 50px rgba(55,195,182,0.3),
              0 0 0 1px rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            animation: float 6s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          .side-logo img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 12px;
            filter: brightness(1.1);
          }

          .side-title {
            font-size: 3.2rem;
            font-weight: 800;
            margin-bottom: 16px;
            background: linear-gradient(135deg, #ffffff 0%, var(--accent) 50%, #2CA59A 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.1;
            text-shadow: 0 4px 20px rgba(55,195,182,0.3);
          }

          .side-subtitle {
            font-size: 1.3rem;
            color: var(--text);
            line-height: 1.6;
            max-width: 480px;
            margin: 0 auto 30px;
            font-weight: 500;
            opacity: 0.95;
          }

          .tagline {
            font-size: 1.1rem;
            color: var(--accent);
            font-weight: 600;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .auth-right-side {
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--bg);
            padding: 40px;
            position: relative;
            overflow-y: auto;
            height: 100vh;
          }

          .auth-right-content {
            width: 100%;
            max-width: 420px;
            margin: 0 auto;
          }

          .auth-left-desktop {
            width: 100%;
            border: 1px solid rgba(55,195,182,0.2);
            border-radius: 20px;
            padding: 40px 35px;
            backdrop-filter: blur(15px);
            background: rgba(17,24,39,0.9);
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.4);
          }

          .brand-badge-desktop {
            width: 80px;
            height: 80px;
            border-radius: 16px;
            margin: 0 auto 20px;
            background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
            box-shadow: 0 10px 30px rgba(55,195,182,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .brand-logo-desktop {
            width: 50px;
            height: 50px;
            border-radius: 10px;
            object-fit: contain;
            display: block;
          }

          .auth-title-desktop { 
            text-align: center; 
            margin: 8px 0 4px; 
            color: var(--text); 
            font-size: 1.8rem;
          }

          .auth-sub-desktop { 
            text-align: center; 
            color: var(--muted); 
            margin: 0 0 30px; 
            font-size: 1rem;
          }

          .lang-switcher-desktop {
            position: absolute;
            top: 30px;
            right: 30px;
            z-index: 50;
          }

          .btn-primary-desktop {
            width: 100%;
            border: none;
            color: #fff;
            font-weight: 700;
            padding: 16px;
            border-radius: 14px;
            cursor: pointer;
            background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
            box-shadow: 0 4px 15px rgba(55,195,182,0.4);
            font-size: 15px;
            transition: all 0.3s ease;
            margin-top: 10px;
          }

          .btn-primary-desktop:disabled {
            opacity: .6;
            cursor: not-allowed;
          }

          .btn-primary-desktop:not(:disabled):hover {
            filter: brightness(1.05);
            transform: translateY(-1px);
          }
        }

        /* Mobile optimizations for language switcher */
        @media (max-width: 767px) {
          .lang-switcher {
            top: 15px;
            right: 15px;
          }

          .lang-btn {
            padding: 8px 12px;
            font-size: 13px;
          }

          .lang-name {
            display: none;
          }

          .lang-modal {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .lang-btn {
            padding: 8px;
            min-width: 44px;
            height: 44px;
            justify-content: center;
          }

          .lang-flag {
            font-size: 16px;
          }

          .auth-card {
            padding: 24px 20px;
          }
          
          .mobile-container {
            padding: 16px 12px;
          }
        }
      `}</style>

      {/* Language Modal */}
      {langOpen && (
        <div className="lang-modal-backdrop" onClick={() => setLangOpen(false)}>
          <div className="lang-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="lang-modal-title">Select Language</h3>
            <div className="lang-options">
              <div 
                className={`lang-option ${currentLang === 'en' ? 'active' : ''}`}
                onClick={() => applyLang('en')}
              >
                <span className="lang-option-flag">🇺🇸</span>
                <span className="lang-option-name">English</span>
                <span className="lang-option-code">English</span>
              </div>
              <div 
                className={`lang-option ${currentLang === 'el' ? 'active' : ''}`}
                onClick={() => applyLang('el')}
              >
                <span className="lang-option-flag">🇬🇷</span>
                <span className="lang-option-name">Ελληνικά</span>
                <span className="lang-option-code">Greek</span>
              </div>
            </div>
            <button 
              className="lang-modal-close"
              onClick={() => setLangOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mobile Layout - Shown by default */}
      <div className="mobile-container">
        {/* Language Switcher */}
        <div className="lang-switcher">
          <button 
            className="lang-btn"
            onClick={() => setLangOpen(true)}
            aria-label="Change language"
          >
            <span className="lang-flag">{langFlag}</span>
            <span className="lang-name">{langName}</span>
          </button>
        </div>

        {/* Login Form Card */}
        <div className="auth-card">
          {/* Neutral badge */}
          <div className="brand-badge" aria-hidden>
            <span style={{ fontSize: 34, lineHeight: 1 }}>🤖</span>
          </div>

          <h1 className="auth-title">{t("welcomeBack") || "Welcome back"}</h1>
          <p className="auth-sub">
            {t("signInSubtitle") || "Sign in to continue to your AI dashboard"}
          </p>

          <form className="auth-form" onSubmit={submit}>
            {err && <div className="alert">{err}</div>}

            <label className="label">{t("email") || "Email address"}</label>
            <div className="input-group">
              <span className="input-icon" aria-hidden>👤</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("email") || "Email address"}
                required
                disabled={busy}
              />
            </div>

            <label className="label">{t("password") || "Password"}</label>
            <div className="input-group">
              <span className="input-icon" aria-hidden>🔒</span>
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("password") || "Password"}
                required
                disabled={busy}
              />
              <button
                type="button"
                className="input-toggle"
                onClick={() => setShowPw((s) => !s)}
                aria-label={showPw ? "Hide password" : "Show password"}
              >
                {showPw ? "🙈" : "👁️"}
              </button>
            </div>

            <button className="btn-primary" disabled={busy}>
              {busy ? (t("pleaseWait") || "Please wait…") : (t("login") || "Sign in")}
            </button>

            <div className="auth-foot">
              <span className="muted">
                {t("noAccount") || "Don't have an account?"}
              </span>{" "}
              <Link to="/signup" className="link">
                {t("signup") || "Sign up"}
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Desktop Layout - Hidden on mobile, shown only on desktop */}
      <div className="desktop-container">
        {/* Left Side - Background Image with Enhanced Content for Desktop */}
        <div className="auth-left-side">
          <div className="side-content">
            <div className="side-logo" aria-hidden>
              <span style={{ fontSize: 72, lineHeight: 1 }}>🤖</span>
            </div>
            
            <div className="tagline">AI-Powered Aesthetic Solutions</div>
            
            <h1 className="side-title">
              Facial AI<br />
              Analysis
            </h1>
            
            <p className="side-subtitle">
              Revolutionizing skin health with advanced artificial intelligence and personalized treatment insights
            </p>
          </div>
        </div>

        {/* Right Side - Login Form for Desktop */}
        <div className="auth-right-side">
          <div className="auth-right-content">
            {/* Language Switcher */}
            <div className="lang-switcher-desktop">
              <button 
                className="lang-btn"
                onClick={() => setLangOpen(true)}
                aria-label="Change language"
              >
                <span className="lang-flag">{langFlag}</span>
                <span className="lang-name">{langName}</span>
              </button>
            </div>

            {/* Login Form */}
            <div className="auth-left-desktop">
              <div className="brand-badge-desktop" aria-hidden>
                <span style={{ fontSize: 34, lineHeight: 1 }}>🤖</span>
              </div>

              <h1 className="auth-title-desktop">{t("welcomeBack") || "Welcome back"}</h1>
              <p className="auth-sub-desktop">
                {t("signInSubtitle") || "Sign in to continue to your AI dashboard"}
              </p>

              <form className="auth-form" onSubmit={submit}>
                {err && <div className="alert">{err}</div>}

                <label className="label">{t("email") || "Email address"}</label>
                <div className="input-group">
                  <span className="input-icon" aria-hidden>👤</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("email") || "Email address"}
                    required
                    disabled={busy}
                  />
                </div>

                <label className="label">{t("password") || "Password"}</label>
                <div className="input-group">
                  <span className="input-icon" aria-hidden>🔒</span>
                  <input
                    type={showPw ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t("password") || "Password"}
                    required
                    disabled={busy}
                  />
                  <button
                    type="button"
                    className="input-toggle"
                    onClick={() => setShowPw((s) => !s)}
                    aria-label={showPw ? "Hide password" : "Show password"}
                  >
                    {showPw ? "🙈" : "👁"}
                  </button>
                </div>

                <button className="btn-primary-desktop" disabled={busy}>
                  {busy ? (t("pleaseWait") || "Please wait…") : (t("login") || "Sign in")}
                </button>

                <div className="auth-foot">
                  <span className="muted">
                    {t("noAccount") || "Don't have an account?"}
                  </span>{" "}
                  <Link to="/signup" className="link">
                    {t("signup") || "Sign up"}
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;