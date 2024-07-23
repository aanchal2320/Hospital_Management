import React from 'react'; 
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Here’s how you can reach us:</p>
        <h2>Address</h2>
        <p>123 Health St, Wellness City, HL 12345</p>
        <h2>Phone</h2>
        <p>(123) 456-7890</p>
        <h2>Email</h2>
        <p>info@ourhospital.com</p>
        <h2>Follow Us</h2>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
