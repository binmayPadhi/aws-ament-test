import React from "react";
import AboutUsDetails from "./AboutUs/AboutUsDetails";
import AboutUsMission from "./AboutUs/AboutUsMission";
import OurLocation from "./OurLocation";
import CareerSection from "./Homepage/CareerSection";
import AboutUsBG from "../images/About-Us-Page/amnet-about-us-bg.jpg";
import { Link } from "react-scroll";

function AboutUs (){

    const aboutUsStyle = {
        backgroundImage:`url(${AboutUsBG})`,
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position : "relative"
    }

    return (
        <>
            {/* <!-- About Us intro --> */}

            <div className="homepage-intro container-fluid about-us-intro-bg" style = {aboutUsStyle}>
                <div className="vr "></div>
                <div className="row all-margin">
                    <div className="col-lg-6 homepage-intro-caption all-margin">
                        <h2>Innovation Catalyst</h2>
                        <p>We have cultivated culture. One that focuses on helping our clients gain maximum advantage
                            from our abilities, towards transforming them into AI empowered businesses!
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

        {/* ABOUT US DETAILS SECTION */}
        <AboutUsDetails />

        {/* ABOUT US MISSION AND VISION SECTION */}
        <AboutUsMission />

        
        {/* OUR LOCATION SECTION */}
        <OurLocation />

        {/* CAREER  SECTION */}
        <CareerSection />

        </>
    )
}

export default AboutUs;