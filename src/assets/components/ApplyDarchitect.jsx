import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import shareimg from "../../assets/images/share.png";
import Applicationform from "./Applicationform";

const ApplyDarchitect = () => {
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
                                Data Architect
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
                            Data Architect
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
                                <p className="fs-16 fw-bold-400"> A data architect roles and responsibilities include Developing and implementing an overall
                                    organizational data strategy that is in line with business processes. The strategy includes data model
                                    designs, database development standards, implementation and management of data warehouses
                                    and data analytics systems.</p>
                                <h1 className="fs-18 fw-bold-600 mt-5">Your Key Responsibilities</h1>
                                <p>
                                    <ul>
                                        <li className="fs-16 fw-bold-400"> Designs, develops, deploys, and supports sustainable data/solutions architectures such as
                                            design patterns, reference architecture, conceptual, logical, and physical data models.</li>
                                        <li className="fs-16 fw-bold-400">Build proof of concepts (POC), minimal viable product (MVP), and produce scalable data
                                            architecture solutions with end-to-end delivery.  </li>
                                        <li className="fs-16 fw-bold-400">Build data models, data marts, and semantic layer.</li>
                                        <li className="fs-16 fw-bold-400">Build solutions with self-sustainable, easily scalable design with zero to no maintenance in
                                            mind.</li>
                                        <li className="fs-16 fw-bold-400"> Conduct Assessments (Data Assessments, Data Governance &amp; Security Assessments, and
                                            Data Quality Assessments).</li>
                                        <li className="fs-16 fw-bold-400">Build data models using Kimball data model, dimensional modeling, star, and snowflake
                                            schema design and development.</li>
                                        <li className="fs-16 fw-bold-400">Build reusable datasets and models with a single source of truth (SSOT) in mind.</li>
                                        <li className="fs-16 fw-bold-400"> Build data delivery process across the enterprise using different data sources and
                                            destinations.</li>
                                        <li className="fs-16 fw-bold-400">Data migrations from heterogeneous databases (ex: SQL Server, MySQL, PostgreSQL, Oracle,
                                            DB2, MariaDB, MongoDB, and Redshift) to Azure SQL or Azure Synapse or Azure Cosmos DB.</li>
                                        <li className="fs-16 fw-bold-400">Data ingestion from different file types (ex: XML, JSON, Avro, Parquet, and ORC) into
                                            databases such as Azure SQL, Azure Synapse, Azure Cosmos DB, and Snowflake.</li>
                                        <li className="fs-16 fw-bold-400">Meet the requirements and deadlines established for a given project. </li>
                                        <li className="fs-16 fw-bold-400"> Follow internal processes and procedures. </li>
                                        <li className="fs-16 fw-bold-400">Investigate and resolve data architecture defects, performance issues and build data quality
                                            rules.</li>
                                        <li className="fs-16 fw-bold-400">Work closely with other team members to coordinate assignments and
                                            communicate status.</li>
                                    </ul>
                                </p>
                                <h1 className="fs-18 fw-bold-600 mt-5">What To Bring</h1>
                                <ul>
                                    <li className="fs-16 fw-bold-400">  Bachelor’s degree in computer science or Data Analytics or Software Engineering or
                                        Mathematics.</li>
                                    <li className="fs-16 fw-bold-400"> 8+ years of experience in Data Architecture, Data Modeling, and conducting assessments.</li>
                                    <li className="fs-16 fw-bold-400">Experience in advanced SQL and database (ex. Azure SQL, SQL Server, Snowflake, Redshift,
                                        Oracle, SQL Server, MySQL, NoSQL, etc.).</li>
                                    <li className="fs-16 fw-bold-400">Experience with Azure Data Factory, Azure SQL, Azure Synapse, Azure Databricks, ML/AI,
                                        Databricks, and ML Ops.</li>
                                    <li className="fs-16 fw-bold-400">Experience with Hadoop components.</li>
                                    <li className="fs-16 fw-bold-400">Experience architecting and developing complex data ingestion pipelines, SQL queries,
                                        views, procedures, and functions. </li>

                                    <li className="fs-16 fw-bold-400">Experience in advanced SQL development experience: Management of high volume of data,
                                        building aggregates, and cubes, tuning complex queries for performance, improving overall
                                        data retrieval process, indexing and query plan analysis, and refactoring. </li>
                                    <li className="fs-16 fw-bold-400">Experience in managing and maintaining data integration between different applications and
                                        databases using Rest API.</li>
                                    <li className="fs-16 fw-bold-400">Experience with data extraction with a wide variety of ETL/ELT tools and processes. Azure
                                        experience is preferred. </li>
                                    <li className="fs-16 fw-bold-400">Experience building Data Warehouses, Data Mart, and Symantec data layers. </li>
                                    <li className="fs-16 fw-bold-400">Experience with Azure Data Factory, Azure SQL, Azure Synapse, Azure Databricks, ML/AI,
                                        Databricks, and ML Ops.</li>
                                    <li className="fs-16 fw-bold-400">Experienced working in the cloud and serverless database solutions (Azure, AWS,
                                        Snowflake, BigQuery, BigTable, etc.) in combination with any BI Tools (Power BI, Tableau,
                                        Looker, Qlik, etc.). Azure and Power BI technology experience is strongly preferred.</li>
                                    <li className="fs-16 fw-bold-400">Experience with JIRA, Kimble, etc. </li>
                                    <li className="fs-16 fw-bold-400">Experience with Version control applications (example: Azure DevOps, GitHub, BitBucket,
                                        etc.) </li>
                                    <li className="fs-16 fw-bold-400">Proficient in relational and NoSQL databases.</li>
                                    <li className="fs-16 fw-bold-400">Rigorous attention to detail.</li>
                                    <li className="fs-16 fw-bold-400">Ability to communicate with internal/external stakeholders and work through data-related
                                        inquiries and issues. </li>
                                    <li className="fs-16 fw-bold-400">Effectively manage workload with shifting priorities and varying business requirements.</li>
                                    <li className="fs-16 fw-bold-400">Excellent problem-solving skills to identify creative ways to achieve solutions. </li>
                                    <li className="fs-16 fw-bold-400">Capable of taking responsibility for a task and managing it through completion.</li>
                                    <li className="fs-16 fw-bold-400"> Excellent verbal and written communication skills.</li>
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

export default ApplyDarchitect;
