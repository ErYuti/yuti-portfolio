import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaArrowUp } from "react-icons/fa6";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 600px
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-8 z-[100] group flex flex-col items-center gap-2"
        >
          {/* The Glow Effect Container */}
          <div className="relative w-12 h-12 rounded-full bg-spotify-black border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-main group-hover:shadow-[0_0_20px_rgba(29,185,84,0.3)]">
            <FaArrowUp className="text-white group-hover:text-main transition-colors duration-300" />

            {/* Subtle rotating ring */}
            <div className="absolute inset-0 rounded-full border-t-2 border-main animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Text label that fades on hover */}
          <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-white/30 group-hover:text-main transition-colors">
            Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;