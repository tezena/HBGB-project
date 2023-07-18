import React from "react";
import WHO from "../assets/WHO.png";
import UNDP from "../assets/UNDP.png";
import Eth from "../assets/Ethiopian.png";

export default function Companies() {
  const Companies = [WHO, UNDP, Eth, WHO, UNDP, Eth];
  return (
    <div className="container-fluid  text-center p-5 mb-3">
      <h2 className="fs-2 mytext fw-bold mb-4">Trusted by</h2>
      <div className="d-flex justify-content-evenly">
        {Companies.map((com, i) => {
          return (
            <div className="col pt-2">
              <img width="120" height="100" src={com} alt="WHO" className="grayscale-image" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
