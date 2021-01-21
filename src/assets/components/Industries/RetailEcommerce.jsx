import React from "react";
import ServiceBG from "..//../images/industry-Page/retail-bg.png";
import {NavLink} from "react-router-dom";
import AiSolutionIcon from "../../images/industry-Page/ai-solutions-icon.png";

function RetailEcommerce ( ){
    return (
        <>
                        <div className="sub-service-intro container-fluid" style={{backgroundImage:`url(${ServiceBG})`,backgroundAttachment:"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                         <div className="row service-new-all-margin">
                        <div className="col-lg-5 new-subService-AIML-intro-caption new-all-margin">
                            <h2 className="textAnimation" data-text="Automate & Modernize!">
                            Retail & eCommerce
                            </h2>
                            <p>
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum
                            </p>

                            <div className="subService-AIML-intro-btn industries-intro-section">
                                {/* <a href="/casestudies">
                                    <button type="button" className="btn btn-default">View Details</button>
                                </a> */}
                            <NavLink to="/services">
                            <button type="button" className="btn btn-default sub-service-contact-us-btn">Services</button>
                            </NavLink>
                            <NavLink to="/casestudies">
                            <button type="button" className="btn btn-default sub-service-contact-us-btn">Case Studies</button>
                            </NavLink>
                            </div>
                        </div>
                        </div>
                        </div>
                    
    )
        
            
            {/* Industry Page QUOTE SECTION */}
            <div className="homepage-quote homepage-news-text industry-page-quote">
                <h2 className="text-center">
                    "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem"
                </h2>
            </div>
            

            {/* Industry Page Detail Section */}
            <div className="industry-page-detail-section new-all-margin">
                <div className= "row ">
                    <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 detail-section-text-column">
                        <h1 className="detail-section-title">
                        Retail & eCommerce
                        </h1>
                        <p className="detail-section-texts">
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                        </p>
                        <NavLink to="/contactus">
                            <button type="button" className="btn btn-default industry-detail-section-contact-us-btn">Contact Us</button>
                        </NavLink>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 detail-section-img-column">
                        <img className="img-fluid" src={ServiceBG} alt="industry-image" />
                    </div>
                </div>
            </div>

            {/* Industry Page Business Vertical */}
            <div id="business-vertical" style={{height:"60px"}}></div>
            <div className = "industry-page-business-vertical-section">
            <div className="industry-page-business-vertical new-all-margin">
                <h1 className="section-title">Business Vertical</h1>
                <div className="business-vertical-row row ">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <div className="business-vertical-card card">
                            <div className="card-img-top">
                                <img className="img-fluid" src={ServiceBG} alt="industry-image" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                Business to Consumer
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="business-vertical-card card">
                            <div className="card-img-top">
                                <img className="img-fluid" src={ServiceBG} alt="industry-image" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                Business to Business
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="business-vertical-card card">
                            <div className="card-img-top">
                                <img className="img-fluid" src={ServiceBG} alt="industry-image" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                Direct to Consumer
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="business-vertical-card card">
                            <div className="card-img-top">
                                <img className="img-fluid" src={ServiceBG} alt="industry-image" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                Marketplaces Solutions
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            </div>

            {/* Industry Page AI Solutions */}
            <div id="ai-solutions" style={{height:"80px"}}></div>
            <div className ="industry-page-ai-solution-section" >
                <h1 className="section-title">AI Solutions</h1>
                <hr></hr>
                <div className="industry-page-ai-solutions new-all-margin">
                <div className="ai-solutions-row row ">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="ai-solutions-card card">
                            <div className="card-body">
                                <div className="card-title d-flex">
                                <span><img className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Optimizing Marketing Strategy
                                </div>
                                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="ai-solutions-card card">
                            <div className="card-body">
                                <div className="card-title d-flex">
                                <span><img className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Optimize your content for high purchase
                                </div>
                                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="ai-solutions-card card">
                            <div className="card-body">
                                <div className="card-title d-flex">
                                <span><img className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Optimize your digital and social media strategy
                                </div>
                                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="ai-solutions-card card">
                            <div className="card-body">
                                <div className="card-title d-flex">
                                <span><img className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Optimize product pages
                                </div>
                                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                                        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                                </p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            </div>

            {/* Industry Page Our Offerings */}
            <div id="our-offerings" style={{height:"60px"}}></div>
            <div className = "industry-page-our-offering-section" >
                <div className="industry-page-our-offering new-all-margin">
                    <h1 className="section-title">Our Offerings</h1>
                    <hr></hr>

                    <div className="our-offering-row row">
                        <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 our-offering-img text-center">
                            <img className="img-fluid" src={ServiceBG} alt="industry-image" />
                        </div>
                        <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 our-offering-details">
                            <div className="our-offering-title d-flex">
                                <span><img className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Omnichannel Commerce Solutions
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Mobile Commerce
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>System Integrations
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Ecommerce Platform Migration
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Product Information Management
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Business Intelligence
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>SaaS Enablement
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RetailEcommerce;