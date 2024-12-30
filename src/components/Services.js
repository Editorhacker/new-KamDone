import React from 'react';
import { useNavigate } from 'react-router-dom';
import { servicesList } from './ServiceDetails';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {servicesList.map((service) => (
          <div 
            key={service.id} 
            className="service-card"
            onClick={() => handleServiceClick(service.id)}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>Professional {service.title.toLowerCase()} services tailored to your needs.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
