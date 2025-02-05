import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FullCTA = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-blue-900 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-90"></div>

      {/* Content */}
      <motion.div
        className="relative text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Have Questions? Get Answers.
        </h2>
        <p className="mt-4 text-lg text-gray-200">
          Explore our Educational Resources and FAQs to learn more about bone marrow health, procedures, and treatments.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/resources#faqs"
            className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Visit FAQs
          </Link>
          <Link
            to="/resources"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold text-lg shadow-md transition duration-300"
          >
            Explore Resources
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default FullCTA;
