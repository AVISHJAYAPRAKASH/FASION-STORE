// import React, { useState } from 'react'
// import Home from './Home';
// //import data1 from "./data1.json"
// import data1 from './data1.json'
// const Login = ({data}) => {
//     console.log(data1.users.email);
    
//     let [state,setState]=useState({
//         email1:"",
//         password1:""
//     })
//     let [istate,fstate]=useState()
//     let handelChange=(x)=>{
//         let {name,value}=x.target;
//         setState({...state,[name]:value})
//     }

//     let handelSubmit=(a)=>{
//         a.preventDefault()
//         const formData = new FormData(a.target);
//         const enteredEmail = formData.get("email1");
//         const enteredPassword = formData.get("password1");

//         // Assuming 'data' is coming via props
//         if (data1.users.email === enteredEmail && data1.users.password === enteredPassword) {
//           fstate(<Home></Home>) // Navigates to the Home component
//         } else {
//           alert("Data does not match!");
//         }     
//     }
//   return (
//     <div className="container">
//       <h1 className="header">WELCOME TO LOGIN PAGE</h1>
//       <form className="signup-form" action="" onSubmit={handelSubmit}>
//             <label className="label" htmlFor="">EMAIL</label>
//             <input className='input' type="email" name='email1'              onChange={handelChange}/>

//             <label className="label" htmlFor="">PASSWORD</label>
//             <input className='input' type="password" name='password1'        onChange={handelChange}/>

//             <button className="submit-btn">SUBMIT</button>
//       </form>

//         {istate}

//     </div>
//   )
// }
//export default Login


import React, { useState } from 'react';
import Home from './Home';
import { useNavigate } from 'react-router-dom';
import Web from './Web';
// import data from 'backend/data1.json'
import data from '../../../../backend/data1.json'

const Login = () => {
  const [state, setState] = useState({
    email1: "",
    password1: ""
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  let navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email1, password1 } = state;

    // Check if any user matches the entered credentials
    const matchedUser = data.users.find(
      user => user.email === email1 && user.password === password1
    );

    if (matchedUser) {
      setIsAuthenticated(true);
      
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="container">
      {!isAuthenticated ? (
        <>
          <h1 className="header">WELCOME TO LOGIN PAGE</h1>
          <form className="signup-form" onSubmit={handleSubmit}>
            <label className="label">EMAIL</label>
            <input
              className="input"
              type="email"
              name="email1"
              value={state.email1}
              onChange={handleChange}
              required
            />

            <label className="label">PASSWORD</label>
            <input
              className="input"
              type="password"
              name="password1"
              value={state.password1}
              onChange={handleChange}
              required
            />

            <button className="submit-btn" type="submit">SUBMIT</button>
          </form>
        </>
      ) : (
        <Web></Web>
      )}
    </div>
  );
};

export default Login;

