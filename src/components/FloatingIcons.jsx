import React from "react";
import { motion } from "motion/react";
import { 
  FaReact, FaNodeJs, FaHtml5, FaGithub, FaJs, 
  FaWordpress, FaGitAlt 
} from "react-icons/fa6";
import { 
  SiTailwindcss, SiMongodb, SiExpress, SiCanva 
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const icons = [
  // THE TOP ARC (180 Degrees spread)
  { Icon: SiCanva, color: "#00C4CC", pos: { top: "8%", left: "12%" }, delay: 0 },
  { Icon: VscCode, color: "#007ACC", pos: { top: "2%", left: "32%" }, delay: 0.2 },
  { Icon: FaGitAlt, color: "#F05032", pos: { top: "-2%", left: "50%" }, delay: 0.4 },
  { Icon: FaGithub, color: "#FFFFFF", pos: { top: "2%", left: "68%" }, delay: 0.1 },
  { Icon: FaWordpress, color: "#21759B", pos: { top: "8%", left: "88%" }, delay: 0.3 },
  
  // MIDDLE SIDES
  { Icon: FaReact, color: "#61DAFB", pos: { top: "28%", left: "5%" }, delay: 0.5 },
  { Icon: FaNodeJs, color: "#339933", pos: { top: "28%", left: "95%" }, delay: 0.4 },
  
  { Icon: SiTailwindcss, color: "#06B6D4", pos: { top: "50%", left: "0%" }, delay: 0.2 },
  { Icon: SiExpress, color: "#FFFFFF", pos: { top: "45%", left: "100%" }, delay: 0.7 },
  
  // LOWER SIDES
  { Icon: FaHtml5, color: "#E34F26", pos: { top: "72%", left: "10%" }, delay: 0.6 },
  { Icon: SiMongodb, color: "#47A248", pos: { top: "60%", left: "95%" }, delay: 0.3 },
  { Icon: FaJs, color: "#F7DF1E", pos: { top: "72%", left: "80%" }, delay: 0.5 },
];

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-30">
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-auto"
          style={{ 
            top: item.pos.top, 
            left: item.pos.left, 
            transform: 'translate(-50%, -50%)' 
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -15, 0], // Subtle floating up and down
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: item.delay },
            scale: { duration: 0.8, delay: item.delay },
            y: { 
              duration: 3 + item.delay, 
              repeat: Infinity, 
              ease: "easeInOut" 
            } 
          }}
        >
          <motion.div
            className="p-2 md:p-3 rounded-2xl bg-[#121212]/60 backdrop-blur-md border border-white/10 shadow-2xl transition-all"
            whileHover={{ 
              scale: 1.4, 
              backgroundColor: "rgba(255, 255, 255, 0.1)", 
              borderColor: item.color,
              boxShadow: `0 0 30px ${item.color}55`,
              z: 50
            }}
            style={{ color: item.color }}
          >
            <item.Icon className="text-xl md:text-3xl filter drop-shadow-lg" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;