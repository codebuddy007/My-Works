import axios from 'axios'
import React, { useContext, useState } from 'react'
import { userContext } from '../App'



const Create = () => {

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [file, setFile] = useState()
    const user = useContext(userContext)



    const handleSubmit = (e) => {
            e.preventDefault();
            const formData = new FormData()
            formData.append('title' , title)
            formData.append('description' , description)
            formData.append('file' , file)
            formData.append('email' , user.email)




            axios.post('http://localhost:3001/create', formData)
            .then(res => { 
             if(res.data === "Successfull"){
               window.location.href = "/"
             }
            }
            )
            .catch(err => console.log(err))
        
    }



  return (
    <div className='post_container'>
        <div className='post_form'>
            <form onSubmit={handleSubmit}>
                <h2>Create Post</h2>
                <input type="text" placeholder='Enter Title' onChange={e => setTitle(e.target.value)} />
                <textarea name="desc" id="desc" cols="30" rows="10" placeholder='Enter Description'  onChange={e => setDescription(e.target.value)}></textarea>
                <input type="file" className='file' placeholder='Select File'  onChange={e => setFile(e.target.files[0])}/>
                <button>Post</button>
            </form>
        </div>
    </div>
  )
}

export default Create
