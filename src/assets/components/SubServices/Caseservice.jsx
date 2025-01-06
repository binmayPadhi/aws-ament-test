import React from "react";
import "../../CSS/Services.css";
import CaseserviceData from "../../Data/Caseservice-Data/CaseserviceData";

function Case () {
  return (
    <>
      {/* <!--CASE STUDIES SECTION--> */}

      <div className="center text-center py-4 mt-5 mb-5 service_title">
        CASE STUDIES
      </div>

      <div className="case-studies">
        <div className="row  new-case-studies-row">
          {CaseserviceData.map((list) => {
            return (
              <div
                className="col-lg-3 col-md-6 col-sm-12 col-xs-12 new-case-studies-card px-3"
                key={list.id}
              >
                <div className="card rounded-0 animation-card-image  border-bottom-card">
                  <img
                    loading="lazy"
                    className="card-img-top img-fluid"
                    src={list['caseImg']}
                    alt="Case Studies"
                  />
                  <div className="card-body propensity-modelling">
                    <h5 className="card-title">{list.caseStudiesTitle}</h5>
                    <p>{list.caseStudiesDesc}</p>
                    <a href={`./case-studies#${list.id}`}>{`Read More ->`}</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Case;
