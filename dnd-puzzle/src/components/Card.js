
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Box from '@mui/material/Box';
import { forwardRef } from 'react';




const Card =forwardRef((props,ref)=>{

    const drop =ref;
    return <Box sx={{ width: "400px",padding:'0',margin:'10px auto',border: '2px solid #DDD',borderColor:'blue' }} ref={drop}>
                    <Grid container >
                          {props.children}
                    </Grid>
                
            </Box>
})

export default Card;