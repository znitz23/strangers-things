import React, { useState } from "react";

const Register = () => {
    const [newusername, setNewusername] = useState(''); 
    const [newpassword, setNewpassword] = useState('');
    const handleSubmit = async (newusername, newpassword) => {
        event.preventDefault();
    console.log(newusername, newpassword)
      const data = await registerUser(newusername, newpassword); 
      console.log(data);
        //setToken(authenticate);
         setNewusername('');
         setNewpassword('');
         //navigate('/profile');
     }
    
    
    
    
    

return (
    <>
    <div id='mainContainer'>Please Register</div>

        <form submit={handleSubmit} >
            
            <input 
                
                placeholder="Username" 
                value={newusername} 
                onChange={(event) => setNewusername(event.target.value)} 
            />
            <input 
                placeholder="Password" 
                value={newpassword} 
                onChange={(event) => setNewpassword(event.target.value)}
            />
            <button type='submit' >Register</button>
        </form>
    </>
)}

export default Register;
