
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from './Card';
import React,{ useEffect, useState,useContext } from "react";
import { getimage } from '../services/image-service';
import GridItem from './GridItem';
import {useDrop } from "react-dnd";
import "../App.css"
import Button from '@mui/material/Button';
import Alerts from './alert';
import UserContext from './store/userContext';
import Cookies from 'js-cookie';



function DragDrop() {

  const styles = {
    container: {
      backgroundColor: '#cfe8fc',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
    },
    card: {
      width: '100%',
      maxWidth: '800px',
    },
    submitButton: {
      marginTop: '1rem',
      width: '100%',
    },
  };
  
  const mediaQueries = {
    small: '@media (max-width: 600px)', // Adjust the breakpoint as needed
  };

  const [pieces,setPieces] = useState([]);
  const[shuffled,setShuffled] = useState([]);
  const [dummy,setDummy] = useState({});
  const[solved,setSolved] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSubmitClicked,setIsSubmitClicked] = useState(false);
  const{user,updateUser} = useContext(UserContext);

  

  useEffect(()=>{

    getimage(1).then(res=>setPieces(res.pieces));
    getimage(2).then(res=>setDummy(res));
    
    
  },[]);

  const dummyData = pieces.map((_, index) => ({sid:index,...dummy}));

  useEffect(()=>{
                                // console.log(pieces);
    setShuffled(shufflePieces([...pieces]));
                                //pieces.map((item,i)=>{return solved[item.id-1] = {"sid":i,...dummy}});
                                // console.log(dummyData);
    setSolved(dummyData);

  },[pieces]);
 


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
     drop: (item,monitor)=>
                            {
                                const mousePosition = monitor.getClientOffset();
                                let droppingIndex = 0;
                               
                                if (mousePosition) {
                                  const gridX = Math.floor(mousePosition.x / cellSize);
                                  const gridY = Math.floor(mousePosition.y / cellSize);
                                  // Calculate the dropping index
                                  droppingIndex = gridY * numColumns + gridX -46;
                                }
                                // setIsDropped(true);
                                //addImageToBoard(item.id,droppingIndex);
                                 addImageToBoard(item,droppingIndex);
                                
                           },
    
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  

  const addImageToBoard = (item,index) => {
    console.log(item,index);
    // const picdata = shuffled.find((p)=>p.id === item.id);
    // console.log(picdata);
    // let sindex = shuffled.findIndex((i)=>i.id === item.id);
    // console.log(sindex);

   
    if( index>=0 && index === item.id-1){
      //solved[index] = item;
          setSolved((prevSolved) => {
          const updatedSolved = [...prevSolved];
          updatedSolved[index] = item;
          return updatedSolved;
        });
        //console.log(solved);
      

    }

  
  };

  const hideAlert=()=>{
    setIsSubmitClicked(false);
  }


  const handleSubmit =()=>{
     setIsSubmitClicked(true);
     console.log(solved);
    if(pieces === solved){
        setIsCorrect(true);
       
    }
  }

  const handleLogout = ()=>{
    updateUser({});
    Cookies.remove('user');
    

  }
  


  if(user || (Cookies.get('user'))){
  return (
   
    <div className="jigsaw" sx={styles.container}>
      <Button variant="contained" color='secondary' onClick={handleLogout} href='/' >Logout</Button>
      <h2>JigSaw Puzzle</h2>
       <CssBaseline />
        <Container maxWidth="sm" sx={{ ...styles.card, ...mediaQueries.small }}>
        <Box sx={styles.container} >

          {isSubmitClicked && <div> {isCorrect ?<Alerts severity ={'success'} title={'Correct'} Clicked={isSubmitClicked} onCloseClick ={hideAlert}>Congratulations you have won  </Alerts>:
                                              <Alerts severity ={'error'} title={'Incorrect'}  Clicked={isSubmitClicked} onCloseClick = {hideAlert}>Please try Again  </Alerts>}
                        </div>}

          <h2>shuffled</h2>
          <Card>
            
            {
              shuffled.map((piece)=><GridItem id={piece.id} key={piece.id}  over={isOver} >
                                        <img key={piece.id} style={{width: "50px",
                                                      height: "50px",
                                                      position: "relative",
                                                      cursor:"pointer",
                                                      transition: "transform 200ms ease, box-shadow 200ms ease"}}  
                                              src={piece.url} alt="err"
                                            ></img>
                                     </GridItem>)
            }

          </Card>

          
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
          <h2>Solution</h2>
       <Button variant="contained" onClick={handleSubmit} >submit</Button>

                
        </Box>

      </Container>
    </div>
   
  );
}
else{
  return(<>
          <Alerts severity ={'error'} title={'Not LoggedIn'}  Clicked={true} onCloseClick = {hideAlert}>You Are not Logged in..Please Login  </Alerts>
          <Button variant="contained" href='/' >Login</Button>
          </>
    
  )
}
}


export default DragDrop;