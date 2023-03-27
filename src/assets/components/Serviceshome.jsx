import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import ServiceBG from "../images/Service-Page/service-main-bg.png";
import borderBg from "../images/Service-Page/border.png";
import thinborder from "../images/Service-Page/thin-border.png";
import About from "../Data/AboutUs-Data/About";
import Exploreservices from "./SubServices/Exploreservices";
import Driveservices from "./SubServices/Driveservices";
import Whyamnet from "./Homepage/Whyamnet";
import OurPartner from "./Homepage/OurPartner";
import Resourceweb from "./SubServices/Resourceweb";
import Case from "./SubServices/Caseservice";

const Serviceshome = () => {
  return (
    <>
      <div
        className="sub-service-intro container-fluid position-relative"
        style={{
          backgroundImage: `url(${ServiceBG})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          top: "80px",
          width: "100%",
        }}
      >
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
                {About.dropdownlist.map((list) => {
                  return (
                    <>
                      <p
                        key={list.id}
                        className="fw-bold-400 fs-16 text-black text-left lh-50 cr-pointer"
                      >
                        <a
                          className="text-black text-decoration-none"
                          href={`/services/${list.link}`}
                        >
                          {list.name}
                        </a>
                      </p>
                      {list.id != 30 && list.id != 39 ? (
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
                AI & ML Services
              </h5>
              <p className="fs-16 fw-bold-400 text-blackrock mt-3">
                Our software development company delivers corporate and consumer
                applications based on our profound understanding of technologies
                and the markets they operate in. With our professional mindset,
                we look beyond technology to offer viable solutions for your
                particular business context.
              </p>
              <p className="fs-16 fw-bold-400" style={{ color: "#1DAD8F" }}>
                Explore more Services{" "}
                <span className="my-2 d-inline-block fs-18">{"->"}</span>
              </p>
              <p>
                <Exploreservices />
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
