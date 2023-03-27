import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Ribbon.css";
import notification from "../images/HomePage/notification.png";

const Ribbon = ({ checkRibbon }) => {
  const close = (e) => {
    e.preventDefault();
    sessionStorage.setItem("ribbonClose", false);
    checkRibbon(close);
  };
  return (
    <>
      <div className="ribbonBackground py-4">
        <div className="w-98 mx-auto">
          <div className="row mx-0">
            <div className="col-md-1 col-lg-1 col-sm-12"></div>
            <div className="col-md-10 col-lg-10 col-sm-12">
              <p className="mb-0 text-center mt-2">
                <div className="d-flex w-100 align-items-center justify-content-center">
                  <img src={notification} alt="speaker" className="img-35" />
                  <span className="ribbon_content px-2 mb-0">
                    On-Demand Webinar - See how leading Retailers are embracing
                    AI & Analytics to win in 2023
                  </span>
                  <span className="btn-ribbon py-2 mt-1 mb-0">
                    <Link
                      to="/webinar-reshaping-the-retail-industry-through-AI"
                      target="_blank"
                      className="text-dark"
                    >
                      Watch now
                    </Link>
                  </span>
                </div>
              </p>
            </div>
            <div className="col-md-1 col-lg-1 col-sm-12 mt-2">
              <p className="d-flex w-100 align-items-center justify-content-md-end justify-content-center">
                <div
                  className="text-center close_icon"
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
