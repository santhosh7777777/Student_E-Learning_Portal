// FeedbackPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import "../assets/styles/FeedbackPage.css";

const FeedbackPage = () => {
    const [feedback, setFeedback] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        additionalComments: '',
        rating: 0
    });

    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFeedback({ ...feedback, [name]: value });
    };

    const handleRatingChange = (rating) => {
        setFeedback({ ...feedback, rating });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { q1, q2, q3, q4, q5, rating } = feedback;
        
        if (!q1 || !q2 || !q3 || !q4 || !q5 || rating === 0) {
            setMessage('Please fill feedback');
            setMessageType('error');
        } else {
            setMessage('Feedback submitted successfully!');
            setMessageType('success');
            // Submit the feedback to the server or perform any other actions
        }

        // Clear message after some time
        setTimeout(() => {
            setMessage('');
            setMessageType('');
        }, 3000);
    };

    const isFormValid = () => {
        const { q1, q2, q3, q4, q5, rating } = feedback;
        return q1 && q2 && q3 && q4 && q5 && rating > 0;
    };

    return (
        <div className="feedback-page">
            {message && (
                <div className={`message-prompt ${messageType}`}>
                    {message}
                    <div className="underline-effect"></div>
                </div>
            )}
            <h1>Course Feedback</h1>
            <form onSubmit={handleSubmit}>
                {/* Feedback Questions */}
                <div className="feedback-question">
                    <label>1. How would you rate the course content?</label>
                    <div className="options">
                        <label><input type="radio" name="q1" value="extremely_good" onChange={handleInputChange} /> Extremely Good</label>
                        <label><input type="radio" name="q1" value="good" onChange={handleInputChange} /> Good</label>
                        <label><input type="radio" name="q1" value="satisfied" onChange={handleInputChange} /> Satisfied</label>
                        <label><input type="radio" name="q1" value="poor" onChange={handleInputChange} /> Poor</label>
                    </div>
                </div>
                <div className="feedback-question">
                    <label>2. How would you rate the instructor's delivery?</label>
                    <div className="options">
                        <label><input type="radio" name="q2" value="extremely_good" onChange={handleInputChange} /> Extremely Good</label>
                        <label><input type="radio" name="q2" value="good" onChange={handleInputChange} /> Good</label>
                        <label><input type="radio" name="q2" value="satisfied" onChange={handleInputChange} /> Satisfied</label>
                        <label><input type="radio" name="q2" value="poor" onChange={handleInputChange} /> Poor</label>
                    </div>
                </div>
                <div className="feedback-question">
                    <label>3. How would you rate the course materials?</label>
                    <div className="options">
                        <label><input type="radio" name="q3" value="extremely_good" onChange={handleInputChange} /> Extremely Good</label>
                        <label><input type="radio" name="q3" value="good" onChange={handleInputChange} /> Good</label>
                        <label><input type="radio" name="q3" value="satisfied" onChange={handleInputChange} /> Satisfied</label>
                        <label><input type="radio" name="q3" value="poor" onChange={handleInputChange} /> Poor</label>
                    </div>
                </div>
                <div className="feedback-question">
                    <label>4. How satisfied are you with the course structure?</label>
                    <div className="options">
                        <label><input type="radio" name="q4" value="extremely_good" onChange={handleInputChange} /> Extremely Good</label>
                        <label><input type="radio" name="q4" value="good" onChange={handleInputChange} /> Good</label>
                        <label><input type="radio" name="q4" value="satisfied" onChange={handleInputChange} /> Satisfied</label>
                        <label><input type="radio" name="q4" value="poor" onChange={handleInputChange} /> Poor</label>
                    </div>
                </div>
                <div className="feedback-question">
                    <label>5. Would you recommend this course to others?</label>
                    <div className="options">
                        <label><input type="radio" name="q5" value="extremely_good" onChange={handleInputChange} /> Extremely Good</label>
                        <label><input type="radio" name="q5" value="good" onChange={handleInputChange} /> Good</label>
                        <label><input type="radio" name="q5" value="satisfied" onChange={handleInputChange} /> Satisfied</label>
                        <label><input type="radio" name="q5" value="poor" onChange={handleInputChange} /> Poor</label>
                    </div>
                </div>
                <div className="feedback-question">
                    <label>Additional Comments:</label>
                    <textarea name="additionalComments" onChange={handleInputChange}></textarea>
                </div>
                <div className="rating-section">
                    <label>Overall Rating:</label>
                    <div className="rating-input">
                        {[1, 2, 3, 4, 5].map(star => (
                            <span
                                key={star}
                                className={`star ${feedback.rating >= star ? 'selected' : ''}`}
                                onClick={() => handleRatingChange(star)}
                            >★</span>
                        ))}
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="submit-button" 
                    disabled={!isFormValid()} // Disable button if form is not valid
                >
                    Submit Feedback
                </button>
            </form>
            {messageType === 'success' && (
                <div className="success-link">
                    <p><Link to="/confirmation-page">Go to Confirmation Page</Link></p>
                </div>
            )}
        </div>
    );
};

export default FeedbackPage;
