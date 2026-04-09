import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaArrowUp } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { accentColor } = useTheme();

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 600);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          // SAME RIGHT-8 AS THEME CONTROLLER
          className="fixed bottom-8 right-8 z-[100] flex flex-col items-center gap-2"
        >
          <button
            onClick={scrollToTop}
            // SAME W-12 AS THEME CONTROLLER
            className="w-12 h-12 rounded-full bg-spotify-dark border border-border-subtle flex items-center justify-center transition-all duration-300 group hover:border-main hover:shadow-[0_0_15px_rgba(29,185,84,0.2)]"
          >
            <FaArrowUp
              size={16}
              className="text-white transition-colors duration-300"
              style={{ color: accentColor }}
            />
          </button>

          <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-white/30">
            Top
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;