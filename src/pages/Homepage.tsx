import { Listeitem } from "../components/ListItem/Listeitem"
import { ComponentProps } from "../models/component-props"
import { ToDo } from "../models/todo-item"

export const Homepage = ({todos}: ComponentProps) => {
    return (
        <div className='container'>
        {
            todos.map((todo: ToDo) =>{
                return <Listeitem todo={todo} key={todo.id} />
                
            })
        }
        </div>
    )
}