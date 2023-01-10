import React from "react";
import "../../CSS/webinar.css";
import companyIcon from "../../images/swiftinisghts/company_logo.png";

const Swiftinsightsheader = () => {
  return (
    <>
      <div className="insights_main_img">
        <div className="center-90 py-3">
          <img
            loading="lazy"
            src={companyIcon}
            className="w-200 pt-4"
            alt="company_logo"
          />
        </div>
        <div className="pb-3 center-90">
          <div className="row">
            <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12 mt-5-rem mb-10-rem">
              <div className="row mt-2 mb-5">
                {/* left-side-block */}
                <div className="col-6">
                  <p className="join-styles">Online Live Webinar</p>
                  <p className="main_heading fs-40">
                    See how our AI-driven analytics reporting platform can help
                    your Retail business to make well-informed business
                    decisions!
                  </p>
                  <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Swiftinsightsheader;
