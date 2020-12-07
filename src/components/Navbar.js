import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
//
import './Navbar.css'

//
import {Button} from './Button'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  const handleClick = () => {
    setClick(!click);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <MdFingerprint className="navbar-icon" />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-liks">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-liks">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-liks">
              Products
            </Link>
          </li>
          <li className="nav-btn">
            {button ? (
              <Link to="/sign-up" className="but-link">
                <Button buttonStyle="btn-outline">Sign Up</Button>
              </Link>
            ) : (
              <Link to="/" className="but-link">
                <Button buttonStyle="btn-outline" buttonSize='btn--mobile'>Sign Up</Button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
