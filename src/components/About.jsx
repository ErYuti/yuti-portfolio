import React from "react";
import { motion } from "motion/react";
import { FaDownload, FaCode, FaRocket, FaLightbulb } from "react-icons/fa6";
import { AnimatedText, TiltCard } from "./HelperComponents";

const About = () => {
  return (
    <section id="about" className="py-40 px-6 relative overflow-hidden bg-spotify-black">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-spotify-green/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header with Line Effect */}
        <div className="flex items-center gap-6 mb-20">
          <AnimatedText 
            text="</AboutMe>" 
            className="text-5xl md:text-7xl font-black italic tracking-tighter" 
          />
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: "100%" }} 
            className="h-[2px] bg-gradient-to-r from-spotify-green to-transparent flex-1 opacity-30" 
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE: Content */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-spotify-grey text-lg md:text-xl leading-relaxed">
              <p className="border-l-4 border-spotify-green pl-6 py-2 bg-white/5 rounded-r-2xl">
                I’m a dedicated <span className="text-white font-bold">Full Stack Developer</span> focused on building dynamic, 
                user-friendly web applications. My journey in development is driven by a passion for 
                high-performance logic and <span className="text-spotify-green">reusable architecture</span>.
              </p>
              
              <p>
                Whether it's processing 50GB geospatial datasets or crafting pixel-perfect 
                UIs, my goal is to transform complex ideas into intuitive digital experiences 
                that engage users effectively.
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { icon: FaCode, text: "Clean Code" },
                  { icon: FaRocket, text: "Fast Performance" },
                  { icon: FaLightbulb, text: "Problem Solver" },
                  { icon: FaDownload, text: "Ready to Deploy" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-mono text-white/60">
                    <item.icon className="text-spotify-green" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* THE STACKED RESUME BUTTON */}
            <div className="pt-8">
              <a href="/resume.pdf" download className="btn-stack-container">
                <div className="btn-stack-bg"></div>
                <button className="btn-stack-top uppercase tracking-widest text-xs flex items-center gap-3">
                  Download Resume <FaDownload className="w-3 h-3" />
                </button>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Unique Image Presentation */}
          <div className="lg:col-span-5 relative group">
            <TiltCard>
              <div className="relative z-10">
                {/* Main Image Frame */}
                <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/10 aspect-[4/5] shadow-2xl">
                  <img 
                    src="/your-photo.jpg" // Replace with your actual photo path
                    alt="About Yuti" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  
                  {/* Glass Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-spotify-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-spotify-green font-mono text-sm uppercase tracking-widest">Available for Hire</p>
                  </div>
                </div>

                {/* Floating Decorative Elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-spotify-green/20 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center -z-10"
                >
                  <FaCode className="text-spotify-green text-3xl" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-10 -left-10 p-6 glass-pill border border-white/20 hidden md:block"
                >
                  <p className="text-xs font-bold tracking-tighter uppercase">50+ Projects Completed</p>
                </motion.div>
              </div>
            </TiltCard>

            {/* Neon Shadow Effect */}
            <div className="absolute inset-0 bg-spotify-green/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;