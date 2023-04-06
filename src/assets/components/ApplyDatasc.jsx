import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import shareimg from "../../assets/images/share.png";
import Applicationform from "./Applicationform";

const Datasc = () => {
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
                Data Scientist
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
              Data Scientist
            </h5>
            <div className="w-90 mx-auto py-2">
              <div className="w-100 d-flex justify-content-between">
                <span className="text-black fs-18 fw-bold-600">
                  Description
                </span>
                <span className="text-black fs-18 fw-bold-600">
                  Share this job
                  <img src={shareimg} className="img-25 pl-2 cr-pointer" />
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
                  A Data Scientist&#39;s roles and responsibilities include
                  extracting data from multiple sources, using machine learning
                  tools to organize data, process, clean, and validate the data,
                  analyze the data for information and patterns, develop
                  prediction systems, present the data in a clear manner, and
                  propose solutions.
                </p>
                <h1 className="fs-18 fw-bold-600 mt-5">
                  Your Key Responsibilities
                </h1>
                <p>
                  <ul className="career-details bg">
                    <li className="fs-16 fw-bold-400">
                      {" "}
                      Perform Data cleansing activities such as data cleaning,
                      merging and enrichment etc.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      {" "}
                      Perform feature engineering through extracting meaningful
                      features from measured and/or derived data
                    </li>
                    <li className="fs-16 fw-bold-400">
                      {" "}
                      Perform exploratory and targeted data analyses to get key
                      insights
                    </li>
                    <li className="fs-16 fw-bold-400">
                      {" "}
                      Build Stochastic and Machine learning algorithms that
                      potentially address business problems
                    </li>
                    <li className="fs-16 fw-bold-400">
                      {" "}
                      Lead and implement Machine Learning projects from
                      initiation through completion with particular focus on
                      automated deployment and ensuring optimized performance.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      {" "}
                      Maintain and optimize the machine learning/deep learning
                      models developed by the Data Scientist and ensure seamless
                      deployment in different environments (Dev/QA/Prod) while
                      enabling model tracking, model experimentation and model
                      automation.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      {" "}
                      Collaborate with the data engineers and data scientists on
                      model development to containerize and build out the
                      deployment pipelines for new models.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      {" "}
                      Collaborate on MLOPS life cycle experience with MLOPS
                      workflows traceability and versioning of datasets.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      {" "}
                      Ensure traceability and versioning of datasets, models
                      evaluation pipelines.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      {" "}
                      Design, prototype, build and maintain APIs for consumption
                      of machine learning models at scale.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      {" "}
                      Facilitate the development and deployment of POC machine
                      learning systems.
                    </li>
                    <li className="fs-16 fw-bold-400">
                      {" "}
                      Using standard methodologies framework to ensure data
                      quality and reconciliation checks are in place and are
                      transparent to everyone.
                    </li>
                  </ul>
                </p>
                <h1 className="fs-18 fw-bold-600 mt-5">What To Bring</h1>
                <ul className="career-details bg">
                  <li className="fs-16 fw-bold-400">
                    {" "}
                    Experience: 3 to 7 years
                  </li>
                  <li className="fs-16 fw-bold-400">
                    {" "}
                    In-depth understanding and modelling experience in
                    supervised, unsupervised, and deep learning models
                    (CNN/RNN/LSTM/BERT/Transformers etc.)
                  </li>
                  <li className="fs-16 fw-bold-400">
                    {" "}
                    Knowledge of vector algebra, statistical and probabilistic
                    modelling is highly desirable.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    {" "}
                    Knowledge of advanced statistical techniques and concepts
                    (regression, properties of distributions, statistical tests,
                    etc.) and experience in applying the same.
                  </li>

                  <li className="fs-16 fw-bold-400">
                    {" "}
                    Experience in major machine learning frameworks such as
                    Pytorch, Scikit-Learn, TensorFlow, SparkML etc.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    {" "}
                    Hands-on knowledge of data wrangling, data cleaning/
                    preparation, dimensionality reduction techniques is
                    required.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    {" "}
                    Knowledge of creating data architectures/pipeline.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    {" "}
                    Fluency in Python programming.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    {" "}
                    Familiarity with SQL and NoSQL (anyone) databases is
                    desirable.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    {" "}
                    Experience working with Machine Learning deployment
                    frameworks like Azure ML studio, AWS sage maker etc is an
                    added advantage.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    {" "}
                    Strong analytical and critical thinking skills. 
                  </li>
                  <li className="fs-16 fw-bold-400">
                    {" "}
                    Have a business mindset, swift to identify risk situations
                    and opportunities, and able to generate creative solutions
                    to business problems.
                  </li>
                  <li className="fs-16 fw-bold-400">
                    {" "}
                    Effective communication skills (written and verbal) to
                    properly articulate complicated statistical models/ reports
                    to management and other IT development partner.
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

export default Datasc;
