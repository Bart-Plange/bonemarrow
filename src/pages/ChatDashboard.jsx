import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ChatDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login"); // Redirect to login if not authenticated
      }
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Chat Dashboard</h2>
      <p className="text-gray-600">Manage live chat interactions here.</p>
      <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 mt-4 rounded-lg">
        Logout
      </button>
    </div>
  );
};

export default ChatDashboard;
