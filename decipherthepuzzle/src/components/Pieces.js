import React from 'react';

function Pieces(props){
   
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