import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { UserContext } from '../app'

// import "./Login.css"

const Login = () => {
  const {state, dispatch} = useContext(UserContext)
  const Navigate = useNavigate()
  const [user, setUser] =useState({email:"", password:""})

  const login= ()=>{
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!regEx.test(user.email)){
      return alert("Invalid Email")
    }
      
    axios.post("https://instacloneappbackend-deployment.onrender.com/login",user)
    .then((response)=>{
      console.log(response.data.token,response.data.userinfo)
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("userInfo", JSON.stringify(response.data.userinfo))
      
       //dispatch the  action and state to the reducer
       dispatch({type: "USER", payload:response.data.userinfo})  // here dispatch send the action type and payload  to the reducer
      alert(response.data.message)
      Navigate("/")
     
    })
    .catch((error)=>{
      alert(error.response.data.error)
    })

  }

  
  return (
    <div className='login-container'>
         <div className='card login-card input-field' >
            <h2>Instagram</h2>
            <input type="text" placeholder='Email' value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/>
            <input type="password" placeholder='password' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/>
            <button onClick={()=>login()} className="btn waves-effect waves-light btn #64b5f6 blue darken-1">Login</button>
            <h6>Don't have an account? <Link to="/signup" className='signup'>signup</Link></h6>
         </div>
    </div>
  )
} 

export default Login