import { motion } from "framer-motion";
import { FaCalendarCheck } from "react-icons/fa";
import { HeartPulse, Eye, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

const words = ["Advanced", "Specialized", "Expert"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-100 flex flex-col-reverse md:grid md:grid-cols-2 md:items-center h-auto md:h-screen px-4 md:px-12">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left bg-white bg-opacity-50 p-8 rounded-xl max-w-3xl mx-auto md:ml-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-blue-600"
            >
              {words[index]}
            </motion.span>{" "}
            Bone Marrow Care
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Providing life-saving treatments with cutting-edge technology and personalized patient care.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="/appointment"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg shadow-md text-lg font-medium transition duration-300 transform hover:scale-105"
            >
              Book an Appointment
            </a>
          </div>
        </motion.div>

        {/* Image on Right for Desktop, Above for Mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="/nhn.png"
            alt="Bone Marrow Care"
            className="w-full md:w-[500px] h-auto object-contain"
          />
        </motion.div>
      </section>

      {/* Floating "Book Now" Button */}
      <motion.a
        href="/appointment"
        className="fixed z-50 bottom-32 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1, y: -3 }}
        title="Book Now"
      >
        <FaCalendarCheck size={24} />
      </motion.a>

      {/* Overlapping Cards */}
      <div className="relative px-6 md:px-12 mb-16 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Our Mission",
              text: "To offer the highest quality bone marrow treatments with precision and innovation.",
              icon: <HeartPulse size={40} className="text-white" />,
              bgColor: "bg-blue-900",
            },
            {
              title: "Our Vision",
              text: "To be a global leader in hematology and transplant care.",
              icon: <Eye size={40} className="text-white" />,
              bgColor: "bg-purple-900",
            },
            {
              title: "Our Values",
              text: "Excellence, Innovation, Integrity, Commitment.",
              icon: <ShieldCheck size={40} className="text-white" />,
              bgColor: "bg-green-900",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`relative p-6 rounded-xl shadow-lg text-white ${item.bgColor} transition-all duration-300 transform hover:scale-105`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-center">{item.title}</h3>
              <p className="mt-2 text-center">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
