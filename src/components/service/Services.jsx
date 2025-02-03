import { motion } from "framer-motion";
import { FaUserMd, FaMicroscope, FaHospitalUser, FaFileMedical, FaHeartbeat, FaVials } from "react-icons/fa";

const services = [
  {
    title: "Bone Marrow Transplant",
    description: "Advanced transplant procedures for leukemia, lymphoma, and other blood disorders.",
    icon: <FaUserMd size={36} className="text-blue-600" />,
  },
  {
    title: "Hematology Testing",
    description: "Comprehensive blood tests and diagnostics for early disease detection.",
    icon: <FaMicroscope size={36} className="text-blue-600" />,
  },
  {
    title: "Patient Counseling",
    description: "Expert counseling to guide patients and families through treatment options.",
    icon: <FaHospitalUser size={36} className="text-blue-600" />,
  },
  {
    title: "Stem Cell Therapy",
    description: "Innovative treatments using stem cells to regenerate damaged tissues.",
    icon: <FaFileMedical size={36} className="text-blue-600" />,
  },
  {
    title: "Cardiac Monitoring",
    description: "Ongoing monitoring for heart health before and after procedures.",
    icon: <FaHeartbeat size={36} className="text-blue-600" />,
  },
  {
    title: "Lab & Research",
    description: "Cutting-edge research and laboratory services to advance medical treatments.",
    icon: <FaVials size={36} className="text-blue-600" />,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-blue-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Specialized Services
        </motion.h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          We offer cutting-edge treatments and diagnostics to ensure the best care for our patients.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center hover:shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-blue-800 mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
