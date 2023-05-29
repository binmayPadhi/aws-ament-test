import React from "react";
import encourage from "../../images/careers-page/encourage.png";
import opportunitiesJson from "../../Data/Careers-Data/OpportunitiesData";
import "../../CSS/Opportunities.css";

function Encourageopportunities() {
  return (
    <>
      <div className="weencourage mb-5 text-center">
        <div className="w-90 mx-auto">
          <h1 className="fs-40 fw-bold-600">
            WE ENCOURAGE EQUAL RIGHTS AND OPPORTUNITIES
          </h1>
          <p className="fs-16 fw-bold-400 w-70 mx-auto mt-4 text-center text-grey">
            We exercise an inclusive and safe work environment to provide equal
            rights and opportunities for our stakeholders across the globe as
            foundational values to envision a better society.
          </p>
          <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img src={encourage} className="encourage-img" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 pt-4">
              {opportunitiesJson.map((response) => {
                return (
                  <>
                    <p className="fs-24 fw-bold-600 text-left">
                      {response.heading}
                    </p>
                    <p className="gradient-line"></p>
                    <p className="text-left fs-16 fw-bold-400 text-grey">
                      {response.description}
                    </p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Encourageopportunities;
