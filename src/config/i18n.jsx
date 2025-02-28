import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translations
const resources = {
  en: {
    translation: {
      "Settings": "Settings",
      "Dark Mode": "Dark Mode",
      "Light Mode": "Light Mode",
      "Font Size": "Font Size",
      "Small": "Small",
      "Medium": "Medium",
      "Large": "Large",
      "Language": "Language",
      "English": "English",
      "Spanish": "Español",
      "French": "Français",
    }
  },
  es: {
    translation: {
      "Settings": "Configuraciones",
      "Dark Mode": "Modo Oscuro",
      "Light Mode": "Modo Claro",
      "Font Size": "Tamaño de Fuente",
      "Small": "Pequeño",
      "Medium": "Mediano",
      "Large": "Grande",
      "Language": "Idioma",
      "English": "Inglés",
      "Spanish": "Español",
      "French": "Francés",
    }
  },
  fr: {
    translation: {
      "Settings": "Paramètres",
      "Dark Mode": "Mode Sombre",
      "Light Mode": "Mode Clair",
      "Font Size": "Taille de la Police",
      "Small": "Petit",
      "Medium": "Moyen",
      "Large": "Grand",
      "Language": "Langue",
      "English": "Anglais",
      "Spanish": "Espagnol",
      "French": "Français",
    }
  }
};

// Initialize i18next
i18n.use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
