import React, { useState, useEffect } from 'react'
import { Posts, LogIn, Profile, Navbar, Welcome, Header } from '.'
import {Routes, Route} from 'react-router-dom'
import './style.css';
import { getPosts } from '../api';

const App = ()=> {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
            const getInitialData = async () => {
                const fetchedPosts = await getPosts();
                setPosts(fetchedPosts);
            }
        getInitialData()
    }, [])

return (
    <>
        <Header />
        <Navbar 
        setUser={setUser}
        setIsLoggedIn={setIsLoggedIn} 
        setToken={setToken}/>
        <Routes >
            <Route path='/' element={
                <Welcome 
                posts={posts}
                setPosts={setPosts}
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
                token={token}
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