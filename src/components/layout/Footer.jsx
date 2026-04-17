// src/components/layout/Footer.jsx
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">🚀 DevAgency</div>
            <p className="footer-description">
              Building digital products that scale. Three developers, one mission.
            </p>
            <div className="footer-social">
              <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); handleSmoothScroll('home'); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleSmoothScroll('about'); }}>About</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleSmoothScroll('services'); }}>Services</a></li>
              <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); handleSmoothScroll('portfolio'); }}>Portfolio</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleSmoothScroll('contact'); }}>Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Business Websites</li>
              <li>E-Commerce</li>
              <li>Web Apps</li>
              <li>Maintenance</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>📧 hello@devagency.com</li>
              <li>📞 +1 (234) 567-890</li>
              <li>📍 San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} DevAgency. All rights reserved.</p>
          <p className="made-with">Made with <FaHeart /> for great code</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;