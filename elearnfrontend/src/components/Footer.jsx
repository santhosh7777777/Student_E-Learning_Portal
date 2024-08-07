import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/images/Skill4ge Logo.png'; // Ensure this path matches your project structure
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Skill4ge Logo" className="logo-image" />
          <p className="footer-description">
            Skill4ge is a platform dedicated to helping students enhance their skills and knowledge.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Student Help Centre</h3>
            <ul>
              <li><Link to="/support">Support</Link></li>
              <li><a href="#membership">Membership</a></li>
              <li><a href="#session">Session</a></li>
              <li><Link to="/verify-certificate">Verify Certificate</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Course Categories</h3>
            <ul>
              <li><a href="#business">Business</a></li>
              <li><a href="#computer-science">Computer Science</a></li>
              <li><a href="#civil-engineering">Civil Engineering</a></li>
              <li><a href="#electrical-engineering">Electrical Engineering</a></li>
              <li><a href="#science-humanities">Science & Humanities</a></li>
              <li><a href="#government">Government</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul className="social-media-list">
              <li><a href="#facebook"><FaFacebook /> Facebook</a></li>
              <li><a href="#twitter"><FaTwitter /> Twitter</a></li>
              <li><a href="#instagram"><FaInstagram /> Instagram</a></li>
              <li><a href="#linkedin"><FaLinkedin /> LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">© 2024 Skill4ge. All rights reserved.</p>
        <div className="footer-privacy-terms">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-and-conditions">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
