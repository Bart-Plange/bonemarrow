import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Appoints, Messages, Settings, Recent} from "../components";


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold">Welcome to Your Dashboard! 🎉</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Appoints />
        <Messages />
        <Settings />
      </div>
      <Recent />
      <button onClick={handleLogout} className="mt-6 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
