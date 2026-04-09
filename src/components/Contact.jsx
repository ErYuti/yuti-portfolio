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
import emailjs from "@emailjs/browser"; // Import EmailJS
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope, FaPaperPlane } from "react-icons/fa6";

/* ---------------- 1. THE REAL 3D INTERACTIVE FORM ---------------- */
function FloatingForm() {
  const formRef = useRef(); // Ref for 3D animation
  const formElement = useRef(); // Ref for the actual HTML form
  const [status, setStatus] = useState("SEND MESSAGE");

  // --- SEND EMAIL FUNCTION ---
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
          formElement.current.reset(); // Clear form
          setTimeout(() => setStatus("SEND MESSAGE"), 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("RETRY! ✘");
          setTimeout(() => setStatus("SEND MESSAGE"), 3000);
        }
      );
  };

  // 3D Animation
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
        <div className="w-[440px] bg-[#080808]/95 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] shadow-[0_0_80px_rgba(29,185,84,0.1)]">
          {/* Terminal Header */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-spotify-green shadow-[0_0_15px_#1DB954]" />
            </div>
            <span className="text-[9px] font-mono text-spotify-grey tracking-[0.4em] uppercase">Connect_Terminal</span>
          </div>

          <form ref={formElement} onSubmit={sendEmail} className="space-y-6">

            {/* Name */}
            <div className="space-y-2 text-left">
              <label className="text-[9px] font-mono text-spotify-green uppercase tracking-[0.2em] ml-1">
                Name
              </label>
              <input
                required
                name="user_name"
                type="text"
                placeholder="Yuti meher"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-mono text-xs focus:outline-none focus:border-spotify-green transition-all placeholder:text-white/30 placeholder:opacity-60"
              />
            </div>

            {/* Email */}
            <div className="space-y-2 text-left">
              <label className="text-[9px] font-mono text-spotify-green uppercase tracking-[0.2em] ml-1">
                Email
              </label>
              <input
                required
                name="user_email"
                type="email"
                placeholder="yutimeher@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-mono text-xs focus:outline-none focus:border-spotify-green transition-all placeholder:text-white/30 placeholder:opacity-60"
              />
            </div>

            {/* Message */}
            <div className="space-y-2 text-left">
              <label className="text-[9px] font-mono text-spotify-green uppercase tracking-[0.2em] ml-1">
                Message
              </label>
              <textarea
                required
                name="message"
                rows="3"
                placeholder="Drop a message..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-mono text-xs focus:outline-none focus:border-spotify-green transition-all resize-none placeholder:text-white/30 placeholder:opacity-60"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-spotify-green hover:bg-[#1ed760] text-black font-black py-4 rounded-xl transition-all flex items-center justify-center gap-3 active:scale-95 shadow-[0_0_30px_rgba(29,185,84,0.3)] text-[10px] tracking-widest uppercase"
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
  const socials = [
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/er-yuti-m-a26519245/" },
    { icon: FaGithub, link: "https://github.com/ErYuti" },
    { icon: FaInstagram, link: "#" },
    { icon: FaEnvelope, link: "mailto:yutimeher@gmail.com" },
  ];

  const footerText = "EMPOWERING THE WEB WITH REACT AND JAVASCRIPT";

  return (
    <section id="contact" className="relative bg-spotify-black min-h-screen flex flex-col items-center pt-24 overflow-hidden">

      {/* HEADER SECTION */}
      <div className="z-20 flex flex-col items-center text-center px-2">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className=" px-5 py-3 rounded-lg mb-4 backdrop-blur-sm">
          <p className="text-white font-mono text-4xl md:text-xl tracking-tighter opacity-80">"Learning, Living, and Leveling Up."</p>
        </motion.div>

        <h2 className="font-mono text-3xl md:text-4xl font-bold mb-8 tracking-tight bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
          GetInTouch<span className="text-white">();</span>
        </h2>

        <div className="flex gap-4 mb-4">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              whileHover={{
                scale: 1.15,
                rotate: 3,
              }}
              className="group relative w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white overflow-hidden transition-all duration-300"
            >
              {/* Gradient fill layer */}
              <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full blur-sm"></span>

              {/* Glow ring */}
              <span className="absolute inset-0 rounded-full border border-green-400 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></span>

              {/* Icon */}
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                <social.icon size={18} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* 3D CANVAS AREA */}
      <div className="w-full h-[550px] md:h-[650px] relative mt-[-20px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-spotify-green/10 blur-[120px] rounded-full pointer-events-none" />

        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#1DB954" />

          <Suspense fallback={null}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
              <FloatingForm />
            </Float>
            <ContactShadows position={[0, -2.5, 0]} opacity={0.3} scale={10} blur={3} />
            <Sparkles count={40} scale={6} size={1.5} speed={0.3} color="#1DB954" />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* FOOTER */}
      <footer className="w-full py-4 bg-black flex flex-col items-center justify-center border-t border-white/10">

        {/* Main text */}
        <div className="flex flex-wrap justify-center gap-[0.15em]">
          {footerText.split("").map((char, i) => (
            <span
              key={i}
              className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] text-white/30 uppercase"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        {/* Second line (small + subtle) */}
        <p className="mt-2 text-[10px] md:text-xs text-white/20 font-mono tracking-wide">
          created by yutimeher
        </p>

      </footer>
    </section>
  );
};

export default Contact;