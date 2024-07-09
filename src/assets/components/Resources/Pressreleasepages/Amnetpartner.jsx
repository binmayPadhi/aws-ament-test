import React from "react";
import AmnetpartnerData from "../../../Data/Resources-Data/Amnetpartner";
import { Helmet } from "react-helmet";
import ADintel from "../../../images/Resources-page/AD-intel.png";
import intelpartner from "../../../images/Resources-page/Intel-Partner-Aliance-Logo.png";
import intelXoen from "../../../images/Resources-page/Intel-Xeon-Logo.png";
import openVN from "../../../images/Resources-page/Open-VN-Logo.png";
import bgimage from "../../../images/Resources-page/Partnershipbgimg.jpg";
import Driveservices from "../../../components/SubServices/Driveservices";

const Amnetpartner = () => {
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
                        backgroundImage: `url(${bgimage})`,
                        backgroundAttachment: "scroll",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        width: "100%",
                    }}
                >
                    {/* <div className="w-85 mx-auto">
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
                    </div> */}
                </div>
                <div className="mt-5 w-80 mx-auto">
                    <div className="d-flex justify-content-center">
                        <img loading="lazy" src={intelpartner} className="p-3" />
                        <span><img loading="lazy" src={ADintel} className="p-3" /></span>
                    </div>
                    {AmnetpartnerData.map((list) => {
                        return (
                            <>
                                <h1 className="press-title">{list.title}</h1>
                                <p className="press-title"><a href="/">{list.amnet}</a></p>
                                <h2 className="mt-5 fw-bold-600">{list.subtitle}</h2>
                                <span className="fs-19 mt-5  fw-bold-600">
                                    {list.paragraph}{" "}
                                </span>
                                <span className="fs-19 mt-5">
                                    {list.parag}{" "}
                                </span>
                                <p className="fs-19 mt-5">
                                    {list.paragraph1}{" "}
                                </p>
                                <h2 className=" fw-bold-600 mt-4 mb-3">{list.sideheading}</h2>
                                <p>
                                    <span >
                                        <a className="fs-18 fw-bold-600" href="https://www.swiftinsights.ai/" target="_blank">{list.des}</a>
                                    </span>
                                    <span className="fs-19">{list.textelement}</span>
                                </p>
                                <p>
                                    <h2 className=" fw-bold-600 mt-4 mb-2">
                                        {list.des1}
                                    </h2>
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
                                <div className="d-flex justify-content-center">
                                    <img loading="lazy" src={intelXoen} className="p-3" />
                                    <span><img loading="lazy" src={openVN} className="p-3" /></span>
                                </div>
                                <h2 className=" fw-bold-600">{list.sideheading1}</h2>
                                <p className="fs-19">{list.description6} <span><a className="fs-19" href="">{list.link1}</a></span><span className="fs-19">{list.description7}</span></p>
                                <p className="fs-19">{list.description8} <span><a className="fs-19" href="https://www.amnetdigital.com/" target="_blank">{list.link2}</a></span><span className="fs-19" >{list.description9}</span></p>
                                <p><span className="fs-19">{list.link3}</span><span><a target="_blank" href="https://www.linkedin.com/company/amnet-digital/" className="fs-19">{list.description10}</a></span></p>

                                <h2 className=" fw-bold-600 mb-4 mt-5">Press Contact</h2>
                                <h1 className="fs-19">Aniket Dey</h1>
                                <h1 className="fs-19">Marketing Analyst, Amnet Digital</h1>

                                <span className="fs-19">Email :</span><span>
                                    <a className="fs-18" target="_blank" href={list.links3}>
                                        {list.dst3}
                                    </a>
                                </span>
                                {/* <p className="fs-19">
                    {list.descr}{" "}
                    <span>
                      <a className="fs-18" target="_blank" href={list.links}>
                        {list.dst}
                      </a>
                    </span>
                    <span className="fs-19">{list.textel}</span>
                  </p> */}


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
export default Amnetpartner;