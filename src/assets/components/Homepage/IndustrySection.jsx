import React from "react";
import IndusrtySectionData from "../../Data/Homepage-Data/IndustrySectionData";
import "../../CSS/Services.css";

function IndustrySection() {
  return (
    <>
      {/* <!-- INDUSTRIES WE COVER --> */}
      <div className="center text-center py-4 mt-5 mb-5 service_title">
        Industries we serve
      </div>
      <div className="row">
        {IndusrtySectionData.map((list) => {
          return (
            <div
              className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4"
              key={list.id}
            >
              <div className="card industry-section-column border-0">
                <img
                  loading="lazy"
                  className="card-img-top img-fluid"
                  src={list.industryIMG}
                  alt="Case Studies"
                />
                <div className="card-img-overlay new-industry-header">
                  <img
                    loading="lazy"
                    className="card-img-top img-fluid new-industry-ribbon"
                    src={list.tile}
                    alt="Case Studies"
                  />
                  <h5 className="card-title text-center pl-5">
                    {list.industryTitle}
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default IndustrySection;
