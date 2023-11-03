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
import blog9 from "../../images/Resources-page/blog9.png";
import CTAIMG from "../../images/Resources-page/CTAImage.png";
import AboutUsBG from "../../images/Resources-page/cta_image_wo_text-min.png";
import Forecast from "../../Data/Resources-Data/Forecasting";


const Forecasting = () => {
    const btnColor = {
        backgroundColor: "#ecac27",
        borderRadius: "50px",
        cursor: "pointer",
    };
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Foster Supply Chain Planning Decisions with Actionable Demand Forecasting Insights</title>
                <meta name="title" content="Foster Supply Chain Planning Decisions with Actionable Demand Forecasting Insights" />
                <meta name="description" content="Master demand forecasting methods for sales optimization. Explore techniques, technologies & strategies, and uplift your sales performance." />
                <meta name="keywords" content="demand planning services, demand forecasting services provider, sales performance dashboards, optimize inventory operations, demand forecasting methods, products demand forecasting dashboards, supply chain planning decisions, demand forecasting insights" />
            </Helmet>
            <div className="contact-us-intro container-fluid"></div>
            <div className="container-fluid">
                <div className="center">
                    <div className="new-home-about-details row ml-0 mr-0 above-spacings">
                        <div className="col-12 pl-0 pr-0 mb-5">
                            <h1 >
                                Foster Supply Chain Planning Decisions with Actionable Demand Forecasting Insights
                            </h1>
                        </div>
                    </div>
                    <div className="row about-us-page-row ml-0 mr-0">
                        <div className="col-12 about-us-details p-0">
                            <img
                                loading="lazy"
                                className="img-fluid mb-5 w-100"
                                src={blog9}
                                alt="blog"
                            />
                        </div>
                    </div>

                    <div className="row  ml-0 mr-0">
                        {Forecast.map((list) => {
                            return (
                                <div className="col-12  p-0" key={list.id}>

                                    <p className="fs-18 mt-5">
                                        {list.description}{" "}
                                        <span>
                                            <a className="fs-18 fw-bold font-weight-bold" target="_blank" href={list.link}>
                                                {list.des}
                                            </a>
                                        </span>
                                        <span className="fs-18">{list.textelement}</span>
                                    </p>
                                    <p className="fs-18">{list.description1}</p>
                                    <p className="fs-18">{list.description2}</p>
                                    <p className="fs-18">{list.description3}</p>
                                    <h2 className="fs-24 fw-bold font-weight-bold ">{list.subtitle}</h2>
                                    <p className="fs-18">{list.description4}</p>
                                    <p className="fs-18 mt-5">
                                        {list.description5}{" "}
                                        <span>
                                            <a className="fs-18 fw-bold font-weight-bold" target="_blank" href={list.link}>
                                                {list.des2}
                                            </a>
                                        </span>
                                        <span className="fs-18">{list.textelement1}</span>
                                    </p>
                                    <p className="fs-18 ">
                                        <span>
                                            <a className="fs-18 fw-bold font-weight-bold" target="_blank" href={list.link}>
                                                {list.description6}
                                            </a>
                                        </span>
                                        <span className="fs-18">{list.description7}</span>
                                    </p>
                                    <p className="fs-18 ">
                                        <span>
                                            <a className="fs-18 fw-bold font-weight-bold" target="_blank" href={list.link}>
                                                {list.add}
                                            </a>
                                        </span>
                                        <span className="fs-18">{list.description9}</span>
                                    </p>
                                    <p>
                                        {list.hasOwnProperty("buttontxt") === true ? (
                                            <>
                                                {
                                                    <p>
                                                        <button className="fs-20 border-green mt-1 mb-5">
                                                            <a className="fs-20 text-white underline-text" href="/contactus">{list.buttontxt}<br/>{list.buttontxt2}</a></button>
                                                    </p>
                                                }
                                            </>
                                        ) : (
                                            ""
                                        )}
                                    </p>
                                    <p className="fs-18 ">
                                        <span>
                                            <a className="fs-18 fw-bold font-weight-bold" target="_blank" href={list.link}>
                                                {list.description10}
                                            </a>
                                        </span>
                                        <span className="fs-18">{list.description11}</span>
                                    </p>
                                    <p className="fs-18 ">
                                        <span>
                                            <a className="fs-18 fw-bold font-weight-bold" target="_blank" href={list.link}>
                                                {list.description12}
                                            </a>
                                        </span>
                                        <span className="fs-18">{list.description13}</span>
                                    </p>
                                    <p className="fs-18 ">
                                        <span>
                                            <a className="fs-18 fw-bold font-weight-bold" target="_blank" href={list.link}>
                                                {list.description14}
                                            </a>
                                        </span>
                                        <span className="fs-18">{list.description15}</span>
                                    </p>
                                    <p className="fs-18">
                                        {list.description50}{" "}
                                        <span>
                                            <a className="fs-18 fw-bold font-weight-bold" target="_blank" href={list.link}>
                                                {list.des5}
                                            </a>
                                        </span>
                                        <span className="fs-18">{list.textelement5}</span>
                                    </p>
                                    {/* <p className="fs-18 ">{list.description50}</p>
                                    <p className="fs-18 ">{list.description30}</p>
                                    <p className="fs-18  ">{list.description21}</p> */}

                                    <p className="fs-18 ">
                                        <span>
                                            <a className="fs-18 fw-bold font-weight-bold" target="_blank" href={list.link}>
                                                {list.description20}
                                            </a>
                                        </span>
                                        <span className="fs-18">{list.description21}</span>
                                    </p>
                                    <p className="fs-18 ">
                                        <span>
                                            <a className="fs-18 fw-bold font-weight-bold" target="_blank" href={list.link}>
                                                {list.description22}
                                            </a>
                                        </span>
                                        <span className="fs-18">{list.description23}</span>
                                    </p>
                                   
                                    <p className="fs-18 ">
                                        <span>
                                            <a className="fs-18 fw-bold font-weight-bold" target="_blank" href={list.link}>
                                                {list.description24}
                                            </a>
                                        </span>
                                        <span className="fs-18">{list.description25}</span>
                                    </p>
                                    <p className="fs-18">{list.description60}</p>
                                   
                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>

            <div className="center-85">
                <a href="/contactus">
                    <img src={CTAIMG} className="w-100 mt-4" />
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
                  className="fw-bold font-weight-bold-600 text-white fs-35 text-capitalize"
                  data-text="Your Tech Innovation Catalyst"
                >
                  Powering Businesses To Achieve More
                </h2>
                <p className="fw-bold font-weight-bold-400 fs-16 text-white mb-5 mr-5 mt-4">
                  At Amnet Digital, our focus is to infuse Data, Analytics & AI that enables clients to realize the higher value of their digital transformation initiatives and drive positive business impact.
                </p>
                <button
                  type="button"
                  className="fw-bold font-weight-bold-700 fs-14 px-4 py-3 text-white bg-grey d-table rounded-1 cr-pointer"
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
                <p className="fs-24 fw-bold font-weight-bold-600 text-white">About Us</p>
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

export default Forecasting;
