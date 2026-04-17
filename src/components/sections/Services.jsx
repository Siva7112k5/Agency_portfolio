// src/components/sections/Services.jsx
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { 
  SiReact, 
  SiShopify, 
  SiAuth0, 
  SiSecurityscorecard 
} from 'react-icons/si';
import { MdDesignServices, MdShoppingCart, MdDashboard, MdSecurity } from 'react-icons/md';
import './Services.css';

const services = [
  {
    icon: <MdDesignServices />,
    title: "Business Websites",
    description: "High-converting, responsive information sites that establish your brand authority.",
    features: ["SEO Optimized", "Mobile First", "Fast Loading"]
  },
  {
    icon: <MdShoppingCart />,
    title: "E-Commerce",
    description: "Custom storefronts with seamless payment integration and inventory management.",
    features: ["Shopify/Medusa", "Payment Gateway", "Product Catalog"]
  },
  {
    icon: <MdDashboard />,
    title: "Web Apps",
    description: "Interactive dashboards and SaaS tools built with modern frameworks.",
    features: ["React/Node.js", "Real-time Data", "API Integration"]
  },
  {
    icon: <MdSecurity />,
    title: "Maintenance",
    description: "Peace of mind updates, security patches, and content management.",
    features: ["24/7 Monitoring", "Regular Updates", "Backup & Recovery"]
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <SectionTitle 
          title="Our Services" 
          subtitle="Comprehensive digital solutions tailored to your business needs"
        />
        <div className="services-grid">
          {services.map((service, index) => (
            <Card key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;