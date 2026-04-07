import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaGear, FaPalette, FaVolumeHigh, FaVolumeXmark, FaRobot, FaWhatsapp } from "react-icons/fa6";

const ThemeController = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const toggleColor = () => {
    const colors = ["#1DB954", "#3d5afe", "#d500f9", "#ff3d00"];
    const current = document.documentElement.style.getPropertyValue("--primary-color") || "#1DB954";
    const nextIdx = (colors.indexOf(current) + 1) % colors.length;
    document.documentElement.style.setProperty("--primary-color", colors[nextIdx]);
  };

  const menuItems = [
    { icon: <FaPalette />, action: toggleColor },
    { icon: isMuted ? <FaVolumeXmark /> : <FaVolumeHigh />, action: () => setIsMuted(!isMuted) },
    { icon: <FaRobot />, action: () => alert("AI Chat Coming Soon") },
    { icon: <FaWhatsapp />, action: () => window.open("https://wa.me/918208375264") },
  ];

  return (
    <div className="fixed bottom-30 right-7 z-[100] flex flex-col items-center gap-3">
      {/* Expanding Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-[#0a0a0a] p-2 rounded-3xl border border-white/10 flex flex-col gap-2 shadow-2xl"
          >
            {menuItems.map((item, i) => (
              <button
                key={i}
                onClick={item.action}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-main text-white transition-all"
              >
                {item.icon}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Gear Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white hover:border-main transition-all shadow-lg"
      >
        <FaGear size={22} className={isOpen ? "animate-spin" : ""} />
      </button>
    </div>
  );
};

export default ThemeController;