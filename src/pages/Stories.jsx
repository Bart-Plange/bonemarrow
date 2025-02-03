import { motion } from "framer-motion";

const Stories = () => {
  const patientStories = [
    {
      name: "John Doe",
      story: "After struggling with a severe bone marrow disorder, I found hope at Bone Marrow Care. The doctors were incredible, and today, I’m living a healthy life!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Jane Smith",
      story: "The treatment and care I received here changed my life. The staff made me feel safe and cared for during my transplant journey.",
      image: "https://via.placeholder.com/100",
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
      {/* Patient Stories Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Patient Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {patientStories.map((patient, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={patient.image} alt={patient.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{patient.name}</h3>
                <p className="text-gray-600">{patient.story}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog/News Section */}
      <section>
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Latest News & Blog</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="mt-2 text-gray-600">{post.summary}</p>
              <a href={post.link} className="text-blue-600 font-semibold mt-4 inline-block">
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stories;
