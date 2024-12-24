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
                <title> Amnet Digital named as a winner by Telangana State Awards 2023 </title>
                <meta name="title" content="Amnet Digital named as a winner by Telangana State Awards 2023"></meta>
                <meta name="description" content="Amnet Digital is honored by Telangana State Awards, affirming our commitment to deliver exceptional digital solutions with excellence." />
                <meta name="keywords" content="Industry Recognition, Best AI Services company,  Recognition." />
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