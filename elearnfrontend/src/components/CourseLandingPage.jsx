import React from 'react';
import { Link } from 'react-router-dom';
import './CourseLandingPage.css';

const CourseLandingPage = ({ course }) => {
  return (
    <div className="course-landing-page">
      <header className="header">
        <div className="logo">Your Logo</div>
        <div className="profile-dropdown">
          <img src="profile-icon.png" alt="Profile" />
          <div className="dropdown-content">
            <Link to="/my-profile">My Profile</Link>
            <Link to="/my-learning">My Learning</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      </header>
      <div className="course-content">
        <h1>{course.title}</h1>
        <img src={course.image} alt={course.title} className="course-image" />
        <div className="course-details">
          <p><strong>Price:</strong> {course.price}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Description:</strong> {course.description}</p>
          <p><strong>Module Name:</strong> {course.moduleName}</p>
          <p><strong>Learning Outcomes:</strong> {course.learningOutcomes}</p>
        </div>
        <div className="course-actions">
          <button className="add-to-cart-button">Add to Cart</button>
          <button className="enroll-button">Enroll</button>
        </div>
      </div>
    </div>
  );
};

export default CourseLandingPage;
