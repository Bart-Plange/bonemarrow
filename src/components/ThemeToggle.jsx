import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { Sun, Moon, Settings, RefreshCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const ThemeToggle = ({ user }) => {
  const { theme, setTheme, fontSize, changeFontSize, language, changeLanguage } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Reset settings to default
  const resetSettings = () => {
    setTheme("light");
    changeFontSize("medium");
    changeLanguage("en");

    if (user) {
      axios.put("/api/users/settings", { theme: "light", fontSize: "medium", language: "en" }, { 
        headers: { Authorization: `Bearer ${user.token}` } 
      });
    }

    window.location.reload(); // Full refresh to reset UI
  };

  return (
    <>
      {/* Floating Settings Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-18 right-6 bg-blue-600 dark:bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-gray-600 transition"
      >
        <Settings size={28} />
      </button>

      {/* Animated Settings Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-16 right-6 bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg w-60"
          >
            <h3 className="text-gray-900 dark:text-gray-100 font-semibold mb-2">{t("Settings")}</h3>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="flex items-center justify-between w-full px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {theme === "light" ? t("Dark Mode") : t("Light Mode")}
              {theme === "light" ? <Moon size={20} className="text-gray-900" /> : <Sun size={20} className="text-yellow-500" />}
            </button>

            {/* Font Size Selector */}
            <div className="mt-3">
              <label className="text-gray-900 dark:text-gray-100 block font-semibold">{t("Font Size")}</label>
              <div className="flex space-x-2 mt-1">
                {["small", "medium", "large"].map((size) => (
                  <button
                    key={size}
                    onClick={() => changeFontSize(size)}
                    className={`px-3 py-1 rounded-md text-sm ${
                      fontSize === size ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                    }`}
                  >
                    {t(size.charAt(0).toUpperCase() + size.slice(1))}
                  </button>
                ))}
              </div>
            </div>

            {/* Language Selector */}
            <div className="mt-3">
              <label className="text-gray-900 dark:text-gray-100 block font-semibold">{t("Language")}</label>
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="w-full mt-1 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              >
                <option value="en">{t("English")}</option>
                <option value="es">{t("Spanish")}</option>
                <option value="fr">{t("French")}</option>
              </select>
            </div>

            {/* Reset Settings Button */}
            <button
              onClick={resetSettings}
              className="flex items-center justify-center w-full mt-4 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
            >
              <RefreshCcw size={20} className="mr-2" /> {t("Reset to Defaults")}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeToggle;
