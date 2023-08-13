import React,{useState} from 'react';
import {Button} from '@mui/material'; 

export const Register=(props)=>{
    const [email,setEmail]=useState('');
    const [pwd,setPwd]=useState('');
    const [fullName,setfullName]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <>
             <form onSubmit={handleSubmit}>
                 <label htmlFor="name">Full Name</label>
                 <input value={fullName} type="name" placeholder="Enter your full name" id="email" name="email"/>
                 
                 <label htmlFor="email">Email ID</label>
                 <input value={email} type="email" placeholder="name@example.com" id="email" name="email"/>
                 
                 <label htmlFor="password">Password</label>
                 <input value={pwd} type="password" placeholder="Enter your Password" id="password" name="password"/>
                 <Button type="submit" variant="outlined" color="info" >Register</Button>
             </form>
             <Button onClick={()=>props.onSwitch('login')} variant="contained" color="info" >Already have an account? Login</Button>   
        </>
    );
}

