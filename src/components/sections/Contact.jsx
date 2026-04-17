// src/components/sections/Contact.jsx
import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    // Using FormSubmit.co - free service
    try {
      const response = await fetch('https://formsubmit.co/ajax/your-email@example.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionTitle 
          title="Let's Work Together" 
          subtitle="Ready to start your next project? Reach out to us!"
        />
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>We'd love to hear about your project. Let's create something amazing together.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:hello@devagency.com">hello@devagency.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </div>
              
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://wa.me/1234567890?text=Hi%20I'm%20interested%20in%20a%20website" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              
              {submitStatus === 'success' && (
                <div className="success-message">Message sent successfully! We'll get back to you soon.</div>
              )}
              {submitStatus === 'error' && (
                <div className="error-message">Failed to send. Please try again or email us directly.</div>
              )}
            </form>
          </div>
        </div>
      </div>
      
      <a href="https://wa.me/1234567890?text=Hi%20I'm%20interested%20in%20a%20website" 
         className="whatsapp-float" 
         target="_blank" 
         rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
    </section>
  );
};

export default Contact;