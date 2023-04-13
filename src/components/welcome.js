import React from "react";
import Register from "./register";
import Posts from "./posts";

const Welcome = ({user, isLoggedIn, posts, setPosts}) => {
return (
    (isLoggedIn ?
        (
            <>
        <div id='mainContainer'>Welcome to Craigslist {user}.</div>
        <Posts 
        posts={posts}
        setPosts={setPosts}/>
        </>
        )
        :
        (
        <>
        <Register />
        <Posts 
        posts={posts}
        setPosts={setPosts}
        />
        </>
        )
        )
    )
}

export default Welcome