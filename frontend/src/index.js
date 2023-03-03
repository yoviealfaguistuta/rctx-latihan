import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import List  from './item/List';
import Create from './item/Create';
import Update from './item/Update';

 

import { List } from './todo/List';
import  Create from './todo/Create';
import  {Update}  from './todo/Update';
import { ListItem } from './item/List';

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
  {
    path: "/item/list/:id",
    element: <ListItem />,
  },
  {
    path: "/item/list",
    element: <List/>,
  },
// {
//   path: "/todo/:create",
//   element:<Create/>,
// },
  {
    path: "/item/create",
    element: <Create/>,
  },

  {
    path: "/item/Update",
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
