import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const backgroundAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 5, repeat: Infinity, repeatType: "reverse" },
  },
};

const AuthModal = ({ isOpen, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", isAdmin: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get(`${backendUrl}/api/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        response.data.isAdmin ? navigate("/admin-dashboard") : navigate("/dashboard");
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const url = isRegister
        ? `${backendUrl}/api/auth/register`
        : `${backendUrl}/api/auth/login`;

      const response = await axios.post(url, formData);

      if (isRegister) {
        alert("🎉 Registration successful! Please check your email to verify your account.");
        return;
      }

      localStorage.setItem("token", response.data.token);
      response.data.isAdmin ? navigate("/admin-dashboard") : navigate("/dashboard");

      onClose();
    } catch (err) {
      setError(err.response?.data?.message || "❌ An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* 🔥 Animated Red Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-red-800 to-red-600 flex overflow-hidden"
        initial="hidden"
        animate="visible"
      >
        {/* 🎈 Floating Red Circles */}
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-red-400 opacity-40 rounded-full blur-2xl"
            variants={backgroundAnimation}
            style={{
              width: `${80 + index * 40}px`,
              height: `${80 + index * 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      {/* 🔴 Modal Content */}
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-red-700 text-center mb-4">
          {isRegister ? "Join Us! 🎉" : "Welcome Back! 👋"}
        </h2>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  checked={formData.isAdmin}
                  onChange={(e) => setFormData({ ...formData, isAdmin: e.target.checked })}
                  className="mr-2"
                />
                <label className="text-gray-700">Register as Admin?</label>
              </div>
            </>
          )}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 bg-red-600 text-white rounded-md ${
              loading ? "opacity-50" : "hover:bg-red-700"
            } transition-all`}
          >
            {loading ? "Loading..." : isRegister ? "Register" : "Login"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>

        {/* 🔄 Toggle Between Login & Register */}
        <p className="text-gray-600 text-center mt-4">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={() => setIsRegister(!isRegister)} className="text-red-600 hover:underline">
            {isRegister ? "Log in" : "Register now"}
          </button>
        </p>

        {/* ❌ Close Button */}
        <button onClick={onClose} className="mt-4 text-gray-500 hover:text-gray-700 text-sm block mx-auto">
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default AuthModal;
