import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ua from "./ua";
import en from "./en";
import ru from "./ru";

i18n.use(initReactI18next).init({
  resources: {
    en,
    ua,
    ru,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
