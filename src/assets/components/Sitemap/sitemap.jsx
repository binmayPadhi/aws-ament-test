import React from "react";
import "../../CSS/webinar.css";
import director_1 from "../../images/Sitemap.png";

const Sitemap = () => {
  return (
    <>
    <div
        className="sub-service-intro-site position-realtive"
        style={{
          backgroundImage: `url(${director_1})`,
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
          </div>
          <div className="bottom-img-sitemap w-100">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <p className="fs-24 fw-bold-600 text-white">Sitemap</p>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12"></div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="w-85 mx-auto">
      <div className="row mt-3">
            <div className="col-lg-6">
              <p>
             <a  className="fs-16 black-color" href="/">Home</a>
             </p>
             <p className="fs-18">
             <a className="fs-16 black-color" href="/about-us">About Us</a>
             </p>
             <p className="fs-18">
             <a className="fs-16 black-color" href="/services">Services</a>
             </p>
             <p className="fs-18">
             <a href="/services/ai-ml">AI/ML</a>
             </p>
             <p className="fs-18">
             <a href="/services/ai-ml/generative-ai">Generative AI</a>
             </p>
             <p className="fs-18">
             <a href="/services/ai-ml/generative-ai">Data Engineering</a>
             </p>
             <p className="fs-18">
             <a href="/services/cloud-services">Cloud Services</a>
             </p>
             <p className="fs-18">
             <a href="/services/data-annotation">Data Annotation</a>
             </p>
             <p className="fs-18">
             <a href="/services/data-management">Data Management</a>
             </p>
             <p className="fs-18">
             <a href="/services/quality-assurance">Quality Assurance</a>
             </p>
             <p className="fs-18">
             <a href="/services/advanced-analytics">Advanced Analytics</a>
             </p>
             <p className="fs-18">
             <a href="/services/user-experience">User Experience</a>
             </p>
             <p className="fs-18">
             <a href="/services/strategy-consulting">Strategy & Consulting</a>
             </p>
             <p className="fs-18">
             <a className="fs-16 black-color" href="/blogs">Insights</a>
             </p>
             <p className="fs-18">
             <a className="fs-16 black-color" href="/blogs">Blogs</a>
             </p>
             <p className="fs-18">
             <a href="/blogs/5-ways-AI-can-enhance-and-optimize-your-inventory-management">5 Ways AI can Enhance and Optimize your Inventory Management</a>
             </p>
             <p className="fs-18">
             <a href="/blogs/10-ways-how-generative-ai-is-impacting-retail-organizations">10 ways how Generative AI has a positive impact on Retail organizations</a>
             </p>
             <p className="fs-18">
             <a href="/blogs/supply-chain-planning-decisions-with-actionable-demand-forecasting-insights">Foster Supply Chain Planning Decisions with Actionable Demand Forecasting Insights</a>
             </p>
             <p className="fs-18">
             <a href="/blogs/medical-image-video-data-annotation-services">Medical Image / Video Data Annotation: How to go about it?</a>
             </p>
             <p className="fs-18">
             <a href="/blogs/the-real-value-ai-can-bring-to-retail-industry">The Real Value AI Can Bring to Your Retail Business</a>
             </p>
             <p className="fs-18">
             <a href="/blogs/6-steps-to-include-in-your-data-migration-journey">6 Key Steps To Include In Your Data Migration Project</a>
             </p>
             <p className="fs-18">
             <a href="/blogs/how-to-scale-ai-in-retail-industry-with-data-management">How to Scale AI in the Retail Industry with Advanced Data Management Strategies</a>
             </p>
             <p className="fs-18">
             <a href="/blogs/Why-do-we-need-AIOps-and-where-does-it-fit-with-the-modern-IT-environment">Why do we need AIOps and where does it fit with the modern IT environment?</a>
             </p>
             <p className="fs-18">
             <a href="/blogs/What-is-AIOps-and-explore-how-it-is-revolutionizing-the-retail-industry-by-solving-complex-challenges">What is AIOps and explore how it is revolutionizing the retail industry by solving complex challenges?</a>
             </p>
             <p className="fs-18">
             <a href="/blogs/AI-for-Retail-Discover-how-AI-can-revolutionize-the-retail-industry-and-help-businesses-increase-sales-improve-customer-experience-and-optimize-operations">AI for Retail - Discover how AI can revolutionize the retail industry and help businesses increase sales, improve customer experience, and optimize operations</a>
             </p>
             <p className="fs-18">
             <a href="/blogs/seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry">Seven Significant ways Artificial Intelligence (AI) is Impacting the Retail Industry</a>
             </p>
             <p className="fs-18">
             <a className="fs-16 black-color" href="/webinars/reshaping-the-retail-industry-through-AI">Webinar</a>
             </p>
             <p className="fs-18">
             <a className="fs-16 black-color" href="/press-releases">Press Releases</a>
             </p>
             <p className="fs-18">
             <a href="/press-releases/amnet-digital-partners-with-intel">Amnet Digital unveils its partnership with Intel, blending IT expertise with innovation</a>
             </p>
             <p className="fs-18">
             <a href="/press-releases/ament-digital-announces-launch-of-swift-insights">Amnet Digital Announces The Launch Of Swift Insights, An AI-Powered Analytics Platform</a>
             </p>
             <p className="fs-18">
             <a href="/press-releases/telangana-state-awards-winner">Best Service Company - Telangana State Awards</a>
             </p>
             <p className="fs-18">
             <a  href="/press-releases/amnet-digital-named-best-ai-data-analytics-company-of-the-year-2023">Amnet Digital named the "Best AI & Data Analytics Company Of The Year 2023" by Business Connect</a>
             </p>
             <p className="fs-18">
             <a href="/press-releases/reshaping-the-retail-industry-through-AI">Reshaping the Retail Industry through Advanced Analytics and AI!</a>
             </p>            
            </div>
            <div className="col-lg-6">
            <p className="fs-18">
             <a className="fs-16 black-color" href="/legal-resources">Legal Resources</a>
             </p>
             <p className="fs-18">
             <a href="/privacy-policy">Privacy Policy</a>
             </p>
             <p className="fs-18">
             <a href="/cookies-policy">Cookies Policy</a>
             </p>
             <p className="fs-18">
             <a href="/terms-of-use">Terms of use</a>
             </p>
             <p className="fs-18">
             <a className="fs-16 black-color" href="/case-studies">Case Studies</a>
             </p>
             <p className="fs-18">
             <a className="fs-16 black-color" href="/careers">Careers</a>
             </p>
            </div>
          </div>
          </div>
      
    </>
  );
};

export default Sitemap;
