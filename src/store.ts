import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todolist'
import todoForm from './feature/formtext'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'
import themeReducer from './feature/themeList'

export const store = configureStore({
    reducer: {
        todoList: todoReducer,
        formText: todoForm,
        themeList: themeReducer,
    },
    preloadedState:  loadFromLocalStorage()
  
})

store.subscribe(() => saveToLocalStorage(store.getState()))


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch