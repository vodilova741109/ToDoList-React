import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import {ToDoListPage} from './pages/ToDoListPage'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';
import { Layouts } from './Layouts/Layout';

const todos: ToDo[] = [
  {
    id: 0,
    text: 'Первое задание', 
    isDone: false
  },
  {
    id: 1,
    text: 'Второе задание', 
    isDone: true
  },
  {
    id: 2,
    text: 'Третье задание', 
    isDone: false
  },
   {
    id: 3,
    text: 'Четвертое задание', 
    isDone: true
  }
] 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    errorElement: < NotFound/>,
    children: [
      {
        path: '/',
        element: <Homepage todos={todos}/> 
      },
      {
        path: '/todo',
        element: <ToDoListPage/>
      },
      {
        path: '/list/:id',
        element: <ItemDescription todos={todos}/>
      }     
    ]
  },  
  {
    path: '/',
    element: < NotFound/>
  }
  
], {basename: '/app/'})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>  
    <RouterProvider router={router}/> 
  </React.StrictMode>
);
