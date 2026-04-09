import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Html,
  Sparkles,
  ContactShadows,
  PerspectiveCamera,
} from "@react-three/drei";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope, FaPaperPlane } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext"; // Import theme hook

/* ---------------- 1. THE REAL 3D INTERACTIVE FORM ---------------- */
function FloatingForm() {
  const { accentColor } = useTheme(); // Access dynamic color
  const formRef = useRef();
  const formElement = useRef();
  const [status, setStatus] = useState("SEND MESSAGE");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("SENDING...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formElement.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("SUCCESS! ✔");
          formElement.current.reset();
          setTimeout(() => setStatus("SEND MESSAGE"), 3000);
        },
        (error) => {
          setStatus("RETRY! ✘");
          setTimeout(() => setStatus("SEND MESSAGE"), 3000);
        }
      );
  };

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (formRef.current) {
      formRef.current.rotation.y = Math.sin(t * 0.1) * 0.05;
      formRef.current.position.y = Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <group ref={formRef}>
      <Html
        transform
        distanceFactor={2.2}
        position={[0, 0, 0]}
        className="pointer-events-auto"
      >
        <div className="w-[400px] bg-[#080808]/95 backdrop-blur-3xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
          {/* Terminal Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/40" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
              <div
                className="w-2 h-2 rounded-full transition-colors duration-500"
                style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }}
              />
            </div>
            <span className="text-[8px] font-mono text-white/30 tracking-[0.3em] uppercase">Connect_Terminal</span>
          </div>

          <form ref={formElement} onSubmit={sendEmail} className="space-y-5">
            <div className="space-y-1.5 text-left">
              <label className="text-[8px] font-mono uppercase tracking-[0.2em] ml-1" style={{ color: accentColor }}>Name</label>
              <input
                required
                name="user_name"
                type="text"
                placeholder="Yuti Meher"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-mono text-xs focus:outline-none transition-all placeholder:text-white/20"
                style={{ "--tw-ring-color": accentColor }} // Logic for focus border
              />
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-[8px] font-mono uppercase tracking-[0.2em] ml-1" style={{ color: accentColor }}>Email</label>
              <input
                required
                name="user_email"
                type="email"
                placeholder="yutimeher@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-mono text-xs focus:outline-none transition-all placeholder:text-white/20"
              />
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-[8px] font-mono uppercase tracking-[0.2em] ml-1" style={{ color: accentColor }}>Message</label>
              <textarea
                required
                name="message"
                rows="2"
                placeholder="Drop a message..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-mono text-xs focus:outline-none transition-all resize-none placeholder:text-white/20"
              />
            </div>

            <button
              type="submit"
              className="w-full text-black font-black py-3.5 rounded-xl transition-all flex items-center justify-center gap-3 active:scale-95 text-[9px] tracking-widest uppercase"
              style={{ backgroundColor: accentColor, boxShadow: `0 0 20px ${accentColor}44` }}
            >
              {status}
              <FaPaperPlane className={status === "SENDING..." ? "animate-ping" : ""} />
            </button>
          </form>
        </div>
      </Html>
    </group>
  );
}

/* ---------------- 2. MAIN CONTACT PAGE ---------------- */
const Contact = () => {
  const { accentColor } = useTheme(); // Use Theme Color
  const socials = [
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/er-yuti-m-a26519245/" },
    { icon: FaGithub, link: "https://github.com/ErYuti" },
    { icon: FaInstagram, link: "#" },
    { icon: FaEnvelope, link: "mailto:yutimeher@gmail.com" },
  ];

  const footerText = "EMPOWERING THE WEB WITH REACT AND JAVASCRIPT";

  return (
    <section id="contact" className="relative bg-spotify-black min-h-screen flex flex-col items-center pt-16 overflow-hidden">

      {/* HEADER SECTION */}
      <div className="z-20 flex flex-col items-center text-center px-4 max-w-xl">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="px-5 py-2 mb-2">
          <p className="text-white font-mono text-sm md:text-base tracking-tight opacity-60 italic">
            "Learning, Living, and Leveling Up."
          </p>
        </motion.div>

        {/* Dynamic Title Color */}
        <h2
          className="font-mono text-3xl md:text-4xl font-bold mb-6 tracking-tight transition-colors duration-500"
          style={{ color: accentColor }}
        >
          GetInTouch<span className="text-white">();</span>
        </h2>

        {/* Social Icons with Dynamic Hover */}
        <div className="flex gap-4 mb-2">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              whileHover={{ scale: 1.1, y: -4 }}
              className="group relative w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" style={{ backgroundColor: accentColor }}></span>
              <span className="absolute inset-0 rounded-full border opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" style={{ borderColor: accentColor }}></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                <social.icon size={16} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* 3D CANVAS AREA (Optimized Height) */}
      <div className="w-full h-[450px] md:h-[550px] relative mt-[-30px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] blur-[120px] rounded-full pointer-events-none opacity-20" style={{ backgroundColor: accentColor }} />

        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color={accentColor} />

          <Suspense fallback={null}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
              <FloatingForm />
            </Float>
            <ContactShadows position={[0, -2.5, 0]} opacity={0.3} scale={10} blur={3} />
            <Sparkles count={40} scale={6} size={1.5} speed={0.3} color={accentColor} />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* FOOTER */}
      <footer className="w-full py-6 bg-[#050505] flex flex-col items-center justify-center border-t border-white/5">
        <div className="flex flex-wrap justify-center gap-[0.1em] px-10 text-center">
          {footerText.split("").map((char, i) => (
            <span key={i} className="font-mono text-[8px] md:text-[9px] tracking-[0.2em] text-white/20 uppercase">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
        <p className="mt-2 text-[9px] text-white/10 font-mono tracking-widest uppercase">
          created by yutimeher
        </p>
      </footer>
    </section>
  );
};

export default Contact;