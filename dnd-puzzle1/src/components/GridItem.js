import React from 'react';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import { useDrag } from "react-dnd";

function GridItem(props) {

 
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "DRAGGABLE_ITEM",
    item: { id: props.id },
    end:(item,monitor)=>{
      const dropresult = monitor.getDropResult();
      
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

   const cursorStyle = props.pstyle ? 'not-allowed' : isDragging ? 'grabbing' : 'grab';
    return <>
              <Grid item xs={1.5}  ref={drag} > 

                  <ImageListItem  style={{
                                        cursor: cursorStyle,
                                        opacity: isDragging ? 0.5 : 1,
                                        width: '50px',
                                        height: '50px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        border: '1px solid gray',
                                      }} >
                      {props.children}
                  </ImageListItem>
                  
              </Grid>
          </>
}

export default GridItem;