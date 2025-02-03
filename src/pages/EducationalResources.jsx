import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const faqs = [
  { question: "What is a bone marrow transplant?", answer: "A bone marrow transplant replaces damaged or diseased bone marrow with healthy marrow from a donor or the patient's own cells." },
  { question: "Who needs a bone marrow transplant?", answer: "Patients with leukemia, lymphoma, sickle cell anemia, and other blood disorders may require a transplant." },
  { question: "How long does recovery take?", answer: "Recovery varies but can take several months to a year, depending on the patient's condition." },
];

const videos = [
  "https://www.youtube.com/embed/example1",
  "https://www.youtube.com/embed/example2",
  "https://www.youtube.com/embed/example3",
];

const articles = [
  { title: "Understanding Bone Marrow Transplants", description: "A deep dive into how bone marrow transplants work and their importance.", link: "#" },
  { title: "Common Myths About Bone Marrow Donation", description: "Debunking misconceptions surrounding bone marrow donation.", link: "#" },
  { title: "Post-Transplant Care Guide", description: "Essential steps for recovery and maintaining health after a transplant.", link: "#" },
];

const EducationalResources = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef([]);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    if (isPlaying) {
      videoRefs.current.forEach((video) => {
        if (video && typeof video.pause === "function") {
          video.pause();
        }
      });
      
    }
  }, [isPlaying]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/education-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative text-4xl md:text-6xl font-bold">
          Educational Resources
        </motion.h1>
      </section>
      
      {/* FAQs */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} className="border rounded-lg p-4 bg-white shadow-md" initial={{ opacity: 0, y: 10 }} whileHover={{ scale: 1.02 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <button onClick={() => toggleFAQ(index)} className="flex justify-between items-center w-full text-left text-lg font-semibold">
                {faq.question}
                {expandedIndex === index ? <FaMinus className="text-blue-600" /> : <FaPlus className="text-blue-600" />}
              </button>
              <motion.p initial={{ height: 0, opacity: 0 }} animate={expandedIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="mt-2 text-gray-700 overflow-hidden">{faq.answer}</motion.p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Videos */}
      <section className="py-16 bg-gray-50 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900">Educational Videos</h2>
        <div className="max-w-4xl mx-auto mt-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={!isPlaying ? { delay: 5000, disableOnInteraction: false } : false}
            navigation
            pagination={{ clickable: true }}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-64 md:h-96">
                  <iframe
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="w-full h-full rounded-lg"
                    src={video}
                    title="Educational Video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    onMouseEnter={() => setIsPlaying(true)}
                    onMouseLeave={() => setIsPlaying(false)}
                  ></iframe>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      
      {/* Articles Section */}
      <div className="py-16 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-blue-900">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-900">{article.title}</h3>
              <p className="text-gray-700 mt-2">{article.description}</p>
              <button className="mt-4 text-blue-600 font-semibold">Read More →</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationalResources;
