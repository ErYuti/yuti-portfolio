import React, { useState } from "react";
import { motion } from "motion/react";
import { FaMoon, FaSun, FaPalette, FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

const ThemeController = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["#1DB954", "#3d5afe", "#d500f9", "#ff3d00"]; // Green, Blue, Purple, Red

  const toggleColor = () => {
    const next = (colorIndex + 1) % colors.length;
    setColorIndex(next);
    document.documentElement.style.setProperty("--primary-color", colors[next]);
  };

  const toggleMode = () => {
    setIsDark(!isDark);
    document.documentElement.style.setProperty("--bg-black", isDark ? "#121212" : "#080808");
  };

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[999] flex flex-col items-center gap-4">
      {/* 3 Buttons Row */}
      <div className="flex items-center gap-8">
        {/* Moon Button (With White Circle) */}
        <button 
          onClick={toggleMode} 
          className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white/10 transition-all"
        >
          {isDark ? <FaMoon size={18} /> : <FaSun size={18} className="text-yellow-400" />}
        </button>

        {/* Palette Button */}
        <button 
          onClick={toggleColor} 
          className="text-white/40 hover:text-white transition-all cursor-none"
        >
          <FaPalette size={18} />
        </button>

        {/* Sound Button */}
        <button 
          onClick={() => setIsMuted(!isMuted)} 
          className="text-white/40 hover:text-white transition-all cursor-none"
        >
          {isMuted ? <FaVolumeXmark size={18} /> : <FaVolumeHigh size={18} className="text-main" />}
        </button>
      </div>
    </div>
  );
};

export default ThemeController;