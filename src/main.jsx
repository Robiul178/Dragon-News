import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componants/Root/Root.jsx';
import Home from './Componants/Home/Home.jsx';
import Login from './Componants/Pages/Login/Login.jsx';
import Registration from './Componants/Pages/Register/Registration.jsx';
import AuthProvider from './Componants/AuthProvider/AuthProvider.jsx';
import NewsDetails from './Componants/Pages/NewsDetails/NewsDetails.jsx';
import PrivetRoute from './Componants/PrivetRoute/PrivetRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/news.json')
      },
      {
        path: '/news/:id',
        element: <PrivetRoute>
          <NewsDetails></NewsDetails>
        </PrivetRoute>
        // loader: () => fetch('news.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
