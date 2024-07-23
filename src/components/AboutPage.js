import React from 'react'; 
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Our Hospital</h1>
        <p>
          Welcome to XYZ Hospital, a leading healthcare provider dedicated to
          offering top-quality medical care and services. Established in 1985,
          our hospital has been at the forefront of medical innovation and
          patient care, ensuring the well-being and health of our community.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Compassionate Care</li>
          <li>Medical Excellence</li>
          <li>Patient-Centered Approach</li>
          <li>Community Commitment</li>
          <li>Innovation and Research</li>
        </ul>
        <h2>Our Services</h2>
        <p>
          We offer a wide range of medical services to meet the diverse needs of
          our patients, including:
        </p>
        <ul>
          <li>Emergency Care</li>
          <li>Outpatient Services</li>
          <li>Surgical Procedures</li>
          <li>Maternity and Newborn Care</li>
          <li>Specialty Clinics</li>
          <li>Rehabilitation Services</li>
        </ul>
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide exceptional healthcare services with a
          commitment to quality, compassion, and excellence. We strive to
          enhance the health and well-being of our patients through continuous
          improvement, innovation, and a focus on patient-centered care.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need further information, please feel
          free to contact us at (123) 456-7890 or email us at info@xyzhospital.com.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
