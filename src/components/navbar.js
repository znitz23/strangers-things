import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({setUser, setIsLoggedIn, setToken}) => {
    const handleSubmit = (event) => {
   
        event.preventDefault()
        setUser({});
            setIsLoggedIn(false);
            setToken('');
           // navigate('/');
    }
   return (
    <nav id='navBar'>
            <NavLink to="/" id='navFeature' >Home</NavLink>
            <NavLink to="/login" id='navFeature' >LogIn</NavLink>
            <NavLink to="/posts" id='navFeature' >Posts</NavLink>
            <NavLink to="/profile" id='navFeature' >Profile</NavLink>
            <button 
            onClick={handleSubmit}
            id='navFeature'
          
            
        
            >Logout</button>
    </nav>
)
};

export default Navbar