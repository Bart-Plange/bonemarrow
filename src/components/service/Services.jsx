import { motion } from "framer-motion";
import { FaUserMd, FaMicroscope, FaHospitalUser, FaFileMedical, FaHeartbeat, FaVials } from "react-icons/fa";

const services = [
  {
    title: "Bone Marrow Transplant",
    description: "Advanced transplant procedures for leukemia, lymphoma, and other blood disorders.",
    icon: <FaUserMd size={36} className="text-red-600" />,
  },
  {
    title: "Hematology Testing",
    description: "Comprehensive blood tests and diagnostics for early disease detection.",
    icon: <FaMicroscope size={36} className="text-red-600" />,
  },
  {
    title: "Patient Counseling",
    description: "Expert counseling to guide patients and families through treatment options.",
    icon: <FaHospitalUser size={36} className="text-red-600" />,
  },
  {
    title: "Stem Cell Therapy",
    description: "Innovative treatments using stem cells to regenerate damaged tissues.",
    icon: <FaFileMedical size={36} className="text-red-600" />,
  },
  {
    title: "Cardiac Monitoring",
    description: "Ongoing monitoring for heart health before and after procedures.",
    icon: <FaHeartbeat size={36} className="text-red-600" />,
  },
  {
    title: "Lab & Research",
    description: "Cutting-edge research and laboratory services to advance medical treatments.",
    icon: <FaVials size={36} className="text-red-600" />,
  },
];

const Services = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* 🔴 Animated Red Bubble */}
      <motion.div
        className="absolute top-[-50px] right-[-80px] w-[250px] h-[250px] bg-red-500 opacity-20 rounded-full z-0"
        animate={{ scale: [1, 1.3, 1] }}
      />

      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold bg-gradient-to-r from-red-700 to-red-500 text-transparent bg-clip-text mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Specialized Services
        </motion.h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-12">
          We offer cutting-edge treatments and diagnostics to ensure the best care for our patients.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-red-300 flex flex-col items-center text-center hover:shadow-xl transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-4 bg-red-100 rounded-full">{service.icon}</div>
              <h3 className="text-xl font-semibold text-red-800 mt-4">{service.title}</h3>
              {/* 🔴 Short Underline */}
              <div className="w-10 h-1 bg-red-600 mx-auto my-2"></div>
              <p className="text-gray-700 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
