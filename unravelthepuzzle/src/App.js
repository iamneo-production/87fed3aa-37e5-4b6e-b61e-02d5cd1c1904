
import './App.css';
import React,{useState} from'react';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {Button} from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import ShuffledPieces from './components/ShuffledPieces';
import DropPieces from './components/DropPieces';

  function App() {
   var [startButtonClicked,toggle]=useState(false);
   const [currForm,setCurrForm]=useState('register');
   
   function startButtonClickHandler(){
        
      toggle(startButtonClicked=true);
   }
   function resetButtonClickHandler(){
    toggle(startButtonClicked=false);
   }
   const toggleForm=(formName)=>{
      setCurrForm(formName);
   }
    return (
    <div className="App">
     { currForm==="login"?<Login onSwitch={toggleForm}/>:<Register onSwitch={toggleForm}/>}
      <header className="App-header">
         Solve the puzzle
      </header>
      <div className="App-content">
         <div className="pieceContainer">
             <DndProvider backend={HTML5Backend}>
                 <ShuffledPieces flag={startButtonClicked}/>
             </DndProvider>
         </div>
         <div className="puzzleContainer">
             <DndProvider backend={HTML5Backend}>
                 <DropPieces/>
             </DndProvider>
         </div>
      </div>
      <Button 
         style={startButtonClicked?{display:"none"}:{display:"block"}} 
         variant="contained" 
         color="info" 
         onClick={startButtonClickHandler}>Start</Button>
      <Button 
         style={startButtonClicked?{display:"block"}:{display:"none"}} 
         variant="contained" color="success" 
         onClick={resetButtonClickHandler}>Reset Puzzle</Button>
    </div>
  );
}

export default App;
