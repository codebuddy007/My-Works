
import React, { createContext,useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/LogIn'
import Home from './components/Home'
import axios from 'axios'
import Create from './components/Create'
import Post from './components/Post'
import EditPost from './components/EditPost'





export const userContext = createContext()


const App = () => {
  const [user, setUser] = useState({})

  axios.defaults.withCredentials = true;

  useEffect(() => {
    
  axios.get('http://localhost:3001/')
    .then(user =>{
     setUser(user.data)
    } )
    .catch(err => console.log(err))


  }, [])
  


  return (
    <userContext.Provider value={user}>
  <BrowserRouter>
  <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/post/:id' element={<Post/>}></Route>
      <Route path='/editpost/:id' element={<EditPost/>}></Route>
    </Routes>
  </BrowserRouter>
  </userContext.Provider>
  )
}

export default App
