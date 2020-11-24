import React from "react";
import {Link} from "react-scroll";
import HomeBG from "../../images/HomePage/home-bg.jpg";

function HomepageIntro(){
    return (
        <>
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
        </>
    )
}

export default HomepageIntro;