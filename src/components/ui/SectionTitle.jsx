// src/components/ui/SectionTitle.jsx
import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`section-title-wrapper ${centered ? 'centered' : ''}`}>
      <h2 className="section-title-main">{title}</h2>
      {subtitle && <p className="section-title-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;