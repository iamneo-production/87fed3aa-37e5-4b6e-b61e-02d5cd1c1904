import React from 'react';
import { useDrop } from 'react-dnd';

const rows = 4;
const columns = 4;

const dropArea = Array(rows).fill().map(() =>Array(columns).fill(0));

function DropPieces(){
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "div",
        drop: ()=>getPiece(),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      }),[])
    const getPiece=()=>{

    }
  return(
    dropArea.map((items,index)=>{
      return(
      <div>
          {items.map((subItem,subIndex)=>
             <div 
                className="dropPieces"
                ref={drop}
                style={isOver?{
                  position: 'absolute',
                  zIndex: 1,
                  opacity: 0.5,
                  backgroundColor: 'yellow',}:null}
              >
             </div>
          )}
       </div>
       );
   })
  )
}

export default DropPieces;