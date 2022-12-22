import React from "react";
import "../../CSS/webinar.css";
import Webinarfooter from "./Webinarfooter";
import Webinarexperts from "./Webinarexperts";
import Headercontent from "./Headercontent";

const Webinars = () => {
  return (
    <>
      <Headercontent />
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
            improve customer lifetime value and foster business growth.
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
      </div>

      {/* Learn From Industry Experts */}
      <Webinarexperts />
      {/* Footer */}
      <Webinarfooter />
    </>
  );
};

export default Webinars;
