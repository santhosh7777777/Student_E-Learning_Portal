import React, { useState } from 'react';
import "../assets/styles/Terms&Conditions.css";

const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert('You must accept the terms and conditions to proceed.');
      return;
    }
    // Handle the form submission or next steps here
    alert('Terms and Conditions accepted.');
  };

  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>Welcome to Skill4ge!</p>
      <p>These terms and conditions outline the rules and regulations for the use of Skill4ge's Website, located at www.skill4ge.com.</p>
      <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use Skill4ge if you do not agree to take all of the terms and conditions stated on this page.</p>

      <h2>Cookies</h2>
      <p>We employ the use of cookies. By accessing Skill4ge, you agreed to use cookies in agreement with the Skill4ge's Privacy Policy.</p>
      <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>

      <h2>License</h2>
      <p>Unless otherwise stated, Skill4ge and/or its licensors own the intellectual property rights for all material on Skill4ge. All intellectual property rights are reserved. You may access this from Skill4ge for your own personal use subjected to restrictions set in these terms and conditions.</p>
      <p>You must not:</p>
      <ul>
        <li>Republish material from Skill4ge</li>
        <li>Sell, rent or sub-license material from Skill4ge</li>
        <li>Reproduce, duplicate or copy material from Skill4ge</li>
        <li>Redistribute content from Skill4ge</li>
      </ul>

      <h2>Hyperlinking to our Content</h2>
      <p>The following organizations may link to our Website without prior written approval:</p>
      <ul>
        <li>Government agencies;</li>
        <li>Search engines;</li>
      </ul>

      <form onSubmit={handleSubmit}>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="accept-terms"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="accept-terms">I accept the Terms and Conditions</label>
        </div>
        <button type="submit" disabled={!isChecked}>
          Accept and Proceed
        </button>
      </form>
    </div>
  );
};

export default TermsAndConditions;
