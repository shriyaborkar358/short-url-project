import React, { useEffect, useState } from "react";
import "./Navbar.css";
import LinkImg from "./link-icon.png";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import MenuIcon from "./menu.png";

function Navbar() {
  const [user, setUser] = useState({});
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const logouthandel = () => {
    localStorage.clear();
    toast.success("User Logout successfully");
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  };
  return (
    <div className="navbar-main-container">
      <div className="logo-container">
        <img src={LinkImg} className="logo-icon" />
        <span className="log-name">Shortify </span>
      </div>

      <img
        src={MenuIcon}
        className="menu-icon"
        onClick={toggleMenu}
        alt="Menu"
      />

      <div className={`search-item-container ${menu ? "active" : ""}`}>

      <Link to="/" className="search-item" onClick={toggleMenu}>
      Home
        </Link>

        <Link to="/" className="search-item" onClick={toggleMenu}>
          Add Links
        </Link>

        <Link to="/showlinks" className="search-item" onClick={toggleMenu}>
          My Links
        </Link>
        {user.fullName ? (
          <>
            <span className="search-item-logout" onClick={logouthandel}>
              Logout
            </span>
          </>
        ) : (
          <Link to="/login" className="search-item" onClick={toggleMenu}>
            Login
          </Link>
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default Navbar;

