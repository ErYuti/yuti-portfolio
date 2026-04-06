import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
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
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-32 right-6 z-[100] flex items-center gap-4 rotate-90 origin-right cursor-none group"
        >
          <span className="text-[10px] font-mono tracking-[0.5em] text-white/30 group-hover:text-main transition-colors uppercase">
            Back To Top
          </span>
          <div className="w-12 h-[1px] bg-white/20 group-hover:bg-main transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;