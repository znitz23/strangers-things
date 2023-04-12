import React, { useState, useNavigate } from "react";
import { authenticate } from "../api/authentication";


const LogIn = ({user, setUser, isLoggedIn, setIsLoggedIn, token, setToken, }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
     //const navigate = useNavigate()
    
    const handleSubmit = async (username, password) => {
        //event.preventDefault();
    console.log(username, password)
      const data = await authenticate(username, password); 
      console.log(data);
        //setToken(authenticate);
         setUsername('');
         setPassword('');
         //navigate('/profile');
     }
    
    return (
    <section id='mainContainer'>
        <form onSubmit={ (event) => {  
            event.preventDefault();
            handleSubmit(username, password)}}>
            
            <input 
                placeholder="Username" 
                value={username} 
                onChange={(event) => setUsername(event.target.value)} 
            />
            <input 
                placeholder="Password" 
                value={password} 
                onChange={(event) => setPassword(event.target.value)}
            />
            <button type='submit' >Log In</button>
        </form>
    </section>
)
}

export default LogIn