import React from 'react';
import DragDrop from './components/DragDrop';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SignIn from './components/Auth/login.js';
import SignUp from './components/Auth/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

 

function App() {
    return <React.Fragment>
        <BrowserRouter>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' ,textAlign:'center'}} >
                        <Routes>
                            <Route path='/' Component={SignIn}></Route>
                            <Route path='/signup' Component={SignUp}></Route>
                            <Route path='/puzzle' Component={DragDrop}></Route>

                        </Routes>   
                    </Box>
                </Container>
      </BrowserRouter>
    </React.Fragment>
                
 
    
}

export default App;