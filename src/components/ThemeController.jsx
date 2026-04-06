import React, { useState } from "react";
import { motion } from "motion/react";
import { FaMoon, FaSun, FaPalette, FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

const ThemeController = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const colors = ["#1DB954", "#3d5afe", "#d500f9", "#ff3d00"];
  const [colorIdx, setColorIdx] = useState(0);

  const toggleColor = () => {
    const next = (colorIdx + 1) % colors.length;
    setColorIdx(next);
    document.documentElement.style.setProperty("--primary-color", colors[next]);
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[101] flex flex-col items-center gap-4">
      <div className="flex items-center gap-10">
        {/* MOON BUTTON WITH CIRCLE */}
        <button 
          onClick={() => setIsDark(!isDark)}
          className="w-12 h-12 rounded-full border border-white/60 flex items-center justify-center text-white hover:border-main hover:text-main transition-all"
        >
          {isDark ? <FaMoon size={16} /> : <FaSun size={16} />}
        </button>

        {/* PALETTE */}
        <button onClick={toggleColor} className="text-white/40 hover:text-main transition-colors">
          <FaPalette size={18} />
        </button>

        {/* SOUND */}
        <button onClick={() => setIsMuted(!isMuted)} className="text-white/40 hover:text-main transition-colors">
          {isMuted ? <FaVolumeXmark size={20} /> : <FaVolumeHigh size={20} />}
        </button>
      </div>
    </div>
  );
};

export default ThemeController;