import React, { useEffect, useState, Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import services from "../../Data/Services-Data/ExploreservicesData";
import thinborder from "../../images/Service-Page/thin-border.png";
import borderBg from "../../images/Service-Page/border.png";
import Case from "./Caseservice";
import Whyamnet from "../Homepage/Whyamnet";
import Driveservices from "./Driveservices";
import OurPartner from "../Homepage/OurPartner";
import Resourceweb from "./Resourceweb";
import Navbar from "../Navbar";

const Viewsubservice = () => {
  const params = useParams();
  const [serviceData, setServiceData] = useState({});
  const [listlabel, setList] = useState([]);
  const [selectedServices, setSelectedservice] = useState("");
  const [selectedServicesobj, setSelectedserviceobj] = useState({});
  const history = useNavigate();
  useEffect(() => {
    services.map((res) => {
      if (res.serviceName === params.name) {
        setServiceData(res);
        let x = Object.values(res.sub);
        setList(x[0]);
        res.sub.data.map((data) => {
          if (data["name"] === params["service"]) {
            setSelectedservice(data["name"]);
            setSelectedserviceobj(data);
          }
        });
      }
    });
  }, [params.service]);
  const fetchService = (e, obj) => {
    e.preventDefault();
    history(`/services/${params.name}/${obj["name"]}`);
  };
  const [navColor, setNavcolor] = useState("homepage");

  const changeNavbarColor = () => {
    if (window.scrollY >= 350) {
      setNavcolor("app");
    } else {
      setNavcolor("homepage");
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <div
        className="sub-service-intro position-relative"
        style={{
          backgroundImage: `url(${serviceData.serviceImg})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          width: "100%",
        }}
      >
        <div className="fs-35 text-white position-absolute top-0">
          <Navbar navChange={navColor} />
        </div>
        <div className="text-center-img w-100">
          <div className="w-90 mx-auto">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h2
                  className="fw-bold-600 text-white fs-35 text-capitalize"
                  data-text="contactus"
                >
                  {serviceData.serviceImgaetitle}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Page QUOTE SECTION */}
      <div className="mt-15 fw-bold-700 fs-35 text-black w-100 text-center">
        <p>{serviceData.serviceSubheaading}</p>
        <p className="fw-bold-500 fs-18 w-75 mx-auto">
          {serviceData.servideSubdescription}
        </p>
      </div>

      {/* NEW SERVICE PAGE BUTTON GROUPS */}
      <div className="w-95 mx-auto mb-5">
        <div className="mt-10 row">
          <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 text-right pr-0">
            <p className="fw-bold-700 fs-50 text-lightwhite text-right lh-50 pr-2">
              Our <br /> Services
            </p>
            <p
              style={{
                backgroundImage: `url(${borderBg})`,
                backgroundAttachment: "scroll",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
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
                          backgroundSize: "100% 100%",
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
            className="col-md-8 col-lg-8 col-sm-12 col-xs-12 pl-0"
            style={{
              backgroundColor: "#F8F8F8",
            }}
          >
            <div className="w-95 mx-auto py-5">
              <p className="mt-15">
                <img
                  className="w-50 mx-auto"
                  src={selectedServicesobj.subimg}
                />
              </p>
              <p className="mt-4 d-flex w-100 align-items-center">
                <img className="img-35" src={selectedServicesobj.subImgdata} />
                <span className="pt-2 pl-2 fs-16 fw-bold-600 text-black">
                  {selectedServicesobj.name}
                </span>
              </p>
              <p className="mt-3">
                <span className="pl-2 fs-16 fw-bold-400 text-darkgrey">
                  {selectedServicesobj.subDes}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NEW HOMEPAGE CASESTUDIES SECTION */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="center-91 mt-5">
          <Case />
        </div>
      </Suspense>

      {/*NEW AboutUS Page Career Link SECTION */}
      <div className="mt-5">
        <div className="w-90 mx-auto">
          <Whyamnet />
        </div>
      </div>

      <div className="mt-5">
        <Driveservices />
      </div>

      {/* NEW HOMEPAGE OUR PARTNER SECTION */}
      <div className="new-our-partner">
        <h1 className="section-title mt-3 text-center">TECHNOLOGY STACK</h1>
        <OurPartner />
      </div>

      <div className="mt-5 mb-5">
        <h1 className="section-title mt-3 mb-5 text-center">RESOURCES</h1>
        <div className="w-90 mx-auto">
          <Resourceweb />
        </div>
      </div>
    </>
  );
};

export default Viewsubservice;
