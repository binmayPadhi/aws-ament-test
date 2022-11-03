import React from "react";
import "../../CSS/webinar.css";
import companyIcon from "../../images/Webinar-images/AD-Logo-Full-Green.png";
import zoomIcon from "../../images/Webinar-images/zoom.png";
import Webinarform from "./Webinarform";
import Webinarfooter from "./Webinarfooter";
import Webinarexperts from "./Webinarexperts";
import { useRef } from "react";

const Webinars = () => {
  const titleRef = useRef();
  const handleCallback = (e) => {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
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
        <div className="container mt-10-rem clear">
          <div className="row">
            <div className="col-12 join-styles">join us for the webinar</div>
          </div>
          <div className="row pb-3 mt-5-rem">
            {/* left-side-block */}
            <div className="col-sm-12 col-xs-12 col-md-7 col-lg-7">
              <p className="main_heading">
                Reshaping the Retail Industry through AI to make well-informed
                business decisions
              </p>
              <p className="timing_webniar mt-3-rem">
                Thursday, 17 November 2022 | 11:30 AM - 12:15 PM EST
              </p>
            </div>
            {/* right-side-block */}
            <div className="col-sm-12 col-xs-12 col-md-5 col-lg-5 box-shadow">
              <div className="card w-100">
                <div className="card-header card_header_styles">
                  Register Now!
                </div>
                <div className="card-body">
                  <Webinarform />
                </div>
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
            intelligence (AI) in retail has empowered businesses with key data
            that is leveraged to predict shifts in customer behavior, improve
            retail operations, and uncover new business opportunities. It is
            high time for both digital and traditional retailers need to engage
            customers through utmost personalization touchpoints to meet
            customer expectations, improve customer lifetime value, and foster
            business growth.
          </p>
        </div>
      </div>

      {/* Key takeaways from this webinar */}
      <div className="mb-5 center-95 row main-content-para">
        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12 fs-48">
          Key takeaways from this webinar
        </div>
        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
          <ul className="key-takeaways mt-3-rem">
            <li className="key-takeaways fs-24 mb-1">
              How AI can help retailers move from a traditional business model
              to AI centered business model
            </li>
            <li className="key-takeaways fs-24 mb-1">
              Leverage AI to adapt customer behavioral shifts
            </li>
            <li className="key-takeaways fs-24 mb-1">
              Uncover how to deliver meaningful customer experience through AI
            </li>
            <li className="key-takeaways fs-24 mb-1">
              Understand the real case studies with business impact
            </li>
            <li className="key-takeaways fs-24">And More...</li>
          </ul>
        </div>
        <div
          className="col-sm-12 col-xs-12 col-md-4 col-lg-4 mt-3-rem"
          onClick={handleCallback}
        >
          <p className="submit-button cr-pointer">Register for Webinar</p>
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
