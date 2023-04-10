import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import CareerBG from "../images/careers-page/Careerhome.png";
import CareersDetails from "./Careers/CareersDetails";
import OurCulture from "./Careers/OurCulture";
import WeValueInnovation from "./Careers/WeValueInnovation";
import EmployeesSay from "./Careers/EmployeesSay";
import CoreValues from "./Careers/CoreValues";
import Opportunities from "./Careers/Opportunities";
import Ourcore from "./Careers/Ourcorevalues";
import Amnetfamily from "./Careers/Amnetfamily";
import CurrentOpenings from "./Careers/CurrentOpenings";
import { useState } from "react";
import Navbar from "./Navbar";

function TestCareers() {
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
          backgroundImage: `url(${CareerBG})`,
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

      {/* <!-- WE VALUE INNOVATION --> */}
      <WeValueInnovation />

      {/* <!-- JOB DESCRIPTIONS --> */}
      <CoreValues />

      {/* <!-- WE ENCOURAGE --> */}
      <Opportunities />

      {/* <!-- CURRENT OPENINGS --> */}
      <CurrentOpenings />

      {/* <!-- CAREER-PAGE-OUR-CULTURE --> */}
      <OurCulture />

      {/* <!-- OURCORE --> */}
      <Ourcore />

      {/* <!-- AMNET-FAMILY --> */}
      <Amnetfamily />

      {/* NEW HOMEPAGE CAREER SECTION */}
    </>
  );
}

export default TestCareers;
