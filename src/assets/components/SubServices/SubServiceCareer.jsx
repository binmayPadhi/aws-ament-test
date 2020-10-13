import React from "react";
import SubServiceCareerBG from "../../images/Sub-Service-Images/Data-Labeling-Images/we-are-available-bg.jpg";

function SubServiceCareerSection (){

    const careerStyle = {
        backgroundImage:`url(${SubServiceCareerBG})`,
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    return (
        
        <>
            {/* <!--CAREER SECTION--> */}
            <div className="career career-bg sub-service-career" style = {careerStyle}>
                <div className="career-section all-margin">
        
                <div className="career-section-row row g-0">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 career-caption">
                        <h5>WORK WITH US</h5>
                        <h2>We're Available!</h2>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 career-details">
                        <p>We are on a mission to solve complex problems and provide solutions that make a difference! 
                            Come work with us and achieve extraordinary outcomes!
                        </p>

                        <a href="/contactus">
                        <button type="button" className="btn btn-default career-btn">Contact Us</button>
                        </a>
                        <a href="/services">
                            <button type="button" className="btn btn-default service-btn" >Services</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SubServiceCareerSection;