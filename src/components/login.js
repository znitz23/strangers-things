import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../api";


const LogIn = ({user, setUser, isLoggedIn, setIsLoggedIn, token, setToken, }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
     const navigate = useNavigate()
    
    const handleSubmit = async (event) => {
        event.preventDefault();
      const userToAuth = {user: {username: username, password: password}};
      const data = await authenticateUser(userToAuth); 

      if(data.token){
          setToken(data.token);
          setUser(username);
          setIsLoggedIn(true);
        }
         setUsername('');
         setPassword('');
          navigate('/profile');
     }
    
    return (
    <section id='mainContainer'>
        <form onSubmit={handleSubmit}>
            
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