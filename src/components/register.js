import React, { useState } from "react";
import { authenticateNewUser } from "../api";

const register = ({user, setUser, isLoggedIn, setIsLoggedIn, token, setToken, }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //  const navigate = useNavigate()
    
    const handleSubmit = async (event) => {
        event.preventDefault();
       
      const userToRegister = {user: {username: username, password: password}};
      const data = await authenticateNewUser(userToRegister); 
        console.log(data.token)
      if(data.token){
          setToken(data.token);
          setUser(username);
          setIsLoggedIn(true);
        }
         setUsername('');
         setPassword('');
        //  navigate('/profile');
     }
    
    
    
    
    

return (
    <>

        <form onSubmit={handleSubmit} >
            
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
            <button type='submit' >Register</button>
        </form>
    </>
)
};


export default register;
