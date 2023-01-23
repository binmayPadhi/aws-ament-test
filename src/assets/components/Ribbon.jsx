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
      <div className="ribbonBackground py-3">
        <table className="w-100 border-0">
          <tr className="border-0 w-100 row">
            <td className="border-0 col-12  text-center">
              <div className="w-100 d-flex justify-content-between align-items-center">
                <p></p>
                <p>
                  <img src={speaker} alt="speaker" className="speaker_width" />
                  <span className="ribbon_content px-2 mb-0">
                    On-Demand Webinar - See how leading Retailers are embracing
                    AI & Analytics to win in 2023
                  </span>
                  <span className="btn-ribbon px-3 py-2 mt-1 mb-0">
                    <Link
                      to="/webinar-reshaping-the-retail-industry-through-AI"
                      target="_blank"
                      className="link_styles"
                    >
                      Watch now
                    </Link>
                  </span>
                </p>
                <p>
                  <div
                    className="text-center close_icon ml-3"
                    onClick={(e) => close(e)}
                  >
                    x
                  </div>
                </p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Ribbon;
