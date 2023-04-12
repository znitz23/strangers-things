import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
   return (
    <nav>
            <NavLink to="/" id='navFeature' >Home</NavLink>
            <NavLink to="/login" id='navFeature' >LogIn</NavLink>
            <NavLink to="/posts" id='navFeature' >Posts</NavLink>
            <NavLink to="/profile" id='navFeature' >Profile</NavLink>
    </nav>
)
};

export default Navbar