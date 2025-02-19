import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-red-50 to-red-100 shadow-2xl rounded-2xl py-12 px-8 md:py-16 md:px-12 max-w-6xl mx-auto border border-red-200 flex flex-col md:flex-row items-center justify-between gap-8"
    >
      {/* Left Side - Text Content */}
      <div className="md:w-2/3 text-center md:text-left space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-800 leading-tight">
          Prioritize Your Health Today!
        </h2>
        <p className="text-red-700 text-lg md:text-xl">
          Book an appointment with our experts or reach out to us for personalized care and guidance.
        </p>
      </div>

      {/* Right Side - Buttons */}
      <div className="flex flex-col md:w-1/3 gap-4 w-full md:w-auto">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
          <Link
            to="/appointment"
            className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 shadow-lg text-center block"
          >
            Book an Appointment
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 shadow-lg text-center block"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTA;
