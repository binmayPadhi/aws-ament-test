import React, { Suspense, useEffect, useState } from "react";
import AboutDetails from "../components/Homepage/AboutDetails";
import OurServicesSection from "../components/Homepage/OurServicesSection";
import OurPartner from "../components/Homepage/OurPartner";
import MediaQuery from "react-responsive";
import Aboutdata from "../Data/AboutUs-Data/About";
import vector from "../images/HomePage/horizontal-line.png";
import OrganizationServices from "./Homepage/OrganizationServices";
import { useNavigate } from "react-router-dom";
import AboutUsBG from "../images/About-Us-Page/amnet-about-us-bg.jpg";

function Test() {
  const [cookieName, setCookievalue] = useState("");
  useEffect(() => {
    let checkCookie = getCookie("username");
    setCookievalue(checkCookie);
    const consentPopup = document.getElementById("consent-popup");
    const acceptBtn = document.getElementById("accept");
    const declineBtn = document.getElementById("decline");
    if (checkCookie != "amnetdigital") {
      const acceptFn = (event) => {
        setCookie("username", "amnetdigital", 90);
        if (consentPopup.classList.contains("block") === true) {
          consentPopup.classList.remove("block");
        }
        consentPopup.classList.add("hidden");
      };
      const declineFn = (event) => {
        setCookie("username", "amnetdigital", 1);
        if (consentPopup.classList.contains("block") === true) {
          consentPopup.classList.remove("block");
        }
        consentPopup.classList.add("hidden");
      };
      acceptBtn.addEventListener("click", acceptFn);
      declineBtn.addEventListener("click", declineFn);

      consentPopup.classList.remove("hidden");
      consentPopup.classList.add("block");
    } else {
      consentPopup.classList.remove("block");
      consentPopup.classList.add("hidden");
    }
  }, []);

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return " ";
  }

  const ClientSay = React.lazy(() =>
    import("../components/Homepage/ClientSay")
  );
  const CaseStudiesSection = React.lazy(() =>
    import("../components/Homepage/CaseStudiesSection")
  );
  const IndusrtySection = React.lazy(() =>
    import("../components/Homepage/IndustrySection")
  );

  const navigate = useNavigate();
  const connectTo = () => {
    navigate("/contactus");
  };

  return (
    <>
      <MediaQuery minWidth={1025}>
        <div className="h-100 position-relative">
          <video
            className="homepage_video"
            id="myVideo"
            autoPlay={true}
            muted
            loop
            playsInline
          >
            <source
              src="https://amnet-digital-website.s3.amazonaws.com/FinalVersion.mp4"
              type="video/mp4"
            />
          </video>
          <div class="card-overlay"></div>
          <div className="w-90 mx-auto">
            <div className="new-subService-AIML-intro-caption top-25 position-absolute">
              <h2
                className="fs-60 text-white fw-bold-700 w-50"
                data-text="Reimagine & Redefine"
              >
                Your Trusted Partner In Making Data Driven Decisions
              </h2>
              <div className="mt-2 fs-20 fw-bold-400 px-2 w-50">
                We are a Data Analytics & AI solutions company that helps
                businesses make data-driven decisions
              </div>
              <div
                onClick={connectTo}
                className="mt-4 fw-bold-700 fs-14 px-4 py-3 text-white bg-grey d-table rounded-1 cr-pointer"
              >
                Let's connect
              </div>
            </div>
          </div>
          <div className="fs-35 text-white position-absolute bottom-1 w-60">
            <div
              className=" fs-15 text-white bg-marron"
              style={{ height: "auto" }}
            >
              <div className="row pl-2">
                {Aboutdata.homemainimg.map((list) => {
                  return (
                    <>
                      <div
                        className="col-lg-4 col-md-4 col-sm-12 col-xs-12  text-left"
                        key={list.id}
                      >
                        <table className="border-0">
                          <tr>
                            <td className="border-0">
                              <p className="fw-bold-500 text-white fs-24 lh-24 ml-1 pt-5 pb-0 mb-0 pr-4">
                                {list.subHeading}
                              </p>
                              <p className="fw-bold-300 text-white fs-14 ml-1 pr-3 pt-3 pb-5">
                                {list.description}
                              </p>
                            </td>
                            <td className="border-0">
                              {list.id != 3 ? (
                                <img src={vector} width="2" height="75" />
                              ) : null}
                            </td>
                          </tr>
                        </table>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={901} maxWidth={1024}>
        <div className="h-100 position-relative">
          <video
            className="homepage_video"
            id="myVideo"
            autoPlay={true}
            muted
            loop
            playsInline
          >
            <source
              src="https://amnet-digital-website.s3.amazonaws.com/FinalVersion.mp4"
              type="video/mp4"
            />
          </video>
          <div class="card-overlay"></div>
          <div className="w-90 mx-auto">
            <div className="new-subService-AIML-intro-caption top-25 position-absolute">
              <h2
                className="fs-60 text-white fw-bold-700 w-50"
                data-text="Reimagine & Redefine"
              >
                Your Trusted Partner In Making Data Driven Decisions
              </h2>
              <div className="mt-2 fs-20 fw-bold-400 px-2 w-50">
                We are a Data Analytics & AI solutions company that helps
                businesses make data-driven decisions
              </div>
              <div
                onClick={connectTo}
                className="mt-4 fw-bold-700 fs-14 px-4 py-3 text-white bg-grey d-table rounded-1 cr-pointer"
              >
                Let's connect
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={761} maxWidth={900}>
        <div className="sub-service-intro">
          <div className="wrapper_video">
            <video
              className="video position-relative"
              id="myVideo"
              autoPlay={true}
              muted
              loop
              playsInline
            >
              <source
                src="https://amnet-digital-website.s3.amazonaws.com/FinalVersion.mp4"
                type="video/mp4"
              />
            </video>
            <div class="card-overlay"></div>
            <div className="w-90 mx-auto">
              <div className="position-absolute w-100 top-40">
                <h2
                  className="fs-35 text-white fw-bold-700 w-75"
                  data-text="Reimagine & Redefine"
                >
                  Your Trusted Partner In Making Data Driven Decisions
                </h2>
                <div className="mt-2 fs-20 fw-bold-400 px-2 w-75">
                  We are a Data Analytics & AI solutions company that helps
                  businesses make data-driven decisions
                </div>
                <div
                  onClick={connectTo}
                  className="mt-4 fw-bold-700 fs-14 px-4 py-3 text-white bg-grey d-table rounded-1 cr-pointer"
                >
                  Let's connect
                </div>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={200} maxWidth={760}>
        <div className="sub-service-intro">
          <div className="wrapper_video">
            <video
              className="video position-relative"
              id="myVideo"
              autoPlay={true}
              muted
              loop
              playsInline
            >
              <source
                src="https://amnet-digital-website.s3.amazonaws.com/FinalVersion.mp4"
                type="video/mp4"
              />
            </video>
            <div class="card-overlay"></div>
            <div className="w-90 mx-auto">
              <div className="position-absolute w-100 top-20">
                <h2
                  className="fs-35 text-white fw-bold-700 w-75"
                  data-text="Reimagine & Redefine"
                >
                  Your Trusted Partner In Making Data Driven Decisions
                </h2>
                <div className="mt-2 fs-20 fw-bold-400 px-2 w-75">
                  We are a Data Analytics & AI solutions company that helps
                  businesses make data-driven decisions
                </div>
                <div
                  onClick={connectTo}
                  className="mt-4 fw-bold-700 fs-14 px-4 py-3 text-white bg-grey d-table rounded-1 cr-pointer"
                >
                  Let's connect
                </div>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>

      <Suspense fallback={<div>Loading...</div>}>
        <h1 className="section-title industry-section-row text-center mb-3">
          Drive Organizational Change
        </h1>
        <div className="mt-5 mb-5">
          <OrganizationServices />
        </div>
      </Suspense>

      {/* NEW HOMEPAGE SOLUTION SERVICE SECTION */}
      <AboutDetails />

      {/* NEW HOMEPAGE INDUSTRIES SECTION */}
      <Suspense fallback={<div>Loading...</div>}>
        <IndusrtySection />
      </Suspense>

      {/* NEW HOMEPAGE OUR SERVICE SECTION */}
      <div className="bg">
        <div className="w-90 mx-auto industry-section-row pb-5">
          <OurServicesSection />
        </div>
      </div>

      {/* NEW HOMEPAGE CASESTUDIES SECTION */}
      <Suspense fallback={<div>Loading...</div>}>
        <CaseStudiesSection />
      </Suspense>

      {/* NEW HOMEPAGE OUR PARTNER SECTION */}
      <div className="new-our-partner">
        <h1 className="section-title mt-3 text-center">
          RECOGNITIONS & PARTNERSHIPS
        </h1>
        <OurPartner />
      </div>

      {/* NEW HOMEPAGE CLIENT SAY */}
      <Suspense fallback={<div>Loading...</div>}>
        <ClientSay />
      </Suspense>

      {/* NEW HOMEPAGE CAREER SECTION */}

      <div
        className="new-career-section"
        style={{
          width: "auto",
          height: "auto",
          backgroundColor: "#19AF8F",
          padding: "30px",
        }}
      >
        <div className="new-career-section w-90 mx-auto">
          <div className="career-section-row row g-0">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 career-caption">
              <h5>WORK WITH US</h5>
              <h2>Let's Grow Together</h2>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 career-details">
              <p>
                We are on a mission to solve complex problems and provide
                solutions that make a difference, Come work with us.
              </p>

              <a href="/contactus">
                <button
                  type="button"
                  className="btn btn-default contact-us-button"
                >
                  Contact Us
                </button>
              </a>
              <a href="/careers">
                <button
                  type="button"
                  className="btn btn-default careers-button"
                >
                  Careers
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {cookieName != "amnetdigital" ? (
        <div id="consent-popup" className="cookies-banner">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <p>
                This website uses cookies. We use cookies to optimize web
                functionality, collect website analytics and traffic data, and
                to provide a more personalized user experience.
                <a className="cookies-readmore-link" href="/cookiespolicy">
                  Read more...
                </a>
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 text-center">
              <button
                className="btn btn-default cookies-decline-btn"
                id="decline"
              >
                Decline
              </button>
              <button
                className="btn btn-default cookies-accept-btn"
                id="accept"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      ) : (
        " "
      )}
    </>
  );
}

export default Test;
