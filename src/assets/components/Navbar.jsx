import React from "react";
import {Link} from "react-router-dom";
import amnetLogo from "../images/AD-Logo.png";

function Navbar(){
  const navStyle = {
    color : "white",
    textDecoration : "none"
}
    return (
        <>
            {/* <!-- NAVIGATION BAR --> */}
    <div className = "navigation-bar" id="navbar">
        <nav className="navbar navbar-expand-lg all-margin">
            {/* <!-- navigation bar logo --> */}
            <Link to = "/" className="navbar-brand">
              <img className="img-fluid logo" src= {amnetLogo} alt="logo" />
            </Link>
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
                  <Link to = "/aboutus" style={navStyle}>
                    <li className="nav-item" >
                    About Us
                    </li>
                </Link>
                <Link to = "/services" style={navStyle}>
                    <li className="nav-item" >
                    Services
                    </li>
                </Link>
                <Link to = "/casestudies" style={navStyle}>
                    <li className="nav-item" >
                    Case Studies
                    </li>
                </Link>
                {/* <!-- <li className="nav-item">
                  <a className="nav-link " href="#">Blog</a>
                </li> --> */}
                {/* <li className="nav-item">
                    <a className="nav-link " href="./careers.html">Careers</a>
                </li> */}
                <Link to = "/contactus">
                    <li className="nav-item">
                        <button type="button" className="btn btn-default contact-btn">Contact Us</button>
                    </li>
                </Link>
                
              </ul>
            </div>
          </nav>
    </div>
        </>
    )
}

export default Navbar;