import React, { useState } from "react";
import blogImg from "../../images/HomePage/blog_banner.png";
// import "../../CSS/Insight.css";
import Letsgetstart from "../Webinars/Letsgetstart";
import { useNavigate } from "react-router-dom";
import Insightdata from "../../Data/Resources-Data/Insightdata";

const Insighthome = () => {
  const history = useNavigate();
  const btnColor = {
    backgroundColor: "#ecac27",
    borderRadius: "100px",
    cursor: "pointer",
  };

  const navigateTothankspage = () => {
    history(`/blog/webinar-reshaping-the-retail-industry-through-AI`);
  };

  const navigateTowebinarspage = (id) => {
    history(`/blog/${id}`);
  };

  const [selectedId, setId] = useState("");
  const hightlightText = (id) => {
    setId(id);
  };

  const UnhightlightText = () => {
    setId("");
  };
  return (
    <>
      <div className="bg-insights mb-0">
        <div className="mt-5">
          <div
            className="sub-service-intro container-fluid"
            style={{
              backgroundImage: `url(${blogImg})`,
              backgroundAttachment: "scroll",
              backgroundRepeat: "no-repeat",
              margintop: "60px",
              backgroundSize: "cover",
            }}
          >
            <div className="bottom-img-insight w-90">
              <div className="w-90 mx-auto">
                <p className="fs-24 fw-bold-600 text-white">Blogs</p>
              </div>
            </div>
          </div>
        </div>

        <>
          {/* <!--CASE STUDIES SECTION--> */}
          <div className="row w-90 mx-auto new-case-studies-row ">
            {Insightdata.carddetails.map((list) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 col-xs-12 cr-pointer highlight-text d-flex align-items-strech mb-4"
                  key={list.id}
                  onClick={() => {
                    navigateTowebinarspage(list.id);
                  }}
                  onMouseEnter={() => {
                    hightlightText(list.id);
                  }}
                  onMouseLeave={() => {
                    UnhightlightText();
                  }}
                >
                  <div className="card animation-card-image mr-4 d-flex align-items-strech box_shadow">
                    <div className="card-header border-0 bgc-white p-0">
                      <img
                        src={list.image}
                        alt={list.title}
                        className="blog_images"
                      />
                    </div>
                    <div className="card-body propensity-modelling height-auto margin pb-2">
                      <h3 className="color-date">{list.date}</h3>
                      <h5 className="card-body-heading pb-0 pt-0">
                        {list.title}
                      </h5>
                      <p className="card_body_description">
                        {list.description}
                      </p>
                    </div>
                    <div className="card-footer border-0 bgc-white">
                      <a
                        className="anchor_styles"
                        href={`/blog/${list.id}`}
                      >{`Read More ->`}</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>

        {/*Case Studies end*/}
      </div>
      {/** let gets started */}
      {/* <div>
        <Letsgetstart componentFrom={'blog1'} />
      </div> */}
      {/* NEW HOMEPAGE CAREER SECTION */}
      {/* <div
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
      </div> */}
    </>
  );
};

export default Insighthome;
