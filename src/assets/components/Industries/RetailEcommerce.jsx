import React from "react";
import ServiceBG from "..//../images/industry-Page/retail-bg.png";
import {NavLink} from "react-router-dom";
import AiSolutionIcon from "../../images/industry-Page/ai-solutions-icon.png";
import B2BImg from "../../images/industry-Page/B2B.png";
import B2CImg from "../../images/industry-Page/B2C.png";
import D2CImg from "../../images/industry-Page/D2C.png";
import MarketplaceSolutionsImg from "../../images/industry-Page/marketplace-solutions.png";

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
                            Innovative solutions to connect stores, market products and analyze sales. 
                            Personalized experiences to engage browsers and convert them to buyers.
                            </p>

                            <div className="subService-AIML-intro-btn industries-intro-section">
                             
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

            <div id="navbar10">
  <a class="active" href="javascript:void(0)">Home /</a>
  <a href="javascript:void(0)">Industries /</a>
  <a href="javascript:void(0)">Retail & eCommerce</a>
</div>
            

            {/* Industry Page Detail Section */}
            <div className="industry-page-detail-section new-all-margin">
                <div className= "row ">
                    <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 detail-section-text-column">
                        <h1 className="detail-section-title">
                        Why Us!
                        </h1>
                        <p className="detail-section-texts">
                        Retail landscape is changing at an unprecedented pace and the digital experience is becoming a key 
                        differentiator for retailers, distributors, marketplace players, and brands to drive business forward. 
                        Amnet Digital powers the growth of digital commerce across all of these segments. We are proudly associated 
                        with growing businesses and supporting digital operations for some of the biggest retail chains and brands 
                        across the globe.
                        </p>
                        <NavLink to="/contact-us">
                            <button type="button" className="btn btn-default industry-detail-section-contact-us-btn">Contact Us</button>
                        </NavLink>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 detail-section-img-column">
                        <img loading="lazy" className="img-fluid" src={ServiceBG} alt="industry-image" />
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
                                <img loading="lazy" className="img-fluid" src={B2CImg} alt="industry-image" />
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
                                <img loading="lazy" className="img-fluid" src={B2BImg} alt="industry-image" />
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
                                <img loading="lazy"  className="img-fluid" src={D2CImg} alt="industry-image" />
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
                                <img loading="lazy" className="img-fluid" src={ MarketplaceSolutionsImg} alt="industry-image" />
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
                                <span><img  loading="lazy" className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Optimizing Marketing Strategy
                                </div>
                                <p>Marketing Optimization is the process of improving the marketing efforts of 
                                    an organization in an effort to maximize the desired business outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="ai-solutions-card card">
                            <div className="card-body">
                                <div className="card-title d-flex">
                                <span><img  loading="lazy" className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Optimize your content for high purchase
                                </div>
                                <p>Optimizing content is less a matter of keyword presence and metadata and more an issue of 
                                    trust, intent, quality, and authority.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="ai-solutions-card card">
                            <div className="card-body">
                                <div className="card-title d-flex">
                                <span><img loading="lazy" className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Optimize your digital and social media strategy
                                </div>
                                <p>Collect, analyze and evaluate vast amount of semi-structured and unstructured 
                                    social media data and turn it into insights for business with descriptive, predictive 
                                    and prescriptive analytics.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                    <div className="ai-solutions-card card">
                            <div className="card-body">
                                <div className="card-title d-flex">
                                <span><img loading="lazy" className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Optimize product pages
                                </div>
                                <p>Identification of optimal price points influenced by multiple 
                                    factors such as Item, brand, sub-category, category, location, product affinity, 
                                    competitive and demographic
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
                                <span><img loading="lazy" className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Supply Chain Management
                                </div>
                                <p>Improve efficiency of supply chain activities to achieve the capability to cater to customers demands with accuracy and minimum possible investment.
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
                            <img loading="lazy" className="img-fluid" src={ServiceBG} alt="industry-img" />
                        </div>
                        <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 our-offering-details">
                            <div className="our-offering-title d-flex">
                                <span><img loading="lazy" className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Omnichannel Commerce Solutions
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img loading="lazy" className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Mobile Commerce
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img loading="lazy" className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>System Integrations
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img loading="lazy" className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Ecommerce Platform Migration
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img loading="lazy" className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Product Information Management
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img loading="lazy" className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>Business Intelligence
                            </div>
                            <div className="our-offering-title d-flex">
                                <span><img loading="lazy" className=" ai-solutions-icon" src = {AiSolutionIcon} alt ="icon" /></span>SaaS Enablement
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RetailEcommerce;