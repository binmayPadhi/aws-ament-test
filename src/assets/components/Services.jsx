import React from "react";
import ServicesData from "../Data/Services-Data/ServicesData";
import ServiceBG from "../images/Service-Page/amnet-our-services-bg.jpg";

function Services (){

    const serviceStyle = {
        backgroundImage:`url(${ServiceBG})`,
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position : "relative"
    }

    return (
        <>
            {/* <!-- Service Page intro --> */}
            <div className="homepage-intro service-page-intro" style={serviceStyle}>
                <div className="vr "></div>
                <div className="row all-margin ml-0 mr-0">
            
                    <div className="col-lg-6 homepage-intro-caption all-margin">
                        <h2>Simplify & Modernize!</h2>
                        <p>We blend our knowledge of diverse business domains and deep expertise in Data Management, 
                            AI/ML and Advanced Analytics to solve complex business problems
                        </p>

                        <div className="homepage-intro-btn">
                            <button type="button" className="btn btn-primary" >Learn more</button>
                            <button type="button" className="btn btn-default" >Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Services Page Header and Title --> */}
            <div className="service-page-header text-center mt-5">
                <h3 className="section-header" id="details">UNMATCHED EXPERTISE</h3>
                <h1 className="section-title mt-3" id="AI-ML">Our Services</h1>
            </div>

            {/* <!-- Service page All Services --> */}
            
            <div className="service-page-all-services all-margin" >
                <div className="row service-page-row ml-0 mr-0">

                    {ServicesData.map(service => {
                        return(
                            <div className="col-12 service-list p-0 clearfix" key = {service.id}>
                                <img className="img-fluid img-left service-page-img" src= {service.serviceIMG} alt="Service" />
                                <div className="service-desc">
                                    <h2>{service.title}</h2>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </>
    )
}

export default Services;