import React from "react";
import Headercontent from "./Headercontent";
import Webinarform from "./Webinarform";
import Webinarexperts from "./Webinarexperts";
import Webinarfooter from "./Webinarfooter";
import "../../CSS/webinar.css";
import { useState, useEffect } from "react";
import Letsgetstart from "./Letsgetstart";
import { Helmet } from "react-helmet";

const Thankswebinar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [focusInput, setFocusinput] = useState(false);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const componentName = "thanks-webniar";
  const highlightedForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setFocusinput(true);
  };
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Reshaping the Retail Industry through Advanced Analytics and AI</title>
        <meta name="description" content="The Retail industry is experiencing unprecedented change driven by consumer needs and demands 
enabled by technology. Watch the on-demand webinar now!" />
        <meta name="keywords" content="AI for retail webinar, advanced analytics for retail business" />
      </Helmet>
      <Headercontent componentfrom={componentName} />
      <div className="center-90">
        <div
          className=" row 
        main-content-para"
        >
          <div className="col-sm-12 col-xs-12 col-md-8 col-lg-8">
            <p className="mt-5-rem fs-18 text-justify">
              The Retail industry is experiencing unprecedented change driven by
              consumer needs and demands enabled by technology. Artificial
              intelligence in Retail has empowered businesses with data that is
              leveraged to predict shifts in customer behavior, improve Retail
              operations, and uncover new business opportunities. It is high
              time for both digital and traditional Retailers to engage
              customers through personalization touchpoints to meet customer
              expectations, improve customer lifetime value and foster business
              growth.
            </p>
            <p className="text-dark font-weight-bold fs-18 mt-3-rem">
              What you will learn in this on-demand webinar:
            </p>
            <ul className="key-takeaways ul-keys mt-3-rem w-100">
              <li className="key-takeaways fs-18 mb-1 li-para">
                <span className="pl-3 fs-16  li-para">
                  How AI & Analytics can help Retailers move from a traditional
                  business model to AI centered business model
                </span>
              </li>
              <li className="key-takeaways fs-16 mb-1 li-para">
                <span className="pl-3 fs-16  li-para">
                  Leverage AI & Analytics to adapt customer behavioral shifts
                </span>
              </li>
              <li className="key-takeaways fs-16 mb-1 li-para">
                <span className="pl-3 fs-16  li-para">
                  Uncover how to deliver meaningful customer experience
                </span>
              </li>
              <li className="key-takeaways fs-16 mb-1 li-para">
                <span className="pl-3 fs-16 li-para">
                  Understand the real case studies with business impact
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
              VIEW THE WEBINAR
            </p>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
            <div className={width > 1000 ? "mt-n6" : ""}>
              <div className="card center-98" id="form-page">
                <div className="card-header fs-24 font-weight-bold text-center clr-blue py-5">
                  WATCH THE WEBINAR
                </div>
                <div className="card-body">
                  <Webinarform mouseFocus={focusInput} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Learn From Industry Experts */}
      <div className="mt-3-rem">
        <Webinarexperts />
      </div>
      {/** let gets started */}
      <div className="mt-5-rem mb-5-rem">
        <Letsgetstart />
      </div>
      {/* Footer */}
      <Webinarfooter />
    </>
  );
};

export default Thankswebinar;
