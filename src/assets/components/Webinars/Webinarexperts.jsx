import React from "react";
import "../../CSS/webinar.css";
import director_1 from "../../images/Webinar-images/Valli_Photo.jpg";
import director_2 from "../../images/Webinar-images/KK_Photo.jpg";
import director_3 from "../../images/Webinar-images/Photo-Ganesh.jpg";

const Webinarexperts = () => {
  return (
    <>
      <div className="learn-img pb-3">
        <div className="container ">
          <div className="learn-title">
            <p>Learn from Industry Experts</p>
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
                Director - Engineering <br /> Amnet Digital
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
                Director AI & Analytics <br /> Amnet Digital
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
              <p className="director-title">
                Principal Data Scientist <br /> Amnet Digital
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Webinarexperts;
