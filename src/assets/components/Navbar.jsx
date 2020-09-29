import React from "react";
import {NavLink} from "react-router-dom";
import amnetLogo from "../images/AD-Logo.png";

function Navbar(){
  const navStyle = {
    color : "white",
    textDecoration : "none",
    fontSize : "1.5rem",
    marginRight: "25px",
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
            <NavLink to = "/" className="navbar-brand">
              <img className="img-fluid logo" src= {amnetLogo} alt="logo" />
            </NavLink>
            <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <div className="navbar-toggler-icon"></div>
              <div className="navbar-toggler-icon"></div>
              <div className="navbar-toggler-icon"></div>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                {/* <!-- navigation bar menus --> */}
              <ul className="navbar-nav ml-auto">
                {/* <!-- <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li> --> */}
                  <NavLink to = "/aboutus" style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                    
                   About Us
                    
                </NavLink>
                <NavLink  to = "/services" style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                    
                    Services
                    
                </NavLink>
                <NavLink to = "/casestudies" style={navStyle} activeStyle={{color: '#19AF8F', textDecoration: 'none'}}>
                    
                    Case Studies
                    
                </NavLink>
                {/* <!-- <li className="nav-item">
                  <a className="nav-link " href="#">Blog</a>
                </li> --> */}
                {/* <li className="nav-item">
                    <a className="nav-link " href="./careers.html">Careers</a>
                </li> */}
                <NavLink to = "/contactus" style={navStyle}>
                <button  type="button" className="btn btn-default  contact-btn">Contact Us</button>
                </NavLink>
                
              </ul>
            </div>
          </nav>
    </div>
        </>
    )
}

export default Navbar;