import React from "react";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";
// import HomeBG from "../images/Home/home-bg.png";
import careerLinkIcon from "../images/About-Us-Page/amnet-external-link.png";
import AboutUsBG from "../images/About-Us-Page/amnet-about-us-bg.jpg";
import AboutUsMission from "../components/AboutUs/AboutUsMission";
import AboutDetailsFirstRowData from "../Data/Homepage-Data/AboutDetailsFirstRowData";
import AboutDetailsSecondRowData from "../Data/Homepage-Data/AboutDetailsSecondRowData";
import AIIcon from "../images/HomePage/ai-icon.png";
import OurPartner from "../components/Homepage/OurPartner";
import OurLocationData from "../Data/ContactUs-Data/OurLocationData";
// import OurLocationBG from "../images/Contact-Us-Page/amnet-about-us-our-locations.jpg";
import QuoteIcon from "../images/About-Us-Page/amnet-left-quote-icon.png"

function TestAboutUs( ) {
    return (
        <>
              <div className="sub-service-intro container-fluid" style={{backgroundImage:`url(${AboutUsBG})`,backgroundAttachment:"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                         <div className="row service-new-all-margin">
                        <div className="col-lg-5 new-subService-AIML-intro-caption new-all-margin">
                            <h2>
                            Your Innovation Catalyst
                            </h2>
                            <p>
                            We have cultivated culture. One that focuses on helping our clients gain maximum advantage from our abilities, 
                            towards transforming them into AI empowered businesses!
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
                            <NavLink to="/casestudies">
                            <button type="button" className="btn btn-default sub-service-contact-us-btn">Case Studies</button>
                            </NavLink>
                            </div>
                        </div>
                        </div>
            </div>


            {/* AboutUS Page QUOTE SECTION */}
            <div className="homepage-quote">
                <h2 className="text-center">
                    "Building an Efficient & intelligent Tomorrow!"
                </h2>
            </div>


            {/* NEW ABOUT US SOLUTION SERVICE SECTION */}
            <div className ="new-home-about-details new-all-margin" id="details">
                <h1 className="text-center">WHO WE ARE</h1>
                <p>Amnet Digital is your innovation catalyst. We develop products and solutions that enable you to realize the true 
                    potential of AI. We offer you a comprehensive portfolio of services – innovation lab, consulting, 
                    research & execution, to deliver the solutions that matter to you and your customers.
                </p>
                <br />
                <p>Amnet Digital is your innovation catalyst. We develop products and solutions that enable you to realize the true 
                    potential of AI. We offer you a comprehensive portfolio of services.
                </p>
            </div>



            {/* NEW ABOUT US SOLUTION SERVICE SECTION */}
            <div className="new-home-about-details new-aboutus-info-section">
            <div className ="  new-all-margin">
                <p>We put your data at work using our tried-and-trusted approaches that yield maximum ROI in the shortest time possible!
                </p>
            </div>
            </div>



            {/* ABOUT US MISSION AND VISION SECTION */}
            <AboutUsMission />



            {/* NEW ABOUT US CREDO SECTION */}

            <div className="homepage-about-details" style={{backgroundColor: "#0C0C0C",backgroundAttachment:"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <h1 className="section-title text-center" style={{paddingTop:"15px", color:"white"}}>CREDO</h1>
                <hr></hr>
                <div className="row new-all-margin ml-0 mr-0">
                    <div className="col-10 credo-column mx-auto">
                        <div className="row about-details-row mx-auto">
                
                            {AboutDetailsFirstRowData.map(list => {
                                return (
                                        <div className="col-lg-6 col-md-12 col-sm-12 credo-info-column" key={list.id}>
                                            <h3 className="about-details-header">
                                                <span>
                                                    <img src= {AIIcon} className="img-fluid about-icons" alt = "end to end" />
                                                </span>
                                                {list.newTitle}
                                            </h3>
                                            <p>{list.description}</p>
                                        </div>
                                    )
                                })}

                        </div>

                        <div className="row about-details-row marginRow mx-auto">
            
                            {AboutDetailsSecondRowData.map(list => {
                                return (
                                        <div className="col-lg-6 col-md-12 col-sm-12 credo-info-column" key={list.id}>
                                            <h3 className="about-details-header">
                                                <span>
                                                    <img src= {AIIcon} className="img-fluid about-icons" alt = "end to end" />
                                                </span>
                                                {list.newTitle}
                                            </h3>
                                            <p>{list.description}</p>
                                        </div>
                                    )
                            })}
                    </div>
                </div>
            </div>
        </div>


        {/*NEW AboutUS Page Career Link SECTION */}
        <div className="homepage-quote">
                <h2 className="text-center">
                    Careers<span style={{padding:"5px"}}><a href="/careers"><img className="img-fluid career-link-icon" style={{width:"20px", marginBottom:"7px"}} src={careerLinkIcon} alt="career-icon" /></a></span>
                </h2>
                <p>Let us transform the world, together!</p>
        </div>




          {/* NEW HOMEPAGE OUR PARTNER SECTION */}
            <div className="new-our-partner">
                <h1 className="section-title mt-3 text-center">RECOGNITIONS & PARTNERSHIPS</h1> 
                <OurPartner />
            </div>




            {/* <!-- NEW ABOUT US PAGE LOCATION SECTION --> */}

            <div className="about-us-page-location contact-us-location" style={{backgroundColor:"#F2F2F2",backgroundAttachment:"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                <div className="new-all-margin">
                    <div className="about-us-page-header text-center mt-5 p-5">
                        <h1 className="section-title mt-3">WE OPERATE IN</h1>
                    </div>
                    <div className="row about-us-page-location-row  ml-0 mr-0">

                        {OurLocationData.map(list => {
                            return (
                                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 new-our-location-column" key = {list.id}>
                                        <div className="card ">
                                            <div className="card-body location-details new-location-card">
                                                <img className="img-fluid" src={list.locationIcon} alt="location"/>
                                                <h2>{list.cityName}</h2>
                                                <p>{list.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>





            {/* NEW HOMEPAGE CLIENT SAY */}
        <div className="client-say" style={{marginTop:"60px"}}>
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

        <div className="new-career-section" style={{width:"auto", height:"auto", backgroundColor:"#19AF8F", padding:"30px",marginTop:"60px"}}>

            <div className="new-all-margin">

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
                            <button type="button" className="btn btn-default contact-us-button" >Contact Us</button>
                        </a>
                        <a href="/contactus">
                            <button type="button" className="btn btn-default careers-button">Careers</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        

        </>
    )
}

export default TestAboutUs;