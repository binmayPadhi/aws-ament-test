import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
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
import RealValue from "./Resources/RealValue";
import Product from "./Products/products";
import ProductSwiftinsight from "./Products/Productswiftinsight";
import Pressrelease from "./Pressrelease";
import Pressdata from "./Pressdata";
import ImageVideoAnnotation from "./Resources/ImageVideoAnnotation";
import Forecasting from "./Resources/Forecasting";
import GenerativeAI from "./Resources/GenerativeAI";
import InventoryManagement from "./Resources/InventoryManagement";
import GenAI from "./SubServices/GenAI";
import Pressreleasehome from "./Resources/Pressreleasepages/Pressreleasehome";
import Pressreleasetwo from "./Resources/Pressreleasepages/Pressreleasetwo";
import Telangana from "./Resources/Pressreleasepages/Telangana";
import Thankswebinarcopy from "./Resources/Pressreleasepages/Thankswebinarcopy";
import Amnetpartner from "./Resources/Pressreleasepages/Amnetpartner";
import Sitemap from "./Sitemap/sitemap";
import AIrecognition from "./Resources/Pressreleasepages/AIrecognition";
import AmnetDigital from "./AmnetDigital";
import Leadership from "./ContactUs/Leadership";
import VoiceBot from "./Resources/VoiceBot";
import VoiceBotCasestudy from "./voicebotcasestudy";
import WhitePapers from "./whitepapers";
import Perplexity from "./Perplexity";
import GenBlog from "./Blogs/Genai-blog";
import Inventorymanagement from "./Blogs/Inventorymanagement";
import Generativeai from "./Blogs/Generativeai";
import ForeCasting from "./Blogs/ForeCasting";
import Videoannotation from "./Blogs/Videoannotation";
import RealValues from "./Blogs/RealValues";
import Datamigration from "./Blogs/Datamigration";
import Scaleai from "./Blogs/Scaleai";
import AIOPenvironment from "./Blogs/AIopenvironment";
import AIOPSretail from "./Blogs/AIOPSretail";
import Insightdiscover from "./Blogs/Insightdiscover";
import Sevensignificant from "./Blogs/Sevensignificant";


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
          <Route path="/contactus" element={<Navigate to="/contact-us" replace />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/aboutus" element={<Navigate to="/about-us" replace />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/life-at-amnet-digital" element={<AmnetDigital />}/>
          <Route
            exact
            path="/odc-and-iso-recognized-certification"
            element={<Isoimg />}
          />
          <Route
            exact
            path="/generative-ai-solutions"
            element={<GenAI />}
          />
          <Route path="/services" element={<OurServices />}>
            <Route path="" element={<Services />} />
            <Route path=":name" element={<AIservices />} />
            <Route path=":name/:service" element={<Viewsubservice />} />
          </Route>
          <Route path="/careers" element={<CareerHome />}>
            <Route path="" element={<Careers />} />
            <Route path=":name" element={<Apply />} />
          </Route>
          <Route path="/xml" element={<Sitemap />} />
          <Route path="/casestudies" element={<Navigate to="/case-studies" replace />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/site-map" element={<Sitemap />} />
          <Route path="/legalresources" element={<Navigate to="/legal-resources" replace />} />
          <Route path="/legal-resources" element={<Legalterms />} />
          <Route path="/products" element={<Product />}  />
          <Route path='/press-release/amnet-digital-named-best-ai-data-analytics-company-of-the-year-2023' element={<Navigate to="/press-releases/amnet-digital-named-best-ai-data-analytics-company-of-the-year-2023" replace/> } />
          <Route path="/press-releases" element={<Pressrelease />} >
            <Route exact path="" element={<Pressreleasehome />} />
            <Route
              path="reshaping-the-retail-industry-through-AI"
              element={<Thankswebinarcopy />}
            />
            <Route path="ament-digital-announces-launch-of-swift-insights" element={<Pressreleasetwo />} />
            <Route path="telangana-state-awards-winner" element={<Telangana />} />
            <Route path="amnet-digital-partners-with-intel" element={<Amnetpartner />} />
            <Route path="leading-gen-ai-chatbot-solutions" element={<AIrecognition />} />
            <Route path="amnet-digital-named-best-ai-data-analytics-company-of-the-year-2023" element={<Pressdata />} />
          </Route>
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
            <Route 
            exact
             path="Why-do-we-need-AIOps-and-where-does-it-fit-with-the-modern-IT-environment"
              element={<BlogIT />} />
            <Route
              exact
              path="AI-for-Retail-Discover-how-AI-can-revolutionize-the-retail-industry-and-help-businesses-increase-sales-improve-customer-experience-and-optimize-operations"
              element={<InsightAI />}
            />
            <Route
              exact
              path="5-ways-AI-can-enhance-and-optimize-your-inventory-management"
              element={<InventoryManagement />}
            />
            <Route
              exact
              path="how-to-scale-ai-in-retail-industry-with-data-management"
              element={<ScaleAI />}
            />
            <Route
              exact
              path="the-real-value-ai-can-bring-to-retail-industry"
              element={<RealValue />}
            />
            <Route
              exact
              path="medical-image-video-data-annotation-services"
              element={<ImageVideoAnnotation />}
            />
            <Route
            exact
            path="how-our-next-Gen-AI-voice-bot-is-transforming-conversational-AI"
            element={<GenBlog/>}
            />
            <Route
              exact
              path="supply-chain-planning-decisions-with-actionable-demand-forecasting-insights"
              element={<Forecasting />} />
            <Route exact path="10-ways-how-generative-ai-is-impacting-retail-organizations"
              element={<GenerativeAI/>} />
            <Route
              exact
              path="6-steps-to-include-in-your-data-migration-journey"
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
          <Route
              exact
              path="leadership"
              element={<Leadership/>}
            />
          <Route path="/cookiespolicy" element={<Navigate to="/cookies-policy" replace />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/privacypolicy" element={<Navigate to="/privacy-policy" replace/>} />
          <Route path="/privacy-policy" element={<Privacypolicy />} />
          <Route path="/termsandconditions" element={<Navigate to="/terms-of-use" replace/>} />
          <Route path="/terms-of-use" element={<Termsandconditions />} />
          <Route path="/aiml" element={<Navigate to="/ai-ml" replace/>} />
          <Route path="/services/dataengineering/data-pipelines" element={<Navigate to="/services/data-engineering/data-pipelines"/>}/>
          <Route path="/services/datamanagement/data-architecture-management" element={<Navigate to="/services/data-management/data-architecture-management"/>}/>
          <Route path="/services/cloudservices/cloud-integration" element={<Navigate to="/services/cloud-services/cloud-integration"/>}/>
          <Route path="/services/strategyconsulting/data-strategy" element={<Navigate to="/services/strategy-consulting/data-strategy"/>}/>
          <Route path="/services/strategyconsulting/application-development" element={<Navigate to="/services/strategy-consulting/application-development"/>}/>
          <Route path="/services/qualityassurance/functional-testing" element={<Navigate to="/services/quality-assurance/functional-testing"/>}/>
          <Route path="/services/userexperinces/user-research-and-analysis" element={<Navigate to="/services/user-experience/user-research-and-analysis"/>}/>
          <Route path="/services/dataengineering/data-transformations" element={<Navigate to="/services/data-engineering/data-transformations"/>}/>
          <Route path="/ai-ml" element={<RedirectAIML />} />
          <Route path="/case-studies/ai-voice-bot" element={<VoiceBotCasestudy />}/>
          <Route path="/blog-seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry" element={<Redirectways />} />
          <Route path="/webinar-reshaping-the-retail-industry-through-AI" element={<RedirectWebinar />} />
          <Route path="/swiftinisghts-Webinar" element={<RedirectanotherWebinar />} />
          <Route path="/whitepaper" element={<WhitePapers />} />
          <Route path="/perplexity" element={<Perplexity />} />
          <Route path="/GenBlog" element={< GenBlog/>}/>
          {/* <Route path="*" element={<Termsandconditions />}/> */}
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


















