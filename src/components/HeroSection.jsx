import React from "react";
import herobg from "../assets/yulia-matvienko-ArA3S3k0wTU-unsplash.jpg";

export default function HeroSection() {
  return (
    <>
      <div className="container-fluid position-relative vh-100 vw-100">
        <img
          src={herobg}
          alt="Hero Section"
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
        />
        <div class="gradient-overlay"></div>
        <div className="position-absolute top-50 start-50 translate-middle ">
          <h1 className="text-center fw-bold text-white herofont hero-title">
            Perfect Solutions
          </h1>
          <p className=" text-center fs-4 mytext">
            We are commited to providing exceptional service here at HBGB
          </p>
          <div class="">
            <button className="btn btn-secondary d-grid mx-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
