import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import careerLinkIcon from "../images/About-Us-Page/amnet-external-link.png";
import AboutUsBG from "../images/About-Us-Page/worker-reading-news-with-tablet.png";
import AboutUsMission from "../components/AboutUs/AboutUsMission";
import About from "../Data/AboutUs-Data/About";
import Gotocontact from "./Gotocontant";
import OurPartner from "../components/Homepage/OurPartner";
import OurLocation from "../components/OurLocation";
import Aboutvalues from "./AboutUs/Aboutvalues";
import Whyamnet from "./Homepage/Whyamnet";
import Achievements from "./AboutUs/Achievements";
import ceo from "../images/About-Us-Page/CEO.png";
import Amnetglance from "./Homepage/Amnetglance";
import Aboutclientsay from "./AboutUs/Aboutclientsay";
import global from "../images/HomePage/global.png";

function TestAboutUs() {
  return (
    <>
      <div
        className="sub-service-intro container-fluid position-realtive"
        style={{
          backgroundImage: `url(${AboutUsBG})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          top: "80px",
          width: "100%",
        }}
      >
        <div className="text-center-img">
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-12"></div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2
                className="fw-bold-600 text-white fs-35 text-capitalize"
                data-text="Your Tech Innovation Catalyst"
              >
                Your Tech Innovation Catalyst
              </h2>
              <p className="fw-bold-400 fs-16 text-white mb-5 mt-4">
                We help clients achieve a competitive edge through our deep
                technology expertise to transform them into AI and digital-first
                businesses that deliver great customer experiences. We are
                building a culture of equality to drive real change as a global
                business leader.
              </p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12"></div>
          </div>
        </div>
        <div className="bottom-img w-100">
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-12"></div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="fs-24 fw-bold-600 text-white">About Us</p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12"></div>
          </div>
        </div>
      </div>

      {/* NEW ABOUT US SOLUTION SERVICE SECTION */}
      <div className="mt-15">
        <h1 className="text-center text-black fs-35 fw-bold-600">WHO WE ARE</h1>
        <p className="text-grey fs-16 fw-bold-400 text-center mb-0">
          Amnet Digital is a Data, Analytics & AI solutions company that helps
        </p>
        <p className="text-grey fs-16 fw-bold-400 text-center mb-0">
          businesses make data-driven decisions.
        </p>
      </div>

      <div className="mt-5">
        <div className="w-90 mx-auto">
          <div className="row">
            {About.whoweare.map((list) => {
              return (
                <div
                  key={list.id}
                  className="col-md-3 col-lg-3 col-sm-12 text-center"
                >
                  <p className="mb-0">
                    <img src={list.image} className="w-25" />
                  </p>
                  <p className="fw-bold-600 fs-19 text-nero">{list.heading}</p>
                  <p className="fw-bold-400 fs-16 text-grey">
                    {list.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ABOUT US MISSION AND VISION SECTION */}
      <div className="mt-5">
        <div className="w-90 mx-auto">
          <AboutUsMission />
        </div>
      </div>

      {/* NEW ABOUT US CREDO SECTION */}

      <div className="w-100">
        <Aboutvalues />
      </div>

      {/*NEW AboutUS Page Career Link SECTION */}
      <div className="mt-5">
        <div className="w-90 mx-auto">
          <Whyamnet />
        </div>
      </div>

      {/*NEW AboutUS Page Achievments SECTION */}
      <div className="mt-5 w-100">
        <Achievements />
      </div>
      {/*NEW AboutUS Page ceo SECTION */}
      <div className="mt-5 w-100 ceo-img-section h-auto pt-5">
        <div className="row">
          <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
            <div className="w-90 mx-auto">
              <p className="fw-bold-500 fs-32 text-white">CEOs Message</p>
              <p className="mt-2 text-white fs-16 fw-bold-400">
                Our goal is to deliver real business value to all our
                stakeholders—customers, teams, and partners. We empower
                organizations with our deep technology and industry experience
                in solving their biggest technology challenges and contributing
                toward business growth consistently. Our firm’s growth in the
                past three years convinces us that we are on the right path.
              </p>
              <p className="d-flex w-100 justify-content-between mt-15">
                <span className="text-white fs-16 fw-bold-700">
                  Our purpose is to make a meaningful impact that matters.
                </span>
                <span className="text-white fs-16 fw-bold-700">
                  <p className="text-white fs-24 fw-bold-700 mb-0">
                    Krishna Reddy
                  </p>
                  <p className="text-white fs-16 fw-bold-400">Founder & CEO</p>
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <div className="d-flex w-100 justify-content-center align-items-end">
              <img src={ceo} className="w-100" />
            </div>
          </div>
        </div>
      </div>

      {/* NEW HOMEPAGE OUR glance SECTION */}

      <div className="mt-5">
        <div className="w-90 mx-auto">
          <Amnetglance />
        </div>
      </div>

      {/* NEW HOMEPAGE CLIENT SAY */}
      <div className="mt-5">
        <Aboutclientsay />
      </div>

      {/* NEW HOMEPAGE OUR PARTNER SECTION */}
      <div className="new-our-partner">
        <h1 className="section-title mt-3 text-center">Technology Partners</h1>
        <OurPartner />
      </div>

      <div className="mt-5">
        <h1 className="section-title text-center mb-5">Global Footprint</h1>
        <div className="w-98 mx-auto">
          <img src={global} className="gload-title" />
        </div>
      </div>

      {/* NEW HOMEPAGE CAREER SECTION */}

      <div className="mb-5 mt-5">
        <Gotocontact />
      </div>

      <div className="mt-5 w-100 ceo-img-section h-auto py-5">
        <div className="row">
          <div className="col-md-9 col-lg-9 col-sm-12">
            <div className="w-90 mx-auto">
              <p className="fw-bold-700 fs-18 text-white">
                Do you have any technology challenges that are slowing down your
                business growth?
              </p>
              <div className="w-90">
                <p className="mt-2 text-white fs-16 fw-bold-400">
                  If so, let's connect with one of our technical experts to
                  develop and deploy a custom solution or product and overcome
                  your business challenge!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12 text-center my-5">
            <span className="text-black bg-white br-20 fs-18 fw-bold-700 p-3">
              Let's connect
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestAboutUs;
