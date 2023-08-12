
import './App.css';
import React,{useState} from'react';
import {Button} from '@mui/material';
import puzzleImages from './puzzleImages';

const rows = 4;
const columns = 4;
 
const matrix = Array(rows).fill().map(() =>
               Array(columns).fill(0));


function createPieces(){
  return (React.createElement('div',{className:'pieces'}));
}

function App() {
    const [changeStyle,shufflePieces]=useState({
        position:"absolute",
        left:Math.floor((Math.random()*300))+ "px",
        top:Math.floor((Math.random()*300))+ "px",
     });
     function IsClicked(){
       shufflePieces();
       return true;
     }
  return (
    <div className="App">
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
                   className='pieces' 
                   style={IsClicked?{backgroundPositionX:-100*subIndex,backgroundPositionY:-100*index}:{changeStyle}}>
                 </div>
               )}
              </div>
            );
         })}
         </div>
      </div>
      <Button variant="contained" color="info" onClick={IsClicked}>Decipher</Button>
      <Button id="reset" variant="contained" color="success">Reset</Button>
    </div>
  );
}

export default App;
