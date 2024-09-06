import React, { useState,useEffect} from "react";
import Navbar from "./../../components/Navbar/Navbar";
import "./../Login/Login.css";
import "./../../index.css"
import "./Showlinks.css"
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import LinkCard from "./../../components/LinkCard/LinkCard";

function Login() {
  const [links, setLinks] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      setUser(currentUser);
    }

    if (!currentUser) {
      window.location.href = "/login";
    }
  }, []);

  const loadLinks = async () => {
    if (!user._id) {
      return;
    }
    toast.loading("Loading links...");

    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/links?userId=${user._id}`
    );

    const allLinks = response.data.data;
    toast.dismiss();

    setLinks(allLinks);
  };

  useEffect(() => {
    loadLinks();
  }, [user]);
  return (
    <div>
      <Navbar />

      <div className="links-container mt-5 ">
        <h2 className=" heading text-center"> 🔗 All Links 🔗</h2>

        <div className="all-links-container ">
          {links.map((link) => {
            const { _id, title, target, slug, views, createdAt } = link;

            return (
              <LinkCard
                key={_id}
                _id={_id}
                title={title}
                target={target}
                slug={slug}
                views={views}
                createdAt={createdAt}
              />
            );
          })}
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Login;
