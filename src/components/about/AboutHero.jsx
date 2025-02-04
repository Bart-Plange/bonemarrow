import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="/ab.png" 
          alt="Hero Background"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-blue-500 to-blue-700 opacity-75"></div>
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-6 py-24 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Our Bone Marrow Care Center
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-200 mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Our dedicated team provides the highest level of care for bone marrow and blood disorder treatments.
        </motion.p>
        <motion.a
          href="#"
          className="inline-block bg-blue-800 hover:bg-blue-900 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Learn More About Us
        </motion.a>
      </div>

      {/* Video Introduction Section */}
      <div className="relative container mx-auto px-6 pb-24 mt-10">
        <motion.p
          className="text-center text-gray-300 text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Learn more about our mission and values from our leadership.
        </motion.p>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual video URL
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Hospital Introduction"
              className="w-full h-full object-cover"
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <button className="text-white text-lg font-semibold px-4 py-2 bg-blue-800 hover:bg-blue-900 rounded-full transition transform hover:scale-105">
                Play Video
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;
