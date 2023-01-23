import React, { Suspense } from "react";
import HomeBG from "../images/HomePage/home_new_bg.png";
import OurServicesSection from "../components/Homepage/OurServicesSection";
import OurPartner from "../components/Homepage/OurPartner";
import Uniqueapproch from "./Homepage/Uniqueapproch";
import Amnetglance from "./Homepage/Amnetglance";
import Gotocontact from "./Gotocontant";
import global from "../images/HomePage/global.png";
import Whyamnet from "./Homepage/Whyamnet";

const Test = () => {
  const cookieStorage = {
    getItem: (item) => {
      const cookies = document.cookie
        .split(";")
        .map((cookie) => cookie.split("="))
        .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
      return cookies[item];
    },
    setItem: (item, value) => {
      document.cookie = `${item}=${value};`;
    },
  };

  const storageType = cookieStorage;
  const consentPropertyName = "jdc_consent";
  const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
  const saveToStorage = () => storageType.setItem(consentPropertyName, true);

  window.onload = () => {
    const acceptFn = (event) => {
      saveToStorage(storageType);
      consentPopup.classList.add("hidden");
    };
    const declineFn = (event) => {
      consentPopup.classList.add("hidden");
    };
    const consentPopup = document.getElementById("consent-popup");
    const acceptBtn = document.getElementById("accept");
    const declineBtn = document.getElementById("decline");
    acceptBtn.addEventListener("click", acceptFn);
    declineBtn.addEventListener("click", declineFn);

    if (shouldShowPopup(storageType)) {
      setTimeout(() => {
        consentPopup.classList.remove("hidden");
      }, 2000);
    }
  };

  const ClientSay = React.lazy(() =>
    import("../components/Homepage/ClientSay")
  );
  const CaseStudiesSection = React.lazy(() =>
    import("../components/Homepage/CaseStudiesSection")
  );
  const IndusrtySection = React.lazy(() =>
    import("../components/Homepage/IndustrySection")
  );

  return (
    <>
      <div
        className="sub-service-intro container-fluid"
        style={{
          backgroundImage: `url(${HomeBG})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          maxWidth: "100%",
        }}
      >
        <div className="center-88">
          <div className="new-subService-AIML-intro-caption w-50">
            <h2 className="textAnimation" data-text="Reimagine & Redefine">
              Your trusted partner in making data-driven decisions
            </h2>
            <div className="mt-4 side-heading px-2">
              We are a Data, Analytics & AI solutions company with a track
              record of building 100+ AI-based Digital Solutions
            </div>
            <div className="mt-4 connect-button py-2 px-4">Let's connet</div>
          </div>
        </div>
      </div>
      {/* NEW HOMEPAGE SOLUTION SERVICE SECTION */}
      {/* <SolutionsServices /> */}
      {/* NEW HOMEPAGE SOLUTION SERVICE SECTION */}
      {/* <AboutDetails /> */}
      {/* NEW HOMEPAGE OUR SERVICE SECTION */}
      <div className="center-91">
        <OurServicesSection />
      </div>
      {/* NEW HOMEPAGE INDUSTRIES SECTION */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="center-91">
          <IndusrtySection />
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Uniqueapproch />
      </Suspense>

      {/* NEW HOMEPAGE CASESTUDIES SECTION */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="center-91">
          <CaseStudiesSection />
        </div>
      </Suspense>

      {/* NEW HOMEPAGE glance SECTION */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="center-91 my-4">
          <Amnetglance />
        </div>
      </Suspense>

      {/* NEW HOMEPAGE CLIENT SAY */}
      <Suspense fallback={<div>Loading...</div>}>
        <h1 className="section-title mt-3 text-center mb-3">
          WHAT OUR CLIENTS SAY
        </h1>
        <ClientSay />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="center-88">
          <Whyamnet />
        </div>
        <div className="img_drivine mb-5 mt-5">
          <div className="p-4 text-center">
            <p className="drive">DRIVE REAL VALUE</p>
            <p className="drive_para mt-4">
              Start your digital journey today and become a forward-thinking
              organisation
            </p>
            <p className="w-100 d-flex justify-content-center mt-4">
              <p className="btn_drive">
                Request your FREE Data Engineering consultation
              </p>
            </p>
          </div>
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <h1 className="section-title mt-5 text-center mb-5">
          Global Footprint
        </h1>
        <div className="center-88">
          <img src={global} className="gload-title" />
        </div>
      </Suspense>

      {/* NEW HOMEPAGE OUR PARTNER SECTION */}
      <div className="new-our-partner">
        <h1 className="section-title mt-3 text-center">Technology Partners</h1>
        <OurPartner />
      </div>

      {/* NEW HOMEPAGE CAREER SECTION */}

      <div className="mb-5 mt-5">
        <Gotocontact />
      </div>

      {/* <div id="consent-popup" className="hidden cookies-banner">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <p>
              This website uses cookies. We use cookies to optimize web
              functionality, collect website analytics and traffic data, and to
              provide a more personalized user experience.
              <a className="cookies-readmore-link" href="/cookiespolicy">
                Read more...
              </a>
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 text-center">
            <button
              className="btn btn-default cookies-decline-btn"
              id="decline"
            >
              Decline
            </button>
            <button className="btn btn-default cookies-accept-btn" id="accept">
              Accept
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Test;
