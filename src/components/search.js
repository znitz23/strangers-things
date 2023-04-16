import React, { useState } from "react";

const SearchBar = (posts, setPosts) => {
  const [search, setSearch] = useState('');


  const searchSubmit = (event) => {
    event.preventDefault();
    const searchUsers = (posts, search) =>
    {posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
}
    const returnedPosts = searchUsers(posts,search);
    console.log(returnedPosts);
    setPosts(returnedPosts);
};


  return (
    <form onSubmit={searchSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={search}
        onChange={(event) =>setSearch(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
export default SearchBar;