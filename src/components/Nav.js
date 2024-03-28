import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css"; // Import your CSS file
import brandIcon from "../MyLogo.png";
import Dropdown from "./Dropdown";
import { useEffect } from "react";

const Nav = () => {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdown = () => {
    setShowDropdown(true);
  };
  
  const handleHideDropdown = () => {
    setShowDropdown(false);
  };

  

  return (
    <>
      <div className="navAll">
        <div className="navbar1">
          <ul className="navItems1">
            <li className="BrandIcon">
              <img
                src={brandIcon}
                style={{
                  position: "relative",
                  height: "35px",
                  width: "35px",
                }}
                alt="Brand Icon"
                className="brand-icon"
              />

              <Link
                
                to="/"
                // style={{ paddingLeft: "25px" }}
              >
                MyLens
              </Link>
            </li>
            <li>
              <Link
                className={window.location.pathname === "/Home" ? "active" : ""}
                to="/Home"
              >
                Home
              </Link>
            </li>
            <li className="dropG" onMouseEnter={handleShowDropdown} onMouseLeave={handleHideDropdown}>
              <Link
                className={window.location.pathname.startsWith("/ImgGallery")  ? "active" : ""}
                to="/ImgGallery"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className={window.location.pathname === "/about" ? "active" : ""}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={window.location.pathname === "/contact" ? "active" : ""}
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
            <Link to="https://instagram.com/mr_mohit7086?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link to="./contact">
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </li>
          <li>
            <Link  to="./contact">
              <i className="fa-brands fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link  to="./contact">
              <i className="fa-solid fa-envelope"></i>
            </Link>
          </li>
          </ul>
        </div>

        {showDropdown && (
          <div
            className="drop"
            onMouseOver={handleShowDropdown}
            onMouseLeave={handleHideDropdown}
          >
            <Dropdown />
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
