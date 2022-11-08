import React from "react";
import blogImg from "../../images/Resources-page/blog-amnet.jpg";
import Blog from "../../Data/Resources-Data/Blog";
import webniarPage from "../../images/Resources-page/Blog_Image_CTA.png";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <>
      <div className="contact-us-intro container-fluid"></div>

      {/* Heading Name */}
      {/* <div className="new-home-about-details new-all-margin margin-resources-top" id="details">
                <h1>How to stay compliant with SOX requirements on Microsoft Dynamics 365</h1>
            </div> */}
      <div className="container-fluid">
        <div className="center">
          <div className="new-home-about-details row ml-0 mr-0">
            <div calssName="col-12 pl-0 pr-0">
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

          <div className="about-us-page-details">
            <div className="row about-us-page-row ml-0 mr-0">
              {Blog.map((list) => {
                console.log(list);
                return (
                  <div className="col-12 about-us-details p-0" key={list.id}>
                    <div className="about-us-desc-blog">
                      <h2>{list.title}</h2>
                      <p>{list.description}</p>
                      <p>{list.description1}</p>
                    </div>
                    {list.hasOwnProperty("image1") === true ? (
                      <div className="row about-us-page-row ml-0 mr-0">
                        <div className="col-12 about-us-details p-0">
                          <Link
                            to={`/webinar-reshaping-the-retail-industry-through-AI`}
                            className="fs-10 d-line-block pl-1"
                            target="_blank"
                          >
                            <img
                              loading="lazy"
                              className="img-fluid cr-pointer"
                              src={webniarPage}
                              alt="webniar_page"
                            />
                          </Link>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="row about-us-page-row ml-0 mr-0">
            <div className="col-12 about-us-details p-0">
              <Link
                to={`/webinar-reshaping-the-retail-industry-through-AI`}
                className="fs-10 d-line-block pl-1"
                target="_blank"
              >
                <img
                  loading="lazy"
                  className="img-fluid cr-pointer"
                  src={webniarPage}
                  alt="webniar_page"
                />
              </Link>
            </div>
          </div>
        </div>
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

export default Resources;
