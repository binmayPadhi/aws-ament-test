import React from "react";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import CaseStudiesBG from "../images/Case-Studies-Page/cs-bg.jpg";
import CaseStudiesData from "../Data/CaseStudies-Data/CaseStudiesData";

function TestCaseStudies ( ) {
    return(
        <>
                <div className="sub-service-intro container-fluid" style={{backgroundImage:`url(${CaseStudiesBG})`,backgroundAttachment:"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                         <div className="row">
                        <div className="col-lg-5 new-subService-AIML-intro-caption new-all-margin">
                            <h2 className="textAnimation" data-text="Making A Difference!">
                            Making A Difference!
                            </h2>
                            <p>
                            We adopt a bottom-up approach starting with strategy support through discovery and analysis of existing systems 
                            and processes and their 
                            limitations maximizing the leverage of knowledge and results in higher value generation!
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

                            <NavLink to="/contactus">
                            <button type="button" className="btn btn-default sub-service-contact-us-btn">Contact Us</button>
                            </NavLink>
                            </div>
                        </div>
                        </div>
            </div>


             {/* New Case Studies QUOTE SECTION */}
             <div className="homepage-quote homepage-news-text">
                <h2 className="text-center">
                    "Products & Solutions that make a difference!"
                </h2>
            </div>




            {/* <!-- CASE STUDIES PAGE ALL CASE STUDIES --> */}
            <div className="case-studies-page-all-case-studies new-all-margin " id="details">
                    <div className="row case-studies-page-row ml-0 mr-0">
                        {CaseStudiesData.map(caseStudy => {
                            return (
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 case-studies-list new-case-studies-list p-2" id={caseStudy.id} key ={caseStudy.id}>
                                    <div className="card animation-card case-studies-page-card">
                                        <img loading="lazy" className="img-fluid card-img-top" src={caseStudy.caseStudiesIMG} alt ="case-studies"/>
                                        <div className="card-body">
                                            {/* <span className="case-studies-icon"><img className="img-fluid" src={caseStudy.caseStudiesIcon} alt ="case-studies-icon"/> </span> */}
                                            <h2 className="case-studies-page-card-title card-title">{caseStudy.newTitle}</h2>
                                            <div className="case-studies-page-card-info mt-5">
                                                <h4>{caseStudy.requirement}</h4>
                                                <p>{caseStudy.requirementDesc}</p>

                                                <h4>{caseStudy.solution}</h4>
                                                <p>
                                                    {caseStudy.solutionDesc}
                                                </p>

                                                <h4>{caseStudy.highlight}</h4>
                                                <p>
                                                    {caseStudy.highlightDesc}
                                                </p>

                                                <h4>{caseStudy.benefits}</h4>
                                                <p>
                                                    {caseStudy.benefitDesc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>




                {/* NEW HOMEPAGE CAREER SECTION */}

        <div  style={{width:"auto", height:"auto", backgroundColor:"#19AF8F", padding:"30px",marginTop:"60px"}}>

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
        </>
    )
}

export default TestCaseStudies;