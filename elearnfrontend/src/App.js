
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminLoginPage from './components/AdminLoginPage';
import Cart from './components/CartPage';
import CertificatePage from './components/CertificatePage';
import DigitalMarketing from './components/Digital Marketing Strategy';
import DigitalMarketingQuiz from './components/DigitalMarketingQuiz';
import FeedbackPage from './components/FeedbackPage';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import PasswordResetPage from './components/PasswordResetPage';
import PaymentPage from './components/PaymentPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import SignUpPage from './components/SignupPage';
import SupportPage from './components/SupportPage';
import TermsAndConditions from './components/Terms&Conditions';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/StartLearning" element={<LoginPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/forgot-password" element={<PasswordResetPage />} />
        <Route path="/create-account" element={<SignUpPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/digital" element={<DigitalMarketing/>} />
        <Route path="/DigitalMarketing-Quiz" element={<DigitalMarketingQuiz/>} />
        <Route path="/payment" element={<PaymentPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
