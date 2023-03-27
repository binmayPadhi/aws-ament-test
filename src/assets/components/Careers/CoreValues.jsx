import React from "react";
import careerJson from "../../Data/Careers-Data/CareersValuesData";

function CoreValues() {
    return (
        <>
            <div className="job-desc-header text-center">
                <h1 className="section-title mt-3">Our Core Values</h1>
            </div>

            <div className="mt-5 mb-5">
                <div className="w-90 mx-auto">
                    <div className="container">
                        <div className="row">
                            {careerJson.map((response) => {
                                return (
                                    <div
                                        key={response.id}
                                        className="col-lg-4 col-md-4 col-sm-12 text-center"
                                    >
                                        <p className="mb-0">
                                            <img src={response.img} className="w-45" />
                                        </p>
                                        <p className="fw-bold-600 fs-20 text-nero">{response.heading}</p>
                                        <p className="fw-bold-400 fs-16 text-grey">
                                            {response.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoreValues;