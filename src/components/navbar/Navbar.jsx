import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to toggle blur effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setServicesOpen(false); // Close dropdown when opening mobile menu
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const closeDropdown = () => {
    setServicesOpen(false);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`${
        isScrolled ? "backdrop-blur-md bg-opacity-90 bg-red-200" : "bg-white"
      } shadow-md fixed top-5 w-full z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center text-red-700">
          <img src="/logo.jpeg" alt="logo" className="w-12"/>
          <p className="ml-2">BMT Ghana Stem Cells Unit</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-900 hover:text-red-500">Home</Link>
          <Link to="/about" className="text-gray-900 hover:text-red-500">About</Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button 
              className="text-gray-900 hover:text-red-500 flex items-center"
              onClick={toggleServices}
            >
              Services <span className={`ml-1 transform transition-transform ${servicesOpen ? "rotate-180" : "rotate-0"}`}>▼</span>
            </button>
            {servicesOpen && (
              <div className="absolute left-0 mt-2 bg-white border border-red-300 shadow-lg rounded-lg w-48 transition-opacity duration-200 opacity-100">
                <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-red-100" onClick={closeDropdown}>Our Services</Link>
                <Link to="/appointment" className="block px-4 py-2 text-gray-700 hover:bg-red-100" onClick={closeDropdown}>Appointment</Link>
              </div>
            )}
          </div>

          <Link to="/resources" className="text-gray-900 hover:text-red-500">Health Talks</Link>
          <Link to="/contact" className="text-gray-900 hover:text-red-500">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-red-700 text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-red-300 absolute w-full left-0">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="/" className="text-gray-700 hover:text-red-500" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-red-500" onClick={toggleMenu}>About</Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                className="text-gray-700 hover:text-red-500 flex items-center"
                onClick={toggleServices}
              >
                Services <span className={`ml-1 transform transition-transform ${servicesOpen ? "rotate-180" : "rotate-0"}`}>▼</span>
              </button>
              {servicesOpen && (
                <div className="mt-2 bg-white border border-red-300 shadow-lg rounded-lg w-48 transition-opacity duration-200 opacity-100">
                  <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-red-100" onClick={closeDropdown}>Our Services</Link>
                  <Link to="/appointment" className="block px-4 py-2 text-gray-700 hover:bg-red-100" onClick={closeDropdown}>Appointment</Link>
                </div>
              )}
            </div>

            <Link to="/resources" className="text-gray-700 hover:text-red-500" onClick={toggleMenu}>Health Talks</Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-500" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
