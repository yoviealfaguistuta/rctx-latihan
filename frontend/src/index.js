import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { List } from './todo/List';
import  {Create}  from './todo/Create';
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
    path: "/update",
    element: <Update />,
  },
  {
    path: "/item/:id",
    element: <ListItem />,
  },
// {
//   path: "/todo/:create",
//   element:<Create/>,
// },

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
