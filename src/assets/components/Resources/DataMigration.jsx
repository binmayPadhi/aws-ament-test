import React from "react";
import blog3 from "../../images/Resources-page/blog3.png";
import Scale from "../../Data/Resources-Data/ScaleAI";
import { useNavigate } from "react-router-dom";
// import "../../CSS/Insight.css";
import Letsgetstart from "../Webinars/Letsgetstart";
import blog6 from "../../images/Resources-page/blog6.jpg";
import { Helmet } from "react-helmet";
import Newgetstart from "../Webinars/Newgetstart";
import Migrationdata from "../../Data/Resources-Data/Datamigration";



const DataMigration = () => {
  const btnColor = {
    backgroundColor: "#ecac27",
    borderRadius: "50px",
    cursor: "pointer",
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>  6 Key Steps To Your Data Migration Project - Amnet Digital</title>
        <meta name="title" content=" Data Migration Strategy - 6 key steps to include in your data migration project
" />
        <meta name="description" content="Unlock the secrets to seamless data migration with Amnet Digital. Learn the steps to assess, migrate, and maintain data quality for business success." />
        <meta name="keywords" content="data migration, data migration services, data migration assessment, data migration process, data migration consultation, data migration services provider, data migration solution" />
      </Helmet>
      <div className="contact-us-intro container-fluid"></div>
      <div className="container-fluid">
        <div className="center">
          <div className="new-home-about-details row ml-0 mr-0 above-spacings">
            <div className="col-12 pl-0 pr-0 mb-5">
              <h1>
              6 Key Steps To Include In Your Data Migration Project
              </h1>
            </div>
          </div>

          <div className="row about-us-page-row ml-0 mr-0">
            <div className="col-12 about-us-details p-0">
              <img
                loading="lazy"
                className="img-fluid "
                src={blog6}
                alt="blog"
              />
            </div>
          </div>

          
            <div className="row  ml-0 mr-0">
              {Migrationdata.map((list) => {
                return (
                  <div className="col-12  p-0" key={list.id}>
                   
                    <h2 className="fs-24 fw-bold-800 mt-5">{list.title}</h2>
                        <p className="fs-19 mt-3 ">{list.description30}</p> 
                        <p className="fs-19 ">{list.description20}</p>
                        <p className="fs-19  ">{list.description21}</p>
                        <p className="fs-19 ">{list.description22}</p>
                        <p className="fs-19 ">{list.description23}</p>
                        <p className="fs-19 ">{list.description24}</p>  
                        <img src={list.image} className="w-100"/> 
                        {list.hasOwnProperty("unorderedlist") === true ? (
                                    <>
                                        {
                                            <ul className="career-details  pl-5">
                                                {list.unorderedlist.map((list) => {
                                                    return (
                                                        <>
                                                            <li className="fs-19 mt-2 fw-bold-400">
                                                                {list.descript}
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
                );
              })}
            </div>
        </div>
      </div>

      {/** let gets started */}
      <div>
        <Newgetstart componentFrom={"blog"} />
      </div>

      {/* NEW HOMEPAGE CAREER SECTION */}

      <div
        className="new-career-section"
        style={{
          width: "auto",
          height: "auto",
          backgroundColor: "#19AF8F",
          padding: "30px",
          marginTop: "60px",
        }}
      >
        <div className="new-career-section w-90 mx-auto">
          <div className="career-section-row row g-0">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 career-caption">
              <h5>WORK WITH US</h5>
              <h2>Let's Grow Together</h2>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 career-details">
              <p>
                We are on a mission to solve complex problems and provide
                solutions that make a difference, Come work with us.
              </p>
              <a href="/contactus">
                <button
                  type="button"
                  className="btn btn-default contact-us-button"
                >
                  Contact Us
                </button>
              </a>
              <a href="/careers">
                <button
                  type="button"
                  className="btn btn-default careers-button"
                >
                  Careers
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataMigration;
