import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa6";
import Avatar from "../assets/3D-Avatar.png";

const Contact = () => {
  // 👁️ Eye refs
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  // 👁️ Motion values
  const leftX = useMotionValue(0);
  const leftY = useMotionValue(0);
  const rightX = useMotionValue(0);
  const rightY = useMotionValue(0);

  // 👁️ Smooth motion
  const smoothLeftX = useSpring(leftX, { stiffness: 50, damping: 15 });
  const smoothLeftY = useSpring(leftY, { stiffness: 50, damping: 15 });
  const smoothRightX = useSpring(rightX, { stiffness: 50, damping: 15 });
  const smoothRightY = useSpring(rightY, { stiffness: 50, damping: 15 });

  // 👁️ Eye tracking logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      const updateEye = (eyeRef, motionX, motionY) => {
        if (!eyeRef.current) return;

        const rect = eyeRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = e.clientX - centerX;
        const dy = e.clientY - centerY;

        const angle = Math.atan2(dy, dx);
        const MAX = 2;

        motionX.set(Math.cos(angle) * MAX);
        motionY.set(Math.sin(angle) * MAX);
      };

      updateEye(leftEyeRef, leftX, leftY);
      updateEye(rightEyeRef, rightX, rightY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socials = [
    { icon: FaLinkedinIn, link: "https://linkedin.com/in/er-yuti-m-a26519245/" },
    { icon: FaGithub, link: "https://github.com/ErYuti" },
    { icon: FaInstagram, link: "#" },
    { icon: FaEnvelope, link: "mailto:yutimeher@gmail.com" },
  ];

  return (
    <section className="relative bg-black flex flex-col items-center pt-24 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[150%] h-[100%] opacity-40 blur-[120px]"
          style={{
            background: 'radial-gradient(circle at center, #1DB954 0%, transparent 70%)'
          }}
        />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col items-center">
        {/* TEXT */}
        <div className="text-center px-6">
          <p className="text-gray-400 font-mono text-lg tracking-widest mb-8">
            "Learning, Living, and Leveling Up."
          </p>

          <h2 className="font-mono text-4xl font-bold mb-12">
            <span className="text-[#1DB954]">GetInTouch</span>
            <span className="text-white">();</span>
          </h2>

          {/* SOCIALS */}
          <div className="flex gap-5 mb-14 justify-center">
            {socials.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white bg-black/40 backdrop-blur-sm"
              >
                <item.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* AVATAR */}
        <div className="relative w-72 md:w-[420px]">
          <img src={Avatar} alt="Avatar" className="w-full" />

          {/* LEFT EYE (ORIGINAL STYLING) */}
          <div
            ref={leftEyeRef}
            className="absolute top-[32.4%] left-[37.5%] w-[26px] h-[16px]
            rounded-full overflow-hidden flex items-center justify-center
            bg-gradient-to-b from-[#cbb9a3]/60 to-[#a89278]/40"
          >
            <motion.div
              style={{ x: smoothLeftX, y: smoothLeftY }}
              className="relative w-4 h-4"
            >
              <div className="absolute inset-0 rounded-full bg-[#1a0f0a]" />
              <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-[#3b2a22] via-[#1f140f] to-black" />
              <div className="absolute inset-[5px] rounded-full bg-black/80" />
              <div className="absolute top-[2px] left-[3px] w-[5px] h-[5px] bg-white/70 rounded-full blur-[0.5px]" />
              <div className="absolute bottom-[2px] right-[3px] w-[2px] h-[2px] bg-white/30 rounded-full" />
            </motion.div>
          </div>

          {/* RIGHT EYE (ORIGINAL STYLING) */}
          <div
            ref={rightEyeRef}
            className="absolute top-[31.7%] left-[52.3%] w-[26px] h-[16px]
            rounded-full overflow-hidden flex items-center justify-center
            bg-gradient-to-b from-[#cbb9a3]/60 to-[#a89278]/40"
          >
            <motion.div
              style={{ x: smoothRightX, y: smoothRightY }}
              className="relative w-4 h-4"
            >
              <div className="absolute inset-0 rounded-full bg-[#1a0f0a]" />
              <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-[#3b2a22] via-[#1f140f] to-black" />
              <div className="absolute inset-[5px] rounded-full bg-black/80" />
              <div className="absolute top-[2px] left-[3px] w-[5px] h-[5px] bg-white/70 rounded-full blur-[0.2px]" />
              <div className="absolute bottom-[2px] right-[3px] w-[2px] h-[2px] bg-white/30 rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full border-t border-white/5 py-8 bg-black z-20">
        <p className="text-center font-mono text-[13px] tracking-wider text-gray-500">
          Empowering the web with React and JavaScript
        </p>
      </footer>
    </section>
  );
};

export default Contact;