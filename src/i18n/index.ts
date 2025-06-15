
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {resourceEn} from "@/i18n/resources/en";
import {resourceRu} from "@/i18n/resources/ru";
import {resourceUz} from "@/i18n/resources/uz";

const resources = {
  en: resourceEn,
  ru:resourceRu,
  uz: resourceUz
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'uz',
    fallbackLng: 'uz',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
