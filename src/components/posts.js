import React from "react";

const Posts = ({posts, setPosts, isLoggedIn, user}) => {
return (
    <section id='mainContainer'>
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

export default Posts