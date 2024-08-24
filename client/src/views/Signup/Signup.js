import axios from "axios";
import React, { useState } from "react";
import "./../Login/Login.css";
import Navbar from "./../../components/Navbar/Navbar"
import { Link } from "react-router-dom";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

  const signupNow = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/signup`,
      {
        fullName: fullName,
        email: email,
        password: password,
        dob: dob,
      }
    );
  };

  return (
    <div>
      <Navbar />
      <form className="login-form d-block m-0 m-auto my-5 rounded-2 p-3 px-5 ">
        <h1 className=" text-center mt-2 text-light">User Registration</h1>
        <input
          type="text"
          className="login-input my-4 w-100 p-2 d-block m-4 m-auto"
          placeholder="Enter Fullname"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />

        <input
          type="email"
          className="login-input my-4 w-100 p-2 d-block m-4 m-auto"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          className="login-input my-4 w-100 p-2 d-block m-4 m-auto"
          placeholder="Enter password"
          value={password}
          onCanPlay={(e) => {
            setPassword(e.target.value);
          }}
        />

        <input
          type="date"
          className="login-input my-4 w-100 p-2 d-block m-4 m-auto"
          placeholder="Enter DOB"
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />
        <button
          type="button"
          className="button px-5 py-2 rounded-2 d-block m-4 my-5 m-auto shadow-lg border-0"
          onClick={signupNow}
        >
          Register
        </button>
        </form>

        <Link
        to="/login"
        className="go-to-link fs-4 d-block text-center my-20 mx-auto text-light"
      >
        Already have an Account ? Signup
      </Link>
      
    </div>
  );
}

export default Signup;
