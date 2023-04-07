import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import shareimg from "../../assets/images/newservices/share.png";
import Applicationform from "./Applicationform";

const Applyjob = () => {
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
                Full Stack Node
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
              Full Stack Node
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
                  We are looking to add bright, focused, resourceful and highly
                  goal-oriented Software Developer with experience in Node Js.
                  Candidates should enjoy working in a challenging environment;
                  have the enthusiasm and ambition to develop & amp; complete
                  projects to the highest standard and want to be part of an
                  organization that puts technology at the heart of everything
                  it does.
                </p>
                <h1 className="fs-18 fw-bold-600 mt-5">
                  Your Key Responsibilities
                </h1>
                <p>
                  <ul className="career-details bg">
                    <li className="fs-16 fw-bold-400">
                      Must be able to develop state of art Angular applications
                      using RESTful micro services, Node.js and MongoDB Stack.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      Implementation of security and data protection.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      Implementation of robust set of services / APIs to power
                      the web application.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      {" "}
                      Building reusable code and libraries for future use.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      Optimisation of the application for maximum speed and
                      scalability.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      {" "}
                      Integration of the front-end and back-end aspects of the
                      web application.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      Execute testing plans/strategy, create test cases, and
                      user acceptance criteria.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      {" "}
                      Assist with test execution during test life cycle.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      Maintain the defect management life cycle, using a defect
                      tracking tool.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      {" "}
                      Work with the developer team to ensure all defects are
                      cleared out.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      Document defects, reasons, find trends and minimize the
                      defects from happening again.
                    </li>
                    <li className="fs-16 fw-bold-400">Provide training.</li>
                    <li className="fs-16 fw-bold-400">
                      Maintain system documentation and user guides.
                    </li>
                  </ul>
                </p>
                <h1 className="fs-18 fw-bold-600 mt-5">What To Bring</h1>
                <ul className="career-details bg">
                  <li>Experience: 4 to 6 years</li>
                  <li className="fs-16 fw-bold-400">
                    Design &amp; develop web-based applications as per the
                    business requirements and specifications.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Develop front-end and back-end components and codes as per
                    the robust architectural approach and design patterns.
                    Adhere to guiding principles and code standards.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Write efficient, re-usable, optimal, and well-documented
                    code.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Perform unit testing &amp; system integration testing
                    Involve in troubleshooting and debugging critical problems
                    and resolving complex technical issues that may arise.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Should have experience in the design and development of web
                    services and API and XML.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Should preferably have a working understanding of cloud
                    infrastructure components.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Experience and Knowledge of NodeJS and the concept of
                    RESTful API is a must.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Experience in Angular-based applications is needed
                    Experience in end-to-end web development Experience with SQL
                    (PostgreSQL preferred) &amp; NoSQL (Mongo preferred)
                    databases.
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

export default Applyjob;
