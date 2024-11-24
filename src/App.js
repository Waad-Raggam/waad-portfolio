import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
function App() {
  return (
    <div className="App">
      {/* <ThreeScene /> */}
      <Hero />
      <About />
      <Experience />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
