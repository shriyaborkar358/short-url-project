import React, { useState } from "react";
import Navbar from "./../../components/Navbar/Navbar"
import "./Login.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginNow = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/login`,
      {
        email: email,
        password: password,
      }
    );

    if (response.data.success) {
      toast.success(response.data.message);

      localStorage.setItem("currentUser", JSON.stringify(response.data.data));

      toast.loading("Redirecting To dashboard");

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    
    <div>

<Navbar/>
      
      <form className="login-form d-block m-0 m-auto my-5 rounded-2 p-3 px-5 ">

      <h1 className=" text-center mt-2 text-light">User Login</h1>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          className="login-input my-5 w-100 p-2 d-block m-4 m-auto"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          className="login-input my-4 w-100 p-2 d-block m-4 m-auto"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          type="button"
          className="button px-5 py-2 rounded-2 d-block m-4 my-5 m-auto shadow-lg border-0"
          onClick={loginNow}
        >
          Login
        </button>
      </form>

      <Link
        to="/signup"
        className="go-to-link fs-4 d-block text-center my-20 mx-auto text-light"
      >
        Don't have an Account ? Login
      </Link>
      <Toaster />
    </div>
  );
}

export default Login;
