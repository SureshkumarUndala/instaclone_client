import React from 'react';
import { useEffect,useContext ,createContext, useReducer, } from 'react';
import "./app.css"
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Createpost from './pages/createpost';
import { reducer, initialstate } from './reducer/userreducers';


 export const UserContext = createContext()

const CustomRouting = () => {
    const Navigate = useNavigate()     // useNavigate ---> to decide the redirection based on the token
    const {state, dispatch} = useContext(UserContext)
    useEffect(()=>{
        const userinfo = localStorage.getItem("userInfo")
     
        if(userinfo){
            dispatch({type:"USER", payload: userinfo})
            Navigate("/")   // user logged in so redirected to homepage
            
        }
        else{
            Navigate("/login") // user redirected to login
        }


    },[]) //useEffect called when component mounts and get called only once

    return ( 
        <Routes> 
            <Route path="/" element={<Homepage />} /> 
            <Route path="/signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/create-post' element={<Createpost />} />
        </Routes>
    )
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialstate)   // dispatch method update the state
    // now we going to send state & dipatch as a value to all our components
    return (
        <UserContext.Provider value={{state: state, dispatch:dispatch}}>           
            <BrowserRouter> 
                <Navbar/>
                <CustomRouting/>
            </BrowserRouter>

        </UserContext.Provider>


    )
}


export default App
