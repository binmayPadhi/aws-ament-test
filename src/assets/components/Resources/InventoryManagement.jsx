import React from "react";
import blog3 from "../../images/Resources-page/blog3.png";
import Scale from "../../Data/Resources-Data/ScaleAI";
import { useNavigate } from "react-router-dom";
import Letsgetstart from "../Webinars/Letsgetstart";
import blog6 from "../../images/Resources-page/blog6.jpg";
import { Helmet } from "react-helmet";
import Newgetstart from "../Webinars/Newgetstart";
import ImageAnnotation from "../../Data/Resources-Data/ImageAnnotation";
import blog11 from "../../images/Resources-page/blog11.png";
import CTAIMG from "../../images/Resources-page/bloginventory.png";
import AboutUsBG from "../../images/Resources-page/cta_image_wo_text-min.png";
import Forecast from "../../Data/Resources-Data/Forecasting";
import Generative from "../../Data/Resources-Data/GenerativeAI";
import Inventorydata from "../../Data/Resources-Data/Inventorydata";


const InventoryManagement = () => {
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
                            5 Ways AI can Enhance and Optimize your Inventory Management
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
                        {Inventorydata.map((list) => {
                            return (
                                <div className="col-12  p-0" key={list.id}>
                                    <p className="fs-18">{list.description1}</p>
                                    <p className="fs-18 ">
                                        {list.description}{" "}
                                        <span>
                                            <a className="fs-18 fw-bold font-weight-bold" target="_blank" href={list.link}>
                                                {list.des}
                                            </a>
                                        </span>
                                        <span className="fs-18">{list.textelement}</span>
                                    </p>
                                    <p className="fs-18">
                                        {list.description50}{" "}
                                        <span>
                                            <a className="fs-18 fw-bold font-weight-bold" target="_blank" href={list.link10}>
                                                {list.des20}
                                            </a>
                                        </span>
                                        <span className="fs-18">{list.textelement10}</span>
                                    </p>
                                    <p className="fs-18">{list.description2}</p>                                  
                                    <h2 className="fs-24 fw-bold font-weight-bold ">{list.subtitle}</h2>
                                    <p className="fs-18">{list.description4}</p>
                                    <p className="fs-20 font-weight-bold fw-bold">{list.sideheading}</p>
                                    <p className="fs-18 ">                                   
                                            <p className="fs-18 fw-bold font-weight-bold"  >
                                                {list.description6}
                                           </p>                                    
                                        <span className="fs-18">{list.description7}</span>
                                    </p>
                                    <p className="fs-18">{list.description71}</p>
                                    <p className="fs-18 ">
                                        <span className="fs-18">{list.description8}</span>
                                        <span className="fs-18 fw-bold font-weight-bold">
                                            {list.descrip}
                                        </span>
                                        <span className="fs-18">{list.description60}</span>
                                    </p>                                   
                                    <p className="fs-18 ">      
                                            <p className="fs-18 fw-bold font-weight-bold" target="_blank" href={list.link}>
                                                {list.description10}
                                            </p>    
                                        <span className="fs-18">{list.description11}</span>
                                    </p>
                                    <p className="fs-18">{list.description111}</p>
                                    <p className="fs-18 ">
                                        <span className="fs-18">{list.dial}</span>
                                        <span className="fs-18 fw-bold font-weight-bold">
                                            {list.dial1}
                                        </span>
                                        <span className="fs-18">{list.dial2}</span>
                                    </p>
                                    <p className="fs-18 fw-bold font-weight-bold">{list.description12}</p>
                                    <p className="fs-18 ">
                                        <span className="fs-18">{list.dial3}</span>
                                        <span className="fs-18 fw-bold font-weight-bold">
                                            {list.dial4}
                                        </span>
                                        <span className="fs-18">{list.dial5}</span>
                                    </p>
                                    <p className="fs-18 ">
                                        <span className="fs-18">{list.dial6}</span>
                                        <span className="fs-18 fw-bold font-weight-bold">
                                            {list.dial7}
                                        </span>
                                        <span className="fs-18">{list.dial8}</span>
                                    </p>                 
                                    <p className="fs-18 ">                                 
                                            <p className="fs-18 fw-bold font-weight-bold" target="_blank" href={list.link}>
                                                {list.description14}
                                            </p>
                                    
                                        <span className="fs-18">{list.description15}</span>
                                    </p>
                                    <p className="fs-18">{list.description16}</p>
                                    <p className="fs-18 fw-bold font-weight-bold" >{list.description17}</p>
                                    <p className="fs-18">{list.description18}</p>
                                    <p>
                                        {list.hasOwnProperty("buttontxt") === true ? (
                                            <>
                                                {
                                                    <p className="">
                                                        <button className="fs-20 border-green mt-1 mb-5">
                                                            <a className="fs-20 text-white underline-text" href="/contactus">{list.buttontxt}<br/>{list.buttontxt30}</a></button>
                                                    </p>
                                                }
                                            </>
                                        ) : (
                                            ""
                                        )}
                                    </p>
                                    <p className="fs-18">{list.description25}</p>
                                    <p className="fs-18 ">
                                        <span className="fs-18" >
                                                {list.description19}       
                                        </span>
                                        <span className="fs-18 fw-bold font-weight-bold" >{list.description20}</span>
                                       
                                        <span className="fs-18">{list.description23}</span>
                                    </p>
                                    <p className="fs-18 fw-bold font-weight-bold">{list.description24}</p>
                                    <p className="fs-18 fw-bold font-weight-bold">{list.description27}</p>
                                    <p className="fs-18">{list.description26}</p>
                                    <p className="fs-18">{list.description28}</p>
                                    <p className="fs-18">{list.description29}</p>
                                    <p className="fs-18 fw-bold font-weight-bold">{list.description30}</p>
                                    <p className="fs-18">{list.description31}</p>
                                    <p className="fs-18 ">
                                        <span>
                                            <a className="fs-18 fw-bold font-weight-bold" target="_blank" href={list.link3}>
                                                {list.des32}
                                            </a>
                                        </span>
                                        <span className="fs-18">{list.textele}</span>
                                    </p>
                                    <p className="fs-18 fw-bold font-weight-bold">{list.description32}</p>
                                    <p className="fs-18">{list.description33}</p>
                                    <p className="fs-18">{list.description34}</p>
                                    <p className="fs-18 ">
                                        <span>
                                            <a className="fs-18" >
                                                {list.description35}
                                            </a>
                                        </span>
                                        <span className="fs-18  fw-bold font-weight-bold">{list.description36}</span>
                                        <span className="fs-18">{list.description37}</span>
                                    </p>
                                    <p className="fs-18 fw-bold font-weight-bold">{list.description38}</p>
                                    <p className="fs-18 ">
                                        <span>
                                            <a className="fs-18 ">
                                            {list.description39}
                                            </a>
                                        </span>
                                        <span className="fs-18 fw-bold font-weight-bold">{list.textelem}</span>
                                        <span className="fs-18">{list.description40}</span>
                                    </p>
                                    <p className="fs-18"> {list.description41}</p>
                                    <p className="fs-18"> {list.description42}</p>
                                    <p className="fs-18 ">
                                        {list.description43}
                                        <span>
                                            <a className="fs-18 fw-bold font-weight-bold" target="" href={list.link4} >
                                                {list.description44}
                                            </a>
                                        </span>
                                        <span className="fs-18  ">{list.description45}</span>                                     
                                    </p>
                                    <p className="fs-18"> {list.description46}</p>
                                    <p className="fs-18"> {list.description47}</p>       
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

export default InventoryManagement;
