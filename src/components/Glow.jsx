import { useState, useRef } from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Bone Marrow Transplant", description: "Advanced procedures for leukemia, lymphoma, and other blood disorders." },
  { title: "Hematology Testing", description: "Comprehensive blood tests and diagnostics for early disease detection." },
  { title: "Patient Counseling", description: "Expert guidance for patients and families on treatment options." },
  { title: "Stem Cell Therapy", description: "Innovative treatments using stem cells to regenerate damaged tissues." },
  { title: "Cardiac Monitoring", description: "Continuous heart health monitoring before and after procedures." },
  { title: "Lab & Research", description: "Cutting-edge research and laboratory services to advance medical treatments." },
];

const GlowCard = ({ title, description }) => {
  const cardRef = useRef(null);
  const [glowStyle, setGlowStyle] = useState({ top: "50%", left: "50%" });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setGlowStyle({ top: `${y}%`, left: `${x}%` });
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-300 transition-all duration-300 overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.05 }}
    >
      {/* Glow Effect (Border + Background) */}
      <div
        className="absolute inset-0 rounded-lg transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glowStyle.left} ${glowStyle.top}, rgba(255, 0, 0, 0.2), transparent 60%)`,
          border: `2px solid rgba(255, 0, 0, 0.5)`,
        }}
      />

      {/* Card Content */}
      <h3 className="text-xl font-semibold text-gray-800 relative z-10">{title}</h3>
      <p className="text-gray-600 mt-2 relative z-10">{description}</p>
    </motion.div>
  );
};

const Glow = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-6">
      <h2 className="text-4xl font-bold text-red-700 mb-8">Our Specialized Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {services.map((service, index) => (
          <GlowCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default Glow;
