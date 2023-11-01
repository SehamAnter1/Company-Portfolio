import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

// DesignNavbar
function DevelopmentNavbar() {
  return (
    <div className="design-nav-bar branding-nav-bar">
      <nav className="navbar ">
        <div className="container">
          <ul className="me-auto  nav-items-parent d-flex text-center  text-sm-start">
            <ScrollLink
              to="overview"
              className="nav-link "
              smooth={true}
              duration={1000}
            >
              Overview
            </ScrollLink>
            <ScrollLink
              to="technology"
              className="nav-link "
              smooth={true}
              duration={1000}
            >
              Technology Stack
            </ScrollLink>
            <ScrollLink
              to="desktop"
              className="nav-link "
              smooth={true}
              duration={1000}
            >
              Desktop Dev
            </ScrollLink>
            <ScrollLink
              to="mobile"
              className="nav-link "
              smooth={true}
              duration={1000}
            >
              {" "}
              Mobile Dev
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

export default DevelopmentNavbar;
