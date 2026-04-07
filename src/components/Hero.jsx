import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FaChevronRight, FaGithub, FaLinkedinIn, FaBoltLightning, FaEnvelope } from "react-icons/fa6";
import { AnimatedText } from "./HelperComponents";
import FloatingIcons from "./FloatingIcons";
import avatarImg from "../assets/yuti-modle.png";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "WordPress Developer",
    "Web Developer",
    "Front-End Developer",
    "UI/UX Developer"
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(() => {
      const fullText = roles[currentRoleIndex];

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          fullText.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

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
          <p className="text-bold font-mono mb-4 tracking-[0.3em] uppercase text-xl md:text-base font-bold">
            Hii(); I'm
          </p>

          <AnimatedText
            text="Yuti Meher"
            className="text-5xl md:text-7xl xl:text-8xl font-black mb-4 tracking-tighter leading-tight"
          />

          {/* AI THINKING EFFECT */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3 h-10">
            <FaBoltLightning className="text-main animate-pulse shrink-0" />
            <span className="relative">
              <span className="ai-text-gradient font-black tracking-tight">
                {currentText}
              </span>
              <span className="text-white animate-pulse ml-[2px]">_</span>
            </span>
          </h2>

          <p className="text-spotify-grey text-sm md:text-base max-w-lg mb-10 leading-relaxed">
            Passionate developer dedicated to building responsive, user-centric web applications. I blend seamless UI/UX design with robust backend architecture to deliver impactful and scalable digital experiences.
          </p>

          <div className="flex flex-wrap gap-6 items-center mt-6">
            <a href="https://wa.me/918208375264" target="_blank" rel="noreferrer" className="btn-stack-container group">
              <div className="btn-stack-bg"></div>
              <button className="btn-stack-top uppercase tracking-widest text-xs flex items-center">
                Let's Talk! <FaChevronRight className="inline ml-2 w-3 h-3" />
              </button>
            </a>

            <div className="flex gap-4">
              <a href="https://github.com/ErYuti" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-white/10 bg-white/5 hover:border-main hover:text-main transition-all">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/er-yuti-m-a26519245/" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-white/10 bg-white/5 hover:border-main hover:text-main transition-all">
                <FaLinkedinIn size={20} />
              </a>
              <a href="mailto:yutimeher@gmail.com" className="p-3 rounded-full border border-white/10 bg-white/5 hover:border-main hover:text-main transition-all">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE VISUAL */}
        <div className="relative flex items-center justify-center h-[500px] md:h-[600px] w-full">
          <div className="hidden md:block absolute inset-0 w-full h-full max-w-[550px] mx-auto">
            <FloatingIcons />
          </div>
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 xl:w-[460px] xl:h-[460px]"
          >
            <img src={avatarImg} alt="Yuti Model" className="w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.7)]" />
          </motion.div>
          <div className="absolute w-[70%] h-[70%] bg-main/5 blur-[120px] rounded-full -z-10" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;