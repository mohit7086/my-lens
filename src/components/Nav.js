import React, { useState } from "react";
import "./Nav.css"; // Import your CSS file
import brandIcon from "../MyLogo.png";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";

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
    <div className="navbar">
      
        <ul className="navItems ">
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

            <a href="/" style={{ paddingLeft: "25px" }}>
              MyLens
            </a>
          </li>
          <li >
            <a href="/home">Home</a>
          </li>
          <li className="dropG" onMouseEnter={handleShowDropdown} onMouseLeave={handleHideDropdown}>
            <a href="/ImgGallery">Gallery</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a
              href="https://instagram.com/mr_mohit7086?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="./contact">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="./contact">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="./contact">
              <i className="fa-solid fa-envelope"></i>
            </a>
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
