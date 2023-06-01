import { Link } from "react-router-dom"
import { ToDo } from "../../models/todo-item"
import classes from './Listeitem.module.scss'

export const Listeitem = ({ todo }: { todo: ToDo }) => {
    return (
        <Link className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}
            to={`/list/${todo.id}`}
        >{todo.text}</Link>

    )
}