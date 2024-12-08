import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../App'
import axios from 'axios'



const NavBar = () => {

  const user = useContext(userContext)
  const navigate = useNavigate()

  const handleLogout = () =>{
    axios.get('http://localhost:3001/logout')
    .then(res => {
      if(res.data === "Successfull")
        
        navigate(0)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='navbar_header'>
       <div><h3>BlogBuddy</h3></div>
      <div>
        <Link className='link' to='/'>Home</Link>

        {
          user.username ?
          <Link to ="/create" className='link' >Create</Link>
          :
            <></>

        }


       
        <a className='link' href="#">Contact</a>
      </div>
      {
        user.username ? 
        <div>
            <input type="button" onClick={handleLogout} className='btn_input' value="Log Out" />
        </div>
        :
        <div><h5><Link to="/register" className='link'>Register/Login</Link></h5></div>
        
      }
     
  </div >)
}

export default NavBar
