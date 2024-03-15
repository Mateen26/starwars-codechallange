import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { List, XCircle } from "react-bootstrap-icons";
import logo from "../../assets/images/star-wars.svg";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link to={"./"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            {!showNavbar ? (
              <List color="white" className="icon-setting" size={25} />
            ) : (
              <XCircle color="white" className="icon-setting" size={25} />
            )}
          </div>
          <div className={`nav-links  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/peopls">People</NavLink>
              </li>
              <li>
                <NavLink to="/films">Films</NavLink>
              </li>
              <li>
                <NavLink to="/starships">Starships</NavLink>
              </li>
              <li>
                <NavLink to="/vehicles">Vehicles</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
