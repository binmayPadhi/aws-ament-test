import React from "react";
import blog3 from "../../images/Resources-page/blog3.png";
import BlogAIOPS from "../../Data/Resources-Data/BlogAIOPS";
import { useNavigate } from "react-router-dom";
// import "../../CSS/Insight.css";
import Letsgetstart from "../Webinars/Letsgetstart";

const InsightAIOPS = () => {
  let history = useNavigate();
  const btnColor = {
    backgroundColor: "#ecac27",
    borderRadius: "50px",
    cursor: "pointer",
  };
  return (
    <>
      <div className="contact-us-intro container-fluid"></div>
      <div className="container-fluid">
        <div className="center">
          <div className="new-home-about-details row ml-0 mr-0">
            <div className="col-12 pl-0 pr-0">
              <h1>
                What is AIOps and explore how it is revolutionizing the retail
                industry by solving complex challenges?
              </h1>
            </div>
          </div>

          <div className="row about-us-page-row ml-0 mr-0">
            <div className="col-12 about-us-details p-0">
              <img
                loading="lazy"
                className="img-fluid "
                src={blog3}
                alt="blog"
              />
            </div>
          </div>

          <div className="about-us-page-details">
            <div className="row  ml-0 mr-0">
              {BlogAIOPS.map((list) => {
                return (
                  <div className="col-12 about-us-details p-0" key={list.id}>
                    <div className="about-us-desc-blog">
                      <h2>{list.title}</h2>
                      <h1>{list.subtitle}</h1>
                      <p>{list.description}</p>
                      <p>{list.description1}</p>
                      <p>{list.description2}</p>
                      <h4 className="fs-16 fw-bold-700 mt-4">
                        {list.description4}
                      </h4>
                      <h4 className="fs-16 fw-bold-700 mt-3">
                        {list.description5}
                      </h4>
                      <h4 className="fs-16 fw-bold-700 mt-3">
                        {list.description6}{" "}
                        <span>
                          <a className="fs-18" href="/contactus">
                            {list.hyperlink}
                          </a>
                        </span>
                        <span className="fs-16">{list.textelement}</span>
                      </h4>
                      {list.hasOwnProperty("watchnowImg") === true ? (
                        <>
                          <div style={btnColor} className="mt-5">
                            <a
                              className="achorhover"
                              href={`/blog/webinar-reshaping-the-retail-industry-through-AI`}
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
                        <p className="mb-0 pt-3 mx-auto fs-18 cr-pointer"></p>
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

export default InsightAIOPS;
