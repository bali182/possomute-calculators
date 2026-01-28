import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "../locales/en_EN.json";
import hu from "../locales/hu_HU.json";

export const I18nInstance = i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
  resources: {
    en: { translation: en },
    hu: { translation: hu }
  },
  fallbackLng: "en",
  supportedLngs: ["en", "hu"],
  load: "languageOnly",
  interpolation: {
    escapeValue: false
  },
  keySeparator: false,
  react: {
    useSuspense: false
  },
  detection: {
    order: ["navigator", "htmlTag"],
    caches: []
  }
});
