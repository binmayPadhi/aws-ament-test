import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import shareimg from "../../assets/images/careers-page/share.png";
import Applicationform from "./ApplicationForm";
import ApplyjobJson from "../Data/Applyjob";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";


const Apply = () => {
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
        if (window.scrollY >= 35) {
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

    const [res, setObject] = useState({});
    useEffect(() => {
        let selectedJob = sessionStorage.getItem('job');

        ApplyjobJson.map((data) => {
            if (data.applyfor === selectedJob) {
                setObject(data)
            }
        });
        console.log(res);
    }, []);

    const schema = yup
        .object()
        .shape({
            location: yup
                .string()
                .matches(/^[a-zA-Z ]*$/, "location is not valid")
                .required("location is required"),
            acceptCheckbox: yup.string().required("Please check the checkbox"),
        })

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });
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
                                {res.title}
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
                    className="px-2 ml-5 cr-pointer"
                    onClick={(e) => selectedTab(e, "application")}
                >
                    Application
                </span>
            </div>

            <>
                {selectedTabview === "overview" ? (
                    <div className="bg" style={{ minHeight: "500px" }}>
                        <h5 className="text-black fw-bold-600 fs-24 py-5 text-center">
                            {res.title}
                        </h5>
                        <div className="w-80 mx-auto py-2">
                            <div className="w-90 d-flex justify-content-between">
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
                                    We are an Artificial Intelligence Services and Solutions company that focuses on applying Machine Learning, Deep Learning and Advanced Analytics to solve the problems of businesses.

                                    Amnet Digital has highly experienced talent from world-leading institutions and technology companies. We have successfully applied AI Technologies in Enterprise Software, Retail, eCommerce and Healthcare. Our digital product engineering teams design and deploy enterprise solutions that are robust, secure and scalable.
                                </span>
                            </div>
                            <div className="row w-95 d-flex justify-content-between my-5">
                                <div className="col-lg-4  col-md-4 col-sm-12 text-black fs-18 fw-bold-600">
                                    Job Level: {" "}
                                    <span className="text-black fs-16 fw-bold-400">
                                    {res.level}
                                    </span>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 text-black fs-18 fw-bold-600">
                                    Experience: {" "}
                                    <span className="text-black fs-16 fw-bold-400">{res.experience}</span>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 text-black text-right fs-18 fw-bold-600">
                                    Location: {" "}
                                    <span className="text-black fs-16 fw-bold-400">
                                        Hyderabad, India
                                    </span>
                                </div>
                            </div>
                            <div className="">
                                <h1 className="fs-18 fw-bold-600">About the Role</h1>
                                <p className="fs-16 fw-bold-400">
                                    {res.aboutdescription}
                                </p>
                                <h1 className="fs-18 fw-bold-600 mt-5">
                                    Your Key Responsibilities
                                </h1>
                                {res.hasOwnProperty("unorderedlist") === true ? (
                                    <>
                                        {
                                            <ul className="career-details bg pl-5">
                                                {res.unorderedlist.map((list) => {
                                                    return (
                                                        <>
                                                            <li className="fs-16 fw-bold-400">
                                                                {list.content}
                                                            </li>
                                                        </>
                                                    );
                                                })}
                                            </ul>
                                        }
                                    </>
                                ) : (
                                    ""
                                )}


                                <h1 className="fs-18 fw-bold-600 mt-5">What To Bring</h1>
                                {res.hasOwnProperty("unorderedlist1") === true ? (
                                    <>
                                        {
                                            <ul className="career-details bg pl-5">
                                                {res.unorderedlist1.map((list) => {
                                                    return (
                                                        <>
                                                            <li className="fs-16 fw-bold-400">
                                                                {list.content}
                                                            </li>
                                                        </>
                                                    );
                                                })}
                                            </ul>
                                        }
                                    </>
                                ) : (
                                    ""
                                )}
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
export default Apply;