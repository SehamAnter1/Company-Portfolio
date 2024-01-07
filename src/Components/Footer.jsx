 import React from 'react'
import logo from "./../assets/images/logo.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer py-5">
      <div className="container  col-md-10 col-lg-9  mx-auto">
        <img src={logo} className="footer-logo " width={60} alt="logo" />
        <ul className="footer-content d-flex justify-content-space-between p-0 py-3 m-0">
          <ul className="footer-column">
            <li className="footer-item heading">
              <NavLink className="footer-item heading" to="/company-portfolio/design">
                Design
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/company-portfolio/design#advantages">
                Advantages
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/company-portfolio/design#cases">
                Cases
              </NavLink>
            </li>
          </ul>
          <ul className="footer-column">
            <li className="footer-item heading">
              <NavLink className="footer-item heading" to="/company-portfolio/branding">
                Branding
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/company-portfolio/branding#elements">
                Elements fo branding
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/company-portfolio/branding#advantages">
                Advantages
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/company-portfolio/branding#cases">
                Cases
              </NavLink>
            </li>
          </ul>
          <ul className="footer-column">
            <li className="footer-item heading">
              <NavLink className="footer-item heading" to="/company-portfolio/development">
                Development
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/company-portfolio/development#technology">
                Technology Stack
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/company-portfolio/development#desktop">
                Desktop Dev
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/company-portfolio/development#mobile">
                Mobile Dev
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/company-portfolio/development#cases">
                Cases
              </NavLink>
            </li>
          </ul>
          <ul className="footer-column">
            <li className="footer-item heading">
              <NavLink className="footer-item heading" to="/company-portfolio/about">
                About
              </NavLink>
            </li>

            <li className="footer-item">
              <NavLink className="footer-item " to="/company-portfolio/about#mission">
                Mission
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/company-portfolio/about#vslues">
                Our Values
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/company-portfolio/about#clients">
                Our Clients
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/company-portfolio/about#team">
                Our Team
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/company-portfolio/about#mission">
              Careers
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/company-portfolio/about#clients">
                Partnership
              </NavLink>
            </li>
          </ul>
          <ul className="footer-column">
            <li className="footer-item heading">Social Networks</li>
            <li className="footer-item">
              <a
                className="footer-item"
                href="/"
              >
                Facebook
              </a>
            </li>
            <li className="footer-item">
              <a className="footer-item" href="/">
                Behance
              </a>
            </li>
            <li className="footer-item">
              <a
                className="footer-item"
                href="/"
              >
                Instagram
              </a>
            </li>
            <li className="footer-item">
              <a
                className="footer-item"
                href="/"
              >
                Twitter
              </a>
            </li>
            <li className="footer-item">
              <a
                className="footer-item"
                href="/ "
              >
                LinkedIn
              </a>
            </li>
            <li className="footer-item">
              <a className="footer-item" href="/">
                Snapchat
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default Footer