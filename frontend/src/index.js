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
import { ListItem } from './item/List';
import Create from './item/Create';
import Update from './item/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },{
    path: "/item/:id",
    element: <ListItem />,
  },
  {
    path: "/item/create",
    element: <Create />,
  },

  {
    path: "/item/Update",
    element: <Update />,
  },

]);
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
