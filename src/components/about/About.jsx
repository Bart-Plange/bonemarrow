import { motion } from "framer-motion";

const About = () => {
  const timelineData = [
    { year: "2010", event: "Hospital founded with a vision to transform hematology care." },
    { year: "2015", event: "First successful bone marrow transplant performed." },
    { year: "2018", event: "Expansion of our transplant unit with cutting-edge technology." },
    { year: "2022", event: "Recognized as a top hospital for blood disorders treatment." },
    { year: "2024", event: "Launched AI-assisted diagnosis and personalized treatment plans." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-red-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our History
        </motion.h2>
        <motion.p
          className="text-gray-700 mt-4 text-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A journey of excellence in healthcare.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="mt-12 max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-4 h-full w-1 bg-red-700"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            {/* Year Circle */}
            <div className="relative z-10">
              <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">{item.year}</span>
              </div>
            </div>

            {/* Event Card */}
            <div className="ml-6 flex-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.year}</h4>
              <p className="text-gray-700">{item.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;