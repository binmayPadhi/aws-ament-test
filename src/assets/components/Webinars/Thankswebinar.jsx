import React from "react";
import Headercontent from "./Headercontent";
import Webinarform from "./Webinarform";
import Webinarexperts from "./Webinarexperts";
import Webinarfooter from "./Webinarfooter";
import "../../CSS/webinar.css";

const Thankswebinar = () => {
  const componentName = "thanks-webniar";
  const highlightedForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("form-page").classList.add("highlighted");
    setTimeout(() => {
      document.getElementById("form-page").classList.remove("highlighted");
    }, 60000);
  };
  return (
    <>
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
            <div className="card center-98 mt-n6" id="form-page">
              <div className="card-header fs-24 font-weight-bold text-center clr-blue py-5">
                WATCH THE WEBINAR
              </div>
              <div className="card-body">
                <Webinarform />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Learn From Industry Experts */}
      <div className="mt-3-rem">
        <Webinarexperts />
      </div>
      <div className="mt-3-rem mb-3-rem">
        <div className="row">
          <div className="col-9 bg-left py-3">
            <div className="center-98">
              <p className="mb-0 text-white fs-14 font-weight-bold">
                Do you want your AI & Data Analytics investment to bring
                meaningful results with real ROI?
              </p>
              <p className="mb-0 text-white fs-14 font-weight-bold">
                Schedule your FREE consulation now!
              </p>
            </div>
          </div>
          <div className="col-3 bg-right py-3 d-flex w-100">
            <div className="center-98">
              <p className="mb-0 text-white fs-14 font-weight-bold w-100">
                Let's get started
                <i
                  className="fa fa-long-arrow-right text-white fs-16 pl-2"
                  aria-hidden="true"
                ></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Webinarfooter />
    </>
  );
};

export default Thankswebinar;