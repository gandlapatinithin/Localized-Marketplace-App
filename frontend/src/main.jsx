import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateListing from './pages/CreateListing';
import ListingDetails from './pages/ListingDetails';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "create",
        element: <CreateListing />
      },
      {
        path: "listing/:id",
        element: <ListingDetails />
      },
      {
        path: "*",
        element: <ErrorBoundary />
      }
    ]
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});
// src/main.jsx (or index.js)  – place ABOVE ReactDOM.createRoot
document.documentElement.setAttribute('data-theme', 'dark');
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
