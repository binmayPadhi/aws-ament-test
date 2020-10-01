import React from "react";
import {NavLink} from "react-router-dom";
import amnetLogo from "../images/AD-Logo.png";

function Navbar(){
  const navStyle = {
    color : "white",
    textDecoration : "none",
    fontSize : "1.5rem",
    // marginRight: "25px",
    fontFamily: `'Poppins', sans-serif`,
    marginTop: "5px",
    padding: "10px 15px"
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
                <NavLink to = "/aboutus" onClick={() => window.location.href="/aboutus"} style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                  
                  About Us
                    
                </NavLink>
                <NavLink  to = "/services" onClick={() => window.location.href="/services"} style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                    
                    Services
                    
                </NavLink>
                <NavLink to = "/casestudies" onClick={() => window.location.href="/casestudies"} style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                    
                    Case Studies
                    
                </NavLink>
                <NavLink  to = "/careers" onClick={() => window.location.href="/careers"} style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                    
                    Careers
                    
                </NavLink>
                <NavLink  to = "/contactus" onClick={() => window.location.href="/contactus"} style={contactUsButtonStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                    
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