import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Books from './Components/Books';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books',
        element: <Books></Books>
      },
      {
        path: 'about',
        element: <About></About>
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
