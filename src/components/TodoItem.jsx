import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from '@mui/material';
import EditTodoDialog from './EditTodoDialog';

export default function TodoItem({todo, todoDelete, editTodo}) {

  const [openDialog, setopenDialog] = React.useState(false);

  const dialogHandler = () => {
    setopenDialog(!openDialog)
  }
  return (
    <>
      <EditTodoDialog todo={todo} open={openDialog}  dialogHandler={dialogHandler} editTodo={editTodo}/>
    <Paper style={{marginTop: "0.5em" }} > 
      <ListItem 
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={()=>todoDelete(todo.id)}>
            <DeleteIcon />
          </IconButton>
        }
        disablePadding>
        <ListItemButton role={undefined}  dense>
          <ListItemIcon>
            <Checkbox edge="start" tabIndex={-1} disableRipple/>
        </ListItemIcon>
          <ListItemText primary={todo.text} onClick={()=>setopenDialog(true)}/>
        </ListItemButton>
      </ListItem>
    </Paper>
    </>
    
    )

  }

