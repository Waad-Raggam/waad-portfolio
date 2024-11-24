import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
