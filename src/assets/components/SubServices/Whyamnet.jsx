import React from "react";
import image1 from "../../images/HomePage/bar.png";
import image2 from "../../images/HomePage/plane.png";
import image3 from "../../images/HomePage/hand.png";
import image4 from "../../images/HomePage/smile.png";

const Whyamnet = () => {
  return (
    <div className="row pb-3 pt-5">
      <div className="col-md-6 col-lg-5 col-xs-12 col-sm-12 border-col1 mb-5">
        <p className="text-left glance_styles glances_position">
          Why
          <p className="text-right glance_styles">
            Amnet Digital?
          </p>
        </p>
      </div>
      <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12 mt-5 mb-5">
        <div className="w-100 d-flex text-left">
          <span>
            <img src={image1} />
          </span>
          <span>
            <p className="heading_why pl-4 mb-0">Proven track record</p>
            <p className="paragraph_why pl-4 width_query text-justify">
              4+ years, built 10+ AI-based digital solutions, and successfully servicing fortune 1000 companies.
            </p>
          </span>
        </div>
        <div className="w-100 d-flex text-right mt-3">
          <span>
            <p className="heading_why pr-4 mb-0">We are doers</p>
            <p className="w-100 justify-content-end d-flex">
              <p className="paragraph_why pr-4 width_query text-justify">
              We do whatever it takes in building your dream MVP in first 90 days. Our only focus is always on tech execution excellence.
              </p>
            </p>
          </span>
          <span>
            <img src={image2} />
          </span>
        </div>
        <div className="w-100 d-flex text-left">
          <span>
            <img src={image3} />
          </span>
          <span>
            <p className="heading_why pl-4 mb-0">Awesome talent</p>
            <p className="paragraph_why pl-4 width_query text-justify">
            We always hire the world-class technology consultants with great minds to solve the most complex technology challenges.
            </p>
          </span>
        </div>
        <div className="w-100 d-flex text-right mt-3">
          <span>
            <p className="heading_why pr-4 mb-0">Happy customers</p>
            <p className="w-100 justify-content-end d-flex">
              <p className="paragraph_why pr-4 width_query text-justify">
              Empowering our customers to achieve their business goals consistently leveraging our deep technology experience without negotiating on the quality.
              </p>
            </p>
          </span>
          <span>
            <img src={image4} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Whyamnet;
