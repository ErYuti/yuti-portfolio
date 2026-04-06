import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Track mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for the trailing circle
  const springConfig = { damping: 25, stiffness: 300 };
  const circleX = useSpring(mouseX, springConfig);
  const circleY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e) => {
      const target = e.target;
      const clickable = target.closest('a') || target.closest('button') || target.classList.contains('char-hover');
      setIsHovered(!!clickable);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleHover);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999]">
      {/* 1. Central Dot */}
      <motion.div 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-spotify-green rounded-full"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />
      
      {/* 2. Trailing Outline Circle */}
      <motion.div 
        className="fixed top-0 left-0 border border-spotify-green rounded-full mix-blend-difference"
        animate={{ 
          width: isHovered ? 60 : 35, 
          height: isHovered ? 60 : 35,
          backgroundColor: isHovered ? "rgba(29, 185, 84, 0.2)" : "transparent"
        }}
        style={{ x: circleX, y: circleY, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  );
};

export default CustomCursor;