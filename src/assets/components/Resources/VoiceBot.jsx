import React from "react";
import { Helmet } from "react-helmet";
import blog11 from "../../images/Resources-page/blog11.png";
import CTAIMG from "../../images/Resources-page/bloginventory.png";
import Voicebotdata from "../../Data/Resources-Data/Voicebot-Data";


const VoiceBot = () => {
    const btnColor = {
        backgroundColor: "#ecac27",
        borderRadius: "50px",
        cursor: "pointer",
    };
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Explore how AI can optimize your Supply Chain and Inventory Management</title>
                <meta name="title" content="5 Ways AI Can Optimize Your Inventory Management | Amnet Digital" />
                <meta name="description" content="AI will play a pivotal role in reshaping the retail landscape from personalizing customer experiences to optimizing supply chain and inventory management." />
                <meta name="keywords" content="AI for inventory management, AI to optimize inventory management, AI solutions for inventory management, inventory management AI solutions." />
            </Helmet>
            <div className="contact-us-intro container-fluid"></div>
            <div className="container-fluid">
                <div className="center">
                    <div className="new-home-about-details row ml-0 mr-0 above-spacings">
                        <div className="col-12 pl-0 pr-0 mb-5">
                            <h1>
                                Reinventing the Voice Assistant: How Our Next-Gen AI Voice Bot is Transforming Conversational AI
                            </h1>
                        </div>
                    </div>
                    <div className="row about-us-page-row ml-0 mr-0">
                        <div className="col-12 about-us-details p-0">
                            <img
                                loading="lazy"
                                className="img-fluid mb-5 w-100"
                                src={blog11}
                                alt="blog"
                            />
                        </div>
                    </div>
                    <div className="row  ml-0 mr-0">
                        {Voicebotdata.map((list) => {
                            return (
                                <div className="col-12  p-0" key={list.id}>
                                    <p className="fs-18">{list.description1}</p>
                                    <p className="fs-18">{list.descriptionss}</p>
                           
                                    <p className="fs-24 font-weight-bold fw-bold">
                                        {list.sub_heading}
                                    </p>
                            
                                    <p className="fs-18">{list.description2}</p>
                                    <p className="fs-24 fw-bold font-weight-bold">{list.description4}</p>
                                    <p className="fs-18">{list.description5}</p>
                                    {list.hasOwnProperty("orderedlist") === true ? (
                                        <>
                                            {
                                                <ol className="pl-4">
                                                    {list.orderedlist.map((response) => {
                                                        return (
                                                            <>
                                                                <li className="fs-18 pb-3 goway-hlist">
                                                                    <span className="fs-18 fw-bold">{response.sidehead}</span>
                                                                    {response.content}
                                                                </li>

                                                            </>
                                                        );
                                                    })}
                                                </ol>
                                            }
                                        </>
                                    ) : (
                                        ""
                                    )}
                                    <p className="fs-18">{list.description7}</p>
                                    <p className="fs-22 font-weight-bold fw-bold">
                                        {list.side_heading1}
                                    </p>
                                        <p className="fs-18 "  >
                                            {list.description6}
                                        </p>

                                    <p className="fs-20 fw-bold font-weight-bold">{list.description71}</p>
                                    <p className="fs-18 ">
                                        <span className="fs-18 fw-bold font-weight-bold">{list.description8}</span>
                                        <span className="fs-18 ">
                                            {list.description9}
                                        </span>
                                    </p>
                                    <p className="fs-18 ">
                                        <span className="fs-18 fw-bold font-weight-bold">{list.description10}</span>
                                        <span className="fs-18 ">
                                            {list.description11}
                                        </span>
                                    </p>
                                    <p className="fs-24 fw-bold font-weight-bold">{list.description72}</p>
                                    <p className="fs-18">{list.description12}</p>
                                    <p className="fs-18 ">
                                        <span className="fs-18 fw-bold font-weight-bold">{list.description13}</span>
                                        <span className="fs-18 ">
                                            {list.description14}
                                        </span>
                                    </p>
                                    <p className="fs-18 ">
                                        <span className="fs-18 fw-bold font-weight-bold">{list.description15}</span>
                                        <span className="fs-18 ">
                                            {list.description16}
                                        </span>
                                    </p>
                                    <p className="fs-18 ">
                                        <span className="fs-18 fw-bold font-weight-bold">{list.description17}</span>
                                        <span className="fs-18 ">
                                            {list.description18}
                                        </span>
                                    </p>
                                    <p className="fs-18">{list.description73}</p>
                                    <p className="fs-24 fw-bold font-weight-bold">{list.description74}</p>
 
                                    <p className="fs-18">{list.description25}</p>
                                    <p className="fs-22 fw-bold font-weight-bold">{list.description26}</p>
                                    <p className="fs-18 ">
                                        <span className="fs-18 fw-bold font-weight-bold">{list.description19}</span>
                                        <span className="fs-18 ">
                                            {list.description20}
                                        </span>
                                    </p>
                                    <p className="fs-18 ">
                                        <span className="fs-18 fw-bold font-weight-bold">{list.description21}</span>
                                        <span className="fs-18 ">
                                            {list.description22}
                                        </span>
                                    </p>
                                    <p className="fs-18 ">
                                        <span className="fs-18 fw-bold font-weight-bold">{list.description23}</span>
                                        <span className="fs-18 ">
                                            {list.description24}
                                        </span>
                                    </p>
                                    <p className="fs-20 fw-bold font-weight-bold">{list.question}</p>

                                </div>
                            );
                        })}
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

export default VoiceBot;
