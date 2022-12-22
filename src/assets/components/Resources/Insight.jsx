import React from "react";
import blogImg from "../../images/Resources-page/blog-amnet.jpg";
import Blog from "../../Data/Resources-Data/Blog";
import { useHistory } from "react-router-dom";

const Insight = () => {
  let history = useHistory();
  const btnColor = {
    color: "#ffffff",
    backgroundColor: "#ecac27",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    display: "table",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const navigateTothankspage = () => {
    history.push(`/thanks-webinar`);
  };
  return (
    <>
      <div className="contact-us-intro container-fluid"></div>
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
                return (
                  <div className="col-12 about-us-details p-0" key={list.id}>
                    <div className="about-us-desc-blog">
                      <h2>{list.title}</h2>
                      <p>{list.description}</p>
                      <p>{list.description1}</p>
                      {list.hasOwnProperty("description2") === true ? (
                        <p
                          style={btnColor}
                          className="mb-0 mt-2 mx-auto fs-18"
                          onClick={navigateTothankspage}
                        >
                          {list.description2}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <p
              style={btnColor}
              className="mb-0 mt-2 mx-auto fs-18"
              onClick={navigateTothankspage}
            >
              VIEW THE WEBINAR
            </p>
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

export default Insight;
