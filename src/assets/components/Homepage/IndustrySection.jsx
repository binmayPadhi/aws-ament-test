import React from "react";
import IndusrtySectionData from "../../Data/Homepage-Data/IndustrySectionData";

function IndustrySection (){
    return (
        <>
            {/* <!-- INDUSTRIES WE COVER --> */}

            <div className="industry-section new-all-margin">
    
    <h1 className="section-title" style={{marginTop:"60px"}}>INDUSTRIES WE COVER</h1>      
    
    <div className="industry-section-row row mt-5">

    {IndusrtySectionData.map(list => {
        return ( 

            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 industry-section-column">
            <div className="card industry-section-card">
                <img loading="lazy" className="card-img-top img-fluid" src= {list.industryIMG} alt="Case Studies" />
                <div className="card-img-overlay new-industry-header">
                <h5 class="card-title text-center">{list.industryTitle}</h5>
                </div>
                <div className="card-body" style={{display:"none"}}>
                    {/* <h5 className="card-title">{list.industryTitle}</h5> */}
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