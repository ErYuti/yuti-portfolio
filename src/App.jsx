import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

// --- GLOBAL THEME CONTEXT ---
import { ThemeProvider } from "./context/ThemeContext";

// --- COMPONENTS ---
import Preloader from "./components/Preloader";
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

const App = () => {
  // State to track if the website is loading
  const [isLoading, setIsLoading] = useState(true);

  // Hide the preloader after 3 seconds 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative">
        {/* 1. Preloader logic */}
        <AnimatePresence mode="wait">
          {isLoading && <Preloader key="preloader" />}
        </AnimatePresence>

        {/* 2. Main content logic */}
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
              {/* SECTIONS */}
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
          </motion.div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;