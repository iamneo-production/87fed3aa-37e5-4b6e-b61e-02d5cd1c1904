
import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export default function Alerts(props) {
  const [open, setOpen] = React.useState(props.Clicked);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert severity={props.severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={props.onCloseClick}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle>{props.title}</AlertTitle>
         {props.children}<strong>check it out!</strong>
        </Alert>
      </Collapse>
    </Box>
  );
}