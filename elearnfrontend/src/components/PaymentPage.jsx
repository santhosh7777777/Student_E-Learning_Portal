import React, { useState } from 'react';
import '../assets/styles/PaymentPage.css';
import { Link } from 'react-router-dom';

const PaymentPage = ({ cartItems, handlePayment }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [couponCode, setCouponCode] = useState('');
  const [total, setTotal] = useState(calculateTotal(cartItems));

  const applyCoupon = () => {
    // Implement coupon code logic here
    const discount = 0.1; // Example discount
    setTotal(total - total * discount);
  };

  return (
    <div className="payment-page">
        <Link to="/payment"></Link>
      <div className="payment-methods">
        <button onClick={() => setPaymentMethod('card')} className={paymentMethod === 'card' ? 'active' : ''}>Credit/Debit Card</button>
        <button onClick={() => setPaymentMethod('upi')} className={paymentMethod === 'upi' ? 'active' : ''}>UPI</button>
      </div>
      <div className="payment-details">
        {paymentMethod === 'card' && (
          <div className="card-payment">
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Expiration Date (MM/YY)" />
            <input type="text" placeholder="CVV" />
            <input type="text" placeholder="Name" />
            <div className="coupon-code">
              <input type="text" placeholder="Coupon Code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
              <button onClick={applyCoupon}>Apply</button>
            </div>
          </div>
        )}
        {paymentMethod === 'upi' && (
          <div className="upi-payment">
            <input type="text" placeholder="UPI ID" />
            <div className="coupon-code">
              <input type="text" placeholder="Coupon Code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
              <button onClick={applyCoupon}>Apply</button>
            </div>
          </div>
        )}
      </div>
      <div className="summary">
        <h2>Summary</h2>
        <p>Invoice ID: {generateInvoiceID()}</p>
        <p>Item No: {cartItems.length}</p>
        <p>Item Name: {cartItems.map(item => item.title).join(', ')}</p>
        <p>Transaction ID: {generateTransactionID()}</p>
        <p>Total Quantity: {cartItems.length}</p>
        <p>Discount Applied: {couponCode ? '10%' : '0%'}</p>
        <p>Grand Total: {total}</p>
      </div>
      <button onClick={handlePayment} className="pay-button">Pay</button>
    </div>
  );
};

const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('₹', '')), 0);
};

const generateInvoiceID = () => {
  return `SKILL${Math.floor(10000 + Math.random() * 90000)}`;
};

const generateTransactionID = () => {
  return Math.random().toString(36).substr(2, 12).toUpperCase();
};

export default PaymentPage;
