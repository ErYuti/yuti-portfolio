import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FaChevronRight, FaGithub, FaLinkedinIn, FaBoltLightning } from "react-icons/fa6";
import { AnimatedText } from "./HelperComponents";
import FloatingIcons from "./FloatingIcons";
import avatarImg from "../assets/yuti-modle.png"; 

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-20 px-6 relative overflow-hidden bg-moving-gradient">
      <motion.div style={{ y: yParallax }} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        
        {/* LEFT SIDE CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="z-20"
        >
          <p className="text-main font-mono mb-4 tracking-[0.5em] uppercase text-xs">Hii(); I'm</p>
          <AnimatedText 
            text="Yuti Meher" 
            className="text-6xl md:text-8xl xl:text-9xl font-black mb-4 tracking-tighter leading-tight" 
          />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-spotify-grey flex items-center gap-4">
            <FaBoltLightning className="text-main animate-pulse" /> Full Stack Developer
          </h2>
          
          <div className="flex gap-8 items-center mt-10">
            <div className="btn-stack-container group">
              <div className="btn-stack-bg"></div>
              <button className="btn-stack-top uppercase tracking-widest text-xs">
                Let's Talk! <FaChevronRight className="inline ml-2 w-3 h-3" />
              </button>
            </div>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-full border border-white/10 bg-white/5 hover:text-main transition-all"><FaGithub size={20} /></a>
              <a href="#" className="p-3 rounded-full border border-white/10 bg-white/5 hover:text-main transition-all"><FaLinkedinIn size={20} /></a>
            </div>
          </div>
        </motion.div>
        
        {/* RIGHT SIDE VISUAL (180-Degree Arc) */}
        <div className="relative flex items-center justify-center h-[500px] md:h-[600px] w-full">
          
          {/* Scatter Icons Container (Centered around Avatar) */}
          <div className="absolute inset-0 w-full h-full max-w-[550px] mx-auto">
            <FloatingIcons />
          </div>
          
          {/* Main Avatar Model */}
          <motion.div 
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 xl:w-[460px] xl:h-[460px]"
          >
            <img 
              src={avatarImg} 
              alt="Yuti Model" 
              className="w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
            />
          </motion.div>

          {/* Simple Subtle Glow Background */}
          <div className="absolute w-[70%] h-[70%] bg-main/5 blur-[120px] rounded-full -z-10" />
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;