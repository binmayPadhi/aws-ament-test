import React from "react";
import AboutDetailsBG from "../../images/HomePage/value-bg.jpg";
import AboutIcon from "../../images/HomePage/about-icon.png";

function AboutDetails(){

    return (
        <>
            {/* <!--HOMEPAGE ABOUT DETAILS--> */}

            <div className="homepage-about-details" style={{backgroundImage:`url(${AboutDetailsBG})`,backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            

            <div className="new-all-margin new-about-details-heading-row">
            <div className="row  ml-0 mr-0">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12  new-about-details-heading">
                        <h1 className="new-about-heading">Building an Efficient & Intelligent Tomorrow</h1>
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
                                    Focus on the big picture strategy and be as tech-forward or backward compatible to develop solutions based on priorities.
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

        </>
    )
}

export default AboutDetails;
