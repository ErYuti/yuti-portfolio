import React from "react";
import { motion } from "motion/react";
import {
  FaDownload, FaUserAstronaut, FaLightbulb,
  FaTrophy, FaCameraRetro, FaEarthAmericas, FaPalette,
  FaFeatherPointed, FaGraduationCap, FaCheck, FaBriefcase,
  FaBuilding, FaCompass, FaFigma, FaLaptopCode
} from "react-icons/fa6";
import { SiCanva } from "react-icons/si";
import { AnimatedText } from "./HelperComponents";

// Reusable animated card component for the "Bento Box" layout
const BentoCard = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={`group relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-spotify-green/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(29,185,84,0.15)] ${className}`}
  >
    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-spotify-green/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-1000 -z-10" />
    {children}
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-40 px-6 relative overflow-hidden bg-spotify-black">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-spotify-green/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-spotify-green/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* CARD 1: WHO I AM */}
          <BentoCard className="lg:col-span-8 flex flex-col justify-between" delay={0.1}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-spotify-green/10 flex items-center justify-center text-spotify-green">
                  <FaUserAstronaut size={24} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white">Who I Am</h3>
              </div>
              <p className="text-spotify-grey text-base md:text-lg leading-relaxed mb-6">
                I’m <span className="text-white font-bold">Yuti Meher</span>, a highly motivated <span className="text-spotify-green">Full Stack Web Developer</span>.
                I specialize in building scalable web architectures using the <span className="text-white">MERN stack</span>, focusing on high-performance API design and seamless client-side integration.
              </p>
              <p className="text-spotify-grey text-base md:text-lg leading-relaxed">
                By leveraging my engineering background, I architect <span className="text-white">robust backend systems</span> and <span className="text-white">dynamic interfaces</span>, bridging the gap between raw data processing and intuitive, user-centric web applications.
              </p>

            </div>

            <div className="pt-10">
              <a
                href="/Yuti Meher Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-stack-container group w-fit"
              >
                <div className="btn-stack-bg"></div>
                <button className="btn-stack-top uppercase tracking-widest text-xs flex items-center gap-3">
                  View Resume <FaDownload className="w-3 h-3 group-hover:animate-bounce" />
                </button>
              </a>
            </div>
          </BentoCard>

          {/* CARD 2: EDUCATION */}
          <BentoCard className="lg:col-span-4" delay={0.2}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white">
                <FaGraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {[
                { title: "B.Tech - E&TC", school: "SVKM's Dwarkadas J. Sanghvi", result: "8.61 CGPA" },
                { title: "Diploma - E&TC", school: "St. John College", result: "92.12%" },
                { title: "SSC", school: "Bhuvanesh Kirtane Vidyalaya", result: "82.20%" }
              ].map((edu, idx) => (
                <div key={idx} className="group/edu">
                  <h4 className="text-spotify-green font-bold text-sm">{edu.title}</h4>
                  <p className="text-white/70 text-xs mt-1 leading-tight">{edu.school}</p>
                  <p className="text-spotify-grey text-[10px] font-mono mt-1">{edu.result}</p>
                  {idx !== 2 && <div className="w-full h-[1px] bg-white/5 mt-4" />}
                </div>
              ))}
            </div>
          </BentoCard>

          {/* CARD 3: PROFESSIONAL EXPERIENCE (Unique Large Card) */}
          <BentoCard className="lg:col-span-12" delay={0.3}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-spotify-green/10 flex items-center justify-center text-spotify-green">
                <FaBriefcase size={22} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">Professional Journey</h3>
            </div>

            <div className="relative space-y-12 md:space-y-16">
              {/* Central Vertical Line (Visible on desktop) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

              {[
                {
                  role: "Software Research Developer",
                  company: "ThinkAerial Autonomous Systems",
                  duration: "July 2025 – Present",
                  desc: "Architecting scalable MERN applications, high-performance GIS platforms, and secure full-stack recruitment infrastructure."
                },
                {
                  role: "Software Web Developer Intern",
                  company: "OTET Infosystems",
                  duration: "7 Months",
                  desc: "Engineered 10+ responsive web solutions using React.js and WordPress with optimized CI/CD and FTP deployments."
                },
                {
                  role: "Trainee Research Engineer",
                  company: "Adani Dahanu Thermal Power",
                  duration: "1 Month",
                  desc: "Automated system analysis and process optimization through data-driven engineering models."
                },
                {
                  role: "Operational Trainee Engineer",
                  company: "P.M. Electro-Auto Pvt. Ltd",
                  duration: "40 Days",
                  desc: "Applied analytical troubleshooting to complex industrial systems, enhancing operational efficiency."
                }
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative group/item"
                >
                  <div className={`md:grid md:grid-cols-2 gap-8 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    {/* Timeline Content */}
                    <div className={`${i % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}>
                      <span className="text-[10px] font-mono text-spotify-green bg-spotify-green/10 px-2 py-1 rounded inline-block mb-2">
                        {exp.duration}
                      </span>
                      <h4 className="text-white font-bold text-lg">{exp.role}</h4>
                      <p className="text-spotify-green/80 text-sm font-medium mb-2 flex items-center gap-2 md:justify-end">
                        <FaBuilding size={12} /> {exp.company}
                      </p>
                      <p className="text-spotify-grey text-sm leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Bullet Point */}
                  <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 w-4 h-4 rounded-full bg-spotify-black border-2 border-spotify-green shadow-[0_0_15px_rgba(29,185,84,0.5)] group-hover/item:scale-125 transition-transform" />
                </motion.div>
              ))}
            </div>
          </BentoCard>

          {/* CARD 4: SKILLS & PARTICIPATIONS */}
          <BentoCard className="lg:col-span-7" delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <FaLaptopCode className="text-spotify-green" /> Skills Acquired
                </h3>
                <ul className="space-y-3">
                  {[
                    { text: "Leadership & Communication", icon: FaCompass },
                    { text: "Problem Solving", icon: FaLightbulb },
                    { text: "Photography & Canva", icon: SiCanva },
                    { text: "UI/UX Design (Figma)", icon: FaFigma }
                  ].map((s, i) => (
                    <li key={i} className="flex items-center gap-3 text-spotify-grey text-sm">
                      <s.icon className="text-spotify-green text-xs" /> {s.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <FaTrophy className="text-spotify-green" /> Participations
                </h3>
                <div className="space-y-4">
                  {[
                    "Robotics Workshop (Automation/Sensors)",
                    "Smart Dishwasher (State-Level Competition)",
                    "IoT Virtual Doctor (Technical Paper)",
                    "DJ Strike (Technical Competition)"
                  ].map((p, i) => (
                    <div key={i} className="flex gap-3">
                      <FaCheck className="text-spotify-green mt-1 shrink-0 size-3" />
                      <p className="text-spotify-grey text-xs leading-snug">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>

          {/* CARD 5: HOBBIES */}
          <BentoCard className="lg:col-span-5" delay={0.5}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white">
                <FaPalette size={18} />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white">Interests</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: FaEarthAmericas, text: "Exploring Places" },
                { icon: FaCameraRetro, text: "Photography & Videography" },
                { icon: FaPalette, text: "Painting & Sketching" },
                { icon: FaBriefcase, text: "Tech Exploration" }
              ].map((h, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-spotify-green/20 transition-all">
                  <h.icon className="text-spotify-green" />
                  <span className="text-spotify-grey text-[11px] font-medium">{h.text}</span>
                </div>
              ))}
            </div>
            <p className="text-spotify-grey/50 text-[10px] mt-6 italic text-center">
              "Capturing raw moments and expressing thoughts through art."
            </p>
          </BentoCard>

        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default About;