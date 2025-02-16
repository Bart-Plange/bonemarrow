import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ChevronDown, ChevronUp, Info, ShieldCheck, CheckCircle, AlertTriangle } from "lucide-react";

const faqs = [
    // 🔴 General Questions
    {
      question: "What is a bone marrow transplant, and why might I need one?",
      answer:
        "A bone marrow transplant replaces damaged or diseased bone marrow with healthy stem cells. It is often required for patients with leukemia, lymphoma, aplastic anemia, or other blood disorders.",
      icon: <Info size={20} className="text-red-500" />,
    },
    {
      question: "How do I know if I'm eligible for a bone marrow transplant?",
      answer:
        "Eligibility is determined based on your medical condition, overall health, and the availability of a matching donor. Our specialists conduct thorough assessments before recommending a transplant.",
      icon: <CheckCircle size={20} className="text-green-500" />,
    },
    
    // 🩸 Donor & Matching
    {
      question: "What are the types of bone marrow transplants?",
      answer:
        "There are two main types: Autologous (using your own stem cells) and Allogeneic (using a donor's stem cells). The choice depends on your condition.",
      icon: <ShieldCheck size={20} className="text-purple-500" />,
    },
    {
      question: "How is a bone marrow donor selected?",
      answer:
        "For allogeneic transplants, we find a matching donor from the national registry or a close family member. A closer match reduces complications.",
      icon: <Info size={20} className="text-red-500" />,
    },
    {
      question: "Can I be my own bone marrow donor?",
      answer:
        "Yes! In an autologous transplant, we collect and store your stem cells before chemotherapy or radiation and reinfuse them afterward.",
      icon: <CheckCircle size={20} className="text-green-500" />,
    },
  
    // 🔄 Post-Transplant Care
    {
      question: "What is the recovery process like?",
      answer:
        "Recovery takes 3-6 months for your immune system to rebuild. Full recovery may take up to a year, depending on your response to the transplant.",
      icon: <Info size={20} className="text-red-500" />,
    },
    {
      question: "Are there side effects after a transplant?",
      answer:
        "Yes, common side effects include fatigue, infections, and graft-versus-host disease (GVHD) in donor transplants. Regular monitoring helps manage these risks.",
      icon: <AlertTriangle size={20} className="text-red-500" />,
    },
    {
      question: "How can I protect myself after a transplant?",
      answer:
        "Post-transplant patients should avoid crowds, maintain hygiene, eat a balanced diet, and follow up regularly with their doctor to prevent infections.",
      icon: <ShieldCheck size={20} className="text-purple-500" />,
    },
  
    // ⚠️ Risks & Success Rates
    {
      question: "What are the risks associated with a bone marrow transplant?",
      answer:
        "Risks include infection, rejection, organ damage, and graft-versus-host disease (GVHD). Your doctor will discuss the risks based on your condition.",
      icon: <AlertTriangle size={20} className="text-red-500" />,
    },
    {
      question: "What is the success rate of bone marrow transplants?",
      answer:
        "Success rates vary based on the disease type, donor match, and patient health. Some transplants have over a 70% success rate.",
      icon: <CheckCircle size={20} className="text-green-500" />,
    },
  ];

const BoneMarrowFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-gradient-to-r from-red-50 to-red-100 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-red-900">Bone Marrow Transplant FAQs</h2>
        <p className="text-gray-700 mt-4">Learn more about the transplant process, donor selection, and recovery.</p>

        {/* Search Bar */}
        <div className="relative mt-6">
          <Search className="absolute left-4 top-3 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </motion.div>

      {/* FAQs List */}
      <div className="mt-10 max-w-3xl mx-auto space-y-4">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden border-l-4 border-red-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-medium text-red-700 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex items-center gap-3">
                  {faq.icon} {faq.question}
                </span>
                {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
              <motion.div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
              >
                <p className="px-6 pb-4 text-gray-700">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-4">No matching FAQs found.</p>
        )}
      </div>

      {/* Schedule Consultation Button */}
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a
          href="/appointment"
          className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg shadow-md text-lg font-medium transition duration-300 transform hover:scale-105 hover:from-red-700 hover:to-red-800"
        >
          Schedule a Consultation
        </a>
      </motion.div>
    </section>
  );
};

export default BoneMarrowFAQ;
