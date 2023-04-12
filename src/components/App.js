import React, { useState } from 'react'
import { Posts, LogIn, Profile, Navbar, Welcome, Header } from '.'
import {Routes, Route} from 'react-router-dom'
import './style.css';

const App = ()=> {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

return (
    <>
        <Header />
        <Navbar />
        <Routes>
            <Route path='/' element={
                <Welcome 
                user={user}
                isLoggedIn={isLoggedIn}
            />}/>
            <Route 
                path='/login' 
                element={
                <LogIn
                user={user} 
                setUser={setUser}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn} 
                token={token} 
                setToken={setToken}
            />}/>
            <Route 
                path='/posts' 
                element={
                <Posts 
                posts={posts}
                setPosts={setPosts}
                user={user} 
                setUser={setUser}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
            />}/>
            <Route
                path='/profile' 
                element={
                <Profile
                posts={posts}
                setPosts={setPosts}
                user={user} 
                setUser={setUser}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn} 
            />}/>
        </Routes>
    </>
)
}

export default App;