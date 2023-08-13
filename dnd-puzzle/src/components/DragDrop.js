
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from './Card';
import React,{ useEffect, useState } from "react";
import { getimage } from '../services/image-service';
import GridItem from './GridItem';
import {useDrop } from "react-dnd";
import "../App.css"




function DragDrop() {

  const [pieces,setPieces] = useState([]);
  const[shuffled,setShuffled] = useState([]);
  const [dummy,setDummy] = useState({});
  const[solved,setSolved] = useState([]);
  const [isDropped, setIsDropped] = useState(false);

  useEffect(()=>{
    getimage(1).then(res=>setPieces(res.data.pieces));
    getimage(2).then(res=>setDummy(res.data));

    
  },[]);

  useEffect(()=>{
    setShuffled(shufflePieces([...pieces]));
    pieces.map((item,i)=>{return solved[item.id-1] = {"sid":i,...dummy}});
    

  },[pieces]);
 
  const handleClick = ()=>{
    console.log(pieces);
    console.log(shuffled);
    console.log(solved);
    
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

  const numColumns = 8;
  const cellSize = 50; // Assuming each cell has a size of 50px
  const [{ isOver }, drop] = useDrop(() => ({

    accept: "DRAGGABLE_ITEM",
    drop: (item,monitor)=>{
             const mousePosition = monitor.getClientOffset();
            let droppingIndex = 0;
            setIsDropped(true);
      if (mousePosition) {
        const gridX = Math.floor(mousePosition.x / cellSize);
        const gridY = Math.floor(mousePosition.y / cellSize);

       

        // console.log(gridX,gridY);

        // Calculate the dropping index
        droppingIndex = gridY * numColumns + gridX - 70;


        //console.log('Dropping Index:', droppingIndex-70);
      }

      addImageToBoard(item.id,droppingIndex);
    
    },
      


    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id,index) => {
    console.log(shuffled);
    console.log(solved);

    let picdata = pieces.find((p)=>p.id === id);
    let sindex = shuffled.findIndex((item)=>item.id === id)
   
    if(sindex>=0 && index>=0 && index === id-1){
      solved[index] = picdata;
      

    }
   
     console.log(picdata);
    console.log("shuffeld"+sindex);
    console.log("dropping"+index);
    // console.log(shuffled);
    //const pictureList = shuffled.filter((picture) => id === solved.indexOf(picture.id)+1);    //const pictureList = shuffled.filter((picture) => id === picture.id); 
    //console.log(pictureList)
   // setSolved((solved) => [...solved, pictureList[0]]);
  };



  
  return (
   
    <div className="App">
      <h1>JigSaw Puzzle</h1>
       <CssBaseline />
        <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh',width:'100vh' }} >

          <h1>shuffled</h1>
          <Card>
            
            {
              shuffled.map((piece)=><GridItem id={piece.id} key={piece.id} pstyle={isDropped} >
                                        <img key={piece.id} style={{width: "50px",
                                                      height: "50px",
                                                      position: "relative",
                                                      cursor:"pointer",
                                                      backgroundColor: isOver ? 'lightgray' : 'white',
                                                      transition: "transform 200ms ease, box-shadow 200ms ease"}}  
                                              src={piece.url} alt="err"
                                            ></img>
                                     </GridItem>)
            }

          </Card>

          <h1>Solution</h1>

           <Card ref={drop}>
            {
              
              pieces && solved.map((item,i)=><GridItem key={i}>
                                  <img key={i} style={{width: "50px",
                                                      height: "50px",
                                                      position: "relative",
                                                      cursor: 'pointer',
                                                      transition: "transform 200ms ease, box-shadow 200ms ease",
                                                      border:"1px solid black"}}  
                                              src={item.url} alt="err" >
                                  </img>
                      
                                  </GridItem>)
                                  
            }

          </Card>
      



               <button onClick={handleClick}>click here</button>
                
        </Box>

      </Container>
    </div>
   
  );
}

export default DragDrop;