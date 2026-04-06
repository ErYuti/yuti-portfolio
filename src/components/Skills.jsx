import React from "react";
import { motion } from "motion/react";
import { 
  SiReact, SiNodedotjs, SiJavascript, SiTypescript, 
  SiTailwindcss, SiRedux, SiNextdotjs, SiGit,
  SiMongodb, SiPostman, SiFramer, SiVite
} from "react-icons/si";
import { AnimatedText } from "./HelperComponents";

const SKILLS = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Motion", icon: SiFramer, color: "#E10098" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative"
    >
      {/* Background Hover Glow */}
      <div 
        className="absolute inset-0 bg-spotify-green/0 group-hover:bg-spotify-green/10 blur-xl transition-all duration-500 rounded-3xl" 
      />
      
      <div className="relative bg-spotify-dark border border-white/5 p-8 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-300 group-hover:border-spotify-green/30 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        {/* Icon with Dynamic Color on Hover */}
        <skill.icon 
          className="text-5xl md:text-6xl transition-all duration-500 text-spotify-grey group-hover:scale-110" 
          style={{ color: "var(--icon-color)" }} 
        />
        
        <span className="text-sm font-mono tracking-widest text-spotify-grey uppercase group-hover:text-white transition-colors">
          {skill.name}
        </span>

        {/* Bottom indicator line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-spotify-green group-hover:w-1/2 transition-all duration-500" />
      </div>

      {/* Hidden variable for icon color hover */}
      <style jsx>{`
        .group:hover svg {
          color: ${skill.color} !important;
          filter: drop-shadow(0 0 8px ${skill.color}66);
        }
      `}</style>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-40 px-6 bg-spotify-black relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-spotify-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-24">
          <div className="flex items-center gap-6">
            <AnimatedText 
              text="</Skills>" 
              className="text-5xl md:text-7xl font-black italic tracking-tighter" 
            />
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-[1px] bg-gradient-to-r from-spotify-green to-transparent flex-1 opacity-20"
            />
          </div>
          <h3 className="text-spotify-grey font-mono tracking-[0.4em] uppercase text-sm md:text-base">
            Tech Stack & Tools
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;