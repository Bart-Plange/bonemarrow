import { motion } from "framer-motion";
import { FaCalendarCheck } from "react-icons/fa";
import { HeartPulse, Eye, ShieldCheck } from "lucide-react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between h-auto md:h-screen px-6 md:px-12 z-10 py-16 md:py-0">
        
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left p-6 md:p-10 flex-1 space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-red-700 to-red-500 text-transparent bg-clip-text mt-8 md:mt-0">
            <Typewriter
              options={{
                strings: ["The Best", "Specialized", "Your Expert"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text">
            Bone Marrow Care
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            Providing life-saving treatments with cutting-edge technology and personalized patient care.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a
              href="/appointment"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg shadow-lg text-lg font-medium transition duration-300 transform hover:scale-105"
            >
              Book an Appointment
            </a>
            <a
              href="#about"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg shadow-lg text-lg font-medium border border-gray-200 hover:bg-gray-50 transition duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Image (Closer to Text, Aligned on Right for Desktop, Below for Mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center flex-1 md:ml-6 mt-8 md:mt-0"
        >
          <img
            src="/nhn.png" 
            alt="Bone Marrow Care"
            className="w-[75%] md:w-[420px] h-auto object-contain rounded-lg shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Floating "Book Now" Button */}
      <motion.a
        href="/appointment"
        className="fixed z-50 bottom-32 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1, y: -3 }}
        title="Book Now"
      >
        <FaCalendarCheck size={22} />
      </motion.a>

      {/* Overlapping Cards */}
      <div className="relative px-6 md:px-12 mb-16 mt-10 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto -mt-16 md:-mt-24">
          {[
            {
              title: "Our Mission",
              text: "To offer the highest quality bone marrow treatments with precision and innovation.",
              icon: <HeartPulse size={40} className="text-red-700" />,
            },
            {
              title: "Our Vision",
              text: "To be a global leader in hematology and transplant care.",
              icon: <Eye size={40} className="text-red-700" />,
            },
            {
              title: "Our Values",
              text: "Excellence, Innovation, Integrity, Commitment.",
              icon: <ShieldCheck size={40} className="text-red-700" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative p-8 transition-all duration-300 transform hover:scale-105 bg-white shadow-2xl rounded-xl border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-center text-gray-900">
                {item.title}
              </h3>
              {/* Short Red Underline with Shadow */}
              <div className="w-12 h-1 bg-red-600 mx-auto my-4 shadow-md shadow-red-500"></div>
              <p className="mt-2 text-center text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;