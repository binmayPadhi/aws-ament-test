import React from "react";
import IndusrtySectionData from "../../Data/Homepage-Data/IndustrySectionData";

function IndustrySection (){
    return (
        <>
            {/* <!-- INDUSTRIES WE COVER --> */}

<div className="industry-section all-margin">
    <h3 className="section-header">WE'VE GOT YOUR BACK</h3>
    <h1 className="section-title mt-3">Industries We Cover</h1>      
    
    <div className="industry-section-row row mt-5">

        {IndusrtySectionData.map(list => {
            return (
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12" key = {list.id}>
                    <div className="card industry-section-card">
                        <img className="card-img-top img-fluid" src= {list.industryIMG} alt="Case Studies" />
                        <div className="card-body">
                            <span className="dot-icon"><img className="img-fluid" src= {list.industryIcon} alt={list.industryTitle} /> </span>
                            <h5 className="card-title">{list.industryTitle}</h5>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
</div>
        </>
    )
}

export default IndustrySection;