import React, { useState } from "react"
import { makePost } from "../api";
import Posts from "./posts";


const CreateForm = (user, token, setActive, setPosts, posts) => {
const [newTitle, setNewTitle] = useState('')
const [newDescription, setNewDescription] = useState('')

const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = {post: {title: newTitle, description: newDescription, author: {user}}};
    const postToPost = await makePost(newPost, token);
    setPosts([postToPost, ...posts])
    setNewTitle('')
    setNewDescription('')
    setActive(false)

}

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Title" 
                value={newTitle} 
                onChange={(event) => setNewTitle(event.target.value)}>
            </input>
            <input 
                type="text" 
                placeholder="Description" 
                value={newDescription}
                onChange={(event) => setNewDescription(event.target.value)}>
            </input>
            <button type="submit">Submit</button>
        </form>
    )
}
export default CreateForm;