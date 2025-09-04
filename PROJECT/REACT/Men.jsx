// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// const Men = () => {
//     let [state,setstate]=useState(0)

//     let handelIncre=()=>{
//         setstate(state+1)
//   }
//   let handelDecre=()=>{ 
//     if(state>0)
//         setstate(state-1)
    
//   }
//   return (
//     <div>
//       <Link to='/web'><button>BACK</button></Link>MEN

//       <h1>PRODUCT A</h1>
//       {state}<br></br>
//       <button onClick={handelDecre}>-</button><button onClick={handelIncre}>+</button>

//     </div>
//   )
// }

// export default Men

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Men = ({ addToCart }) => {
  const products = [
    { id: 1, name: "Men Shirt", price: 500, img: "src/ROUTER/ROUTER_TASK/IMAGES/m1.avif" },
    { id: 2, name: "Men Jeans", price: 1200, img: "src/ROUTER/ROUTER_TASK/IMAGES/m3.avif" },
  ];

  let navigate=useNavigate()

  let change=()=>{
    navigate("/web")
  }

//   let [state,setstate]=useState()

//     let handelIncre=()=>{
//         setstate(state+1)
//         products.map((item) => ( addToCart(item)))

//   }
//   let handelDecre=()=>{ 
//     if(state>0)
//         setstate(state-1)
        
    
//   }

  return (
    <div align="center">
      <h2>Men's Collection</h2>
      <div className="product-list">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
            {/* <button onClick={handelDecre}>-</button><button onClick={() => addToCart(item)}>Add to Cart</button><button onClick={handelIncre}>+</button> */}

          </div>
        ))}
      </div>
      <button onClick={change}>BACK</button>
    </div>
  );
};

export default Men;

