// src/components/sections/Portfolio.jsx
import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "Web App",
    stack: "React + D3 + Node.js",
    description: "Real-time analytics dashboard for financial trading with live data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    liveLink: "#",
    caseStudy: "#"
  },
  {
    id: 2,
    title: "Urban Store",
    category: "E-commerce",
    stack: "Next.js + Stripe + Sanity",
    description: "Modern fashion e-commerce with seamless checkout and inventory management.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600",
    liveLink: "#",
    caseStudy: "#"
  },
  {
    id: 3,
    title: "TaskFlow",
    category: "Web App",
    stack: "React + Firebase + Tailwind",
    description: "Project management tool for remote teams with real-time collaboration.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
    liveLink: "#",
    caseStudy: "#"
  },
  {
    id: 4,
    title: "Organic Bites",
    category: "E-commerce",
    stack: "WooCommerce + WordPress",
    description: "Farm-to-table organic food delivery platform with subscription system.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600",
    liveLink: "#",
    caseStudy: "#"
  }
];

const categories = ["All", "Web App", "E-commerce"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <SectionTitle 
          title="Our Portfolio" 
          subtitle="Check out some of our recent work"
        />
        
        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <Card key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.liveLink} className="project-link">Live Demo →</a>
                  <a href={project.caseStudy} className="project-link">Case Study →</a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-stack">{project.stack}</p>
                <p className="project-description">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;