import React from 'react';
import { useDrag } from 'react-dnd';
const rows = 4;
const columns = 4;

const matrix = Array(rows).fill().map(() =>Array(columns).fill(0));

function Pieces(props){
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));
  return(
    matrix.map((item,index)=>{
      return(
      <div>
          {item.map((subItem,subIndex)=>
             <div 
                className="pieces"
                style={props.flag?{
                position:"absolute",
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                left:Math.floor((Math.random()*290))+ "px",
                top:Math.floor((Math.random()*290))+ "px",
                }:{backgroundPositionX:-100*subIndex,backgroundPositionY:-100*index}}>
             </div>
          )}
       </div>
       );
   })
  )
}
function setBorder(){
  grid.map((i)=>{
    return(
      <div>
       {i.map(()=>
         <div 
           className="pieces"
           style="background-image:none">
         </div>
       )}
      </div>
    );
  });

}
export default Pieces;