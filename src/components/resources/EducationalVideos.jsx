import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  "https://www.youtube.com/embed/l482T0yNkeo",
];

const EducationalVideos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle manual navigation
  const nextVideo = () => setCurrentIndex((prev) => (prev + 1) % videos.length);
  const prevVideo = () => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <section className="py-16 bg-gray-50 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900">Educational Videos</h2>

      <div className="max-w-4xl mx-auto mt-8 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-56 md:h-96"
          >
            <iframe
              className="w-full h-full rounded-lg"
              src={videos[currentIndex]}
              title="Educational Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevVideo}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          ◀
        </button>
        <button
          onClick={nextVideo}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          ▶
        </button>
      </div>

      {/* Watch More Videos Button */}
      <div className="mt-8 flex justify-center">
        <a
          href="/videos"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700"
        >
          Watch More Videos
        </a>
      </div>
    </section>
  );
};

export default EducationalVideos;
