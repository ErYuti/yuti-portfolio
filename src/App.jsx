import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react"; // Added motion imports
import Preloader from "./components/Preloader"; // Import the Preloader
import CustomCursor from "./components/CustomCursor";
import ThemeController from "./components/ThemeController";
import SideScrollIndicator from "./components/SideScrollIndicator";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

export default function App() {
  // 1. Create a state to track if the website is loading
  const [isLoading, setIsLoading] = useState(true);

  // 2. Use an effect to hide the preloader after 3 seconds 
  // (3 seconds matches the animation duration inside your Preloader.jsx)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* 3. Show Preloader ONLY when isLoading is true */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {/* 4. Show the rest of the website ONLY when isLoading is false */}
      {!isLoading && (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* GLOBAL UI ELEMENTS */}
          <CustomCursor />
          <SideScrollIndicator />
          <Navbar />
          <BackToTop />
          <ThemeController />

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </motion.div>
      )}
    </div>
  );
}