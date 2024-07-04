import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import careerLinkIcon from "../images/About-Us-Page/amnet-external-link.png";
import AboutUsBG from "../images/About-Us-Page/worker-reading-news-with-tablet.png";
import AboutUsMission from "../components/AboutUs/AboutUsMission";
import OurPartner from "../components/Homepage/OurPartner";
import About from "../Data/AboutUs-Data/About";
import Aboutvalues from "./AboutUs/Aboutvalues";
import Whyamnet from "./Whyamnet";
import ceo from "../images/About-Us-Page/CEO.png";
import achievement from "../images/About-Us-Page/Achievements.png";
import Amnetglance from "./AboutUs/Amnetglance";
import Aboutclientsay from "./AboutUs/Aboutclientsay";
import global from "../images/HomePage/amnet_global_plain.png";
import Gotocontact from "./Gotocontant";
import Letsconnect from "./AboutUs/Letsconnect";
import MediaQuery from "react-responsive";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Isoimg from "./Resources/Isoimg";



function TestAboutUs() {
  const history = useNavigate();
  const redirectTo = (e) => {
    e.preventDefault();
    history(`/services`);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Your Partner in making Data-Driven Decisions | Amnet Digital</title>
        <meta name="description" content="Amnet Digital is a Data, Analytics & AI solutions company that helps businesses make 
            data-driven decisions." />
        <meta name="keywords" content="Data, Analytics, AI" />
        <link rel="canonical" href="https://www.amnetdigital.com/about-us" />
        <meta property="og:title" content="Your Partner in making Data-Driven Decisions | Amnet Digital" />
        <meta property="og:description" content="Amnet Digital is a Data, Analytics & AI solutions company that helps businesses make 
            data-driven decisions." />
        <meta property="og:url" content="https://www.amnetdigital.com/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="../images/About-Us-Page/worker-reading-news-with-tablet.png" />
      </Helmet>

      <div
        className="sub-service-intro position-realtive"
        style={{
          backgroundImage: `url(${AboutUsBG})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        {/* <div className="fs-35 text-white position-absolute top-0">
          <Navbar navChange={navColor} />
        </div> */}
        <div className="w-85 mx-auto">
          <div className="text-center-img">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h2
                  className="fw-bold-600 text-white fs-35 text-capitalize"
                  data-text="Your Tech Innovation Catalyst"
                >
                  Powering Businesses To Achieve More
                </h2>
                <p className="fw-bold-400 fs-16 text-white mb-5 mr-5 mt-4">
                  At Amnet Digital, our focus is to infuse Data, Analytics & AI that enables clients to realize the higher value of their digital transformation initiatives and drive positive business impact.
                </p>
                <button
                  type="button"
                  className="fw-bold-700 fs-14 px-4 py-3 text-white bg-grey d-table rounded-1 cr-pointer"
                  onClick={(e) => redirectTo(e)}
                >
                  Explore Services
                </button>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12"></div>
            </div>
          </div>
          <div className="bottom-img-about w-100">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <p className="fs-24 fw-bold-600 text-white">About Us</p>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12"></div>
            </div>
          </div>
        </div>
      </div>
      {/* AboutUS Page QUOTE SECTION */}

      <div className="mt-10 w-90 mx-auto">
        <h1 className="text-center text-black fs-35 fw-bold-600">WHO WE ARE</h1>
        <p className="text-grey fs-16 fw-bold-400 text-center mb-0">
          Amnet Digital is a Data, Analytics & AI solutions company that helps businesses to make data-driven decisions, uncover key insights,
        </p>
        <p className="text-grey fs-16 fw-bold-400 text-center mb-0">
          and automate operations. Unpack new business opportunities and possibilities using our Analytics & AI digital accelerators.
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

      <div className="mt-5 space-read">
        <div className="w-90 mx-auto">
          <AboutUsMission />
        </div>
      </div>

      <div className="w-100 space-read">
        <Aboutvalues />
      </div>

      <div className="space-read">
        <div className="w-90 mx-auto">
          <Whyamnet />
        </div>
      </div>

      <div className="mt-5 w-100">
        <img alt=" " src={achievement} className="w-100" />
      </div>

      <MediaQuery query="(max-width: 767px)">
        <div className="space-read w-100 ceo-img-section h-auto pt-5 ">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
              <div className="w-90 mx-auto">
                <p className="fw-bold-500 fs-32 text-white">CEO Message</p>
                <p className="text-white fs-16 fw-bold-700 mt-4">
                  Our purpose is to make a  positive business impact that matters.
                </p>
                <p className="mt-2 text-white fs-16 fw-bold-400 mt-5">
                  Our only goal is to deliver real business value to all our stakeholders—customers, associates, and partners. We empower organizations with our deep tech (Data, Analytics & AI) and industry experience in solving their biggest technology challenges and contributing toward business growth consistently.
                  Our organisation growth in the past four years convinces us that we are on the right path.
                </p>
                <p className="w-100 align-items-center">
                  <div className="d-flex justify-content-center">
                    <img src={ceo} className="ceo-image-style" />
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="text-white fs-24 fw-bold-700 mb-0">
                      Krishna Reddy
                    </p>
                  </div>
                  <div className="d-flex justify-content-center ">
                    <p className="text-white fs-16 fw-bold-400">Founder & CEO</p>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 767px)">
        <div className=" w-100 ceo-img-section h-auto pt-5 space-read">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12">
              <div className="w-80 mx-auto">
                <p className="fw-bold-500 fs-32 text-white">CEO Message</p>
                <p className="mt-2 text-white fs-16 fw-bold-400">
                  Our only goal is to deliver real business value to all our stakeholders—customers, associates, and partners. We empower organizations with our deep tech (Data, Analytics & AI) and industry experience in solving their biggest technology challenges and contributing toward business growth consistently.
                  Our organisation growth in the past four years convinces us that we are on the right path.
                </p>
                <p className="d-flex w-100 justify-content-between mt-15px">
                  <span className="text-white fs-16 fw-bold-700 mt-4">
                    Our purpose is to make a  positive business impact that matters.
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
      </MediaQuery>

      <div className="space-read">
        <hr className="hr-grey-line" />
        <div className="w-88 mx-auto">
          <Amnetglance />
        </div>
        <hr className="hr-grey-line" />
      </div>

      <div className="space-read">
        <Aboutclientsay />
      </div>

      <div className="new-our-partner">
        <h1 className="section-title mt-3 text-center">Technology Partners</h1>
        <OurPartner />
      </div>

      <div className="space-read w-90 mx-auto border-bottom">
        <h1 className="section-title text-center mb-5">Global Footprint</h1>
      </div>
      <div className="w-98 mx-auto">
        <img src={global} className="gload-title" />
      </div>


      <div className="mb-5 space-read">
        <Gotocontact />
      </div>

      <div className="space-read">
        <Letsconnect />
      </div>



    </>
  );
}

export default TestAboutUs;
