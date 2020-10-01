import React from "react";
import careerBG from "../../images/HomePage/amnet-career-section-bg.jpg";

function CareerSection (){

    const careerStyle = {
        backgroundImage:`url(${careerBG})`,
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    return (
        <>
            {/* <!--CAREER SECTION--> */}
            <div className="career career-bg" style = {careerStyle}>
                <div className="career-section all-margin">
        
                <div className="career-section-row row g-0">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 career-caption">
                        <h5>WORK WITH US</h5>
                        <h2>Let's Grow Together!</h2>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 career-details">
                        <p>We are on a mission to solve complex problems and provide solutions 
                            that make a difference! Come work with us!
                        </p>

                        <a href="/careers">
                        <button type="button" className="btn btn-primary">Careers</button>
                        </a>
                        <a href="/contactus">
                            <button type="button" className="btn btn-default" >Contact Us</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CareerSection;