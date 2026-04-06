import React from "react";
import { motion } from "motion/react";
import { FaReact, FaNodeJs, FaHtml5, FaGithub, FaJs, FaCss3Alt } from "react-icons/fa6";
import { SiTailwindcss, SiMongodb, SiTypescript } from "react-icons/si";

const icons = [
  { Icon: FaReact, color: "#61DAFB", radius: 140, speed: 10, delay: 0 },
  { Icon: SiTailwindcss, color: "#38B2AC", radius: 190, speed: 14, delay: 2 },
  { Icon: FaNodeJs, color: "#68A063", radius: 240, speed: 18, delay: 4 },
  { Icon: FaHtml5, color: "#E34F26", radius: 110, speed: 8, delay: 1 },
  { Icon: FaJs, color: "#F7DF1E", radius: 210, speed: 16, delay: 5 },
  { Icon: SiMongodb, color: "#47A248", radius: 270, speed: 22, delay: 3 },
];

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{ duration: item.speed, repeat: Infinity, ease: "linear", delay: -item.delay }}
          style={{ width: item.radius * 2, height: item.radius * 2 }}
        >
          <motion.div
            className="pointer-events-auto p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl"
            whileHover={{ scale: 1.4, rotate: -360, backgroundColor: "rgba(29, 185, 84, 0.2)", borderColor: "#1DB954" }}
            style={{ color: item.color, position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}
          >
            <item.Icon className="text-2xl md:text-3xl" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;