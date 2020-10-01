import React from "react";
import JobDetailsData from "../../../Data/Careers-Data/JobOpeningsData/JobDetailsData";

function JobDetails (){
    return (
        <>

        {JobDetailsData.map(data => {
            return(
                <>
                    <div class="card job-desc-card " data-toggle="collapse" data-target={`#${data.id}`}>
                        <div class="card-header" id="job-desc-2">
                            <h5 class="mb-0">
                                <button class="btn btn-link"  aria-expanded="true" aria-controls="data-engineer">
                                    {data.jobTitle}
                                    {/* {data.jobTitle.length > 15 ? data.jobTitle.substring(0,15)+"..." : data.jobTitle } */}
                                </button>
                                <span class="job-icon"><i class="fa fa-arrow-down" aria-hidden="true"></i></span>
                            </h5>
                        </div>
                    </div>
                    {/* <!--COLLAPSE CONTENT--> */}
                    <div id={data.id} class="collapse collapse-content" aria-labelledby="job-desc-2" data-parent="#accordion">
                        <div class="card-body">
                            {/* <h1 className = "text-center">{data.jobTitle}</h1> */}
                            <div class="job-desc-card-info">
                                <h1>{data.role}</h1>
                                <p>
                                    {data.roleDesc}
                                </p>
                      
                                <h1>{data.responsibilities}</h1>
                                <ul class="job-info-lists">
                                    {data.responsibilitiesList.map(list => {
                                        return(
                                            <li>
                                                {list.list}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <h1>{data.toBring}</h1>
                                <ul class="job-info-lists">
                                    {data.toBringLists.map(list => {
                                        return(
                                            <li>
                                                {list.list}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <h4 class="job-info-footer"> CANDIDATES MAY SHARE THEIR RESUMES AT: <span><a href="mailto:careers@amnetdigital.com">careers@amnetdigital.com</a></span></h4>
                            </div>
                        </div>
                    </div>
                    
                </>
            )
        })}
            
        </>
    )
}

export default JobDetails;