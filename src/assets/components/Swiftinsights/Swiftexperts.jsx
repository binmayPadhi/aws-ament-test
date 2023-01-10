import React from "react";
import "../../CSS/webinar.css";
import director_1 from "../../images/swiftinisghts/mahesh_pic.png";

const Swiftexperts = () => {
  return (
    <>
      <div className="learn-img pb-3">
        <div className="container clear">
          <div className="learn-title">
            <p>Learn from our Industry Expert</p>
          </div>
        </div>
        <div className="row center-95 pb-5">
          <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4"></div>
          <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
            <div className="w-100 d-flex align-items-center justify-content-center">
              <div className="w-50">
                <img
                  loading="lazy"
                  src={director_1}
                  className="w-200 h-180 mx-auto"
                  alt="company_logo"
                />
              </div>
              <div className="w-50 ml-2">
                <p className="director-name mb-0">Mahesh Pulipaka</p>
                <p className="director-title">
                  Sr. Product Manager <br /> Amnet Digital
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4"></div>
        </div>
      </div>
    </>
  );
};

export default Swiftexperts;
