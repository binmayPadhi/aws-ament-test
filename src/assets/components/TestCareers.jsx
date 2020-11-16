import React from "react";
import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";
import CareerBG from "../images/careers-page/careers-bg.jpg";
import CareersDetails from "./Careers/CareersDetails";
import OurCulture from "./Careers/OurCulture";
import WeValueInnovation from "./Careers/WeValueInnovation";
import JobLists from "./Careers/JobLists";
import EmployeesSay from "./Careers/EmployeesSay";

function TestCareers( ) {
    return (
        <>
            <div className="sub-service-intro container-fluid" style={{backgroundImage:`url(${CareerBG})`,backgroundAttachment:"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                         <div className="row service-new-all-margin">
                        <div className="col-lg-5 new-subService-AIML-intro-caption new-all-margin">
                            <h2>
                            Create Your Future!
                            </h2>
                            <p>
                            We are on a mission to solve world’s toughest problems. 
                            Come join the fastest growing company in the region working in the hottest technology sector!
                            </p>

                            <div className="subService-AIML-intro-btn">
                                {/* <a href="/casestudies">
                                    <button type="button" className="btn btn-default">View Details</button>
                                </a> */}
                            <Link
                            activeClass="active"
                            to="details"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            <button type="button" className="btn btn-default sub-service-view-details-btn">Learn more</button>
                            </Link>
                            <NavLink to="/contactus">
                            <button type="button" className="btn btn-default sub-service-contact-us-btn">Contact Us</button>
                            </NavLink>
                            </div>
                        </div>
                        </div>
            </div>


             {/* New Case Studies QUOTE SECTION */}
             <div className="homepage-quote">
                <h2 className="text-center">
                    "Products & Solutions that make a difference!"
                </h2>
            </div>



             {/* <!-- CAREER-PAGE-DETAILS-SECTION --> */}
             <CareersDetails />



              {/* <!-- CAREER-PAGE-OUR-CULTURE --> */}
              <OurCulture />

              {/* <!-- WE VALUE INNOVATION --> */}    
              <WeValueInnovation />

              {/* <!-- JOB DESCRIPTIONS --> */}
              <JobLists />

              <EmployeesSay />



              {/* NEW HOMEPAGE CAREER SECTION */}

        <div className="new-career-section" style={{width:"auto", height:"auto", backgroundColor:"#19AF8F", padding:"30px",marginTop:"60px"}}>

<div className="new-career-section new-all-margin">

    <div className="career-section-row row g-0">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 career-caption">
            <h5>WORK WITH US</h5>
            <h2>Let's Grow Together!</h2>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 career-details">
            <p>We are on a mission to solve complex problems and provide solutions 
                that make a difference! Come work with us!
            </p>
            <a href="/contactus">
                <button type="button" className="btn btn-default contact-us-button" >Contact Us</button>
            </a>
            <a href="/careers">
                <button type="button" className="btn btn-default careers-button">Careers</button>
            </a>
        </div>
    </div>
</div>
</div>
        </>
    )
}

export default TestCareers;