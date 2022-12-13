// import React from "react";
import React, { useEffect, useRef, useState, useMemo } from "react";
import emailjs from "emailjs-com";
import "../../CSS/swiftinisghts.css";
import companyLogo from "../../images/swiftinisghts/company_logo.png";
import Adlogo from "../../images/swiftinisghts/AD-Logo.png";
import materialSymbol from "../../images/swiftinisghts/material-symbols_play-circle-rounded.png";
import ic_round from "../../images/swiftinisghts/ic_round-access-time.png";
import phCalendarCheck from "../../images/swiftinisghts/ph_calendar-check.png";
import SwiftlnisghtsWebinarform from "./SwiftlnisghtsWebinarform";

const SwiftInisghtsWebinar = () => {
  const [showForm, setForm] = useState(true);
  /*Email*/
  const getSuccessResponse = (e) => {
    setForm(false);
  };
  const [userDetails, setUserDetails] = useState({
    fName: "",
    email: "",
    cName: "",
    jobTitle: "",
    updates: false,
  });

  function handleChange(event) {
    const { value, name } = event.target;
    const { checked, name1 } = event.target;
    setUserDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: name != "updates" ? value : checked,
      };
    });
  }

  function submitDetails(e) {
    e.preventDefault();
    const aplhabetPattern = /^[a-z]+$/i;
    const emailpattern =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (
      aplhabetPattern.test(userDetails.fullName) &&
      aplhabetPattern.test(userDetails.company) &&
      aplhabetPattern.test(userDetails.role) &&
      emailpattern.test(userDetails.email)
    ) {
      return emailjs
        .sendForm(
          "service_h4akrmg",
          "template_toof3ch",
          e.target,
          "yz7dQlM6o3Rz3cnB8"
        )
        .then(
          console.log("SUCCESS!"),
          setUserDetails({
            fName: "",
            email: "",
            cName: "",
            jobTitle: "",
            updates: false,
          }),
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("FAILED...");
      return false;
    }
  }

  return (
    <>
      {/* <div className="fs-24 swiftinsights-ai">
        Width: <strong>{screenSize.dynamicWidth}</strong>
        Height: <strong>{screenSize.dynamicHeight}</strong>
      </div> */}
      <div className="webinar-page">
        <div className="center-webinar">
          <div className="w-100 d-flex justify-content-between">
            <img className="py-4" src={companyLogo} width="150" />
            <a
              className="py-4 text-white font-ai swiftinsights-ai-desktop"
              href="http://swiftinsights.ai/"
              target="_blank"
            >
              <span className="mt-2 text-white font-ai swiftinsights-ai-desktop">
                swiftinsights.ai
              </span>
            </a>
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12">
              <p className="heading-style mt-4 mb-0">Webinar</p>
              <div className="row mt-0">
                <div className="col-lg-4 col-sm-12 col-xs-12 col-md-4 pr-0">
                  <p className="swift-text-style mb-0">Swift Insights</p>
                </div>
                <div className="col-lg-8 col-sm-12 col-xs-12 col-md-8 pr-0">
                  <p className="text-right-size mb-0">
                    An AI based Advanced Analytics Reporting Platform for Retail
                  </p>
                </div>
              </div>
              <div className="w-100 learn-style mt-5">
                <div className="w-95 learn-style">
                  Learn & understand on how our AI based KPIs can help you
                  achieve your business goals!
                </div>
              </div>
              <div className="row mt-5 mb-3">
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-1">
                  <p className="mb-0">
                    <img src={phCalendarCheck} width="30" className="mr-4" />
                    <span className="text-dark p-1 date-time-style">Date</span>
                  </p>
                  <p className="date-style mb-0">21 Dec, 2022</p>
                  <p className="date-style mb-2 font-weight-400">Wednesday</p>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12 text-center ">
                  <p className="border-2 swiftinsights-ai-desktop"></p>
                  <div class="w-100 mt-3 swiftinsights-ai-mobile">
                    <div class="w-50">
                      <div class="border-bottom-webinar"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <p className="mb-0 mt-2">
                    <img src={ic_round} width="30" className="mr-4" />
                    <span className="text-dark p-1 date-time-style">Time</span>
                  </p>
                  <p className="date-style mb-0 ">5pm - 5:45pm(IST)</p>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-4 power-text swiftinsights-ai-desktop">
                  <span className="power-text">Powered by</span>
                </div>
                <div className="col-md-4 mt-1 swiftinsights-ai-desktop">
                  <img src={Adlogo} width="150" />
                </div>
                <div className="col-md-4 mobile-free">
                  <img src={materialSymbol} width="30" className="mr-2 mt-11" />
                  <span className="text-dark p-1 font-weight-400 date-time-style">
                    Free Live Event
                  </span>
                </div>
              </div>
            </div>
            {/* {Right Side} */}
            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
              <div className=" w-100">
                {showForm === true ? (
                  <>
                    <div className="card-body">
                      <SwiftlnisghtsWebinarform
                        getSuccessResponse={getSuccessResponse}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-100 justify-content-center d-flex">
                      <div className="card card-box">
                        <div className="card-body card-styles-swift">
                          <p className="successfull-msg-swift">
                            Thank you for registering for the webinar, we will
                            send an email with the joining details!
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="center mb-4 mt-4 swiftinsights-ai-mobile">
            <div className="w-100 d-flex justify-content-between mt-3 mb-3 ">
              <span className="fs-24 pr-4">Powered by</span>
              <img src={Adlogo} width="150" />
            </div>
            <div className="w-100 d-flex justify-content-center swiftinsights-ai-mobile">
              <a
                className="py-4 text-black font-ai swiftinsights-ai-mobile"
                href="http://swiftinsights.ai/"
                target="_blank"
              >
                <span className="mt-2 text-black fs-24 swiftinsights-ai-mobile">
                  swiftinsights.ai
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwiftInisghtsWebinar;
