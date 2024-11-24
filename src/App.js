import React from 'react';
import './App.css';
import ThreeScene from './components/ThreeScene';
import Contact from './components/contact/Contact';
import Hero from './components/Hero';
import Experience from './components/Experience';
import About from './components/about/About';
function App() {
  return (
    <div className="App">
      {/* <ThreeScene /> */}
      <Hero />
      <About />
      {/* <Experience />
      <Contact /> */}
    </div>
  );
}

export default App;
