import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Services from "./Services";
import CaseStudies from "./CaseStudies";
import OurServices from "./OurServices";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Insight from "./Resources/Insight";
import CookiesPolicy from "../components/CookiesPolicy";
import Privacypolicy from "./Privacypolicy/Privacypolicy";
import Thankswebinar from "./Webinars/Thankswebinar";
import Videowebinar from "./Webinars/Videowebinar";
import SwiftInisghtsWebinar from "./Swiftinsights/SwiftInisghtsWebinar";
import Termsandconditions from "./Termsandconditions/Termsandconditions";
import Legalterms from "./Homepage/Legaterms";
import AIservices from "./SubServices/AIMLservices";
import Blog from "./Resources/Blog";
import Careers from "./Careers";
import Viewsubservice from "./SubServices/Viewsubservice";
import InsightAI from "./Resources/InsightAI";

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
          <Route path="/" element={<Homepage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />}>
            <Route path="" element={<Services />} />
            <Route path=":name" element={<AIservices />} />
            <Route path=":name/:service" element={<Viewsubservice />} />
          </Route>
          <Route path="/careers" element={<Careers />} />
          {/* <Route path="/careers" element={<Carrershome />}>
            <Route path="" element={<Careers />} />
            <Route path="fullstacknode" element={<Applyjob />} />
            <Route path="azure" element={<Applyazure />} />
            <Route path="da" element={<ApplyDarchitect />} />
            <Route path="dotnet" element={<ApplyNet />} />
            <Route path="datascientist" element={<Datasc />} />
            <Route path="python" element={<Python />} />
            <Route path="uxdesigner" element={<UXdesigner />} />
          </Route> */}
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/legalresources" element={<Legalterms />} />
          <Route path="/blog" element={<Blog />}>
            <Route exact path="" element={<Insight />} />
            <Route
              exact
              path="blog-seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry"
              element={<Insight />}
            />
            <Route
              exact
              path="blog-AI-retail-industry"
              element={<InsightAI />}
            />
            <Route
              exact
              path="swiftinisghts-Webinar"
              element={<SwiftInisghtsWebinar />}
            />
            <Route
              path="webinar-reshaping-the-retail-industry-through-AI"
              element={<Thankswebinar />}
            />
            <Route
              path="webinar-thank-you-reshaping-the-retail-industry-through-AI"
              element={<Videowebinar />}
            />
          </Route>
          <Route path="/blog" element={<Blog />}>
            <Route exact path="" element={<InsightAI />} />
            <Route
              exact
              path="blog-seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry"
              element={<Insight />}
            />
            <Route
              exact
              path="blog-AI-retail-industry"
              element={<InsightAI />}
            />
            <Route
              exact
              path="swiftinisghts-Webinar"
              element={<SwiftInisghtsWebinar />}
            />
            <Route
              path="webinar-reshaping-the-retail-industry-through-AI"
              element={<Thankswebinar />}
            />
            <Route
              path="webinar-thank-you-reshaping-the-retail-industry-through-AI"
              element={<Videowebinar />}
            />
          </Route>
          <Route path="/cookiespolicy" element={<CookiesPolicy />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/termsandconditions" element={<Termsandconditions />} />
        </Routes>
      </div>
      {url != "blog/webinar-reshaping-the-retail-industry-through-AI" &&
      url !=
        "blog/webinar-thank-you-reshaping-the-retail-industry-through-AI" &&
      url != "blog/swiftinisghts-Webinar" ? (
        <div className="industry-section-row">
          <Footer />
        </div>
      ) : null}
    </>
  );
}

export default App;
