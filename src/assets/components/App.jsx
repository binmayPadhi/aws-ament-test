import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Services from "./Services";
import CaseStudies from "./CaseStudies";
import Careers from "./Careers";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Insight from "./Resources/Insight";
import CookiesPolicy from "../components/CookiesPolicy";
import Privacypolicy from "./Privacypolicy/Privacypolicy";
import Thankswebinar from "./Webinars/Thankswebinar";
import Videowebinar from "./Webinars/Videowebinar";
import SwiftInisghtsWebinar from "./Swiftinsights/SwiftInisghtsWebinar";
import OurServices from "./OurServices";
import Viewsubservice from "./SubServices/Viewsubservice";
import AIservices from "./SubServices/AIMLservices";
import Termsandconditions from "./Termsandconditions/Termsandconditions";
import Legalterms from "./Homepage/Legaterms";

function App() {
  const url = window.location.pathname;
  return (
    <>
      {url != "/webinar-reshaping-the-retail-industry-through-AI" &&
      url != "/webinar-thank-you-reshaping-the-retail-industry-through-AI" &&
      url != "/swiftinisghts-Webinar" ? (
        <div>
          <Navbar />
        </div>
      ) : null}
      <div>
        <Routes>
          {/* <Route
              exact
              path="/webinar-reshaping-the-retail-industry-through-AI"
              component={Webinars}
            /> */}
          <Route exact path="/" element={<Homepage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />}>
            <Route path="" element={<Services />} />
            <Route path=":name" element={<AIservices />} />
            <Route path=":name/:service" element={<Viewsubservice />} />
          </Route>
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/careers" element={<Careers />} />
          <Route
            path="/blog-seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry"
            element={<Insight />}
          />
          <Route
            exact
            path="/swiftinisghts-Webinar"
            element={<SwiftInisghtsWebinar />}
          />
          <Route path="/legalresources" element={<Legalterms />} />
          <Route path="/cookiespolicy" element={<CookiesPolicy />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/termsandconditions" element={<Termsandconditions />} />
          <Route
            path="/webinar-reshaping-the-retail-industry-through-AI"
            element={<Thankswebinar />}
          />
          <Route
            path="/webinar-thank-you-reshaping-the-retail-industry-through-AI"
            element={<Videowebinar />}
          />
          {/* <Route path="/:id" element={AIML} /> */}
        </Routes>
      </div>
      {url != "/webinar-reshaping-the-retail-industry-through-AI" &&
      url != "/webinar-thank-you-reshaping-the-retail-industry-through-AI" &&
      url != "/swiftinisghts-Webinar" ? (
        <div>
          <Footer />
        </div>
      ) : null}
    </>
  );
}

export default App;
