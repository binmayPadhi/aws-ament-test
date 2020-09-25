import React from "react";
import OurServicesData from "../../Data/Homepage-Data/OurServicesData";
import AiServiceIMG from "../../images/HomePage/our-services/amnet-ai-ml.jpg";
import ourServiceBG from "../../images/HomePage/our-services/amnet-our-services-bg.png";

function OurServices (){

    const ourServiceStyle = {
        backgroundImage:`url(${ourServiceBG})`,
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover" 
    }
    return (
        <>
                {/* <!-- OUR SERVICES SECTION --> */}

                <div className="our-services" style={ourServiceStyle}>
    
                    <h3 className="section-header text-center">WHAT WE DO</h3>
                    <h1 className="section-title text-center">Our Services</h1>
        
                    <div className="all-margin our-service-lists">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                            </ol>
                            <div className="carousel-inner">
                            
                                <div className="carousel-item active">
                                    <div className="row services-row ml-0 mr-0 no-gutters">
                                        <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12">
                                            <img className="card-img-top img-fluid" src={AiServiceIMG} alt="AI / ML"/>
                                        </div>
                                        <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 service-card">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h3 className="card-title">AI / ML SERVICES</h3>
                                                    <p className="card-text">Take advantage of the data-driven mindset that leverages cutting-edge 
                                                        technology to develop world className solutions.
                                                    </p>
                                                    {/* <a href="./services.html#AI-ML" className="learn-more-services">Learn More -></a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {OurServicesData.map(serviceList => {
                                    return (
                                        <div className="carousel-item" key = {serviceList.id}>
                                            <div className="row services-row ml-0 mr-0 no-gutters">
                                                <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12">
                                                    <img className="card-img-top img-fluid" src= {serviceList.serviceIMG} alt = {serviceList.serviceTitle} />
                                                </div>
                                                <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 service-card">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h3 className="card-title">{serviceList.serviceTitle}</h3>
                                                            <p className="card-text">{serviceList.serviceDesc}</p>
                                                            {/* <a href="./services.html#AI-ML" className="learn-more-services">Learn More -></a> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default OurServices;