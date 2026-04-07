import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa6";
import Avatar from "../assets/3D-Avatar.png";

const Contact = () => {
  const socials = [
    { icon: FaLinkedinIn, link: "https://linkedin.com/in/yuti-meher", active: true },
    { icon: FaGithub, link: "https://github.com/ErYuti", active: false },
    { icon: FaInstagram, link: "#", active: false },
    { icon: FaEnvelope, link: "mailto:yutimeher@gmail.com", active: false },
  ];

  // --- EYE TRACKING LOGIC ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Mapped movement: moves the pupil based on mouse distance from center
  const pupilX = useTransform(smoothX, [-500, 500], [-8, 8]);
  const pupilY = useTransform(smoothY, [-500, 500], [-8, 8]);

  return (
    <section
      id="contact"
      className="relative pt-40 pb-0 overflow-hidden bg-spotify-black"
      onMouseMove={(e) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }}
    >
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

        <motion.p
          className="text-spotify-green font-mono font-bold text-xl md:text-2xl mb-12"
        >
          GetInTouch();
        </motion.p>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 mb-24">
          {socials.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              whileHover={{ scale: 1.1, borderColor: "#1DB954", color: "#1DB954" }}
              className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all bg-white/5 backdrop-blur-md ${item.active ? 'border-spotify-green text-spotify-green' : 'border-white/20 text-white'}`}
            >
              <item.icon size={22} />
            </motion.a>
          ))}
        </div>

        {/* --- EYE TRACKING AVATAR SECTION --- */}
        <div className="relative w-64 md:w-80 mx-auto mt-10">
          {/* Base Face Image (No Pupils) */}
          <img
            src={Avatar}
            alt="Avatar"
            className="w-full relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          />

          {/* LEFT PUPIL */}
          <motion.div
            style={{ x: pupilX, y: pupilY }}
            className="absolute w-2.5 h-2.5 md:w-4 md:h-4 bg-black rounded-full z-20"
            // If they are looking "inward" (cross-eyed), increase the 'left' value for the right eye
            // and decrease the 'left' value for the left eye.
            style={{ top: "31%", left: "37.5%", x: pupilX, y: pupilY }}
          />

          {/* RIGHT PUPIL */}
          <motion.div
            style={{ x: pupilX, y: pupilY }}
            className="absolute w-2.5 h-2.5 md:w-4 md:h-4 bg-black rounded-full z-20"
            style={{ top: "31%", left: "50%", x: pupilX, y: pupilY }}
          />

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-white/5 relative z-20 mt-20">
        <p className="text-center text-white/40 font-mono text-[10px] tracking-widest uppercase">
          Empowering the web with <span className="text-spotify-green font-bold">React</span> and <span className="text-spotify-green font-bold">JavaScript</span>
        </p>
      </footer>
    </section>
  );
};

export default Contact;