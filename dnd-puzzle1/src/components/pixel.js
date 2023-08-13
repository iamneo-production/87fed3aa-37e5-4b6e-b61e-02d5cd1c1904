

import React from 'react';

function pixel(props) {
    return (
        <div style={{width: "50px",
                    height: "50px",
                    position: "relative",
                    cursor: "grab",
                    transition: "transform 200ms ease, box-shadow 200ms ease"}}>
            
        </div>
    );
}

export default pixel;