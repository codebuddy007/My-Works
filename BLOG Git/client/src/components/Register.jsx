import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";


const Register = () => {

  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()



  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {username, email, password})
    .then(res => navigate('/login'))
    .catch(err => console.log(err))


  };

  return (
    <div className="signup_container">
      <div className="signup_form">
        <h2>Sign Up</h2>
        <form  onSubmit={handleSubmit}>
          <div >
            <label htmlFor="name">Username:</label>
            <br />
            <input id="name" type="text" placeholder="Enter Username" onChange={e => setUsername(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <br />
            <input id="email" type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <br />
            <input id="password" type="password" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
          </div>
          <button className="signup_btn">Sign Up</button>
        </form>
        <br />
        <p>Already have an account?</p>
        <Link to="/login">
          <button>Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
