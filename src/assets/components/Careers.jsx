import React from "react";
import CareersDetails from "./Careers/CareersDetails";
import OurCulture from "./Careers/OurCulture";
import JobLists from "./Careers/JobLists";

function Careers(){
    return (
        <>
            {/* <!-- Careers Page intro --> */}
            <div class="homepage-intro container-fluid careers-page-bg">
                <div class="vr "></div>
                <div class="row all-margin">
            
                    <div class="col-lg-6 homepage-intro-caption all-margin">
                        <h2>Create your Future!</h2>
                        <p>We are on a mission to solve world’s toughest problems. 
                            Come join the fastest growing company in the region working in the hottest technology sector!
                        </p>

                        <div class="homepage-intro-btn" id="details">
                            <button type="button" class="btn btn-primary learn-more-btn">Learn more</button>
                            <button type="button" class="btn btn-default">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- CAREER-PAGE-DETAILS-SECTION --> */}
            <CareersDetails />

            {/* <!-- CAREER-PAGE-OUR-CULTURE --> */}
            <OurCulture />

            {/* <!-- JOB DESCRIPTIONS --> */}
            <JobLists />

        </>
    )
}

export default Careers;