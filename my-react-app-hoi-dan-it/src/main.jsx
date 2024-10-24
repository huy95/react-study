import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/todo/App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <div style={{color: "blue", backgroundColor: "red"}}>login app</div>,
  },
  {
    path: "/register",
    element: <div>register app</div>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
