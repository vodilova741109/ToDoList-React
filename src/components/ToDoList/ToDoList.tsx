import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import { ToDo } from "../../models/todo-item"
import { TodoListCompleted, TodoListContainer, TodoListFailed } from "./ToDoList.styled"

export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function,  }) => {
    const checkedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item) => {
                return (
                    <ToDoListItem 
                    toDoItem={item} 
                    key={item.id} 
                    updateToDo={props.updateToDo} 
                    deleteToDo={props.deleteToDo} 
                    />
                )
            })
    }
    const unCheckedList = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item) => {
                return (
                    <ToDoListItem 
                    toDoItem={item} 
                    key={item.id} 
                    updateToDo={props.updateToDo} 
                    deleteToDo={props.deleteToDo} 
                    />
                )
            })
    }    
    return (
        <TodoListContainer>
            <TodoListFailed >
                {checkedList()}
            </TodoListFailed>
            <TodoListCompleted  >
                {unCheckedList()}
            </TodoListCompleted>
        </TodoListContainer>
    )
}