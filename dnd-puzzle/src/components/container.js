import React from "react";
import Container from "@mui/material/Container";

const Card =(props)=>{
    return <Container maxWidth="sm">
                {props.children}
            </Container>
}

export default Card;
