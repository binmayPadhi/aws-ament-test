import React from "react";
import encourage from "../../images/careers-page/encourage.png";
import opportunitiesJson from "../../Data/Careers-Data/OpportunitiesData";

function Opportunities() {
    return(
        <>
        <div className="weencourage text-center">
            <div className="container">
            <h1 className="encourage-styling fs-36 fw-bold-600">WE ENCOURAGE EQUAL RIGHTS AND OPPORTUNITIES</h1>
            <p className="fs-16 fw-bold-400 mx-auto mt-4 text-grey">We exercise an inclusive and safe work environment to provide equal rights and opportunities for our stakeholders across the globe as foundational values to envision a better society.</p>
            <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
               <img src={encourage} className="encourage-img" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
               {opportunitiesJson.map((list) => {
                return(
                    <>
                    <p className="fs-23 fw-bold-600 text-left">{list.heading}</p>
                    <p className="gradient-line"></p>
                    <p className="text-left fs-16 fw-bold-400 text-grey">{list.description}</p>
                    </>
                )
               })}
            </div>
            </div>
        </div>
        </div>
        </>
    )

}

export default Opportunities;