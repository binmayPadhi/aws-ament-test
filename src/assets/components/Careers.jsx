import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import CareerBG from "../images/careers-page/Careerhome.png";
import CareersDetails from "./Careers/CareersDetails";
import OurCulture from "./Careers/OurCulture";
import Whyamnetdigital from "./Careers/Whyamnetdigital";
import JobLists from "./Careers/JobLists";
import EmployeesSay from "./Careers/EmployeesSay";
import CoreValues from "./Careers/Corevalues";
import Encourageopportunities from "./Careers/Encourageopportunities";
import CurrentOpenings from "./Careers/CurrentOpenings";
import Ourcorevalues from "./Careers/Ourcorevalues";
import Amnetfamily from "./Careers/AmnetFamily";
import { Helmet } from "react-helmet";

function TestCareers() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Data, Analytics & AI solutions | Amnet Digital Careers</title>
        <meta name="description" content="Amnet Digital opens doors for  professional growth, where your skills are developed and tested in exciting ways. 
Search jobs best suited for you. Apply today!
" />
        <meta name="keywords" content="Amnet Digital careers." />
        <link rel="canonical" href="https://www.amnetdigital.com/careers" />
        <meta property="og:title" content="Data, Analytics & AI solutions | Amnet Digital Careers" />
        <meta property="og:description" content="Amnet Digital opens doors for  professional growth, where your skills are developed and tested in exciting ways. 
Search jobs best suited for you. Apply today!" />
        <meta property="og:url" content="https://www.amnetdigital.com/careers" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="../images/careers-page/Careerhome.png" />
      </Helmet>
      <div
        className="sub-service-intro container-fluid"
        style={{
          backgroundImage: `url(${CareerBG})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-90 mx-auto">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 new-subService-AIML-intro-caption">
              <h2 className="textAnimation" data-text="Create Your Future!">
                Explore A World Of Opportunities
              </h2>
              <p className="pt-4">
                We believe in creating a diversified culture of the best talent for tech innovation,
                which reflects in everything we do with heart and mind.
              </p>
              <p>
                Join us to find the purpose and help change the world!
              </p>
            </div>
          </div>
        </div>
        <div className="w-90 mx-auto">
          <div className="row">
            <div className="col-lg-6 col-md-10 col-sm-12 bottom-img-career">
              <p className="fs-24 fw-bold-600 text-white pt-4 pt-md-5">Careers</p>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- Whyamnetdigital--> */}
      <Whyamnetdigital />

      {/* {---CoreValue---} */}
      <CoreValues />

      {/* ----EncourageOpportunities--- */}
      <Encourageopportunities />

      {/* ---CurrentOpenings--- */}
      <CurrentOpenings />

      {/* <!-- CAREER-PAGE-OUR-CULTURE --> */}
      <OurCulture />

      {/* -----Ourcorevalues----- */}
      <Ourcorevalues />

      {/* {----Amnetfamily-----} */}
      <Amnetfamily />

   






      {/* <JobLists /> */}

      <EmployeesSay />

    </>
  );
}

export default TestCareers;
