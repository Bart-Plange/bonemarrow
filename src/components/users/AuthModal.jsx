import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AuthModal = ({ isOpen, onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", isAdmin: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // ✅ Redirect based on role
        if (response.data.isAdmin) {
          navigate("/admin-dashboard");
        } else {
          navigate("/dashboard");
        }
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
        ? "http://localhost:5000/api/auth/register"
        : "http://localhost:5000/api/auth/login";
  
      const response = await axios.post(url, formData);
  
      if (isRegister) {
        alert("Registration successful! Please check your email to verify your account.");
        return;
      }
  
      localStorage.setItem("token", response.data.token);
      response.data.isAdmin ? navigate("/admin-dashboard") : navigate("/dashboard");
  
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-10 backdrop-blur-md">
      <motion.div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-2">
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
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Register as Admin?</label>
                <input
                  type="checkbox"
                  checked={formData.isAdmin}
                  onChange={(e) => setFormData({ ...formData, isAdmin: e.target.checked })}
                  className="ml-2"
                />
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
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-2 bg-blue-500 text-white rounded-md ${
              loading ? "opacity-50" : "hover:bg-blue-600"
            } transition-all`}
          >
            {loading ? "Loading..." : isRegister ? "Register" : "Login"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>

        {/* Toggle Between Login & Register */}
        <p className="text-gray-600 text-center mt-4">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={() => setIsRegister(!isRegister)} className="text-blue-600 hover:underline">
            {isRegister ? "Log in" : "Register now"}
          </button>
        </p>

        {/* Close Button */}
        <button onClick={onClose} className="mt-4 text-gray-500 hover:text-gray-700 text-sm block mx-auto">
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default AuthModal;
