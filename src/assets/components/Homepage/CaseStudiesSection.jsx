import React from "react";
import "../../CSS/Services.css";
import propensity from "../../images/HomePage/PropensityM.png";
import CaseStudiesSectionData from "../../Data/Homepage-Data/CaseStudiesSectionData";

function CaseStudiesSection() {
  return (
    <>
      {/* <!--CASE STUDIES SECTION--> */}

      <div className="center text-center py-4  mb-5 service_title">
        CASE STUDIES
      </div>
      <div className="container mb-5">
     <div className="row bg-grey">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <img src={propensity} className="w-100 propensity-img"/>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5">
        <h1 className="fs-19 fw-bold-600">Propensity Modelling</h1>
        <p className="fs-14 fw-bold-400 text-grey pt-5">Targeted marketing campaigns based on insights provided by propensity models for a large eCommerce client.
           Improved campaign effectiveness.</p>
           <p className="text-green fs-14 fw-bold-500 bottom-read">{'Read More ->'} </p>
      </div>
     
   
     </div>
     </div>
      {/* <div className="new-explore-link text-center">
        <a href="/casestudies">Explore All</a>
      </div> */}
    </>
  );
}

export default CaseStudiesSection;
