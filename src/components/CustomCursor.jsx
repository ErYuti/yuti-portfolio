import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Optimized spring settings for faster response
  const springConfig = { damping: 30, stiffness: 500, mass: 0.5 };
  const circleX = useSpring(mouseX, springConfig);
  const circleY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is touch-enabled to disable cursor (saves performance on mobile)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e) => {
      const target = e.target;
      const clickable = target.closest('a') || target.closest('button') || target.classList.contains('char-hover') || target.closest('.group');
      setIsHovered(!!clickable);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseover", handleHover, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    // will-change-transform tells the browser to put this on the GPU
    <div className="fixed inset-0 pointer-events-none z-[99999] will-change-transform">
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-spotify-green rounded-full"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />

      <motion.div
        className="fixed top-0 left-0 border border-spotify-green rounded-full mix-blend-difference will-change-[width,height,transform]"
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