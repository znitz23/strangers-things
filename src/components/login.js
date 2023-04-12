import React, { useState, useNavigate } from "react";


const LogIn = ({user, setUser, isLoggedIn, setIsLoggedIn, token, setToken, }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate()
    
    // const handleSubit = async (event) => {
    //     event.preventDefault();
    //     const authUser = // run a function that checks for valid log in credentials and returns a token
    //     //setToken()
    //     setUsername('');
    //     setPassword('');
    //     navigate('/profile');
    // }
    
    return (
    <>
        <form>
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
    </>
)
}

export default LogIn