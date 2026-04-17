// src/components/sections/Pricing.jsx
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import './Pricing.css';

const pricingPlans = [
  {
    name: "Landing Launch",
    price: "$2,999",
    period: "one-time",
    description: "Perfect for startups and small businesses",
    features: [
      "5-page responsive website",
      "Contact form integration",
      "Mobile responsive design",
      "Basic SEO setup",
      "1 month free support"
    ],
    ctaText: "Get Started",
    popular: false
  },
  {
    name: "E-Commerce",
    price: "$5,999",
    period: "one-time",
    description: "For businesses ready to sell online",
    features: [
      "Product catalog (up to 100 items)",
      "Shopping cart & checkout",
      "Payment gateway integration",
      "Inventory management",
      "Customer accounts",
      "3 months support"
    ],
    ctaText: "Start Selling",
    popular: true
  },
  {
    name: "Custom App",
    price: "Let's Talk",
    period: "custom",
    description: "Tailored solutions for unique requirements",
    features: [
      "User authentication & profiles",
      "Database design & integration",
      "Custom API development",
      "Advanced security features",
      "Scalable architecture",
      "Ongoing maintenance"
    ],
    ctaText: "Contact Us",
    popular: false
  }
];

const Pricing = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <SectionTitle 
          title="Simple, Transparent Pricing" 
          subtitle="Choose the perfect plan for your needs. No hidden fees."
        />
        
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="price">{plan.price}</span>
                {plan.period !== 'custom' && <span className="period">/{plan.period}</span>}
              </div>
              <p className="plan-description">{plan.description}</p>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <FaCheck className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                variant={plan.popular ? "primary" : "outline"}
                onClick={() => handleScroll('contact')}
              >
                {plan.ctaText} <FaArrowRight className="btn-icon" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;