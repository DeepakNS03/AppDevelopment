import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "./Login.css"
import { useDispatch } from 'react-redux';
import {login} from '../features/admin';

function Login() {

  const[username,setUsername]=useState('');
  const[password,setpassword]=useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const handleLogin = (e)=>{
    e.preventDefault();
    dispatch(login({username}));
    navigate('/adminDash');
  
}
  return (
    <div id="body">
    <div className="signup-form">
    <div className="container">
      <div className="header">
      <div id="me1"><h1>CamCraft</h1></div>
        <p>Enter Credentials For Login</p>
      </div>
   
      <form>
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" value={username} />
        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Password" value={password}/>
        </div><br/>
        <button type='submit' onClick={handleLogin}>Login</button> 
        {/* <input onClick={() => dispatch(login({username}))} className="signup-btn" type="submit" value="LOGIN" /> */}
      </form>
      <br/>
    <Link to="/register">  <p>No Account? Create One!</p></Link>
      
    </div>
  </div>
  </div>
  )
}

export default Login;