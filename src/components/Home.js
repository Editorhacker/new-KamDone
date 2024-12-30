import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const featuredServices = [
    { title: 'Social Media Marketing', description: 'Boost your online presence', icon: '🚀' },
    { title: 'Web Designing', description: 'Create stunning websites', icon: '💻' },
    { title: 'Video Editing', description: 'Professional video solutions', icon: '🎥' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Digital Presence</h1>
          <p>Professional digital services to help your business grow</p>
          <Link to="/services" className="cta-button">Get Started</Link>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="featured-services">
        <h2>Our Featured Services</h2>
        <div className="services-showcase">
          {featuredServices.map((service, index) => (
            <div key={index} className="featured-service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <Link to="/services" className="view-all-button">View All Services</Link>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose KamDone?</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">⚡</div>
            <h3>Fast Delivery</h3>
            <p>Quick turnaround time for all projects</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💎</div>
            <h3>Quality Work</h3>
            <p>Premium quality that exceeds expectations</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🤝</div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock customer assistance</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💰</div>
            <h3>Competitive Pricing</h3>
            <p>Best value for your investment</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Transform your business with our professional services</p>
          <Link to="/contact" className="cta-button">Contact Us Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
