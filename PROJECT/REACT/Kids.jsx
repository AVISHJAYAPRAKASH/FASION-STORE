// import React from 'react'
// import { Link } from 'react-router-dom'

// const Kids = () => {
//   return (
//     <div>
//       KIDS
//       <Link to='/web'><button>BACK</button></Link>
//     </div>
//   )
// }

// export default Kids


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Kids = ({ addToCart }) => {
  const products = [
    { id: 5, name: "Kids T-shirt", price: 300, img: "src/ROUTER/ROUTER_TASK/IMAGES/k1.avif" },
    { id: 6, name: "Kids Shorts", price: 400, img: "src/ROUTER/ROUTER_TASK/IMAGES/k2.avif" },
  ];

  let navigate=useNavigate()

  let change=()=>{
    navigate("/web")
  }

  return (
    <div align="center">
      <h2>Kids' Collection</h2>
      <div className="product-list">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <button onClick={change}>BACK</button>
    </div>
  );
};

export default Kids;

