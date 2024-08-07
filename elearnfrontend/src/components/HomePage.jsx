import React, { useState, useEffect, useRef } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import '../assets/styles/HomePage.css';
import Footer from './Footer';
import Header from './Header';
import session from '../assets/images/live-streaming.png';
import membership from '../assets/images/membership.png';
import Certificate from '../assets/images/certification icon.png';

//images

import digitalmarketing from '../assets/images/Digital Marketing.jpg';
import FinancialManagement from '../assets/images/Financial Management.jpg';
import EntrepreneurshipEssentials from '../assets/images/Entrepreneurship Essentials.jpg';
import LeadershipManagement from '../assets/images/Leadership and Management.jpg';
import ProjectManagement from '../assets/images/Project Management.jpg';
import MachineLearning from '../assets/images/Machine Learning.png';
import WebDevelopment from '../assets/images/Web Development.png';
import DataScience from '../assets/images/Data Science with Python.png';
import Cybersecurity from '../assets/images/Cybersecurity Fundamentals.png';
import CloudComputing from '../assets/images/Cloud Computing.png';
import RenewableEnergy from '../assets/images/Renewable Energy.png';
import CircuitAnalysis from '../assets/images/Circuit Analysis.png';
import PowerElectronics from '../assets/images/Power Electronics.png';
import EmbeddedSystems from '../assets/images/Embedded Systems.png';
import ControlSystems from '../assets/images/Control Systems.png';
import BuildingDesign from '../assets/images/Transportation Engineering.png';
import StructuralAnalysis from '../assets/images/Structural Analysis.png';
import TransportationEngineering from '../assets/images/Transportation Engineering.png';
import GeotechnicalEngineering from '../assets/images/Geotechnical Engineering.png';
import WaterResourcesEngineering from '../assets/images/Water Resources Engineering.png';
import ClimateChangeandEnvironmentalScience from '../assets/images/Climate Change and Environmental Science.png';
import PsychologyandHumanBehavior from '../assets/images/Psychology and Human Behavior.png';
import HistoryandCivilization from '../assets/images/History and Civilization.png';
import PhilosophyandEthics from '../assets/images/Philosophy and Ethics.png';
import LiteratureandWriting from '../assets/images/Literature and Writing.png';
import PublicPolicyandGovernance from '../assets/images/Public Policy and Governance.png';
import InternationalRelations from '../assets/images/International Relations.png';
import ConstitutionalLaw from '../assets/images/Constitutional Law.png';
import PublicAdministration from '../assets/images/Public Administration.png';
import PoliticalScience from '../assets/images/Political Science.png';




