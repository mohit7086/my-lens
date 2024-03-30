import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css"; // Import your CSS file
import brandIcon from "../MyLogo.png";
import Dropdown from "./Dropdown";
import close from "../close.png";
import dock1 from "../dock.png";
import up from "../up.png";
import down from "../down.png";

const Nav = () => {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 768);
      // setToggle(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleShowDropdown = () => {
    setShowDropdown(true);
  };
  const dropdownStyle = {
    transform:
      !isPhone && showDropdown ? "translateY(-0.5%)" : "translateY(-15%)",
    opacity: !isPhone && showDropdown ? 1 : 0,
    transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
  };
  const handleHideDropdown = () => {
    setShowDropdown(false);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const navAllStyle = {
    
    ...(isPhone && {
      transition: "background-color 0.2s ease-in-out",
      background: toggle
        ? "linear-gradient(to right,#000000 , transparent)"
        : "none",
      backgroundSize: "200% 100%",
      // backgroundPosition: "right",
      backgroundColor: toggle ? "#000000" : "transparent",
      height: toggle ? "100vh" : "0",
  })
};

  const navItemsStyle = {
    ...(isPhone && {
      height: toggle ? "100vh" : "0",
    }),
  };

  const navItems1Style = {
    ...(isPhone && {
      transition: "transform 0.6s ease-in-out, opacity 0.4s ease-in-out",
      transform: toggle ? "none" : "translateX(-100%)",
      opacity: toggle ? 1 : 0,
      height: toggle ? "100vh" : "20vh",
    }),
  };

  const topIcons = {
    ...(isPhone && {
      
    }),
  };

  const dropGstyle = {
    ...(isPhone && {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      // left: "10%",
    }),
  };

  const socialStyle = {
    ...(isPhone && {
      opacity: toggle ? 1 : 0,
      transform: toggle ? "translateY(-2%)" : "translateY(-40%)",
      transition: " opacity 1.5s ease-in-out, transform 1.5s ease-in-out",
    }),
  };

  const liElements = document.querySelectorAll(".navItems1 li");
  liElements.forEach(li => {
    if (isPhone) {
      li.style.opacity = toggle ? 1 : 0;
      li.style.transform = toggle ? "translateY(-1%)" : "translateY(-30%)";
      li.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
    } else {
      li.style.opacity = "";
      li.style.transform = "";
      li.style.transition = "";
    }
    
  });
  
 

 


  


  return (
    <>
      <div className="navAll" style={navAllStyle}>
        <div className="navbar1">
          <ul className="topIcons" style={topIcons}>
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
              <Link to="/"></Link>
            </li>
            <li
              className={toggle ? "activeT" : "not-activeT"}
              onClick={handleToggle}
            >
              <img
                src={toggle ? close : dock1}
                alt="dock"
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  height: "35px",
                  width: "35px",
                }}
              />
            </li>
          </ul>
          <div className="navItems" style={navItemsStyle} >
            <ul
              className="navItems1"
              style={navItems1Style}
              onClick = {() => setToggle(false)}
              
            >
              <li >
                <Link
                  className={
                    window.location.pathname === "/Home" ? "active" : ""
                  }
                  to="/Home"
                >
                  Home
                </Link>
              </li>
              <li
                className="dropG"
                onMouseEnter={handleShowDropdown}
                onMouseLeave={handleHideDropdown}
                style={dropGstyle}
              >
                <Link
                  className={
                    window.location.pathname.startsWith("/ImgGallery")
                      ? "active"
                      : ""
                  }
                  to="/ImgGallery"
                >
                  Gallery
                </Link>
                <img src={toggle ? up : down} alt="up" style={{ display: !isPhone ? "none" : "" }} />
              </li>
              <li>
                <Link
                  className={
                    window.location.pathname === "/about" ? "active" : ""
                  }
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={
                    window.location.pathname === "/contact" ? "active" : ""
                  }
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <ul className="socials" style={socialStyle}>
                <li>
                  <Link
                    to="https://instagram.com/mr_mohit7086?igshid=OGQ5ZDc2ODk2ZA=="
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
            </ul>
          </div>
        </div>

        {
          <div
            className="drop"
            onMouseOver={handleShowDropdown}
            onMouseLeave={handleHideDropdown}
            style={{...dropdownStyle,height:"200px",backgroundColor:"red",padding:"30px"}}
          >
            <Dropdown />
          </div>
        }
      </div>
    </>
  );
};

export default Nav;
