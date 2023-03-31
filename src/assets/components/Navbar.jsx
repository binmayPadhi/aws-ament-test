import React from "react";
import { NavLink } from "react-router-dom";
import amnetLogo from "../images/HomePage/amnetdigitalblack.png";
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
import amnetLogo1 from "../images/HomePage/ad-white.png";
import "../CSS/Navbar.css";
import { useEffect } from "react";
import Ribbon from "./Ribbon";
import { useState } from "react";

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
  const [showRibbon, setRibbon] = useState(true);

  const checkRibbon = (show) => {
    if (sessionStorage.getItem("ribbonClose") != null) {
      setRibbon(false);
    } else {
      setRibbon(true);
    }
  };

  return (
    <>
      {/* <!-- NAVIGATION BAR --> */}

      <div className="position-fixed" id="navbar">
        {sessionStorage.getItem("ribbonClose") !== false &&
        showRibbon === true ? (
          <Ribbon checkRibbon={checkRibbon} />
        ) : null}
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
                      props.navChange === "app" ? "text-black" : "text-white"
                    }
                    activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                  >
                    Services
                  </NavLink>
                  <div
                    className="dropdown-content"
                    onClick={() => hideDropdown("service")}
                  >
                    <div className="row nav-sub-menu">
                      <div className="column nav-first-column">
                        <div className="navFlex">
                          <img
                            src={AimlDropdownIcon}
                            className="img-fluid navIcon"
                            alt="icon"
                          />

                          <div className="col-10 service-dropdown-link">
                            <NavLink
                              to={`/${`aiml`}`}
                              activeStyle={{
                                color: "#19AF8F",
                                textDecoration: "none",
                              }}
                            >
                              AI / ML
                            </NavLink>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a href={`/${`aiml`}#statistical-analysis`}>
                                Statistical Analysis
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a href={`/${`aiml`}#visualizations`}>
                                Visualizations
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a href={`/${`aiml`}#anomaly-detection`}>
                                Anomaly Detection
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link dropdownd-ai-viewall-link">
                              <a href={`/${`aiml`}`}>{`View all ->`}</a>
                            </p>
                          </div>
                        </div>

                        <div className="navFlex">
                          <img
                            src={DataManagementDropdownIcon}
                            className="img-fluid navIcon"
                            alt="icon"
                          />

                          <div className="col-10 service-dropdown-link">
                            <NavLink
                              to={`/${`data-management`}`}
                              activeStyle={{
                                color: "#19AF8F",
                                textDecoration: "none",
                              }}
                            >
                              Data management
                            </NavLink>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/${`data-management`}#data-architecture-management`}
                              >
                                Data Architecture
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/${`data-management`}#data-development`}
                              >
                                Data Development
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a href={`/${`data-management`}#data-governance`}>
                                Data Governance
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link">
                              <a
                                href={`/${`data-management`}`}
                              >{`View all ->`}</a>
                            </p>
                          </div>
                        </div>

                        <div className="navFlex">
                          <img
                            src={AdvancedAnalyticsDropdownIcon}
                            className="img-fluid navIcon"
                            alt="icon"
                          />

                          <div className="col-10 service-dropdown-link">
                            <NavLink
                              to={`/${`advanced-analytics`}`}
                              activeStyle={{
                                color: "#19AF8F",
                                textDecoration: "none",
                              }}
                            >
                              Advanced Analytics
                            </NavLink>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/${`advanced-analytics`}#complex-event-processing`}
                              >
                                Complex Event Processing
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/${`advanced-analytics`}#deep-learning`}
                              >
                                Deep Learning
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/${`advanced-analytics`}#graph-analysis`}
                              >
                                Graph Analysis
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link">
                              <a
                                href={`/${`advanced-analytics`}`}
                              >{`View all ->`}</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="navFlex">
                          <img
                            src={DataEngineeringDropdownIcon}
                            className="img-fluid navIcon"
                            alt="icon"
                          />

                          <div className="col-10 service-dropdown-link">
                            <NavLink
                              to={`/${`data-engineering`}`}
                              activeStyle={{
                                color: "#19AF8F",
                                textDecoration: "none",
                              }}
                            >
                              Data Engineering
                            </NavLink>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a href={`/${`data-engineering`}#data-pipelines`}>
                                Data Pipelines
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/${`data-engineering`}#data-transformations`}
                              >
                                Data Transformations
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a href={`/${`data-engineering`}#data-cleansing`}>
                                Data Cleansing
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link">
                              <a
                                href={`/${`data-engineering`}`}
                              >{`View all ->`}</a>
                            </p>
                          </div>
                        </div>
                        <div className="navFlex">
                          <img
                            src={PlatformEngineeringDropdownIcon}
                            className="img-fluid navIcon"
                            alt="icon"
                          />

                          <div className="col-10 service-dropdown-link">
                            <NavLink
                              to={`/${`platform-engineering`}`}
                              activeStyle={{
                                color: "#19AF8F",
                                textDecoration: "none",
                              }}
                            >
                              Platform Engineering
                            </NavLink>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/${`platform-engineering`}#application-engineering`}
                              >
                                Application Engineering
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/${`platform-engineering`}#infrastructure`}
                              >
                                Infrastructure
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/${`platform-engineering`}#payment-gateways`}
                              >
                                Payment Gateways
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link">
                              <a
                                href={`/${`platform-engineering`}`}
                              >{`View all ->`}</a>
                            </p>
                          </div>
                        </div>
                        <div className="navFlex">
                          <img
                            src={UXDropdownIcon}
                            className="img-fluid navIcon"
                            alt="icon"
                          />

                          <div className="col-10 service-dropdown-link">
                            <NavLink
                              to={`/${`user-experience`}`}
                              activeStyle={{
                                color: "#19AF8F",
                                textDecoration: "none",
                              }}
                            >
                              User Experience
                            </NavLink>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a href={`/${`user-experience`}#design-thinking`}>
                                Design Thinking
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a href={`/${`user-experience`}#user-research`}>
                                User Research
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/${`user-experience`}#interaction-design`}
                              >
                                Interaction Design
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link">
                              <a
                                href={`/${`user-experience`}`}
                              >{`View all ->`}</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="navFlex">
                          <img
                            src={CloudDropdownIcon}
                            className="img-fluid navIcon"
                            alt="icon"
                          />

                          <div className="col-10 service-dropdown-link">
                            <NavLink
                              to={`/${`cloud`}`}
                              activeStyle={{
                                color: "#19AF8F",
                                textDecoration: "none",
                              }}
                            >
                              Cloud Services
                            </NavLink>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a href={`/${`cloud`}#cloud-advisory-services`}>
                                Cloud Advisory Services
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a href={`/${`cloud`}#cloud-migration-services`}>
                                Cloud Migration Services
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a href={`/${`cloud`}#cloud-integration`}>
                                Cloud Integration
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link">
                              <a href={`/${`cloud`}`}>{`View all ->`}</a>
                            </p>
                          </div>
                        </div>
                        <div className="navFlex">
                          <img
                            src={QADropdownIcon}
                            className="img-fluid navIcon"
                            alt="icon"
                          />

                          <div className="col-10 service-dropdown-link">
                            <NavLink
                              to={`/${`quality-assurance`}`}
                              activeStyle={{
                                color: "#19AF8F",
                                textDecoration: "none",
                              }}
                            >
                              Quality Assurance
                            </NavLink>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/${`quality-assurance`}#functional-testing`}
                              >
                                Functional Testing
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/${`quality-assurance`}#compatibility-testing`}
                              >
                                Compatibility Testing
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/${`quality-assurance`}#performance-testing`}
                              >
                                Performance Testing
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link">
                              <a
                                href={`/${`quality-assurance`}`}
                              >{`View all ->`}</a>
                            </p>
                          </div>
                        </div>
                        <div className="navFlex">
                          <img
                            src={ConsultingDropdownIcon}
                            className="img-fluid navIcon"
                            alt="icon"
                          />

                          <div className="col-10 service-dropdown-link">
                            <NavLink
                              to={`/${`consulting`}`}
                              activeStyle={{
                                color: "#19AF8F",
                                textDecoration: "none",
                              }}
                            >
                              Strategy & Consulting
                            </NavLink>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a href={`/${`consulting`}#data-strategy`}>
                                Data Strategy
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a href={`/${`consulting`}#ai-strategy`}>
                                AI Strategy
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/${`consulting`}#application-development`}
                              >
                                Application Development
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link">
                              <a href={`/${`consulting`}`}>{`View all ->`}</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="column extra-column">
                        <div className="navFlex">
                          <img
                            src={DataAnnotationDropdownIcon}
                            className="img-fluid navIcon"
                            alt="icon"
                          />

                          <div className="col-10 service-dropdown-link">
                            <NavLink
                              to={`/${`data-annotation`}`}
                              activeStyle={{
                                color: "#19AF8F",
                                textDecoration: "none",
                              }}
                            >
                              Data Annotation
                            </NavLink>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/${`data-annotation`}#image-annotation`}
                              >
                                Image Annotation
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/${`data-annotation`}#video-annotation`}
                              >
                                Video Annotation
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/${`data-annotation`}#audio-annotation`}
                              >
                                Audio Annotation
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link">
                              <a href={`/${`data-annotation`}`}>View All</a>
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
                      to={`/${`aiml`}`}
                      activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                    >
                      AI / ML
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/${`data-management`}`}
                    >
                      Data Management
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/${`advanced-analytics`}`}
                    >
                      Advanced Analytics
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/${`data-engineering`}`}
                    >
                      Data Engineering
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/${`platform-engineering`}`}
                    >
                      Platform Engineering
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/${`user-experience`}`}
                    >
                      User Experience
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/${`cloud`}`}
                    >
                      Cloud
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/${`quality-assurance`}`}
                    >
                      Quality Assurance
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/${`consulting`}`}
                    >
                      Consulting
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/${`data-annotation`}`}
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
                  className="service-dropdown-menu"
                  onMouseOver={() => showDropdown("insights")}
                  onMouseOut={() => hideDropdown("insights")}
                  style={navStyle}
                  activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                >
                  <NavLink
                    to="/blog"
                    onClick={() => (window.location.href = "/blog")}
                    style={navStyle}
                    className={
                      props.navChange === "app" ? "text-black" : "text-white"
                    }
                    activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
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
