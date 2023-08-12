import React from 'react';

function Pieces(props){
    return(
       <div>
        <img alt="piece" src={props.image}/>
       </div>
    );

}
export default Pieces;