import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FaChevronRight, FaGithub, FaLinkedinIn, FaBoltLightning, FaEnvelope } from "react-icons/fa6";
import { AnimatedText } from "./HelperComponents";
import FloatingIcons from "./FloatingIcons";
import avatarImg from "../assets/yuti-modle.png";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { accentColor } = useTheme();
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
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 pb-10 px-6 relative overflow-hidden bg-moving-gradient w-full"
    >
      <motion.div
        style={{ y: yParallax }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10 w-full"
      >

        {/* CONTENT SIDE (Text & Buttons) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-20 flex flex-col items-center lg:items-start text-center lg:text-left w-full"
        >
          <p className="font-mono mb-4 tracking-[0.3em] uppercase text-xs md:text-sm font-bold opacity-80">
            Hii(); I'm
          </p>

          <div className="w-full">
            <AnimatedText
              text="Yuti Meher"
              className="text-5xl md:text-7xl xl:text-8xl font-black mb-4 tracking-tighter leading-none"
            />
          </div>

          {/* AI THINKING EFFECT */}
          <div className="h-12 flex items-center justify-center lg:justify-start gap-3 mb-6 w-full">
            <FaBoltLightning style={{ color: accentColor }} className="animate-pulse shrink-0 text-xl" />
            <div className="relative">
              <span className="ai-text-gradient font-black tracking-tight text-xl md:text-3xl">
                {currentText}
              </span>
              <span className="text-white animate-pulse ml-[2px]">_</span>
            </div>
          </div>

          <p className="text-spotify-grey text-sm md:text-base max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0">
            Passionate developer dedicated to building responsive, user-centric web applications. I blend seamless UI/UX design with robust backend architecture to deliver impactful and scalable digital experiences.
          </p>

          <div className="flex flex-wrap gap-6 items-center justify-center lg:justify-start w-full">
            <a href="https://wa.me/918208375264" target="_blank" rel="noreferrer" className="btn-stack-container group">
              <div className="btn-stack-bg" style={{ backgroundColor: accentColor }}></div>
              <button className="btn-stack-top uppercase tracking-widest text-xs flex items-center">
                Let's Talk! <FaChevronRight className="inline ml-2 w-3 h-3" />
              </button>
            </a>

            <div className="flex gap-4">
              {[
                { icon: FaGithub, link: "https://github.com/ErYuti" },
                { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/er-yuti-m-a26519245/" },
                { icon: FaEnvelope, link: "mailto:yutimeher@gmail.com" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full border border-white/10 bg-white/5 hover:border-main transition-all group"
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" style={{ color: 'white' }} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* VISUAL SIDE (Avatar & Floating Icons) */}
        <div className="relative flex items-center justify-center h-[400px] md:h-[500px] lg:h-[650px] w-full">
          {/* Icons container - hidden on very small screens to prevent clutter */}
          <div className="absolute inset-0 w-full h-full max-w-[600px] mx-auto opacity-40 lg:opacity-100">
            <FloatingIcons />
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative z-10 w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[480px] lg:h-[480px]"
          >
            <img
              src={avatarImg}
              alt="Yuti Model"
              className="w-full h-full object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            />
          </motion.div>

          {/* Background Glow */}
          <div
            className="absolute w-[80%] h-[80%] blur-[120px] rounded-full -z-10 opacity-20"
            style={{ backgroundColor: accentColor }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;