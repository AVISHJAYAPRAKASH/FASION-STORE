import React, { useState } from 'react'
import Login from './Login';
import { Link, useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios'


const SignUp = () => {
    let [state,setState]=useState({
        name:"",
        age:"",
        date_of_birth:"",
        gender:"",
        email:"",
        nationality:"",
        password:""
    })

    let handelChange=(x)=>{
        let {name,value}=x.target;
        setState({...state,[name]:value})
        
    }

    let navigate=useNavigate()

    let {name,age,date_of_birth,gender,email,nationality,password}=state

    let handelSubmit=async(a)=>{
        a.preventDefault()
        console.log({...state});

        //fstate(<Link to="/login"><Login data={state}></Login></Link>)
         try{
          navigate("/login")
      let payload={name,age,date_of_birth,gender,email,nationality,password}
      let data=await axios.post("http://localhost:5000/users",payload)
    }
    catch(err){
      console.log(err);
    }
        //fstate(<Login data={state}></Login>)
        //fstate(<Login data={state}></Login>)
    }

  return (
    <div className="container">
      <h1 className="header">WELCOME TO SIGN_UP PAGE</h1>
        <form className="signup-form" action="" onSubmit={handelSubmit}>
            <label className="label" htmlFor="">NAME</label>
            <input className='input' type="text" name='name'              onChange={handelChange}/>

            <label className="label" htmlFor="">AGE</label>
            <input className='input' type="text" name='age'                 onChange={handelChange}/>

            <label className="label" htmlFor="">DATE OF BIRTH</label>
            <input className='input' type="date" name='date_of_birth'       onChange={handelChange}/>

            <label className="label" htmlFor="">GENDER</label>
            <input className='input' type="radio" name='gender' value='MALE'   onChange={handelChange}/>MALE
            <input className='input' type="radio" name='gender' value='FEMALE' onChange={handelChange}/>FEMALE
            <input className='input' type="radio" name='gender' value='OTHERS' onChange={handelChange}/>OTHERS

            <label className="label" htmlFor="">EMAIL</label>
            <input className='input' type="email" name='email'              onChange={handelChange}/>

            <label className="label" htmlFor="">NATIONALITY</label> 
            <select name="nationality" id="" onChange={handelChange}>
                <option value=""></option>
                <option value="DUBAI">DUBAI</option>
                <option value="INDIAN">INDIA</option>
                <option value="RUSSIA">RUSSIAN</option>
                <option value="ISRAEL">ISRAEL</option>
            </select>

            <label className="label" htmlFor="">PASSWORD</label>
            <input className='input' type="password" name='password'        onChange={handelChange}/>

            <button className="submit-btn">SUBMIT</button>
            {/* <Link to="/login"><button >LOGIN</button></Link> */}
        </form>

        
        
    </div>
  )
}

export default SignUp
