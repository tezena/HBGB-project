import React from "react";
import logo from "../assets/logo2.png";
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownItem,
//   DropdownMenu,
// } from "reactstrap";

export default function Navbar() {
  return (
    <div className="position-fixed w-100 z-3">
      <nav className="navbar navbar-expand-lg navbar-light mybg px-3">
        <div className="container-fluid">
          <a className="navbar-brand ms-1" href="#">
            <img src={logo} width="45" height="50" alt="HBGB logo" />
          </a>
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
              <li className="nav-item">
                <a className="nav-link mx-2 text-white" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-white" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-white" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item mx-2">
                <button className="btn btn-primary">Contact Us</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
