import React from "react";
import blogImg from "../../images/Resources-page/AIblog.jpg";
import Blog from "../../Data/Resources-Data/BlogAI";
import Letsgetstart from "../Webinars/Letsgetstart";
import { useNavigate } from "react-router-dom";

const InsightAI = () => {
  const history = useNavigate();
  const btnColor = {
    backgroundColor: "#ecac27",
    borderRadius: "100px",
    cursor: "pointer",
  };

  const navigateTothankspage = () => {
    history(`/blog/webinar-reshaping-the-retail-industry-through-AI`);
  };
  return (
    <>
      <div className="contact-us-intro container-fluid"></div>
      <div className="container-fluid">
        <div className="center">
          <div className="new-home-about-details row ml-0 mr-0">
            <div calssName="col-12 pl-0 pr-0">
              <h1>
              AI for Retail - Discover how AI can revolutionize the retail industry and help businesses increase sales, 
              improve customer experience, and optimize operations
              </h1>
            </div>
          </div>

          <div className="row about-us-page-row ml-0 mr-0">
            <div className="col-12 about-us-details p-0">
              <img
                loading="lazy"
                className="img-fluid"
                src={blogImg}
                alt="blog"
              />
            </div>
          </div>

          <div className="about-us-page-details">
            <div className="row about-us-page-row ml-0 mr-0">
              {Blog.map((list) => {
                return (
                  <div className="col-12 about-us-details p-0" key={list.id}>
                    <div className="about-us-desc-blog">
                      <h2>{list.title}</h2>
                      <h3 className="fs-26 fw-bold-600">{list.subheading}</h3>
                      <p>{list.description}</p>
                      <p>{list.description1}</p>
                      <p>{list.description3}</p>
                      <h3 className="fw fs-19">{list.desitalic}</h3>
                      <h4 className="fw-bold-600 fs-19">{list.desbold}</h4>
                      {list.hasOwnProperty("orderedlist") === true ? (
                        <>
                        {
                          <ol className="pl-4">
                            {
                              list.orderedlist.map(response => {
                                return(
                                  <>
                                  <li className="fs-18">{response.content}</li>
                                  </>
                                )
                              })
                            }
                          </ol>
                        
                       }
                        </>
                      ): ''}
                       
                      {list.hasOwnProperty("watchnowImg") === true ? (
                        <>
                          <div style={btnColor} className="mt-5">
                            <p
                              className="mb-0 px-4 py-3"
                              onClick={navigateTothankspage}
                            >
                              <span className="lh-1 fs-18">
                                On-Demand Webinar - See how leading Retailers
                                are embracing AI & Analytics to win in 2023 -
                                <span className="font-weight-bold fs-18 pl-1">
                                  WATCH NOW
                                </span>
                              </span>
                            </p>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {list.hasOwnProperty("description2") === true ? (
                        <p
                          className="mb-0 pt-3 mx-auto fs-18 cr-pointer"
                          onClick={navigateTothankspage}
                        >
                          <img
                            loading="lazy"
                            className="img-fluid "
                            src={list.description2}
                            alt="view webinar"
                          />
                        </p>
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
        <Letsgetstart componentFrom = {'blog1'} />
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
        <div className="new-career-section new-all-margin">
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

export default InsightAI;