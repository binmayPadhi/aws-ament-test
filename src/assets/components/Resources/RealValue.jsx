import React from "react";
import blog3 from "../../images/Resources-page/blog3.png";
import Scale from "../../Data/Resources-Data/ScaleAI";
import { useNavigate } from "react-router-dom";
// import "../../CSS/Insight.css";
import Letsgetstart from "../Webinars/Letsgetstart";
import blog6 from "../../images/Resources-page/blog6.jpg";
import { Helmet } from "react-helmet";
import Newgetstart from "../Webinars/Newgetstart";
import Realdata from "../../Data/Resources-Data/RealValue";
import blog7 from "../../images/Resources-page/blog7.jpg";



const RealValue = () => {
  const btnColor = {
    backgroundColor: "#ecac27",
    borderRadius: "50px",
    cursor: "pointer",
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> The real value AI can bring to your retail business | Amnet Digital</title>
        <meta name="title" content=" The real value AI can bring to your retail business - Amnet Digital" />
        <meta name="description" content="Discover the power of AI in retail. Learn how AI enhances customer understanding, pricing strategies, inventory management, and more." />
        <meta name="keywords" content="AI in the retail, AI in the retail industry, AI for retail business, AI for retail, retail business, AI for retail, AI technology for retail businesses" />
      </Helmet>
      <div className="contact-us-intro container-fluid"></div>
      <div className="container-fluid">
        <div className="center">
          <div className="new-home-about-details row ml-0 mr-0 above-spacings">
            <div className="col-12 pl-0 pr-0 mb-5">
              <h1>
                The Real Value AI Can Bring to Your Retail Business
              </h1>
            </div>
          </div>

          <div className="row about-us-page-row ml-0 mr-0">
            <div className="col-12 about-us-details p-0">
              <img
                loading="lazy"
                className="img-fluid "
                src={blog7}
                alt="blog"
              />
            </div>
          </div>


          <div className="row  ml-0 mr-0">
            {Realdata.map((list) => {
              return (
                <div className="col-12  p-0" key={list.id}>


                  <p className="fs-19 mt-5">
                    {list.description}{" "}
                    <span>
                      <a className="fs-18" target="_blank" href={list.link}>
                        {list.des}
                      </a>
                    </span>
                    <span className="fs-19">{list.textelement}</span>
                  </p>
                  <p className="fs-19 mt-5">
                    {list.description2}{" "}
                    <span>
                      <a className="fs-18" target="" href={list.link2}>
                        {list.des2}
                      </a>
                    </span>
                    <span className="fs-19">{list.textelement2}</span>
                  </p>
                  <h2 className="fs-24 fw-bold-800 ">{list.title}</h2>
                  <p className="fs-19 mt-3 ">{list.description30}</p>
                  <p className="fs-19  ">{list.description21}</p>
                  <p className="fs-19 ">{list.description22}</p>
                  <p className="fs-19 ">{list.description23}</p>
                  <p className="fs-19 ">{list.description24}</p>
                  <p className="fs-19 mt-3">
                    {list.description1}{" "}
                    <span>
                      <a className="fs-18" target="" href={list.links}>
                        {list.desc}
                      </a>
                    </span>
                    <span className="fs-19">{list.textelements}</span>
                  </p>
                  <p className="fs-19">{list.description25}</p>
                  <img src={list.image} alt={list.image} className="w-100" />
                  <p className="fs-19 ">{list.description27}</p>
                  <p className="fs-19 ">{list.description28}</p>
                  <p className="fs-19 ">{list.description29}</p>
                  <p className="fs-19 ">{list.description31}</p>
                  <p className="fs-19 fw-bold-800">
                    {list.description3}{" "}
                    <span>
                      <a className="fs-18" target="" href={list.linksto}>
                        {list.descrip}
                      </a>
                    </span>
                    <span className="fs-19">{list.textelementsof}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/** let gets started */}

      <Newgetstart componentFrom={"blog"} />


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

export default RealValue;
