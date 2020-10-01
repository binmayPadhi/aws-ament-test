import React from "react";
import SolutionsServices from "./Homepage/SolutionsServices";
import AboutDetails from "./Homepage/AboutDetails";
import IndustrySection from "./Homepage/IndustrySection";
import OurServices from "./Homepage/OurServicesSection";
import OurPartner from "./Homepage/OurPartner";
import CaseStudiesSection from "./Homepage/CaseStudiesSection";
import CareerSection from "./Homepage/CareerSection";
import HomepageBG from "../images/HomePage/amnet-home-bg.jpg";
import { Link } from "react-scroll";

function Homepage(){

    const homepageStyle = {
        backgroundImage:`url(${HomepageBG})`,
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover" 
    }


    return (
        <>
             {/* <!-- Homepage intro --> */}
            <div className="homepage-intro container-fluid" style = {homepageStyle}>

                <div className="vr "></div>
                <div className="row all-margin">
            
                    <div className="col-lg-6 homepage-intro-caption all-margin">
                        <h2>Reimagine & Redefine</h2>
                        <p>Amnet Digital is enabling enterprises reimagine and redefine their engagement with 
                            employees, customers, partners and suppliers by providing intelligent 
                            insights and continuous value.
                        </p>

                        <div className="homepage-intro-btn">
                        <Link
                            activeClass="active"
                            to="details"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                            <button type="button" className="btn btn-primary learn-more-btn">Learn more</button>
                        </Link>
                            <a href="/casestudies">
                                <button type="button" className="btn btn-default">{`Case Studies -`}&gt;</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- HOMEPAGE-QUOTE --> */}
            {/* <div className="contaner-fluid homepage-quote p-3"">
                <blockquote className="blockquote text-center">
                    <p className="mb-0">"AI-Enabled tools will generate $2.9 trillion in business value by 2021"</p>
                    <p className="blockquote-author">~ U D A C I T Y</p>
                </blockquote>
            </div> */}

            {/* <!-- HOMEPAGE-AI-SOLUTION AND SERVICES --> */}
            <SolutionsServices />

            {/* <!--HOMEPAGE ABOUT DETAILS--> */}
            <AboutDetails />

            {/* <!-- INDUSTRIES WE COVER --> */}
            <IndustrySection />

            {/* <!-- OUR SERVICES SECTION --> */}
            <OurServices />

            {/* <!--OUR PARTNER--> */}
            {/* <OurPartner /> */}

            {/* <!--CASE STUDIES SECTION--> */}
            <CaseStudiesSection />

            {/* <!--CAREER SECTION--> */}
            <CareerSection />

        </>
    )
}

export default Homepage;