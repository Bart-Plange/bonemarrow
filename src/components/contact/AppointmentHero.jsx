import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const AppointmentHero = () => {
  return (
    <section className="relative bg-gray-100 flex flex-col-reverse md:grid md:grid-cols-2 md:items-center h-auto md:h-screen px-6 md:px-12">
      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left bg-white bg-opacity-95 p-8 rounded-xl shadow-lg max-w-3xl mx-auto md:ml-0"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-red-900 leading-tight">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-red-600"
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
        <p className="mt-4 text-red-700 text-lg">
          Secure your spot with our specialists for world-class medical consultation.
        </p>
        <div className="mt-6 flex justify-center md:justify-start">
          <a
            href="#appointment-form"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg shadow-md text-lg font-medium transition duration-300 transform hover:scale-105"
          >
            Book Now
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
          src="/booking.png"
          alt="Book an Appointment"
          className="w-full md:w-[500px] h-auto object-contain"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default AppointmentHero;
