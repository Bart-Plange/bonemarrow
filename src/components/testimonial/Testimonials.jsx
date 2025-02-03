import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

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
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Title */}
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-center text-center hover:shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-600"
              />
              <h3 className="text-xl font-semibold text-blue-800">{testimonial.name}</h3>
              <p className="text-gray-600 mt-2">{testimonial.review}</p>
              
              {/* Star Ratings */}
              <div className="flex mt-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-lg" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
