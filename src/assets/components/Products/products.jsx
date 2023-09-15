import React from "react";
import { useNavigate } from "react-router-dom";
import test from "../../images/HomePage/SI_Image.png";
import second from "../../images/HomePage/SD_Image.png";

const Product = () => {
  const history = useNavigate();
  const redirectTo = (e, name) => {
    
    e.preventDefault();
    if (name === "contact") {
      history(`/contactus`);
    } else {
      history(`/careers`);
    }
  };
  return (
    <>
     <div className="press-start">
      <div className="gradient-orange">
        <div className="w-88 mx-auto">
        <h1 className="fs-40 fw-bold-800 swift-color">Swift Insights</h1>
        </div>
      </div>
      <div className="bg-grey-insights">
        <div className="w-88 mx-auto">
        <div className="row">
          <div className="col-lg-5 analytics-space">
             <p className="analytics-font">Analytics Made Simple & <span className="color-orange fw-bold-600">Powerful</span></p>
             <p className="let-styling fw-bold-600">Let your data architect your business growth</p>
             <p className="fs-19"> Swift Insights is an AI-driven platform that transforms your data into
          actionable insights to make informed business decisions. It enables
          businesses to reach their next goal and beyond.
             </p>
             <div className="d-flex">
             <a
                 href="https://swiftinsights.ai/"
                 target="_blank"
                  type="button"
                  className="fw-bold-700 fs-14 px-4 py-3 text-white btn-black d-table rounded-1 cr-pointer"
                >
                  Learn More
                </a>
                <a
                   href="/contactus"
                  type="button"
                  className="fw-bold-700 fs-14 px-4 py-3 text-white btn-orange d-table rounded-1 cr-pointer ml-5"
                >
                  Contact Us
                </a>
                </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
          <img src={test} className="test-image" />
          </div>
        </div>
        </div>
      </div>
      <div className="gradient-blue press-start">
        <div className="w-88 mx-auto">
        <h1 className="fs-40 fw-bold-800 swift-color">Swift Data</h1>
        </div>
      </div>
      <div className="bg-grey-insights">
        <div className="w-88 mx-auto">
        <div className="row">
          <div className="col-lg-5 analytics-space">
             <p className="analytics-font">Data Movement Made Nimble &  <span className="color-blue fw-bold-600">Agile</span></p>
             <p className="let-styling fw-bold-600">Accelerate your data migration or setup instant pipelines</p>
             <p className="fs-19">Swift Data is a cloud-first low-code data movement accelerator that delivers high quality data from any source to your target systems & enables you to set up instant data pipelines
             </p>
             <div className="d-flex">
                <a
                   href="/contactus"
                  type="button"
                  className="fw-bold-700 fs-14 px-4 py-3 text-white btn-blue d-table rounded-1 cr-pointer "
                >
                  Contact Us
                </a>
                </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
          <img src={second} className="test-image" />
          </div>
        </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default Product;
