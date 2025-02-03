import { motion } from "framer-motion";
import AboutHero from "./AboutHero";

const About = () => {
  return (
    <div>
        <AboutHero />
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Header Section */}
      

      {/* Video Introduction Section */}
      <div className="mt-16">
        <p className="text-gray-600 text-center mt-3">
          Learn more about our mission and values from our leadership.
        </p>

        {/* Video Container */}
        <motion.div
          className="mt-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Placeholder Video */}
          <div className="relative w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"  // Replace with your actual video URL
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              title="Hospital Introduction"
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <button className="text-white text-lg font-semibold hover:text-blue-700 transition">
                Play Video
              </button>
            </div>
          </div>
        </motion.div>
      </div>

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

      {/* Mission, Vision, Values */}
      <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          { title: "Our Mission", text: "To offer the highest quality bone marrow treatments with compassion and innovation." },
          { title: "Our Vision", text: "To be a global leader in hematology and transplant care." },
          { title: "Our Values", text: "Compassion, Excellence, Innovation, Integrity." },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Meet Our Team */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-blue-700">Meet Our Experts</h2>
        <p className="text-gray-600 mt-3">Our team of specialists is dedicated to your care.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Dr. James Smith", role: "Bone Marrow Specialist" },
            { name: "Dr. Lisa Wong", role: "Hematology Expert" },
            { name: "Dr. Daniel Brown", role: "Transplant Surgeon" },
          ].map((doctor, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Placeholder Image */}
              <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
              <h4 className="text-xl font-semibold text-gray-800">{doctor.name}</h4>
              <p className="text-gray-600">{doctor.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
