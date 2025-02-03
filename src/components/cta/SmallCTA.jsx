import { useState } from "react";
import AuthModal from "../users/AuthModal";

const SmallCTA = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="flex justify-center items-center mt-10 mb-10">
      <div className="bg-blue-100 border border-blue-300 p-4 rounded-lg shadow-md text-center">
        <p className="text-lg font-semibold text-blue-900">
          Stay tuned for updates! Log in or register to track your appointments and access exclusive content.
        </p>
        <button
          onClick={() => setIsAuthOpen(true)}
          className="mt-3 px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
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
