import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodoDialog({open, dialogHandler, todo, editTodo}) {

  
  const [dialogText, setdialogText] = React.useState(todo.text);

  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialogHandler}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Editing Text..."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TextField defaultValue={todo.text} onChange={(e)=>setdialogText(e.target.value)}/>
          </DialogContentText>
        </DialogContent> 
        <DialogActions>
          <Button onClick={dialogHandler}>Cancel</Button>
          <Button onclick={editTodo( todo.id, dialogText )}>Ok</Button>
        </DialogActions>
      </Dialog>
  );
}
