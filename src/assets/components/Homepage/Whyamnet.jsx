import React from "react";
import image1 from "../../images/HomePage/bar.png";
import image2 from "../../images/HomePage/plane.png";
import image3 from "../../images/HomePage/hand.png";
import image4 from "../../images/HomePage/smile.png";

const Whyamnet = () => {
  return (
    <div className="row pb-3 pt-5">
      <div className="col-md-6 col-lg-5 col-xs-12 col-sm-12 border-col1 mb-5">
        <div className="company_name text-center">Why <br/>Amnet Digital?</div>
      </div>
      <div className="col-md-6 col-lg-7 col-xs-12 col-sm-12 margin-75">
        <div className="w-100 d-flex text-left">
          <span>
            <img src={image1} />
          </span>
          <span>
            <p className="heading_why pl-4 mb-0">Proven track record</p>
            <p className="paragraph_why pl-4 w-50">
              6+ years, built 100+ AI-based Digital Solutions, and successfully
              servicing Fortune 1000 companies.
            </p>
          </span>
        </div>
        <div className="w-100 d-flex text-right mt-3">
          <span>
            <p className="heading_why pr-4 mb-0">We are doers</p>
            <p className="w-100 justify-content-between d-flex">
              <p className="w-50"></p>
              <p className="paragraph_why pr-4 w-50">
                We do whatever it takes in building your dream MVP in first 90
                days to handling 1 billion hits a day. Our only focus is always
                on tech execution excellence.
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
            <p className="paragraph_why pl-4 w-50">
              We always hire the best-in-class technology consultants and
              specialists with great minds to solve the most complex technology
              challenges.
            </p>
          </span>
        </div>
        <div className="w-100 d-flex text-right mt-3">
          <span>
            <p className="heading_why pr-4 mb-0">Happy customers</p>
            <p className="w-100 justify-content-between d-flex">
              <p className="w-50"></p>
              <p className="paragraph_why pr-4 w-50">
                Empowering our customers to achieve their business goals
                consistently leveraging our combined 100+ years of technology
                experience without negotiating on the quality.
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
