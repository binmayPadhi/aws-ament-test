import React from "react";
import CaseStudiesSectionData from "../../Data/Homepage-Data/CaseStudiesSectionData";

function CaseStudiesSection() {
  return (
    <>
      {/* <!--CASE STUDIES SECTION--> */}

      <div className="case-studies-new w-90 mx-auto ">
        <h1 className="section-title below-spacings" style={{ marginTop: "60px" }}>
          CASE STUDIES
        </h1>

        <div className="row mx-0  new-case-studies-row text-left">
          {CaseStudiesSectionData.map((list) => {
            return (
              <div
                className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-4 d-flex align-items-strech"
                key={list.id}
              >
                <div className="card animation-card-image  box-shadow">
                  <div className="card-header border-0 bgc-white p-0">
                    <img
                      src={list.caseStudiesIMG}
                      alt={list.caseStudiesTitle}
                      className="blog_images"
                    />
                  </div>
                  <div className="card-body propensity-modelling pb-2">
                    <h5 className="card-body-heading">
                      {list.caseStudiesTitle}
                    </h5>
                    <p className="card_body_description">
                      {list.caseStudiesDesc}
                    </p>
                  </div>
                  <div className="card-footer border border-top-0 border-bottom-0 text-left border-left-0 border-right-0 bgc-white">
                    <p>
                      <a
                        className="anchor_styles"
                        href={`./case-studies#${list.id}`}
                      >{`Learn More ->`}</a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="new-explore-link text-center">
        <a href="/case-studies">Explore All Case Studies</a>
      </div>
    </>
  );
}

export default CaseStudiesSection;
