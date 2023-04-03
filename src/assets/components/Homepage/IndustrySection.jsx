import React from "react";
import IndusrtySectionData from "../../Data/Homepage-Data/IndustrySectionData";
import Trolly from "../../images/HomePage/Trolly.png";
import "../../CSS/Services.css";
import IndustrySectionData from "../../Data/Homepage-Data/IndustrySectionData";
import { useState } from "react";
import MediaQuery from "react-responsive";

function IndustrySection() {
  const [selectedIndustry, setSelectedIndustry] = useState(
    IndustrySectionData[0]
  );
  const industryChange = (e, obj) => {
    e.preventDefault();
    setSelectedIndustry(obj);
  };
  return (
    <>
      <div className="center text-center py-4 mt-5 mb-5 service_title">
        Industries we serve
      </div>
      {/* <!-- INDUSTRIES WE COVER --> */}
      <MediaQuery query="(max-width: 1024px)">
        <>
          <div className="container-fluid">
            <div className="box-industries">
              <div className="row">
                <div className=" col-sm-12 col-xs-12">
                  <img src={selectedIndustry.industryIMG} className="w-100" />
                </div>
                <div className=" col-sm-12 col-xs-12 my-auto">
                  <div className="pt-5">
                    {IndustrySectionData.map((list) => {
                      return (
                        <>
                          <div
                            onClick={(e) => industryChange(e, list)}
                            className="box-green-small cr-pointer pl-4 pt-5"
                            style={{
                              backgroundColor:
                                list.industryTitle ===
                                selectedIndustry.industryTitle
                                  ? "#1DAD8F"
                                  : list.color,
                              color:
                                list.industryTitle ===
                                selectedIndustry.industryTitle
                                  ? "#ffffff"
                                  : "#000000",
                            }}
                          >
                            <p className="fs-14 fw-bold-500" key={list.id}>
                              {list.industryTitle}
                            </p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <h1 className="fs-20 fw-bold-500 mt-4">
                    {selectedIndustry.industryTitle}
                  </h1>
                  <p className="fs-14 fw-bold-400">
                    {selectedIndustry.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      </MediaQuery>
      {/* desktop and large screens */}
      <MediaQuery query="(min-width: 1025px)">
        <>
          <div className="container-fluid">
            <div className="box-industries">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <img src={selectedIndustry.industryIMG} className="w-100" />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 my-auto">
                  <h1 className="fs-20 fw-bold-500">
                    {selectedIndustry.industryTitle}
                  </h1>
                  <p className="fs-14 fw-bold-400 height-140">
                    {selectedIndustry.description}
                  </p>
                  <div className="d-flex pt-5">
                    {IndustrySectionData.map((list) => {
                      return (
                        <>
                          <div
                            onClick={(e) => industryChange(e, list)}
                            className="box-green cr-pointer"
                            style={{
                              backgroundColor:
                                list.industryTitle ===
                                selectedIndustry.industryTitle
                                  ? "#1DAD8F"
                                  : list.color,
                              color:
                                list.industryTitle ===
                                selectedIndustry.industryTitle
                                  ? "#ffffff"
                                  : "#000000",
                            }}
                          >
                            <p className="fs-14 fw-bold-500" key={list.id}>
                              {list.industryTitle}
                            </p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </MediaQuery>
    </>
  );
}

export default IndustrySection;
