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
    padding: "10px 15px",
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
        <nav className="navbar navbar-expand-lg all-margin">
            {/* <!-- navigation bar logo --> */}
            <a href = "/" className="navbar-brand active">
              <img className="img-fluid logo" src= {amnetLogo} alt="logo" />
            </a>
            <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <div className="navbar-toggler-icon"></div>
              <div className="navbar-toggler-icon"></div>
              <div className="navbar-toggler-icon"></div>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                {/* <!-- navigation bar menus --> */}
              <ul className="navbar-nav ml-auto">
                <div style={{padding:"15px 0px 0px 0px"}}>
                <NavLink to = "/aboutus" onClick={() => window.location.href="/aboutus"} style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                  
                  About Us
                    
                </NavLink>
                </div>

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
                        <div class="column">
                          
                          {/* <div className="row no-gutters dp-link-test">
                              <div className = "col-3">
                                <img src={navIcon} className="img-fluid navIcon" alt="icon" />
                              </div>
                              <div className = "col-9">
                              <NavLink className="dropdown-item" to={`/${`data-management`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Data-management</NavLink>
                              <p>Amnet Digital is enabling enterprises reimagine and redefine</p>
                              </div>
                          </div> */}

                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink to={`/${`aiml`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>AI / ML</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>
                          </div>
                          </div>

                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink to={`/${`data-management`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Data management</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>
                          </div>
                          </div>

                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink  to={`/${`advanced-analytics`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Advanced Analytics</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>
                          </div>
                          </div>
                          

                          {/* <div className="col-12 dp-link-test">
                          <NavLink className="dropdown-item" to={`/${`data-management`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Data-management</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>
                          </div>

                          <div className="col-12 dp-link-test">
                          <NavLink className="dropdown-item" to={`/${`advanced-analytics`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Advanced Analytics</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>     
                          </div> */}

                          
                                             
                        </div>
                      <div className="column">

                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink to={`/${`data-engineering`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Data Engineering</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>
                          </div>
                          </div>
                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink to={`/${`platform-engineering`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Platform Engineering</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>
                          </div>
                          </div>
                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink to={`/${`user-experience`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>User Experience</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>
                          </div>
                          </div>


                          {/* <div className="col-12 dp-link-test">
                          <NavLink className="dropdown-item" to={`/${`data-engineering`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Data Engineering</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>  
                          </div>

                          <div className="col-12 dp-link-test">
                          <NavLink className="dropdown-item" to={`/${`platform-engineering`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Platform Engineering</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>   
                          </div>

                          <div className="col-12 dp-link-test">
                          <NavLink className="dropdown-item" to={`/${`user-experience`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>User Experience</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>  
                          </div> */}
                          
                      </div>
                      <div className="column">

                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink  to={`/${`cloud`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Cloud</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>
                          </div>
                          </div>
                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink to={`/${`quality-assurance`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Quality Assurance</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>
                          </div>
                          </div>
                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink to={`/${`consulting`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Strategy & Consulting</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>
                          </div>
                          </div>

                          {/* <div className="col-12 dp-link-test">
                          <NavLink className="dropdown-item" to={`/${`cloud`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Cloud</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>
                          </div>

                          <div className="col-12 dp-link-test">
                          <NavLink className="dropdown-item" to={`/${`quality-assurance`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Quality Assurance</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>
                          </div>

                          <div className="col-12 dp-link-test">
                          <NavLink className="dropdown-item" to={`/${`consulting`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Strategy & Consulting</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>  
                          </div> */}
                         
                      </div>
                      <div className="column extra-column">

                          <div className="navFlex">
                          <img src={navIcon} className="img-fluid navIcon" alt="icon" />

                          <div className="col-12 dp-link-test">
                          <NavLink to={`/${`data-annotation`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Data Annotation</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>
                          </div>
                          </div>

                          {/* <div className="col-12 dp-link-test">
                          <NavLink className="dropdown-item" to={`/${`data-annotation`}`} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>Data Annotation</NavLink>
                          <p>Amnet Digital is enabling enterprises reimagine and redefine</p>
                          </div> */}
                      </div>
                    </div>
                  </div>
                    
                  </div>

                    <div className="dropdown sub-service-dropdown" style={{marginTop:"5.5px"}}>
                      <div className=" dropdown-toggle d-flex" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <NavLink to = "/services" onClick={() => window.location.href="/services"}   style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                  
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

                    
                    
                    
                
                
                <div style={{padding:"15px 0px 0px 0px"}}>
                <NavLink to = "/casestudies" onClick={() => window.location.href="/casestudies"} style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                    
                    Case Studies
                    
                </NavLink>
                </div>

                <div style={{padding:"15px 0px 0px 0px"}}>
                <NavLink  to = "/careers"  onClick={() => window.location.href="/careers"} style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                    
                    Careers
                    
                </NavLink>
                </div>

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