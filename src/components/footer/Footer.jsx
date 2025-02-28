import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-10 relative overflow-hidden">
      {/* Animated Background Line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 to-red-500"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      ></motion.div>

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
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-red-300 transition duration-300"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="mt-2 text-gray-300">Email: contact@bonemarrowcare.com</p>
          <p className="text-gray-300">Phone: +1 (234) 567-890</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {[
              { Icon: FaFacebook, url: "https://facebook.com" },
              { Icon: FaTwitter, url: "https://twitter.com" },
              { Icon: FaInstagram, url: "https://instagram.com" },
              { Icon: FaLinkedin, url: "https://linkedin.com" },
            ].map(({ Icon, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-300 text-2xl transition duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright and Links */}
      <div className="text-center mt-10 text-gray-400">
        <div>&copy; {new Date().getFullYear()} Bone Marrow Care. All rights reserved.</div>
        <div className="mt-2">
          <Link
            to="/terms"
            className="hover:text-red-300 transition duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Terms and Conditions
          </Link>{" "}
          |{" "}
          <Link
            to="/privacy"
            className="hover:text-red-300 transition duration-300 ml-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
