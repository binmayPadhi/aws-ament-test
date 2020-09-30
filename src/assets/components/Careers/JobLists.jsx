import React from "react";
import JobDetails from "./Job Openings/JobDetails";

function JobLists(){
    return (
        <>
            {/* <!-- JOB DESCRIPTIONS --> */}

            <div class="job-desc-header text-center">
                <h3 class="section-header">APPLY NOW</h3>
                <h1 class="section-title mt-3">Current Openings</h1>     
            </div>

            <div class="job-desc-lists all-margin">
                <JobDetails />
            </div>
        </>
    )
}

export default JobLists;