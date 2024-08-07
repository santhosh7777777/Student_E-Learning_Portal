// components/navbarr.jsx
import React, { useState } from 'react';
import { FaChevronDown, FaShoppingCart } from 'react-icons/fa';
import logo from "../assets/images/logo.png"; // Update the logo path accordingly
import '../assets/styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);

  const toggleServicesMenu = () => setShowServicesMenu(!showServicesMenu);
  const toggleAboutMenu = () => setShowAboutMenu(!showAboutMenu);

  return (
    <header className="navbarr">
      <div className="navbarr-container">
        <div className="navbarr-left">
          <div className="navbarr-logo">
            <img src={logo} alt="Logo" className="logo-image" />
            <span>Skill4ge</span>
          </div>
        </div>
        <div className="navbarr-center">
          <nav className="navbarr-menu">
            <ul>
              <li className="dropdown">
                <div className="dropdown-button" onClick={toggleServicesMenu}>
                  Browse <FaChevronDown className="dropdown-icon" />
                </div>
                {showServicesMenu && (
                  <div className="dropdown-content">
                    <Link to="/Business">Business</Link>
                    <Link to="/Computer Science">Computer Science</Link>
                    <Link to="/Electrical Engineering">Electrical Engineering</Link>
                    <Link to="/Civil Engineering">Civil Engineering</Link>
                    <Link to="/Science & Humanities">Science & Humanities</Link>
                    <Link to="/Government">Government</Link>
                  </div>
                )}
              </li>
              <li className="dropdown">
                <div className="dropdown-button" onClick={toggleAboutMenu}>
                  Session <FaChevronDown className="dropdown-icon" />
                </div>
                {showAboutMenu && (
                  <div className="dropdown-content">
                    <Link to="/team">Shop Live Session</Link>
                    <Link to="/story">Shop 1-on-1 Session</Link>
                  </div>
                )}
              </li>
              <li className="dropdown">
                <div className="dropdown-button" onClick={toggleAboutMenu}>
                  Membership <FaChevronDown className="dropdown-icon" />
                </div>
                {showAboutMenu && (
                  <div className="dropdown-content">
                    <Link to="/membership">Diamond</Link>
                    <Link to="/membership">Gold</Link>
                    <Link to="/membership">Silver</Link>
                  </div>
                )}
              </li>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/cart"><FaShoppingCart className="cart-icon" /></Link></li>
            </ul>
          </nav>
        </div>
        <div className="navbarr-right">
          <Link to="/StartLearning" className="contact-link">Login</Link>
          <Link to="/create-account" className="contact-link">Create Account</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
