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

function TestCareers() {
  return (
    <>
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
            <div className="col-lg-6 col-md-10 col-sm-12 bottom-img">
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

      {/* <!-- CAREER-PAGE-DETAILS-SECTION --> */}
      {/* <CareersDetails /> */}

  




      {/* <!-- JOB DESCRIPTIONS --> */}
      {/* <JobLists /> */}

       <EmployeesSay />

      {/* NEW HOMEPAGE CAREER SECTION */}

      {/* <div
        className="new-career-section"
        style={{
          width: "auto",
          height: "auto",
          backgroundColor: "#19AF8F",
          padding: "30px",
          marginTop: "60px",
        }}
      >
        <div className="new-career-section w-90 mx-auto">
          <div className="career-section-row row g-0">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 career-caption">
              <h5>WORK WITH US</h5>
              <h2>Let's Grow Together</h2>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 career-details">
              <p>
                We are on a mission to solve complex problems and provide
                solutions that make a difference, Come work with us.
              </p>
              <a href="/contactus">
                <button
                  type="button"
                  className="btn btn-default contact-us-button"
                >
                  Contact Us
                </button>
              </a>
              <a href="/careers">
                <button
                  type="button"
                  className="btn btn-default careers-button"
                >
                  Careers
                </button>
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default TestCareers;
