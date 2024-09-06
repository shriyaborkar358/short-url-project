import React, { useEffect, useState } from "react";
import "./Home.css";
import "./../Login/Login.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar/Navbar";

function Home() {

  const [linkData, setLinkData] = useState({
    title: "",
    target: "",
    slug: "",
    user: null
  });

  const shortenURL = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/link`, linkData);

    try{

    if (response.data.success) {
      toast.success("Link shorten successfully");

      setLinkData({
        title: "",
        target: "",
        slug: "",
        user: null
      });
      setTimeout(()=>{
        window.location.href ='/showlinks'
      } , 3000)
    } else {
      toast.error(response.data.message);
    }
  }catch(e){
    toast.error(`Failed to shorten link: ${e.message}`);
  }
  };

  useEffect(()=>{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser){
    setLinkData({...linkData,user:currentUser._id})
    }
    else{
    setTimeout(()=>{
      window.location.href="/login"
    },2000)}
  },[])

  return (
    <div className="main-container">
      <Navbar />
      <h1 className="home-heading text-center mt-4">
      Make your links manageable, with just a click.{" "}
      </h1>

      <div className="links-base-container mt-3">
        <form className="login-form d-block m-0 m-auto mt-5  rounded-2 p-3 px-5 ">
          <input
            type="text"
            placeholder="Title"
            className="login-input my-5 w-100 p-2 d-block  m-auto rounded-2"
            value={linkData.title}
            onChange={(e) => {
              setLinkData({
                ...linkData,
                title: e.target.value,
              });
            }}
          />

          <input
            type="text"
            placeholder="Target URL"
            className="login-input my-5 w-100 p-2 d-block  m-auto rounded-2"
            value={linkData.target}
            onChange={(e) => {
              setLinkData({
                ...linkData,
                target: e.target.value,
              });
            }}
          />

          <input
            type="text"
            placeholder="Slug"
            className="login-input my-5 w-100 p-2 d-block  m-auto rounded-2"
            value={linkData.slug}
            onChange={(e) => {
              setLinkData({
                ...linkData,
                slug: e.target.value,
              });
            }}
          />

          <button
            className="button px-5 py-2 rounded-2 d-block m-4 my-4 m-auto shadow-lg border-0"
            type="button"
            onClick={shortenURL}
          >
            Shorten
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default Home;
