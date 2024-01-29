import React, { useState } from "react";
import "./Nav.css"; // Import your CSS file
import brandIcon from "../MyLogo.png";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
      
        <ul className="navItems1 ">
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

            <Link to="/" style={{ paddingLeft: "25px" }}>
              MyLens
            </Link>
          </li>
          <li >
            <Link to="/Home">Home</Link>
          </li>
          <li className="dropG" onMouseEnter={handleShowDropdown} onMouseLeave={handleHideDropdown}>
            <a href="/ImgGallery">Gallery</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
            <Link to="./contact">
              <i className="fa-brands fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link to="./contact">
              <i className="fa-solid fa-envelope"></i>
            </Link>
          </li>
        </ul>

      
    </div>

    {showDropdown ? (<div className="drop" onMouseOver={handleShowDropdown} onMouseLeave={handleHideDropdown}>
    <Dropdown/>
    </div>) : null}
    
</div>


    </>
  );
};

export default Nav;
