import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      
      <div className="about-card">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            KamDone is a leading digital services provider, specializing in a wide range of creative 
            and technical solutions. We're passionate about helping businesses and individuals bring 
            their vision to life through innovative digital solutions.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver exceptional digital services that help our clients succeed in 
            the modern digital landscape. We combine creativity, technical expertise, and industry 
            best practices to ensure outstanding results for every project.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us</h2>
          <ul className="features-list">
            <li>Expert team with years of experience</li>
            <li>Comprehensive range of digital services</li>
            <li>Customer-centric approach</li>
            <li>Timely delivery and professional support</li>
            <li>Competitive pricing and quality assurance</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
