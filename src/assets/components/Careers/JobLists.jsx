import React from "react";
import JobDetails from "./Job Openings/JobDetails";

function JobLists(){
    return (
        <>
            {/* <!-- JOB DESCRIPTIONS --> */}

            <div className="job-desc-header text-center">
                <h1 className="section-title mt-3">Current Openings</h1>     
            </div>

            <div className="job-desc-lists new-all-margin">
                <JobDetails />
            </div>
        </>
    )
}

export default JobLists;