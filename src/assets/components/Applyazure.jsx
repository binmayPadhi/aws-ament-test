import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import shareimg from "../../assets/images/newservices/share.png";
import Applicationform from "./Applicationform";

const Applyazure = () => {
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
                Azure Architect
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
              Azure Architect
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
                  This role requires a high degree of independent execution,
                  ownership and responsibility for business customer success.
                  Lead a group of architects and provide them direction in
                  implementing a cloud solution. Work independently with
                  business and technical stakeholders to understand the
                  organization&#39;s obstacles, and provide due diligence.
                </p>
                <h1 className="fs-18 fw-bold-600 mt-5">
                  Your Key Responsibilities
                </h1>
                <p>
                  <ul className="career-details bg">
                    <li className="fs-16 fw-bold-400">
                      Contribute to the delivery of data quality reviews
                      including data cleansing where required to ensure
                      integrity and quality.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      Understand data models, data storage models and data
                      migration to manage data within the organization, for a
                      small to medium-sized project.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      Resolving escalated design and implementation issues with
                      moderate to high complexity.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      Analyzing the latest industry trends such as cloud
                      computing and distributed processing and beginning to
                      infer risks and benefits of their use in business.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      Work toward adherence to the relevant data engineering and
                      data modelling processes, procedures and standards.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      Design and maintain the overall architecture for the
                      product(s)/platform(s) in alignment with
                      enterprise architecture and platform strategy
                      (including architectural roadmaps)
                    </li>
                  </ul>
                </p>
                <h1 className="fs-18 fw-bold-600 mt-5">What To Bring</h1>
                <ul className="career-details bg">
                  <li className="fs-16 fw-bold-400">
                    {" "}
                    Minimum of 14 years experience, with at least 5 year as a
                    architect in Azure Space across Architecture, Design,
                    Development, testing &amp; Deployment, full understanding in
                    SDLC.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    5+ years hands-on experience with architectures in a
                    Microsoft Azure based platform
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Solid experience leading data teams in developing data
                    engineering platforms.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    Good working Experience of Azure Data Bricks, Data Bricks
                    Delta Lake, Azure Data Factory (ADF), ADF metadata driven
                    pipelines, Azure DevOps, MS SQL Server, SSMS, Python and
                    PySpark.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    {" "}
                    Knowledge of Azure connectivity in general, Azure Key
                    Vault, Azure Functions, Azure integration with Active
                    Directory.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    {" "}
                    Knowledge of Azure Synapse Analytics, Synapse
                    Studio, Azure Functions, ADLS.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    {" "}
                    SQL coding to write queries, stored procedures, views,
                    functions etc. SQL management studio DB configuration
                    experience.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    {" "}
                    Experience in SQL Server and SSIS package s ETL
                    implementation experience knowledge
                    of Azure SQL, Azure Functions, Azure Data Factory (ADF), ADF
                    metadata driven pipelines, Azure DevOps.
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

export default Applyazure;
