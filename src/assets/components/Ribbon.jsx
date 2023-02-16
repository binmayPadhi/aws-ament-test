import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Ribbon.css";
import speaker from "../images/HomePage/speaker.png";

const Ribbon = ({ checkRibbon }) => {
  const close = (e) => {
    e.preventDefault();
    sessionStorage.setItem("ribbonClose", false);
    checkRibbon(close);
  };
  return (
    <>
      <div className="ribbonBackground py-4">
        <div className="w-95 mx-auto">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <p></p>
            <p className="mb-0 px-4">
              <img src={speaker} alt="speaker" className="speaker_width" />
              <span className="ribbon_content px-2 mb-0">
                On-Demand Webinar - See how leading Retailers are embracing AI &
                Analytics to win in 2023
              </span>
              <span className="btn-ribbon px-3 py-2 mt-1 mb-0">
                <Link
                  to="/webinar-reshaping-the-retail-industry-through-AI"
                  target="_blank"
                  className="text-dark"
                >
                  Watch now
                </Link>
              </span>
            </p>
            <div className="pr-4">
              <p className="mb-0 d-flex justify-content-md-end justify-content-lg-end justify-content-center">
                <div
                  className="text-center close_icon ml-3"
                  onClick={(e) => close(e)}
                >
                  x
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ribbon;
