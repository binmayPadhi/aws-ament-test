import React from "react";

import CaseStudiesBG from "../images/Case-Studies-Page/casestudies.png";
import CaseStudiesData from "../Data/CaseStudies-Data/CaseStudiesData";
import Navbar from "./Navbar";
import { useState } from "react";
import Letsconnect from "./AboutUs/Letsconnect";

function TestCaseStudies() {
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
        className="sub-service-intro position-realtive"
        style={{
          backgroundImage: `url(${CaseStudiesBG})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          width: "100%",
        }}
      >
        <div className="fs-35 text-white position-absolute top-0">
          <Navbar navChange={navColor} />
        </div>
        <div className="text-center-img">
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-12"></div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2
                className="fw-bold-600 text-white fs-35 text-capitalize"
                data-text="Your Tech Innovation Catalyst"
              >
                Explore A World Of Opportunities
              </h2>
              <p className="fw-bold-400 fs-16 text-white mb-5 mt-4">
                We believe in creating a diversified culture of the best talent
                for tech innovation, which reflects in everything we do with
                heart and mind.
              </p>
              <p className="fw-bold-400 fs-16 text-white mb-5 mt-4">
                Join us to find the purpose and help change the world!
              </p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12"></div>
          </div>
        </div>
        <div className="bottom-img w-100">
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-12"></div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="fs-24 fw-bold-600 text-white">Careers</p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12"></div>
          </div>
        </div>
      </div>

      {/* New Case Studies QUOTE SECTION */}

      {/* <!-- CASE STUDIES PAGE ALL CASE STUDIES --> */}
      <div className="top-space">
        <div className="container new-all-margin" id="details">
          <div className="row case-studies-page-row ml-0 mr-0">
            {CaseStudiesData.map((caseStudy) => {
              return (
                <div
                  className="col-xl-6 col-lg-6 col-md-12 col-sm-12 case-studies-list new-case-studies-list "
                  id={caseStudy.id}
                  key={caseStudy.id}
                >
                  <div className="card">
                    <img
                      loading="lazy"
                      className="img-risk"
                      src={caseStudy.caseStudiesIMG}
                      alt="case-studies"
                    />
                    <div className="card-body">
                      {/* <span className="case-studies-icon"><img className="img-fluid" src={caseStudy.caseStudiesIcon} alt ="case-studies-icon"/> </span> */}
                      <h2 className="fs-16 fw-bold-700">
                        {caseStudy.newTitle}
                      </h2>
                      <div className=" mt-5">
                        <h1 className="fs-14 fw-bold-600 text-requirement">
                          {caseStudy.requirement}
                        </h1>
                        <p className="fs-14 fw-bold-400 text-requirement">
                          {caseStudy.requirementDesc}
                        </p>

                        <h1 className="fs-14 fw-bold-600 text-requirement">
                          {caseStudy.solution}
                        </h1>
                        <p className="fs-14 fw-bold-400 text-requirement">
                          {caseStudy.solutionDesc}
                        </p>

                        <h1 className="fs-14 fw-bold-600 text-requirement">
                          {caseStudy.highlight}
                        </h1>
                        <p className="fs-14 fw-bold-400 text-requirement">
                          {caseStudy.highlightDesc}
                        </p>

                        <h1 className="fs-14 fw-bold-600 text-requirement">
                          {caseStudy.benefits}
                        </h1>
                        <p className="fs-14 fw-bold-400 text-requirement">
                          {caseStudy.benefitDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* NEW HOMEPAGE CAREER SECTION */}

      <div className="mt-5">
        <Letsconnect />
      </div>
    </>
  );
}

export default TestCaseStudies;
