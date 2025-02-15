import { motion } from "framer-motion";
import { useState } from "react";
import Typewriter from "typewriter-effect";

const AboutHero = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div>
      {/* About Hero Section */}
      <section className="relative bg-gray-100 flex flex-col-reverse md:grid md:grid-cols-2 md:items-center h-auto md:h-screen px-6 md:px-12">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left bg-white bg-opacity-95 p-8 rounded-xl shadow-lg max-w-3xl mx-auto md:ml-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-blue-600"
            >
              <Typewriter
                options={{
                  strings: ["Who We Are", "Our Mission", "About Us"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Our dedicated team provides world-class care for bone marrow and blood disorder treatments.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <a
              href="#about"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg shadow-md text-lg font-medium transition duration-300 transform hover:scale-105"
            >
              Learn More About Us
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
            src="/ab.png"
            alt="About Us"
            className="w-full md:w-[500px] h-auto object-contain"
          />
        </motion.div>
      </section>

      {/* Video Section */}
      <div className="relative flex justify-center items-center py-16 bg-gray-50">
        <motion.div
          className="w-full max-w-3xl rounded-lg overflow-hidden shadow-xl relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Video Embed */}
          <div className="relative pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video URL
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="About Us Video"
              className="absolute top-0 left-0 w-full h-full object-cover"
            ></iframe>
            {/* Dynamic Video Overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                showOverlay ? "bg-black bg-opacity-70" : "bg-black bg-opacity-40 hover:bg-opacity-50"
              }`}
              onMouseEnter={() => setShowOverlay(true)}
              onMouseLeave={() => setShowOverlay(false)}
            >
              <button className="text-white text-lg font-semibold px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition transform hover:scale-110">
                ▶ Play Video
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;
