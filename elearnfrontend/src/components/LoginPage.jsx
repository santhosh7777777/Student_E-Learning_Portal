// LoginPage.jsx

import { faCheck, faEye, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import loginimage from '../assets/images/login.png';
import "../assets/styles/LoginPage.css";
import google from "../assets/images/google icon.png";
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password) => /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    const handleSubmit = (e) => {
        e.preventDefault();
        setPasswordError('');

        if (!email || !password) {
            setMessage('Please fill in all fields');
            setMessageType('error');
        } else if (!validateEmail(email)) {
            setMessage('Invalid email address');
            setMessageType('error');
        } else if (!validatePassword(password)) {
            setMessage('Password Criteria Not Met');
            setPasswordError('Password must be at least 8 characters long, include a number, and a special character');
            setMessageType('error');
        } else {
            // Simulate login process (replace with real authentication logic)
            if (email === 'test@example.com' && password === 'password@123') {
                setMessage('Login Successful!');
                setMessageType('success');
            } else {
                setMessage('Invalid credentials');
                setMessageType('error');
            }
        }

        // Clear message after some time
        setTimeout(() => {
            setMessage('');
            setMessageType('');
        }, 3000);
    };

    return (
        <div className="login-page">
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
            <div className="login-image">
                <img src={loginimage} alt="Illustration" />
            </div>
            <div className="login-form">
                <h1>Log In to Start Learning</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    <button type="submit" className="login-button">Log in</button>
                    </div>
                    <div className="form-links">
                        <Link to="/forgot-password" className="forgot-password">Forgot Password</Link>
                    </div>
                </form>
                <div className="other-options">
                    <p>or login with</p>
                    <div className="social-icons">
                        <img src={google} alt="Google" />
                    </div>
                </div>
                <div className="signup-options">
                    <p>Don't have an account? <Link to="/create-account">Sign up</Link></p>
                    <Link to="/admin-login">Log In as Admin</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
