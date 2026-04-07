import React from "react";
import { motion } from "motion/react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { AnimatedText, TiltCard } from "./HelperComponents";

// Import all your images
import chatApp from "../assets/ChatApp.png"; // Real-time Chat
import newslist from "../assets/NewsList.png"; // News App
import chatbot from "../assets/Chatbotai.png";
import shoe from "../assets/Shoe.png";
import webDes from "../assets/WebDes.png";


const FEATURED = [
  {
    id: "01",
    title: "Real-Time Chat App",
    description: "A secure MERN stack chat application with persistent messaging, real-time Socket.io communication, and scalable architecture.",
    image: chatApp,
    tags: ["MERN", "Socket.io", "MongoDB"],
    live: "https://yuti-chatapp.netlify.app/",
    github: "https://github.com/ErYuti/Chat-APP.git"
  },
  {
    id: "02",
    title: "YM NewsListing WebApp",
    description: "Responsive News Listing Web App built with React & Fetch API. Features dynamic category filtering and mobile-first design.",
    image: newslist,
    tags: ["React.js", "Tailwind CSS", "REST API"],
    live: "https://ym-newslisting-app.netlify.app/",
    github: "https://github.com/ErYuti/YM-Newslisting-WebAPP"
  }
];

const MINI = [
  { title: "YM ChatBOT Ai", img: chatbot, live: "https://ym-chatbot-ai.netlify.app/", github: "https://github.com/ErYuti/YM-ChatBot-Ai" },
  { title: "YM Shoes WebApp", img: shoe, live: "https://ym-tailwind-demo.netlify.app/", github: "#" },
  { title: "Web Animation UI", img: webDes, live: "https://ym-webapp-proj.netlify.app/", github: "#" },
  // { title: "YM TodoList", img: todo, live: "#", github: "#" }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-spotify-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-20">
          <AnimatedText text="</Projects>" className="text-4xl md:text-6xl font-black italic tracking-tighter" />
          <motion.div className="h-[1px] bg-white/10 flex-1" />
        </div>

        {/* Featured Section */}
        <div className="space-y-24 mb-32">
          {FEATURED.map((proj, i) => (
            <div key={proj.id} className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 w-full"><TiltCard><div className="rounded-[2rem] overflow-hidden border border-white/10"><img src={proj.image} className="w-full aspect-video object-cover" /></div></TiltCard></div>
              <div className="flex-1 space-y-6">
                <h3 className="text-4xl font-black">{proj.title}</h3>
                <p className="text-spotify-grey leading-relaxed">{proj.description}</p>
                <div className="flex gap-4">
                  <a href={proj.live} className="bg-spotify-green text-black px-6 py-3 rounded-full text-xs font-bold uppercase flex items-center gap-2"><FaArrowUpRightFromSquare /> Live</a>
                  <a href={proj.github} className="border border-white/20 text-white px-6 py-3 rounded-full text-xs font-bold uppercase flex items-center gap-2"><FaGithub /> Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mini Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MINI.map((proj, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="group bg-white/5 border border-white/5 rounded-3xl overflow-hidden hover:border-spotify-green/30 transition-all">
              <img src={proj.img} className="w-full h-40 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <h4 className="font-bold text-white mb-4">{proj.title}</h4>
                <a href={proj.live} className="text-spotify-green text-xs font-bold uppercase hover:underline">View Project →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;