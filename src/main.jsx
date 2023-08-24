import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Expenses from './pages/Expenses/expenses.jsx';
import Budget from './pages/Budget/budget.jsx';
import Notifications from './pages/Notifications/notifications.jsx';
import Overview from './pages/Overview/overview.jsx';
import Settings from './pages/Set/settings.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App/></div>,
  },
  {
    path: "expenses",
    element: <div><Expenses/></div>,
  },
  {
    path: "/budget",
    element: <div><Budget/></div>,
  },
  {
    path: "notifications",
    element: <div><Notifications/></div>,
  },
  {
    path: "overview",
    element: <div><Overview/></div>,
  },
  {
    path: "settings",
    element: <div><Settings/></div>,
  },
  
  

]);     




ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router= {router}/>
)
