// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => handleSmoothScroll('home')}>
          <span className="logo-text">🚀 DevAgency</span>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); handleSmoothScroll('home'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); handleSmoothScroll('about'); }}>About</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); handleSmoothScroll('services'); }}>Services</a></li>
            <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); handleSmoothScroll('portfolio'); }}>Portfolio</a></li>
            <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); handleSmoothScroll('testimonials'); }}>Testimonials</a></li>
            <li><a href="#pricing" onClick={(e) => { e.preventDefault(); handleSmoothScroll('pricing'); }}>Pricing</a></li>
          </ul>
          <button className="nav-cta" onClick={() => handleSmoothScroll('contact')}>
            Get a Quote
          </button>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;