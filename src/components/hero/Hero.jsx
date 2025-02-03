import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCalendarCheck } from "react-icons/fa";

const words = ["Advanced", "Specialized", "Expert"];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // Change word every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section with Optimized Background Image */}
      <section
        className="relative h-[80vh] md:h-screen bg-gray-100 flex items-center justify-center"
        style={{
          backgroundImage: "url('/nhn.png')",
          backgroundSize: "40%",
          backgroundPosition: "top 60% right 10%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for Better Readability */}
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
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1.2, ease: "easeInOut" }} // Smooth transition
                className="text-blue-600"
              >
                {words[wordIndex]}
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
          },
          {
            title: "Our Vision",
            text: "To be a global leader in hematology and transplant care.",
          },
          {
            title: "Our Values",
            text: "Excellence, Innovation, Integrity, Commitment.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
