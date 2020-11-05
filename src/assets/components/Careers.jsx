import React from "react";
import CareersDetails from "./Careers/CareersDetails";
import OurCulture from "./Careers/OurCulture";
import JobLists from "./Careers/JobLists";
import {Link} from "react-scroll";
import CareersBG from "../images/careers-page/amnet-careers-bg.jpg"


function Careers(){

    const careerStyle = {
        backgroundImage:`url(${CareersBG})`,
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position : "relative"
    }

    return (
        <>
            {/* <!-- Careers Page intro --> */}
            <div className="homepage-intro container-fluid careers-page-bg" style={careerStyle}>
                <div className="vr "></div>
                <div className="row all-margin">
            
                    <div className="col-lg-6 homepage-intro-caption all-margin">
                        <h2>Create your Future!</h2>
                        <p>We are on a mission to solve world’s toughest problems. 
                            Come join the fastest growing company in the region working in the hottest technology sector!
                        </p>

                        <div className="homepage-intro-btn">
                        <Link
                            activeClass="active"
                            to="details"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            <button type="button" className="btn btn-primary learn-more-btn">Learn more</button>
                        </Link>
                            <a href="/contactus">
                                <button type="button" className="btn btn-default" >Contact Us <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                            </a>
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