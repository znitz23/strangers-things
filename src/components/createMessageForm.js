import React, {useState} from "react";
import { postMessage } from "../api";

const CreateMessageForm = ({token, postId}) => {
    const [message, setMessage] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const messageContent = {message: {content: message}};
        console.log(messageContent);
        await postMessage(messageContent, token, postId);
        setMessage('');
    }

    return (

        <form onSubmit={handleSubmit}>
    <input 
        type='text'
        placeholder='Send Message'
        value={message}
        onChange={(event) => setMessage(event.target.value)}
    ></input>
    <button type="submit">Submit</button>
</form>


    )
}

export default CreateMessageForm