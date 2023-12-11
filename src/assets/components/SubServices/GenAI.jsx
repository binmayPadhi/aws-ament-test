import React from "react";
import QuoteIcon from "../../images/About-Us-Page/Quotes.png";
import About from "../../Data/AboutUs-Data/About";
import AboutUsBG from "../../images/About-Us-Page/worker-reading-news-with-tablet.png";
import GenAIData from "../../Data/SubService-Data/GenAIData";
import Genimg from "../../images/services-images/GenAI/UseCasesBG.png";
import { useState } from "react";
import imagechange from "../../images/services-images/GenAI/Subscribe.png";
import url1 from "../../images/services-images/GenAI/vert-card_Banking.png";
import url2 from "../../images/services-images/GenAI/vert-card_Insurance.png";
import url3 from "../../images/services-images/GenAI/vert-card_Human Resource.png";
import url4 from "../../images/services-images/GenAI/vert-card_Manufacturing.png";
import url5 from "../../images/services-images/GenAI/vert-card_Retail.png";
import url6 from "../../images/services-images/GenAI/vert-card_IT.png";
import hoverUrl5 from "../../images/services-images/GenAI/vert-card_b1.png";
import hoverUrl4 from "../../images/services-images/GenAI/vert-card_b2.png";
import hoverUrl3 from "../../images/services-images/GenAI/vert-card_b3.png";
import hoverUrl6 from "../../images/services-images/GenAI/vert-card_b4.png";
import hoverUrl1 from "../../images/services-images/GenAI/vert-card_b5.png";
import hoverUrl2 from "../../images/services-images/GenAI/vert-card_b6.png";
import "../../CSS/GenAI.css";
import backgroundimage from "../../images/services-images/GenAI/Heading-image.png";
const GenAI = () => {
    const [selectedId, setId] = useState("");
    const hightlightText = (id) => {
        setId(id);
    };

    const UnhightlightText = () => {
        setId("");
    };

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const defaultImages = [url5,  url4, url6, url1, url3, url2,];
    const hoverImages = [ hoverUrl5, hoverUrl4, hoverUrl6,hoverUrl1,  hoverUrl3, hoverUrl2,];

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    return (
        <>
            <div
                className="sub-service-intro-genai position-realtive"
                style={{
                    backgroundImage: `url(${backgroundimage})`,
                    backgroundAttachment: "scroll",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100%",
                }}
            >
                {/* <div className="fs-35 text-white position-absolute top-0">
                            <Navbar navChange={navColor} />
                       </div> */}
                <div className="w-85 mx-auto">
                    <div className="text-center-img">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <h2
                                    className="fw-bold-600 text-white fs-35 text-capitalize"
                                    data-text="Your Tech Innovation Catalyst"
                                >
                                    Generative AI Solutions For Everyone
                                </h2>
                                <p className="fw-bold-400 fs-16 text-white mb-5 mr-5 mt-4">
                                    Harness Generative AI, Large Language Models (LLMs), Conversational
                                    AI, and ChatGPT to elevate customer and employee experiences,
                                    achieve technological and operational excellence, and deploy
                                    intelligent custom bots/virtual assistants with automation, digital self
                                    service, and 24/7 customer support.
                                </p>
                                <button
                                    type="button"    
                                >
                                    <a href="/contactus" className="fw-bold-700 fs-14 px-4 py-3 text-white bg-grey d-table rounded-1 border-rad cr-pointer">
                                    Talk to an Expert
                                    </a>
                                </button>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12"></div>
                        </div>
                    </div>
                    <div className="bottom-img-about w-100">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <p className="fs-24 fw-bold-600 text-white">Gen AI Services</p>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-90 mx-auto">
                <div className="w-85 mx-auto top-spacing">
                    <h1 className="text-center mt-5 fw-bold-600 mb-3">Galvanize your Teams for Business Success with Generative AI</h1>
                    <p className="fs-15 text-center">We guide businesses in developing and deploying digital-trusted Generative AI solutions to mitigate technology
                        risks, lower operational costs, and deliver greater customer experiences. Also, with the right blend of Gen AI +
                        custom-built LLM models, you can accelerate ROI and achieve new levels of success.</p>
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <div className="gradient-green-line mt-5"></div>
                </div>
                <div className="w-85 mx-auto">
                    <h1 className="text-center mt-5 fw-bold-600 mb-3">Unlock Revenue Growth. Realize Value. Light up New Opportunities.</h1>
                    <p className="fs-16 text-center bottom-spacing">We guide your business in the safe and responsible deployment of Generative AI and Large Language Models
                        (LLMs), adhering to governance, risk, and compliance (GRC) practices. We provide comprehensive Gen AI
                        services and solutions, establishing a scalable tech discipline. Partner with Amnet Digital to develop a
                        comprehensive strategy, including prudent data models, a solid business case, and a concrete Generative AI
                        roadmap, to accelerate innovation.</p>
                </div>
            </div>
            <div className="">
                <div
                    className="sub-service-intro position-realtive"
                    style={{
                        backgroundImage: `url(${Genimg})`,
                        backgroundAttachment: "scroll",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "100%",
                        height: "100%",
                        paddingBottom: '40px',
                        paddingTop: '30px',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                    }}
                >
                       <h1 className="text-center mt-5  text-white mb-5 gen-font">GEN AI USE CASES</h1>
                    <div className="row w-90 mx-auto">
                    {defaultImages.map((url, index) => (
                        <div className="col-lg-4">
                                <img
                                className="image-size"
                                    key={index}
                                    src={hoveredIndex === index ? hoverImages[index] : defaultImages[index]}
                                    alt={Image}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                />
                                 </div>
                            ))}
                       
                    </div>
                </div>
            </div>

            <div className="w-90 mx-auto">
                <div className="row pt-5">
                    <h1 className="fs-34 fw-bold-600 text-center pb-5 pt-5">Why choose Amnet Digital as your Gen AI partner?</h1>
                    {GenAIData.genfirstdata.map((list) => {
                        return (
                            <div className="col-lg-4 text-center pt-5">
                                <img src={list.icon} className="w-25 pb-5" />
                                <h1 className="fs-18 fw-bold-800 pb-4">{list.title}</h1>
                                <p className="fs-16 ">{list.paragraph}</p>
                            </div>

                        )
                    })}
                </div>
            </div>

            <div className="grey-bg">
                <div className="case-studies-new w-90 mx-auto ">
                    <h1 className="section-title below-spacings  paddin-space" style={{ marginTop: "60px" }}>
                        Success Stories
                    </h1>
                    <div className="row mx-0  new-case-studies-row text-left pb-5">
                        {GenAIData.CaseStudiesSectionData.map((list) => {
                            return (
                                <div
                                    className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mb-4 d-flex align-items-strech"
                                    key={list.id}
                                >
                                    <div className="card animation-card-image  box-shadow">
                                        <div className="card-header border-0 bgc-white p-0">
                                            <img
                                                src={list.caseStudiesIMG}
                                                alt={list.caseStudiesTitle}
                                                className="blog_images"
                                            />
                                        </div>
                                        <div className="card-body propensity-modelling pb-2">
                                            <h5 className="card-body-heading">
                                                {list.caseStudiesTitle}
                                            </h5>
                                            <p className="card_body_description">
                                                {list.caseStudiesDesc}
                                            </p>
                                        </div>
                                        <div className="card-footer border border-top-0 border-bottom-0 text-left border-left-0 border-right-0 bgc-white">
                                            <p>
                                                <a
                                                    className="anchor_styles"
                                                    href={`./casestudies#${list.id}`}
                                                >{`Learn More ->`}</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>
            <div className="row w-90 mx-auto new-case-studies-row above-spacings">
                <h1 className="fs-40 fw-bold-600 text-center bottom-spacing">What's New?</h1>
                {GenAIData.carddetails.map((list) => {
                    return (
                        <div
                            className="col-lg-4 col-md-6 col-sm-12 col-xs-12 cr-pointer highlight-text d-flex align-items-strech mb-4"
                            key={list.id}
                            //   onClick={() => {
                            //     navigateTowebinarspage(list.id);
                            //   }}
                            onMouseEnter={() => {
                                hightlightText(list.id);
                            }}
                            onMouseLeave={() => {
                                UnhightlightText();
                            }}
                        >
                            <div className="card animation-card-image mr-4 box_shadow">
                                <a
                                    className="anchor_styles achorhover"
                                    href={`/blogs/${list.id}`}
                                >
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
                                        <p className="mb-2 anchor_styles">{`Read More ->`}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div
                className="position-relative mt-6 mb-6 img-fluid"
                style={{
                    backgroundImage: `url(${imagechange})`,
                    backgroundAttachment: "scroll",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "550px",
                }}
            >
                <div class="card-overlay"></div>
                <div className="text-center-img">
                    <div className="w-90 mx-auto pb-8">
                        <div className="row">
                            <div className="col-lg-9 col-sm-12">
                        <p className="letpara text-left pt-8 pb-3">Generative AI For Everyone!</p>
                        <p className="content-text fs-18 text-left pb-3">
                            Achieve business agility, continuity, and credibility by putting Generative AI to
                            work for success. Navigate your business growth in lengths and deliver
                            remarkable customer experiences with Amnet Digital's Generative AI solutions.
                        </p>
                    
                        <p className="d-flex flex-row justify-content-start pt-4">
                            <a href="/contactus">
                                <button className="current-openings fs-16 fw-bold-600">
                                    Talk to our Expert
                                </button>
                            </a>
                        </p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GenAI;
