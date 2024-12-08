import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  const [posts, setposts] =useState([])

  useEffect(() => {
      axios.get('http://localhost:3001/getposts/')
      .then (posts => {
        setposts(posts.data)
      })
      .catch(err => console.log(err))



  }, [])



  return (
    <div className='post_container'>
      
        {
          posts.map( (post,id) => (
            <Link to={`/post/${post._id}`} className='post' key={id}>
         
            <img src={`http://localhost:3001/Images/${post.file}`} alt="" />
            <div className='post_text'>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          
          </Link>
          ))
        }
      </div>
    
  )
}

export default Home
