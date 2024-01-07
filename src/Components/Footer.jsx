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
              <NavLink className="footer-item heading" to="/design">
                Design
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/design#advantages">
                Advantages
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/design#cases">
                Cases
              </NavLink>
            </li>
          </ul>
          <ul className="footer-column">
            <li className="footer-item heading">
              <NavLink className="footer-item heading" to="/branding">
                Branding
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/branding#elements">
                Elements fo branding
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/branding#advantages">
                Advantages
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/branding#cases">
                Cases
              </NavLink>
            </li>
          </ul>
          <ul className="footer-column">
            <li className="footer-item heading">
              <NavLink className="footer-item heading" to="/development">
                Development
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/development#technology">
                Technology Stack
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/development#desktop">
                Desktop Dev
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/development#mobile">
                Mobile Dev
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/development#cases">
                Cases
              </NavLink>
            </li>
          </ul>
          <ul className="footer-column">
            <li className="footer-item heading">
              <NavLink className="footer-item heading" to="/about">
                About
              </NavLink>
            </li>

            <li className="footer-item">
              <NavLink className="footer-item " to="/about#mission">
                Mission
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/about#vslues">
                Our Values
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/about#clients">
                Our Clients
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/about#team">
                Our Team
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/about#mission">
                Careers
              </NavLink>
            </li>
            <li className="footer-item">
              <NavLink className="footer-item" to="/about#clients">
                Partnership
              </NavLink>
            </li>
          </ul>
          <ul className="footer-column">
            <li className="footer-item heading">Social Networks</li>
            <li className="footer-item">
              <a className="footer-item" href="/">
                Facebook
              </a>
            </li>
            <li className="footer-item">
              <a className="footer-item" href="/">
                Behance
              </a>
            </li>
            <li className="footer-item">
              <a className="footer-item" href="/">
                Instagram
              </a>
            </li>
            <li className="footer-item">
              <a className="footer-item" href="/">
                Twitter
              </a>
            </li>
            <li className="footer-item">
              <a className="footer-item" href="/ ">
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