import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

const SideScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 h-1/2 w-[2px] bg-white/10 z-[100] hidden md:block rounded-full overflow-hidden">
      <motion.div 
        className="w-full bg-main origin-top"
        style={{ scaleY, height: '100%' }}
      />
    </div>
  );
};

export default SideScrollIndicator; // <--- This line fixes your error