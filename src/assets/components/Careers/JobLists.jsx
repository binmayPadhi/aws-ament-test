import React from "react";
import JobTitleData from "../../Data/Careers-Data/JobTitleData";
import JobContents from "../Careers/JobContents";

function JobLists(){
    return (
        <>
            {/* <!-- JOB DESCRIPTIONS --> */}

            <div class="job-desc-header text-center">
                <h3 class="section-header">APPLY NOW</h3>
                <h1 class="section-title mt-3">Current Openings</h1>     
            </div>

            <div class="job-desc-lists all-margin">

                {JobTitleData.map(jobList => {
                    return (
                        <div class="card job-desc-card " key = {jobList.id}>
                            <div class="card-header" data-toggle="collapse" data-target={jobList.id} id="job-desc-2">
                                <h5 class="mb-0">
                                    <button class="btn btn-link"  aria-expanded="true" aria-controls="data-engineer">
                                        {jobList.jobTitle}
                                    </button>
                                    <span class="job-icon"><i class="fa fa-arrow-down" aria-hidden="true"></i></span>
                                </h5>
                            </div>
                        </div>
                    )
                })}

                {/* JOB CONTENTS */}
                <JobContents />
            </div>
        </>
    )
}

export default JobLists;