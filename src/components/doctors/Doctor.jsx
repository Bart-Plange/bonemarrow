import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const doctors = [
  { name: "Dr. Emily Brown", specialty: "Hematology", image: "/doctor1.jpg" },
  { name: "Dr. James Carter", specialty: "Oncology", image: "/doctor2.jpg" },
  { name: "Dr. Sophia Williams", specialty: "Immunotherapy", image: "/doctor3.jpg" },
];

const Doctors = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const translateX = useTransform(x, (value) => `${value}px`); // Converts value to px

  useEffect(() => {
    const animateScroll = async () => {
      if (!isPaused) {
        await controls.start({
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            repeat: Infinity,
            duration: 20,
          },
        });
      } else {
        controls.stop(); // Pause animation without resetting
      }
    };

    animateScroll();
  }, [isPaused, controls]);

  return (
    <section className="py-16 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-red-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Experts
        </motion.h2>
        <p className="text-red-900 text-lg max-w-2xl mx-auto mb-12">
          Our specialists are dedicated to providing world-class care in hematology and bone marrow health.
        </p>

        {/* Animated Scrolling Doctors */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex space-x-8 w-max"
            style={{ x: translateX }} // Use motion value
            animate={controls}
          >
            {[...doctors, ...doctors].map((doctor, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center min-w-[300px] hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-red-600"
                />
                <h3 className="text-xl font-semibold text-red-800">{doctor.name}</h3>
                <p className="text-red-600 mt-2">{doctor.specialty}</p>
                <Link
                  to={`/doctors/${doctor.name.replace(/\s+/g, "-").toLowerCase()}`}
                  className="mt-4 text-red-600 font-medium hover:underline"
                >
                  View Profile
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
