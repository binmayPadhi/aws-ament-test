import React from "react";
import { NavLink, Link } from "react-router-dom";
import amnetLogo from "../images/AD-Logo.png";
import AimlDropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-ai-ml.png";
import DataManagementDropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-data-mgmt.png";
import AdvancedAnalyticsDropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-advanced-analytics.png";
import DataEngineeringDropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-data-engg.png";
import PlatformEngineeringDropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-platform-engg.png";
import UXDropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-ux.png";
import cloudservicesDropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-cloud.png";
import QADropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-qa.png";
import ConsultingDropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-strat-consult.png";
import DataAnnotationDropdownIcon from "../images/Service-Page/service-dropdown-icons/services-dd-data-annotation.png";
import "../CSS/Navbar.css";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    const header = new Headers();
    header.append("X-Content-Type-Options", "nosniff");
    header.append("X-Frame-Options", "Deny");
  });
  const navStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.5rem",
    // marginRight: "25px",
    fontFamily: `'Poppins', sans-serif`,
    marginTop: "5px",
    padding: "20px 15px",
    height: "73px",
  };

  const navStyle1 = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.5rem",
    // marginRight: "25px",
    fontFamily: `'Poppins', sans-serif`,
    marginTop: "5px",
    padding: "20px 15px",
    height: "73px",
    backgroundColor: "transparent",
  };

  const serviceDropdown = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.5rem",
    // marginRight: "25px",
    fontFamily: `'Poppins', sans-serif`,
    marginTop: "5px",
    // padding: "10px 15px",
  };

  const contactUsButtonStyle = {
    display: "inline-block",
    color: "black",
    backgroundColor: "white",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "1.5rem",
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
  return (
    <>
      {/* <!-- NAVIGATION BAR --> */}

      <div className="navigation-bar" id="navbar">
        <nav className="navbar navbar-expand-lg ">
          <a href="/" className="navbar-brand active pb-2">
            <img className="img-fluid logo" src={amnetLogo} alt="logo" />
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
                onClick={() => (window.location.href = "/aboutus")}
                style={navStyle}
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
                  onClick={() => (window.location.href = "/services")}
                  style={serviceDropdown}
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
                            to={`/services/${`aiml`}`}
                            activeStyle={{
                              color: "#19AF8F",
                              textDecoration: "none",
                            }}
                          >
                            AI & ML
                          </NavLink>
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
                            <a href={`/services/${`aiml`}/${`visualizations`}`}>
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
                          <p className="sub-service-links dropdown-view-all-link">
                            <a href={`/services/${`aiml`}`}>{`View all ->`}</a>
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
                            to={`/services/${`datamanagement`}`}
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
                          <p className="sub-service-links dropdown-view-all-link">
                            <a
                              href={`/services/${`datamanagement`}`}
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
                            to={`/services/${`advancedanalytics`}`}
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
                          <p className="sub-service-links dropdown-view-all-link">
                            <a
                              href={`/services/${`advancedanalytics`}`}
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
                            to={`/services/${`dataengineering`}`}
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
                          <p className="sub-service-links dropdown-view-all-link">
                            <a
                              href={`/services/${`dataengineering`}`}
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
                            to={`/services/${`platformengineering`}`}
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
                              href={`/services/${`platformengineering`}/${`application-engineering`}`}
                            >
                              Application Engineering
                            </a>
                          </p>
                          <p className="sub-service-links">
                            <a
                              href={`/services/${`platformengineering`}/${`infrastructure`}`}
                            >
                              Infrastructure
                            </a>
                          </p>
                          <p className="sub-service-links">
                            <a
                              href={`/services/${`platformengineering`}/${`payment-gateways`}`}
                            >
                              Payment Gateways
                            </a>
                          </p>
                          <p className="sub-service-links dropdown-view-all-link">
                            <a
                              href={`/services/${`platformengineering`}`}
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
                            to={`/services/${`userexperinces`}`}
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
                          <p className="sub-service-links dropdown-view-all-link">
                            <a
                              href={`/services/${`userexperinces`}`}
                            >{`View all ->`}</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="navFlex">
                        <img
                          src={cloudservicesDropdownIcon}
                          className="img-fluid navIcon"
                          alt="icon"
                        />
                        <div className="col-10 service-dropdown-link">
                          <NavLink
                            to={`/services/${`cloudservices`}`}
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
                          <p className="sub-service-links dropdown-view-all-link">
                            <a
                              href={`/services/${`cloudservices`}`}
                            >{`View all ->`}</a>
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
                            to={`/services/${`qualityassurance`}`}
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
                          <p className="sub-service-links dropdown-view-all-link">
                            <a
                              href={`/services/${`qualityassurance`}`}
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
                            to={`/services/${`strategyconsulting`}`}
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
                          <p className="sub-service-links dropdown-view-all-link">
                            <a
                              href={`/services/${`strategyconsulting`}`}
                            >{`View all ->`}</a>
                            .
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
                            to={`/services/${`dataannotation`}`}
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
                          <p className="sub-service-links dropdown-view-all-link">
                            <a
                              href={`/services/${`dataannotation`}`}
                            >{`View all ->`}</a>
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
                    AI & ML
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
                activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
              >
                Case Studies
              </NavLink>
              {/* </div> */}

              {/* <div style={{padding:"15px 0px 0px 0px"}}> */}
              <NavLink
                to="/careers"
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
                  to="/blog-seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry"
                  onClick={() =>
                    (window.location.href =
                      "/blog-seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry")
                  }
                  style={navStyle}
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
                              to={`/blog-seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry`}
                              activeStyle={{
                                color: "#19AF8F",
                                textDecoration: "none",
                              }}
                            >
                              Blogs
                            </NavLink>
                            <NavLink
                              target={"_blank"}
                              to={`/webinar-reshaping-the-retail-industry-through-AI`}
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
                    to="/blog-seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry"
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
                    to={`/blog-seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry`}
                  >
                    Blogs
                  </NavLink>
                  <NavLink
                    className="dropdown-item sub-service-dropdown-item"
                    target={"_blank"}
                    to={`/webinar-reshaping-the-retail-industry-through-AI`}
                  >
                    Webinars
                  </NavLink>
                </div>
              </div>

              <NavLink
                to="/contactus"
                onClick={() => (window.location.href = "/contactus")}
                className="contactus-button"
                activeStyle={{ color: "black", textDecoration: "none" }}
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
