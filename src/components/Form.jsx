import { Button, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';

const Form = ({ addTodo }) => {

    const [text, setText] = useState(null)
    const [id, setid] = useState(0);
    const todoCreate = (text) => {
        const todoObj = { id: id, text : text }
        setid( id + 1 ) 
        addTodo(todoObj)
        document.getElementById('input').value = null
        
    }
    return (
        <>
            <Paper>
                <p style={{display: 'flex', justifyContent: 'center', fontWeight: 'bold', padding: '15px'}}>Todo List</p>
            </Paper>
            <Paper style={{ padding: "1em", display: "flex", justifyContent: "center" }}>
            

                <TextField id="input" variant="standard" label="Task" onChange={(e)=>setText(e.target.value)} fullWidth/>
                <Button  variant="text" onClick={()=>todoCreate(text)}>Add</Button>
            </Paper>
        </>
        
    );
}

export default Form;
