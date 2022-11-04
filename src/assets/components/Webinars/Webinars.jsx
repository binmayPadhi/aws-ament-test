import React from "react";
import "../../CSS/webinar.css";
import companyIcon from "../../images/Webinar-images/AD-Logo-Full-Green.png";
import zoomIcon from "../../images/Webinar-images/zoom.png";
import Webinarform from "./Webinarform";
import Webinarfooter from "./Webinarfooter";
import Webinarexperts from "./Webinarexperts";
import { useRef } from "react";
import { useState } from "react";

const Webinars = () => {
  const [showForm, setForm] = useState(true);
  const titleRef = useRef();
  const handleCallback = (e) => {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const getSuccessResponse = (e) => {
    setForm(false);
  };
  return (
    <>
      <div className="webinar_main_img" ref={titleRef}>
        <div className="w-100 d-flex pt-5-rem pb-5-rem">
          <img
            loading="lazy"
            src={companyIcon}
            className="w-350 mx-auto"
            alt="company_logo"
          />
        </div>
        <div className="container mt-3 pb-3">
          <div className="row">
            <div className="col-sm-12 col-xs-12 col-md-7 col-lg-7 mt-10-rem">
              <div className="row mt-2 mb-5">
                <div className="col-12 join-styles mb-5">
                  Join us for the webinar!
                </div>
                {/* left-side-block */}
                <div className="col-12">
                  <p className="main_heading">
                    Reshaping the Retail Industry through Advanced Analytics and
                    AI!
                  </p>
                  <p className="timing_webniar mt-3-rem">
                    11:30 AM - 12:15 PM EST, Thursday
                  </p>
                  <p className="timing_webniar">November 17, 2022</p>
                </div>
              </div>
            </div>
            {/* right-side-block */}
            <div className="col-sm-12 col-xs-12 col-md-5 col-lg-5 box-shadow">
              <div className="card w-100">
                {showForm === true ? (
                  <>
                    <div className="card-header card_header_styles">
                      Register Now!
                    </div>
                    <div className="card-body">
                      <Webinarform getSuccessResponse={getSuccessResponse} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="card-body card-styles">
                      <p className="successfull-msg">
                        Thank you for registering the webinar, we will send an
                        email with the joining details!
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div
        className=" row center-95
        main-content-para"
      >
        <div className="col-12">
          <p className="mb-5-rem mt-5-rem fs-24">
            The Retail industry is experiencing unprecedented change driven by
            consumer needs and demands enabled by technology. Artificial
            intelligence in Retail has empowered businesses with data that is
            leveraged to predict shifts in customer behavior, improve Retail
            operations, and uncover new business opportunities. It is high time
            for both digital and traditional Retailers to engage customers
            through personalization touchpoints to meet customer expectations,
            improve customer lifetime value and faster business growth.
          </p>
        </div>
      </div>

      {/* Key takeaways from this webinar */}
      <div className="mb-5 center-95 row main-content-para">
        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12 fs-48">
          Key take aways from this webinar
        </div>
        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
          <ul className="key-takeaways ul-keys mt-3-rem w-100">
            <li className="key-takeaways fs-24 mb-1 li-para">
              <span className="pl-3 fs-24 li-para">
                How AI & Analytics can help Retailers move from a traditional
                business model to AI centered business model
              </span>
            </li>
            <li className="key-takeaways fs-24 mb-1 li-para">
              <span className="pl-3 fs-24 li-para">
                Leverage AI & Analytics to adapt customer behavioral shifts
              </span>
            </li>
            <li className="key-takeaways fs-24 mb-1 li-para">
              <span className="pl-3 fs-24 li-para">
                Uncover how to deliver meaningful customer experience
              </span>
            </li>
            <li className="key-takeaways fs-24 mb-1 li-para">
              <span className="pl-3 fs-24 li-para">
                Understand the real case studies with business impact
              </span>
            </li>
            <li className="key-takeaways  mb-1 li-para">
              <span className="pl-3 fs-24 li-para">And more...</span>
            </li>
          </ul>
        </div>
        <div
          className="col-sm-12 col-xs-12 col-md-4 col-lg-4 mt-3-rem"
          onClick={handleCallback}
        >
          <p className="submit-button cr-pointer px-4 d-table">Register now</p>
        </div>
      </div>

      {/* Learn From Industry Experts */}
      <Webinarexperts scrollparentTotop={handleCallback} />
      {/* Footer */}
      <Webinarfooter />
    </>
  );
};

export default Webinars;
