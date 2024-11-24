import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { StarsCanvas } from "./components/canvas";
function App() {
  return (
    <div className="App">
      {/* <ThreeScene /> */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}

export default App;
