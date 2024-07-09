import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Ribbon.css";
import notification from "../images/HomePage/notification.png";
import MediaQuery from "react-responsive";
import cross from "../images/HomePage/xclose.png";

const Ribbon = (props) => {
  const close = (e) => {
    e.preventDefault();
    localStorage.setItem("ribbonClose", "hide");
    props.onSelectchange("hide");
  };
  return (
    <>
      <MediaQuery query="(max-width: 1024px)">
        <div className="ribbonBackground py-2">
          <div className="row">
            <div className="col-11 text-center">
              <table className="w-100">
                <tr className="border-0">
                  <td className="border-0">
                    <img src={notification} alt="speaker" className="img-35" loading="lazy" />
                  </td>
                  <td className="border-0">
                    <span className="ribbon_content px-2 mb-0">
                      On-Demand Webinar - See how leading Retailers are
                      embracing AI & Analytics to win in 2023
                    </span>
                  </td>
                </tr>
              </table>
            </div>
            <div className="col-1">
              <div
                className="close_icon_mob d-flex w-100 justify-content-end pr-4 cr-pointer"
                onClick={(e) => close(e)}
              >
                <img src={cross} alt="close" className="img-35" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="w-100 mt-1 mb-1 d-flex justify-content-center">
            <span className="btn-ribbon-mob">
              <Link
                to="/webinars/reshaping-the-retail-industry-through-AI"
                target="_blank"
                className="text-dark fs-13 fw-bold-700"
              >
                Watch now
              </Link>
            </span>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 1025px)">
        <div className="ribbonBackground py-2">
          <div className="w-98 mx-auto">
            <div className="row mx-0">
              <div className="col-md-1 col-lg-1 col-sm-12"></div>
              <div className="col-md-10 col-lg-10 col-sm-12 my-auto">
                <p className="mb-0 text-center">
                  <div className="d-flex w-100 align-items-center justify-content-center">
                    <img src={notification} alt="speaker" className="img-35" loading="lazy" />
                    <span className="ribbon_content px-2 mb-0">
                      On-Demand Webinar - See how leading Retailers are
                      embracing AI & Analytics to win in 2023
                    </span>
                    <span className="btn-ribbon mt-1 mb-0">
                      <Link
                        to="/webinars/reshaping-the-retail-industry-through-AI"
                        target="_blank"
                        className="text-dark fs-13 fw-bold-700"
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
                    className="text-center cr-pointer"
                    onClick={(e) => close(e)}
                  >
                    <img src={cross} alt="close" className="img-35" loading="lazy" />
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
};

export default Ribbon;
