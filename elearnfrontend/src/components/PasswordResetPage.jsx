
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import "../assets/styles/PasswordResetPage.css";
import passwordresetimage from '../assets/images/password.png'; // Update the image path accordingly

const PasswordResetPage = () => {
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const validatePassword = (password) => /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    const handleSubmit = (e) => {
        e.preventDefault();
        setPasswordError('');
        setConfirmPasswordError('');

        if (!username || !newPassword || !confirmNewPassword) {
            setMessage('Please fill in all fields');
            setMessageType('error');
        } else if (!validatePassword(newPassword)) {
            setMessage('Password Criteria Not Met');
            setPasswordError('Password must be at least 8 characters long, include a number, and a special character');
            setMessageType('error');
        } else if (newPassword !== confirmNewPassword) {
            setMessage('Passwords do not match');
            setConfirmPasswordError('Passwords must match');
            setMessageType('error');
        } else {
            setMessage('Password Reset Successful!');
            setMessageType('success');
            // Add password reset logic here
        }

        setTimeout(() => {
            setMessage('');
            setMessageType('');
        }, 3000);
    };

    return (
        <div className="password-reset-page">
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
            <div className="password-reset-image">
                <img src={passwordresetimage} alt="Illustration" />
            </div>
            <div className="password-reset-form">
                <h1>Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="newPassword">New Password</label>
                        <div className="password-container">
                            <input
                                type={showNewPassword ? 'text' : 'password'}
                                id="newPassword"
                                name="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <FontAwesomeIcon
                                icon={showNewPassword ? faEyeSlash : faEye}
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="password-toggle"
                            />
                        </div>
                        {passwordError && <p className="password-error">{passwordError}</p>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmNewPassword">Confirm New Password</label>
                        <div className="password-container">
                            <input
                                type={showConfirmNewPassword ? 'text' : 'password'}
                                id="confirmNewPassword"
                                name="confirmNewPassword"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                            />
                            <FontAwesomeIcon
                                icon={showConfirmNewPassword ? faEyeSlash : faEye}
                                onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                                className="password-toggle"
                            />
                        </div>
                        {confirmPasswordError && <p className="password-error">{confirmPasswordError}</p>}
                    </div>
                    <Link to="/StartLearning"><button type="submit" className="password-reset-button">Reset Password</button></Link>
                    <div className="form-links">
                        <p>Remembered your password? <Link to="/StartLearning">Log in</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PasswordResetPage;
