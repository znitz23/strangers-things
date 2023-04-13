import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
   return (
    <nav id='navBar'>
            <NavLink to="/" id='navFeature' >Home</NavLink>
            <NavLink to="/login" id='navFeature' >LogIn</NavLink>
            <NavLink to="/posts" id='navFeature' >Posts</NavLink>
            <NavLink to="/profile" id='navFeature' >Profile</NavLink>
            <button id='navFeature'
            onClick={() => {
            setUser({});
            setIsLoggedIn(false);
            setToken('');
            Navigate('/');
            }
        }
            >Logout</button>
    </nav>
)
};

export default Navbar