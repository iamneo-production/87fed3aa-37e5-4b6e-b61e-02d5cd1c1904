import React,{useState} from 'react';
import {Button} from '@mui/material'; 

export const Login=(props)=>{
    const [email,setEmail]=useState('');
    const [pwd,setPwd]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <>
             <form onSubmit={handleSubmit}>
                 <label htmlFor="email">Email ID</label>
                 <input value={email} type="email" placeholder="name@example.com" id="email" name="email"/>
                 
                 <label htmlFor="password">Password</label>
                 <input value={pwd} type="password" placeholder="Enter your Password" id="password" name="password"/>
                 <Button type="submit" variant="outlined" color="info" >Log In</Button>
             </form>
             <Button onClick={()=>props.onSwitch('register')}variant="contained" color="info" >Register</Button>   
        </>
    );
}

