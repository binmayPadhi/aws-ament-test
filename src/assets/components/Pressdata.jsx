import React from "react";
import Datapress from "../Data/Privacypolicy-Data/Datapress";
import { Helmet } from "react-helmet";
import Pressimg from "../images/HomePage/press-releaseimg.png";
import Driveservices from "./SubServices/Driveservices";
const Pressdata = () =>{
    return(
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
                 Press Release
                </h2>
                <p className="fw-bold-400 fs-18 text-white mb-5 mr-5 mt-4">
                Amnet Digital named the "Best AI & Data Analytics Company Of The Year 2023" by Business Connect
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12"></div>
            </div>
          </div>
          <div className="bottom-img-about w-100">
            
          </div>
        </div>
      </div>
      <div className="mt-5 w-80 mx-auto">
         {Datapress.map((list) =>{
            return(
                <>
                    <h1 className="press-title">{list.title}</h1>
                    <h2 className="mt-5 fw-bold-600">{list.subtitle}</h2>
                    <p className="fs-19 mt-5">
                    {list.paragraph}{" "}
                    <span className="fs-18 fw-bold-600">
                        {list.des}
                    </span>
                    <span className="fs-19">{list.textelement}</span>
                  </p>
                  <p className="fs-19">
                    {list.descri}{" "}
                    <span>
                      <a className="fs-18" target="_blank" href={list.link}>
                        {list.ds}
                      </a>
                    </span>
                    <span className="fs-19">{list.textelem}</span>
                  </p>
                  <p className="fs-18">{list.description2}</p>
                  <p className="fs-19">
                    {list.descr}{" "}
                    <span>
                      <a className="fs-18" target="_blank" href={list.links}>
                        {list.dst}
                      </a>
                    </span>
                    <span className="fs-19">{list.textel}</span>
                  </p>
                  <p className="fs-19">{list.description3}</p>
                  <p className="fs-19">
                    {list.paragraph1}{" "}
                    <span className="fs-18 fw-bold-600">
                        {list.des1}
                    </span>
                    <span className="fs-19">{list.textelement1}</span>
                    <span className="fs-19 fw-bold-800">{list.textbold}</span>
                  </p>
                  <p className="fs-19">
                    {list.paragraph2}{" "}
                    <span>
                      <a className="fs-18" target="_blank" href={list.links2}>
                        {list.dst2}
                      </a>
                    </span>
                    <span className="fs-18">{list.des2}</span>
                    <span className="fs-19 fw-bold-800">{list.textelement2}</span>
                    <span className="fs-18">{list.des3}</span>
                  </p>
                
                 <p className="fs-18">{list.description4}
                 <span>
                 <a className="fs-18" target="_blank" href={list.links3}>
                        {list.dst3}
                      </a>
                 </span>
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
export default Pressdata;