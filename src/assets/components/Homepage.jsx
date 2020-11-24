import React,{ Suspense, lazy } from "react";
// import {Link} from "react-scroll";
import HomeBGTest from "../images/HomePage/home-bg-test.jpg";

// import HomepageIntro from "./Homepage/HomepageIntro";
import AIServiceIMG from "../images/HomePage/home-vr.jpg";
import AIIcon from "../images/HomePage/ai-icon.png";
import AboutIcon from "../images/HomePage/about-icon.png";
import QuoteIcon from "../images/About-Us-Page/amnet-left-quote-icon.png";
import AboutDetailsBG from "../images/HomePage/value-bg.jpg";

import OurServicesSection from "../components/Homepage/OurServicesSection";
import CaseStudiesSection from "../components/Homepage/CaseStudiesSection";
import OurPartner from "../components/Homepage/OurPartner";
import IndusrtySection from "../components/Homepage/IndustrySection";

const HomepageIntro = React.lazy(() => import('./Homepage/HomepageIntro'));


function Test (){
 
    return(<>
    
    <Suspense fallback={
    <div className="sub-service-intro container-fluid" 
    style={{backgroundImage:`url(${HomeBGTest})`,backgroundAttachment:"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <div className="row service-new-all-margin">
                        <div className="col-lg-5 new-subService-AIML-intro-caption new-all-margin">
                            <h2>
                            Reimagine & Redefine
                            </h2>
                            <p>
                            Amnet Digital is enabling enterprises reimagine and redefine their engagement with 
                            employees, customers, partners and suppliers by providing intelligent 
                            insights and continuous value.
                            </p> </div> </div>
    </div>}>
    <HomepageIntro />

    </Suspense>
           
            {/* HOMEPAGE QUOTE SECTION */}
            <div className="homepage-quote homepage-news-text">
                <h2 className="text-center">
                    "AI-Enabled tools will generate $2.9 trillion in business value by 2021"
                </h2>
            </div>


            {/* NEW HOMEPAGE SOLUTION SERVICE SECTION */}
            <div className ="new-home-about-details new-all-margin" id="details">
                <h1>AI-Enabled Products, Solutions & Services</h1>
                <p>Amnet Digital is your innovation catalyst. We develop products and solutions that enable you to realize the true 
                    potential of AI. We offer you a comprehensive portfolio of services – innovation lab, consulting, 
                    research & execution, to deliver the solutions that matter to you and your customers.
                </p>
            </div>

            <div className="solutions-services new-all-margin" id ="details">
        <div className="row">

            <div className="col-xl-6 col-lg-12 col-sm-12 solutions-services-details-img">
            <img loading="lazy" className="img-fluid" src={AIServiceIMG} alt="Solutions and Service" />
                {/* <img className="img-fluid" src={AIServiceIMG} srcSet={`${AboutIcon} 300w, ${AIIcon} 768w, ${OurServiceBG} 1280w, ${IndustryIMG} 3200w`} alt="Solutions and Service" /> */}
            </div>

            <div className="col-xl-6 col-lg-12 col-sm-12 solutions-services-details">
                <ul className="new-solutions-services-lists">

                                <li className="ai-list">
                                    <span>
                                        <img loading="lazy" src={AIIcon} className="img-fluid ai-icon" alt="icon"></img>
                                    </span>
                                    User-centered & research backed design
                                </li>
                                <li className="ai-list">
                                    <span>
                                    <img loading="lazy" src={AIIcon} className="img-fluid ai-icon" alt="icon"></img>
                                    </span>
                                    Advanced Automation & Artificial Intelligence techniques
                                </li>
                                <li className="ai-list">
                                    <span>
                                    <img loading="lazy" src={AIIcon} className="img-fluid ai-icon" alt="icon"></img>
                                    </span>
                                    Robust & Scalable Architecture and Infrastructure design
                                </li>
                                <li className="ai-list">
                                    <span>
                                    <img loading="lazy" src={AIIcon} className="img-fluid ai-icon" alt="icon"></img>
                                    </span>
                                    Advanced Analytics, Data Engineering & Visualization practices
                                </li>
                            
                </ul>
            </div>
        </div>
    </div>

    {/* NEW HOMEPAGE SOLUTION SERVICE SECTION */}

    <div className="homepage-about-details" style={{backgroundImage:`url(${AboutDetailsBG})`,backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            

            <div className="new-all-margin new-about-details-heading-row">
            <div className="row  ml-0 mr-0">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12  new-about-details-heading">
                        <h1 className="new-about-heading">Building an Efficient & Intelligent Tomorrow!</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <ul className="new-about-details-lists">

                                <li className="new-about-details-list">
                                    <h2>
                                    <span>
                                        <img loading="lazy" src={AboutIcon} className="img-fluid about-icon" alt="icon"></img>
                                    </span>
                                    End-to-end Solutions
                                    </h2>
                                    <p>
                                    360 degree coverage of services and solutions from assessment to managed services with complete automation.
                                    </p>
                                </li>
                                <li className="new-about-details-list">
                                <h2>
                                    <span>
                                        <img loading="lazy" src={AboutIcon} className="img-fluid about-icon" alt="icon"></img>
                                    </span>
                                    Technology Agnostic
                                    </h2>
                                    <p>
                                    Focus on the big picture strategy and be as tech-forward or backward compatible as needed to develop solutions based on your priorities.
                                    </p>
                                </li>
                                <li className="new-about-details-list">
                                <h2>
                                    <span>
                                        <img loading="lazy" src={AboutIcon} className="img-fluid about-icon" alt="icon"></img>
                                    </span>
                                    Smart Innovations
                                    </h2>
                                    <p>
                                    We align our products & services with the requirements of the market, customers and develop smart innovations for digital transformation.
                                    </p>
                                </li>
                </ul>
                    </div>
            </div>
            </div>


    </div>


    {/* NEW HOMEPAGE INDUSTRIES SECTION */}

    <IndusrtySection />
   


{/* NEW HOMEPAGE OUR SERVICE SECTION */}
<OurServicesSection />




{/* NEW HOMEPAGE CASESTUDIES SECTION */}

<CaseStudiesSection />



    {/* NEW HOMEPAGE OUR PARTNER SECTION */}
    <div className="new-our-partner">
        <h1 className="section-title mt-3 text-center">RECOGNITIONS & PARTNERSHIPS</h1> 
        <OurPartner />
    </div>


    {/* NEW HOMEPAGE CLIENT SAY */}
        <div className="client-say">
        <h1 className="section-title mt-3 text-center">WHAT OUR CLIENTS SAY</h1> 
            <div className="client-say-row new-all-margin">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="card client-say-card">
                        <div className="card-body">
                            <img loading="lazy" src={QuoteIcon} className="img-fluid quote-icon" alt="icon" />
                            {/* <h3 className="card-title">Jamie Lorenzo</h3> */}
                            <p className ="card-text client-role">Director of Data Science, Retail Marketplace</p>
                            <p className="card-text client-desc">The assistance we got from Amnet Digital was the glue that kept together our transformation initiatives for FY 2018-20. They stayed on top of our challenging unstructured data and provided world-class data analysis. 
                            We were able to unearth hidden relationships in our customers buying patterns for better forecast and bundling of products.
                            </p>
                        </div>
                    </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="card client-say-card">
                        <div className="card-body">
                            <img loading="lazy" src={QuoteIcon} className="img-fluid quote-icon" alt="icon" />
                            {/* <h3 className="card-title">Jamie Lorenzo</h3> */}
                            <p className ="card-text client-role">VP Engineering, Information Management Company</p>
                            <p className="card-text client-desc">We developed a great partnership with Amnet Digital and their dedication towards our digital transformation was commendable. We appreciate their attention to detail, modernization approach, 
                            incorporation of machine learning & automation of age-old and time-intensive documentation & data deduplication processes.
                            </p>
                        </div>
                    </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 client-say-card-center">
                    <div className="card client-say-card">
                        <div className="card-body">
                            <img loading="lazy" src={QuoteIcon} className="img-fluid quote-icon" alt="icon" />
                            {/* <h3 className="card-title">Jamie Lorenzo</h3> */}
                            <p className ="card-text client-role">VP Engineering, eCommerce Company</p>
                            <p className="card-text client-desc">We would like to express our satisfaction regarding the development of our eCommerce web application. The application engineering team did a very professional job. We are satisfied with the solution 
                            given to us and with the communication flow through the project. We look forward to working with them in future projects.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>


        {/* NEW HOMEPAGE CAREER SECTION */}

        <div className="new-career-section" style={{width:"auto", height:"auto", backgroundColor:"#19AF8F", padding:"30px"}}>

 
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



    </>)
}

export default Test;