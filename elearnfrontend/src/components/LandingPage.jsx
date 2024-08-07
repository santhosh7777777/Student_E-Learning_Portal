import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/LandingPage.css';
import Footer from './Footer';
import FAQ from './FAQ';
import Header from './Header';
import welcomeImage from '../assets/images/elearn2.png'; // Update the path as per your project structure
import session from '../assets/images/live-streaming.png';
import membership from '../assets/images/membership.png';
import Certificate from '../assets/images/certification icon.png';
// Importing icons
import { FaBusinessTime, FaLaptopCode, FaCity, FaBolt, FaFlask, FaBuilding } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="landing-pagee">
      <Header />
      <header className="headerr">
        <div className="headerr-content">
          <h1>Welcome to Skill4ge</h1>
          <div className="headerr-description">
            <div className="headerr-text">
              <p>Unlock Your Potential with Our Expertly Curated Learning Paths</p>
              <p>At Skill4ge, we offer a variety of courses designed to help you master new skills, improve your knowledge, and advance your career. Whether you're looking to learn a new language, get certified in a specialized field, or just explore new hobbies, we've got you covered.</p>
              <p>Join a community of learners and take advantage of our structured learning paths, expert instructors, and interactive content. Sign up today and start your journey towards personal and professional growth.</p>
              <br /><br />
              <Link to="/StartLearning" className="cta-button">Get Started</Link>
            </div>
            <div className="headerr-image">
              <img src={welcomeImage} alt="Welcome" />
            </div>
          </div>
        </div>
      </header>
      
      <section className="features">
        <div className="feature">
          <div className="feature-background"></div>
          <img src={session} alt="Live Session" className="feature-image1"/>
          <h3>Live Session</h3>
          <p>We offer live interactive sessions on our application to enhance your learning experience.</p>
          <Link to="/live-sessions" className="feature-link">View Live Sessions</Link>
        </div>
        <div className="feature">
          <div className="feature-background"></div>
          <img src={membership} alt="Membership" className="feature-image2"/>
          <h3>Membership</h3>
          <p>Enjoy our monthly and yearly membership plans with exclusive benefits.</p>
          <Link to="/membership" className="feature-link">View Membership Plans</Link>
        </div>
        <div className="feature">
          <div className="feature-background"></div>
          <img src={Certificate} alt="Certifications" className="feature-image3"/>
          <h3>Certifications</h3>
          <p>Get certified and add value to your professional profile with our recognized certifications.</p>
          <Link to="/certifications" className="feature-link">View Certifications</Link>
        </div>
      </section>

      <section className="course-catalog">
        <h2>Course Catalog</h2>
        <div className="course-catalog-cards">
          <div className="course-card">
            <FaBusinessTime size={40} />
            <h3>Business</h3>
            <p>Explore a variety of courses in this category.</p>
          </div>
          <div className="course-card">
            <FaLaptopCode size={40} />
            <h3>Computer Science</h3>
            <p>Discover new skills and knowledge.</p>
          </div>
          <div className="course-card">
            <FaCity size={40} />
            <h3>Civil Engineering</h3>
            <p>Enhance your learning experience.</p>
          </div>
          <div className="course-card">
            <FaBolt size={40} />
            <h3>Electrical Engineering</h3>
            <p>Find courses tailored to your needs.</p>
          </div>
          <div className="course-card">
            <FaFlask size={40} />
            <h3>Science & Humanities</h3>
            <p>Find courses tailored to your needs.</p>
          </div>
          <div className="course-card">
            <FaBuilding size={40} />
            <h3>Government</h3>
            <p>Find courses tailored to your needs.</p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Skill4ge has transformed the way I learn and grow."</p>
            <span>- Happy User</span>
          </div>
          <div className="testimonial-card">
            <p>"The courses are top-notch and incredibly useful."</p>
            <span>- Satisfied Learner</span>
          </div>
          <div className="testimonial-card">
            <p>"I love the curated learning paths that are offered."</p>
            <span>- Enthusiastic Student</span>
          </div>
        </div>
      </section>
      <FAQ />
      <Footer />
    </div>
  );
}

export default LandingPage;
