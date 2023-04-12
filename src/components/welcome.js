import React from "react";
import Register from "./register";

const Welcome = ({user, isLoggedIn}) => {
return (
    (isLoggedIn ?
        (<div id='mainContainer'>Welcome to Craigslist {user}.</div>)
        :
        (
        <Register />
        )
        )
    )
}

export default Welcome