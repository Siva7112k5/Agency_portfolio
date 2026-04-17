// src/components/sections/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-premium">
      {/* Animated Background */}
      <div className="premium-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="hero-premium-container">
        <div className="hero-premium-content">
          {/* Trust Badge */}
          <div className="trust-badge">
            <div className="badge-icon">⚡</div>
            <span>Trusted by 50+ Companies</span>
          </div>

          {/* Main Heading */}
          <h1 className="premium-title">
            We Build Digital Products
            <span className="premium-gradient-text"> That Actually Scale</span>
          </h1>

          {/* Description */}
          <p className="premium-description">
            Three developers, one mission: Turning complex ideas into fast, 
            responsive websites and apps that drive real business growth.
          </p>

          {/* CTA Buttons */}
          <div className="premium-buttons">
            <button className="btn-primary-premium" onClick={() => handleScroll('contact')}>
              Start Your Project
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary-premium" onClick={() => handleScroll('portfolio')}>
              View Our Work
              <svg className="play-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10 8L16 12L10 16V8Z" fill="currentColor"/>
              </svg>
            </button>
          </div>

          {/* Stats Section */}
          <div className="premium-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>

        {/* Right Side - Abstract Illustration */}
        <div className="hero-premium-visual">
          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="window-title">portfolio.tsx</span>
            </div>
            <div className="window-content">
              <pre>
                <code>
                  <span className="keyword">const</span> <span className="function">Project</span> = () =&gt; {'{'}
                  <br/>  <span className="keyword">return</span> (
                  <br/>    <span className="tag">&lt;div</span> <span className="attr">className</span>=<span className="string">"project"</span><span className="tag">&gt;</span>
                  <br/>      <span className="tag">&lt;h3&gt;</span>Amazing Work<span className="tag">&lt;/h3&gt;</span>
                  <br/>      <span className="tag">&lt;/div&gt;</span>
                  <br/>  )
                  <br/>{'}'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator-premium">
        <div className="scroll-text">Scroll to explore</div>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;