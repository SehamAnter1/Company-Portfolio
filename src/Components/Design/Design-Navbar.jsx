import React from "react";
import logo from "./../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

// DesignNavbar
function DesignNavbar() {
  return (
    <div className="design-nav-bar">
      <nav className="navbar ">
        <div className="container">
          <ul className="me-auto  nav-items-parent d-flex text-center  text-sm-start col-12 col-sm-8 col-md-6 col-lg-4  justify-content-space-between">
            <ScrollLink
              to="overview"
              className="nav-link col"
              smooth={true}
              duration={1000}
            >
              Overview
            </ScrollLink>
            <ScrollLink
              to="advantages"
              className="nav-link col"
              smooth={true}
              duration={1000}
            >
              {" "}
              Advantages
            </ScrollLink>

            <ScrollLink
              to="cases"
              className="nav-link col"
              smooth={true}
              duration={1000}
            >
              {" "}
              Cases
            </ScrollLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default DesignNavbar;
