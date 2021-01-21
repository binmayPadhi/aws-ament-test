import React from "react";
import {NavLink} from "react-router-dom";
import amnetLogo from "../images/AD-Logo.png";
import AimlDropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-ai-ml.png";
import DataManagementDropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-data-mgmt.png";
import AdvancedAnalyticsDropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-advanced-analytics.png";
import DataEngineeringDropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-data-engg.png";
import PlatformEngineeringDropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-platform-engg.png";
import UXDropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-ux.png";
import CloudDropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-cloud.png";
import QADropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-qa.png";
import ConsultingDropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-strat-consult.png";
import DataAnnotationDropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-data-annotation.png";
import RetailEcommerceIcon from "../images/industry-Page/retail-ecommerce-icon.png";
import HealthcareIcon from "../images/industry-Page/healthcare-icon.png";
import InformationManagementIcon from "../images/industry-Page/info-management-icon.png";
import FinancialServiceIcon from "../images/industry-Page/financial-service-icon.png";
import "../CSS/Navbar.css";

function Navbar(){
  const navStyle = {
    color : "white",
    textDecoration : "none",
    fontSize : "1.5rem",
    // marginRight: "25px",
    fontFamily: `'Poppins', sans-serif`,
    marginTop: "5px",
    padding: "20px 15px",
    height : "73px"
}

const navStyle1 = {
  color : "white",
  textDecoration : "none",
  fontSize : "1.5rem",
  // marginRight: "25px",
  fontFamily: `'Poppins', sans-serif`,
  marginTop: "5px",
  padding: "20px 15px",
  height : "73px",
  backgroundColor:"transparent"
}

const serviceDropdown = {
  color : "white",
    textDecoration : "none",
    fontSize : "1.5rem",
    // marginRight: "25px",
    fontFamily: `'Poppins', sans-serif`,
    marginTop: "5px",
    // padding: "10px 15px",
}

const contactUsButtonStyle = {
  display: "inline-block",
  color : "black",
  backgroundColor : "white",
  borderRadius: "4px",
  textDecoration : "none",
  fontSize : "1.5rem",
  // marginRight: "25px",
  fontFamily: `'Poppins', sans-serif`,
  marginTop: "5px",
  padding: "10px"
}

function showDropdown() {
  document.getElementsByClassName("dropdown-content")[0].style.display="block";
  // setTimeout(function(){
  //   document.getElementsByClassName("dropdown-content")[0].style.display="none";
  //  }, 100);
  // window.location.reload(false);
}
function hideDropdown() {
  document.getElementsByClassName("dropdown-content")[0].style.display="none";
  // setTimeout(function(){
  //   document.getElementsByClassName("dropdown-content")[0].style.display="none";
  //  }, 100);
  // window.location.reload(false);
}

function showIndustryDropdown() {
  document.getElementsByClassName("industry-dropdown-content")[0].style.display="block";
}
function hideIndustryDropdown() {
  document.getElementsByClassName("industry-dropdown-content")[0].style.display="none";
}

// function clearTime() {
//   document.getElementsByClassName("dropdown-content")[0].style.display="block";
// }



    return (
        <>
            {/* <!-- NAVIGATION BAR --> */}
    <div className = "navigation-bar" id="navbar">
        <nav className="navbar navbar-expand-lg ">
            {/* <!-- navigation bar logo --> */}
            <a href = "/" className="navbar-brand active">
              <img className="img-fluid logo" src= {amnetLogo} alt="logo" />
            </a>
            <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <div className="navbar-toggler-icon"></div>
              <div className="navbar-toggler-icon"></div>
              <div className="navbar-toggler-icon"></div>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" >
                {/* <!-- navigation bar menus --> */}
              <ul className="navbar-nav">
                {/* <div style={{padding:"15px 0px 0px 0px"}}> */}
                <NavLink to = "/aboutus" onClick={() => window.location.href="/aboutus"} style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                  
                  About Us
                    
                </NavLink>
                {/* </div> */}

                {/* <NavLink to = "/services" onClick={() => window.location.href="/aboutus"} style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                  
                  Services
                    
                </NavLink> */}

                {/* SERVICE DROPDOWN MENU   */}
                  {/* <NavLink  to = "/services" className="sub-menu"  style={navStyle} > */}

                  <div  className="service-dropdown-menu" onMouseOver={showDropdown} onMouseOut={hideDropdown} style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                  
                    <NavLink to = "/services"  onClick={() => window.location.href="/aboutus"} style={serviceDropdown} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                  
                      Services
                    
                    </NavLink>
                          
                    <div class="dropdown-content" onClick={hideDropdown}>  
                      <div class="row nav-sub-menu">
                        <div class="column nav-first-column">
                          <div className="navFlex">
                          <img src={AimlDropdownIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-10 service-dropdown-link">
                          <NavLink to={`/${`aiml`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>AI / ML</NavLink>
                          <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`aiml`}#statistical-analysis`}>Statistical Analysis</a></p>
                          <p className="sub-service-links"><a  href={`/${`aiml`}#visualizations`}>Visualizations</a></p>
                          <p className="sub-service-links"><a href={`/${`aiml`}#anomaly-detection`}>Anomaly Detection</a></p>
                          <p className="sub-service-links dropdown-view-all-link dropdownd-ai-viewall-link"><a href={`/${`aiml`}`} >{`View all ->`}</a></p>
                          
                          </div>
                          </div>

                          <div className="navFlex">
                          <img src={DataManagementDropdownIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-10 service-dropdown-link">
                          <NavLink to={`/${`data-management`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Data management</NavLink>
                          <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`data-management`}#data-architecture-management`}>Data Architecture</a></p>
                          <p className="sub-service-links"><a href={`/${`data-management`}#data-development`}>Data Development</a></p>
                          <p className="sub-service-links"><a href={`/${`data-management`}#data-governance`}>Data Governance</a></p>
                          <p className="sub-service-links dropdown-view-all-link" ><a href={`/${`data-management`}`}>{`View all ->`}</a></p>
                          </div>
                          </div>

                          <div className="navFlex">
                          <img src={AdvancedAnalyticsDropdownIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-10 service-dropdown-link">
                          <NavLink  to={`/${`advanced-analytics`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Advanced Analytics</NavLink>
                          <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`advanced-analytics`}#complex-event-processing`}>Complex Event Processing</a></p>
                          <p className="sub-service-links"><a href={`/${`advanced-analytics`}#deep-learning`}>Deep Learning</a></p>
                          <p className="sub-service-links"><a href={`/${`advanced-analytics`}#graph-analysis`}>Graph Analysis</a></p>
                          <p className="sub-service-links dropdown-view-all-link" ><a href={`/${`advanced-analytics`}`}>{`View all ->`}</a></p>
                          </div>
                          </div>
         
                        </div>
                      <div className="column">

                          <div className="navFlex">
                          <img src={DataEngineeringDropdownIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-10 service-dropdown-link">
                          <NavLink to={`/${`data-engineering`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Data Engineering</NavLink>
                          <p className="sub-service-links"style={{marginTop:"5px"}}><a href={`/${`data-engineering`}#data-pipelines`}>Data Pipelines</a></p>
                          <p className="sub-service-links"><a href={`/${`data-engineering`}#data-transformations`}>Data Transformations</a></p>
                          <p className="sub-service-links"><a href={`/${`data-engineering`}#data-cleansing`}>Data Cleansing</a></p>
                          <p className="sub-service-links dropdown-view-all-link" ><a href={`/${`data-engineering`}`}>{`View all ->`}</a></p>
                          </div>
                          </div>
                          <div className="navFlex">
                          <img src={PlatformEngineeringDropdownIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-10 service-dropdown-link">
                          <NavLink to={`/${`platform-engineering`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Platform Engineering</NavLink>
                          <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`platform-engineering`}#application-engineering`}>Application Engineering</a></p>
                          <p className="sub-service-links"><a href={`/${`platform-engineering`}#infrastructure`}>Infrastructure</a></p>
                          <p className="sub-service-links"><a href={`/${`platform-engineering`}#payment-gateways`}>Payment Gateways</a></p>
                          <p className="sub-service-links dropdown-view-all-link" ><a href={`/${`platform-engineering`}`}>{`View all ->`}</a></p>
                          </div>
                          </div>
                          <div className="navFlex">
                          <img src={UXDropdownIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-10 service-dropdown-link">
                          <NavLink to={`/${`user-experience`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>User Experience</NavLink>
                          <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`user-experience`}#design-thinking`}>Design Thinking</a></p>
                          <p className="sub-service-links"><a href={`/${`user-experience`}#user-research`}>User Research</a></p>
                          <p className="sub-service-links"><a href={`/${`user-experience`}#interaction-design`}>Interaction Design</a></p>
                          <p className="sub-service-links dropdown-view-all-link" ><a href={`/${`user-experience`}`}>{`View all ->`}</a></p>
                          </div>
                          </div>

                          
                      </div>
                      <div className="column">

                          <div className="navFlex">
                          <img src={CloudDropdownIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-10 service-dropdown-link">
                          <NavLink  to={`/${`cloud`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Cloud Services</NavLink>
                          <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`cloud`}#cloud-advisory-services`}>Cloud Advisory Services</a></p>
                          <p className="sub-service-links"><a href={`/${`cloud`}#cloud-migration-services`}>Cloud Migration Services</a></p>
                          <p className="sub-service-links"><a href={`/${`cloud`}#cloud-integration`}>Cloud Integration</a></p>
                          <p className="sub-service-links dropdown-view-all-link" ><a href={`/${`cloud`}`}>{`View all ->`}</a></p>
                          </div>
                          </div>
                          <div className="navFlex">
                          <img src={QADropdownIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-10 service-dropdown-link">
                          <NavLink to={`/${`quality-assurance`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Quality Assurance</NavLink>
                          <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`quality-assurance`}#functional-testing`}>Functional Testing</a></p>
                          <p className="sub-service-links"><a href={`/${`quality-assurance`}#compatibility-testing`}>Compatibility Testing</a></p>
                          <p className="sub-service-links"><a href={`/${`quality-assurance`}#performance-testing`}>Performance Testing</a></p>
                          <p className="sub-service-links dropdown-view-all-link" ><a href={`/${`quality-assurance`}`}>{`View all ->`}</a></p>
                          </div>
                          </div>
                          <div className="navFlex">
                          <img src={ConsultingDropdownIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-10 service-dropdown-link">
                          <NavLink to={`/${`consulting`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Strategy & Consulting</NavLink>
                          <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`consulting`}#data-strategy`}>Data Strategy</a></p>
                          <p className="sub-service-links"><a href={`/${`consulting`}#ai-strategy`}>AI Strategy</a></p>
                          <p className="sub-service-links"><a href={`/${`consulting`}#application-development`}>Application Development</a></p>
                          <p className="sub-service-links dropdown-view-all-link" ><a href={`/${`consulting`}`}>{`View all ->`}</a></p>
                          </div>
                          </div>

                         
                      </div>
                      <div className="column extra-column">

                          <div className="navFlex">
                          <img src={DataAnnotationDropdownIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-10 service-dropdown-link">
                          <NavLink to={`/${`data-annotation`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Data Annotation</NavLink>
                          <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`data-annotation`}#image-annotation`}>Image Annotation</a></p>
                          <p className="sub-service-links"><a href={`/${`data-annotation`}#video-annotation`}>Video Annotation</a></p>
                          <p className="sub-service-links"><a href={`/${`data-annotation`}#audio-annotation`}>Audio Annotation</a></p>
                          <p className="sub-service-links dropdown-view-all-link" ><a href={`/${`data-annotation`}`}>View All</a></p>
                          </div>
                          </div>

                      </div>
                    </div>
                  </div>
                    
                  </div>

                    <div className="dropdown sub-service-dropdown" style={{marginTop:"5.5px"}}>
                      <div className=" dropdown-toggle d-flex" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <NavLink to = "/services"   style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                  
                          Services
            
                        </NavLink>
                        <div  style={navStyle}>
                  
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    
                        </div>
                      </div>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <NavLink className="dropdown-item sub-service-dropdown-item" to={`/${`aiml`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>AI / ML</NavLink>
                        <NavLink className="dropdown-item sub-service-dropdown-item" to={`/${`data-management`}`}>Data Management</NavLink>
                        <NavLink className="dropdown-item sub-service-dropdown-item" to={`/${`advanced-analytics`}`}>Advanced Analytics</NavLink>
                        <NavLink className="dropdown-item sub-service-dropdown-item" to={`/${`data-engineering`}`}>Data Engineering</NavLink>
                        <NavLink className="dropdown-item sub-service-dropdown-item" to={`/${`platform-engineering`}`}>Platform Engineering</NavLink>
                        <NavLink className="dropdown-item sub-service-dropdown-item" to={`/${`user-experience`}`}>User Experience</NavLink>
                        <NavLink className="dropdown-item sub-service-dropdown-item" to={`/${`cloud`}`}>Cloud</NavLink>
                        <NavLink className="dropdown-item sub-service-dropdown-item" to={`/${`quality-assurance`}`}>Quality Assurance</NavLink>
                        <NavLink className="dropdown-item sub-service-dropdown-item" to={`/${`consulting`}`}>Consulting</NavLink>
                        <NavLink className="dropdown-item sub-service-dropdown-item" to={`/${`data-annotation`}`}>Data Annotation</NavLink>
                      </div>
                    </div> 

        

                  {/* INDUSTRIES DROPDOWN SECTION */}








                  <div  className="service-dropdown-menu" onMouseOver={showIndustryDropdown} onMouseOut={hideIndustryDropdown} style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                  
                  <a style={serviceDropdown} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                
                    Industries
                  
                  </a>
                        
                  <div class="dropdown-content industry-dropdown-content" onClick={hideIndustryDropdown}>  
                    <div class="row nav-sub-menu">
                      <div class="column nav-first-column">
                        <div className="navFlex">
                        <img src={RetailEcommerceIcon} className="img-fluid navIcon" alt="icon" />

                        <div className="col-10 service-dropdown-link">
                        <NavLink to={`/${`retail-ecommerce`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Retail & eCommerce</NavLink>
                        <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`retail-ecommerce`}#ai-solutions`}>AI Solutions</a></p>
                        <p className="sub-service-links"><a  href={`/${`retail-ecommerce`}#our-offerings`}>Our Offerings</a></p>
                        <p className="sub-service-links"><a href={`/${`retail-ecommerce`}#business-vertical`}>Business Vertical</a></p>
                        </div>
                        </div>    
                      </div>
                    <div className="column">

                        <div className="navFlex">
                        <img src={HealthcareIcon} className="img-fluid navIcon" alt="icon" />

                        <div className="col-10 service-dropdown-link">
                        <NavLink to={`/${`healthcare`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Healthcare</NavLink>
                        <p className="sub-service-links"style={{marginTop:"5px"}}><a href={`/${`healthcare`}#ai-solutions`}>AI Solutions</a></p>
                        <p className="sub-service-links"><a href={`/${`healthcare`}#our-offerings`}>Our Offerings</a></p>
                        <p className="sub-service-links"><a href={`/${`healthcare`}#business-vertical`}>Business Vertical</a></p>
                        </div>
                        </div>  
                    </div>
                    <div className="column">

                        <div className="navFlex">
                        <img src={InformationManagementIcon} className="img-fluid navIcon" alt="icon" />

                        <div className="col-10 service-dropdown-link">
                        <NavLink  to={`/${`information-management`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Information Management</NavLink>
                        <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`information-management`}#ai-solutions`}>AI Solutions</a></p>
                        <p className="sub-service-links"><a href={`/${`information-management`}#our-offerings`}>Our Offerings</a></p>
                        </div>
                        </div>
                    </div>
                    <div className="column extra-column">

                        <div className="navFlex">
                        <img src={FinancialServiceIcon} className="img-fluid navIcon" alt="icon" />

                        <div className="col-10 service-dropdown-link">
                        <NavLink to={`/${`financial-services`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Financial Services</NavLink>
                        <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`financial-services`}#ai-solutions`}>AI Solutions</a></p>
                        <p className="sub-service-links"><a href={`/${`financial-services`}#our-offerings`}>Our Offerings</a></p>
                        <p className="sub-service-links"><a href={`/${`financial-services`}#business-vertical`}>Business Vertical</a></p>
                        </div>
                        </div>

                    </div>
                  </div>
                </div>
                  
                </div>












                  
                  {/* <div style={navStyle} className="dropdown service-dropdown-menu" onMouseOver={showIndustryDropdown} onMouseOut={hideIndustryDropdown}>
                      <div  className=" dropdown-toggle d-flex"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <a style={{fontSize:"1.5rem"}}  activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                  
                          Industries
            
                        </a>
                      </div>
                      <div className="dropdown-menu industry-dropdown-content" aria-labelledby="dropdownMenuButton">
                        <NavLink activeStyle={{color: '#19AF8F', textDecoration: 'none'}} className="dropdown-item industry-dropdown-list" to={`/${`retail-ecommerce`}`} >Retail & eCommerce</NavLink>
                        <NavLink activeStyle={{color: '#19AF8F', textDecoration: 'none'}} className="dropdown-item industry-dropdown-list" to={`/${`healthcare`}`}>Healthcare</NavLink>
                        <NavLink activeStyle={{color: '#19AF8F', textDecoration: 'none'}} className="dropdown-item industry-dropdown-list" to={`/${`information-management`}`}>Information Management</NavLink>
                        <NavLink activeStyle={{color: '#19AF8F', textDecoration: 'none'}} className="dropdown-item industry-dropdown-list" to={`/${`financial-services`}`}>Financial Services</NavLink>
                      </div>
                    </div>  */}


                  {/* FOR SMALLER DEVICES */}
                  
                  <div className="dropdown sub-service-dropdown" style={{marginTop:"5.5px"}}>
                      <div className=" dropdown-toggle d-flex" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <a style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                  
                          Industries
            
                        </a>
                        <div  style={navStyle}>
                  
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    
                        </div>
                      </div>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <NavLink className="dropdown-item sub-service-dropdown-item" to={`/${`retail-ecommerce`}`} >Retail & eCommerce</NavLink>
                        <NavLink className="dropdown-item sub-service-dropdown-item" to={`/${`healthcare`}`}>Healthcare</NavLink>
                        <NavLink className="dropdown-item sub-service-dropdown-item" to={`/${`information-management`}`}>Information Management</NavLink>
                        <NavLink className="dropdown-item sub-service-dropdown-item" to={`/${`financial-services`}`}>Financial Services</NavLink>
                      </div>
                    </div> 

                
                {/* <div style={{padding:"15px 0px 0px 0px"}}> */}
                <NavLink to = "/casestudies" onClick={() => window.location.href="/casestudies"} style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                    
                    Case Studies
                    
                </NavLink>
                {/* </div> */}

                {/* <div style={{padding:"15px 0px 0px 0px"}}> */}
                <NavLink  to = "/careers"  onClick={() => window.location.href="/careers"} style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                    
                    Careers
                    
                </NavLink>
                {/* </div> */}

                {/* <NavLink  to = "/test"  onClick={() => window.location.href="/test"} style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                    
                    Test
                    
                </NavLink> */}

                <NavLink  to = "/contactus" onClick={() => window.location.href="/contactus"} className="contactus-button" activeStyle={{color: 'black', textDecoration: 'none'}}>
                    
                    Contact Us
                    
                </NavLink>
                {/* <a href = "/contactus" style={navStyle}>
                  <button  type="button" className="btn btn-default  contact-btn">Contact Us</button>
                </a> */}
                
              </ul>
            </div>
          </nav>
    </div>
        </>
    )
}

export default Navbar;