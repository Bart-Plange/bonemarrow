import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios"; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await axios.post("http://localhost:5000/api/contact/submit", formData);
      setResponseMessage("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponseMessage("Failed to send message. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-[70vh] flex flex-col items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center px-6">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-xl text-gray-200">Have questions? We’re here to help. Reach out today!</p>
          <button onClick={() => document.getElementById("contact-form").scrollIntoView({ behavior: "smooth" })} className="mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-6 md:px-12 container mx-auto">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Contact Information */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900">Get in Touch</h3>
            <p className="text-gray-600 mt-2">Reach out to us through any of the following channels.</p>
            <span className="w-full h-1 bg-blue-500 flex text-xl my-2"></span>
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
                <span className="text-gray-700">123 Health St, New York, NY</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-600 text-xl" />
                <span className="text-gray-700">+1 (234) 567-890</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-600 text-xl" />
                <span className="text-gray-700">contact@bonemarrowcare.com</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="bg-white p-6 rounded-lg shadow-md" id="contact-form">
            <h3 className="text-4xl font-semibold text-blue-900">Send Us a Message</h3>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded-lg mt-1" placeholder="Enter your name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded-lg mt-1" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Your Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full p-3 border rounded-lg mt-1" placeholder="Write your message..." />
              </div>
              {responseMessage && <p className="text-center text-green-600">{responseMessage}</p>}
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-md transition duration-300" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
