import React from "react"; 
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

// DesignNavbar
function AboutNavbar() {
  return (
    <div className="design-nav-bar branding-nav-bar">
      <nav className="navbar ">
        <div className="container ">
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
              to="mission"
              className="nav-link "
              smooth={true}
              duration={1000}
            >
              Mission
            </ScrollLink>
            <ScrollLink
              to="values"
              className="nav-link "
              smooth={true}
              duration={1000}
            >
              Our values
            </ScrollLink>
            <ScrollLink
              to="clients"
              className="nav-link "
              smooth={true}
              duration={1000}
            >
              {" "}
              Our clients
            </ScrollLink>

            <ScrollLink
              to="team"
              className="nav-link "
              smooth={true}
              duration={1000}
            >
              {" "}
              Our team
            </ScrollLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default AboutNavbar;
