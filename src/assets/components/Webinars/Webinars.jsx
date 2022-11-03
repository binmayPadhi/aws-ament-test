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
        <div className="w-100 d-flex py-4">
          <img
            loading="lazy"
            src={companyIcon}
            className="w-200 mx-auto"
            alt="company_logo"
          />
        </div>
        <div className="container mt-5 clear">
          <div className="row pb-3">
            {/* left-side-block */}
            <div className="col-sm-12 col-xs-12 col-md-7 col-lg-7">
              <p className="main_heading">
                Reshaping the Retail Industry through AI to deliver meaningful
                customer experiences
              </p>
              <p className="timing_webniar">
                Monday, 21 November 2022 | 09:00 PM – 09:45 PM IST
              </p>
              <p className="pl-0">
                <img
                  loading="lazy"
                  src={zoomIcon}
                  className="w-40"
                  alt="company_logo"
                />
              </p>
            </div>
            {/* right-side-block */}
            <div className="col-sm-12 col-xs-12 col-md-5 col-lg-5">
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
        className="new-home-about-details row center-95
        main-content-para mt-5"
      >
        <div className="col-12">
          <p>
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
        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
          <h1>Key takeaways from this webinar</h1>
        </div>
        <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
          <ol className="key-takeaways pl-3">
            <li className="key-takeaways">
              How AI can help retailers move from a traditional business model
              to AI centered business model
            </li>
            <li className="key-takeaways">
              Leverage AI to adapt customer behavioral shifts
            </li>
            <li className="key-takeaways">
              Uncover how to deliver meaningful customer experience through AI
            </li>
            <li className="key-takeaways">
              Understand the real case studies with business impact
            </li>
          </ol>
        </div>
        <div
          className="col-sm-12 col-xs-12 col-md-4 col-lg-4"
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
