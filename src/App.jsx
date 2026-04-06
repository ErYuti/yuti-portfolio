import React from "react";
import CustomCursor from "./components/CustomCursor";
import ThemeController from "./components/ThemeController";
import SideScrollIndicator from "./components/SideScrollIndicator";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative">
      {/* GLOBAL UI ELEMENTS - Keep these at the top level */}
      <CustomCursor />
      <SideScrollIndicator />
      <Navbar />
      
      {/* THE THEME CONTROLLER - This is the part you were missing */}
      <ThemeController />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}