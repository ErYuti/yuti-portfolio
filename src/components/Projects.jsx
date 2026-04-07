import React from "react";
import { motion } from "motion/react";
import { FaArrowUpRightFromSquare, FaGithub, FaWordpress } from "react-icons/fa6";
import { AnimatedText, TiltCard } from "./HelperComponents";

// --- DATA ARRAYS ---
const FEATURED_PROJECTS = [
  {
    id: "01",
    title: "Real-Time Chat App",
    description: "A secure MERN stack chat application supporting persistent messaging and user presence tracking. Implemented low-latency WebSocket communication for real-time data exchange and designed a scalable backend architecture to handle multi-user interactions efficiently.",
    image: "https://picsum.photos/seed/chat/800/500", // Replace with your screenshot
    tags: ["MERN", "Socket.io", "Node.js", "Express", "MongoDB"],
    live: "#",
    github: "#"
  },
  {
    id: "02",
    title: "NewsListing WebApp",
    description: "A responsive News Listing Web App that fetches and displays real-time news articles via a public API. Features include dynamic search, category filtering, a top headlines section, dark mode, loading states, and a mobile-first design.",
    image: "https://picsum.photos/seed/news/800/500", // Replace with your screenshot
    tags: ["React.js", "Tailwind CSS", "Fetch API", "State Management"],
    live: "#",
    github: "#"
  },

];

const Projects = () => {
  return (
    <section id="projects" className="py-32 md:py-48 px-6 bg-spotify-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-spotify-green/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* ================= FEATURED PROJECTS SECTION ================= */}
        <div className="flex items-center gap-6 mb-24 md:mb-32">
          <AnimatedText
            text="</Featured_Work>"
            className="text-5xl md:text-7xl font-black italic tracking-tighter"
          />
          <motion.div
            initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1 }}
            className="h-[1px] bg-gradient-to-r from-spotify-green to-transparent flex-1 opacity-20"
          />
        </div>

        <div className="space-y-32 md:space-y-48 mb-48">
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
            >
              {/* LEFT/RIGHT: Project Image */}
              <div className="flex-1 w-full group">
                <TiltCard>
                  <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] aspect-[16/10] group-hover:border-spotify-green/40 transition-colors duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-spotify-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </TiltCard>
              </div>

              {/* RIGHT/LEFT: Project Details */}
              <div className="flex-1 w-full space-y-8">
                <div className="space-y-3">
                  <p className="text-spotify-green font-mono font-bold tracking-[0.4em] uppercase text-sm">
                    Featured Project {project.id}
                  </p>
                  <h3 className="text-4xl md:text-6xl font-black tracking-tight text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-spotify-grey text-base md:text-lg leading-relaxed max-w-xl">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-spotify-grey hover:border-spotify-green hover:text-white transition-all cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons: Live Demo & GitHub */}
                <div className="pt-4 flex flex-wrap gap-4">
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-spotify-green hover:bg-[#1ed760] text-black font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_20px_rgba(29,185,84,0.2)] uppercase tracking-widest text-xs"
                  >
                    Live Demo <FaArrowUpRightFromSquare />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-transparent border border-white/20 hover:border-white hover:bg-white/5 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-[1.02] uppercase tracking-widest text-xs"
                  >
                    Source Code <FaGithub className="text-lg" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;