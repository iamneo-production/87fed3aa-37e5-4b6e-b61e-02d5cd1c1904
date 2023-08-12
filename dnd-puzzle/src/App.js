import React,{ useEffect, useState } from "react";
import Card from "./components/container";
import { getAllImages, getimage } from "./Services/images-services";
import './App.css';
import image from "./assets/images/ny_01.jpg";

function App() {

  const [pieces,setPieces] = useState([]);
  const[shuffled,setShuffled] = useState([]);

  useEffect(()=>{
    getimage(1).then(res=>setPieces(res.data.pieces));
    
  },[]);

  useEffect(()=>{
    setShuffled(shufflePieces([...pieces]));
    
  },[pieces]);

  const handleClick = ()=>{
    console.log(pieces);
    console.log(shuffled);
    
  }

  function shufflePieces(arr) {
    const randomPieces = [...arr];

    for (let i = randomPieces.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tmp = randomPieces[i];
        randomPieces[i] = randomPieces[j];
        randomPieces[j] = tmp;
    }

    return randomPieces;
  }


  return (
    <div>
      <Card>
        <h1>Shuffled</h1>
        {/* <ul className="jigsaw__shuffled-board">
                {shuffled.map((piece) => <li key={piece.id}>
                                                  {
                                                    <img src={piece.url} alt="puzzle" />
                                                  }
                                             </li>)
                }
        </ul> */}
        <img src = {image} alt="image"></img>
        
      </Card>
      <Card>
        <h1>Solved</h1>
      </Card>
      <button onClick={handleClick}>click here</button>
    </div>
  );
}

export default App;
