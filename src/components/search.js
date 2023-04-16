import React, { useState } from "react";

const SearchBar = ({ allPosts }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  const searchChange = (event) => {
    setSearch(event.target.value);
  };

  const searchSubmit = (event) => {
    event.preventDefault();
    if (allPosts) {
      const filteredPosts = allPosts.filter((post) =>
        post.toLowerCase().includes(search.toLowerCase())
      );
      setPosts(filteredPosts);
    }
  };

  return (
    <form onSubmit={searchSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={search}
        onChange={searchChange}
      />
      <button type="submit">Search</button>
      {posts.map((post) => (
        <div key={post._id}>{post.name}</div>
      ))}
    </form>
  );
};

export default SearchBar;