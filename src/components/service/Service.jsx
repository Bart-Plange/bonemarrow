import { motion } from "framer-motion";
import { FaStethoscope, FaHeartbeat, FaNotesMedical } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaStethoscope className="text-blue-600 text-4xl" />,
    title: "Bone Marrow Transplant",
    description: "Advanced transplant procedures to treat blood-related diseases with precision and care.",
  },
  {
    id: 2,
    icon: <FaHeartbeat className="text-blue-600 text-4xl" />,
    title: "Hematology & Diagnosis",
    description: "State-of-the-art blood tests and diagnostics for early disease detection and treatment.",
  },
  {
    id: 3,
    icon: <FaNotesMedical className="text-blue-600 text-4xl" />,
    title: "Patient Consultation",
    description: "Personalized care and expert advice from top medical specialists.",
  },
];

const Service = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-900"
        >
          Our Medical Services
        </motion.h2>
        <p className="text-gray-600 text-center mt-4">
          We provide expert medical care for bone marrow health and treatment.
        </p>

        {/* Service Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: service.id * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;