const Courses = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [recentCourses, setRecentCourses] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const courses = [
    { id: 1, category: 'Business', courseid : 'SKILLBS001',title: 'Digital Marketing Strategy', image: digitalmarketing, description: 'Learn how to create and implement effective digital marketing strategies.', duration: '6 weeks', price: '₹5000' },
    { id: 2, category: 'Business', courseid : 'SKILLBS002',title: 'Financial Management', image: FinancialManagement, description: 'Master the principles of financial management and budgeting.', duration: '8 weeks', price: '₹6000' },
    { id: 3, category: 'Business', courseid : 'SKILLBS003',title: 'Entrepreneurship Essentials', image: EntrepreneurshipEssentials, description: 'Gain the skills needed to start and run your own business successfully.', duration: '10 weeks', price: '₹7000' },
    { id: 4, category: 'Business', courseid : 'SKILLBS004',title: 'Leadership and Management', image: LeadershipManagement, description: 'Develop effective leadership and management skills for career growth.', duration: '7 weeks', price: '₹5500' },
    { id: 5, category: 'Business', courseid : 'SKILLBS005',title: 'Project Management', image: ProjectManagement, description: 'Learn the key concepts and tools for successful project management.', duration: '9 weeks', price: '₹6500' },
    { id: 6, category: 'Computer Science', courseid : 'SKILLCS001',title: 'Introduction to Machine Learning', image: MachineLearning, description: 'Explore the basics of machine learning and its applications.', duration: '8 weeks', price: '₹7500' },
    { id: 7, category: 'Computer Science', courseid : 'SKILLCS002',title: 'Web Development', image: WebDevelopment, description: 'Build and deploy modern web applications using popular frameworks.', duration: '10 weeks', price: '8000' },
    { id: 8, category: 'Computer Science', courseid : 'SKILLCS003',title: 'Data Science with Python', image: DataScience, description: 'Learn data analysis, visualization, and machine learning using Python.', duration: '12 weeks', price: '₹9000' },
    { id: 9, category: 'Computer Science', courseid : 'SKILLCS004',title: 'Cybersecurity Fundamentals', image: Cybersecurity, description: 'Understand the core concepts of cybersecurity and how to protect systems.', duration: '7 weeks', price: '₹7000' },
    { id: 10, category: 'Computer Science', courseid : 'SKILLCS005',title: 'Cloud Computing', image: CloudComputing, description: 'Gain expertise in cloud computing technologies and services.', duration: '8 weeks', price: '₹7500' },
    { id: 11, category: 'Electrical Engineering', courseid : 'SKILLEE001',title: 'Fundamentals of Renewable Energy', image: RenewableEnergy, description: 'Study the principles of renewable energy sources and systems.', duration: '9 weeks', price: '₹8000' },
    { id: 12, category: 'Electrical Engineering', courseid : 'SKILLEE002',title: 'Circuit Analysis', image: CircuitAnalysis, description: 'Learn the techniques for analyzing electrical circuits and systems.', duration: '7 weeks', price: '₹6000' },
    { id: 13, category: 'Electrical Engineering', courseid : 'SKILLEE003',title: 'Power Electronics', image: PowerElectronics, description: 'Explore the field of power electronics and its applications.', duration: '10 weeks', price: '₹8500' },
    { id: 14, category: 'Electrical Engineering', courseid : 'SKILLEE004',title: 'Embedded Systems', image: EmbeddedSystems, description: 'Understand the design and development of embedded systems.', duration: '8 weeks', price: '₹7000' },
    { id: 15, category: 'Electrical Engineering', courseid : 'SKILLEE005',title: 'Control Systems', image: ControlSystems, description: 'Learn the principles and techniques for control systems design.', duration: '9 weeks', price: '₹7500' },
    { id: 16, category: 'Civil Engineering', courseid : 'SKILLCE001',title: 'Sustainable Building Design', image: BuildingDesign, description: 'Study the principles of designing eco-friendly and sustainable buildings.', duration: '8 weeks', price: '₹8000' },
    { id: 17, category: 'Civil Engineering', courseid : 'SKILLCE002',title: 'Structural Analysis', image: StructuralAnalysis, description: 'Learn the methods for analyzing and designing structural components.', duration: '9 weeks', price: '₹8500' },
    { id: 18, category: 'Civil Engineering', courseid : 'SKILLCE003',title: 'Transportation Engineering', image: TransportationEngineering, description: 'Understand the planning and design of transportation systems.', duration: '10 weeks', price: '₹9000' },
    { id: 19, category: 'Civil Engineering', courseid : 'SKILLCE004',title: 'Geotechnical Engineering', image: GeotechnicalEngineering, description: 'Study the behavior of earth materials and their interaction with structures.', duration: '9 weeks', price: '₹8500' },
    { id: 20, category: 'Civil Engineering', courseid : 'SKILLCE005',title: 'Water Resources Engineering', image: WaterResourcesEngineering, description: 'Explore the management and engineering of water resources.', duration: '10 weeks', price: '₹9000' },
    { id: 21, category: 'Science and Humanities', courseid : 'SKILLSH001',title: 'Climate Change and Environmental Science', image: ClimateChangeandEnvironmentalScience, description: 'Learn about climate change impacts and environmental science principles.', duration: '8 weeks', price: '₹7000' },
    { id: 22, category: 'Science and Humanities', courseid : 'SKILLSH002',title: 'Psychology and Human Behavior', image: PsychologyandHumanBehavior, description: 'Explore the fundamentals of psychology and human behavior.', duration: '9 weeks', price: '₹7500' },
    { id: 23, category: 'Science and Humanities', courseid : 'SKILLSH003',title: 'History and Civilization', image: HistoryandCivilization, description: 'Study the history of human civilization and its development.', duration: '10 weeks', price: '₹8000' },
    { id: 24, category: 'Science and Humanities', courseid : 'SKILLSH004',title: 'Philosophy and Ethics', image: PhilosophyandEthics, description: 'Understand key concepts in philosophy and ethical reasoning.', duration: '8 weeks', price: '₹7000' },
    { id: 25, category: 'Science and Humanities', courseid : 'SKILLSH005',title: 'Literature and Writing', image: LiteratureandWriting, description: 'Develop skills in literature analysis and creative writing.', duration: '9 weeks', price: '₹7500' },
    { id: 26, category: 'Government', courseid : 'SKILLGV001',title: 'Public Policy and Governance', image: PublicPolicyandGovernance, description: 'Learn about public policy development and governance structures.', duration: '9 weeks', price: '₹8000' },
    { id: 27, category: 'Government', courseid : 'SKILLGV002',title: 'International Relations', image: InternationalRelations, description: 'Explore the principles of international relations and diplomacy.', duration: '10 weeks', price: '₹8500' },
    { id: 28, category: 'Government', courseid : 'SKILLGV003',title: 'Constitutional Law', image: ConstitutionalLaw, description: 'Study the fundamentals of constitutional law and its applications.', duration: '8 weeks', price: '₹7500' },
    { id: 29, category: 'Government', courseid : 'SKILLGV004',title: 'Public Administration', image: PublicAdministration, description: 'Understand the principles of public administration and management.', duration: '9 weeks', price: '₹8000' },
    { id: 30, category: 'Government', courseid : 'SKILLGV005',title: 'Political Science', image: PoliticalScience, description: 'Explore the study of political systems and behavior.', duration: '10 weeks', price: '₹8500' }
];


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if (event.key === 'Enter') {
      const results = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const handleSearchClick = () => {
    const results = courses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const handleEnroll = (course) => {
    navigate('/payment', { state: { course } });

    if (!recentCourses.some(rc => rc.id === course.id)) {
      setRecentCourses([...recentCourses, course]);
    }
  };
  

    

  const scrollToCategory = (categoryId) => {
    const categoryElement = document.getElementById(categoryId);
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="courses-wrapper">
      <Header />
      <div className="courses-container">
        <div className="sidebar">
          <div className="search-bar-sidebar">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              onKeyDown={handleSearch}
            />
            <FaSearch className="search-icon-sidebar" onClick={handleSearchClick} />
          </div>
          <div className="categories">
            <div className="category-header" onClick={toggleSidebar}>
              <h3>Course Categories</h3>
              {expanded ? <FiChevronUp className="toggle-icon" /> : <FiChevronDown className="toggle-icon" />}
            </div>
            <ul className={`category-list ${expanded ? 'expanded' : ''}`}>
              <li onClick={() => scrollToCategory('business')} className="category-link">Business</li>
              <li onClick={() => scrollToCategory('computer-science')} className="category-link">Computer Science</li>
              <li onClick={() => scrollToCategory('electrical-engineering')} className="category-link">Electrical Engineering</li>
              <li onClick={() => scrollToCategory('civil-engineering')} className="category-link">Civil Engineering</li>
              <li onClick={() => scrollToCategory('science-humanities')} className="category-link">Science and Humanities</li>
              <li onClick={() => scrollToCategory('government')} className="category-link">Government</li>
            </ul>
          </div>
        </div>
        <div className="main-content">
          {searchResults.length > 0 && (
            <div className="search-results">
              <h2>Search Results</h2>
              <div className="course-cards">
                {searchResults.map((course) => (
                  <div key={course.id} className="class-card">
                    <img src={course.image} alt={course.title} />
                    <div className="class-info">
                      <h3>{course.title}</h3>
                      <p>{course.description}</p>
                      <button className="enroll-button" onClick={() => handleEnroll(course)}>Enroll</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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

          <h2>Recent Courses</h2>
          {recentCourses.length === 0 ? (
            <p>No recent courses</p>
          ) : (
            <div className="recent-courses">
              {recentCourses.map((course, index) => (
                <div key={index} className="class-card">
                  <img src={course.image} alt={course.title} />
                  <div className="class-info">
                    <h3>{course.title}</h3>
                    <p><b>{course.courseid}</b></p>
                    <button className="go-to-course-button" onClick={() => window.location.href = `/courses/${course.id}`}>Go to Course</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <h2>All Courses</h2>
          <div className="all-courses">
            <div id="business" className="course-category">
              <h3>Business</h3>
              <div className="course-cards">
                {courses.filter(course => course.category === 'Business').map(course => (
                  <div key={course.id} className="class-card">
                    <img src={course.image} alt={course.title} />
                    <div className="class-info">
                      <h3>{course.title}</h3>
                      <p><b>Course ID : {course.courseid}</b></p>
                      <p><b>Description : </b>{course.description}</p>
                      <p><b>Duration : </b>{course.duration}</p>
                      <p><b>Price : </b>{course.price}</p>
                      <button className="enroll-button" onClick={() => handleEnroll(course)}>Enroll</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="computer-science" className="course-category">
              <h3>Computer Science</h3>
              <div className="course-cards">
                {courses.filter(course => course.category === 'Computer Science').map(course => (
                  <div key={course.id} className="class-card">
                    <img src={course.image} alt={course.title} />
                    <div className="class-info">
                      <h3>{course.title}</h3>
                      <p><b>Course ID : {course.courseid}</b></p>
                      <p><b>Description : </b>{course.description}</p>
                      <p><b>Duration : </b>{course.duration}</p>
                      <p><b>Price : </b>{course.price}</p>
                      <button className="enroll-button" onClick={() => handleEnroll(course)}>Enroll</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="electrical-engineering" className="course-category">
              <h3>Electrical Engineering</h3>
              <div className="course-cards">
                {courses.filter(course => course.category === 'Electrical Engineering').map(course => (
                  <div key={course.id} className="class-card">
                    <img src={course.image} alt={course.title} />
                    <div className="class-info">
                      <h3>{course.title}</h3>
                      <p><b>Course ID : {course.courseid}</b></p>
                      <p><b>Description : </b>{course.description}</p>
                      <p><b>Duration : </b>{course.duration}</p>
                      <p><b>Price : </b>{course.price}</p>
                      <button className="enroll-button" onClick={() => handleEnroll(course)}>Enroll</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="civil-engineering" className="course-category">
              <h3>Civil Engineering</h3>
              <div className="course-cards">
                {courses.filter(course => course.category === 'Civil Engineering').map(course => (
                  <div key={course.id} className="class-card">
                    <img src={course.image} alt={course.title} />
                    <div className="class-info">
                      <h3>{course.title}</h3>
                      <p><b>Course ID : {course.courseid}</b></p>
                      <p><b>Description : </b>{course.description}</p>
                      <p><b>Duration : </b>{course.duration}</p>
                      <p><b>Price : </b>{course.price}</p>
                      <button className="enroll-button" onClick={() => handleEnroll(course)}>Enroll</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="science-humanities" className="course-category">
              <h3>Science and Humanities</h3>
              <div className="course-cards">
                {courses.filter(course => course.category === 'Science and Humanities').map(course => (
                  <div key={course.id} className="class-card">
                    <img src={course.image} alt={course.title} />
                    <div className="class-info">
                      <h3>{course.title}</h3>
                      <p><b>Course ID : {course.courseid}</b></p>
                      <p><b>Description : </b>{course.description}</p>
                      <p><b>Duration : </b>{course.duration}</p>
                      <p><b>Price : </b>{course.price}</p>
                      <button className="enroll-button" onClick={() => handleEnroll(course)}>Enroll</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="government" className="course-category">
              <h3>Government</h3>
              <div className="course-cards">
                {courses.filter(course => course.category === 'Government').map(course => (
                  <div key={course.id} className="class-card">
                    <img src={course.image} alt={course.title} />
                    <div className="class-info">
                      <h3>{course.title}</h3>
                      <p><b>Course ID : {course.courseid}</b></p>
                      <p><b>Description : </b>{course.description}</p>
                      <p><b>Duration : </b>{course.duration}</p>
                      <p><b>Price : </b>{course.price}</p>
                      <button className="enroll-button" onClick={() => handleEnroll(course)}>Enroll</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
