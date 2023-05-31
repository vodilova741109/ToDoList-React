import { Header } from "../components/Header/Header"
import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"
import { useState } from "react"




export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([ ])

    const createNewToDo = (text: string) => {
        const newTodo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false
        }
        setTodos([...todos, newTodo])
    }
    const updateToDo = (todoItem: ToDo) => {      
        const newTodos = todos.map((todo) => {
            if (todo.id === todoItem.id) {
                todo.isDone = !todo.isDone
            }
            return todo
        })
        setTodos(newTodos)

    }
    const deleteToDo = (todoItem: ToDo) => {    
        const newTodos = todos.filter((todo) => todo.id !== todoItem.id)
        setTodos(newTodos)

    }
   
    return (
        <>  
            <Header />
            <Form createNewToDo={createNewToDo} />          
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
            
        </>
    )
}
