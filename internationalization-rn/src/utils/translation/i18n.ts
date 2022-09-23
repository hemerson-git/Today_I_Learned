import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./Login/en.json";
import pt from "./Login/pt.json";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  resources: {
    en,
    pt,
  },

  react: {
    useSuspense: false,
  },

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
