import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const mostVisitedPages = [
  { name: "Home", path: "/" },
  { name: "Our Services", path: "/services" },
  { name: "Doctors & Specialists", path: "/doctors" },
  { name: "Appointments", path: "/appointments" },
  { name: "Contact Us", path: "/contact" },
];

const NotFound = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Auto-redirect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [navigate]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submit (redirecting to a search page)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  // Handle Report an Issue
  const handleReportIssue = () => {
    const subject = encodeURIComponent("Report Missing Page - 404 Error");
    const body = encodeURIComponent(
      `Hello Support,\n\nI encountered a missing page at: ${window.location.href}\n\nPlease look into this issue.\n\nThank you!`
    );
    window.location.href = `mailto:support@bonemarrowhospital.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      {/* Animated Error Number */}
      <motion.h1
        className="text-9xl font-extrabold text-green-700"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>

      {/* Animated Error Message */}
      <motion.p
        className="text-2xl text-gray-700 mt-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      <motion.p
        className="text-gray-500 mt-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Redirecting to the homepage in 5 seconds...
      </motion.p>

      {/* Search Bar */}
      <motion.form
        className="mt-6 flex items-center bg-white shadow-md rounded-lg overflow-hidden w-full max-w-md"
        onSubmit={handleSearchSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <input
          type="text"
          placeholder="Search for a page..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="flex-grow px-4 py-2 outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-700 text-white font-medium hover:bg-green-800 transition"
        >
          Search
        </button>
      </motion.form>

      {/* Most Visited Pages */}
      <motion.div
        className="mt-8 w-full max-w-md bg-white p-4 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3 className="text-lg font-bold text-gray-700 mb-3 text-center">
          Most Visited Pages
        </h3>
        <ul className="text-gray-600">
          {mostVisitedPages.map((page, index) => (
            <li key={index} className="mb-2">
              <Link
                to={page.path}
                className="hover:text-green-700 transition text-center block"
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Buttons Section */}
      <motion.div
        className="mt-6 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {/* Redirect Button */}
        <Link
          to="/"
          className="px-6 py-3 bg-green-700 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-green-800 transition"
        >
          Go Home Now
        </Link>

        {/* Report an Issue Button */}
        <button
          onClick={handleReportIssue}
          className="px-6 py-3 bg-red-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-red-700 transition"
        >
          Report an Issue
        </button>
      </motion.div>
    </div>
  );
};

export default NotFound;
