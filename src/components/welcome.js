import React, {useState} from "react";
import Register from "./register";
import Posts from "./posts";

const Welcome = ({ isLoggedIn, posts, setPosts, setIsLoggedIn, setToken, token, user, setUser}) => {
    const [active, setActive] = useState(false);
    const handleSubmit = (event) => {
    event.preventDefault()
    setActive(true) 
   }
return (
    
            <>
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
        </>
        )
    
}

export default Welcome