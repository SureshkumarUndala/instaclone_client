import React from "react";
// import "./Navbar.css"
import { useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import { UserContext } from "../app";

const Navbar = () => {
   const {state, dispatch} = useContext(UserContext)
   const Navigate = useNavigate()
   const Logout = () =>{
    localStorage.clear();
    dispatch({type:"LOGOUT"})
    Navigate("/login")




   }
   const navList = () =>{
    if(state){    // if userobject presents then return nav items
       return [
          <li><Link to="/create-post">create-post</Link></li>,
          <li><Link to="/profile">Profile</Link></li>,
          <button onClick={()=>Logout()} className="btn waves-effect waves-light btn #d32f2f red darken-2">Logout</button>
        ]
    }
    else{
      return [
        <li><Link to="/login">Login</Link></li>,
        <li><Link to="/signup">Sigup</Link></li>
      ]
    }
   }

    return (
        <nav>
        <div className="nav-wrapper white">
          <Link to={state? "/":"/login"} className="brand-logo">Instagram</Link>
          <ul id="nav-mobile" className="right">
            {navList()}
  
      
          </ul>
        </div>
      </nav>
       
    )
}

export default Navbar