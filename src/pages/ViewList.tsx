import { useSelector } from "react-redux"
import { Listeitem } from "../components/ListItem/Listeitem"
import { ToDo } from "../models/todo-item"
import { RootState } from "../store"
 

export const ViewList = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    return (
        <div className='container'>
        {
            todoList.map((todo: ToDo) =>{
                return <Listeitem todo={todo} key={todo.id} />
                
            })
        }
        </div>
    )
}