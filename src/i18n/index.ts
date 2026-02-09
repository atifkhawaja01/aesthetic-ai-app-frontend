import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import el from "./el.json";

function detectInitialLang() {
  const saved = localStorage.getItem("lang");
  if (saved === "en" || saved === "el") return saved;
  const nav = (navigator?.language || "").toLowerCase();
  return nav.startsWith("el") ? "el" : "en";
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    el: { translation: el }
  },
  lng: detectInitialLang(),
  fallbackLng: "en",
  returnObjects: false,          // <— avoid accidental object-as-string
  interpolation: { escapeValue: false }
});

export default i18n;
