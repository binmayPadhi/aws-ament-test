// import React from "react";
import React, { useEffect, useRef, useState, useMemo } from "react";
import emailjs from "emailjs-com";
import "../../CSS/swiftinisghts.css";
import companyLogo from "../../images/swiftinisghts/company_logo.png";
import Adlogo from "../../images/swiftinisghts/AD-Logo.png";
import materialSymbol from "../../images/swiftinisghts/material-symbols_play-circle-rounded.png";
import ic_round from "../../images/swiftinisghts/ic_round-access-time.png";
import phCalendarCheck from "../../images/swiftinisghts/ph_calendar-check.png";

const SwiftInisghtsWebinar = () => {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  /*Email*/

  const [userDetails, setUserDetails] = useState({
    fName: "",
    email: "",
    cName: "",
    jobTitle: "",
    updates: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setUserDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
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
            updates: "",
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
            <img className="py-4" src={companyLogo} />
            <span className="py-4 text-white font-ai swiftinsights-ai-desktop">
              swiftinsights.ai
            </span>
          </div>
          <div className="row mt-8">
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
                <div className="w-95">
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

                <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                  <p className="mb-0 mt-2">
                    <img src={ic_round} width="30" className="mr-4" />
                    <span className="text-dark p-1 date-time-style">Time</span>
                  </p>
                  <p className="date-style mb-0 ">5pm - 5:45pm(IST)</p>
                </div>
                <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12">
                  <p className="mt-7">
                    <img src={materialSymbol} width="30" className="mr-4" />
                    <span className="text-dark p-1 font-weight-400 date-time-style">
                      Free Live Event
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* {Right Side} */}
            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
              <div className="w-100 justify-content-center d-flex">
                <div className="card card-box">
                  <div className="card-header border-0 heading py-2">
                    Please fill the below details to attend webinar
                  </div>
                  <div className="card-body my-3">
                    <form
                      name="contactForm"
                      action="#"
                      method="post"
                      onSubmit={submitDetails}
                    >
                      <div className="row ml-0 mr-0">
                        <div className="col-12 pl-0 pr-0">
                          <p className="mb-0">
                            <label>
                              Full Name<span className="req">*</span>
                            </label>
                          </p>
                          <p className="w-100">
                            <input
                              className="w-100 pl-1"
                              type="text"
                              name="fName"
                              onChange={handleChange}
                              value={userDetails.fName}
                              required
                            />
                          </p>
                          {/* <span className="help-block">
                            <div>FullName is required</div>
                            <div>The minimum length for this field is 1</div>
                            <div>Please enter valid Fullname</div>
                          </span> */}
                        </div>
                      </div>
                      <div className="row ml-0 mr-0">
                        <div className="col-12 pl-0 pr-0">
                          <p className="mb-0">
                            <label>
                              Email<span className="req">*</span>
                            </label>
                          </p>
                          <p className="w-100">
                            <input
                              className="w-100 pl-1"
                              type="email"
                              name="email"
                              onChange={handleChange}
                              value={userDetails.email}
                              required
                            />
                          </p>
                          {/* <span className="help-block">
                            <div>Email is required</div>
                            <div>Email must be a valid email address</div>
                          </span> */}
                        </div>
                      </div>
                      <div className="row ml-0 mr-0">
                        <div className="col-12 pl-0 pr-0">
                          <p className="mb-0">
                            <label>Company</label>
                          </p>
                          <p className="w-100">
                            <input
                              className="w-100 pl-1"
                              type="text"
                              name="cName"
                              onChange={handleChange}
                              value={userDetails.cName}
                              required
                            />
                          </p>
                        </div>
                      </div>
                      <div className="row ml-0 mr-0">
                        <div className="col-12 pl-0 pr-0">
                          <p className="mb-0">
                            <label>Role</label>
                          </p>
                          <p className="w-100">
                            <input
                              className="w-100 pl-1"
                              type="text"
                              name="jobTitle"
                              onChange={handleChange}
                              value={userDetails.jobTitle}
                              required
                            />
                          </p>
                        </div>
                      </div>
                      <div className="row ml-0 mr-0 pt-2">
                        <div className="col-12 pl-0 pr-0">
                          <p className="w-100 d-flex align-items-center">
                            <input
                              className="w-100 pl-1 checkMark"
                              name="updates"
                              type="checkbox"
                            />
                            <span className="submittext">
                              Send me updates about Swight Insights
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="row ml-0 mr-0 pt-1">
                        <div className="col-12 pl-0 pr-0">
                          <div className="w-100 d-flex justify-content-center">
                            <button
                              className="subBtn px-4 border-0"
                              type="submit"
                            >
                              Register
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="center-webinar mb-3 mt-3">
          <div className="w-100 d-flex mt-3 mb-3">
            <span className="fs-24 pr-4">Powered by</span>
            <img src={Adlogo} width="150" />
          </div>
          <div className="w-100 d-flex justify-content-center swiftinsights-ai-mobile">
            <span className="py-4 font text-dark fs-24 swiftinsights-ai-mobile">
              swiftinsights.ai
            </span>
          </div>

          {/* <div className="w-100 d-flex justify-content-center">
            <span className="py-4 font text-dark fs-24">swiftinsights.ai</span>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SwiftInisghtsWebinar;
