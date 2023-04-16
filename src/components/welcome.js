import React, {useState} from "react";
import Register from "./register";
import Posts from "./posts";
import CreateMessageForm from "./createMessageForm";
import CreateForm from "./createPostForm";

const Welcome = ({ isLoggedIn, posts, setPosts, setIsLoggedIn, setToken, token, user, setUser}) => {
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
                    <>
    </>
    {isLoggedIn ? (
        <></>
    ) : (
<Register
  posts={posts}
  setPosts={setPosts}
  user={user} 
  setUser={setUser}
  isLoggedIn={isLoggedIn}
  setIsLoggedIn={setIsLoggedIn} 
  setToken={setToken}
  token={token}
/>
    )}
                    {isLoggedIn ? (
                
                <section > 
                    <h1>Hello, {user}!</h1>
                    <button 
                    onClick={ handleSubmit }
                    >Create New Post</button> 
                    {createPostFormActive ? (<CreateForm token={token} user={user} setCreatePostFormActive={setCreatePostFormActive} setPosts={setPosts} posts={posts}/>) : (null)}
                {posts.map((post) => {
                    return (
                        <article key={post._id} id='singlePost'>            
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <p>{post.price}</p>
                            <p>{post.author.username}</p>
                            <>
                            {post.author.username === user ?
                            (
                                <button onClick={handleDelete} value={post._id}>Delete Post</button>
                            ) : (
                                <>
                                    <button onClick={handleMessage} value={post._id}>Send Message</button>
                                    {createMessageFormActive ? (<CreateMessageForm token={token} postId/>) : (null)}
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
                            <p>{post.price}</p>
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

export default Welcome