import React from "react";
import JobContentsData from "../../Data/Careers-Data/JobContentsData";

function JobContents (){
    return (
        <>
            {/* <!--JOB CONTENT--> */}
            {JobContentsData.map(jobContent => {
                return (
                    <div id={jobContent.id} class="collapse collapse-content" aria-labelledby={jobContent.id} data-parent="#accordion" key={jobContent.id}>
                        <div class="card-body">

                            <div class="job-desc-card-info">
                    
                                <h1>{jobContent.role}</h1>
                                <p>{jobContent.roleDesc}</p>
                      
                                <h1>{jobContent.responsibilities}</h1>
                                <ul class="job-info-lists">
                                    <li>
                                        Support planning, design, development and delivery of data engineering solutions in alignment with business requirements and design standards.
                                    </li>
                                </ul>

                                <h1>{jobContent.toBring}</h1>
                                <ul class="job-info-lists">
                                    <li>
                                        Graduation / post graduation in CSE / IT / ECE.
                                    </li>
                                </ul>
                                <h4 class="job-info-footer"> CANDIDATES MAY SHARE THEIR RESUMES AT: <span><a href="mailto:careers@amnetdigital.com">careers@amnetdigital.com</a></span></h4>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default JobContents;