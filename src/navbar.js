import React from "react";
import { Dropdown,DropdownToggle,DropdownItem,DropdownMenu} from "reactstrap";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiar p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            HBGB
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a
                  className="nav-link mx-2 active"
                  aria-current="page"
                  href="#"
                >
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
                 <Dropdown toggle={function noRefCheck(){}}>
    <DropdownToggle caret>
      services
    </DropdownToggle>
    <DropdownMenu container="body">
      <DropdownItem onClick={function noRefCheck(){}}>
        Action 1
      </DropdownItem>
      <DropdownItem onClick={function noRefCheck(){}}>
        Action 2
      </DropdownItem>
      <DropdownItem onClick={function noRefCheck(){}}>
        Action 3
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>     
                </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
