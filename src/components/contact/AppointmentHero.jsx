import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const AppointmentHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative h-[80vh] md:h-screen bg-gray-100 flex items-center justify-center"
      style={{
        backgroundImage: "url('/booking.png')",
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
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-blue-600"
            >
              <Typewriter
                options={{
                  strings: ["Book an Appointment", "Schedule a Consultation", "Plan Your Visit"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Secure your spot with our specialists for world-class medical consultation.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="#appointment-form"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg shadow-md text-lg font-medium transition duration-300 transform hover:scale-105"
            >
              Book Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentHero;
