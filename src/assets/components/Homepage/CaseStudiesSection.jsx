import React from "react";
import CaseStudiesSectionData from "../../Data/Homepage-Data/CaseStudiesSectionData";

function CaseStudiesSection() {
  return (
    <>
      {/* <!--CASE STUDIES SECTION--> */}

      <div className="case-studies new-all-margin">
        <h1 className="section-title" style={{ marginTop: "60px" }}>
          CASE STUDIES
        </h1>

        <div className="row  new-case-studies-row">
          {CaseStudiesSectionData.map((list) => {
            return (
              <div
                className="col-lg-3 col-md-6 col-sm-12 col-xs-12 new-case-studies-card"
                key={list.id}
              >
                <div className="card animation-card-image">
                  <img
                    loading="lazy"
                    className="card-img-top img-fluid"
                    src={list.caseStudiesIMG}
                    alt="Case Studies"
                  />
                  <div className="card-body propensity-modelling">
                    <h5 className="card-title">{list.caseStudiesTitle}</h5>
                    <p>{list.caseStudiesDesc}</p>
                    <a href={`./casestudies#${list.id}`}>{`Learn More ->`}</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="new-explore-link text-center">
        <a href="/casestudies">Explore All</a>
      </div>
    </>
  );
}

export default CaseStudiesSection;
