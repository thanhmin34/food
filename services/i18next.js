import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "lang/en-US.json";
import vn from "lang/vn.json";

const resources = {
  en: { translation: en },
  vn: { translation: vn },
};

const language = i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "vn",
    fallbackLng: "vn",
    compatibilityJSON: "v3",
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default language;
