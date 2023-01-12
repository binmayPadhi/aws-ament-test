import React from "react";
import "../../CSS/webinar.css";
import companyIcon from "../../images/swiftinisghts/company_logo.png";
import date from "../../images/swiftinisghts/ph_calendar-check.png";
import time from "../../images/swiftinisghts/ic_round-access-time.png";

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
                    <div className="col-lg-3 col-md-3 col-xs-6 col-sm-6 border-right">
                      <div className="w-100 d-flex align-items-center">
                        <img
                          loading="lazy"
                          src={date}
                          className="w-22"
                          alt="company_logo"
                        />
                        <span className="fs-16 pl-2 text-white">Date</span>
                      </div>
                      <p className="fs-14 text-white pt-2 mb-0">
                        25th Jan, 2023
                      </p>
                      <p className="fs-14 text-white pt-2">Wednesday</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-6 col-sm-6">
                      <div className="w-100 d-flex align-items-center pl-4">
                        <img
                          loading="lazy"
                          src={time}
                          className="w-22"
                          alt="company_logo"
                        />
                        <span className="fs-16 pl-2 text-white">Time</span>
                      </div>
                      <p className="fs-14 text-white pt-2 pl-4">
                        5pm - 5.45pm (IST)
                      </p>
                    </div>
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
