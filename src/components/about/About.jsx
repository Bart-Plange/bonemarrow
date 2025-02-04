import { motion } from "framer-motion";


const About = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Header Section */}

      {/* Our History Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-blue-700 text-center">Our History</h2>
        <p className="text-gray-600 text-center mt-3">A journey of excellence in healthcare.</p>

        {/* Timeline */}
        <div className="mt-8 max-w-4xl mx-auto border-l-4 border-blue-700 pl-6">
          {[
            { year: "2010", event: "Hospital founded with a vision to transform hematology care." },
            { year: "2015", event: "First successful bone marrow transplant performed." },
            { year: "2018", event: "Expansion of our transplant unit with cutting-edge technology." },
            { year: "2022", event: "Recognized as a top hospital for blood disorders treatment." },
            { year: "2024", event: "Launched AI-assisted diagnosis and personalized treatment plans." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="mb-6 relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute left-[-30px] w-6 h-6 bg-blue-700 rounded-full"></div>
              <h4 className="text-xl font-semibold text-gray-800">{item.year}</h4>
              <p className="text-gray-600">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
