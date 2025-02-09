import { useState, useEffect } from "react";
import axios from "axios";

const Settings = () => {
  const [settings, setSettings] = useState({ theme: "light", fontSize: "medium", language: "en" });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/api/users/settings", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSettings(response.data.settings);
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };
    fetchSettings();
  }, []);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        "http://localhost:5000/api/users/settings",
        settings,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Settings updated successfully!");
    } catch (error) {
      console.error("Error updating settings:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">⚙️ Settings</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Theme:</label>
        <select
          value={settings.theme}
          onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
          className="border p-2 w-full"
        >
          <option value="light">🌞 Light</option>
          <option value="dark">🌙 Dark</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Font Size:</label>
        <select
          value={settings.fontSize}
          onChange={(e) => setSettings({ ...settings, fontSize: e.target.value })}
          className="border p-2 w-full"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <button onClick={handleSave} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
