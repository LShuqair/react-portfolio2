import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="navbar-brand" >
       <Link id="link" to="/" 
              className ={
                window.location.pathname === "/" || window.location.pathname === "/me"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Luna Shuqair
            </Link>
            </div>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
       
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portforlio"
              className={window.location.pathname === "/portforlio" ? "nav-link active" : "nav-link"}
            >
              Portforlio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
            >
             Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
