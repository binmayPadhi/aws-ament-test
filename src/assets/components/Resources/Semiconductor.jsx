import React from "react";
import { Helmet } from "react-helmet";
import blog8 from "../../images/Resources-page/blog_image-min.png";
import CTAIMG from "../../images/Resources-page/cta_image_with_text-min.png";
import Semiconductordata from "../../Data/Resources-Data/Semiconductor";
import Semiconductorimg from "../../images/semiconductor.jpg";


const Semiconductor = () => {
  const btnColor = {
    backgroundColor: "#ecac27",
    borderRadius: "50px",
    cursor: "pointer",
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AI-Powered Semiconductor Sales & Marketing Solution</title>
        <meta name="title" content="AI-Powered Semiconductor Sales & Marketing | Intelligent Sales Enablement" />
        <meta name="description" content="Discover how our AI-powered marketing solution transforms semiconductor sales, enhancing customer engagement, sales enablement, and data-driven decision-making." />
        <meta name="keywords" content="AI-powered semiconductor sales,
          B2B semiconductor marketing automation,
          Intelligent sales enablement platform,
          AI-driven product knowledge management,
          Predictive analytics for semiconductor industry,
          Semiconductor Sales, Predictive Analytics, Sales Enablement, Marketing Automation, AI-Driven Customer Engagement
" />
      </Helmet>
      <div className="contact-us-intro container-fluid"></div>
      <div className="container-fluid">
        <div className="center">
          <div className="new-home-about-details row ml-0 mr-0 above-spacings">
            <div className="col-12 pl-0 pr-0 mb-5">
              <h1 >
                Catalyzing Brilliance: How AI Transforms Semiconductor Sales & Marketing
              </h1>
            </div>
          </div>
          <div className="row about-us-page-row ml-0 mr-0">
            <div className="col-12 about-us-details p-0">
              <img
                loading="lazy"
                className="img-fluid mb-5 w-100"
                src={Semiconductorimg}
                alt="blog"
              />
            </div>
          </div>

          <div className="row  ml-0 mr-0">
            {Semiconductordata.map((list) => {
              return (
                <div className="col-12  p-0" key={list.id}>
                  <h2 className="fs-24 fw-bold-800 ">{list.title}</h2>
                  <h2 className="fs-23 fw-bold-600 ">{list.subtitle}</h2>
                  <h2 className="fs-21 fw-bold-600 ">{list.subordintetitle}</h2>
                  <p className="fs-19 ">{list.description50}</p>
                  <p className="fs-19 ">{list.description30}</p>
                  <p className="fs-19  ">{list.description21}</p>
                  <p className="fs-21 mt-3 fw-bold-600">
                    {list.description2}{" "}
                    <span className="fs-19">{list.textelement2}</span>
                  </p>
                  <p className="fs-19">{list.description22}</p>
                  <p className="fs-19">{list.describe25}</p>
                  <p>
                    <span className="fs-21 fw-bold-600 ">{list.title1}</span>
                  </p>
                  <p><span className="fs-19 fw-bold-600">{list.description39}</span><span className="fs-19">{list.description40}</span></p>
                  <p>
                    <span className="fs-19 fw-bold-600 ">{list.title2}</span>
                    <span className="fs-19">{list.description41}</span>
                  </p>
                  <p>
                    <span className="fs-19 fw-bold-600 ">{list.title3}</span>
                    <span className="fs-19">{list.description42}</span>
                    <p className="fs-19 ">
                    </p>
                  </p>
                  <p><span className="fs-19 fw-bold-600">{list.des23}</span><span className="fs-19 ">{list.description24}</span></p>
                  <p className="fs-19 fw-bold-600">{list.describe10}</p>
                  <p className="fs-19">{list.description25}</p>
                  <p className="fs-19 ">{list.description27}</p>
                  <p> <span className="fs-19 fw-bold-600">{list.describe}</span> <span className="fs-19 ">{list.description28}</span></p>
                  <p> <span className="fs-19 fw-bold-600">{list.describe30}</span> <span className="fs-19 ">{list.description29}</span></p>
                  <p> <span className="fs-19 fw-bold-600">{list.describe40}</span> <span className="fs-19 ">{list.description41}</span></p>
                  <p> <span className="fs-19 fw-bold-600">{list.describe42}</span> <span className="fs-19 ">{list.description42}</span></p>

                  <p className="fs-19 fw-bold-800">
                    <span className="fs-19">{list.title43}</span>
                  </p>
                  <p> <span className="fs-19 fw-bold-600">{list.describe43}</span> <span className="fs-19 ">{list.description43}</span></p>
                  <p> <span className="fs-19 fw-bold-600">{list.describe44}</span> <span className="fs-19 ">{list.description44}</span></p>
                  <p> <span className="fs-19 fw-bold-600">{list.describe45}</span> <span className="fs-19 ">{list.description45}</span></p>
                  <p> <span className="fs-19 fw-bold-600">{list.describe46}</span> <span className="fs-19 ">{list.description46}</span></p>
                  <p className="fs-21 fw-bold-600">{list.conclusion}</p>
                  <p className="fs-19 ">{list.paragraph}</p>
                  <p className="fs-19 ">{list.paragraph1}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      <div className="center-85">
        <a href="/contactus">
          <img loading="lazy" src={CTAIMG} className="w-100 mt-4" />
        </a>
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

export default Semiconductor;
