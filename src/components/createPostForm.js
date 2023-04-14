import React, { useState } from "react"
import { makePost } from "../api";
import Posts from "./posts";


const CreateForm = ({user, token, setActive, setPosts, posts}) => {
const [newTitle, setNewTitle] = useState('')
const [newDescription, setNewDescription] = useState('')
const [newPrice, setNewPrice] = useState('')

const handleSubmit = async (event) => {
    event.preventDefault();
    const newPost = {post: {title: newTitle, description: newDescription, price: newPrice}};
    const {data} = await makePost(newPost, token);
    console.log(data);
    setPosts([data.post, ...posts])
    setNewTitle('')
    setNewDescription('')
    setNewPrice('')
    setCreatePostFormActive(false)

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
            <input 
                type="text" 
                placeholder="Price" 
                value={newPrice}
                onChange={(event) => setNewPrice(event.target.value)}>
            </input>
            <button type="submit">Submit</button>
        </form>
    )
}
export default CreateForm;