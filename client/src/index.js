import React from "react"
import ReactDOM from "react-dom/client";
import "./index.css"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from "./views/Home/Home"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./views/Login/Login"
import Signup from "./views/Signup/Signup"
import Showlinks from "./views/Showlinks/Showlinks";
import Frontpage from "./views/Frontpage/Frontpage";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home/>
  },
  {
    path:"/navbar",
    element: <Navbar/>
  },
  {
    path:"/footer",
    element: <Footer/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/showlinks",
    element: <Showlinks/>
  },
  {
    path: "/Home",
    element: <Frontpage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
