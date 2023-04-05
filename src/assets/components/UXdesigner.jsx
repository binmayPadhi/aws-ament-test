import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import shareimg from "../../assets/images/share.png";
import Applicationform from "./Applicationform";

const UXdesigner = () => {
  const activeList = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "48px",
    textTransform: "uppercase",
    color: "#1DAD8F",
    borderBottom: "2px solid #1DAD8F",
  };
  const inactiveList = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "27px",
    textTransform: "uppercase",
    color: "#C2C2C2",
  };
  const [navColor, setNavcolor] = useState("homepage");
  const [selectedTabview, setselectedTab] = useState("overview");
  const changeNavbarColor = () => {
    if (window.scrollY >= 350) {
      setNavcolor("app");
    } else {
      setNavcolor("homepage");
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const selectedTab = (e, name) => {
    e.preventDefault();
    setselectedTab(name);
  };
  return (
    <>
      <div
        className="position-realtive"
        style={{
          backgroundColor: "#000000",
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          width: "100%",
          height: "500px",
        }}
      >
        <div className="fs-35 text-white position-absolute top-0">
          <Navbar navChange={navColor} />
        </div>
        <div className="bottom-img w-100 bottom-0" style={{ top: "50%" }}>
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-12"></div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="fs-50 fw-bold-700 text-white pl-4">
                UI/UX Designer
              </p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12"></div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          height: "50px",
          textAlign: "center",
        }}
        className="d-flex w-100 align-items-center justify-content-center"
      >
        <span
          style={selectedTabview === "overview" ? activeList : inactiveList}
          className="px-2 cr-pointer"
          onClick={(e) => selectedTab(e, "overview")}
        >
          Overview
        </span>
        <span
          style={selectedTabview === "application" ? activeList : inactiveList}
          className="px-2 cr-pointer"
          onClick={(e) => selectedTab(e, "application")}
        >
          Application
        </span>
      </div>
      <>
        {selectedTabview === "overview" ? (
          <div className="bg" style={{ minHeight: "500px" }}>
            <h5 className="text-black fw-bold-600 fs-24 py-5 text-center">
              UI/UX Designer
            </h5>
            <div className="w-90 mx-auto py-2">
              <div className="w-100 d-flex justify-content-between">
                <span className="text-black fs-18 fw-bold-600">
                  Description
                </span>
                <span className="text-black fs-18 fw-bold-600">
                  Share this job
                  <img src={shareimg} className="img-25 pl-3 cr-pointer" />
                </span>
              </div>
              <div className="w-100 d-flex justify-content-between my-5">
                <span className="text-black fs-18 fw-bold-600">
                  Who are we?
                </span>
              </div>
              <div className="w-100 d-flex my-5">
                <span
                  className="fs-16 fw-bold-400"
                  style={{ color: "#333E49" }}
                >
                  We are looking to add bright, focused, resourceful and highly
                  goal-oriented Software Developer with experience in Node Js.
                  Candidates should enjoy working in a challenging environment;
                  have the enthusiasm and ambition to develop &amp; complete
                  projects to the highest standard and want to be part of an
                  organization that puts technology at the heart of everything
                  it does.
                </span>
              </div>
              <div className="w-100 d-flex justify-content-between my-5">
                <span className="text-black fs-18 fw-bold-600">
                  Job Level :{" "}
                  <span className="text-black fs-16 fw-bold-400">
                    Mid- Senior level
                  </span>
                </span>
                <span className="text-black fs-18 fw-bold-600">
                  Experience :{" "}
                  <span className="text-black fs-16 fw-bold-400">5+ years</span>
                </span>
                <span className="text-black fs-18 fw-bold-600">
                  Location :{" "}
                  <span className="text-black fs-16 fw-bold-400">
                    Hyderabad, India
                  </span>
                </span>
              </div>
              <div className="">
                <h1 className="fs-18 fw-bold-600">About the Role</h1>
                <p className="fs-16 fw-bold-400">
                  {" "}
                  We are looking for a smart and talented Ux/Ui designer who
                  possess passion for delivering high quality work and wants to
                  be involved in designing a wide variety of things across
                  digital and offline media. A self-starter, capable of
                  delivering creative ideas and showing amazing attention to
                  detail will be preferred.
                </p>
                <h1 className="fs-18 fw-bold-600 mt-5">
                  Your Key Responsibilities
                </h1>
                <p>
                  <ul className="career-details bg">
                    <li className="fs-16 fw-bold-400">
                      Come up with highly engaging designs which are in
                      accordance with the brand attributes.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      Knowledge of typography, colour, iconography, layouts and
                      visual hierarchy to deliver high quality digital and print
                      media.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      Close interaction with the marketing and leadership team
                      to analyse and understand the requirements.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      Plan and design concepts by researching on the topics
                      based on the requirements and convert them into final
                      artwork that can be used across various digital and
                      offline platforms.
                    </li>
                  </ul>
                </p>
                <h1 className="fs-18 fw-bold-600 mt-5">What To Bring</h1>
                <ul className="career-details bg">
                  <li className="fs-16 fw-bold-400">
                    Experience – 7 to 10 years
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Please find the below JD.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Excellent working knowledge of Adobe XD. (Strong
                    understanding of using Components and animations in XD).
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Working experience on Axure, Invision Studio, and Figma.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Html, CSS will be an added advantage.
                  </li>
                  <li className="fs-16 fw-bold-400">Design Skillset</li>
                  <li className="fs-16 fw-bold-400">
                    Planning and producing UX documents, User flows, User
                    journey, Competition analysis, Market survey and
                    Wireframes-prototypes, and UI testing - for both mobile and
                    web-based platforms.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Swiftly create variants in wireframe designs for mobile and
                    web-based apps from hand-drawn sketches.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Should have an eye for details, and actively participate in
                    enhancing the software’s structure quality.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Expertise with a range of tools available to produce designs
                    then share test and iterate them.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Knowledge of impactful UI components in design-related
                    issues and the best practices to tackle them.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Proactiveness in improving the output quality of our
                    wireframes and contributing towards the growing skills of
                    the team.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Be passionate about all things UX and other areas of design
                    and innovation. Research and showcase knowledge in the
                    industry’s latest trends and technologies.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Be passionate about resolving user pain points through great
                    design.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    A solid grasp of user-cantered design (UCD), planning and
                    conducting user research, user testing, A/B testing, rapid
                    prototyping, heuristic analysis, usability, and
                    accessibility concerns.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Extensive experience in using UX design best practices to
                    design solutions, and a deep understanding of mobile-first
                    and responsive design.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Be excited about collaborating and communicating closely
                    with teams and other stakeholders via a distributed model,
                    to regularly deliver design solutions for approval.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <Applicationform />
        )}
      </>
    </>
  );
};

export default UXdesigner;
