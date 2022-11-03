import React from "react";
import "../../CSS/webinar.css";
import director_1 from "../../images/Webinar-images/Valli_Photo.jpg";
import director_2 from "../../images/Webinar-images/KK_Photo.jpg";
import director_3 from "../../images/Webinar-images/Photo-Ganesh.jpg";

const Webinarexperts = ({ scrollparentTotop }) => {
  return (
    <>
      <div className="learn-img">
        <div className="container clear">
          <div className="learn-title">
            <p>Learn From Industry Experts</p>
          </div>
          <div className="learn-content">
            <p className="lh-22 fs-18">
              Join this epic webinar to learn about “Reshaping the Retail
              Industry through Artificial Intelligence” <br /> and participate
              in Q&A session at the end of the webinar to take out the
              guesswork.
            </p>
          </div>
        </div>
        <div className="row center-95">
          <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
            <div className="w-100 d-flex py-4">
              <img
                loading="lazy"
                src={director_1}
                className="w-200 h-180 mx-auto"
                alt="company_logo"
              />
            </div>
            <div>
              <p className="director-name mb-0">Valli Suryadevara</p>
              <p className="director-title">
                Director of Engineering, Amnet Digital{" "}
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
            <div className="w-100 d-flex py-4">
              <img
                loading="lazy"
                src={director_2}
                className="w-200 h-180 mx-auto"
                alt="company_logo"
              />
            </div>
            <div>
              <p className="director-name mb-0">Krishnakanth Narapusetty</p>
              <p className="director-title">
                Director of Technology, Amnet Digital
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
            <div className="w-100 d-flex py-4">
              <img
                loading="lazy"
                src={director_3}
                className="w-200 h-180 mx-auto"
                alt="company_logo"
              />
            </div>
            <div>
              <p className="director-name mb-0">Ganesh Belde</p>
              <p className="director-title">Manager - Data Science</p>
            </div>
          </div>
        </div>
        <div className="row center-95">
          <div className="col-md-4 col-lg-4 col-sm-3 col-xs-3 mt-5-rem mb-5-rem "></div>
          <div className="col-md-4 col-lg-4 col-sm-6 col-xs-6  d-flex justify-content-center">
            <p
              className="submit-button clr-orange cr-pointer mt-5-rem mb-5-rem px-4"
              onClick={() => {
                scrollparentTotop(true);
              }}
            >
              Register Now
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-3 col-xs-3 mt-5-rem mb-5-rem "></div>
        </div>
      </div>
    </>
  );
};

export default Webinarexperts;
