// src/components/ui/Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', onClick, disabled = false, className = '' }) => {
  return (
    <button
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;