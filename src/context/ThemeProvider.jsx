import { useEffect, useState } from "react";
import axios from "axios";
import i18n from "../config/i18n"; // Your i18n setup
import { ThemeContext } from "../context/ThemeContext";

const ThemeProvider = ({ children, user }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [fontSize, setFontSize] = useState(localStorage.getItem("fontSize") || "medium");
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  // Fetch user settings from backend if logged in
  useEffect(() => {
    if (user) {
      axios.get("/api/users/settings", { headers: { Authorization: `Bearer ${user.token}` } })
        .then(response => {
          const { theme, fontSize, language } = response.data.settings;
          setTheme(theme);
          setFontSize(fontSize);
          setLanguage(language);
          i18n.changeLanguage(language); // Update i18n language
        })
        .catch(err => console.error("Error fetching settings:", err));
    }
  }, [user]);

  // Update user settings in backend
  useEffect(() => {
    if (user) {
      axios.put("/api/users/settings", { theme, fontSize, language }, { headers: { Authorization: `Bearer ${user.token}` } });
    }
  }, [theme, fontSize, language, user]);

  // Function to change language (no page reload needed)
  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang); // Dynamically update language
    localStorage.setItem("language", lang);
  };

  // Function to change font size
  const changeFontSize = (size) => {
    setFontSize(size);
    localStorage.setItem("fontSize", size);

    // Apply font size globally
    document.documentElement.style.fontSize =
      size === "small" ? "14px" : size === "large" ? "18px" : "16px";
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, fontSize, changeFontSize, language, changeLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;