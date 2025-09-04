// import React from 'react'
// import { Link } from 'react-router-dom'

// const Women = () => {
//   return (
//     <div>
//             WOMEN
//             <Link to='/web'><button>BACK</button></Link>
//     </div>
//   )
// }

// export default Women


import React from 'react';
import { useNavigate } from 'react-router-dom';

const Women = ({ addToCart }) => {
  const products = [
    { id: 3, name: "Women Dress", price: 800, img: "src/ROUTER/ROUTER_TASK/IMAGES/w1.avif" },
    { id: 4, name: "Women Skirt", price: 600, img: "src/ROUTER/ROUTER_TASK/IMAGES/w2.avif" },
  ];

  let navigate=useNavigate()

  let change=()=>{
    navigate("/web")
  }

  return (
    <div align="center">
      <h2>Women's Collection</h2>
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

export default Women;

