import React from "react";
import { motion } from "motion/react";
import {
  SiReact, SiNodedotjs, SiJavascript, SiNextdotjs,
  SiTailwindcss, SiMongodb, SiExpress, SiMysql,
  SiGit, SiGithub, SiPostman, SiWordpress,
  SiFigma, SiBootstrap, SiCanva, SiFilezilla
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaTerminal, FaChrome } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { DiResponsive } from "react-icons/di";
import { MdOutlineApi } from "react-icons/md";
import { AnimatedText } from "./HelperComponents";

const SKILLS = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Responsive Design", icon: DiResponsive, color: "#4ade80" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "API Design", icon: MdOutlineApi, color: "#00ffcc" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "DevTools", icon: FaChrome, color: "#4285F4" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  { name: "FileZilla", icon: SiFilezilla, color: "#BF0000" },
  { name: "Terminal", icon: FaTerminal, color: "#4EAA25" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
      // Setting a CSS variable for the brand color locally
      style={{ "--brand-color": skill.color }}
    >
      {/* Background Hover Glow - Matches brand color */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 rounded-3xl"
        style={{ backgroundColor: "var(--brand-color)" }}
      />

      <div className="relative bg-spotify-dark border border-white/5 p-6 md:p-8 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-500 group-hover:border-[var(--brand-color)]/40 group-hover:-translate-y-3 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]">

        {/* ICON: Changes from grey to brand color on hover */}
        <skill.icon
          className="text-5xl md:text-6xl transition-all duration-500 text-spotify-grey group-hover:scale-125"
          style={{ color: "var(--icon-color, #b3b3b3)" }}
        />

        <span className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-text-main uppercase group-hover:text-main transition-colors text-center">
          {skill.name}
        </span>

        {/* UNDERLINE: Matches brand color */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] transition-all duration-500 group-hover:w-1/2"
          style={{ backgroundColor: "var(--brand-color)" }}
        />
      </div>

      {/* Modern Tailwind/CSS Logic to apply the color to the icon */}
      <style jsx>{`
        .group:hover :global(svg) {
          color: var(--brand-color) !important;
          filter: drop-shadow(0 0 8px var(--brand-color));
        }
      `}</style>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 md:py-48 px-6 bg-spotify-black relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute left-[-10%] top-[20%] w-[40%] h-[40%] bg-spotify-green/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute right-[-5%] bottom-[10%] w-[30%] h-[30%] bg-spotify-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col gap-6 mb-24">
          <div className="flex items-center gap-8">
            <AnimatedText
              text="</Expertise>"
              className="text-5xl md:text-8xl font-black italic tracking-tighter"
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="h-[1px] bg-gradient-to-r from-spotify-green via-spotify-green/50 to-transparent flex-1 opacity-30"
            />
          </div>
          <p className="text-spotify-grey font-mono tracking-[0.5em] uppercase text-xs md:text-sm">
            Full Stack Development & Technical Toolset
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 md:gap-8">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;