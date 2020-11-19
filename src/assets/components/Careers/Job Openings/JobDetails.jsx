import React from "react";
import JobDetailsData from "../../../Data/Careers-Data/JobOpeningsData/JobDetailsData";
import careerListIcon from "../../../images/careers-page/job-list-arrow.png";

function JobDetails (){
    return (
        <>

        {JobDetailsData.map(data => {
            return(
                <>
                    <div className="card job-desc-card " data-toggle="collapse" data-target={`#${data.id}`} key = {data.id}>
                        <div className="card-header" id="job-desc-2">
                            <h5 className="mb-0">
                                <button className="btn btn-link"  aria-expanded="true" aria-controls="data-engineer">
                                    {data.jobTitle}
                                    {/* {data.jobTitle.length > 15 ? data.jobTitle.substring(0,15)+"..." : data.jobTitle } */}
                                </button>
                                <span className="job-icon"><img src={careerListIcon} className="img-fluid career-job-icon" alt="icon" /></span>
                                {/* <div className="career-job-icon">
                                    <img src={careerListIcon} className="img-fluid" alt="icon" />
                                </div> */}
                                
                            </h5>
                        </div>
                    </div>
                    {/* <!--COLLAPSE CONTENT--> */}
                    <div id={data.id} className="collapse collapse-content" aria-labelledby="job-desc-2" data-parent="#accordion">
                        <div className="card-body">
                            {/* <h1 className = "text-center">{data.jobTitle}</h1> */}
                            <div className="job-desc-card-info">
                                <div className="experience-info">
                                    <div className="info"><h3><span>Job Level : </span>{data.jobLevel}</h3></div>
                                    <div className="info "><h3><span>Experience : </span>{data.experience}</h3></div>
                                    <div className="info"><h3><span>Location : </span>Hyderabad, India</h3></div>
                                </div>
                                <h1>{data.role}</h1>
                                <p>
                                    {data.roleDesc}
                                </p>
                      
                                <h1>{data.responsibilities}</h1>
                                <ul className="job-info-lists">
                                    {data.responsibilitiesList.map(list => {
                                        return(
                                            <li key={list.id}>
                                                {list.list}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <h1>{data.toBring}</h1>
                                <ul className="job-info-lists">
                                    {data.toBringLists.map(list => {
                                        return(
                                            <li key={list.id}>
                                                {list.list}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <h4 className="job-info-footer"> CANDIDATES MAY SHARE THEIR RESUMES AT: <span><a href="mailto:careers@amnetdigital.com">careers@amnetdigital.com</a></span></h4>
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