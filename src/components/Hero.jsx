import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FaChevronRight, FaGithub, FaLinkedinIn, FaBoltLightning } from "react-icons/fa6";
import { AnimatedText } from "./HelperComponents";
import FloatingIcons from "./FloatingIcons";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 px-6 relative overflow-hidden bg-moving-gradient">
      <motion.div style={{ y: yParallax }} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* LEFT: PRESERVED HOVER TEXT */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <p className="text-main font-mono mb-4 tracking-[0.5em] uppercase text-xs">Hii(); I'm</p>
          <AnimatedText 
            text="Yuti Meher" 
            className="text-6xl md:text-8xl xl:text-9xl font-black mb-6 tracking-tighter leading-tight" 
          />
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-spotify-grey flex items-center gap-4">
            <FaBoltLightning className="text-main animate-pulse" /> Full Stack Developer
          </h2>
          
          <div className="flex gap-8 items-center">
            {/* THE STACKED BUTTON */}
            <div className="btn-stack-container group">
              <div className="btn-stack-bg"></div>
              <button className="btn-stack-top uppercase tracking-widest text-xs">
                Let's Talk! <FaChevronRight className="inline ml-2 w-3 h-3" />
              </button>
            </div>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full border border-white/10 bg-white/5 hover:text-main transition-all"><FaGithub /></a>
              <a href="#" className="p-3 rounded-full border border-white/10 bg-white/5 hover:text-main transition-all"><FaLinkedinIn /></a>
            </div>
          </div>
        </motion.div>
        
        {/* RIGHT: PRESERVED SOLAR SYSTEM */}
        <div className="relative flex items-center justify-center h-[500px] md:h-[650px] w-full">
          <FloatingIcons />
          <div className="relative z-20 w-64 h-64 md:w-96 rounded-full overflow-hidden border-8 border-white/5 shadow-2xl bg-spotify-dark">
            <img src="/avatar-yuti.png" alt="Yuti" className="w-full h-full object-cover transform scale-110 translate-y-4" />
          </div>
          <div className="absolute w-full h-full bg-main/5 blur-[120px] rounded-full -z-10" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;