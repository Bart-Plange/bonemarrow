import { motion } from "framer-motion";

const Stories = () => {
  const patientStories = [
    {
      name: "John Doe",
      story: "After struggling with a severe bone marrow disorder, I found hope at Bone Marrow Care. The doctors were incredible, and today, I’m living a healthy life!",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      story: "The treatment and care I received here changed my life. The staff made me feel safe and cared for during my transplant journey.",
      image: "https://via.placeholder.com/150",
    },
  ];

  const blogPosts = [
    {
      title: "New Advances in Bone Marrow Transplants",
      date: "January 25, 2025",
      summary: "Researchers have discovered new methods to improve the success rate of bone marrow transplants...",
      link: "#",
    },
    {
      title: "How to Maintain Bone Marrow Health",
      date: "February 1, 2025",
      summary: "Proper nutrition and lifestyle choices can greatly impact your bone marrow health. Here are some expert tips...",
      link: "#",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Main Container with F-Layout */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Section - Patient Stories */}
        <section className="md:col-span-2">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Patient Stories</h2>

          {/* Feature Story */}
          <motion.div
            className="bg-white shadow-lg p-6 rounded-lg flex flex-col md:flex-row items-center gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={patientStories[0].image} alt={patientStories[0].name} className="w-32 h-32 md:w-48 md:h-48 rounded-lg object-cover" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">{patientStories[0].name}</h3>
              <p className="text-gray-600 mt-2">{patientStories[0].story}</p>
            </div>
          </motion.div>

          {/* Supporting Stories */}
          <div className="mt-6 space-y-4">
            {patientStories.slice(1).map((patient, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-4 rounded-lg flex items-center space-x-4 shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={patient.image} alt={patient.name} className="w-20 h-20 rounded-lg object-cover" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{patient.name}</h3>
                  <p className="text-gray-600">{patient.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Right Section - Blog/News */}
        <section className="md:col-span-1">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Latest News & Blog</h2>

          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.date}</p>
                <p className="mt-2 text-gray-600">{post.summary}</p>
                <a href={post.link} className="text-blue-600 font-semibold mt-4 inline-block hover:underline">
                  Read More →
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stories;
