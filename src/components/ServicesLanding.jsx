import React from "react";
import laptop from "../assets/laptop.png";

export default function ServicesLanding() {
  return (
    <div className="mybg px-3 pb-5">
      <h2 className="text-center fs-2 mytext fw-bold pt-5">Services</h2>
      <div>
        <ul className="list-unstyled d-flex flex-row justify-content-evenly flex-wrap">
          <li>
            <img src={laptop} alt="Laptop" width="200" />
            <p className="text-center text-white">Marketing</p>
          </li>
          <li>
            <img src={laptop} alt="Laptop" width="200" />
            <p className="text-center text-white">Interior Design</p>
          </li>
          <li>
            <img src={laptop} alt="Laptop" width="200" />
            <p className="text-center text-white">Event Organizing</p>
          </li>
        </ul>
        <ul className="list-unstyled d-flex flex-row justify-content-evenly flex-wrap">
          <li>
            <img src={laptop} alt="Laptop" width="200" />
            <p className="text-center text-white">Software and IT</p>
          </li>
          <li>
            <img src={laptop} alt="Laptop" width="200" />
            <p className="text-center text-white">Graphic Design</p>
          </li>
          <li>
            <img src={laptop} alt="Laptop" width="200" />
            <p className="text-center text-white">Tech Stuff</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
