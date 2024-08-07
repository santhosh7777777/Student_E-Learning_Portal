import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/MembershipPage.css';

const MembershipCard = ({ image, icon, title, description, benefits, buttonText }) => {
  return (
    <div className="membership-card">
      <img src={image} alt={title} className="membership-card-image" />
      <div className="membership-card-icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="membership-card-content">
        <h3 className="membership-card-title">{title}</h3>
        <p className="membership-card-description">{description}</p>
        <ul className="membership-card-benefits">
          {benefits.map((benefit, index) => (
            <li key={index}>
              <span className={`benefit-icon ${benefit.status}`}>
                {benefit.status === 'full' ? '✔' : '✘'}
              </span>
              {benefit.text}
            </li>
          ))}
        </ul>
      </div>
      <Link to="/signup" className="membership-card-button">{buttonText}</Link>
    </div>
  );
};

const MembershipPage = () => {
  const membershipPlans = [
    {
      image: 'https://via.placeholder.com/100',
      icon: 'https://via.placeholder.com/30',
      title: 'Premium Plan',
      description: 'Our most comprehensive plan with all the features you need.',
      benefits: [
        { text: 'Unlimited Access to All Courses', status: 'full' },
        { text: 'Download Notes', status: 'full' },
        { text: 'Priority Support', status: 'full' }
      ],
      buttonText: 'Sign Up'
    },
    {
      image: 'https://via.placeholder.com/100',
      icon: 'https://via.placeholder.com/30',
      title: 'Standard Plan',
      description: 'A balanced plan for most users.',
      benefits: [
        { text: 'Unlimited Access to All Courses', status: 'full' },
        { text: 'Download Notes', status: 'full' },
        { text: 'Priority Support', status: 'restricted' }
      ],
      buttonText: 'Sign Up'
    },
    {
      image: 'https://via.placeholder.com/100',
      icon: 'https://via.placeholder.com/30',
      title: 'Basic Plan',
      description: 'A budget-friendly plan for those who need only the basics.',
      benefits: [
        { text: 'Limited Access to Courses', status: 'full' },
        { text: 'Download Notes', status: 'restricted' },
        { text: 'Priority Support', status: 'restricted' }
      ],
      buttonText: 'Sign Up'
    }
  ];

  return (
    <div className="membership-container">
      <h1>Choose Your Membership Plan</h1>
      <div className="membership-cards">
        {membershipPlans.map((plan, index) => (
          <MembershipCard
            key={index}
            image={plan.image}
            icon={plan.icon}
            title={plan.title}
            description={plan.description}
            benefits={plan.benefits}
            buttonText={plan.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default MembershipPage;
