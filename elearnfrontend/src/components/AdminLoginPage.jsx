// AdminLoginPage.jsx

import { faCheck, faEye, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import adminloginimage from '../assets/images/admin.png'; // Update the image path accordingly
import "../assets/styles/AdminLoginPage.css";

const AdminLoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setPasswordError('');

        if (!username || !password) {
            setMessage('Please fill in all fields');
            setMessageType('error');
        } else {
            if (username === 'Admin@Skill4ge' && password === 'admin@123') {
                setMessage('Login Successful!');
                setMessageType('success');
            } else {
                setMessage('Invalid credentials');
                setMessageType('error');
            }
        }

        setTimeout(() => {
            setMessage('');
            setMessageType('');
        }, 3000);
    };

    return (
        <div className="admin-login-page">
            <Link to="/admin"></Link>
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
            <div className="admin-login-image">
                <img src={adminloginimage} alt="Illustration" />
            </div>
            <div className="admin-login-form">
                <h1>Admin Log In</h1>
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
                    <center><Link to="/admin-dashboard"><button type="submit" className="admin-login-button">Log In</button></Link></center>
                </form>
            </div>
        </div>
    );
};
export default AdminLoginPage;
