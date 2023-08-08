import React from "react";
import blogImg from "../../images/Resources-page/blog-amnet.jpg";
import Blog from "../../Data/Resources-Data/Blog";
import { useNavigate } from "react-router-dom";
import Letsgetstart from "../Webinars/Letsgetstart";
import { Helmet } from "react-helmet";
import Newgetstart from "../Webinars/Newgetstart";

const Insight = () => {
  let history = useNavigate();
  const btnColor = {
    backgroundColor: "#ecac27",
    borderRadius: "50px",
    cursor: "pointer",
  };

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Seven Significant ways AI is Impacting the Retail Industry | Amnet Digital</title>
        <meta name="description" content="There are numerous ways how AI in retail has impacted the picture of the retail sector. In this post, we'll explore how AI is used in 
         the retail sector along with some practical examples." />
        <meta name="keywords" content="" />
      </Helmet>
      <div className="contact-us-intro container-fluid"></div>
      <div className="container-fluid">
        <div className="center">
          <div className="new-home-about-details row ml-0 mr-0 above-spacings">
            <div className="col-12 pl-0 pr-0 mb-5">
              <h1>
                Seven Significant ways Artificial Intelligence (AI) is Impacting
                the Retail Industry
              </h1>
            </div>
          </div>

          <div className="row about-us-page-row ml-0 mr-0">
            <div className="col-12 about-us-details p-0">
              <img
                loading="lazy"
                className="img-fluid "
                src={blogImg}
                alt="blog"
              />
            </div>
          </div>

          <div className="">
            <div className="row about-us-page-row ml-0 mr-0">
              {Blog.map((list) => {
                return (
                  <div className="col-12 about-us-details p-0" key={list.id}>
                    <div className="about-us-desc-blog">
                      <h2 className="pb-2">{list.title}</h2>
                      <p>{list.description}</p>
                      <p>{list.description1}</p>
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
                        <a
                          className="achorhover"
                          href={`/webinars/reshaping-the-retail-industry-through-AI`}
                        >
                          <p className="mb-0 pt-3 mx-auto fs-18 cr-pointer">
                            <img
                              loading="lazy"
                              className="img-fluid "
                              src={list.description2}
                              alt="view webinar image"
                            />
                          </p>
                        </a>
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

export default Insight;
