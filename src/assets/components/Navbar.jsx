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
import gen from "../images/services-images/GenAI/Gen_Icon.png"

function Navbar(props) {
    const url = window.location.pathname;
  const [color, setNavcolor] = useState("homepage");
  const changebackgroundcolor = () => {
    if (
      url === "/legal-resources" ||
      url ===
        "/blogs/seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry" ||
        url === 
        "/blog-seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry" ||
      url === "/cookies-policy" ||
      url === "/privacy-policy" ||
      url === "/terms-of-use" ||
      url === "/blogs/AI-for-Retail-Discover-how-AI-can-revolutionize-the-retail-industry-and-help-businesses-increase-sales-improve-customer-experience-and-optimize-operations" ||
      url === "/blogs/What-is-AIOps-and-explore-how-it-is-revolutionizing-the-retail-industry-by-solving-complex-challenges" ||
      url === "/blogs/Why-do-we-need-AIOps-and-where-does-it-fit-with-the-modern-IT-environment" ||
      url === "/blogs/how-to-scale-ai-in-retail-industry-with-data-management" ||
      url === "/blogs/6-steps-to-include-in-your-data-migration-journey" ||
      url === "/blogs/the-real-value-ai-can-bring-to-retail-industry" ||
      url === "/blogs/medical-image-video-data-annotation-services" ||
      url === "/blogs/supply-chain-planning-decisions-with-actionable-demand-forecasting-insights" ||
      url === "/blogs/10-ways-how-generative-ai-is-impacting-retail-organizations" ||
      url === "/products" ||
      url === "/blogs/5-ways-AI-can-enhance-and-optimize-your-inventory-management" ||
      url === "/site-map" ||
      url === "/leadership" || 
      url === "/blogs/how-our-next-Gen-AI-voice-bot-is-transforming-conversational-AI" ||
      url === "/press-releases/amnet-digital-partners-with-intel"
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
    } else if (val == "insights") {
      document
        .getElementsByClassName("arrow-up-insights")[0]
        .classList.remove("hide");
      document
        .getElementsByClassName("arrow-up-insights")[0]
        .classList.add("show");
      document.getElementsByClassName(
        "dropdown-content-blog"
      )[0].style.display = "block";
    } else {
      document
      .getElementsByClassName("arrow-up-products")[0]
      .classList.remove("hide");
    document
      .getElementsByClassName("arrow-up-products")[0]
      .classList.add("show");
    document.getElementsByClassName(
      "dropdown-content-products"
    )[0].style.display = "block";
    }
  }
  function hideDropdown(val) {
    if (val === "service") {
      document.getElementsByClassName("arrow-up")[0].classList.remove("show");
      document.getElementsByClassName("arrow-up")[0].classList.add("hide");
      document.getElementsByClassName("dropdown-content")[0].style.display =
        "none";
    } else if (val == "insights") {
      document
        .getElementsByClassName("arrow-up-insights")[0]
        .classList.remove("show");
      document
        .getElementsByClassName("arrow-up-insights")[0]
        .classList.add("hide");
      document.getElementsByClassName(
        "dropdown-content-blog"
      )[0].style.display = "none";
    } else {
      document
        .getElementsByClassName("arrow-up-products")[0]
        .classList.remove("show");
      document
        .getElementsByClassName("arrow-up-products")[0]
        .classList.add("hide");
      document.getElementsByClassName(
        "dropdown-content-products"
      )[0].style.display = "none";
    }
    console.log(val,"************");
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
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-R4T4JBBDGV");
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
          <nav className="navbar navbar-expand-lg">
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
              aria-controls="navbarNav"
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
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
                        <div className="d-flex border-bottom-black pb-4">
                          <img src={gen} className="w-20" loading="lazy" />
                          <div className="ml-3">
                            <a href="/generative-ai-solutions" className="fs-13 fw-bold-500 text-underline text-black">
                              Generative AI
                            </a>
                            <p className="fs-13 fw-bold-400 text-digital ">
                             Empowering businesses with intelligent automation
                            </p>
                          </div>
                        </div>
                      
                        <a  href={`/services/${`data-engineering`}/${`data-transformations`}`}
                         className="fs-13 fw-bold-500 text-underline text-black">
                          DIGITAL TRANSFORMATION
                        </a>
                        <p className="fs-13 fw-bold-400 text-digital border-bottom-black pb-4">
                          Digital Transformation through proprietary
                          accelerators    
                        </p>
                        <h1 className="fs-13 fw-bold-500 text-underline mt-4">
                          SERVICES OVERVIEW
                        </h1>
                        <p className="fs-13 fw-bold-400 text-digital border-bottom-black pb-4">
                          We offer a comprehensive portfolio of services to
                          deliver solutions that make a difference!
                        </p>
                        <h1 className="fs-13 fw-bold-400 text-new mt-4">
                          Amnet Insight{" "}
                        </h1>
                        <div className="d-flex mt-4">
                          <img src={group} className="w-20" loading="lazy" />
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
                          <p className="service-aiml mt-5">
                            <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/ai-ml`)
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
                                href={`/services/${`ai-ml`}/${`generative-ai`}`}
                              >
                                Generative AI
                              </a>
                            </p>
                            <p
                              className="sub-service-links"
                              style={{ marginTop: "5px" }}
                            >
                              <a
                                href={`/services/${`ai-ml`}/${`statistical-analysis`}`}
                              >
                                Statistical Analysis
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`ai-ml`}/${`visualizations`}`}
                              >
                                Visualizations
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link mb-0">
                              <span
                                onClick={(e) => serviceTo(e, `/services/ai-ml`)}
                              >
                                {`See more >`}
                              </span>
                            </p>

                            <p className="service-aiml mt-5">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/advanced-analytics`)
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
                                href={`/services/${`advanced-analytics`}/${`complex-event-processing`}`}
                              >
                                Complex Event Processing
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`advanced-analytics`}/${`deep-learning`}`}
                              >
                                Deep Learning
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`advanced-analytics`}/${`graph-analysis`}`}
                              >
                                Graph Analysis
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link mb-0">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/advanced-analytics`)
                                }
                              >
                                {`See more >`}
                              </span>
                            </p>
                            <p className="service-aiml mt-5">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/strategy-consulting`)
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
                                href={`/services/${`strategy-consulting`}/${`data-strategy`}`}
                              >
                                Data Strategy
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`strategy-consulting`}/${`ai-strategy`}`}
                              >
                                AI Strategy
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`strategy-consulting`}/${`application-development`}`}
                              >
                                Application Development
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link mb-0">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/strategy-consulting`)
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
                                  serviceTo(e, `/services/data-annotation`)
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
                                href={`/services/${`data-annotation`}/${`image-annotation`}`}
                              >
                                Image Annotation
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`data-annotation`}/${`video-annotation`}`}
                              >
                                Video Annotation
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`data-annotation`}/${`audio-annotation`}`}
                              >
                                Audio Annotation
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link mb-0">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/data-annotation`)
                                }
                              >
                                {`See more >`}
                              </span>
                            </p>

                            <p className="service-aiml mt-5">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/data-engineering`)
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
                                href={`/services/${`data-engineering`}/${`data-pipelines`}`}
                              >
                                Data Pipelines
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`data-engineering`}/${`data-transformations`}`}
                              >
                                Data Transformations
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`data-engineering`}/${`data-cleansing`}`}
                              >
                                Data Cleansing
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link mb-0">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/data-engineering`)
                                }
                              >
                                {`See more >`}
                              </span>
                            </p>

                            <p className="service-aiml mt-5">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/data-management`)
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
                                href={`/services/${`data-management`}/${`data-architecture-management`}`}
                              >
                                Data Architecture Management
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`data-management`}/${`data-development`}`}
                              >
                                Data Development
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`data-management`}/${`data-governance`}`}
                              >
                                Data Governance
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link mb-0">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/data-management`)
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
                                  serviceTo(e, `/services/user-experience`)
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
                                href={`/services/${`user-experience`}/${`design-thinking`}`}
                              >
                                Design Thinking
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`user-experience`}/${`user-research-and-analysis`}`}
                              >
                                User Research
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`user-experience`}/${`experience-and-interaction-design`}`}
                              >
                                Interaction Design
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link ">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/user-experience`)
                                }
                              >
                                {`See more >`}
                              </span>
                            </p>

                            <p className="service-aiml mt-5">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/cloud-services`)
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
                                href={`/services/${`cloud-services`}/${`cloud-advisory-services`}`}
                              >
                                Cloud Advisory Services
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`cloud-services`}/${`cloud-migration-services`}`}
                              >
                                Cloud Migration Services
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`cloud-services`}/${`cloud-integration`}`}
                              >
                                Cloud Integration
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link ">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/cloud-services`)
                                }
                              >
                                {`See more >`}
                              </span>
                            </p>

                            <p className="service-aiml mt-5">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/quality-assurance`)
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
                                href={`/services/${`quality-assurance`}/${`functional-testing`}`}
                              >
                                Functional Testing
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`quality-assurance`}/${`compatibility-testing`}`}
                              >
                                Compatibility Testing
                              </a>
                            </p>
                            <p className="sub-service-links">
                              <a
                                href={`/services/${`quality-assurance`}/${`performance-testing`}`}
                              >
                                Performance Testing
                              </a>
                            </p>
                            <p className="sub-service-links dropdown-view-all-link ">
                              <span
                                onClick={(e) =>
                                  serviceTo(e, `/services/quality-assurance`)
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
                      to={`/services/ai-ml`}
                      onClick={closeNavpopup}
                      activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                    >
                      AI / ML
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/data-management`}
                      onClick={closeNavpopup}
                    >
                      Data Management
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/advanced-analytics`}
                      onClick={closeNavpopup}
                    >
                      Advanced Analytics
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/data-engineering`}
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
                      to={`/services/user-experience`}
                      onClick={closeNavpopup}
                    >
                      User Experience
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/cloud-services`}
                      onClick={closeNavpopup}
                    >
                      Cloud
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/quality-assurance`}
                      onClick={closeNavpopup}
                    >
                      Quality Assurance
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/strategy-consulting`}
                      onClick={closeNavpopup}
                    >
                      Consulting
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      to={`/services/data-annotation`}
                      onClick={closeNavpopup}
                    >
                      Data Annotation
                    </NavLink>
                  </div>
                </div>


                {/* PRODUCTS DROPDOWN */}
                <div
                  className="service-dropdown-menu"
                  onMouseOver={() => showDropdown("products")}
                  onMouseOut={() => hideDropdown("products")}
                  style={navStyle}
                >
                  <NavLink
                    to="/products"
                    onClick={() => (window.location.href = "/products")}
                    style={navStyle}
                    className={color === "app" ? "text-black" : "text-white"}
                  >
                    Products
                  </NavLink>
                  <div className="arrow-up-products hide"></div>
                  <div
                    className="dropdown-content-products"
                    style={{ width: "95%", top: "40px" }}
                    onClick={() => hideDropdown("products")}
                  >
                    <div className="row">
                      <div className="col-lg-3 bg-nav-white pt-5">
                        <h1 className="fs-13 fw-bold-400 text-new">
                          What's New
                        </h1>
                        <h1 className="fs-13 fw-bold-500 text-underline text-black">
                        Products & Accelerators
                        </h1>
                        <p className="fs-13 fw-bold-400 text-digital">
                        Presenting cutting-edge products that accelerate your digital & data transformation journey!
                        </p>
                      </div>
                      <div className="col-lg-9 bg-dropdown ">
                        <div className="row pb-4">
                          <div className="col-lg-4">
                            <p className="service-aiml mt-5">
                              <span                            
                              >
                              Swift Insights
                              </span>
                            </p>
                            <p className="fs-13 fw-bold-400 text-digital mt-2">
                            Data Ingestion to visualisation powered by AI
                            </p>
                            <a className="sub-service-links dropdown-view-all-link mb-5" href="/products" >
                              <span                            
                              >
                                {`See more >`}
                              </span>
                            </a>
                            <p className="fs-13 fw-bold-400 text-digital mt-5 mb-5">
                              
                            </p>                           
                            <a className="view-style mt-5 mb-5" href="/products">
                            <span                               
                              >
                                {`View All Products >`}
                              </span>
                            </a>
                        </div>
                        <div className="col-lg-4">
                            <p className="service-aiml mt-5">
                              <span
                                
                              >
                              Swift Data
                              </span>
                            </p>
                            <p className="fs-13 fw-bold-400 text-digital mt-2">
                            Cloud-first low-code data migration accelerator
                            </p>
                            <a className="sub-service-links dropdown-view-all-link " href="/products" >
                              <span
                               
                              >
                                {`See more >`}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 {/* Products mobile dropdown */}
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
                      to={"/products"}
                       onClick={() => (window.location.href = "/products")}
                      style={navStyle}
                     
                      activeStyle={{ color: "#19AF8F", textDecoration: "none" }}
                    >
                      Products
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
                      to={"/products"}
                      target={""}
                      onClick={closeNavpopup}
                    >
                      Swift Insights
                    </NavLink>
                    <NavLink
                      className="dropdown-item sub-service-dropdown-item"
                      target={""}
                      onClick={closeNavpopup}
                      to={`/products`}
                    >
                      Swift Data
                    </NavLink>
                  </div>
                </div>

                {/* INDUSTRIES DROPDOWN SECTION */}

                {/* FOR SMALLER DEVICES */}

                <div className="service-dropdown-menu " style={navStyle}>
                  <NavLink
                    to="/case-studies"
                    onClick={() => (window.location.href = "/case-studies")}
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
                      to="/case-studies"
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
                    to="/careers"
                    onClick={() => (window.location.href = "/careers")}
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
                        <h1 className="fs-13 fw-bold-500 text-underline text-black">
                          AI in Retail Industry
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
                              the retail industry 
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
                                {`See more >`}
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
                          <div className="col-lg-4">
                            <p className="service-aiml mt-5">
                              <span
                                onClick={(e) =>
                                  serviceTo(
                                    e,
                                    `press-releases`
                                  )
                                }
                                className="cr-pointer"
                              >
                                Press Release
                              </span>
                            </p>
                            <p className="fs-13 fw-bold-400 text-digital mt-2">
                            Amnet Digital named the "Best AI & Data Analytics Company Of The Year 2023" by Business Connect
                            </p>
                            <p className="sub-service-links dropdown-view-all-link ">
                              <span
                                onClick={(e) =>
                                  serviceTo(
                                    e,
                                    `press-releases`
                                  )
                                }
                              >
                                {`Read the Press Release >`}
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
                  to="/contact-us"
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
