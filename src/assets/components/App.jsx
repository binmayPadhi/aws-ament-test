import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
import Insighthome from "./Resources/Insighthome";
import InsightAIOPS from "./Resources/InsightAIOPS";
import BlogIT from "./Resources/BlogIT";
import CareerHome from "./CareerHome";
import Apply from "./Apply";
import RedirectAIML from "./RedirectAIML";
import Webinar from "./Webinar";
import RedirectWebinar from "./RedirectWebinar";
import RedirectanotherWebinar from "./Redirectanotherwebinar";
import Redirectways from "./Redirectways";
import { Helmet } from "react-helmet";
import ScaleAI from "./Resources/ScaleAI";
import Isoimg from "./Resources/Isoimg";
import DataMigration from "./Resources/DataMigration";


function App() {
  const path = useLocation();
  const url = path.pathname;
  return (
    <>
      {url != "/webinars/reshaping-the-retail-industry-through-AI" &&
      url !=
        "/blogs/webinar-thank-you-reshaping-the-retail-industry-through-AI" &&
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
          <Route
              exact
              path="/odc-and-iso-recognized-certification"
              element={<Isoimg />}
            />
           
          <Route path="/services" element={<OurServices />}>
            <Route path="" element={<Services />} />

            <Route path=":name" element={<AIservices />} />
            <Route path=":name/:service" element={<Viewsubservice />} />
            {/* <Route path=":name/:service" element={<Viewsubservicestart />} /> */}
          </Route>
          <Route path="/careers" element={<CareerHome />}>
            <Route path="" element={<Careers />} />
           <Route path="applyjob" element={<Apply />} />
          </Route>
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/legalresources" element={<Legalterms />} />
          <Route path="/blogs" element={<Blog />}>
            <Route exact path="" element={<Insighthome />} />
            <Route
              exact
              path="seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry"
              element={<Insight />}
            />
            <Route exact path="Insighthome" element={<Insighthome />} />
            <Route
              exact
              path="What-is-AIOps-and-explore-how-it-is-revolutionizing-the-retail-industry-by-solving-complex-challenges"
              element={<InsightAIOPS />}
            />
            <Route exact path="Why-do-we-need-AIOps-and-where-does-it-fit-with-the-modern-IT-environment" element={<BlogIT />} />
            <Route
              exact
              path="AI-for-Retail-Discover-how-AI-can-revolutionize-the-retail-industry-and-help-businesses-increase-sales-improve-customer-experience-and-optimize-operations"
              element={<InsightAI />}
            />
            <Route
              exact
              path="how-to-scale-ai-in-retail-industry-with-data-management"
              element={<ScaleAI />}
            />
             <Route
              exact
              path="data-migration"
              element={<DataMigration />}
            />
            <Route
              exact
              path="swiftinisghts-Webinar"
              element={<SwiftInisghtsWebinar />}
            />
             
            
            <Route
              path="webinar-thank-you-reshaping-the-retail-industry-through-AI"
              element={<Videowebinar />}
            />
          </Route>
          <Route path="/webinars" element={<Webinar />}>
          <Route
              path="reshaping-the-retail-industry-through-AI"
              element={<Thankswebinar />}
            />
          </Route>
           
          <Route path="/cookiespolicy" element={<CookiesPolicy />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/termsandconditions" element={<Termsandconditions />} />
          <Route path="/aiml" element={<RedirectAIML />} />
          <Route path="/blog-seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry" element={<Redirectways />} />
          <Route path="/webinar-reshaping-the-retail-industry-through-AI" element={<RedirectWebinar />} />
          <Route path="/swiftinisghts-Webinar" element={<RedirectanotherWebinar />} />
        </Routes>
      </div>
      {url != "webinars/reshaping-the-retail-industry-through-AI" &&
      url !=
        "blogs/webinar-thank-you-reshaping-the-retail-industry-through-AI" &&
      url != "blogs/swiftinisghts-Webinar" ? (
        <div className="industry-section-row">
          <Footer />
        </div>
      ) : null}
    </>
  );
}

export default App;
