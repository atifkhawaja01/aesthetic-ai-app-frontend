import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // ✅ Use BASE_URL so public assets work under tunnels/subpaths
  const logoSrc = `${import.meta.env.BASE_URL}assets/clinic_logo.png`;

  return (
    <>
      <style>{`
        :root{
          --bg:#0A192F;
          --bg2:#162947;
          --card: rgba(17,24,39,0.95);
          --cardBorder: rgba(55,195,182,0.25);
          --text:#FFFFFF;
          --muted: rgba(255,255,255,0.85);
          --accent:#37C3B6;
          --accent2:#2CA59A;
          --gold:#FFD700;
        }

        .home {
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          overflow: hidden;
        }

        .container-lg { width: 100%; max-width: 1140px; margin: 0 auto; padding: 0 16px; }
        .container-md { width: 100%; max-width: 900px; margin: 0 auto; padding: 0 16px; }

        /* ---------- HERO ---------- */
        .hero {
          position: relative;
          height: min(100vh, 880px);
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: var(--bg);
        }
        .hero video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
          z-index: 0;
        }
        .hero::after{
          content:"";
          position:absolute; inset:0;
          background: linear-gradient(135deg, rgba(10,25,47,.9) 0%, rgba(22,41,71,.8) 100%);
          z-index: 1;
        }
        .hero-grid{
          position: relative;
          z-index: 2;
          display: grid;
          gap: 40px;
          grid-template-columns: 1fr;
          align-items: center;
          padding-top: 20px; 
          padding-bottom: 40px; 
        }
        @media (min-width: 900px){
          .hero-grid{ 
            grid-template-columns: 1.1fr .9fr; 
            padding-top: 0; 
            padding-bottom: 0; 
          }
        }

        /* ✅ Mobile only padding */
        @media (max-width: 768px) {
          .h-title { padding-top: 110px; }
        }

        .h-title{
          font-weight: 800;
          line-height: 1.1;
          margin: 0 0 16px;
          font-size: clamp(2.2rem, 4.5vw, 4rem);
          background: linear-gradient(135deg, #fff 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: fadeUp .9s ease both;
        }
        .h-sub{
          color: var(--muted);
          font-size: clamp(1rem, 1.6vw, 1.25rem);
          line-height: 1.6;
          margin: 0 0 28px;
          animation: fadeUp .9s ease .08s both;
        }
        .btn-row{
          display: grid; gap: 14px;
          grid-template-columns: 1fr;
          width: 100%;
          max-width: 520px;
          animation: fadeUp .9s ease .15s both;
        }
        @media (min-width: 560px){
          .btn-row{ grid-template-columns: 1fr 1fr; }
        }
        .btn-primary{
          padding: 14px 22px;
          border-radius: 14px;
          border: none;
          color: #fff;
          font-weight: 800;
          font-size: 1.05rem;
          cursor: pointer;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          box-shadow: 0 8px 32px rgba(55,195,182,0.3);
        }
        .btn-primary:hover{ filter: brightness(1.05) }
        .btn-ghost{
          padding: 14px 22px;
          border-radius: 14px;
          font-weight: 800;
          font-size: 1.05rem;
          cursor: pointer;
          color: var(--text);
          background: transparent;
          border: 2px solid rgba(55,195,182,.5);
        }
        .btn-ghost:hover{
          border-color: var(--accent);
          background: rgba(55,195,182,.1);
        }

        .hero-card{
          height: 400px;
          border-radius: 22px;
          background: linear-gradient(135deg, rgba(55,195,182,.12) 0%, rgba(10,25,47,.3) 100%);
          border: 2px solid var(--cardBorder);
          display:flex; align-items:center; justify-content:center;
          padding: 28px;
          position: relative;
          overflow: hidden;
          animation: fadeUp .9s ease .2s both;
        }

        /* 🔹 Badge + logo (replaces star) */
        .logo-badge{
          width: 104px; height: 104px;
          border-radius: 18px;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          display:flex; align-items:center; justify-content:center;
          margin: 0 auto 14px;
          box-shadow: 0 12px 30px rgba(55,195,182,.35);
        }
        .logo-badge .logo-img{
          width: 80px; height: 80px;             /* nicely inset inside 104x104 */
          border-radius: 14px;                    /* keeps rounded-corner look */
          object-fit: contain;
          display:block;
        }

        .hero-card h3{ text-align:center; margin: 8px 0; font-size: 1.8rem; }
        .hero-card p{ text-align:center; color: var(--muted); margin: 0; }

        /* ---------- WHY CHOOSE ---------- */
        .sec{ padding: 80px 0; background: var(--bg); }
        .sec .head{ text-align:center; margin-bottom: 40px; }
        .sec .head h2{ margin: 0 0 10px; font-size: clamp(1.8rem, 3vw, 3rem); font-weight: 800; }
        .sec .head p{ margin: 0 auto; color: var(--muted); max-width: 640px; }

        .grid-3{ display: grid; grid-template-columns: 1fr; gap: 18px; }
        @media (min-width: 780px){ .grid-3{ grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1100px){ .grid-3{ grid-template-columns: repeat(3, 1fr); } }

        .feature-card{
          height: 100%;
          background: var(--card);
          border: 1px solid var(--cardBorder);
          border-radius: 18px;
          padding: 22px;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .feature-card:hover{
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(55,195,182,.15);
          border-color: var(--accent);
        }
        .f-icon{
          width: 56px; height: 56px; border-radius: 14px;
          display:flex; align-items:center; justify-content:center;
          margin-bottom: 14px;
          color: #fff; font-size: 28px;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          box-shadow: 0 10px 24px rgba(55,195,182,.3);
        }
        .feature-card h4{ margin: 0 0 8px; font-size: 1.25rem; }
        .feature-card p{ margin: 0; color: var(--muted); line-height: 1.6; }

        /* ---------- PROCESS ---------- */
        .sec-alt{ padding: 80px 0; background: linear-gradient(135deg, var(--bg) 0%, var(--bg2) 100%); }
        .grid-steps{ display:grid; gap: 28px; grid-template-columns: 1fr; }
        @media (min-width: 900px){ .grid-steps{ grid-template-columns: repeat(3, 1fr); } }
        .step{ text-align:center; }
        .step-num{
          width: 86px; height: 86px; margin: 0 auto 12px;
          border-radius: 50%;
          font-weight: 800; font-size: 24px;
          display:flex; align-items:center; justify-content:center;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          color: #fff; box-shadow: 0 10px 28px rgba(55,195,182,.35);
        }
        .step .icon{ color: var(--accent); font-size: 32px; margin-bottom: 8px; }
        .step h4{ margin: 6px 0; font-size: 1.4rem; }
        .step p{ margin: 0; color: var(--muted); line-height: 1.6; }

        /* ---------- STATS ---------- */
        .stats{ padding: 80px 0; background: var(--bg); }
        .grid-4{ display:grid; gap: 26px; grid-template-columns: repeat(2, 1fr); }
        @media (min-width: 900px){ .grid-4{ grid-template-columns: repeat(4, 1fr);} }
        .stat{ text-align:center; }
        .stat .num{
          color: var(--accent);
          font-weight: 800;
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          margin: 0 0 6px;
        }
        .stat .lbl{ color: var(--muted); }

        /* ---------- CTA ---------- */
        .cta{
          padding: 90px 0;
          background: linear-gradient(135deg, var(--bg) 0%, var(--bg2) 100%);
          text-align: center;
        }
        .cta h2{ margin: 0 0 12px; font-weight: 800; font-size: clamp(1.8rem, 3vw, 3rem); }
        .cta p{ margin: 0 auto 26px; color: var(--muted); max-width: 560px; }
        .cta .btn-primary{ padding: 15px 28px; font-size: 1.1rem; box-shadow: 0 10px 32px rgba(55,195,182,.35); }

        /* ---------- DISCLAIMER ---------- */
        .disc{ padding: 40px 0 70px; background: rgba(10,25,47,.8); }
        .disc-card{
          background: rgba(17,24,39,.9);
          border: 1px solid var(--cardBorder);
          border-radius: 18px;
          padding: 22px;
        }
        .disc-card h5{ margin: 0 0 10px; font-size: 1.1rem; }
        .disc-card p{ margin: 0; color: var(--muted); line-height: 1.6; }

        /* ---------- ANIMS ---------- */
        @keyframes fadeUp{
          from{ opacity:0; transform: translateY(14px); }
          to{ opacity:1; transform: translateY(0); }
        }

        /* ========== MOBILE OPTIMIZATIONS ========== */
        @media (max-width: 768px) {
          /* Hero Section Mobile Optimization */
          .hero {
            min-height: 500px;
            height: auto;
            padding: 80px 0 40px;
          }
          
          .hero-grid {
            gap: 30px;
            padding-top: 0;
            padding-bottom: 20px;
          }
          
          .h-title {
            padding-top: 0;
            font-size: 1.8rem;
            text-align: center;
            margin-bottom: 12px;
          }
          
          .h-sub {
            font-size: 0.95rem;
            text-align: center;
            margin-bottom: 22px;
            line-height: 1.5;
          }
          
          .btn-row {
            max-width: 100%;
            gap: 12px;
          }
          
          .btn-primary, .btn-ghost {
            padding: 12px 16px;
            font-size: 0.95rem;
            border-radius: 12px;
          }
          
          .hero-card {
            height: 280px;
            border-radius: 18px;
            padding: 20px;
            margin-top: 10px;
          }
          
          .logo-badge {
            width: 80px;
            height: 80px;
            border-radius: 14px;
            margin-bottom: 12px;
          }
          
          .logo-badge .logo-img {
            width: 60px;
            height: 60px;
            border-radius: 10px;
          }
          
          .hero-card h3 {
            font-size: 1.4rem;
            margin: 6px 0;
          }
          
          .hero-card p {
            font-size: 0.9rem;
          }
          
          /* Sections Mobile Optimization */
          .sec, .sec-alt, .stats, .cta {
            padding: 50px 0;
          }
          
          .sec .head, .sec-alt .head {
            margin-bottom: 30px;
          }
          
          .sec .head h2, .sec-alt .head h2, .cta h2 {
            font-size: 1.6rem;
            margin-bottom: 8px;
          }
          
          .sec .head p, .sec-alt .head p, .cta p {
            font-size: 0.9rem;
            line-height: 1.5;
          }
          
          /* Feature Cards Mobile Optimization */
          .grid-3 {
            gap: 14px;
          }
          
          .feature-card {
            padding: 18px;
            border-radius: 14px;
          }
          
          .f-icon {
            width: 46px;
            height: 46px;
            border-radius: 12px;
            font-size: 22px;
            margin-bottom: 12px;
          }
          
          .feature-card h4 {
            font-size: 1.1rem;
            margin-bottom: 6px;
          }
          
          .feature-card p {
            font-size: 0.85rem;
            line-height: 1.5;
          }
          
          /* Steps Mobile Optimization - UPDATED FOR SINGLE ROW */
          .grid-steps {
            gap: 16px;
            grid-template-columns: repeat(3, 1fr) !important;
            align-items: start;
          }
          
          .step-num {
            width: 50px;
            height: 50px;
            font-size: 16px;
            margin-bottom: 8px;
          }
          
          .step .icon {
            font-size: 20px;
            margin-bottom: 4px;
          }
          
          .step h4 {
            font-size: 0.9rem;
            margin: 2px 0;
            line-height: 1.3;
          }
          
          .step p {
            font-size: 0.75rem;
            line-height: 1.3;
          }
          
          /* Stats Mobile Optimization */
          .grid-4 {
            gap: 20px;
          }
          
          .stat .num {
            font-size: 1.8rem;
          }
          
          .stat .lbl {
            font-size: 0.85rem;
          }
          
          /* CTA Mobile Optimization */
          .cta .btn-primary {
            padding: 13px 24px;
            font-size: 1rem;
            border-radius: 12px;
          }
          
          /* Disclaimer Mobile Optimization */
          .disc {
            padding: 30px 0 100px;
          }
          
          .disc-card {
            padding: 18px;
            border-radius: 14px;
          }
          
          .disc-card h5 {
            font-size: 1rem;
            margin-bottom: 8px;
          }
          
          .disc-card p {
            font-size: 0.85rem;
            line-height: 1.5;
          }
        }
        
        /* Extra Small Mobile Devices */
        @media (max-width: 480px) {
          .grid-steps {
            gap: 12px;
            grid-template-columns: repeat(3, 1fr) !important;
          }
          
          .step-num {
            width: 44px;
            height: 44px;
            font-size: 14px;
          }
          
          .step .icon {
            font-size: 18px;
          }
          
          .step h4 {
            font-size: 0.85rem;
          }
          
          .step p {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 380px) {
          .hero {
            padding: 70px 0 30px;
            min-height: 450px;
          }
          
          .h-title {
            font-size: 1.6rem;
          }
          
          .h-sub {
            font-size: 0.9rem;
          }
          
          .btn-primary, .btn-ghost {
            padding: 11px 14px;
            font-size: 0.9rem;
          }
          
          .hero-card {
            height: 250px;
            padding: 16px;
          }
          
          .logo-badge {
            width: 70px;
            height: 70px;
          }
          
          .logo-badge .logo-img {
            width: 54px;
            height: 54px;
          }
          
          .hero-card h3 {
            font-size: 1.2rem;
          }
          
          .hero-card p {
            font-size: 0.85rem;
          }
          
          .sec, .sec-alt, .stats, .cta {
            padding: 40px 0;
          }
          
          .feature-card {
            padding: 16px;
          }
          
          .f-icon {
            width: 42px;
            height: 42px;
            font-size: 20px;
          }
          
          .feature-card h4 {
            font-size: 1rem;
          }
          
          .feature-card p {
            font-size: 0.8rem;
          }

          /* Extra small optimization for steps */
          .grid-steps {
            gap: 10px;
          }
          
          .step-num {
            width: 40px;
            height: 40px;
            font-size: 13px;
          }
          
          .step .icon {
            font-size: 16px;
          }
          
          .step h4 {
            font-size: 0.8rem;
          }
          
          .step p {
            font-size: 0.65rem;
          }
        }
      `}</style>

      <div className="home">
        {/* HERO */}
        <section className="hero">
          <video autoPlay muted loop playsInline poster="/assets/videos/hero-poster.jpg">
            <source src="/assets/videos/ai-hero-video.mp4" type="video/mp4" />
          </video>

          <div className="container-lg">
            <div className="hero-grid">
              {/* Left copy */}
              <div>
                <h1 className="h-title">{t("homePage.heroTitle")}</h1>
                <p className="h-sub">{t("homePage.heroSubtitle")}</p>
                <div className="btn-row">
                  <button className="btn-primary" onClick={() => navigate("/scan")}>
                    ✨ {t("homePage.ctaGetStarted")}
                  </button>
                  <button className="btn-ghost" onClick={() => navigate("/history")}>
                    🕘 {t("homePage.ctaViewHistory")}
                  </button>
                </div>
              </div>

              {/* Right card */}
              <div className="hero-card">
                <div style={{textAlign:"center"}}>
                  {/* 🔹 Replaced star with logo image */}
                  <div className="logo-badge">
                    <img src={logoSrc} alt="Brand Logo" className="logo-img" />
                  </div>
                  <h3>{t("homePage.features.f1Title")}</h3>
                  <p>{t("homePage.features.f1Desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="sec">
          <div className="container-lg">
            <div className="head">
              <h2>{t("homePage.whyTitle")}</h2>
              <p>{t("homePage.whySubtitle")}</p>
            </div>

            <div className="grid-3">
              {[
                { icon:"🔬", titleKey:"f1Title", descKey:"f1Desc"},
                { icon:"🛡️", titleKey:"f2Title", descKey:"f2Desc"},
                { icon:"📈", titleKey:"f3Title", descKey:"f3Desc"},
                { icon:"🧠", titleKey:"f4Title", descKey:"f4Desc"},
                { icon:"🏥", titleKey:"f5Title", descKey:"f5Desc"},
                { icon:"✨", titleKey:"f6Title", descKey:"f6Desc"}
              ].map((f, i)=>(
                <div className="feature-card" key={i} style={{animation: `fadeUp .7s ease ${i*0.06}s both`}}>
                  <div className="f-icon" aria-hidden>{f.icon}</div>
                  <h4>{t(`homePage.features.${f.titleKey}`)}</h4>
                  <p>{t(`homePage.features.${f.descKey}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="sec-alt">
          <div className="container-lg">
            <div className="head">
              <h2>{t("homePage.howTitle")}</h2>
              <p>{t("homePage.howSubtitle")}</p>
            </div>

            <div className="grid-steps">
              {[
                { step:t("homePage.steps.s1Step"), icon:"📷", title:t("homePage.steps.s1Title"), desc:t("homePage.steps.s1Desc")},
                { step:t("homePage.steps.s2Step"), icon:"📊", title:t("homePage.steps.s2Title"), desc:t("homePage.steps.s2Desc")},
                { step:t("homePage.steps.s3Step"), icon:"✅", title:t("homePage.steps.s3Title"), desc:t("homePage.steps.s3Desc")}
              ].map((p, i)=>(
                <div className="step" key={i} style={{animation: `fadeUp .7s ease ${i*0.12}s both`}}>
                  <div className="step-num">{p.step}</div>
                  <div className="icon" aria-hidden>{p.icon}</div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats">
          <div className="container-lg">
            <div className="grid-4">
              {[
                { num:"98%", label:t("homePage.stats.a") },
                { num:"20+", label:t("homePage.stats.b") },
                { num:"4.9/5", label:t("homePage.stats.c") },
                { num:"24/7", label:t("homePage.stats.d") }
              ].map((s, i)=>(
                <div className="stat" key={i} style={{animation: `fadeUp .7s ease ${i*0.08}s both`}}>
                  <div className="num">{s.num}</div>
                  <div className="lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="container-md">
            <h2>{t("homePage.ctaTitle")}</h2>
            <p>{t("homePage.ctaSubtitle")}</p>
            <button className="btn-primary" onClick={() => navigate("/scan")}>
              🚀 {t("homePage.ctaStart")}
            </button>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="disc">
          <div className="container-lg">
            <div className="disc-card">
              <h5>⚕️ {t("homePage.discTitle")}</h5>
              <p>{t("homePage.discText")}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;