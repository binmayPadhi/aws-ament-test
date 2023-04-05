import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import shareimg from "../../assets/images/share.png";
import Applicationform from "./Applicationform";

const ApplyNet = () => {
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
                                Dot Net Developer
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
                            Dot Net Developer
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
                                <p className="fs-16 fw-bold-400">   Providing development guidance to developers and peers with ability to triage and assign work.
                                    Provide high quality application engineering deliverables in accordance with the project timelines.
                                    Participation and possible facilitation of stand ups, grooming, sprint planning, task estimation and
                                    sprint retrospectives. Regular interaction with Product Owners/BAs to understand business
                                    requirements and help with story /task definition and prioritization. Coordinating with the
                                    deployment team to push the completed tasks to higher environments. Mentoring the junior
                                    Associate Developers and suggesting the best Coding Practices.</p>
                                <h1 className="fs-18 fw-bold-600 mt-5">Your Key Responsibilities</h1>
                                <p>
                                    <ul>

                                        <li className="fs-16 fw-bold-400">Documents and demonstrates solutions by developing documentation, flowcharts, layouts,
                                            diagrams, charts, code comments and clear code.</li>
                                        <li className="fs-16 fw-bold-400">Can produce well-organized, optimized and documented source code.</li>
                                        <li className="fs-16 fw-bold-400">Work independently when required.</li>
                                        <li className="fs-16 fw-bold-400">Attention to detail is essential and all tasks must be carried out to the highest standard.</li>
                                        <li className="fs-16 fw-bold-400">Coordinate with other programmers to design and implement features.</li>
                                        <li className="fs-16 fw-bold-400">Become a part of a state-of-the-art offshore Centre of a global operating organization.</li>
                                        <li className="fs-16 fw-bold-400">Participate in building high class products for our customers and profit from the motivating and
                                            employee friendly environment in our organization.</li>
                                    </ul>
                                </p>
                                <h1 className="fs-18 fw-bold-600 mt-5">What To Bring</h1>
                                <ul className="career-details">
                                    <li className="fs-16 fw-bold-400">  Experience: 4 to 6 years</li>
                                    <li className="fs-16 fw-bold-400">Proven experience as a .NET Developer or Application Developer.</li>
                                    <li className="fs-16 fw-bold-400">Excellent technical hands-on experience on .Net Core, Web Api and Sql Server.</li>
                                    <li className="fs-16 fw-bold-400">Strong in oops concepts.</li>
                                    <li className="fs-16 fw-bold-400">Good knowledge on Asp.Net MVC, ADO.Net and Entity Framework.</li>
                                    <li className="fs-16 fw-bold-400">Familiarity with architecture styles/APIs (REST, RPC)</li>
                                    <li className="fs-16 fw-bold-400">Understanding of Agile methodologies</li>
                                    <li className="fs-16 fw-bold-400">Good communication and presentation skills.</li>
                                    <li className="fs-16 fw-bold-400">Good team player and excellent individual contributor</li>
                                    <li className="fs-16 fw-bold-400">Knowledge on any of the architectural design pattern</li>
                                    <li className="fs-16 fw-bold-400">Good experience in developing platforms. (.Net/ .NET Core )</li>
                                    <li className="fs-16 fw-bold-400">Excellent hands-on experience in ASP.Net, ASP.Net MVC, ASP.Net Core</li>
                                    <li className="fs-16 fw-bold-400">Participating in full stack development</li>
                                    <li className="fs-16 fw-bold-400">Adhere to application engineering methodologies, coding standards, code reviews.</li>
                                    <li className="fs-16 fw-bold-400">Providing feedback regarding application engineering methodologies, standards, and leading
                                        practices when appropriate</li>
                                    <li className="fs-16 fw-bold-400">Collaborating with other development teams for integrations and deployment</li>
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

export default ApplyNet;
