import React, { useEffect } from "react";
import { Link } from "react-scroll";
import ServiceBG from "../images/Service-Page/service-main-bg.png";
import thinborder from "../images/Service-Page/thin-border.png";
import Exploreservices from "./SubServices/Exploreservices";
import { useState } from "react";
import borderBg from "../images/Service-Page/border.png";
import servicejson from "../Data/Services-Data/Homeservices";
import Case from "./SubServices/Caseservice";
import Whyamnet from "./SubServices/Whyamnet";
import "../CSS/Services.css";
import Driveservices from "./SubServices/Driveservices";
import TechnologyStack from "./SubServices/TechnologyStack";
import CaseStudiesSection from "./Homepage/CaseStudiesSection";

function TestService() {
  const [selectedServices, setSelectedservice] = useState(servicejson[1].name);
  const [selectedServicesobj, setSelectedserviceobj] = useState(servicejson[1]);
  const fetchService = (e, obj) => {
    e.preventDefault();
    setSelectedservice(obj.name);
    setSelectedserviceobj(obj);
    console.log(selectedServicesobj);
  };

  return (
    <>
      <div
        className="sub-service-intro position-realtive"
        style={{
          backgroundImage: `url(${ServiceBG})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <div className="text-center-img w-100">
          <div className="w-90 mx-auto">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h2
                  className="fw-bold-600 text-white fs-35 text-capitalize"
                  data-text="Your Tech Innovation Catalyst"
                >
                  Technology services
                </h2>
                <p className="fw-bold-400 fs-16 text-white mb-5 mt-4">
                  We blend our knowledge of diverse business domains and deep
                  expertise in Data Management, AI/ML and Advanced Analytics to
                  solve complex business problems.
                </p>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12"></div>
            </div>
          </div>
        </div>
        <div className="bottom-img w-100">
          <div className="w-90 mx-auto">
            <p className="fs-24 fw-bold-600 text-white">Services</p>
          </div>
        </div>
      </div>
      <div className="w-90 mx-auto">
        <div className="mt-10 row">
          <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <div className="w-90 mx-auto">
              <p className="fw-bold-700 fs-50 text-lightgrey text-right lh-50">
                Our
              </p>
              <p className="fw-bold-700 fs-50 text-lightgrey text-right ">
                Services
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
                <a href={`/services/${selectedServicesobj.link}`}>
                  <span
                    className="fs-16 fw-bold-400"
                    style={{ color: "#1DAD8F" }}
                  >
                    Explore more Services{" ->"}
                  </span>
                </a>
              </p>
              <p>
                <Exploreservices selectedServicesobj={selectedServicesobj} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <CaseStudiesSection />
      </div>
      <div className="mt-5">
        <div className="w-90 mx-auto">
          <Whyamnet />
        </div>
      </div>
      {/* <div className="mt-5">
        <Driveservices />
      </div>
      <div className="new-our-partner">
        <h1 className="section-title mt-3 text-center">TECHNOLOGY STACK</h1>
        <TechnologyStack />
      </div> */}
    </>
  );
}

export default TestService;
