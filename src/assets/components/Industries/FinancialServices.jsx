import React from "react";
import ServiceBG from "../../images/industry-Page/financial-bg.png";
import {NavLink} from "react-router-dom";
import AiSolutionIcon from "../../images/industry-Page/ai-solutions-icon.png";
import bankingImg from "../../images/industry-Page/banking.png";
import stockImg from "../../images/industry-Page/stock.png";
import fintechImg from "../../images/industry-Page/fintech.png";
import capitalRestructuringImg from "../../images/industry-Page/capital-restructuring.png";

function FinancialServices ( ){
    return (
        <>
                        <div className="sub-service-intro container-fluid" style={{backgroundImage:`url(${ServiceBG})`,backgroundAttachment:"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                         <div className="row service-new-all-margin">
                        <div className="col-lg-5 new-subService-AIML-intro-caption new-all-margin">
                            <h2 className="textAnimation" data-text="Automate & Modernize!">
                            Financial Services
                            </h2>
                            <p>
                            We’ve been building feature-rich financial software solutions since the dawn of the fintech industry. Poised with a team of masterful software developers, 
                            business strategists, and tech experts, we deliver robust solutions to every client. With the experience of working with more than 10 globally-leading banks 
                            and financial institutions, we are the right tech partner for you.
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
                        Financial Services
                        </h1>
                        <p className="detail-section-texts">
                        The BFSI sector is undergoing rapid changes. FinTechs are setting the bar high for customer experience, agility, and speed at which services are delivered. 
                        Superior customer experience and innovative delivery models have become the key differentiators to grow in this market. Ranosys delivers these differentiators 
                        with technical expertise and partnership with powerful platforms.
                        </p>
                        <NavLink to="/contact-us">
                            <button type="button" className="btn btn-default industry-detail-section-contact-us-btn">Contact Us</button>
                        </NavLink>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 detail-section-img-column">
                        <img className="img-fluid" src={ServiceBG} alt="industry-image" loading="lazy" />
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
                                <img className="img-fluid" src={bankingImg} alt="industry-image" loading="lazy" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                Banking
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="business-vertical-card card">
                            <div className="card-img-top">
                                <img className="img-fluid" src={fintechImg} alt="industry-image" loading="lazy"  />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                FinTech
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="business-vertical-card card">
                            <div className="card-img-top">
                                <img className="img-fluid" src={stockImg} alt="industry-image" loading="lazy" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                Stock Market
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="business-vertical-card card">
                            <div className="card-img-top">
                                <img className="img-fluid" src={capitalRestructuringImg} alt="industry-image" loading="lazy" />
                            </div>
                            <div className="card-body">
                                <div className="card-title">
                                Capital Restructuring
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
                                <span><img className="ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" loading="lazy" /></span>Digital Banking Platform
                                </div>
                                <p>Accelerate your journey to cloud with banking technology solutions that modernize core systems and applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="ai-solutions-card card">
                            <div className="card-body">
                                <div className="card-title d-flex">
                                <span><img loading="lazy"  className="ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Insurance Claim Management
                                </div>
                                <p>Insurance claims management products can help insurers reduce 
                                    claims management costs, reduce fraudulent claims, and enhance customer experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="ai-solutions-card card">
                            <div className="card-body">
                                <div className="card-title d-flex">
                                <span><img loading="lazy"  className="ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Digital Wallet Solution
                                </div>
                                <p>Amnet Digital helps you to best use the power of digital payment. With a diverse experience of developing digital payment solutions, 
                                    we ensure that every specific need of the client is addressed.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="ai-solutions-card card">
                            <div className="card-body">
                                <div className="card-title d-flex">
                                <span><img  loading="lazy" className="ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Business Intelligence Solutions
                                </div>
                                <p>We combine the power of data analytics, machine learning, and software development to build astonishingly efficient software applications. 
                                    Our feature-rich BI solutions have helped many clients make insights-based decisions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>  

                <div className="ai-solutions-row row ai-solutions-second-row">
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div className="ai-solutions-card card">
                            <div className="card-body">
                                <div className="card-title d-flex">
                                <span><img  loading="lazy"  className="ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Loan Management Solutions
                                </div>
                                <p>Track customers’ loan data, repayment history, missed installments, etc. with powerful loan management solutions. We help you significantly 
                                    reduce the risks of defaulting while expanding the scope of your business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            </div>

            {/* Industry Page Our Offerings */}
            <div id="our-offerings" style={{height:"70px"}}></div>
            <div className = "industry-page-our-offering-section financial-service-our-offering">
                <div className="industry-page-our-offering new-all-margin">
                    <h1 className="section-title">Our Offerings</h1>
                    <hr></hr>

                    <div className="our-offering-row row">
                        <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 our-offering-img text-center">
                            <img className="img-fluid" src={ServiceBG} alt="industry-image" loading="lazy" />
                        </div>
                        <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 our-offering-details">
                            <div className="our-offering-title d-flex">
                                <span><img loading="lazy"  className="ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Digital Transformation
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img  loading="lazy" className="ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Application Development
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img loading="lazy" className="ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Managed Cloud Services
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img  loading="lazy"  className="ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Product Engineering
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img loading="lazy" className="ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Solutions and Accelerators
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FinancialServices;