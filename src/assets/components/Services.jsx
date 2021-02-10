import React from "react";
import {Link} from "react-scroll";
import ServiceBG from "../images/Service-Page/services-bg.jpg";
import ServicesData from "../Data/Services-Data/ServicesData";
import {NavLink} from "react-router-dom";

function TestService( ) {
    return(
        <>
            <div className="sub-service-intro container-fluid" style={{backgroundImage:`url(${ServiceBG})`,backgroundAttachment:"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                         <div className="row service-new-all-margin">
                        <div className="col-lg-5 new-subService-AIML-intro-caption new-all-margin">
                            <h2 className="textAnimation" data-text="Automate & Modernize!">
                            Automate & Modernize
                            </h2>
                            <p>
                            We blend our knowledge of diverse business domains and deep expertise in Data Management, 
                            AI/ML and Advanced Analytics to solve complex business problems.
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


             {/* Service Page QUOTE SECTION */}
             <div className="homepage-quote homepage-news-text">
                <h2 className="text-center">
                    "Robust, secure & scalable products, services and solutions"
                </h2>
            </div>


            {/* NEW SERVICE PAGE BUTTON GROUPS */}
            <div className="btn-group btn-group-toggle flex-wrap new-all-margin" data-toggle="buttons">
            <Link
                            activeClass="active"
                            to="aiml"
                            className="scroll-service-btn"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>             
                <label className="btn btn-secondary service-toggle-btn active">
                    <input type="radio" name="options" id="option1" autocomplete="off" checked /> Artificial intelligence
                </label>
                </Link>

                <Link
                            activeClass="active"
                            to="data-management"
                            className="scroll-service-btn"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                <label class="btn service-toggle-btn btn-secondary">
                    <input type="radio" name="options" id="option2" autocomplete="off" /> Data Management
                </label>
                </Link>

                <Link
                            activeClass="active"
                            to="advanced-analytics"
                            className="scroll-service-btn"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                <label class="btn service-toggle-btn btn-secondary">
                    <input type="radio" name="options" id="option3" autocomplete="off" /> Advanced Analytics
                </label>
                </Link>
                <Link
                            activeClass="active"
                            to="data-engineering"
                            className="scroll-service-btn"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>             
                <label className="btn btn-secondary service-toggle-btn">
                    <input type="radio" name="options" id="option1" autocomplete="off" checked /> Data Engineering
                </label>
                </Link>

                <Link
                            activeClass="active"
                            to="platform-engineering"
                            className="scroll-service-btn"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                <label class="btn service-toggle-btn btn-secondary">
                    <input type="radio" name="options" id="option2" autocomplete="off" /> Platform Engineering
                </label>
                </Link>

                <Link
                            activeClass="active"
                            to="user-experience"
                            className="scroll-service-btn"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                <label class="btn service-toggle-btn btn-secondary">
                    <input type="radio" name="options" id="option3" autocomplete="off" /> User Experience
                </label>
                </Link>

                <Link
                            activeClass="active"
                            to="cloud"
                            className="scroll-service-btn"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>             
                <label className="btn btn-secondary service-toggle-btn">
                    <input type="radio" name="options" id="option1" autocomplete="off" checked /> Cloud
                </label>
                </Link>

                <Link
                            activeClass="active"
                            to="quality-assurance"
                            className="scroll-service-btn"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                <label class="btn service-toggle-btn btn-secondary">
                    <input type="radio" name="options" id="option2" autocomplete="off" /> Quality Assurance
                </label>
                </Link>

                <Link
                            activeClass="active"
                            to="consulting"
                            className="scroll-service-btn"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                <label class="btn service-toggle-btn btn-secondary">
                    <input type="radio" name="options" id="option3" autocomplete="off" /> Startegy & Consulting
                </label>
                </Link>
                <Link
                            activeClass="active"
                            to="data-annotation"
                            className="scroll-service-btn"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>             
                <label className="btn btn-secondary service-toggle-btn">
                    <input type="radio" name="options" id="option1" autocomplete="off" checked /> Data Annotation
                </label>
                </Link>
                
            </div>



            {/* <div className="btn-group btn-group-toggle new-all-margin" style={{marginTop:"10px"}} data-toggle="buttons">
            
                
            </div> */}
            

            
            <div className="service-page-all-services " style={{marginTop:"60px"}} id="details">
                <div className="row service-page-row ml-0 mr-0">
                    {ServicesData.map((service, index) => {
                        return(
                            !( service.id === "test" ) ? 
                                <div className="new-all-margin">
                                    <div className="col-12 new-service-info" key={service.id} id={service.id}>
                                    <div className="row">
                                        <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 new-service-img">
                                            <img loading="lazy" className={`img-fluid new-service-image ${service.className}`} src={service.serviceIMG} alt="icon" />
                                        </div>
                                        <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12">
                                        <h2>{service.title}</h2>
                                        <p>{service.description}</p>
                                        <br />
                                        <br />
                                        <p>{service.description1}</p>
                                        <NavLink to = {`/${service.id}`}  activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                  
                                        <button className="btn btn-default" style={{fontSize : "1.5rem", backgroundColor: '#19AF8F',padding:"5px 15px", color:"white"}}>Learn More</button>
                    
                                        </NavLink>
                                        </div>
                                    </div>
                                </div>  
                                </div>
                                :
                                <div className="col-12 new-service-contact-section" style ={{marginTop:"100px", textAlign:"center"}}>
                                    <h3>Unsure how to leverage AI, ML for your business?</h3>
                                    <p>Talk to our experts today!</p>
                                    <a href="/contactus">
                                    <button className="btn btn-default">Contact Us</button>
                                    </a>
                                </div>
                            )
                        })}
                </div>
            </div>

            {/* <div className="service-side-image">
                <img src={serviceSideImage} className="img-fluid" alt="icon" />
            </div> */}

            {/* <img src={serviceSideImage} className="img-fluid" alt="icon" /> */}


            {/* NEW HOMEPAGE CAREER SECTION */}

        <div className="new-career-section" style={{width:"auto", height:"auto", backgroundColor:"#19AF8F", padding:"30px",marginTop:"60px"}}>

            <div className="new-career-section new-all-margin">

                <div className="career-section-row row g-0">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 career-caption">
                        <h5>WORK WITH US</h5>
                        <h2>Let's Grow Together</h2>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 career-details">
                        <p>We are on a mission to solve complex problems and provide solutions 
                            that make a difference, Come work with us.
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

export default TestService;