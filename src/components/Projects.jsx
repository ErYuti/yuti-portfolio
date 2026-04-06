import React from "react";
import { motion } from "motion/react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AnimatedText, TiltCard } from "./HelperComponents";

const PROJECTS = [
  {
    id: "01",
    title: "Streamify",
    description: "A React-based application utilizing the YouTube Data API and Redux Toolkit. Features intuitive interface with dynamic video search and real-time playback.",
    image: "https://picsum.photos/seed/stream/800/500", // Replace with your project screenshot
    tags: ["React", "Redux", "YouTube API", "Tailwind"],
    live: "#"
  },
  {
    id: "02",
    title: "GIS Platform",
    description: "Visualizing and processing 50GB+ geospatial datasets for enterprise use cases with high-performance mapping tools.",
    image: "https://picsum.photos/seed/gis/800/500",
    tags: ["MERN", "MongoDB", "GIS", "Node.js"],
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-40 px-6 bg-spotify-black">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center gap-6 mb-32">
          <AnimatedText 
            text="</Projects>" 
            className="text-5xl md:text-7xl font-black italic tracking-tighter" 
          />
          <div className="h-[1px] bg-gradient-to-r from-spotify-green to-transparent flex-1 opacity-20" />
        </div>

        <div className="space-y-40">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center`}
            >
              {/* LEFT: Project Image with Zoom Effect */}
              <div className="flex-1 w-full group">
                <TiltCard>
                  <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[16/10]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-spotify-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </TiltCard>
              </div>

              {/* RIGHT: Project Details */}
              <div className="flex-1 w-full space-y-8">
                <div className="space-y-2">
                  <p className="text-spotify-green font-mono font-bold tracking-[0.4em] uppercase text-sm">
                    Project {project.id}
                  </p>
                  <h3 className="text-5xl md:text-7xl font-black italic tracking-tight text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-spotify-grey text-lg md:text-xl leading-relaxed max-w-xl">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-spotify-grey hover:border-spotify-green hover:text-white transition-all cursor-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <div className="pt-4">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full md:w-fit md:min-w-[300px] bg-spotify-green hover:bg-[#1ed760] text-black font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_10px_20px_rgba(29,185,84,0.2)] uppercase tracking-tighter text-sm"
                  >
                    View Project <FaArrowUpRightFromSquare className="text-sm" />
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