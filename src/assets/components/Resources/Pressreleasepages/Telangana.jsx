import React from "react";
import PressreleaseData from "../../../Data/Resources-Data/pressreleasetwo";
import { Helmet } from "react-helmet";
import Pressimg from "../../../images/Resources-page/pressreleasefirst.png";
import pressrelease2 from "../../../images/Resources-page/TSAwards.png";
import Driveservices from "../../../components/SubServices/Driveservices";
import Telanganadata from "../../../Data/Resources-Data/Telanganadata";
const Telangana = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Amnet Digital Named The Best AI & Data Analytics Company Of The Year 2023 </title>
                <meta name="title" content="Amnet Digital Named The Best AI & Data Analytics Company Of The Year 2023 By Business Connect Publication"></meta>
                <meta name="description" content="Amnet Digital named “The Best AI & Data Analytics Company Of The Year 2023” by Business Connect. Read the full press release here!" />
                <meta name="keywords" content="Amnet Digital, The Best AI & Data Analytics Company Of The Year 2023, Recognition Press Release, Business Connect" />
            </Helmet>
            <div className="">
                <div
                    className="sub-service-intro position-realtive"
                    style={{
                        backgroundImage: `url(${pressrelease2})`,
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
                    {Telanganadata.map((list) => {
                        return (
                            <>
                                <h1 className="press-title">{list.title}</h1>
                                <p className="press-title"><a  target="_blank" href="https://ts-msme.globallinker.com/bizforum/article/winners-of-the-telangana-state-industry-awards-2023/108813/#/overlay/signup/articleview/108813">{list.amnet}</a></p>
                                <h2 className="mt-5 fw-bold-600">{list.subtitle}</h2>
                                <p className="fs-19 mt-5">
                                    {list.paragraph}{" "}
                                </p>
                                <p className="fs-19 mt-3">
                                    {list.paragraph1}{" "}
                                </p>
                                <p className="fs-19 mt-3">
                                    {list.paragraph111}{" "}
                                </p>
                                <h2 className="fw-bold-600 mb-5 mt-5">{list.sideheading}</h2>
                                <p>
                                    <span className="fs-19 ">{list.textelement}</span>
                                </p>
                                <p>
                                    <span className="fs-19">{list.textelement1}</span>
                                </p>
                                <p>
                                    <span className="fs-19">{list.textelement2}</span>
                                </p>
                                <h2 className="fw-bold-600 mt-5">{list.sideheading1}</h2>
                                <p className="fs-19 mt-5">{list.description6}</p>

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
export default Telangana;