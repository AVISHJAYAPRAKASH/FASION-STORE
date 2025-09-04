import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  let navigate=useNavigate()

  let change=()=>{
    navigate("/web")
  }

  return (
    <div align="center" className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <p>{item.name} - ₹{item.price}</p>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
        </div>
      )}
      <button onClick={change}>BACK</button>
      
    </div>
  );
};

export default Cart;
