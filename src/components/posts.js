import React, { useState } from "react";
import { makePost } from "../api";
import CreateForm from "./form";

const Posts = ({posts, setPosts, isLoggedIn, user}) => {
    const [active, setActive] = useState(false);
    const handleSubmit = (event) => {
    event.preventDefault()
    setActive(true) 
   }
return (
            <>
            {isLoggedIn ? (
                
    <section > 
        <h1>Hello, USER!</h1>
        <button>Create New Post</button>
        <button>Update PUT Post</button>
        <button>Update PATCH</button>
        <button>Delete Post</button>
    {posts.map((post) => {
        return (
            <article key={post.author.id} id='singlePost'>            
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p>{post.author.username}</p>
            </article>
        );
    })}
    </section>
            ) : (
                <section > 
        <h1>Hello, UNAUTHENTICATED USER!</h1>
        <button 
        onClick={ handleSubmit }
         
        >Create New Post</button> 
        {active ? (<CreateForm/>) : (null)}
        <button>Update PUT Post</button>
        <button>Update PATCH</button>
        <button>Delete Post</button>
    {posts.map((post) => {
        return (
            <article key={post.author.id} id='singlePost'>            
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p>{post.author.username}</p>
            </article>
        );
    })}
    </section>
            )
}
            </>
)
}

export default Posts;

// onClick={async() => {
//     const newPost = await makePost(postToCreate);
//     setPosts([newPost, ...posts]);
// }}