import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import CaseStudiesBG from "../images/Case-Studies-Page/casestudies.png";
import CaseStudiesData from "../Data/CaseStudies-Data/CaseStudiesData";
import Letsconnect from "./Casestudiesconnect";
import { Helmet } from "react-helmet";

function TestCaseStudies() {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <title>Business & Client | Case Studies | Amnet Digital</title>
        <meta name="description" content="Case studies illustrating how Amnet Digital assists clients globally, across industries, in overcoming challenges and 
          creating long-term value. Learn more." />
        <meta name="keywords" content="Amnet Digital cases studies." />
        <link rel="canonical" href="https://www.amnetdigital.com/case-studies" />
        <meta property="og:title" content="Business & Client | Case Studies | Amnet Digital" />
        <meta property="og:description" content="Case studies illustrating how Amnet Digital assists clients globally, across industries, in overcoming challenges and 
          creating long-term value. Learn more." />
        <meta property="og:url" content="https://www.amnetdigital.com/case-studies" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="../images/Case-Studies-Page/casestudies.png" />
      </Helmet>
      <div
        className="sub-service-intro position-realtive "
        style={{
          backgroundImage: `url(${CaseStudiesBG})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <div className="w-85 mx-auto">
          <div className="text-center-img">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-12">
                <h2
                  className="fw-bold-600 text-white fs-35 text-capitalize"
                  data-text="Your Tech Innovation Catalyst"
                >
                  Making A Difference
                </h2>
                <p className="fw-bold-400 fs-16 text-white mb-5 mr-5 mt-4">
                  We adopt a bottom-up approach starting with strategy support through discovery and analysis of existing systems and processes and their limitations maximizing the leverage of knowledge and results in higher value generation.
                </p>

              </div>
              <div className="col-lg-5 col-md-5 col-sm-12"></div>
            </div>
          </div>
          <div className="bottom-img w-100">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <p className="fs-24 fw-bold-600 text-white">Case Studies</p>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12"></div>
            </div>
          </div>
        </div>
      </div>

      {/* New Case Studies QUOTE SECTION */}


      {/* <!-- CASE STUDIES PAGE ALL CASE STUDIES --> */}
      <div
        className="case-studies-page-all-case-studies w-90 mx-auto above-spacings"
        id="details"
      >
        <div className="row case-studies-page-row ml-0 mr-0">
          {CaseStudiesData.map((caseStudy) => {
            return (
              <div
                className="col-xl-6 col-lg-6 col-md-12 col-sm-12 case-studies-list new-case-studies-list p-2 mb-5"
                id={caseStudy.id}
                key={caseStudy.id}
              >
                <div className="card animation-card-image case-studies-page-card">
                  <img
                    loading="lazy"
                    className="img-casestudies"
                    src={caseStudy.caseStudiesIMG}
                    alt="case-studies"
                  />
                  <div className="card-body">
                    <h2 className="case-studies-page-card-title card-title">
                      {caseStudy.newTitle}
                    </h2>
                    <div className="case-studies-page-card-info mt-5">
                      <h4>{caseStudy.requirement}</h4>
                      <p>{caseStudy.requirementDesc}</p>

                      <h4>{caseStudy.solution}</h4>
                      <p>{caseStudy.solutionDesc}</p>

                      <h4>{caseStudy.highlight}</h4>
                      <p>{caseStudy.highlightDesc}</p>
                      {/* Render ordered list if it exists */}
                      {caseStudy.orderedList && caseStudy.orderedList.length > 0 && (
                        <ol className="text-left">
                          {caseStudy.orderedList.map((response, index) => (
                            <li key={index} className="fs-14 pb-3 goway-hlist">
                              {response.sidehead && (
                                <span className="fs-14 fw-bold text-left text-side-head">{response.sidehead}</span>
                              )}
                              <span className="content-styles">{response.content}</span>
                            </li>
                          ))}
                        </ol>
                      )}

                      <h4>{caseStudy.benefits}</h4>
                      <p>{caseStudy.benefitDesc}</p>
                      {caseStudy.benefitList && caseStudy.benefitList.length > 0 && (
                        <ol className="text-left">
                          {caseStudy.benefitList.map((response, index) => (
                            <li key={index} className="fs-14 pb-3 goway-hlist">
                              {response.sidehead && (
                                <span className="fs-14 fw-bold text-left text-side-head">{response.sidehead}</span>
                              )}
                              <span className="content-styles">{response.content}</span>
                            </li>
                          ))}
                        </ol>
                      )}
                      <p>
                        <a href="/case-studies/ai-voice-bot" className="seemore">
                          {caseStudy.seemoretext}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
