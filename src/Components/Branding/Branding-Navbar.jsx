import React from "react";
import logo from "./../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

// DesignNavbar
function BrandingNavbar() {
  return (
    <div className="design-nav-bar branding-nav-bar">
      <nav className="navbar ">
        <div className="container ">
          <ul className="me-auto  nav-items-parent d-flex text-center  text-sm-start">
            <ScrollLink
              to="branding"
              className="nav-link "
              smooth={true}
              duration={1000}
            >
              Branding
            </ScrollLink>
            <ScrollLink
              to="overview"
              className="nav-link "
              smooth={true}
              duration={1000}
            >
              Overview
            </ScrollLink>
            <ScrollLink
              to="elements"
              className="nav-link "
              smooth={true}
              duration={1000}
            >
              Elements of branding
            </ScrollLink>
            <ScrollLink
              to="advantages"
              className="nav-link "
              smooth={true}
              duration={1000}
            >
              {" "}
              Advantages
            </ScrollLink>

            <ScrollLink
              to="cases"
              className="nav-link "
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

export default BrandingNavbar;
