import React from "react";
import AmnetpartnerData from "../../../Data/Resources-Data/Amnetpartner";
import { Helmet } from "react-helmet";
import ADintel from "../../../images/Resources-page/AD-intel.png";
import intelpartner from "../../../images/Resources-page/Intel-Partner-Aliance-Logo.png";
import intelXoen from "../../../images/Resources-page/Intel-Xeon-Logo.png";
import openVN from "../../../images/Resources-page/Open-VN-Logo.png";
import bgimage from "../../../images/Resources-page/ad-partnership-bg.svg";
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
                   
                </div>
                <div className="mt-5 w-80 mx-auto">
                    <div className="d-flex justify-content-center">
                        <img loading="lazy" src={intelpartner} className="p-3 img-size-partner" />
                        <span><img loading="lazy" src={ADintel} className="p-3" /></span>
                    </div>
                    {AmnetpartnerData.map((list) => {
                        return (
                            <>
                                <h1 className="press-title">{list.title}</h1>
                                <p className="press-title"><a href="/">{list.amnet}</a></p>
                                <h2 className="mt-5 fw-bold-600">{list.subtitle}</h2>
                                <span className="fs-14 mt-5  fw-bold-600">
                                    {list.paragraph}{" "}
                                </span>
                                <span className="fs-14 mt-5">
                                    {list.parag}{" "}
                                </span>
                                <p className="fs-14 mt-5">
                                    {list.paragraph1}{" "}
                                </p>
                                <p className="fs-14 mt-5">
                                    {list.paragraph2}{" "}
                                </p>
                                <h2 className=" fw-bold-600 mt-4 mb-3">{list.sideheading}</h2>
                                <p>
                                    <span >
                                        <a className="fs-14 fw-bold-600" href="https://www.swiftinsights.ai/" target="_blank">{list.des}</a>
                                    </span>
                                    <span className="fs-14">{list.textelement}</span>
                                </p>
                                <p>
                                    <h2 className=" fw-bold-600 mt-4 mb-2">
                                        {list.des1}
                                    </h2>
                                </p>
                                <p className="fs-14">{list.description2}</p>
                                <p className="fs-14">
                                    <span className="fs-14 fw-bold-600">{list.boldtext}</span>
                                    <span className="fs-14">{list.textnrml1}</span>
                                </p>
                                {list.hasOwnProperty("orderedlist") === true ? (
                                    <>
                                        {
                                            <ol className="pl-4">
                                                {list.orderedlist.map((response) => {
                                                    return (
                                                        <>
                                                            <li className="fs-14 pb-3">
                                                                <span className="fs-14 fw-bold">{response.sidehead}</span>
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
                            
                            <p className="fs-14">{list.sidehead1}</p>
                            <p className="fs-14">{list.sidehead2}</p>
                                <p className="fs-14">{list.description5} <span><a className="fs-14" href="">{list.link}</a></span></p>
                                <div className="d-flex justify-content-center">
                                    <img loading="lazy" src={intelXoen} className="p-3" />
                                    <span><img loading="lazy" src={openVN} className="p-3" /></span>
                                </div>
                                <h2 className=" fw-bold-600">{list.sideheading1}</h2>
                                <p className="fs-14">{list.description6} <span><a className="fs-14" href="">{list.link1}</a></span><span className="fs-14">{list.description7}</span></p>
                                <p className="fs-14">{list.description8} <span><a className="fs-14" href="https://www.amnetdigital.com/" target="_blank">{list.link2}</a></span><span className="fs-14" >{list.description9}</span></p>
                                <p><span className="fs-14">{list.link3}</span><span><a target="_blank" href="https://www.linkedin.com/company/amnet-digital/" className="fs-14">{list.description10}</a></span></p>

                                <h2 className=" fw-bold-600 mb-4 mt-5">Press Contact</h2>
                                <h1 className="fs-14">Aniket Dey</h1>
                                <h1 className="fs-14">Marketing Analyst, Amnet Digital</h1>

                                <span className="fs-14">Email :</span><span>
                                    <a className="fs-14" target="_blank" href={list.links3}>
                                        {list.dst3}
                                    </a>
                                </span>
                                {/* <p className="fs-14">
                    {list.descr}{" "}
                    <span>
                      <a className="fs-14" target="_blank" href={list.links}>
                        {list.dst}
                      </a>
                    </span>
                    <span className="fs-14">{list.textel}</span>
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