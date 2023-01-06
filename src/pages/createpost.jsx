import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Createpost = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] =  useState("")
    const [image, setImage] =  useState("")

    useEffect(()=>{
        if(image){
            //call create post api
            fetch("https://instacloneappbackend-deployment.onrender.com/createpost",{
                method:"post", 
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": "bearer "+localStorage.getItem("token")
                },
                body:JSON.stringify({
                    title:title,
                    body:body,
                    image:image
                })

            }).then(res=>console.log(res))
        }
    },[image]) //here when ever image value changes, then useEffect will be called

    const submitPost =()=>{
        const formdata = new FormData()
        formdata.append("file",image)
        formdata.append("upload_preset", "instagramcloneapp")

        axios.post("https://api.cloudinary.com/v1_1/du762llex/upload",formdata)
        .then(res=>setImage(res.data.url))
        .catch(err=>console.log(err))
    }


    return (
        <div className='card create-post-container'>
            <input type="text" placeholder="post title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" placeholder="post content" value={body} onChange={(e)=>setBody(e.target.value)} />
            <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken-1">
                    <span>Upload Post Image</span>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" value={image.name} type="text"/>
                </div>
            </div>
            <button onClick={()=>submitPost()}  className="btn waves-effect waves-light btn #64b5f6 blue darken-1">SUBMIT POST</button>

        </div>
    )
}

export default Createpost