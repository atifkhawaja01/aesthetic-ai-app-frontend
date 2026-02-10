import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import { FaHome, FaCamera, FaUser, FaStethoscope, FaHistory, FaGlobe, FaSignOutAlt } from "react-icons/fa";

const NavBar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { auth, signOut } = useAuth();

  // Safe translation fallback
  const safeT = (key: string, fallback: string) => {
    const val = t(key, { defaultValue: "" }) as any;
    return typeof val === "string" && val.trim() ? val : fallback;
  };

  const currentLang = i18n.language?.startsWith("el") ? "el" : "en";
  const setLang = (lng: "en" | "el") => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  const langFlag = currentLang === "el" ? "🇬🇷" : "🇺🇸";
  const langName = currentLang === "el" ? "Ελληνικά" : "English";

  return (
    <>
      <style>{`
        :root{
          --bg: rgba(11, 16, 32, 0.95);
          --bg-glass: rgba(11, 16, 32, 0.85);
          --divider: rgba(55, 195, 182, 0.15);
          --ink: #fff;
          --muted: #9aa4b2;
          --accent: #37C3B6;
          --accent2: #2CA59A;
          --accent-glow: rgba(55, 195, 182, 0.4);
          --chip-border: rgba(55, 195, 182, 0.2);
          --card-glow: rgba(55, 195, 182, 0.1);
        }

        /* --- Premium Top bar (desktop) --- */
        .topbar{
          position: fixed; 
          top: 0; 
          left: 0; 
          right: 0; 
          z-index: 1000;
          display: flex; 
          align-items: center; 
          justify-content: space-between;
          padding: 12px 24px; 
          background: var(--bg-glass);
          border-bottom: 1px solid var(--divider);
          height: 72px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        
        body { 
          padding-top: 72px; 
        }

        .brand{ 
          display: flex; 
          align-items: center; 
          gap: 14px; 
          color: #fff; 
          font-weight: 800; 
          font-size: 20px; 
          white-space: nowrap;
          background: linear-gradient(135deg, #fff 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* brand logo removed for demo neutrality */

        .nav{ 
          display: flex; 
          gap: 8px; 
          align-items: center; 
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--chip-border);
          border-radius: 16px;
          padding: 6px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .chip{
          padding: 12px 20px; 
          border: 1px solid transparent;
          border-radius: 12px; 
          color: #e2e8f0; 
          text-decoration: none; 
          font-weight: 600;
          background: transparent; 
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          font-size: 14px;
          position: relative;
          overflow: hidden;
        }

        .chip::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(55, 195, 182, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .chip:hover::before {
          left: 100%;
        }

        .chip:hover{ 
          background: rgba(55, 195, 182, 0.08);
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(55, 195, 182, 0.15);
        }

        .chip.active{
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          color: #fff;
          border-color: transparent;
          box-shadow: 0 8px 25px var(--accent-glow);
          transform: translateY(-2px);
        }

        .right{ 
          display: flex; 
          gap: 12px; 
          align-items: center; 
        }

        .lang-selector {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--chip-border);
          border-radius: 12px;
          color: var(--ink);
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 14px;
          backdrop-filter: blur(10px);
        }

        .lang-selector:hover {
          background: rgba(55, 195, 182, 0.1);
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(55, 195, 182, 0.15);
        }

        .lang-flag {
          font-size: 18px;
        }

        .lang-select {
          background: transparent;
          border: none;
          color: var(--ink);
          font-weight: 600;
          cursor: pointer;
          outline: none;
          font-size: 14px;
        }

        .lang-select option {
          background: var(--bg);
          color: var(--ink);
        }

        .logout-btn{
          padding: 12px 20px; 
          border-radius: 12px; 
          border: none; 
          cursor: pointer; 
          color: #fff;
          background: linear-gradient(135deg, #ff6b6b, #ee5a52);
          font-weight: 700; 
          font-size: 14px;
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .logout-btn:hover{
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(255, 107, 107, 0.4);
          background: linear-gradient(135deg, #ff5252, #e53935);
        }

        .login-btn {
          padding: 12px 24px;
          border-radius: 12px;
          border: 1px solid var(--accent);
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          color: #fff;
          text-decoration: none;
          font-weight: 700;
          font-size: 14px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px var(--accent-glow);
        }

        .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px var(--accent-glow);
        }

        /* --- Premium Bottom bar (mobile) --- */
        .bottombar { 
          display: none; 
        }

        @media (max-width: 820px){
          body { 
            padding-top: 0; 
            padding-bottom: 85px; 
          }
          
          .topbar { 
            display: none; 
          }
          
          .bottombar{
            display: flex;
            position: fixed; 
            bottom: 0; 
            left: 0; 
            right: 0; 
            height: 80px;
            background: var(--bg-glass);
            border-top: 1px solid var(--divider);
            justify-content: space-around; 
            align-items: center;
            z-index: 1000;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            padding: 0 8px;
            box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.2);
          }
          
          .tab{
            flex: 1; 
            text-align: center; 
            color: var(--muted); 
            text-decoration: none;
            font-size: 11px; 
            font-weight: 600; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            gap: 6px;
            padding: 10px 4px;
            border-radius: 12px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .tab::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 3px;
            background: linear-gradient(135deg, var(--accent), var(--accent2));
            border-radius: 2px;
            transition: all 0.3s ease;
            transform: translateX(-50%);
          }

          .tab:hover {
            color: var(--accent);
            background: rgba(55, 195, 182, 0.05);
          }

          .tab.active{
            color: var(--accent);
          }

          .tab.active::after {
            width: 70%;
          }

          .tab svg{ 
            font-size: 22px; 
            transition: all 0.3s ease;
          }

          .tab.active svg {
            transform: scale(1.1);
            filter: drop-shadow(0 0 8px var(--accent-glow));
          }
          
          .scanBtn{
            width: 70px; 
            height: 70px; 
            border-radius: 35px; 
            margin-top: -35px;
            background: linear-gradient(135deg, var(--accent), var(--accent2));
            display: flex; 
            flex-direction: column; 
            justify-content: center; 
            align-items: center;
            color: #fff; 
            font-weight: 600; 
            box-shadow: 0 8px 30px var(--accent-glow);
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .scanBtn::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transform: rotate(45deg);
            transition: all 0.6s ease;
          }

          .scanBtn:hover::before {
            transform: rotate(45deg) translate(50%, 50%);
          }

          .scanBtn:hover{
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 15px 40px var(--accent-glow);
          }

          .scanBtn.active{
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 15px 40px var(--accent-glow);
          }

          .scanBtn svg{ 
            font-size: 24px; 
            margin-bottom: 2px;
          }

          .scan-btn-text {
            font-size: 10px;
            font-weight: 700;
          }
        }

        /* Enhanced mobile experience */
        @media (max-width: 480px) {
          .bottombar {
            height: 75px;
            padding: 0 4px;
          }
          
          .tab {
            font-size: 10px;
            gap: 4px;
            padding: 8px 2px;
          }
          
          .tab svg {
            font-size: 20px;
          }
          
          .scanBtn {
            width: 65px;
            height: 65px;
            margin-top: -32px;
          }
          
          .scanBtn svg {
            font-size: 22px;
          }
        }

        /* Premium animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .topbar {
          animation: fadeInUp 0.6s ease-out;
        }

        .bottombar {
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }

        /* Glass morphism effect */
        .glass {
          background: rgba(255, 255, 255, 0.025);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>

      {/* Premium Topbar for desktop */}
      <header className="topbar glass">
        <div className="brand">
          <span>{safeT("appName", "AI Facial Aesthetic Model")}</span>
        </div>

        {auth && (
          <nav className="nav glass">
            <NavLink to="/home" className={({ isActive }) => "chip" + (isActive ? " active" : "")}>
              {safeT("nav.home", "Home")}
            </NavLink>
            <NavLink to="/scan" className={({ isActive }) => "chip" + (isActive ? " active" : "")}>
              {safeT("nav.scan", "AI Scan")}
            </NavLink>
            <NavLink to="/treatments" className={({ isActive }) => "chip" + (isActive ? " active" : "")}>
              {safeT("nav.treatments", "Treatments")}
            </NavLink>
            <NavLink to="/history" className={({ isActive }) => "chip" + (isActive ? " active" : "")}>
              {safeT("history.title", "History")}
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) => "chip" + (isActive ? " active" : "")}>
              {safeT("nav.profile", "Profile")}
            </NavLink>
          </nav>
        )}

        <div className="right">
          <div className="lang-selector glass">
            <span className="lang-flag">{langFlag}</span>
            <select 
              className="lang-select" 
              value={currentLang} 
              onChange={(e) => setLang(e.target.value as "en" | "el")} 
              aria-label="language"
            >
              <option value="en">English</option>
              <option value="el">Greek</option>
            </select>
          </div>
          
          {auth ? (
            <button className="logout-btn" onClick={signOut}>
              <FaSignOutAlt />
              {safeT("common.logout", "Logout")}
            </button>
          ) : (
            <NavLink to="/login" className="login-btn">
              {safeT("login", "Login")}
            </NavLink>
          )}
        </div>
      </header>

      {/* Premium Bottom bar for mobile */}
      {auth && (
        <nav className="bottombar glass">
          <NavLink to="/home" className={({ isActive }) => "tab" + (isActive ? " active" : "")}>
            <FaHome /> 
            <span>{safeT("nav.home", "Home")}</span>
          </NavLink>
          
          <NavLink to="/history" className={({ isActive }) => "tab" + (isActive ? " active" : "")}>
            <FaHistory /> 
            <span>{safeT("history.title", "History")}</span>
          </NavLink>
          
          <NavLink to="/scan" className={({ isActive }) => "scanBtn" + (isActive ? " active" : "")}>
            <FaCamera /> 
            <span className="scan-btn-text">{safeT("nav.scan", "Scan")}</span>
          </NavLink>
          
          <NavLink to="/treatments" className={({ isActive }) => "tab" + (isActive ? " active" : "")}>
            <FaStethoscope /> 
            <span>{safeT("nav.treatments", "Treatments")}</span>
          </NavLink>
          
          <NavLink to="/profile" className={({ isActive }) => "tab" + (isActive ? " active" : "")}>
            <FaUser /> 
            <span>{safeT("nav.profile", "Profile")}</span>
          </NavLink>
        </nav>
      )}
    </>
  );
};

export default NavBar;