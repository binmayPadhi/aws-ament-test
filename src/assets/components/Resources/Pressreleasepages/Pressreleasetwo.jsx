import React from "react";
import PressreleaseData from "../../../Data/Resources-Data/pressreleasetwo";
import { Helmet } from "react-helmet";
import Pressimg from "../../../images/Resources-page/LaunchofSI.png";
import Driveservices from "../../../components/SubServices/Driveservices";
const Pressreleasetwo = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title> Amnet Digital launches Swift Insights, AI-powered Analytics Platform | Amnet Digital </title>
                <meta name="title" content="Amnet Digital launches Swift Insights, AI-powered Analytics Platform | Amnet Digital "></meta>
                <meta name="description" content=" Amnet Digital launches Swift Insights, an AI-powered analytics platform for actionable insights and data-driven success." />
                <meta name="keywords" content="AI-Powered Analytics, Product Launch, Data Analytics, Advanced Analytics, AI press release." />
            </Helmet>
            <div className="">
                <div
                    className="sub-service-intro position-realtive"
                    style={{
                        backgroundImage: `url(${Pressimg})`,
                        backgroundAttachment: "scroll",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "100%",
                    }}
                >

                    <div className="w-85 mx-auto">
                        <div className="text-center-img">
                            <div className="row">
                                <div className="col-lg-7 col-md-7 col-sm-12">
                                    <h2
                                        className="fw-bold-600 text-white fs-35 text-capitalize"
                                        data-text="Your Tech Innovation Catalyst"
                                    >
                                        Amnet Digital announces the launch of Swift Insights, an AI-powered analytics platform
                                    </h2>

                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12"></div>
                            </div>
                        </div>
                        <div className="bottom-img-insight w-90">
                            <div className=" mx-auto">
                                <p className="fs-20 fw-bold-600 text-white">Press Release</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 w-80 mx-auto">
                    {PressreleaseData.map((list) => {
                        return (
                            <>
                                <h1 className="press-title">{list.title}</h1>
                                <p className="press-title"><a href="/">{list.amnet}</a></p>
                                <h2 className="mt-5 fw-bold-600">{list.subtitle}</h2>
                                <p className="fs-19 mt-5">
                                    {list.paragraph}{" "}
                                </p>
                                <p className="fs-19 mt-5">
                                    {list.paragraph1}{" "}
                                </p>
                                <p className="fs-18 fw-bold-600">{list.sideheading}</p>
                                <p>
                                    <span className="fs-18 fw-bold-600">
                                        {list.des}
                                    </span>
                                    <span className="fs-19">{list.textelement}</span>
                                </p>
                                <p>
                                    <span className="fs-18 fw-bold-600">
                                        {list.des1}
                                    </span>
                                    <span className="fs-19">{list.textelement1}</span>
                                </p>
                                <p>
                                    <span className="fs-18 fw-bold-600">
                                        {list.des2}
                                    </span>
                                    <span className="fs-19">{list.textelement2}</span>
                                </p>
                                <p>
                                    <span className="fs-18 fw-bold-600">
                                        {list.des3}
                                    </span>
                                    <span className="fs-19">{list.textelement3}</span>
                                </p>
                                <p>
                                    <span className="fs-18 fw-bold-600">
                                        {list.des4}
                                    </span>
                                    <span className="fs-19">{list.textelement4}</span>
                                </p>
                                <p className="fs-18">{list.description2}</p>
                                <p className="fs-19">
                                    {list.textnrml}{" "}

                                    <span className="fs-18 fw-bold-600">{list.boldtext}</span>
                                    <span className="fs-19">{list.textnrml1}</span>
                                    <span className="fs-18 fw-bold-600">{list.boldtext1}</span>
                                    <span className="fs-19">{list.textnrml2}</span>
                                    <span className="fs-18 fw-bold-600">{list.boldtext2}</span>
                                </p>
                                <p className="fs-19">
                                    {list.textnrml3}{" "}
                                    <span className="fs-18 fw-bold-600">{list.boldtext3}</span>
                                    <span className="fs-19">{list.textnrml4}</span>
                                    <span><a href="" className="fs-19"> {list.textelement5}</a></span>
                                </p>
                                <p className="fs-19">{list.description5} <span><a className="fs-19" href="">{list.link}</a></span></p>

                                <p className="fs-18 fw-bold-600">{list.sideheading1}</p>
                                <p className="fs-19">{list.description6} <span><a className="fs-19" href="">{list.link1}</a></span><span className="fs-19">{list.description7}</span></p>
                                <p className="fs-19">{list.description8} <span><a className="fs-19" href="">{list.link2}</a></span><span className="fs-19">{list.description9}</span><span><a className="fs-19" href="">{list.link3}</a></span><span className="fs-19">{list.description10}</span></p>

                                <h2 className=" fw-bold-600 mb-4 mt-5">Press Contact</h2>
                                <h1 className="fs-19">Addi Avinash Reddy</h1>
                                <h1 className="fs-19">Sr. Marketing Manager, Amnet Digital</h1>

                                <span className="fs-19">Email :</span><span>
                                        <a className="fs-18" target="_blank" href={list.links3}>
                                            {list.dst3}
                                        </a>
                                    </span>
                                <p class="mt-2">
                                    <span className="fs-19">First published on PR Newswire - </span><span><a href=""  className="fs-19">https://www.prnewswire.com/in/news-releases/amnet-digital-announces-a-launch-of-swift-insights-an-ai-powered-analytics-platform-help-businesses-make-informed-decisions-302030923.html</a></span>
                                </p>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="mt-5">
                <Driveservices />
            </div>
        </>
    )
}
export default Pressreleasetwo;