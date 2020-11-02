import React from "react";
import {NavLink} from "react-router-dom";
import amnetLogo from "../images/AD-Logo.png";
import navIcon from "../images/Sub-Service-Images/AI-ML-Images/automl-icon.png";

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

                  <div  className="dp-test" style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                  
                    <NavLink to = "/services" onClick={() => window.location.href="/aboutus"} style={serviceDropdown} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                  
                      Services
                    
                    </NavLink>
                          
                    <div class="dropdown-content">  
                      <div class="row nav-sub-menu">
                        <div class="column column1">
                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink to={`/${`aiml`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>AI / ML</NavLink>
                          <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`aiml`}#statistical-analysis`}>Statistical Analysis</a></p>
                          <p className="sub-service-links"><a  href={`/${`aiml`}#visualizations`}>Visualizations</a></p>
                          <p className="sub-service-links"><a href={`/${`aiml`}#anomaly-detection`}>Anomaly Detection</a></p>
                          <p className="sub-service-links dropdown-view-all-link" ><a href={`/${`aiml`}`}>View All</a></p>
                          
                          </div>
                          </div>

                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink to={`/${`data-management`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Data management</NavLink>
                          <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`data-management`}#data-architecture-management`}>Data Architecture Management</a></p>
                          <p className="sub-service-links"><a href={`/${`data-management`}#data-development`}>Data Development</a></p>
                          <p className="sub-service-links"><a href={`/${`data-management`}#data-governance`}>Data Governance</a></p>
                          <p className="sub-service-links dropdown-view-all-link" ><a href={`/${`data-management`}`}>View All</a></p>
                          </div>
                          </div>

                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink  to={`/${`advanced-analytics`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Advanced Analytics</NavLink>
                          <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`advanced-analytics`}#complex-event-processing`}>Complex Event Processing</a></p>
                          <p className="sub-service-links"><a href={`/${`advanced-analytics`}#deep-learning`}>Deep Learning</a></p>
                          <p className="sub-service-links"><a href={`/${`advanced-analytics`}#graph-analysis`}>Graph Analysis</a></p>
                          <p className="sub-service-links dropdown-view-all-link" ><a href={`/${`advanced-analytics`}`}>View All</a></p>
                          </div>
                          </div>
         
                        </div>
                      <div className="column">

                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink to={`/${`data-engineering`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Data Engineering</NavLink>
                          <p className="sub-service-links"style={{marginTop:"5px"}}><a href={`/${`data-engineering`}#data-pipelines`}>Data Pipelines</a></p>
                          <p className="sub-service-links"><a href={`/${`data-engineering`}#data-transformations`}>Data Transformations</a></p>
                          <p className="sub-service-links"><a href={`/${`data-engineering`}#data-cleansing`}>Data Cleansing</a></p>
                          <p className="sub-service-links dropdown-view-all-link" ><a href={`/${`data-engineering`}`}>View All</a></p>
                          </div>
                          </div>
                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink to={`/${`platform-engineering`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Platform Engineering</NavLink>
                          <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`platform-engineering`}#application-engineering`}>Application Engineering</a></p>
                          <p className="sub-service-links"><a href={`/${`platform-engineering`}#infrastructure`}>Infrastructure</a></p>
                          <p className="sub-service-links"><a href={`/${`platform-engineering`}#payment-gateways`}>Payment Gateways</a></p>
                          <p className="sub-service-links dropdown-view-all-link" ><a href={`/${`platform-engineering`}`}>View All</a></p>
                          </div>
                          </div>
                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink to={`/${`user-experience`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>User Experience</NavLink>
                          <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`user-experience`}#design-thinking`}>Design Thinking</a></p>
                          <p className="sub-service-links"><a href={`/${`user-experience`}#user-research`}>User Research</a></p>
                          <p className="sub-service-links"><a href={`/${`user-experience`}#interaction-design`}>Interaction Design</a></p>
                          <p className="sub-service-links dropdown-view-all-link" ><a href={`/${`user-experience`}`}>View All</a></p>
                          </div>
                          </div>

                          
                      </div>
                      <div className="column">

                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink  to={`/${`cloud`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Cloud</NavLink>
                          <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`cloud`}#cloud-advisory-services`}>Cloud Advisory Services</a></p>
                          <p className="sub-service-links"><a href={`/${`cloud`}#cloud-migration-services`}>Cloud Migration Services</a></p>
                          <p className="sub-service-links"><a href={`/${`cloud`}#cloud-integration`}>Cloud Integration</a></p>
                          <p className="sub-service-links dropdown-view-all-link" ><a href={`/${`cloud`}`}>View All</a></p>
                          </div>
                          </div>
                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink to={`/${`quality-assurance`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Quality Assurance</NavLink>
                          <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`quality-assurance`}#functional-testing`}>Functional Testing</a></p>
                          <p className="sub-service-links"><a href={`/${`quality-assurance`}#compatibility-testing`}>Compatibility Testing</a></p>
                          <p className="sub-service-links"><a href={`/${`quality-assurance`}#performance-testing`}>Performance Testing</a></p>
                          <p className="sub-service-links dropdown-view-all-link" ><a href={`/${`quality-assurance`}`}>View All</a></p>
                          </div>
                          </div>
                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink to={`/${`consulting`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Strategy & Consulting</NavLink>
                          <p className="sub-service-links" style={{marginTop:"5px"}}><a href={`/${`consulting`}#data-strategy`}>Data Strategy</a></p>
                          <p className="sub-service-links"><a href={`/${`consulting`}#ai-strategy`}>AI Strategy</a></p>
                          <p className="sub-service-links"><a href={`/${`consulting`}#application-development`}>Application Development</a></p>
                          <p className="sub-service-links dropdown-view-all-link" ><a href={`/${`consulting`}`}>View All</a></p>
                          </div>
                          </div>

                         
                      </div>
                      <div className="column extra-column">

                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
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
                  
                          {`>`}
                    
                        </div>
                      </div>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <NavLink className="dropdown-item" to={`/${`aiml`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>AI / ML</NavLink>
                        <NavLink className="dropdown-item" to={`/${`data-management`}`}>Data Management</NavLink>
                        <NavLink className="dropdown-item" to={`/${`advanced-analytics`}`}>Advanced Analytics</NavLink>
                        <NavLink className="dropdown-item" to={`/${`data-engineering`}`}>Data Engineering</NavLink>
                        <NavLink className="dropdown-item" to={`/${`platform-engineering`}`}>Platform Engineering</NavLink>
                        <NavLink className="dropdown-item" to={`/${`user-experience`}`}>User Experience</NavLink>
                        <NavLink className="dropdown-item" to={`/${`cloud`}`}>Cloud</NavLink>
                        <NavLink className="dropdown-item" to={`/${`quality-assurance`}`}>Quality Assurance</NavLink>
                        <NavLink className="dropdown-item" to={`/${`consulting`}`}>Consulting</NavLink>
                        <NavLink className="dropdown-item" to={`/${`data-annotation`}`}>Data Annotation</NavLink>
                      </div>
                    </div> 

                  {/* </NavLink>*/}
                
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

                <NavLink  to = "/contactus" onClick={() => window.location.href="/contactus"} className="contactus-button" activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                    
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