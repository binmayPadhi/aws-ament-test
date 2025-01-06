import React from "react";
import OurCultureData from "../../Data/Careers-Data/OurCultureData";
import AmnetOfficeIMG from "../../images/careers-page/amnet-office.jpg";

function OurCulture() {
  return (
    <>
       <div className="bg">
      <div className="careers-our-culture-header pt-5 text-center">
        <h1
          data-aos="fade-up"
          data-aos-offset="200"
          className="section-title mt-3"
        >
          OUR WORKSPACE
        </h1>
      </div>

      <div className="our-culture-section w-90  space-grey mx-auto">
        <div className="row ml-0 mr-0">
          <div
            className="col-lg-6 col-md-12 col-sm-12 col-xs-12 culture-img-left animation-card"
            style={{ paddingLeft: "0px", paddingRight: "0px" }}
          >
            <img
              loading="lazy"
              className="img-fluid"
              src={AmnetOfficeIMG}
              style={{ maxWidth: "99%" }}
              alt="Amnet-Office"
            />
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 culture-img-right">
            <div className="row">
              {OurCultureData.map((img) => {
                return (
                  <div
                    className="col-lg-12 amnet-images animation-card"
                    key={img.id}
                    style={{ paddingLeft: "0px", paddingRight: "0px" }}
                  >
                    <img
                      loading="lazy"
                      className="img-fluid"
                      style={{ maxWidth: "99%" }}
                      src={img.amnetIMG}
                      alt="Amnet-Culture"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default OurCulture;
