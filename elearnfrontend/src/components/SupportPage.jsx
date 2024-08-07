// SupportPage.jsx

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import "../assets/styles/SupportPage.css"; // Adjust the path as necessary

const SupportPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [responseType, setResponseType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !subject || !message) {
            setResponseMessage('All fields are required.');
            setResponseType('error');
        } else {
            setResponseMessage('Your message has been sent successfully!');
            setResponseType('success');

            // Reset form fields
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');

            // Additional logic to send form data to the server can be added here
        }

        setTimeout(() => {
            setResponseMessage('');
            setResponseType('');
        }, 3000);
    };

    return (
        <div className="support-page">
            {responseMessage && (
                <div className={`response-message ${responseType}`}>
                    <p>{responseMessage}</p>
                </div>
            )}
            <div className="support-info">
                <h1>Contact Support</h1>
                <p>We are here to help you. Please reach out to us through the form or the contact details below.</p>
                <div className="contact-details">
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faPhone} />
                        <p>+1 234 567 890</p>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>support@example.com</p>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <p>123 Support St, Help City, Assistance Country</p>
                    </div>
                </div>
            </div>
            <div className="support-form">
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default SupportPage;
