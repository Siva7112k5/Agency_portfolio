// src/components/sections/TechStack.jsx
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiTailwindcss, 
  SiMongodb, 
  SiFigma, 
  SiGit 
} from 'react-icons/si';
import './TechStack.css';

const technologies = [
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  { name: "Git", icon: <SiGit />, color: "#F05032" }
];

const TechStack = () => {
  return (
    <section className="tech-stack">
      <div className="container">
        <SectionTitle 
          title="Tech Stack" 
          subtitle="Built with the tools Silicon Valley trusts"
        />
        
        <div className="tech-marquee">
          <div className="tech-track">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="tech-item">
                <div className="tech-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;