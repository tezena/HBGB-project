import React from "react";
import { SlSocialTwitter } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="bg-dark d-flex flex-column justify-content-center">
      <div className="d-flex flex-row p-5 justify-content-between">
        <div className="d-flex flex-row justify-content-evenly w-50">
          <div className="d-flex flex-column p-3">
            <h3 className="text-light">Learn more</h3>
            <a className="text-secondary text-decoration-none" href="#">
              About HBGB
            </a>
            <a className="text-secondary text-decoration-none" href="#">
              Services
            </a>
            <a className="text-secondary text-decoration-none" href="#">
              Contact Us
            </a>
          </div>
          <div className="p-3 w-50 ">
            <h3 className="text-light">Contact</h3>
            <p className="text-secondary">
              Aberus Building,5th floor in front of Dembel Building.
            </p>
            <p className="text-secondary">supporthbgbtrading@gmail.com</p>
            <p className="text-secondary">+251-920-735-895</p>
          </div>
        </div>
        <div
          className="bg-white w-40 h-40 mx-5"
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: "white",
          }}></div>
      </div>
      <div className="container d-flex flex-row justify-content-between  border-top border-light-subtle mx-auto p-4">
        <p className="text-secondary"> &copy; 2023 HBGB,plc...</p>
        <div className="d-flex flex-row text-white justify-content-between p-2">
          <FiInstagram className="mx-3" />
          <SlSocialTwitter />
        </div>
      </div>
    </div>
  );
}
