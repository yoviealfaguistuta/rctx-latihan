import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Create from './item/Create';
import Update from './item/Update';

 

import { List as TodoList} from './todo/List';
import  {Create as TodoCreate} from './todo/Create';
import  {Update as TodoUpdate}  from './todo/Update';
import List from './item/List';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoList />,
  },
  {
    path: "/create",
    element: <TodoCreate />,
  },
  {
    path: "/update/:id",
    element: <TodoUpdate />,
  },
  {
    path: "/item/list/:id",
    element: <List />,
  },
// {
//   path: "/todo/:create",
//   element:<Create/>,
// },
  {
    path: "/item/create/:id",
    element: <Create/>,
  },

  {
    path: "/item/update/:id",
    element: <Update/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  // <List />
  <RouterProvider router={router} />

  // </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
