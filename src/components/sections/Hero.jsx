// src/components/sections/Hero.jsx
import React from 'react';
import Button from '../ui/Button';
import './Hero.css';

const Hero = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            We Build Digital Products <span className="gradient-text">That Scale.</span>
          </h1>
          <p className="hero-subtitle">
            Three developers, one mission: Turning complex ideas into fast, 
            responsive websites and apps.
          </p>
          <div className="hero-buttons">
            <Button variant="primary" onClick={() => handleScroll('contact')}>
              Get a Quote
            </Button>
            <Button variant="secondary" onClick={() => handleScroll('portfolio')}>
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;