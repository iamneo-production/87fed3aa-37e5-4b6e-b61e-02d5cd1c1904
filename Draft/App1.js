
import './App.css';
import React from'react';
import {Button} from '@mui/material';
import Pieces from './components/Pieces1'
function App() {
  return (
    <div className="App">
      <header className="App-header">
         Solve the puzzle
      </header>
      <div className="App-content">
         <Button variant="contained" color="success">Reset the Puzzle</Button>
      </div>
      <img alt="puzzle" src="https://th.bing.com/th/id/OIP.yjH3SiDaVWtpBX0g_2q68gHaEK?pid=ImgDet&rs=1"/>
      <Pieces
      image="https://th.bing.com/th/id/OIP.yjH3SiDaVWtpBX0g_2q68gHaEK?pid=ImgDet&rs=1"
      />
    </div>
  );
}

export default App;
