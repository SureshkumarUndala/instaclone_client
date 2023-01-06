import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Homepage = () => {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    fetch("https://instacloneappbackend-deployment.onrender.com/allposts", {
      method: "get",
      headers: {
        "Authorization": "bearer " + localStorage.getItem("token")
      },

    }).then(res => res.json())
      .then(data => setPosts(data.posts))



  }, [])


  return (


    <div className='home-cntainer'>
      {
        posts.map((post) => {
          return (
            <div className='card home-card' key={post._id}>
              <h5 style={{padding:"10px"}}>{post.author.fullname}</h5>
              <div className='card-image'>
                <img src={post.image}/>
              </div>
              <div className='card-content'>
                <i className="material-icons" style={{ color: "red" }}>favorite</i>
                <h6>{post.title}</h6>
                <p>{post.body}</p>
                <input type="text" placeholder='Enter comment' />
              </div>
            </div>
          )

        })
      }
    </div>
  )
}

export default Homepage