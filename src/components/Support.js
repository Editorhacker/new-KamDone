import React from 'react';
import './Support.css';

const Support = () => {
  return (
    <div className="support-container">
      <h1>Support</h1>
      <div className="support-content">
        <div className="support-item">
          <h2>Emergency Contact</h2>
          <p className="phone">📞 +919136800177</p>
          <p className="available">Available 24/7 for urgent assistance</p>
        </div>
        
        <div className="support-item">
          <h2>Business Email</h2>
          <p className="email">📧 officaldjsmashx@gmail.com</p>
          <p className="response-time">Response time: Within 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
