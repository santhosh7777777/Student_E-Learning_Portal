import React from 'react';
import '../assets/styles/GradePopup.css'; // Import the CSS for the popup

const GradePopup = ({ score, totalQuestions, onClose }) => {
  const progress = (score / totalQuestions) * 100;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Quiz Results</h2>
        <p>Your Score: {score} / {totalQuestions}</p>
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default GradePopup;
