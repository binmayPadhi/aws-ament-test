import React from "react";
import JobDetails from "./Job Openings/JobDetails";

function JobLists() {
  return (
    <>
      {/* <!-- JOB DESCRIPTIONS --> */}

      <div className="job-desc-header text-center">
        <h1 className="section-title mt-3">CURRENT OPENINGS</h1>
      </div>

      <div className="job-desc-lists w-90 mx-auto">
        <JobDetails />
      </div>
    </>
  );
}

export default JobLists;
