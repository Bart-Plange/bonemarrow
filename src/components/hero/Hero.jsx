import { motion } from "framer-motion";
import { FaCalendarCheck } from "react-icons/fa";
import { HeartPulse, Eye, ShieldCheck } from "lucide-react";

const words = ["Advanced", "Specialized", "Expert"];

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[80vh] md:h-screen bg-gray-100 flex items-center justify-center"
        style={{
          backgroundImage: "url('/nhn.png')",
          backgroundSize: "40%",
          backgroundPosition: "top 60% right 10%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-40"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left bg-white bg-opacity-95 p-8 rounded-xl shadow-lg max-w-3xl ml-[-30px]"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              <div className="words">
                {words.map((word, index) => (
                  <span key={index}>{word}</span>
                ))}
              </div>{" "}
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
        </div>

        {/* Floating "Book Now" Button */}
        <motion.a
          href="/appointment"
          className="fixed bottom-20 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1, y: -3 }}
          title="Book Now"
        >
          <FaCalendarCheck size={24} />
        </motion.a>
      </section>

      {/* Mission, Vision, Values Section */}
      <div className="my-12 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {[
          {
            title: "Our Mission",
            text: "To offer the highest quality bone marrow treatments with precision and innovation.",
            icon: <HeartPulse size={40} className="text-blue-700" />,
          },
          {
            title: "Our Vision",
            text: "To be a global leader in hematology and transplant care.",
            icon: <Eye size={40} className="text-blue-700" />,
          },
          {
            title: "Our Values",
            text: "Excellence, Innovation, Integrity, Commitment.",
            icon: <ShieldCheck size={40} className="text-blue-700" />,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="relative p-6 rounded-xl shadow-md border border-gray-200 bg-white transition-all duration-300 hover:border-transparent hover:shadow-[0px_0px_10px_3px_rgba(255,34,136,0.6),_0px_0px_10px_3px_rgba(56,126,240,0.6)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-3">{item.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 text-center">{item.title}</h3>
            <p className="text-gray-600 mt-2 text-center">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
