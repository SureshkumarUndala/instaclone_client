import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const Navigate = useNavigate()
  const [user, setUser] =useState({fullname:"", email:"", password:""})


  const register = () =>{

    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!regEx.test(user.email)){
      return alert("Invalid Email")
    }
    
    axios.post("https://instacloneappbackend-deployment.onrender.com/register",user)
    .then((response)=>{
   
      alert(response.data.status)
      Navigate("/login")
     
    })
    .catch((error)=>{
      alert(error.response.data.error)
    })
 
  }  


  return (
    <div className='login-container'>
    <div className='card login-card input-field' >
       <h2>Instagram</h2>
       <input type="text" placeholder='Full name' value={user.fullname} onChange={(e)=>setUser({...user,fullname:e.target.value})}/>
       <input type="text" placeholder='Email' value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
       <input type="password" placeholder='password' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
       <button onClick={()=>register()} className="btn waves-effect waves-light btn #64b5f6 blue darken-1">Signup</button>
       <h6>Already have an account? <Link to="/login" className='login '>Login</Link></h6>
      
    </div>
   
</div>
)
  
}

export default Signup