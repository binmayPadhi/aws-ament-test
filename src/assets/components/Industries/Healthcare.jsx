import React from "react";
import HealthcareBG from "../../images/industry-Page/healthcare-bg.png";
import {NavLink} from "react-router-dom";
import AiSolutionIcon from "../../images/industry-Page/ai-solutions-icon.png";
import infoRequestImg from "../../images/industry-Page/info-on-request.png";
import healthSolutionsImg from "../../images/industry-Page/health-solutions.png";
import telehealthImg from "../../images/industry-Page/telehealth.png";

function Healthcare ( ){
    return (
        <>
                        <div className="sub-service-intro container-fluid" style={{backgroundImage:`url(${HealthcareBG})`,backgroundAttachment:"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                         <div className="row service-new-all-margin">
                        <div className="col-lg-5 new-subService-AIML-intro-caption new-all-margin">
                            <h2 className="textAnimation" data-text="Automate & Modernize!">
                            Healthcare
                            </h2>
                            <p>
                            Our mission is to help healthcare organizations, payers, and their partners use AI technology to help improve outcomes, 
                            streamline operations, identify financial risks, and retain their most valuable health consumers
                            </p>

                            <div className="subService-AIML-intro-btn industries-intro-section">
                                {/* <a href="/casestudies">
                                    <button type="button" className="btn btn-default">View Details</button>
                                </a> */}
                            <NavLink to="/services">
                            <button type="button" className="btn btn-default sub-service-contact-us-btn">Services</button>
                            </NavLink>
                            <NavLink to="/case-studies">
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
                        Why Us!
                        </h1>
                        <p className="detail-section-texts">
                        Amnet Digital, a trusted healthcare technology services and solutions provider, combines its strong application development skills and comprehensive 
                        knowledge of the healthcare domain to digitize your healthcare ecosystem. We develop scalable, secure, engaging, and fully customized healthcare solutions 
                        that enhance the quality of patient care and reduce the cost of operation.
                        </p>
                        <NavLink to="/contact-us">
                            <button type="button" className="btn btn-default industry-detail-section-contact-us-btn">Contact Us</button>
                        </NavLink>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 detail-section-img-column">
                        <img className="img-fluid" src={HealthcareBG} alt="industry-image" />
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
                                <img className="img-fluid" src={healthSolutionsImg} alt="industry-image" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                Personalized Health Solutions
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="business-vertical-card card">
                            <div className="card-img-top">
                                <img className="img-fluid" src={infoRequestImg} alt="industry-image" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                Information on Request
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="business-vertical-card card">
                            <div className="card-img-top">
                                <img className="img-fluid" src={HealthcareBG} alt="industry-image" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                Patient Experience Benchmarks
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="business-vertical-card card">
                            <div className="card-img-top">
                                <img className="img-fluid" src={telehealthImg} alt="industry-image" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                Telehealth
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            </div>

            {/* Industry Page AI Solutions */}
            <div id="ai-solutions" style={{height:"80px"}}></div>
            <div className ="industry-page-ai-solution-section">
                <h1 className="section-title">AI Solutions</h1>
                <hr></hr>
                <div className="industry-page-ai-solutions new-all-margin">
                <div className="ai-solutions-row row ">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="ai-solutions-card card">
                            <div className="card-body">
                                <div className="card-title d-flex">
                                <span><img className="ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Health system optimization
                                </div>
                                <p>Create an efficient, more sustainable and secure healthcare system.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="ai-solutions-card card">
                            <div className="card-body">
                                <div className="card-title d-flex">
                                <span><img className="ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Population health insights
                                </div>
                                <p>Unlock the power of your data to help improve quality, safety and population health management.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="ai-solutions-card card">
                            <div className="card-body">
                                <div className="card-title d-flex">
                                <span><img className="ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Individual insights and engagement
                                </div>
                                <p>Engage, improve and transform the experience for your health consumers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="ai-solutions-card card">
                            <div className="card-body">
                                <div className="card-title d-flex">
                                <span><img className="ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Healthcare cybersecurity
                                </div>
                                <p>Protect your systems and data with an intelligent and orchestrated approach.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>  

                <div className="ai-solutions-row row ">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="ai-solutions-card card">
                            <div className="card-body">
                                <div className="card-title d-flex">
                                <span><img className="ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Digital Healthcare Solutions
                                </div>
                                <p>We develop custom mobile and web-based software solution for clinics and hospitals to deliver benefits like 
                                    inventory management, patient engagement, managing health records, medical billing, and revenue cycle.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="ai-solutions-card card">
                            <div className="card-body">
                                <div className="card-title d-flex">
                                <span><img className="ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Diagnostic Imaging
                                </div>
                                <p>Scale delivery of care, strengthen clinical diagnoses and transform your raw data into actionable insights
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="ai-solutions-card card">
                            <div className="card-body">
                                <div className="card-title d-flex">
                                <span><img className="ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Payer
                                </div>
                                <p>Driving adoption of emerging solutions and platforms to give you the edge.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            </div>

            {/* Industry Page Our Offerings */}
            <div id="our-offerings" style={{height:"60px"}}></div>
            <div className = "industry-page-our-offering-section">
                <div className="industry-page-our-offering new-all-margin">
                    <h1 className="section-title">Our Offerings</h1>
                    <hr></hr>

                    <div className="our-offering-row row">
                        <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 our-offering-img text-center">
                            <img className="img-fluid" src={HealthcareBG} alt="industry-image" />
                        </div>
                        <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 our-offering-details">
                            <div className="our-offering-title d-flex">
                                <span><img className="img-fluid ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Digital Transformation
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img className="img-fluid ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Application Development
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img className="img-fluid ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Managed Cloud Services
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img className="img-fluid ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Product Engineering
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img className="img-fluid ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Solutions and Accelerators
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img className="img-fluid ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Tool Agnostic Approach
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img className="img-fluid ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Healthcare Modernization
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Healthcare;