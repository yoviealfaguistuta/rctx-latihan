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

const router = createBrowserRouter([
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
