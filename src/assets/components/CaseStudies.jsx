import React from "react";
import CaseStudiesData from "../Data/CaseStudies-Data/CaseStudiesData";
import CaseStudiesBG from "../images/Case-Studies-Page/amnet-case-studies-bg.jpg";
import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";

function CaseStudies (){

    const caseStudiesStyle = {
        backgroundImage:`url(${CaseStudiesBG})`,
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position : "relative"
    }

    return (
            <>
              {/* <!-- Homepage intro --> */}
                <div className="homepage-intro container-fluid case-studies-intro" style={caseStudiesStyle}>
                    <div className="vr "></div>
                    <div className="row all-margin">
            
                        <div className="col-lg-6 homepage-intro-caption all-margin">
                
                            <h2>Making a Difference</h2>
                            <p>We adopt a bottom-up approach starting with strategy support through discovery and 
                                analysis of existing systems and processes and their limitations maximizing the leverage 
                                of knowledge and results in higher value generation!
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
                                <button type="button" className="btn btn-default" >{`Contact Us ->`}</button>
                            </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Case Studies Page Header and Title --> */}
                <div className="case-studies-page-header text-center mt-5">
                    <h3 className="section-header" id="details">PROBLEMS ADDRESSED</h3>
                    <h1 className="section-title mt-3">Case Studies</h1>
                </div>

                {/* <!-- CASE STUDIES PAGE ALL CASE STUDIES --> */}
                <div className="case-studies-page-all-case-studies all-margin " >
                    <div className="row case-studies-page-row ml-0 mr-0">
                        {CaseStudiesData.map(caseStudy => {
                            return (
                                <div className="col-12 case-studies-list p-0" id={caseStudy.id} key ={caseStudy.id}>
                                    <div className="card case-studies-page-card">
                                        <img className="img-fluid card-img-top" src={caseStudy.caseStudiesIMG} alt ="case-studies"/>
                                        <div className="card-body">
                                            <span className="case-studies-icon"><img className="img-fluid" src={caseStudy.caseStudiesIcon} alt ="case-studies-icon"/> </span>
                                            <h2 className="case-studies-page-card-title card-title">{caseStudy.title}</h2>
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
            </>
        )
    }

export default CaseStudies;