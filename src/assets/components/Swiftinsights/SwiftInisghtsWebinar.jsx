import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Swiftinsightsheader from "./Swiftinsightsheader";
import Swiftinsightsform from "./Swiftsform";
import "../../CSS/webinar.css";
import Swiftexperts from "./Swiftexperts";
import Webinarfooter from "../Webinars/Webinarfooter";

const SwiftInisghtsWebinar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [focusInput, setFocusinput] = useState(false);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const componentFrom = "swiftInsights";
  const highlightedForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setFocusinput(true);
  };
  return (
    <>
      <Swiftinsightsheader />
      <div className="center-90 mb-5">
        <div
          className=" row 
        main-content-para"
        >
          <div className="col-sm-12 col-xs-12 col-md-8 col-lg-8">
            <p className="mt-5-rem fs-18 text-justify">
              <span className="font-weight-bold fs-18 pr-1">
                Swift Insights
              </span>
              help modern retailers remove the guesswork, increase profit
              growth, and scale to become a dominant force within the Retail
              industry. Our Retail Analytics platform provides the data they
              need to make informed decisions regarding crucial elements of a
              retail business such as - Sales, Operations and Planning.
            </p>
            <p className="text-dark font-weight-bold fs-18 mt-3-rem">
              In this webinar you will learn how our AI-led Advanced Analytics
              platform will help to:
            </p>
            <ul className="key-takeaways ul-keys mt-3-rem w-100">
              <li className="key-takeaways fs-18 mb-1 li-para">
                <span className="pl-3 fs-16  li-para">
                  Reduce Customer Acquisition Cost (CAC) & Increase Customer
                  Retention Rate
                </span>
              </li>
              <li className="key-takeaways fs-16 mb-1 li-para">
                <span className="pl-3 fs-16  li-para">
                  Inventory Optimization and better Resource Planning
                </span>
              </li>
              <li className="key-takeaways fs-16 mb-1 li-para">
                <span className="pl-3 fs-16  li-para">
                  Customer Segmentation while identifying their buying Trends &
                  Patterns
                </span>
              </li>
              <li className="key-takeaways fs-16 mb-1 li-para">
                <span className="pl-3 fs-16 li-para">
                  Product Performance & Sales Insights at Category, Store, Brand
                  level, etc.
                </span>
              </li>
              <li className="key-takeaways fs-16 mb-1 li-para">
                <span className="pl-3 fs-16 li-para">
                  Derive Omni-presence strategy and maximise ROI on Marketing
                </span>
              </li>
              <li className="key-takeaways fs-16 mb-1 li-para">
                <span className="pl-3 fs-16 li-para">
                  Improve Personalization techniques and uncover Product
                  Associations
                </span>
              </li>
              <li className="key-takeaways  mb-1 li-para">
                <span className="pl-3 fs-16 li-para">And more...</span>
              </li>
            </ul>
            <p
              className="mt-2 btn-color p-3 fs-14 cr-pointer font-weight-bold d-table"
              onClick={highlightedForm}
            >
              REGISTER FOR THE WEBINAR
            </p>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
            <div className={width > 1000 ? "mt-n6" : ""}>
              <div className="card center-98" id="form-page">
                <div className="card-header fs-24 font-weight-bold text-center clr-blue py-5">
                  REGISTER FOR THE WEBINAR
                  <br />
                  <p className="fs-12 mb-0 text-dark center-90">
                    Please complete the form below to attend the webinar.
                  </p>
                </div>
                <div className="card-body">
                  <Swiftinsightsform mouseFocus={focusInput} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Learn From Industry Experts */}
      <Swiftexperts />
      {/* Footer */}
      <Webinarfooter />
    </>
  );
};

export default SwiftInisghtsWebinar;
