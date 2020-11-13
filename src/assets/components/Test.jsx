import React from "react";
import {Link} from "react-scroll";
import HomeBG from "../images/HomePage/home-bg.jpg";
import AIServiceIMG from "../images/HomePage/home-vr.jpg";
import AIIcon from "../images/Home/ai-icon.png";
import AboutIcon from "../images/Home/about-icon.png";
import AboutDetailsBG from "../images/HomePage/value-bg.jpg";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import OurServiceBG from "../images/HomePage/our-services/our-services-bg.jpg";
import OurServicesData from "../Data/Homepage-Data/OurServicesData";
import CaseStudiesSectionData from "../Data/Homepage-Data/CaseStudiesSectionData";
import OurPartner from "../components/Homepage/OurPartner";
import QuoteIcon from "../images/Home/left-quote.png";
import IndusrtySectionData from "../Data/Homepage-Data/IndustrySectionData";
import DataAnnotationDropdownIcon from "../images/HomePage/our-services/amnet-data-annotation-icon.png";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


function Test (){
 
    return(<>
            <div className="sub-service-intro container-fluid" style={{backgroundImage:`url(${HomeBG})`,backgroundAttachment:"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                         <div className="row service-new-all-margin">
                        <div className="col-lg-5 new-subService-AIML-intro-caption new-all-margin">
                            <h2>
                            Reimagine & Redefine
                            </h2>
                            <p>
                            Amnet Digital is enabling enterprises reimagine and redefine their engagement with 
                            employees, customers, partners and suppliers by providing intelligent 
                            insights and continuous value.
                            </p>

                            <div className="subService-AIML-intro-btn">
                                {/* <a href="/casestudies">
                                    <button type="button" className="btn btn-default">View Details</button>
                                </a> */}
                            <Link
                            activeClass="active"
                            to="details"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            <button type="button" className="btn btn-default sub-service-view-details-btn">Learn more</button>
                        </Link>
                            </div>
                        </div>
                        </div>
            </div>

            {/* HOMEPAGE QUOTE SECTION */}
            <div className="homepage-quote">
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
            <img className="img-fluid" src={AIServiceIMG} alt="Solutions and Service" />
                {/* <img className="img-fluid" src={AIServiceIMG} srcSet={`${AboutIcon} 300w, ${AIIcon} 768w, ${OurServiceBG} 1280w, ${IndustryIMG} 3200w`} alt="Solutions and Service" /> */}
            </div>

            <div className="col-xl-6 col-lg-12 col-sm-12 solutions-services-details">
                <ul className="new-solutions-services-lists">

                                <li className="ai-list">
                                    <span>
                                        <img src={AIIcon} className="img-fluid ai-icon" alt="icon"></img>
                                    </span>
                                    User-centered & research backed design
                                </li>
                                <li className="ai-list">
                                    <span>
                                    <img src={AIIcon} className="img-fluid ai-icon" alt="icon"></img>
                                    </span>
                                    Advanced Automation & Artificial Intelligence techniques
                                </li>
                                <li className="ai-list">
                                    <span>
                                    <img src={AIIcon} className="img-fluid ai-icon" alt="icon"></img>
                                    </span>
                                    Robust & Scalable Architecture and Infrastructure design
                                </li>
                                <li className="ai-list">
                                    <span>
                                    <img src={AIIcon} className="img-fluid ai-icon" alt="icon"></img>
                                    </span>
                                    Advanced Analytics, Data Engineering & Visualization practices
                                </li>
                            
                </ul>
            </div>
        </div>
    </div>

    {/* NEW HOMEPAGE SOLUTION SERVICE SECTION */}

    <div className="homepage-about-details" style={{backgroundImage:`url(${AboutDetailsBG})`,backgroundAttachment:"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            

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
                                        <img src={AboutIcon} className="img-fluid about-icon" alt="icon"></img>
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
                                        <img src={AboutIcon} className="img-fluid about-icon" alt="icon"></img>
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
                                        <img src={AboutIcon} className="img-fluid about-icon" alt="icon"></img>
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

    <div className="industry-section new-all-margin">
    
    <h1 className="section-title" style={{marginTop:"60px"}}>Industries We Cover</h1>      
    
    <div className="industry-section-row row mt-5">

    {IndusrtySectionData.map(list => {
        return ( 

            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 industry-section-column">
            <div className="card industry-section-card">
                <img className="card-img-top img-fluid" src= {list.industryIMG} alt="Case Studies" />
                <div className="card-img-overlay new-industry-header">
                <h5 class="card-title text-center">{list.industryTitle}</h5>
                </div>
                <div className="card-body" style={{display:"none"}}>
                    {/* <h5 className="card-title">{list.industryTitle}</h5> */}
                </div>
            </div>
            </div>

            )
        })}
            
    </div>
    </div>
   


{/* NEW HOMEPAGE OUR SERVICE SECTION */}
<div className="our-services" style={{backgroundImage:`url(${OurServiceBG})`,backgroundAttachment:"scroll",height:"auto",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
    <h1 className="section-title text-center">Our Services</h1>
    <hr></hr>
    <div className="new-all-margin">
    <div className="row">
    {OurServicesData.map(data => {
        return(
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 new-our-service-column" key={data.id}>
                    <div className="new-our-service-card">
                    <div className="card-img-top">
                        <img src={data.serviceIcon} className="img-fluid text-center" alt="icon" />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">{data.serviceTitle}</h3>
                        <p className ="card-text">{data.serviceDesc}</p>
                        <a href={`/${data.id}`} className="learn-more-services">{`Learn More ->`}</a>
                    </div>
                </div>
                    </div>
        )
    })}

{/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12"></div> */}

    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 new-our-service-column">
                    <div className="new-our-service-card">
                    <div className="card-img-top">
                        <img src={DataAnnotationDropdownIcon} className="img-fluid text-center" alt="icon" />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">Data Annotation</h3>
                        <p className ="card-text">From complex documents to vital images & speech, precisely tag the data you need to 
                            train your models and explore a wide variety of business opportunities.
                        </p>
                        <a href="#" className="learn-more-services">{`Learn More ->`}</a>
                    </div>
                </div>
                    </div>
                    {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12"></div> */}
</div>
    </div>
</div>




{/* NEW HOMEPAGE CASESTUDIES SECTION */}

<div className="case-studies new-all-margin">
        <h1 className="section-title" style={{marginTop:"60px"}}>Case Studies</h1> 
        <hr></hr>

    <div className="row  new-case-studies-row">
    {CaseStudiesSectionData.map(list => {
                return (
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 new-case-studies-card" key={list.id}>
                        <div className="card ">
                            <img className="card-img-top img-fluid" src= {list.caseStudiesIMG} alt="Case Studies" />
                            <div className="card-body propensity-modelling">
                                <h5 className="card-title">{list.caseStudiesTitle}</h5>
                                <p>{list.caseStudiesDesc}</p>
                                <a href={`./casestudies#${list.id}`}>{`Learn More ->`}</a>
                            </div>
                        </div>
                    </div>
                )
        })}
</div>
           
    </div>
    <div className="new-explore-link text-center">
                <a href="/casestudies">Explore All</a>
    </div>



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
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="card client-say-card">
                        <div className="card-body">
                            <img src={QuoteIcon} className="img-fluid quote-icon" alt="icon" />
                            <h3 className="card-title">Jamie Lorenzo</h3>
                            <p className ="card-text">VP, Data Science & Analytics</p>
                            <p className="card-text client-desc">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            </p>
                        </div>
                    </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="card client-say-card">
                        <div className="card-body">
                            <img src={QuoteIcon} className="img-fluid quote-icon" alt="icon" />
                            <h3 className="card-title">Jamie Lorenzo</h3>
                            <p className ="card-text">VP, Data Science & Analytics</p>
                            <p className="card-text client-desc">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            </p>
                        </div>
                    </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <div className="card client-say-card">
                        <div className="card-body">
                            <img src={QuoteIcon} className="img-fluid quote-icon" alt="icon" />
                            <h3 className="card-title">Jamie Lorenzo</h3>
                            <p className ="card-text">VP, Data Science & Analytics</p>
                            <p className="card-text client-desc">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
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



    </>)
}

export default Test;