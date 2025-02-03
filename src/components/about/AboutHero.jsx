import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div className="relative bg-blue-700 text-white py-20 mt-10 ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://via.placeholder.com/1500x800')" }} // Replace with hero image URL
      ></div>
      
      {/* Hero Content */}
      <div className="relative container mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Our Bone Marrow Care Center
        </motion.h1>
        <motion.p
          className="text-xl text-gray-200 mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our dedicated team provides the highest level of care for bone marrow and blood disorder treatments.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutHero;
