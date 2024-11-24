import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Stars />
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="hero-content">
        <h1>Hi, I'm Waad</h1>
        <p>Software Developer</p>
        <a href="#about" className="cta-btn">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;
