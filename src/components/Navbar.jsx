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
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-1">
        <div className="container-fluid">
          <a className="navbar-brand ms-1" href="#">
            <img src={logo} width="45" height="50" alt="HBGB logo" />
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            {/* <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a
                  className="nav-link mx-2 active"
                  aria-current="page"
                  href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  about us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  contact us
                </a>
              </li>
              <li className="nav-item">
                <Dropdown toggle={function noRefCheck() {}}>
                  <DropdownToggle caret>services</DropdownToggle>
                  <DropdownMenu container="body">
                    <DropdownItem onClick={function noRefCheck() {}}>
                      Action 1
                    </DropdownItem>
                    <DropdownItem onClick={function noRefCheck() {}}>
                      Action 2
                    </DropdownItem>
                    <DropdownItem onClick={function noRefCheck() {}}>
                      Action 3
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
            </ul> */}
            <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
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
