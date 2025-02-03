import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold">Bone Marrow Care</h3>
          <p className="mt-2 text-gray-300">
            Providing advanced treatments and compassionate care for bone marrow health.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
            <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="mt-2 text-gray-300">Email: contact@bonemarrowcare.com</p>
          <p className="text-gray-300">Phone: +1 (234) 567-890</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-blue-300 text-2xl"><FaFacebook /></a>
            <a href="#" className="text-gray-300 hover:text-blue-300 text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-blue-300 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-blue-300 text-2xl"><FaLinkedin /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-gray-400">
        &copy; {new Date().getFullYear()} Bone Marrow Care. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
