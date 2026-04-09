import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import yutiLogo from "../assets/yuti-logo.png"; // Make sure to have a logo image in this path

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "SKILLS", id: "skills" },
    { name: "PROJECTS", id: "projects" },
  ];

  // 1. Handle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Highlighting logic: detect which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Detect when section is in the middle 20% of screen
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-[100]">
      <div
        className={`glass-pill px-6 md:px-10 py-4 flex justify-between items-center ${scrolled ? "bg-black/80 py-3" : "bg-black/20"
          }`}
      >
        {/* LEFT SIDE: LOGO */}
        <div className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-full border-2 border-spotify-green overflow-hidden transition-transform group-hover:rotate-12">
            <img
              src={yutiLogo}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-black tracking-tighter text-xl hidden sm:block text-text-main">
            YUTI<span className="text-spotify-green">.</span>
          </span>
        </div>

        {/* RIGHT SIDE: LINKS */}
        <div className="flex gap-6 md:gap-10 items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-[11px] md:text-[13px] tracking-[0.2em] transition-all duration-300 relative py-1 ${activeSection === link.id ? "text-spotify-green" : "opacity-50 hover:opacity-100 text-text-main"
                }`}
            >
              {link.name}

              {/* Animated Underline for Active Section */}
              {activeSection === link.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-spotify-green"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;