import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/CartPage.css';

const CartPage = ({ cartItems, handleRemoveFromCart }) => {
  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>Course Code: {item.courseCode}</p>
                <p>Price: {item.price}</p>
                <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link to="/payment" className="checkout-button">Checkout</Link>
    </div>
  );
};

export default CartPage;
