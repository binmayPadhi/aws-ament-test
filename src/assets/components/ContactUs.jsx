import React, { useState } from "react";
import contactusbg from "../images/Contact-Us-Page/contactusbanner.png";
import Contactform from "./ContactUs/Contactform";
import global from "../images/HomePage/global.png";
import Gotocontact from "./Gotocontant";
import OurLocation from "./OurLocation";

const TestContactUs = () => {
  const tooltipStyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "1rem",
    fontFamily: `'Poppins', sans-serif`,
    padding: "5px",
  };
  return (
    <>
      <div
        className="sub-service-intro container-fluid position-realtive"
        style={{
          backgroundImage: `url(${contactusbg})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          top: "80px",
          width: "100%",
        }}
      >
        <div className="text-center-img w-100">
          <div className="w-90 mx-auto">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h2
                  className="fw-bold-600 text-white fs-35 text-capitalize"
                  data-text="contactus"
                >
                  Contact Us
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact form block */}/
      <div className="mt-15">
        <div className="w-90 mx-auto">
          <Contactform />
        </div>
      </div>
      {/* global footprint */}
      <div className="mt-15">
        <h1 className="section-title text-center mb-5">Global Footprint</h1>
        <div>
          <img src={global} className="gload-title" />
        </div>
      </div>
      {/* ourlocation */}
      <div className="mt-5 mb-5">
        <OurLocation />
      </div>
      {/* NEW HOMEPAGE CAREER SECTION */}
      <div className="mb-5 mt-5">
        <Gotocontact componentFrom="contactus" />
      </div>
    </>
  );
};

export default TestContactUs;
