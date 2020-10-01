import React from "react";
import CareersDetailsData from "../../Data/Careers-Data/CareersDetailsData";

function CareersDetails (){
    return (
        <>
            {/* <!-- CAREER-PAGE-DETAILS-SECTION --> */}

            <div class="careers-page-header text-center mt-5" id="details">
                <h3 class="section-header" >LET'S DO IT</h3>
                <h1 class="section-title mt-3">Working With Us</h1>     
            </div>

            <div class="careers-page-details all-margin">
                <p>Amnet Digital is made up of a bunch of passionate people whose sole focus is to reimagine & 
                    redefine products and solutions. Be a part of fun-loving and people friendly company! Write to 
                    <span><a href="mailto:careers@amnetdigital.com"> careers@amnetdigital.com</a></span>.
                </p>

                <div class="careers-page-details-list-row row">

                    {CareersDetailsData.map(list => {
                        return(
                            <div class="col-lg-6">
                                <ul class="careers-details-lists">
                                    <li>
                                        <span>
                                            <img src={list.listIcon} class="img-fluid list-icon" alt="list-icon" />
                                        </span>
                                        {list.listOne}
                                    </li>
                                    <li>
                                        <span>
                                            <img src={list.listIcon} class="img-fluid list-icon" />
                                        </span>
                                        {list.listTwo}
                                    </li>
                                    <li>
                                        <span>
                                            <img src={list.listIcon} class="img-fluid list-icon" />
                                        </span>
                                        {list.listThree}
                                    </li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default CareersDetails;