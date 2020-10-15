import React from "react";
import ServicesData from "../Data/Services-Data/ServicesData";
import ServiceBG from "../images/Service-Page/amnet-our-services-bg.jpg";
import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";

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
                        <Link
                            activeClass="active"
                            to="details"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            <button type="button" className="btn btn-primary learn-more-btn">Learn more</button>
                        </Link>
                            <NavLink to="/contactus">
                                <button type="button" className="btn btn-default" >Contact Us <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                            </NavLink>
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

                    {ServicesData.map((service, index) => {
                        return(
                            !( index % 2 ) ? 
                                <div className="col-12 service-list p-0 clearfix" key = {service.id} id={service.id}>
                                    <img className="img-fluid img-left service-page-img" src= {service.serviceIMG} alt="Service" />
                                    <div className="service-desc">  
                                        <h2>{service.title}</h2>
                                        <p>{service.description}</p>
                                        <br />
                                        {/* <button className="btn btn-primary" style={{fontSize : "1.5rem"}}>Learn More</button> */}
                                        {/* <a href={`/${service.id}`} className="learn-more-services">{`Learn More ->`}</a> */}
                                        <NavLink to = {`/${service.id}`}  activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                  
                                        <button className="btn btn-default" style={{fontSize : "1.5rem", backgroundColor: '#19AF8F',padding:"5px 15px", color:"white"}}>Learn More</button>
                    
                                        </NavLink>

                                    </div>
                                </div> : 
                                <div className="col-12 service-list p-0 clearfix" key = {service.id} id={service.id}>
                                    <img className="img-fluid img-right service-page-img" src= {service.serviceIMG} alt="Service" />
                                    <div className="service-desc">  
                                        <h2>{service.title}</h2>
                                        <p>{service.description}</p>
                                        <br />
                                        <NavLink to = {`/${service.id}`}  activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                  
                                        <button className="btn btn-default" style={{fontSize : "1.5rem", backgroundColor: '#19AF8F',padding:"5px 15px" ,color:"white"}}>Learn More</button>
                    
                                        </NavLink>
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