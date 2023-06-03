import { ToDo } from '../../../models/todo-item'
import { TodoItem, TodoItemControl, TodoItemControls, TodoItemText } from './ToDoListItem.styled';
import trashIcon from '../../../assets/images/trash.png'
import checkIcon from '../../../assets/images/check.png'
import uncheckIcon from '../../../assets/images/uncheck.png'



export const ToDoListItem = (props: { toDoItem: ToDo,  updateToDo: Function, deleteToDo: Function}) => {
  
    return (
        <TodoItem >
            <TodoItemText>{props.toDoItem.text}</TodoItemText>
            <TodoItemControls>
           <TodoItemControl 
                icon={ trashIcon}             
                onClick={() => {props.deleteToDo(props.toDoItem);}}          
               
                ></TodoItemControl>
                <TodoItemControl 
                icon={props.toDoItem.isDone ? checkIcon : uncheckIcon}
                onClick={() =>{props.updateToDo(props.toDoItem)}}
                ></TodoItemControl>
           </TodoItemControls>   
          
              
        </TodoItem>
    )
}