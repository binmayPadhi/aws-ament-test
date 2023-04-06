import React from "react";
import { NavLink } from "react-router-dom";
import amnetLogo from "../images/HomePage/ADnewlogo.png";
import group from "../images/Group.png";
import amnetLogo1 from "../images/HomePage/ad-white.png";
import "../CSS/Navbar.css";
import { useEffect } from "react";
import Ribbon from "./Ribbon";
import { useState } from "react";
import { useLayoutEffect } from "react";

function Navbar(props) {
  useEffect(() => {
    const header = new Headers();
    header.append("X-Content-Type-Options", "nosniff");
    header.append("X-Frame-Options", "Deny");
  });
  const navStyle = {
    textDecoration: "none",
    fontSize: "14px",
    fontFamily: `'Poppins', sans-serif`,
    marginTop: "5px",
    padding: "20px 15px",
    height: "73px",
    fontWeight: "700",
    color: "#000000",
  };

  const navStyle1 = {
    textDecoration: "none",
    fontSize: "14px",
    fontFamily: `'Poppins', sans-serif`,
    marginTop: "5px",
    padding: "20px 15px",
    height: "73px",
    fontWeight: "700",
    backgroundColor: "transparent",
  };

  const serviceDropdown = {
    color: "black",
    textDecoration: "none",
    fontSize: "14px",
    fontFamily: `'Poppins', sans-serif`,
    marginTop: "5px",
    fontWeight: "700",
  };

  const contactUsButtonStyle = {
    display: "inline-block",
    color: "black",
    backgroundColor: "white",
    borderRadius: "10px",
    textDecoration: "none",
    fontSize: "14px",
    fontFamily: `'Poppins', sans-serif`,
    marginTop: "5px",
    padding: "10px",
  };

  function showDropdown(val) {
    if (val === "service") {
      document.getElementsByClassName("dropdown-content")[0].style.display =
        "block";
    } else {
      document.getElementsByClassName(
        "dropdown-content-blog"
      )[0].style.display = "block";
    }
  }
  function hideDropdown(val) {
    if (val === "service") {
      document.getElementsByClassName("dropdown-content")[0].style.display =
        "none";
    } else {
      document.getElementsByClassName(
        "dropdown-content-blog"
      )[0].style.display = "none";
    }
  }

  function showIndustryDropdown() {
    document.getElementsByClassName(
      "industry-dropdown-content"
    )[0].style.display = "block";
  }
  function hideIndustryDropdown() {
    document.getElementsByClassName(
      "industry-dropdown-content"
    )[0].style.display = "none";
  }

  // google analytics
  //let dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-WMMZT165YM");
  const [storeRibbonval, setstoreRibbon] = useState("show");

  useLayoutEffect(() => {
    if (localStorage.getItem("ribbonClose") != null) {
      setstoreRibbon("hide");
    }
  });

  const onchange = (e) => {
    console.log(e);
    setstoreRibbon("hide");
  };

  return (
    <>
      {/* <!-- NAVIGATION BAR --> */}

      <div className="position-fixed" id="navbar">
        {storeRibbonval != "hide" ? <Ribbon onSelectchange={onchange} /> : null}
        <div
          className={
            "navigation-bar " + (props.navChange === "app" ? "bg-white" : "")
          }
        >
          <nav className="navbar navbar-expand-lg ">
            <a href="/" className="navbar-brand active pb-2">
              <img
                className="img-fluid logo"
                src={props.navChange === "app" ? amnetLogo : amnetLogo1}
                alt="logo"
              />
            </a>
            {/* <!-- navigation bar logo --> */}
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="navbar-toggler-icon"></div>
              <div className="navbar-toggler-icon"></div>
              <div className="navbar-toggler-icon"></div>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              {/* <!-- navigation bar menus --> */}
              <ul className="navbar-nav">
                {/* <div style={{padding:"15px 0px 0px 0px"}}> */}
                <NavLink
                  to="/aboutus"
                  style={navStyle}
                  className={
                    props.navChange === "app" ? "text-black" : "text-white"
                  }
                  activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                >
                  About Us
                </NavLink>
                {/* SERVICE DROPDOWN MENU   */}

                <div
                  className="service-dropdown-menu only-service-dropdown"
                  onMouseOver={() => showDropdown("service")}
                  onMouseOut={() => hideDropdown("service")}
                  style={navStyle}
                  activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                >
                  <NavLink
                    to="/services"
                    style={serviceDropdown}
                    className={
                      (props.navChange === "app"
                        ? "text-black"
                        : "text-white") + " arrow_icon"
                    }
                    activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                  >
                    Services
                  </NavLink>

                  <div
                    className="dropdown-content"
                    style={{ width: "95%", marginTop: "18px" }}
                    onClick={() => hideDropdown("service")}
                  >
                    <div className="row">
                      <div className="col-lg-3 bg-nav-white mt-5">
                        <h1 className="fs-13 fw-bold-400 text-new">
                          What's New
                        </h1>
                        <h1 className="fs-13 fw-bold-500 text-underline text-black">
                          DIGITAL TRANSFORMATION
                        </h1>
                        <p className="fs-13 fw-bold-400 text-digital">
                          Digital Transformation through proprietary
                          accelerators
                        </p>
                        <hr className="hr-line" />

                        <h1 className="fs-13 fw-bold-500 text-underline mt-4">
                          SERVICES OVERVIEW
                        </h1>
                        <p className="fs-13 fw-bold-400 text-digital">
                          We offer a comprehensive portfolio of services to
                          deliver solutions that make a difference!
                        </p>
                        <hr className="hr-line" />

                        <h1 className="fs-13 fw-bold-400 text-new mt-4">
                          Amnet Insight{" "}
                        </h1>
                        <div className="d-flex mt-4">
                          <img src={group} className="w-20" />
                          <div className="ml-3">
                            <h1 className="fs-13 fw-bold-500 text-underline">
                              BY VALUER
                            </h1>
                            <p className="fs-13 fw-bold-400 text-digital">
                              Overall investment in AI research is set to reach
                              $267 Billion by 2027
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9 bg-dropdown ">
                        <div className="row">
                          <div className="col-lg-4">
                            <p className="service-aiml mt-5 mb-0">
                              <a href={`/services/aiml`}>AI/ML</a>
                            </p>
                            <p
                              className="sub-service-links mb-0"
                              style={{ marginTop: "5px" }}
                            >
                              <a href={`/services/aiml/Statistical Analysis`}>
                                Statistical Analysis
                              </a>
                            </p>
                            <p className="sub-service-links mb-0">
                              <a href={`/services/aiml/Visualizations`}>
                                Visualizations
                              </a>
                            </p>
                            <p className="sub-service-links mb-0">
                              <a href={`/services/aiml/Anomaly Detection`}>
                                Anomaly Detection
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link mb-0">
                              <a href={`/services/aiml`}>{`See more >`}</a>
                            </p>

                            <p className="service-aiml mt-5">
                              <a href={`/services/advancedanalytics`}>
                                Advanced Analytics
                              </a>
                            </p>
                            <p
                              className="sub-service-links mb-0"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/services/advancedanalytics/Complex Event Processing`}
                              >
                                Complex Event Processing
                              </a>
                            </p>
                            <p className="sub-service-links mb-0">
                              <a
                                href={`/services/advancedanalytics/Deep Learning`}
                              >
                                Deep Learning
                              </a>
                            </p>
                            <p className="sub-service-links mb-0">
                              <a
                                href={`/services/advancedanalytics/Graph Analysis`}
                              >
                                Graph Analysis
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link mb-0">
                              <a
                                href={`/services/advancedanalytics`}
                              >{`See more >`}</a>
                            </p>

                            <p className="service-aiml mt-5">
                              <a href={`/services/strategyconsulting`}>
                                Strategy & Consulting
                              </a>
                            </p>
                            <p
                              className="sub-service-links mb-0"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/services/strategyconsulting/Data Strategy`}
                              >
                                Data Strategy
                              </a>
                            </p>
                            <p className="sub-service-links mb-0">
                              <a
                                href={`/services/strategyconsulting/AI Strategy`}
                              >
                                AI Strategy
                              </a>
                            </p>
                            <p className="sub-service-links mb-0">
                              <a
                                href={`/services/strategyconsulting/Application Development`}
                              >
                                Application Development
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link mb-0">
                              <a
                                href={`/services/strategyconsulting`}
                              >{`See more >`}</a>
                            </p>

                            <p className="sub-service-view mt-5">
                              <a href={`/services`}>{`View All Services >`}</a>
                            </p>
                          </div>
                          <div className="col-lg-4">
                            <p className="service-aiml mt-5">
                              <a href={`/services/dataannotation`}>
                                Data Annotation
                              </a>
                            </p>
                            <p
                              className="sub-service-links mb-0"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/services/dataannotation/Image Annotation`}
                              >
                                Image Annotation
                              </a>
                            </p>
                            <p className="sub-service-links mb-0">
                              <a
                                href={`/services/dataannotation/Video Annotation`}
                              >
                                Video Annotation
                              </a>
                            </p>
                            <p className="sub-service-links mb-0">
                              <a
                                href={`/services/dataannotation/Audio Annotation`}
                              >
                                Audio Annotation
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link mb-0">
                              <a
                                href={`/services/dataannotation`}
                              >{`See more >`}</a>
                            </p>

                            <p className="service-aiml mt-5">
                              <a href={`/services/dataengineering`}>
                                Data Engineering
                              </a>
                            </p>
                            <p
                              className="sub-service-links mb-0"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/services/dataengineering/Data Pipeline`}
                              >
                                Data Pipeline
                              </a>
                            </p>
                            <p className="sub-service-links mb-0">
                              <a
                                href={`/services/dataengineering/Data Transformation`}
                              >
                                Data Transformation
                              </a>
                            </p>
                            <p className="sub-service-links mb-0">
                              <a
                                href={`/services/dataengineering/Data Cleansing`}
                              >
                                Data Cleansing
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link mb-0">
                              <a
                                href={`/services/dataengineering`}
                              >{`See more >`}</a>
                            </p>

                            <p className="service-aiml mt-5">
                              <a href={`/services/datamanagement`}>
                                Data Management
                              </a>
                            </p>
                            <p
                              className="sub-service-links mb-0"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/services/datamanagement/Data Architecture Management`}
                              >
                                Data Architecture Management
                              </a>
                            </p>
                            <p className="sub-service-links mb-0">
                              <a
                                href={`/services/datamanagement/Data Development`}
                              >
                                Data Development
                              </a>
                            </p>
                            <p className="sub-service-links mb-0">
                              <a
                                href={`/services/datamanagement/Data Governance`}
                              >
                                Data Governance
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link mb-0">
                              <a
                                href={`/services/datamanagement`}
                              >{`See more >`}</a>
                            </p>
                          </div>
                          <div className="col-lg-4">
                            <p className="service-aiml mt-5">
                              <a href={`/services/userexperiences`}>
                                User Experience
                              </a>
                            </p>
                            <p
                              className="sub-service-links mb-0"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/services/userexperiences/Design Thinking`}
                              >
                                Design Thinking
                              </a>
                            </p>
                            <p className="sub-service-links mb-0">
                              <a
                                href={`/services/userexperiences/User Research & Analysis`}
                              >
                                User Research & Analysis
                              </a>
                            </p>
                            <p className="sub-service-links mb-0">
                              <a
                                href={`/services/userexperiences/Experience & Interaction Design`}
                              >
                                Experience & Interaction Design
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link ">
                              <a
                                href={`/services/userexperiences`}
                              >{`See more >`}</a>
                            </p>

                            <p className="service-aiml mt-5">
                              <a href={`/cloudservices`}>Cloud Services</a>
                            </p>
                            <p
                              className="sub-service-links mb-0"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/services/cloudservices/Cloud Advisory Services`}
                              >
                                Cloud Advisory Services
                              </a>
                            </p>
                            <p className="sub-service-links mb-0">
                              <a
                                href={`/services/cloudservices/Cloud Migration Services`}
                              >
                                Cloud Migration Services
                              </a>
                            </p>
                            <p className="sub-service-links mb-0">
                              <a
                                href={`/services/cloudservices/Cloud Integration`}
                              >
                                Cloud Integration
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link ">
                              <a
                                href={`/services/cloudservices`}
                              >{`See more >`}</a>
                            </p>

                            <p className="service-aiml mt-5">
                              <a href={`/services/qualityassurance`}>
                                Quality Assurance
                              </a>
                            </p>
                            <p
                              className="sub-service-links mb-0"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/services/qualityassurance/Functional Testing`}
                              >
                                Functional Testing
                              </a>
                            </p>
                            <p className="sub-service-links mb-0">
                              <a
                                href={`/services/qualityassurance/Compatibility Testing`}
                              >
                                Compatibility Testing
                              </a>
                            </p>
                            <p className="sub-service-links mb-0">
                              <a
                                href={`/services/qualityassurance/Performance Testing`}
                              >
                                Performance Testing
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link ">
                              <a
                                href={`/services/qualityassurance`}
                              >{`See more >`}</a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="dropdown sub-service-dropdown"
                  style={{ marginTop: "5.5px" }}
                >
                  <div
                    className=" dropdown-toggle d-flex"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <NavLink
                      to="/services"
                      style={navStyle}
                      activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                    >
                      Services
                    </NavLink>
                    <div style={navStyle}>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/aiml`}
                      activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                    >
                      AI / ML
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/datamanagement`}
                    >
                      Data Management
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/advancedanalytics`}
                    >
                      Advanced Analytics
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/dataengineering`}
                    >
                      Data Engineering
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/platformengineering`}
                    >
                      Platform Engineering
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/userexperiences`}
                    >
                      User Experience
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/cloudservices`}
                    >
                      Cloud
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/qualityassurance`}
                    >
                      Quality Assurance
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/strategyconsulting`}
                    >
                      Consulting
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/dataannotation`}
                    >
                      Data Annotation
                    </NavLink>
                  </div>
                </div>

                {/* INDUSTRIES DROPDOWN SECTION */}

                {/* FOR SMALLER DEVICES */}

                <NavLink
                  to="/casestudies"
                  onClick={() => (window.location.href = "/casestudies")}
                  style={navStyle}
                  className={
                    props.navChange === "app" ? "text-black" : "text-white"
                  }
                  activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                >
                  Case Studies
                </NavLink>
                {/* </div> */}

                {/* <div style={{padding:"15px 0px 0px 0px"}}> */}
                <NavLink
                  to="/careers"
                  className={
                    props.navChange === "app" ? "text-black" : "text-white"
                  }
                  onClick={() => (window.location.href = "/careers")}
                  style={navStyle}
                  activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                >
                  Careers
                </NavLink>

                <div
                  className="service-dropdown-menu only-blog-dropdown"
                  onMouseOver={() => showDropdown("insights")}
                  onMouseOut={() => hideDropdown("insights")}
                  style={navStyle}
                >
                  <NavLink
                    to="/blog"
                    onClick={() => (window.location.href = "/blog")}
                    style={navStyle}
                    className={
                      props.navChange === "app" ? "text-black" : "text-white"
                    }
                  >
                    Insights
                  </NavLink>
                  <div
                    className="dropdown-content-blog"
                    onClick={() => hideDropdown("insights")}
                  >
                    <div className="row nav-sub-menu">
                      <div className="column col-padding nav-first-column">
                        <div className="navFlex">
                          <div className="col-10 service-dropdown-link">
                            <p className="sub-service-links-insights">
                              <NavLink
                                to={`/blog/blog-seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry`}
                                activeStyle={{
                                  color: "#19AF8F",
                                  textDecoration: "none",
                                }}
                              >
                                Blogs
                              </NavLink>
                              <NavLink
                                target={"_blank"}
                                to={`/blog/webinar-reshaping-the-retail-industry-through-AI`}
                                activeStyle={{
                                  color: "#19AF8F",
                                  textDecoration: "none",
                                }}
                              >
                                Webinars
                              </NavLink>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="dropdown sub-service-dropdown"
                  style={{ marginTop: "5.5px" }}
                >
                  <div
                    className=" dropdown-toggle d-flex"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <NavLink
                      to="/blog"
                      style={navStyle}
                      activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                    >
                      Insights
                    </NavLink>
                    <div style={navStyle}>
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/blog/blog-seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry`}
                    >
                      Blogs
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      target={"_blank"}
                      to={`/blog/webinar-reshaping-the-retail-industry-through-AI`}
                    >
                      Webinars
                    </NavLink>
                  </div>
                </div>

                <NavLink
                  to="/contactus"
                  className="contactus-button"
                  activeStyle={{ color: "black", textDecoration: "none" }}
                >
                  Contact Us
                </NavLink>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
