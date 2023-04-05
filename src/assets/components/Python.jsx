import Navbar from "./Navbar";
import React from "react";
import { useState } from "react";
import shareimg from "../../assets/images/share.png";
import Applicationform from "./Applicationform";

const Python = () => {
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
                                Python Developer
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
                            Python Developer
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
                                <p className="fs-16 fw-bold-400">  The role of a Python developer is to contribute to coding done using Python language in different
                                    areas of web development, application development, game development, data science, machine
                                    learning, AI, etc.</p>
                                <h1 className="fs-18 fw-bold-600 mt-5">Your Key Responsibilities</h1>
                                <p>
                                    <ul className="career-details bg">
                                        <li className="fs-16 fw-bold-400 "> Writing efficient, reusable, testable, and scalable code.</li>
                                        <li className="fs-16 fw-bold-400 ">Understanding, analyzing, and implementing – Business needs, feature modification requests,
                                            conversion into software components.</li>
                                        <li className="fs-16 fw-bold-400 ">Integration of user-oriented elements into different applications, data storage solutions.</li>
                                        <li className="fs-16 fw-bold-400 ">Developing – Backend components to enhance performance and receptiveness, server-side logic,
                                            and platform, statistical learning models, highly responsive web applications.</li>
                                        <li className="fs-16 fw-bold-400">Designing and implementing – High availability and low latency applications, data protection and
                                            security features.</li>
                                        <li className="fs-16 fw-bold-400">Performance tuning and automation of application.</li>
                                        <li className="fs-16 fw-bold-400">Testing and debugging software applications with Python test framework tools like Behave, Pytest,
                                            PyUnit, etc.</li>
                                        <li className="fs-16 fw-bold-400">Enhancing the functionalities of current software systems.</li>
                                        <li className="fs-16 fw-bold-400">Coming up with digital tools for online traffic monitoring.</li>
                                        <li className="fs-16 fw-bold-400">Working with Python libraries like Pandas, NumPy, etc.</li>
                                        <li className="fs-16 fw-bold-400">Creating predictive models for AI and ML-based features.</li>
                                        <li className="fs-16 fw-bold-400">Keeping abreast with the latest technology and trends.</li>
                                        <li className="fs-16 fw-bold-400">Fine-tune and develop AI/ML-based algorithms based on results.</li>

                                    </ul>
                                </p>
                                <h1 className="fs-18 fw-bold-600 mt-5">What To Bring</h1>
                                <ul className="career-details bg">
                                    <li className="fs-16 fw-bold-400">    4 - 8 years of hand on experience of developing python-based solutions/applications.</li>
                                    <li className="fs-16 fw-bold-400">Strong experience in Python, preferably with a good low level designing and programming concepts.</li>
                                    <li className="fs-16 fw-bold-400">Strong experience in any cloud platform preferably AWS or GCP. </li>
                                    <li className="fs-16 fw-bold-400">Strong experience of working with API’s and integrating multiple applications together.</li>
                                    <li className="fs-16 fw-bold-400">Experience with SQL and relational databases.</li>
                                    <li className="fs-16 fw-bold-400">Solid architectural understanding of NOSQL databases.</li>
                                    <li className="fs-16 fw-bold-400">Good understanding of cloud security best practices.</li>
                                    <li className="fs-16 fw-bold-400">Excellent understanding of OOP concepts with experience applying it in enterprise programming.</li>
                                    <li className="fs-16 fw-bold-400">Deep understanding of distributed systems (e.g. CAP theorem, partitioning, replication, consistency,
                                        and consensus)</li>
                                    <li className="fs-16 fw-bold-400">Good Git version control practices</li>
                                    <li className="fs-16 fw-bold-400">Proficient with Microsoft office suite (Excel, Word, PowerPoint)</li>
                                    <li className="fs-16 fw-bold-400">Experience of working with Data Warehousing Technologies like BigQuery, Redshift, or snowflake is
                                        a plus.</li>
                                    <li className="fs-16 fw-bold-400">Experience in using Business Intelligence tools such as: Tableau, Power BI for business applications is
                                        a plus.</li>
                                    <li className="fs-16 fw-bold-400">Self-starter and have strong interpersonal skills.</li>
                                    <li className="fs-16 fw-bold-400">Strong analytical, problem solving, and troubleshooting abilities.</li>
                                    <li className="fs-16 fw-bold-400">Flexibility to adapt to a variety of engagement types, working hours and work environments and
                                        locations.</li>
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

export default Python;
