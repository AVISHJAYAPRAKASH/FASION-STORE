// import React from 'react'
// import { Link } from 'react-router-dom'

// const Web = () => {
//   return (
//     <div align='center'>
//       WELCOME TO THE WEBPAGE <p>            GO TO CART</p>
//       <header>
        
//         <nav>
            
//             <div id="con">
//                 <h3 id="h1"><Link to='/men'>MEN</Link></h3>
//                 <h3 id="h2"><Link to='/women'>WOMEN</Link></h3>
//                 <h3 id="h3"><Link to='/kids'>KIDS</Link></h3>
//             </div>
//             <div >
//                 {/* <img src="https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc7a5fbfb-bb7f-40f3-a179-21fead60b632_1000x1000.jpeg" alt="" height="60px" width="100px"> */}
//             </div>
//             <div>
//                 <pre id="icon"><i className="fa-solid fa-user"></i>              <i className="fa-solid fa-heart"></i>               <i className="fa-solid fa-bag-shopping"></i></pre>
//             </div>
//         </nav>

//     </header>
//     <div id="main"></div>

//     <div>
      
//         <div id="first"><pre>ONLINE EXCLUSIVE           FESTIVE ETHINICS            </pre></div>
//         {/* <!-- <div id="second"></div> --> */}
//     </div>
//     <div id="task">
//       <div id="t1"><p></p></div>
//       <div id="t2"><p></p></div>
//       <div id="t3"><p></p></div>
//       <div id="t4"><p></p></div>
//     </div>

//   <div id="mens"><p>MENS SHOES COLLECTION</p>
//     <div id="item"> 
//       <div id="shoes"></div>
//       <div id="dress"></div>
//       <div id="slipper"></div> 
//     </div>
//   </div>

//     <div id="off">
//       <div id="off40"><p>20-30%OFF</p></div>
//       <div id="off60"><p>40-60%OFF</p></div>
//       <div id="off90"><p>60-90%OFF</p></div>
//   </div>

//   <div id="sub">
//       <div id="img1">
//           <p id="p">Online exclusive upto 55% OFF</p>
//           <p id="r">MEN</p>
//           <p id="a"> WOMEN</p>
//       </div>
//       <div id="img2">
//           <p id="v">Upto 50% off</p>
//           <p id="k">MEN</p>
//           <p id="k1"> WOMEN</p>
//       </div>
//       </div>
      
//     </div>
    
//   )
// }

// export default Web


import React from 'react';
import { Link } from 'react-router-dom';

const Web = () => {
  return (
    <div>

    
    <nav style={{display: 'flex', justifyContent: 'space-around', padding: '10px', background: '#eee'}}>
      <Link to="/men">Men</Link>
      <Link to="/women">Women</Link>
      <Link to="/kids">Kids</Link>
      <Link to="/cart">Cart</Link>
    </nav>
    <img src="src\ROUTER\ROUTER_TASK\IMAGES\web.avif" alt="" style={{height:"100%", width:"100%"}} />
    </div>
  );
};

export default Web;
