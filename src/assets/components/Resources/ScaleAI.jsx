import React from "react";
import blog3 from "../../images/Resources-page/blog3.png";
import Scale from "../../Data/Resources-Data/ScaleAI";
import { useNavigate } from "react-router-dom";
// import "../../CSS/Insight.css";
import Letsgetstart from "../Webinars/Letsgetstart";
import blog5 from "../../images/Resources-page/blog5.jpg";
import { Helmet } from "react-helmet";

const ScaleAI = () => {
  const btnColor = {
    backgroundColor: "#ecac27",
    borderRadius: "50px",
    cursor: "pointer",
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Scaling AI in the Retail Industry with Data Management - Amnet Digital</title>
        <meta name="title" content="Scaling AI in the retail industry with data management strategies | Amnet Digital
" />
        <meta name="description" content="The impact of AI on the retail industry is immense if leveraged strategically. Learn how data management can help retailers scale AI toward profitable business growth." />
        <meta name="keywords" content="AI in the retail industry, AI for the retail industry, data management strategies, data management strategy for retail sector, impact of AI on the retail" />
      </Helmet>
      <div className="contact-us-intro container-fluid"></div>
      <div className="container-fluid">
        <div className="center">
          <div className="new-home-about-details row ml-0 mr-0 above-spacings">
            <div className="col-12 pl-0 pr-0 mb-5">
              <h1>
              How to Scale AI in the Retail Industry with Advanced Data Management Strategies
              </h1>
            </div>
          </div>

          <div className="row about-us-page-row ml-0 mr-0">
            <div className="col-12 about-us-details p-0">
              <img
                loading="lazy"
                className="img-fluid p-0"
                src={blog5}
                alt="blog"
              />
            </div>
          </div>

          <div className=" justification">
            <div className="row  ml-0 mr-0">
              {Scale.map((list) => {
                return (
                  <div className="col-12  p-0" key={list.id}>
                    <div className="">
                      <p className="fs-24 fw-bold-800">{list.titlekey}</p>
                      <h1 className="fw-bold-600 ">{list.subtitle}</h1>
                      <p className="fs-19  mt-5">
                        {list.description}{" "}
                        <span>
                          <a className="fs-18" target="_blank" href={list.link}>
                            {list.des}
                          </a>                        
                        </span>
                        <span className="fs-19">{list.textelement}</span>
                      </p>
                      <p className="fs-19  mt-5">
                        {list.description13}{" "}
                        <span>
                          <a className="fs-18"  href={list.link}>
                            {list.descr}
                          </a>
                         
                        </span>
                        <span className="fs-19">{list.textel}</span>
                      </p>
                      <p className="fs-19 p-0 m-0">
                        {list.description1}{" "}
                        <span className="fs-18 fw-bold-800">
                            {list.boldtext}
                        </span>
                        <span className="fs-19">{list.description2}</span>
                      </p>
                      <p className="fs-19  mt-4">
                        {list.description12}
                      </p>
                      <p className="fs-19 ">
                        {list.description4}
                      </p>
                      <p className="fs-19 fw-bold-800">
                      <span className="fs-19 fw-bold-800">
                        {list.textbold}{" "}
                        </span>
                        <span>
                        <a className="fs-18 fw-bold-800" href="/contactus">
                            {list.ref}
                        </a>
                        </span>
                        <span className="fs-19 fw-bold-800">{list.description10}</span>
                      </p>
                      <p className="fs-19 ">{list.description11}</p>
                      {list.hasOwnProperty("orderedlist") === true ? (
                        <>
                          {
                            <ol className="pl-4">
                              {list.orderedlist.map((response) => {
                                return (
                                  <>
                                    <li className="fs-19 pt-4 fw-bold-800 pb-3">
                                      {response.heading}
                                    </li>
                                    <p className="fs-19">{response.description}</p>
                                    <p className="fs-19">{response.description6}</p>
                                    <p className="fs-19">{response.description7}</p>
                                    <p className="fs-19">{response.description8}</p>
                                  </>
                                );
                              })}
                            </ol>
                          }
                        </>
                      ) : (
                        ""
                      )}
                      {list.hasOwnProperty("watchnowImg") === true ? (
                        <>
                          <div style={btnColor} className="mt-5">
                            <a
                              className="achorhover"
                              href={`/webinars/reshaping-the-retail-industry-through-AI`}
                            >
                              <p className="mb-0 px-4 py-3">
                                <span className="lh-1 fs-18">
                                  On-Demand Webinar - See how leading Retailers
                                  are embracing AI & Analytics to win in 2023 -
                                  <span className="font-weight-bold fs-18 pl-1">
                                    WATCH NOW
                                  </span>
                                </span>
                              </p>
                            </a>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {list.hasOwnProperty("description2") === true ? (
                        <p className="mb-0  mx-auto fs-18 cr-pointer"></p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/** let gets started */}
      <div>
        <Letsgetstart componentFrom={"blog"} />
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

export default ScaleAI;
