
import './App.css';
import React,{useState} from'react';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {Button} from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrag } from 'react-dnd'
import Pieces from './components/Pieces';

const rows = 4;
const columns = 4;

const matrix = Array(rows).fill().map(() =>Array(columns).fill(0));

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
          
         </div>
         <div className="puzzleContainer">
         {matrix.map((item,index)=>{
               return(
                <div>
                   {item.map((subItem,subIndex)=>
                      <div 
                         className="pieces"
                         style={startButtonClicked?{
                         position:"absolute",
                         cursor: 'move',
                         left:Math.floor((Math.random()*290))+ "px",
                         top:Math.floor((Math.random()*290))+ "px",
                         }:{backgroundPositionX:-100*subIndex,backgroundPositionY:-100*index}}>
                      </div>
                   )}
                </div>
                );
            })
          }
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
