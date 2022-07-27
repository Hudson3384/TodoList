import React, { useState } from 'react';
import { List } from '@mui/material'
import { Container } from '@mui/system'
import TodoItem from '../components/TodoItem'
import Form from '../components/Form'

export default function Home () {
    
         const [Todos, setTodos] = useState([]);

         const addTodo = (todo) => (setTodos([...Todos, todo]))

         const todoDelete = (id) => {
           const filtered = Todos.filter((todo)=> todo.id !== id)
           setTodos(filtered)
        }

        const editTodo = (id, editedText) => {
            var todosArray = Todos;
        
            for (var i in todosArray) {
              if (todosArray[i].id == id) {
                todosArray[i].text = editedText;
              }
            }
            setTodos(todosArray);
          };
        
    return (
        <Container maxWidth="xs" style={{ marginTop: "1em", padding: "1em" }}>
            <Form addTodo={addTodo}/>
                <List sx={{ width: '100%'}}>
                    {Todos.map((todo)=>(
                        <TodoItem key={todo.id} todo={todo} todoDelete={todoDelete} editTodo={editTodo} />                    
                    ))}
                </List>                                                                                                                                                             
       </Container>
    );
    }