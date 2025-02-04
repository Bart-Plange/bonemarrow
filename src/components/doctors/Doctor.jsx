import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const doctors = [
  {
    name: "Dr. Emily Brown",
    specialty: "Hematology & Bone Marrow Transplant",
    image: "/doctor1.jpg",
  },
  {
    name: "Dr. James Carter",
    specialty: "Oncology & Stem Cell Research",
    image: "/doctor2.jpg",
  },
  {
    name: "Dr. Sophia Williams",
    specialty: "Immunotherapy & Blood Disorders",
    image: "/doctor3.jpg",
  },
];

const Doctors = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Experts
        </motion.h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Our specialists are dedicated to providing world-class care in hematology and bone marrow health.
        </p>

        {/* Animated Scrolling Doctors */}
        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex space-x-8"
            animate={isPaused ? {} : { x: [-1000, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            }}
          >
            {[...doctors, ...doctors].map((doctor, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center hover:shadow-lg transition-transform transform hover:scale-105 min-w-[300px]"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-600"
                />
                <h3 className="text-xl font-semibold text-blue-800">{doctor.name}</h3>
                <p className="text-gray-600 mt-2">{doctor.specialty}</p>
                <Link
                  to={`/doctors/${doctor.name.replace(/\s+/g, "-").toLowerCase()}`}
                  className="mt-4 text-blue-600 font-medium hover:underline"
                >
                  View Profile
                </Link>
              </div>
            ))}
          </motion.div>
        </div>

        {/* See All Doctors Button */}
        <div className="mt-10">
          <Link
            to="/doctors"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md text-lg font-medium transition duration-300"
          >
            See All Doctors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
