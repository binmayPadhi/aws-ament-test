import React, { useState } from "react";
import emailjs from "emailjs-com";
import OurLocation from "../components/OurLocation";
import "../CSS/ContactUs.css";
import Contactform from "./ContactUs/Contactform";
import Gotocontact from "./Gotocontact";
import global from "../images/Contact-Us-Page/global.png";
import contactusbg from "../images/Contact-Us-Page/contactusbanner.svg";

function TestContactUs() {
  return (
    <>
      <div
        className="sub-service-intro position-realtive"
        style={{
          backgroundImage: `url(${contactusbg})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "600px",
        }}
      >
        <div className="text-center-img w-100">
          <div className="w-90 mx-auto">
            <h2 className="fw-bold-700 text-white fs-54" data-text="contactus">
              Contact Us
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="bg-footer pt-5 pb-5">
          <Contactform />
        </div>
      </div>

      <div className="mt-6">
        <h1 className="section-title text-center">Global Footprint</h1>
        {/* <div class="container">
          <div class="row">
            <div class="col">
              <img class="img-fluid" src={global} />
            </div>
          </div>
        </div> */}
      </div>

      <div className="contact-us-intro container-fluid"></div>
      {/* <!-- CONTACT US PAGE CONTACT FORM --> */}

      {/* <!-- NEW ABOUT US PAGE LOCATION SECTION --> */}

      <OurLocation />

      <div className="mt-5">
        <Gotocontact componentFrom="contactus" />
      </div>
    </>
  );
}

export default TestContactUs;
