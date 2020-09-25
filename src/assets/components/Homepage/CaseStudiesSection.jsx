import React from "react";
import CaseStudiesSectionData from "../../Data/Homepage-Data/CaseStudiesSectionData";

function CaseStudiesSection (){
    return (
        <>
             {/* <!--CASE STUDIES SECTION--> */}

    <div className="case-studies all-margin">
        <h3 className="section-header">PROBLEMS ADDRESSED</h3>
        <h1 className="section-title mt-3">Case Studies</h1>      
        
        <div className="case-studies-row row mt-5">

            {CaseStudiesSectionData.map(list => {
                return (
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12" key={list.id}>
                        <div className="card case-studies-card">
                            <img className="card-img-top img-fluid" src= {list.caseStudiesIMG} alt="Case Studies" />
                            <div className="card-body propensity-modelling">
                                <span className="dot-icon"><img className="img-fluid" src={list.caseStudiesIcon} alt={list.caseStudiesTitle} /> </span>
                                <h5 className="card-title">{list.caseStudiesTitle}</h5>
                                <p>{list.caseStudiesDesc}</p>
                                {/* <a href="./caseStudies.html#propensity-modelling">Learn More -></a> */}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        <a href="./caseStudies.html" className="explore-all-link">Explore All</a>
    </div>
        </>
    )
}

export default CaseStudiesSection;