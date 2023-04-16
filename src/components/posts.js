import React, { useState } from "react";
import { makePost } from "../api";
import CreateForm from "./createPostForm";
import { deletePost } from "../api";
import SearchBar from "./search";
import CreateMessageForm from "./createMessageForm";

const Posts = ({posts, setPosts, isLoggedIn, user, token}) => {
    const [createPostFormActive, setCreatePostFormActive] = useState(false);
    const [createMessageFormActive, setMessagePostFormActive] = useState(false);

    const handleMessage = async (event) => {
        event.preventDefault();
        const postId = event.target.value;
        setMessagePostFormActive(true)
    }
    const handleDelete = async (event) => {
    const postId = event.target.value;
        const {success} = await deletePost(postId, token);
        if(success){
        setPosts(posts.filter(post => post._id !== postId));
        }else return
    }
    const handleSubmit = (event) => {
    event.preventDefault()
    setCreatePostFormActive(true) 
   }
return (
    <>
            <SearchBar />
            {isLoggedIn ? (
                
    <section > 
        <h1>Hello, {user}!</h1>
        <button 
        onClick={ handleSubmit }
        >Create New Post</button> 
        {createPostFormActive ? (<CreateForm token={token} user={user} setActive={setActive} setPosts={setPosts} posts={posts}/>) : (null)}
    {posts.map((post) => {
        console.log
        return (
            <article key={post._id} id='singlePost'>            
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p>{post.author.username}</p>
                <>
                {post.author.username === user ?
                (
                    <button onClick={handleDelete} value={post._id}>Delete Post</button>
                ) : (
                    <>
                        <button onClick={handleMessage} value={post._id}>Send Message</button>
                        {createMessageFormActive ? (<CreateMessageForm />) : (null)}
                    </>
                )}
                </>
            </article>
        );
    })}
    </section>
            ) : (
                <section > 
        <h1>Hello, UNAUTHENTICATED USER!</h1>
    {posts.map((post) => {
        return (
            <article key={post._id} id='singlePost'>            
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