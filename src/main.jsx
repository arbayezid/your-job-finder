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
import Navbar from './components/Header/Navbar';
import Banner from './components/Header/Banner';
import JobDetails from './components/FeaturedJobDetails/JobDetails';
import FeatureList from './components/FeatureList/FeatureList';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import { getAllJobs } from './loader/getCart&JobList';
import AppliedJobList from './components/AppliedJobList/AppliedJobList';
import AssignmentMarkChart from './components/AssignmentMarkChart/AssignmentMarkChart';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('featureList.json')
      },
      {
        path: '/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch(`/featureList.json`)
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: getAllJobs
      },
      {
        path: '/:id',
        element: <AppliedJobList></AppliedJobList>
      },
      {
        path: '/statistics',
        element: <AssignmentMarkChart></AssignmentMarkChart>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
      
    ]

  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
