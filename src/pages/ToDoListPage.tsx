import { Form } from "../components/Form/Form"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"
import { useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([ ])

    const createNewToDo = (text: string) => {
        const notify = () => toast("Сoздано")
        notify() 
        const newTodo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false
        }
        setTodos([...todos, newTodo])
    }
    const updateToDo = (todoItem: ToDo) => {   
        const notify = () => toast("Изменено")
        notify()   
        const newTodos = todos.map((todo) => {
            if (todo.id === todoItem.id) {
                todo.isDone = !todo.isDone
            }
            return todo
        })
        setTodos(newTodos)

    }
    
    const deleteToDo = (todoItem: ToDo) => {  
        const notify = () => toast("Удалено")
        notify()
        const newTodos = todos.filter((todo) => todo.id !== todoItem.id)
        setTodos(newTodos)
    }
    return (
        <>           
            <Form createNewToDo={createNewToDo} />          
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
            <ToastContainer />  
            
        </>
    )
}
