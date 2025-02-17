import React from "react";
import OurLocation from "../components/OurLocation";
import "../CSS/ContactUs.css";
import Contactform from "./ContactUs/Contactform";
import Gotocontact from "./Gotocontact";
import contactusbg from "../images/Contact-Us-Page/contactusbanner.svg";
import { Helmet } from "react-helmet";

function TestContactUs() {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us | Amnet Digital </title>
        <meta name="description" content="Like what you’ve seen? Get in touch to learn more." />
        <meta name="keywords" content="" />
        <link rel="canonical" href="https://www.amnetdigital.com/contact-us" />
        <meta property="og:title" content="Contact Us | Amnet Digital" />
        <meta property="og:description" content="Like what you’ve seen? Get in touch to learn more." />
        <meta property="og:url" content="https://www.amnetdigital.com/contact-us" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="../images/Contact-Us-Page/contactusbanner.svg" />
      </Helmet>
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
      </div>

      <div className="contact-us-intro container-fluid"></div>

      {/* <!-- NEW ABOUT US PAGE LOCATION SECTION --> */}

      <OurLocation />

      <div className="mt-5">
        <Gotocontact componentFrom="contactus" />
      </div>
    </>
  );
}

export default TestContactUs;
