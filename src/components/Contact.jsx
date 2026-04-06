import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "motion/react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  const socials = [
    { icon: FaLinkedinIn, link: "https://linkedin.com/in/yuti-meher", active: true },
    { icon: FaGithub, link: "https://github.com/ErYuti", active: false },
    { icon: FaInstagram, link: "#", active: false },
    { icon: FaEnvelope, link: "mailto:yutimeher@gmail.com", active: false },
  ];

  // --- 3D EYE TRACKING LOGIC ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-500, 500], [15, -15]);
  const rotateY = useTransform(smoothX, [-500, 500], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative pt-40 pb-0 overflow-hidden bg-spotify-black">
      {/* Background Neon Glow (Matched to your Spotify Green) */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-spotify-green/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Main Quote */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-mono text-white/70 mb-6 tracking-tight"
        >
          "Learning, Living, and Leveling Up."
        </motion.h2>

        {/* Function Call Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-spotify-green font-mono font-bold text-xl md:text-2xl mb-12"
        >
          GetInTouch();
        </motion.p>

        {/* Social Icons (Circles) */}
        <div className="flex justify-center items-center gap-6 mb-24">
          {socials.map((item, i) => (
            <div key={i} className="relative flex items-center justify-center">
              {/* The Blue/Green Dot for 'Active' link like your image */}
              {item.active && (
                <div className="absolute -left-10 w-6 h-6 rounded-full border border-spotify-green flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-spotify-green rounded-full shadow-[0_0_8px_#1DB954]" />
                </div>
              )}
              
              <motion.a
                href={item.link}
                whileHover={{ scale: 1.1, borderColor: "#1DB954", color: "#1DB954" }}
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white transition-all bg-white/5 backdrop-blur-md"
              >
                <item.icon size={22} />
              </motion.a>
            </div>
          ))}
        </div>

        {/* 3D AVATAR (Eyes follow cursor) */}
        <div className="relative flex justify-center mt-10" style={{ perspective: "1000px" }}>
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ y: 150 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-72 md:w-96 cursor-none"
          >
            <img 
              src="/avatar-yuti.png" 
              alt="Avatar Look" 
              className="w-full h-auto drop-shadow-[0_-30px_60px_rgba(29,185,84,0.2)]"
            />
          </motion.div>
        </div>
      </div>

      {/* Vertical 'BACK TO TOP' Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-24 right-4 md:right-8 z-[60] text-[10px] font-mono tracking-[0.5em] uppercase text-white/30 hover:text-white transition-all rotate-90 origin-right flex items-center gap-4 cursor-none"
      >
        <span className="w-10 h-[1px] bg-white/20"></span>
        BACK TO TOP
      </button>

      {/* Clean Bottom Footer Bar */}
      <footer className="bg-black py-8 border-t border-white/5 relative z-20">
        <p className="text-center text-white/40 font-mono text-[10px] tracking-widest uppercase">
          Empowering the web with <span className="text-spotify-green font-bold">React</span> and <span className="text-spotify-green font-bold">JavaScript</span>
        </p>
      </footer>
    </section>
  );
};

export default Contact;