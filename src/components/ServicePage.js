import React from 'react'; 
import '../styles/ServicePage.css';

const ServicesPage = () => {
  return (
    <div className="services-container">
      <div className="services-content">
        <h1>Our Services</h1>
        <p>We offer a comprehensive range of medical services to meet the needs of our patients, including:</p>
        <ul>
          <li>Emergency Care</li>
          <li>Outpatient Services</li>
          <li>Surgical Services</li>
          <li>Diagnostic Imaging</li>
          <li>Laboratory Services</li>
          <li>Pharmacy</li>
          <li>Rehabilitation</li>
          <li>Primary Care</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesPage;

