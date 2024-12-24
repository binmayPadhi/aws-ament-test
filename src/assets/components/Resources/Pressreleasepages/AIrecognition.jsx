import React from "react";
import PressreleaseData from "../../../Data/Resources-Data/pressreleasetwo";
import { Helmet } from "react-helmet";
import Pressimg from "../../../images/Resources-page/pressreleasefirst.png";
import pressrelease5 from "../../../images/Press-release-latest-bg.png";
import pressrelease6 from "../../../images/press-latest-small-bg.png";
import Driveservices from "../../../components/SubServices/Driveservices";
import Aidata from "../../../Data/Resources-Data/AIrecognition";
const AIrecognition = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title> Leading Generative AI & Chatbot Solutions 2024 | Amnet Digital </title>
                <meta name="title" content="Leading Generative AI & Chatbot Solutions 2024 | Amnet Digital"></meta>
                <meta name="description" content="Amnet Digital is being awarded for excellence in Generative AI and Chatbot services by Insight Success, transforming industries with innovative technology. Explore our solutions." />
                <meta name="keywords" content="Generative Solutions Provider, Chatbot Solutions, Gen AI, Top Chatbot Solutions India, Leading AI Technology Provider." />
            </Helmet>
            <div className="">
                <div
                    className=" position-realtive"    
                >
                   <img src={pressrelease5} className="w-100 d-none d-lg-block" />
                   <img src={pressrelease6} className="w-100 d-lg-none h-600" />
                </div>
                </div>
                <div className="mt-5 w-80 mx-auto">
                    {Aidata.map((list) => {
                        return (
                            <>
                                <h2 className=" top-space fw-bold-600">{list.subtitle}</h2>
                                <p className="mt-5" >
                                  <span className="fs-19 fw-bold-600 mt-5">{list.para}</span>
                                   <span className="fs-19 mt-5">   {list.paragraph}{" "}  </span> 
                                </p>
                                <p className="fs-19 mt-5">
                                    {list.paragraph1}{" "}
                                </p>
                                <p className="mt-5">
                                <span className="fs-19 fw-bold-600 mt-5">{list.sub}</span>
                                <span className="fs-19 mt-5"> {list.paragraph2}{" "}</span>
                                </p>
                                
                                <p className="fs-19 mt-5">
                                    {list.paragraph111}{" "}
                                </p>
                                <h2 className="fw-bold-600  mt-5">{list.sideheading}</h2>
                                <p className="mt-4 fs-19">
                                   {list.textelement}
                                </p>

                                <h2 className="fw-bold-600 mt-5">{list.sideheading1}</h2>
                                <p className="fs-19 mt-4">{list.description6}</p>

                                <h2 className=" fw-bold-600 mb-4 mt-5">Press Contact</h2>
                                <h1 className="fs-19">Aniket Dey</h1>
                                <h1 className="fs-19">Marketing Analyst, Amnet Digital</h1>

                                <span className="fs-19">Email :</span><span>
                                        <a className="fs-18" target="_blank" href={list.links3}>
                                            {list.dst3}
                                        </a>
                                    </span>
                                <p class="mt-2">
                                    <span className="fs-19">Article : </span><span><a target="_blank" href="https://magazines.insightssuccess.in/2024/indias-most-generative-ai-and-chatbot-service-providers-to-follow-2024-may2024/#page=18"  className="fs-19">https://magazines.insightssuccess.in/2024/indias-most-generative-ai-and-chatbot-service-providers-to-follow-2024-may2024/#page=18</a></span>
                                </p>                            

                            </>
                        )
                    })}
                </div>
            
            <div className="mt-5">
                <Driveservices />
            </div>
        </>
    )
}
export default AIrecognition;