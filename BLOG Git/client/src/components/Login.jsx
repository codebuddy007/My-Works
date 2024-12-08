import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'



const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()



  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', { email, password})
    .then(res => { 
     if(res.data === "Successfull"){
       window.location.href = "/"
     }
    }
    )
    .catch(err => console.log(err))


  };

  return (
    <div  className='signup_container'>
    <div  className='signup_form'>
      <h2>Log In</h2>
      <form  onSubmit={handleSubmit}>
       
        <div>
          <label htmlFor="email">Email:</label><br />
          <input id='email' type="email" placeholder='Enter email' onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password:</label><br />
          <input id='password' type="password" placeholder='Enter password' onChange={e => setPassword(e.target.value)} />
        </div>
        <button className='signup_btn'>Log In</button>
      </form>
      <br />
      <p>Not Registered?</p>
      <Link to="/register"><button>Sign Up</button></Link>
    </div>
  </div>
  )
}

export default Login
