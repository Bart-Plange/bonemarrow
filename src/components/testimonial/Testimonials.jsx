import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    review: "The doctors and staff were incredibly supportive throughout my treatment. I couldn’t have asked for better care!",
    image: "/patient1.jpg",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    review: "Their expertise and compassion made my recovery smooth. I highly recommend their services!",
    image: "/patient2.jpg",
    rating: 5,
  },
  {
    name: "Emily Carter",
    review: "From diagnosis to recovery, they provided excellent care and guidance. Thank you for everything!",
    image: "/patient3.jpg",
    rating: 4,
  },
];

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-16 bg-blue-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Patients Say
        </motion.h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Hear from patients who have experienced our compassionate care and expertise.
        </p>

        {/* Animated Scrolling Testimonials */}
        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex space-x-8"
            animate={isPaused ? {} : { x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center hover:shadow-lg transition-transform transform hover:scale-105 min-w-[300px]"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-600"
                />
                <h3 className="text-xl font-semibold text-blue-800">{testimonial.name}</h3>
                <p className="text-gray-600 mt-2">{testimonial.review}</p>
                <div className="flex mt-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-lg" />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
