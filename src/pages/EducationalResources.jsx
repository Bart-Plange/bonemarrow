import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { EducationalVideos } from "../components";

const articles = [
  {
    title: "Understanding Bone Marrow Transplants",
    description: "An in-depth look at the process and benefits of bone marrow transplants.",
    content: "A bone marrow transplant is a medical procedure where damaged bone marrow is replaced with healthy cells. This is often used for patients with leukemia, lymphoma, and other serious blood disorders..."
  },
  {
    title: "Life After a Bone Marrow Transplant",
    description: "What to expect and how to manage your health post-transplant.",
    content: "After a transplant, recovery can take months to a year. Patients need to monitor for complications, follow strict medication schedules, and maintain a healthy lifestyle..."
  },
  {
    title: "Donating Bone Marrow: What You Need to Know",
    description: "A guide for potential donors on the donation process and its impact.",
    content: "Donating bone marrow can save lives. The process involves matching with a recipient, undergoing a screening, and either providing peripheral blood stem cells or marrow directly..."
  },
];

const faqs = [
  { question: "What is a bone marrow transplant?", answer: "A bone marrow transplant replaces damaged or diseased bone marrow with healthy marrow from a donor or the patient's own cells." },
  { question: "Who needs a bone marrow transplant?", answer: "Patients with leukemia, lymphoma, sickle cell anemia, and other blood disorders may require a transplant." },
  { question: "How long does recovery take?", answer: "Recovery varies but can take several months to a year, depending on the patient's condition." },
];

const EducationalResources = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const location = useLocation();

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white text-center py-20 px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Educational Resources
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Learn more about bone marrow transplants, donations, and post-transplant care.
        </p>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border rounded-lg p-4 bg-white shadow-md cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center w-full text-lg font-semibold">
                {faq.question}
                {expandedIndex === index ? <FaMinus className="text-blue-600" /> : <FaPlus className="text-blue-600" />}
              </div>
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={expandedIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-gray-700 overflow-hidden"
              >
                {faq.answer}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 bg-gray-50 px-6 md:px-12">
        <EducationalVideos />
      </section>

      {/* Articles Section */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-blue-900">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-900">{article.title}</h3>
              <p className="text-gray-700 mt-2">{article.description}</p>
              <button
                onClick={() => setSelectedArticle(article)}
                className="mt-4 text-blue-600 font-semibold hover:underline"
              >
                Read More →
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal for Reading Articles */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-2xl w-full shadow-lg relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              >
                <FaTimes size={20} />
              </button>
              <h2 className="text-2xl font-bold text-blue-900">{selectedArticle.title}</h2>
              <p className="mt-4 text-gray-700">{selectedArticle.content}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EducationalResources;
