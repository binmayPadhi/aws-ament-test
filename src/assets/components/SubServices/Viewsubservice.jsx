import React, { useEffect, useState, Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import services from "../../Data/Services-Data/ExploreservicesData";
import thinborder from "../../images/Service-Page/thin-border.png";
import borderBg from "../../images/Service-Page/border.png";
import ServiceRedirectData from "../../Data/serviceredirect-dta/Redirectdata";
import "../../CSS/Services.css";
import CaseStudiesSection from "../Homepage/CaseStudiesSection";
import { Helmet } from "react-helmet";

const Viewsubservice = () => {
  const params = useParams();
  const [serviceData, setServiceData] = useState({});
  const [metaObj, setMetaob] = useState({});
  const [listlabel, setList] = useState([]);
  const [selectedServices, setSelectedservice] = useState("");
  const [selectedServicesobj, setSelectedserviceobj] = useState({});
  const history = useNavigate();
  useEffect(() => {
    console.log(params,"manikanta")
    services.map((res) => {
  
      if (res.serviceName === params.name) {
        setServiceData(res);
        let x = Object.values(res.sub);
        setList(x[0]);
        res.sub.data.map((data) => {
          if (data["sublink"] === params["service"]) {
            setSelectedservice(data["name"]);
            setSelectedserviceobj(data);
          }
        });
      }else{
        ServiceRedirectData.map((res)=>{
           if(res.name === params.service ){
            history(res.redirecturl)
           }
        })
      }
    });
    if (window.innerWidth > 1024) {
      window.scrollTo(0, 500);
    }
    else {
      window.scrollTo(0, 1200);
    }
  }, [params.service]);
  const fetchService = (e, obj) => {
    e.preventDefault();
    history(`/services/${params.name}/${obj["sublink"]}`);
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${serviceData.metaname}`} </title>
        <meta name="description" content={`${serviceData.metadescription}`} />
        <meta name="keywords" content="" />
        {/* <link rel="canonical" href="https://www.amnetdigital.com/about-us" /> */}
        <meta property="og:title" content={`${serviceData.metaname}`}  />
        <meta property="og:description" content={`${serviceData.metadescription}`} />
        {/* <meta property="og:url" content="https://www.amnetdigital.com/about-us" /> */}
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="../images/About-Us-Page/worker-reading-news-with-tablet.png" /> */}
      </Helmet>
      <div
        className="sub-service-intro position-relative"
        style={{
          backgroundImage: `url(${serviceData.serviceImg})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <div className="w-95">
          <div className="text-center-img">
            <div className="row">
              <div className="w-90 mx-auto">
                <div className="col-lg-1 col-md-1 col-sm-12"></div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <h2
                    className="fw-bold-600 text-white fs-35 text-capitalize"
                    data-text="Your Tech Innovation Catalyst"
                  >
                    {serviceData.serviceImgaetitle}
                  </h2>
                  <p className="fw-bold-400 fs-16 text-white mb-5 mt-4">
                    {serviceData.servideSubdescription}
                  </p>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12"></div>
              </div>
            </div>
          </div>
          <div className="bottom-img-services w-100">
            <div className="row">
              <div className="w-90 mx-auto">
                <div className="col-lg-1 col-md-1 col-sm-12"></div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p className="fs-24 fw-bold-600 text-white">Services</p>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

  
      {/* NEW SERVICE PAGE BUTTON GROUPS */}
      <div className="center-95">
        <div className="w-90 mx-auto mb-5">
          <div className="mt-10 row">
            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 text-right pr-5">
              <p className="fw-bold-700 fs-50 text-lightwhite text-right lh-50 pr-2">
                Our <br /> Services
              </p>
              <p
                style={{
                  backgroundImage: `url(${borderBg})`,
                  backgroundAttachment: "scroll",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  top: "80px",
                  width: "100%",
                  height: "5px",
                }}
                className="mt-5"
              ></p>
              <p className="mt-5 scroll" id="style-4">
                {listlabel.map((list, index) => {
                  return (
                    <>
                      <p
                        key={list.id}
                        onClick={(e) => fetchService(e, list)}
                        className={
                          "fs-16 text-black text-left lh-50 cr-pointer " +
                          (list["name"] === selectedServices
                            ? "fw-bold-800"
                            : "fw-bold-400")
                        }
                      >
                        {list.name}
                      </p>
                      {listlabel.length != index + 1 ? (
                        <p
                          style={{
                            backgroundImage: `url(${thinborder})`,
                            backgroundAttachment: "scroll",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            top: "80px",
                            width: "100%",
                            height: "1px",
                          }}
                          className="mt-1"
                        ></p>
                      ) : null}
                    </>
                  );
                })}
              </p>
            </div>

            <div
              className="col-md-8 col-lg-8 col-sm-12 col-xs-12 pl-4"
              style={{
                backgroundColor: "#F8F8F8",
              }}
            >
              <div className="w-95 mx-auto py-5">
                <p className="mt-15.mt-14">
                  <img
                    className="w-100 mx-auto"
                    src={selectedServicesobj.subimg}
                  />
                </p>
                <p className="mt-4 d-flex w-100 align-items-center">
                  <img
                    className="img-35"
                    src={selectedServicesobj.subImgdata}
                  />
                  <span className="pt-2 pl-2 fs-16 fw-bold-600 text-black">
                    {selectedServicesobj.name}
                  </span>
                </p>
                <p className="mt-3">
                  <span className=" fs-16 fw-bold-400 text-darkgrey">
                    {selectedServicesobj.subDes}
                  </span>
                  <span >
                    <a href="/generative-ai-solutions" className=" fs-16 fw-bold-400 text-darkgreen" >
                      {selectedServicesobj.textlink}
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NEW HOMEPAGE CASESTUDIES SECTION */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="mt-5 mb-5">
          <CaseStudiesSection />
        </div>
      </Suspense>

    </>
  );
};

export default Viewsubservice;
