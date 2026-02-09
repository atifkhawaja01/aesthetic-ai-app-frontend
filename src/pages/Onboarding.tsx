import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Slide = {
  id: string;
  image: string;
  titleKey: string;
  subtitleKey: string;
};

const SLIDES: Slide[] = [
  { id: "1", image: "/assets/onboarding/slide1.png", titleKey: "onboarding1Title", subtitleKey: "onboarding1Subtitle" },
  { id: "2", image: "/assets/onboarding/slide2.png", titleKey: "onboarding2Title", subtitleKey: "onboarding2Subtitle" },
  { id: "3", image: "/assets/onboarding/slide3.png", titleKey: "onboarding3Title", subtitleKey: "onboarding3Subtitle" },
  { id: "4", image: "/assets/onboarding/doctor12345.png", titleKey: "onboarding4Title", subtitleKey: "onboarding4Subtitle" },
];

const Onboarding: React.FC = () => {
  const { t } = useTranslation();
  const nav = useNavigate();

  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // ✅ Correct path for logo
  const logoSrc = `${import.meta.env.BASE_URL}assets/clinic_logo.png`;

  /* ---------- Keyboard arrows ---------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx]);

  const next = () => setIdx((i) => Math.min(i + 1, SLIDES.length - 1));
  const prev = () => setIdx((i) => Math.max(i - 1, 0));

  /* ---------- Actions ---------- */
  const handleSkip = () => {
    // Skip → go home
    localStorage.setItem("onboarded", "true");
    nav("/home");
  };

  const handleNext = () => {
    if (idx < SLIDES.length - 1) {
      next();
    } else {
      // Finished → mark onboarded and go home
      localStorage.setItem("onboarded", "true");
      nav("/home");
    }
  };

  /* ---------- Inline theme + layout ---------- */
  const titles = {
    appName: t("appName") || "Aesthetic AI",
    tagline: t("tagline") || "AI-powered skin insights & professional recommendations",
  };

  return (
    <>
      <style>{`
        :root{
          --bg:#0A192F;
          --bg2:#162947;
          --card: rgba(17,24,39,0.95);
          --cardBorder: rgba(55,195,182,0.20);
          --ink:#FFFFFF;
          --muted:#9aa4b2;
          --muted2: rgba(255,255,255,0.85);
          --accent:#37C3B6;
          --accent2:#2CA59A;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow: hidden;
          height: 100vh;
        }

        .onb-page{
          height: 100vh;
          background:
            radial-gradient(1200px 600px at 20% 10%, rgba(55,195,182,0.12), transparent 60%),
            linear-gradient(135deg, var(--bg) 0%, var(--bg2) 100%);
          color: var(--ink);
          display: grid;
          grid-template-rows: auto 1fr auto;
          padding: 0;
        }

        /* Header */
        .onb-header{
          display:flex; 
          justify-content: space-between; 
          align-items:center;
          padding: 16px 20px;
          max-width: 1400px; 
          width: 100%; 
          margin: 0 auto;
          height: 70px;
          flex-shrink: 0;
        }
        .brand{
          display:flex; align-items:center; gap: 10px;
        }
        .brand-badge{
          width: 44px; height: 44px; border-radius: 12px; display:flex; align-items:center; justify-content:center;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          box-shadow: 0 10px 30px rgba(55,195,182,0.3);
          color: #fff;
          overflow: hidden;
        }
        .brand-logo{
          width: 48px;
          height: 48px;
          object-fit: contain;
          border-radius: 6px;
        }
        .brand-title{
          font-weight: 900; letter-spacing: .4px; font-size: clamp(1.1rem, 2.2vw, 1.35rem);
        }
        .skip-btn{
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.06);
          color: #e8f2ff;
          border-radius: 999px;
          padding: 8px 16px;
          font-weight: 700;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        .skip-btn:hover{ 
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.3);
        }

        /* Main hero area */
        .onb-main{
          display: grid;
          place-items: center;
          padding: 10px 20px;
          height: 100%;
          overflow: hidden;
          flex: 1;
        }
        .onb-frame{
          width: 100%;
          max-width: 1200px;
          height: 100%;
          max-height: 650px;
          border-radius: 20px;
          border: 1px solid var(--cardBorder);
          background: linear-gradient(180deg, rgba(17,24,39,0.95), rgba(10,17,32,0.95));
          box-shadow: 0 25px 60px rgba(0,0,0,.45);
          padding: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Slides viewport/track */
        .slides-viewport{
          overflow: hidden; 
          border-radius: 16px;
          position: relative;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .slides-track{
          display:flex; 
          transition: transform .45s ease;
          will-change: transform;
          height: 100%;
        }
        .slide{
          min-width: 100%;
          display:grid;
          grid-template-columns: 1fr;
          gap: 20px;
          padding: 20px;
          align-items: center;
          height: 100%;
        }
        
        @media (min-width: 980px){
          .slide{ 
            grid-template-columns: 1.1fr .9fr; 
            padding: 3px; 
            gap: 10px; 
            height: 100%;
          }
        }

        /* Perfectly placed image styling */
        .slide-image-container{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .slide-image-container img{
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 16px;
          border: 1px solid rgba(55,195,182,0.15);
          box-shadow: 0 10px 10px rgba(0,0,0,0.4);
          transition: transform 0.3s ease;
        }

        .slide-image-container:hover img {
          transform: scale(1.02);
        }

        .slide-copy{
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          padding: 20px 0;
        }
        .slide-copy h2{
          margin: 0 0 20px;
          font-weight: 900;
          font-size: clamp(1.6rem, 3.6vw, 2.8rem);
          line-height: 1.15;
          background: linear-gradient(135deg, #fff 0%, var(--accent) 90%);
          -webkit-background-clip: text; 
          background-clip: text; 
          color: transparent;
        }
        .slide-copy p{
          margin: 0;
          color: var(--muted2);
          font-size: clamp(1rem, 2vw, 1.3rem);
          line-height: 1.6;
        }

        /* Bottom controls */
        .onb-controls{
          display:flex; 
          justify-content: space-between; 
          align-items: center;
          gap: 12px; 
          margin-top: 0px;
          padding: 0 10px;
          flex-shrink: 0;
        }
        .dots{ 
          display:flex; 
          gap: 8px; 
          align-items: center; 
        }
        .dot{
          width: 9px; 
          height: 9px; 
          border-radius: 999px;
          background: rgba(255,255,255,.35);
          transition: all .25s;
          border: none;
          cursor: pointer;
        }
        .dot.active{
          width: 22px; 
          background: var(--accent);
          box-shadow: 0 0 0 4px rgba(55,195,182,0.15) inset;
        }

        .cta-row{ 
          display:flex; 
          gap: 10px; 
        }
        .btn{
          border: none; 
          cursor: pointer;
          border-radius: 12px; 
          font-weight: 800;
          padding: 14px 24px;
          font-size: 15px;
          transition: all 0.3s ease;
          min-width: 120px;
        }
        .btn-primary{
          color: #fff;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          box-shadow: 0 8px 28px rgba(55,195,182,0.35);
        }
        .btn-primary:hover{ 
          filter: brightness(1.1);
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(55,195,182,0.45);
        }

        /* Footer tagline */
        .onb-footer{
          max-width: 1200px; 
          width: 100%; 
          margin: 0 auto;
          padding: 15px 20px;
          color: var(--muted);
          display:flex; 
          justify-content:center; 
          text-align:center;
          flex-shrink: 0;
          height: 50px;
        }
        .tagline{
          font-size: clamp(.95rem, 2vw, 1.05rem);
        }

        /* Mobile optimizations */
        @media (max-width: 979px) {
          .onb-page {
            height: 100vh;
            overflow: hidden;
          }
          
          .onb-frame {
            max-height: 85vh;
            padding: 15px;
          }
          
          .slide {
            padding: 15px;
            gap: 15px;
            grid-template-rows: 1fr auto;
          }
          
          .slide-image-container {
            padding: 15px;
            height: 300px;
          }
          
          .slide-image-container img {
            max-height: 260px;
            max-width: 95%;
          }
          
          .slide-copy {
            padding: 10px 0;
            text-align: center;
          }
          
          .onb-controls {
            margin-top: 15px;
          }
        }

        /* Small mobile devices */
        @media (max-width: 480px) {
          .onb-header {
            padding: 12px 15px;
            height: 60px;
          }
          
          .onb-main {
            padding: 5px 15px;
          }
          
          .onb-frame {
            padding: 12px;
            max-height: 80vh;
          }
          
          .slide {
            padding: 10px;
            gap: 12px;
          }
          
          .slide-image-container {
            padding: 10px;
            height: 250px;
          }
          
          .slide-image-container img {
            max-height: 220px;
            max-width: 95%;
          }
          
          .slide-copy h2 {
            margin-bottom: 12px;
            font-size: 1.4rem;
          }
          
          .slide-copy p {
            font-size: 0.95rem;
          }
          
          .btn {
            padding: 12px 20px;
            font-size: 14px;
            min-width: 100px;
          }
          
          .onb-footer {
            padding: 10px 15px;
            height: 40px;
          }
        }

        /* Tablet landscape */
        @media (min-width: 768px) and (max-width: 979px) and (orientation: landscape) {
          .onb-frame {
            max-height: 90vh;
          }
          
          .slide-image-container {
            height: 280px;
          }
          
          .slide-image-container img {
            max-height: 240px;
          }
        }

        /* Desktop optimizations */
        @media (min-width: 980px) {
          .slide-image-container {
            height: 380px;
          }
          
          .slide-image-container img {
            max-height: 340px;
            max-width: 95%;
          }
        }

        /* Large desktop screens */
        @media (min-width: 1400px) {
          .onb-frame {
            max-height: 700px;
          }
          
          .slide-image-container {
            height: 420px;
          }
          
          .slide-image-container img {
            max-height: 380px;
          }
        }

        /* Extra large screens */
        @media (min-width: 1600px) {
          .slide-image-container {
            height: 460px;
          }
          
          .slide-image-container img {
            max-height: 420px;
          }
        }

        /* Image loading states */
        .image-placeholder {
          width: 200px;
          height: 200px;
          background: rgba(55,195,182,0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          font-size: 3rem;
        }

        /* Prevent scroll on all devices */
        html, body {
          overflow: hidden;
          position: fixed;
          width: 100%;
          height: 100%;
        }
      `}</style>

      <div className="onb-page">
        {/* Header */}
        <div className="onb-header">
          <div className="brand" aria-label={titles.appName}>
            <div className="brand-badge" aria-hidden>
              <img src={logoSrc} alt="Logo" className="brand-logo" />
            </div>
            <div className="brand-title">{titles.appName}</div>
          </div>

          <button className="skip-btn" onClick={handleSkip}>
            {t("skip") || "Skip"}
          </button>
        </div>

        {/* Main */}
        <div className="onb-main">
          <div className="onb-frame">
            <div className="slides-viewport">
              <div
                className="slides-track"
                ref={trackRef}
                style={{ transform: `translateX(-${idx * 100}%)` }}
              >
                {SLIDES.map((s) => (
                  <section className="slide" key={s.id}>
                    <div className="slide-image-container">
                      <img
                        src={s.image}
                        alt=""
                        onError={(e) => { 
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                          const placeholder = document.createElement('div');
                          placeholder.className = 'image-placeholder';
                          placeholder.innerHTML = '🖼️';
                          e.currentTarget.parentNode?.appendChild(placeholder);
                        }}
                        loading="eager"
                      />
                    </div>
                    <div className="slide-copy">
                      <h2>{t(s.titleKey) || "Intelligent AI Analysis"}</h2>
                      <p>{t(s.subtitleKey) || "Upload, analyze, and get clear, professional insights in seconds."}</p>
                    </div>
                  </section>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="onb-controls">
              <div className="dots">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === idx ? "active" : ''}`}
                    onClick={() => setIdx(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="cta-row">
                <button className="btn btn-primary" onClick={handleNext}>
                  {idx === SLIDES.length - 1 ? (t("getStarted") || "Get started") : (t("next") || "Next")}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer tagline */}
        <div className="onb-footer">
          <div className="tagline">{titles.tagline}</div>
        </div>
      </div>
    </>
  );
};

export default Onboarding;