// SignUpPage.jsx

import { faCheck, faEye, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signupimage from '../assets/images/signup.png'; // Update the image path accordingly
import "../assets/styles/SignUpPage.css";

const SignUpPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [organisation, setOrganisation] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const validatePassword = (password) => /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    const handleSubmit = (e) => {
        e.preventDefault();
        setPasswordError('');
        setConfirmPasswordError('');

        if (!firstName || !lastName || !dob || !organisation || !phone || !password || !confirmPassword) {
            setMessage('Please fill in all fields');
            setMessageType('error');
        } else if (!validatePassword(password)) {
            setMessage('Password Criteria Not Met');
            setPasswordError('Password must be at least 8 characters long, include a number, and a special character');
            setMessageType('error');
        } else if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            setConfirmPasswordError('Passwords must match');
            setMessageType('error');
        } else {
            setMessage('Sign Up Successful!');
            setMessageType('success');
            // Add sign up logic here
        }

        setTimeout(() => {
            setMessage('');
            setMessageType('');
        }, 3000);
    };

    return (
        <div className="sign-up-page">
            {message && (
                <div className={`message-prompt ${messageType}`}>
                    <FontAwesomeIcon
                        icon={messageType === 'success' ? faCheck : faTimes}
                        style={{ color: messageType === 'success' ? "#008a1c" : "#f44336", marginRight: '10px' }}
                    />
                    <p>{message}</p>
                    <div className="line-effect"></div>
                </div>
            )}
            <div className="sign-up-image">
                <img src={signupimage} alt="Illustration" />
            </div>
            <div className="sign-up-form">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="organisation">Organisation</label>
                        <input
                            type="text"
                            id="organisation"
                            name="organisation"
                            value={organisation}
                            onChange={(e) => setOrganisation(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                onClick={() => setShowPassword(!showPassword)}
                                className="password-toggle"
                            />
                        </div>
                        {passwordError && <p className="password-error">{passwordError}</p>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className="password-container">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <FontAwesomeIcon
                                icon={showConfirmPassword ? faEyeSlash : faEye}
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="password-toggle"
                            />
                        </div>
                        {confirmPasswordError && <p className="password-error">{confirmPasswordError}</p>}
                    </div>
                    <button type="submit" className="sign-up-button">Sign Up</button>
                    <div className="form-links">
                        <p>Already have an account? <Link to="/StartLearning">Log in</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
