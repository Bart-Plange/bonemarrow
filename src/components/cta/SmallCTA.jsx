import { useState } from "react";
import AuthModal from "../users/AuthModal";

const SmallCTA = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="flex justify-center items-center mt-10 mb-10">
      <div className="bg-red-100 border border-red-300 p-4 rounded-lg shadow-md text-center">
        <p className="text-lg font-semibold text-red-900">
          Stay tuned for updates! Log in or register to track your appointments and access exclusive content.
        </p>
        <button
          onClick={() => setIsAuthOpen(true)}
          className="mt-3 px-5 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow-md hover:from-red-700 hover:to-red-800 transition-all"
        >
          Log In
        </button>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
};

export default SmallCTA;
