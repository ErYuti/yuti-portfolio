import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaGear, FaSun, FaMoon, FaWhatsapp } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

const ThemeController = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleThemeMode, changeAccentColor, accentColor } = useTheme();

  const colors = [
    { name: "Green", hex: "#1DB954" },
    { name: "Blue", hex: "#3d5afe" },
    { name: "Purple", hex: "#a855f7" },
    { name: "Orange", hex: "#ff3d00" },
  ];

  return (
    <div className="fixed bottom-28 right-8 z-[101] flex flex-col items-center">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="bg-spotify-dark p-2 rounded-2xl border border-border-subtle flex flex-col gap-2 shadow-2xl mb-3 w-12 items-center"
          >
            <button onClick={toggleThemeMode} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-all text-xs">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>

            {colors.map((color) => (
              <button
                key={color.hex}
                onClick={() => changeAccentColor(color.hex)}
                className={`w-7 h-7 rounded-full border-2 transition-all ${accentColor === color.hex ? "border-white scale-110" : "border-transparent"}`}
                style={{ backgroundColor: color.hex }}
              />
            ))}

            <button onClick={() => window.open("https://wa.me/918208375264")} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-all text-xs">
              <FaWhatsapp />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Gear Button - Aligned to w-12 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-spotify-dark border border-border-subtle flex items-center justify-center text-white transition-all shadow-lg overflow-hidden"
      >
        <FaGear size={18} className={isOpen ? "animate-spin" : ""} style={{ color: accentColor }} />
      </button>
    </div>
  );
};

export default ThemeController;