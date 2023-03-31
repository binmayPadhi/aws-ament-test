import React from "react";
import "../../CSS/Services.css";
import propensity from "../../images/HomePage/PropensityM.png";
import preventive from "../../images/HomePage/preventive.png";
import risk from "../../images/HomePage/risk.png";
import virutal from "../../images/HomePage/virutal.png";
import { Carousel } from "react-bootstrap";

function CaseStudiesSection() {
  return (
    <>
      {/* <!--CASE STUDIES SECTION--> */}

      <div className="center text-center py-4  mb-5 service_title">
        CASE STUDIES
      </div>
      <div className="container mb-5">
        <Carousel variant="dark">
          <Carousel.Item>
            <div className="row" style={{ backgroundColor: "#F9F9F9" }}>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img src={propensity} className="w-100 propensity-img" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5">
                <h1 className="fs-19 fw-bold-600 text-black">
                  Propensity Modelling
                </h1>
                <p className="fs-14 fw-bold-400 text-grey pt-5">
                  Targeted marketing campaigns based on insights provided by
                  propensity models for a large eCommerce client. Improved
                  campaign effectiveness.
                </p>
                <p className="text-green fs-14 fw-bold-500 bottom-read bottom-0">
                  {"Read More ->"}{" "}
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row bg-grey" style={{ backgroundColor: "#F9F9F9" }}>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img src={preventive} className="w-100 propensity-img" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5">
                <h1 className="fs-19 fw-bold-600 text-black">
                  Preventive Maintenance
                </h1>
                <p className="fs-14 fw-bold-400 text-grey pt-5">
                  Client mandated solution that can automate the lending
                  process, credit checks, design alerts to monitor anomalies &
                  outliers and identify high risk customers.
                </p>
                <p className="text-green fs-14 fw-bold-500 bottom-read bottom-0">
                  {"Read More ->"}{" "}
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row bg-grey" style={{ backgroundColor: "#F9F9F9" }}>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img src={risk} className="w-100 propensity-img" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5">
                <h1 className="fs-19 fw-bold-600 text-black">
                  Virtual Shopping Assistant
                </h1>
                <p className="fs-14 fw-bold-400 text-grey pt-5">
                  Developed an automated process solution that continuously
                  monitors sensor data to predict upcoming downtime/faults and
                  raise tickets ahead of time.
                </p>
                <p className="text-green fs-14 fw-bold-500 bottom-read bottom-0">
                  {"Read More ->"}{" "}
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row bg-grey" style={{ backgroundColor: "#F9F9F9" }}>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img src={virutal} className="w-100 propensity-img" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5">
                <h1 className="fs-19 fw-bold-600 text-black">Risk Analytics</h1>
                <p className="fs-14 fw-bold-400 text-grey pt-5">
                  Virtual shopping assistant to help shoppers find the best
                  products in the easiest way across multiple domains like
                  Retail, eCommerce and Healthcare.
                </p>
                <p className="text-green fs-14 fw-bold-500 bottom-read bottom-0">
                  {"Read More ->"}{" "}
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CaseStudiesSection;
