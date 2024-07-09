import React from "react";
import blog3 from "../../images/Resources-page/blog3.png";
import Scale from "../../Data/Resources-Data/ScaleAI";
import { useNavigate } from "react-router-dom";
// import "../../CSS/Insight.css";
import Letsgetstart from "../Webinars/Letsgetstart";
import blog6 from "../../images/Resources-page/blog6.jpg";
import { Helmet } from "react-helmet";
import Newgetstart from "../Webinars/Newgetstart";
import ImageAnnotation from "../../Data/Resources-Data/ImageAnnotation";
import blog8 from "../../images/Resources-page/blog_image-min.png";
import CTAIMG from "../../images/Resources-page/cta_image_with_text-min.png";
import AboutUsBG from "../../images/Resources-page/cta_image_wo_text-min.png";


const ImageVideoAnnotation = () => {
  const btnColor = {
    backgroundColor: "#ecac27",
    borderRadius: "50px",
    cursor: "pointer",
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Medical Image / Video Data Annotation Services – Amnet Digital</title>
        <meta name="title" content="Medical Image / Video Data Annotation Provider | Amnet Digital" />
        <meta name="description" content="GenAI, Machine Learning, Deep Learning, and Image Annotation have the power to
transform the healthcare industry to deliver better patient outcomes." />
        <meta name="keywords" content="medical data annotation services, medical image annotation services, medical
video annotation services, data labeling services, data annotation" />
      </Helmet>
      <div className="contact-us-intro container-fluid"></div>
      <div className="container-fluid">
        <div className="center">
          <div className="new-home-about-details row ml-0 mr-0 above-spacings">
            <div className="col-12 pl-0 pr-0 mb-5">
              <h1 >
              Medical Image <span className="fs-30">/ </span>Video Data Annotation: How to go about it?
              </h1>
            </div>
          </div>
          <div className="row about-us-page-row ml-0 mr-0">
            <div className="col-12 about-us-details p-0">
              <img
                loading="lazy"
                className="img-fluid mb-5 w-100"
                src={blog8}
                alt="blog"
              />
            </div>
          </div>


          <div className="row  ml-0 mr-0">
            {ImageAnnotation.map((list) => {
              return (
                <div className="col-12  p-0" key={list.id}>
                  {/* <p className="fs-19 mt-5">
                    {list.description}{" "}
                    <span>
                      <a className="fs-18" target="_blank" href={list.link}>
                        {list.des}
                      </a>
                    </span>
                    <span className="fs-19">{list.textelement}</span>
                  </p> */}

                  <h2 className="fs-24 fw-bold-800 ">{list.title}</h2>
                  <h2 className="fs-23 fw-bold-600 ">{list.subtitle}</h2>
                  <h2 className="fs-21 fw-bold-600 ">{list.subordintetitle}</h2>   
                  <p className="fs-19 ">{list.description50}</p>
                  <p className="fs-19 ">{list.description30}</p>
                  <p className="fs-19  ">{list.description21}</p>
                  <p className="fs-19 mt-3">
                    {list.description2}{" "}
                    <span>
                      <a className="fs-18" target="" href={list.link2}>
                        {list.des2}
                      </a>
                    </span>
                    <span className="fs-19">{list.textelement2}</span>
                  </p>
                  <p className="fs-19">{list.description22}</p>
                  <p>
                    <span className="fs-21 fw-bold-600 ">{list.title1}</span>
                    <span className="fs-19">{list.description40}</span>
                  </p>
                  <p>
                    <span className="fs-21 fw-bold-600 ">{list.title2}</span>
                    <span className="fs-19">{list.description41}</span>
                  </p>
                  <p>
                    <span className="fs-21 fw-bold-600 ">{list.title3}</span>
                    <span className="fs-19">{list.description42}</span>
                    <p className="fs-19 ">
                    </p>
                    {list.hasOwnProperty("buttontxt") === true ? (
                      <>
                        {
                          <p className="mt-5 mb-3">
                          <button className="fs-20 border-green ">
                            <a className="fs-20 text-white underline-text" href="/contactus">{list.buttontxt}</a></button>
                        </p>
                        }
                      </>
                    ) : (
                      ""
                    )}
                    {list.hasOwnProperty("buttontxt2") === true ? (
                      <>
                        {
                          <p className="mt-5 mb-3">
                            <button className="fs-20 border-green ">
                              <a className="fs-20 text-white underline-text" href="/contactus">{list.buttontxt2}</a></button>
                          </p>
                        }
                      </>
                    ) : (
                      ""
                    )}
                  </p>
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
                  <img loading="lazy" src={list.image} alt={list.image} className="w-100" />
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

      <div className="center-85">
        <a href="/contactus">
          <img loading="lazy" src={CTAIMG} className="w-100 mt-4" />
        </a>
      </div>
   


      {/** let gets started */}
      <div className="center-85">
      {/* <div
        className="sub-CTA-intro position-realtive"
        style={{
          backgroundImage: `url(${AboutUsBG})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      > */}
        {/* <div className="fs-35 text-white position-absolute top-0">
          <Navbar navChange={navColor} />
        </div> */}
        {/* <div className="w-85 mx-auto">
          <div className="text-center-img-CTA">
            <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12"></div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <h2
                  className="fw-bold-600 text-white fs-35 text-capitalize"
                  data-text="Your Tech Innovation Catalyst"
                >
                  Powering Businesses To Achieve More
                </h2>
                <p className="fw-bold-400 fs-16 text-white mb-5 mr-5 mt-4">
                  At Amnet Digital, our focus is to infuse Data, Analytics & AI that enables clients to realize the higher value of their digital transformation initiatives and drive positive business impact.
                </p>
                <button
                  type="button"
                  className="fw-bold-700 fs-14 px-4 py-3 text-white bg-grey d-table rounded-1 cr-pointer"
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>
          <div className="bottom-img-about w-100">
            <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12"></div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <p className="fs-24 fw-bold-600 text-white">About Us</p>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
      </div>
      {/* <Newgetstart componentFrom={"blog"} /> */}


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

export default ImageVideoAnnotation;
