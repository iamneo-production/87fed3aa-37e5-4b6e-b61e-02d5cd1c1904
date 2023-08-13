import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function Alerts(props) {
  return (
  
      <Alert severity={props.severity}>
        <AlertTitle>{props.title}</AlertTitle>
        {props.children}<strong>check it out!</strong>
      </Alert>
  
  );
}