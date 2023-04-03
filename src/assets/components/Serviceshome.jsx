import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import ServiceBG from "../images/Service-Page/service-main-bg.png";
import borderBg from "../images/Service-Page/border.png";
import thinborder from "../images/Service-Page/thin-border.png";
import Exploreservices from "./SubServices/Exploreservices";
import Driveservices from "./SubServices/Driveservices";
import Whyamnet from "./Homepage/Whyamnet";
import OurPartner from "./Homepage/OurPartner";
import Resourceweb from "./SubServices/Resourceweb";
import Case from "./SubServices/Caseservice";
import servicejson from "../Data/Services-Data/Homeservices";
import { useState } from "react";
import Navbar from "./Navbar";

const Serviceshome = () => {
  const [selectedServices, setSelectedservice] = useState(servicejson[1].name);
  const [selectedServicesobj, setSelectedserviceobj] = useState(servicejson[1]);
  const fetchService = (e, obj) => {
    e.preventDefault();
    setSelectedservice(obj.name);
    setSelectedserviceobj(obj);
  };
  const [navColor, setNavcolor] = useState("homepage");

  const changeNavbarColor = () => {
    if (window.scrollY >= 350) {
      setNavcolor("app");
    } else {
      setNavcolor("homepage");
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <div
        className="sub-service-intro position-relative"
        style={{
          backgroundImage: `url(${ServiceBG})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          width: "100%",
        }}
      >
        <div className="fs-35 text-white position-absolute top-0">
          <Navbar navChange={navColor} />
        </div>
        <div className="text-center-img w-100">
          <div className="w-90 mx-auto">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h2
                  className="fw-bold-600 text-white fs-35 text-capitalize"
                  data-text="contactus"
                >
                  Services
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Page QUOTE SECTION */}
      <div className="mt-15 fw-bold-700 fs-35 text-black w-100 text-center">
        <p>Technology Services</p>
        <p className="fw-bold-500 fs-18 w-75 mx-auto">
          We blend our knowledge of diverse business domains and deep expertise
          in Data Management, AI/ML and Advanced Analytics to solve complex
          business problems.
        </p>
      </div>

      {/* NEW SERVICE PAGE BUTTON GROUPS */}
      <div className="w-95 mx-auto">
        <div className="mt-10 row">
          <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <div className="w-90 mx-auto">
              <p className="fw-bold-700 fs-50 text-lightgrey text-right lh-50">
                Our <br /> Services
              </p>
              <p
                style={{
                  backgroundImage: `url(${borderBg})`,
                  backgroundAttachment: "scroll",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  top: "80px",
                  width: "100%",
                  height: "5px",
                }}
                className="mt-5"
              ></p>
              <p className="mt-5">
                {servicejson.map((list) => {
                  return (
                    <>
                      <p
                        key={list.id}
                        onClick={(e) => fetchService(e, list)}
                        className={
                          "fs-16 text-black text-left lh-50 cr-pointer " +
                          (list["name"] === selectedServices
                            ? "fw-bold-800"
                            : "fw-bold-400")
                        }
                      >
                        {list.name}
                      </p>
                      {list.id != 30 && list.id != 40 ? (
                        <p
                          style={{
                            backgroundImage: `url(${thinborder})`,
                            backgroundAttachment: "scroll",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%",
                            top: "80px",
                            width: "100%",
                            height: "1px",
                          }}
                          className="mt-1"
                        ></p>
                      ) : null}
                    </>
                  );
                })}
              </p>
            </div>
          </div>
          <div
            className="col-md-8 col-lg-8 col-sm-12 col-xs-12"
            style={{
              backgroundColor: "#F8F8F8",
            }}
          >
            <div className="w-95 mx-auto py-5">
              <h5 className="text-left fw-bold-700 fs-32 text-black">
                {selectedServicesobj["heading"]}
              </h5>
              <p className="fs-16 fw-bold-400 text-blackrock mt-3">
                {selectedServicesobj["headingDescription"]}
              </p>

              <p>
                <Link to={`/services/${selectedServicesobj.link}`}>
                  <span
                    className="fs-16 fw-bold-400 text-decoration-none"
                    style={{ color: "#1DAD8F" }}
                  >
                    Explore more Services{" "}
                  </span>
                  <span className="my-2 d-inline-block fs-18 text-decoration-none">
                    {"->"}
                  </span>
                </Link>
              </p>
              <p>
                <Exploreservices selectedServicesobj={selectedServicesobj} />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NEW HOMEPAGE CASESTUDIES SECTION */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="center-91 mt-5">
          <Case />
        </div>
      </Suspense>

      {/*NEW AboutUS Page Career Link SECTION */}
      <div className="mt-5">
        <div className="w-90 mx-auto">
          <Whyamnet />
        </div>
      </div>

      <div className="mt-5">
        <Driveservices />
      </div>

      {/* NEW HOMEPAGE OUR PARTNER SECTION */}
      <div className="new-our-partner">
        <h1 className="section-title mt-3 text-center">TECHNOLOGY STACK</h1>
        <OurPartner />
      </div>

      <div className="mt-5 mb-5">
        <h1 className="section-title mt-3 mb-5 text-center">RESOURCES</h1>
        <div className="w-90 mx-auto">
          <Resourceweb />
        </div>
      </div>
    </>
  );
};

export default Serviceshome;
