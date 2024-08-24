import React from "react"
import ReactDOM from "react-dom/client";
import "./index.css"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./views/Home/Home"
import Navbar from "./components/Navbar/Navbar";
import Login from "./views/Login/Login"
import Signup from "./views/Signup/Signup"

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home/>
  }
  ,{
    path:"/navbar",
    element: <Navbar/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
