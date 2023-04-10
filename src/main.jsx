import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layouts/Main';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,

  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
