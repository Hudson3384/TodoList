import React, { useState } from 'react';
import { List } from '@mui/material'
import { Container } from '@mui/system'
import TodoItem from '../components/TodoItem'
import Form from '../components/Form'

export default function Home () {
    
         const [Todos, setTodos] = useState([1,2,3,4]);
         const addTodo = (todo) => (setTodos([...Todos, todo]))
    return (
        <Container maxWidth="xs" style={{ marginTop: "1em", padding: "1em" }}>
            <Form addTodo={addTodo}/>
                <List sx={{ width: '100%'}}>
                    {Todos.map((todo)=>(
                        <TodoItem key={todo.id} todo={todo}/>                    
                    ))}
                </List>                                                                                                                                                             
       </Container>
    );
    }