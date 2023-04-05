import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import shareimg from "../../assets/images/share.png";
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
