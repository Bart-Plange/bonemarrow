import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const BubbleEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Scale effect (makes it "pulse" slightly as it moves)
  const scale = useTransform(x, [-100, 100], [1, 1.1]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]" // Keeps it behind everything
      animate={{ x: mousePosition.x - 75, y: mousePosition.y - 75 }} // Smooth movement
      transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
    >
      {/* Outer Red Splash Background */}
      <motion.div
        className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-red-100 opacity-30 rounded-full blur-3xl"
        style={{ x, y, scale }}
      />

      {/* Inner Bubble */}
      <motion.div
        className="absolute w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-red-300 opacity-50 rounded-full blur-xl"
        style={{ x, y, scale }}
      />
    </motion.div>
  );
};

export default BubbleEffect;
