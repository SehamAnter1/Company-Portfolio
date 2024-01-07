import React from "react";
import logo from "./../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
// navbar
function Navbar() {
  return (
    <div className="nav-bar">
      <nav className="navbar navbar-expand-md ">
        <div className="container">
          <NavLink className="navbar-brand " to="/company-portfolio/home">
            <img src={logo} className="logo" alt="" />
          </NavLink>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto nav-items-parent">
              <NavLink className="nav-link " to="/company-portfolio/design">
                Design
              </NavLink>
              <NavLink className="nav-link " to="/company-portfolio/branding">
                Branding
              </NavLink>
              <NavLink
                className="nav-link "
                to="/company-portfolio/development"
              >
                Development
              </NavLink>
              <NavLink className="nav-link " to="/company-portfolio/about">
                About
              </NavLink>
              <NavLink className="nav-link " to="/company-portfolio/blog">
                Blog
              </NavLink>
              <NavLink className="nav-link " to="/company-portfolio/contact">
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
