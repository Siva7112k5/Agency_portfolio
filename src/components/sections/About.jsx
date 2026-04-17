// src/components/sections/About.jsx
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { teamData } from '../../data/teamData';
import './About.css';

const About = () => {
  // Placeholder images - replace with actual images in assets/team/
  const defaultPhotos = [
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg',
    'https://randomuser.me/api/portraits/women/3.jpg',
  ];

  const team = [
    { name: 'Alex Chen', role: 'Frontend Architect', bio: 'React expert with 7+ years of experience building scalable UIs.', photo: defaultPhotos[0] },
    { name: 'Sam Rodriguez', role: 'Backend Wizard', bio: 'Node.js & Python specialist who builds robust APIs and databases.', photo: defaultPhotos[1] },
    { name: 'Jordan Lee', role: 'Product Designer', bio: 'Creates beautiful, intuitive interfaces that users love.', photo: defaultPhotos[2] },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle 
          title="About Us" 
          subtitle="Started in a dorm room, now building for global clients"
        />
        
        <div className="about-story">
          <div className="story-content">
            <h3>Our Journey</h3>
            <p>
              What began as three friends coding late nights in a college dorm has evolved 
              into a full-service digital agency. We've helped over 50 businesses scale 
              their online presence with modern, performant web solutions.
            </p>
            <p className="mission-text">
              <strong>Our Mission:</strong> To provide enterprise-level code quality 
              at startup-friendly speeds.
            </p>
          </div>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <Card key={index} className="team-card">
              <div className="team-photo">
                <img src={member.photo} alt={member.name} />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;