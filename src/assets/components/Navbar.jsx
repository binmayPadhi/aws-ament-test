import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import amnetLogo from "../images/HomePage/ADnewlogo.png";
import group from "../images/HomePage/Group.png";
import amnetLogo1 from "../images/HomePage/ad-white.png";
import "../CSS/Navbar.css";
import { useEffect } from "react";
import Ribbon from "./Ribbon";
import { useState } from "react";
import { useLayoutEffect } from "react";

function Navbar(props) {
    const url = window.location.pathname;
  const [color, setNavcolor] = useState("homepage");
  const changebackgroundcolor = () => {
    if (
      url === "/legalresources" ||
      url ===
        "/blogs/seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry" ||
        url === 
        "/blog-seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry" ||
      url === "/cookiespolicy" ||
      url === "/Privacypolicy" ||
      url === "/termsandconditions" ||
      url === "/blogs/AI-for-Retail-Discover-how-AI-can-revolutionize-the-retail-industry-and-help-businesses-increase-sales-improve-customer-experience-and-optimize-operations" ||
      url === "/blogs/What-is-AIOps-and-explore-how-it-is-revolutionizing-the-retail-industry-by-solving-complex-challenges" ||
      url === "/blogs/Why-do-we-need-AIOps-and-where-does-it-fit-with-the-modern-IT-environment"
    ) {
      setNavcolor("app");
    } else {
      if (window.scrollY >= 35) {
        setNavcolor("app");
      } else {
        setNavcolor("homepage");
      }
    }
  };
  window.addEventListener("scroll", changebackgroundcolor);
  const history = useNavigate();
  useEffect(() => {
    const header = new Headers();
    header.append("X-Content-Type-Options", "nosniff");
    header.append("X-Frame-Options", "Deny");
    changebackgroundcolor();
  }, [url]);
  const navStyle = {
    textDecoration: "none",
    fontSize: "14px",
    fontFamily: `'Poppins', sans-serif`,
    marginTop: "5px",
    padding: "20px 10px",
    height: "73px",
    fontWeight: "700",
    color: "#000000",
  };

  const navStyle1 = {
    textDecoration: "none",
    fontSize: "14px",
    fontFamily: `'Poppins', sans-serif`,
    marginTop: "5px",
    padding: "20px 10px",
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

  const serviceTo = (e, linkedUrl) => {
    e.preventDefault();
    history(linkedUrl);
  };

  function showDropdown(val) {
    if (val === "service") {
      document.getElementsByClassName("arrow-up")[0].classList.remove("hide");
      document.getElementsByClassName("arrow-up")[0].classList.add("show");
      document.getElementsByClassName("dropdown-content")[0].style.display =
        "block";
    } else {
      document
        .getElementsByClassName("arrow-up-insights")[0]
        .classList.remove("hide");
      document
        .getElementsByClassName("arrow-up-insights")[0]
        .classList.add("show");
      document.getElementsByClassName(
        "dropdown-content-blog"
      )[0].style.display = "block";
    }
  }
  function hideDropdown(val) {
    if (val === "service") {
      document.getElementsByClassName("arrow-up")[0].classList.remove("show");
      document.getElementsByClassName("arrow-up")[0].classList.add("hide");
      document.getElementsByClassName("dropdown-content")[0].style.display =
        "none";
    } else {
      document
        .getElementsByClassName("arrow-up-insights")[0]
        .classList.remove("show");
      document
        .getElementsByClassName("arrow-up-insights")[0]
        .classList.add("hide");
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
    setstoreRibbon("hide");
  };

  const closeNavpopup = () => {
    let x = document.getElementById("navbarNav").classList.contains("show");
    if (x === true) {
      document.getElementById("navbarNav").classList.remove("show");
    }
  };

  return (
    <>
      {/* <!-- NAVIGATION BAR --> */}

      <div className="position-fixed" id="navbar">
        {/* {storeRibbonval != "hide" ? <Ribbon onSelectchange={onchange} /> : null} */}
        <div
          className={"navigation-bar " + (color === "app" ? "bgc-white" : "")}
        >
          <nav className="navbar navbar-expand-lg ">
            <a href="/" className="navbar-brand active pb-2">
              <img
                className="img-fluid logo"
                src={color === "app" ? amnetLogo : amnetLogo1}
                alt="logo"
              />
            </a>
            {/* <!-- navigation bar logo --> */}
            <button
              className="navbar-toggler custom-toggler bgc-white"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-haspopup="true"
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
                {/*--For Mobile Navigation--*/}
                <div className="service-dropdown-menu" style={navStyle}>
                  
                  <NavLink
                    to="/aboutus"
                    onClick={() => (window.location.href = "/aboutus")}
                    style={navStyle}
                    className={color === "app" ? "text-black" : "text-white"}
                  >
                    About Us
                  </NavLink>
                </div>
                <div
                  className="dropdown sub-service-dropdown"
                  style={{ marginTop: "5.5px" }}
                >
                  <div
                    className=" dropdown-toggle d-flex dropdown-item sub-service-dropdown-item"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <NavLink
                      to="/aboutus"
                      style={navStyle}
                      onClick={closeNavpopup}
                      activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                    >
                      About Us
                    </NavLink>
                  </div>
                </div>
                {/* SERVICE DROPDOWN MENU   */}

                <div
                  className="service-dropdown-menu"
                  onMouseOver={() => showDropdown("service")}
                  onMouseOut={() => hideDropdown("service")}
                  style={navStyle}
                  activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                >
                  <NavLink
                    to="/services"
                    style={serviceDropdown}
                    className={
                      (color === "app" ? "text-black" : "text-white") +
                      " arrow_icon"
                    }
                    activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                  >
                    Services
                  </NavLink>
                  <div className="arrow-up hide"></div>
                  <div
                    className="dropdown-content"
                    style={{ width: "95%", top: "56px" }}
                    onClick={() => hideDropdown("service")}
                  >
                    <div className="row">
                      <div className="col-lg-3 bg-nav-white pt-5">
                        <h1 className="fs-13 fw-bold-400 text-new">
                          What's New
                        </h1>
                        {/* <a className="fs-13 fw-bold-500 text-underline text-black cr-pointer"
                        href="/services/intelligent-document-processing">
                          INTELLIGENT DOCUMENT PROCESSING
                        </a>
                        <p className="fs-13 fw-bold-400 text-digital">
                          Extract and structure data from complex documents automatically
                        </p>
                        <hr className="hr-line" /> */}
                        <a className="fs-13 fw-bold-500 text-underline text-black cr-pointer" 
                        href={`/services/${`dataengineering`}/${`data-transformations`}`}>
                          DIGITAL TRANSFORMATION
                        </a>
                        
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
                            <p className="service-aiml mt-5 pt-1">
                            <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/aiml`)
                                }
                                className="cr-pointer"
                              >
                                AI & ML
                              </span>
                            </p>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/services/${`aiml`}/${`statistical-analysis`}`}
                              >
                                Statistical Analysis
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`aiml`}/${`visualizations`}`}
                              >
                                Visualizations
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`aiml`}/${`anomaly-detection`}`}
                              >
                                Anomaly Detection
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link mb-0">
                              <span
                                onClick={(e) => serviceTo(e, `/services/aiml`)}
                              >
                                {`See more >`}
                              </span>
                            </p>

                            <p className="service-aiml mt-5">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/advancedanalytics`)
                                }
                                className="cr-pointer"
                              >
                                Advanced Analytics
                              </span>
                            </p>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/services/${`advancedanalytics`}/${`complex-event-processing`}`}
                              >
                                Complex Event Processing
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`advancedanalytics`}/${`deep-learning`}`}
                              >
                                Deep Learning
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`advancedanalytics`}/${`graph-analysis`}`}
                              >
                                Graph Analysis
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link mb-0">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/advancedanalytics`)
                                }
                              >
                                {`See more >`}
                              </span>
                            </p>
                            <p className="service-aiml mt-5">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/strategyconsulting`)
                                }
                                className="cr-pointer"
                              >
                                Strategy & Consulting
                              </span>
                            </p>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/services/${`strategyconsulting`}/${`data-strategy`}`}
                              >
                                Data Strategy
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`strategyconsulting`}/${`ai-strategy`}`}
                              >
                                AI Strategy
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`strategyconsulting`}/${`application-development`}`}
                              >
                                Application Development
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link mb-0">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/strategyconsulting`)
                                }
                              >
                                {`See more >`}
                              </span>
                            </p>

                            <p className="sub-service-view mt-5">
                              <a href={`/services`}>{`View All Services >`}</a>
                            </p>
                          </div>
                          <div className="col-lg-4">
                            <p className="service-aiml mt-5">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/dataannotation`)
                                }
                                className="cr-pointer"
                              >
                                Data Annotation
                              </span>
                            </p>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/services/${`dataannotation`}/${`image-annotation`}`}
                              >
                                Image Annotation
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`dataannotation`}/${`video-annotation`}`}
                              >
                                Video Annotation
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`dataannotation`}/${`audio-annotation`}`}
                              >
                                Audio Annotation
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link mb-0">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/dataannotation`)
                                }
                              >
                                {`See more >`}
                              </span>
                            </p>

                            <p className="service-aiml mt-5">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/dataengineering`)
                                }
                                className="cr-pointer"
                              >
                                Data Engineering
                              </span>
                            </p>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/services/${`dataengineering`}/${`data-pipelines`}`}
                              >
                                Data Pipelines
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`dataengineering`}/${`data-transformations`}`}
                              >
                                Data Transformations
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`dataengineering`}/${`data-cleansing`}`}
                              >
                                Data Cleansing
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link mb-0">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/dataengineering`)
                                }
                              >
                                {`See more >`}
                              </span>
                            </p>

                            <p className="service-aiml mt-5">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/datamanagement`)
                                }
                                className="cr-pointer"
                              >
                                Data Management
                              </span>
                            </p>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/services/${`datamanagement`}/${`data-architecture-management`}`}
                              >
                                Data Architecture Management
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`datamanagement`}/${`data-development`}`}
                              >
                                Data Development
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`datamanagement`}/${`data-governance`}`}
                              >
                                Data Governance
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link mb-0">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/datamanagement`)
                                }
                              >
                                {`See more >`}
                              </span>
                            </p>
                          </div>
                          <div className="col-lg-4">
                            <p className="service-aiml mt-5">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/userexperinces`)
                                }
                                className="cr-pointer"
                              >
                                User Experience
                              </span>
                            </p>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/services/${`userexperinces`}/${`design-thinking`}`}
                              >
                                Design Thinking
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`userexperinces`}/${`user-research-and-analysis`}`}
                              >
                                User Research
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`userexperinces`}/${`experience-and-interaction-design`}`}
                              >
                                Interaction Design
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link ">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/userexperinces`)
                                }
                              >
                                {`See more >`}
                              </span>
                            </p>

                            <p className="service-aiml mt-5">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/cloudservices`)
                                }
                                className="cr-pointer"
                              >
                                Cloud Services
                              </span>
                            </p>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/services/${`cloudservices`}/${`cloud-advisory-services`}`}
                              >
                                Cloud Advisory Services
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`cloudservices`}/${`cloud-migration-services`}`}
                              >
                                Cloud Migration Services
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`cloudservices`}/${`cloud-integration`}`}
                              >
                                Cloud Integration
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link ">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/cloudservices`)
                                }
                              >
                                {`See more >`}
                              </span>
                            </p>

                            <p className="service-aiml mt-5">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/qualityassurance`)
                                }
                                className="cr-pointer"
                              >
                                Quality Assurance
                              </span>
                            </p>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/services/${`qualityassurance`}/${`functional-testing`}`}
                              >
                                Functional Testing
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`qualityassurance`}/${`compatibility-testing`}`}
                              >
                                Compatibility Testing
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`qualityassurance`}/${`performance-testing`}`}
                              >
                                Performance Testing
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link ">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/qualityassurance`)
                                }
                              >
                                {`See more >`}
                              </span>
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
                      onClick={closeNavpopup}
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
                      onClick={closeNavpopup}
                      activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                    >
                      AI / ML
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/datamanagement`}
                      onClick={closeNavpopup}
                    >
                      Data Management
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/advancedanalytics`}
                      onClick={closeNavpopup}
                    >
                      Advanced Analytics
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/dataengineering`}
                      onClick={closeNavpopup}
                    >
                      Data Engineering
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/platformengineering`}
                      onClick={closeNavpopup}
                    >
                      Platform Engineering
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/userexperinces`}
                      onClick={closeNavpopup}
                    >
                      User Experience
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/cloudservices`}
                      onClick={closeNavpopup}
                    >
                      Cloud
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/qualityassurance`}
                      onClick={closeNavpopup}
                    >
                      Quality Assurance
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/strategyconsulting`}
                      onClick={closeNavpopup}
                    >
                      Consulting
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/dataannotation`}
                      onClick={closeNavpopup}
                    >
                      Data Annotation
                    </NavLink>
                    {/* <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/intelligent-document-processing`}
                      onClick={closeNavpopup}
                    >
                     Intelligent Document Processing
                    </NavLink> */}
                                     </div>
                </div>

                {/* INDUSTRIES DROPDOWN SECTION */}

                {/* FOR SMALLER DEVICES */}

                <div className="service-dropdown-menu " style={navStyle}>
                  <NavLink
                    to="/casestudies"
                    onClick={() => (window.location.href = "/casestudies")}
                    style={navStyle}
                    className={color === "app" ? "text-black" : "text-white"}
                  >
                    Case Studies
                  </NavLink>
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
                      to="/casestudies"
                      style={navStyle}
                      onClick={closeNavpopup}
                      activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                    >
                      Case Studies
                    </NavLink>
                  </div>
                </div>
                <div className="service-dropdown-menu " style={navStyle}>
                  <NavLink
                    to="/Careers"
                    onClick={() => (window.location.href = "/Careers")}
                    style={navStyle}
                    className={color === "app" ? "text-black" : "text-white"}
                  >
                    Careers
                  </NavLink>
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
                      to="/careers"
                      style={navStyle}
                      onClick={closeNavpopup}
                      activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                    >
                      Careers
                    </NavLink>
                  </div>
                </div>

                <div
                  className="service-dropdown-menu"
                  onMouseOver={() => showDropdown("insights")}
                  onMouseOut={() => hideDropdown("insights")}
                  style={navStyle}
                >
                  <NavLink
                    to="/blogs"
                    onClick={() => (window.location.href = "/blogs")}
                    style={navStyle}
                    className={color === "app" ? "text-black" : "text-white"}
                  >
                    Insights
                  </NavLink>
                  <div className="arrow-up-insights hide"></div>
                  <div
                    className="dropdown-content-blog"
                    style={{ width: "95%", top: "40px" }}
                    onClick={() => hideDropdown("insights")}
                  >
                    <div className="row">
                      <div className="col-lg-3 bg-nav-white pt-5">
                        <h1 className="fs-13 fw-bold-400 text-new">
                          What's New
                        </h1>
                        {/* <a className="fs-13 fw-bold-500 text-underline text-black cr-pointer"
                        href="/services/intelligent-document-processing">
                          INTELLIGENT DOCUMENT PROCESSING
                        </a>
                        <p className="fs-13 fw-bold-400 text-digital">
                          Extract and structure data from complex documents automatically
                        </p>
                        <hr className="hr-line" /> */}
                        <h1 className="fs-13 fw-bold-500 text-underline text-black">
                          AI IN RETAIL INDUSTRY
                        </h1>
                        <p className="fs-13 fw-bold-400 text-digital">
                          AI can be used to process and analyze vast amounts of
                          data to identify patterns and insights that humans
                          would struggle to recognize. Learn more in our blogs
                          section!
                        </p>
                      </div>
                      <div className="col-lg-9 bg-dropdown ">
                        <div className="row">
                          <div className="col-lg-4">
                            <p className="service-aiml mt-5">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/blogs`)
                                }
                                className="cr-pointer"
                              >
                                Blog
                              </span>
                            </p>
                            <p className="fs-13 fw-bold-400 text-digital mt-2">
                              Seven Significant ways Artificial Intelligence (AI
                              ) is Impacting the Retail Industry
                            </p>
                            <p className="sub-service-links dropdown-view-all-link ">
                              <span
                                onClick={(e) =>
                                  serviceTo(
                                    e,
                                    `/blogs/seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry`
                                  )
                                }
                              >
                                {`Read the full blog >`}
                              </span>
                            </p>
                            <p className="fs-13 fw-bold-400 text-digital mt-2">
                              AI for Retail - Discover how AI can revolutionize
                              the retail industry and help businesses increase
                              sales, improve customer experience, and optimize
                              operations.
                            </p>
                            <p className="sub-service-links dropdown-view-all-link ">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/blogs/AI-for-Retail-Discover-how-AI-can-revolutionize-the-retail-industry-and-help-businesses-increase-sales-improve-customer-experience-and-optimize-operations`)
                                }
                              >
                                {`Read the full blog >`}
                              </span>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link ">
                            <span
                                onClick={(e) =>
                                  serviceTo(e, `/blogs`)
                                }
                              >
                                {`see more >`}
                              </span>
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <p className="service-aiml mt-5">
                              <span
                                onClick={(e) =>
                                  serviceTo(
                                    e,
                                    `/webinars/reshaping-the-retail-industry-through-AI`
                                  )
                                }
                                className="cr-pointer"
                              >
                                Webinar
                              </span>
                            </p>
                            <p className="fs-13 fw-bold-400 text-digital mt-2">
                              Reshaping the Retail Industry through Advanced
                              Analytics and AI !
                            </p>
                            <p className="sub-service-links dropdown-view-all-link ">
                              <span
                                onClick={(e) =>
                                  serviceTo(
                                    e,
                                    `/webinars/reshaping-the-retail-industry-through-AI`
                                  )
                                }
                              >
                                {`Watch the webinar >`}
                              </span>
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
                    className="dropdown-toggle d-flex"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <NavLink
                      to="/blogs"
                      style={navStyle}
                      onClick={closeNavpopup}
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
                    {/* <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/intelligent-document-processing`}
                      onClick={closeNavpopup}
                    >
                     Intelligent Document Processing
                    </NavLink> */}
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/blogs`}
                      onClick={closeNavpopup}
                    >
                      Blogs
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      target={"_blank"}
                      onClick={closeNavpopup}
                      to={`/webinars/reshaping-the-retail-industry-through-AI`}
                    >
                      Webinars
                    </NavLink>
                  </div>
                </div>

                <NavLink
                  to="/contactus"
                  className="contactus-button mb-sm-3"
                  onClick={closeNavpopup}
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
