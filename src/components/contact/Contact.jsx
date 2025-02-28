import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      await axios.post(`${backendUrl}/api/contact/submit`, formData);
      setResponseMessage("✅ Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponseMessage("❌ Failed to send message. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-[70vh] flex flex-col items-center justify-center bg-gradient-to-r from-red-800 to-red-600 text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-xl text-gray-200">Have questions? We’re here to help. Reach out today!</p>
          <button
            onClick={() => document.getElementById("contact-form").scrollIntoView({ behavior: "smooth" })}
            className="mt-6 px-6 py-3 bg-white text-red-700 font-semibold rounded-lg shadow-lg hover:bg-gray-300 transition"
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Contact & Form Section */}
      <div className="py-16 px-6 md:px-12 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold text-red-900">📍 Our Location</h3>
            <div className="flex items-center mt-3">
              <FaMapMarkerAlt className="text-red-600 text-2xl mr-3" />
              <p className="text-gray-700 font-medium">Ridge Hospital, Castle Road, Accra - Ghana</p>
            </div>

            <h3 className="text-2xl font-semibold text-red-900 mt-6">📞 Contact Numbers</h3>
            <div className="mt-3 space-y-2">
              <div className="flex items-center">
                <FaPhone className="text-red-600 text-2xl mr-3" />
                <p className="text-gray-700 font-medium">+233 (0) 556 680 012</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-red-600 text-2xl mr-3" />
                <p className="text-gray-700 font-medium">+233 (0) 546 030 081</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-red-600 text-2xl mr-3" />
                <p className="text-gray-700 font-medium">+233 (0) 205 627 325</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-red-600 text-2xl mr-3" />
                <p className="text-gray-700 font-medium">Office Line: +233 302 261 898</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-red-900 mt-6">✉️ Email Address</h3>
            <div className="flex items-center mt-3">
              <FaEnvelope className="text-red-600 text-2xl mr-3" />
              <p className="text-gray-700 font-medium">info@bmtstemcell.com</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white p-6 rounded-lg shadow-md"
            id="contact-form"
          >
            <h3 className="text-4xl font-semibold text-red-900">Send Us a Message</h3>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-red-300 rounded-lg mt-1 focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-red-300 rounded-lg mt-1 focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full p-3 border border-red-300 rounded-lg mt-1 focus:ring-2 focus:ring-red-500"
                  placeholder="Write your message..."
                />
              </div>
              {responseMessage && <p className="text-center text-green-600">{responseMessage}</p>}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-lg shadow-md transition duration-300"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Full-Width Google Map */}
        <div className="mt-10">
          <iframe
            title="Google Map"
            className="w-full h-80 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0380937593764!2d-0.20125082555304574!3d5.561372494419091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a76309f9c37%3A0xb450873ecf547576!2sGreater%20Accra%20Regional%20Hospital!5e0!3m2!1sen!2sgh!4v1740722068004!5m2!1sen!2sgh"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
