import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDo } from '../models/todo-item'
import { toast } from 'react-toastify'

export interface TodoState {
  todos: ToDo[]
}

const initialState: TodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
        const notify = () => toast("Сoздано")
        notify() 
        const newTodo: ToDo = {
            id: state.todos.length,
            text: action.payload,
            isDone: false
        }
        state.todos =[...state.todos, newTodo]
 
    },
    updateAction: (state, action: PayloadAction<ToDo>) => {
        const notify = () => toast("Изменено")
        notify()   
        const newTodos = state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
                todo.isDone = !todo.isDone
            }
            return todo
        })
        state.todos = newTodos

    },
    deleteAction: (state, action: PayloadAction<ToDo>) => {
        const notify = () => toast("Удалено")
        notify()
        const newTodos = state.todos.filter((todo) => todo.id !== action.payload.id)
        state.todos = newTodos
    
    },
    submitAction: (state, action: PayloadAction<string>) => {      
     
      const newTodo: ToDo = {
          id: state.todos.length,
          text: action.payload,
          isDone: false
      }
      state.todos =[...state.todos, newTodo]

  },
  },
})




export const { createAction, updateAction, deleteAction} = todoSlice.actions

export default todoSlice.reducer