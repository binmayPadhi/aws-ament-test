import React, { useEffect } from "react";
import ServiceBG from "../images/Service-Page/service-main-bg.png";
import Goway from "./IDP/Goway";
import laptop from "../images/Service-Page/laptop.png";
import EmpowerService from "./IDP/Empower";
import Decode from "./IDP/Decode";
import Wecommit from "./IDP/Wecommit";
import heroimg from "../images/Service-Page/hero_image.png";
import Startdocument from "./IDP/Startdocument";
import Resourceblogs from "./IDP/Resourceblog";
import Fewcases from "./IDP/Fewcases";
import Frequent from "./IDP/Frequently";
import Guarantee from "./IDP/Guarantee"; 
import Customer from "./IDP/Customer";
import MediaQuery from "react-responsive";
import Thirdsvg from "./IDP/Svgthree";
import { Helmet } from "react-helmet";
import { useState } from "react";




const IDP = () => {
  const [counter,setCounter]=useState(0);
  
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  const onScroll = (e) => {
    if(window.innerWidth >= 2560 && window.innerWidth < 1300) {
      if(window.scrollY > 5600) {
        setCounter(100);
      }
    } else if(window.innerWidth >= 1024 && window.innerWidth < 1300) {
      if(window.scrollY > 7900) {
        setCounter(100);
      }
    } 
    else if(window.innerWidth >= 1300 && window.innerWidth < 2560) {
      if(window.scrollY > 4800) {
        setCounter(100);
      }
    }
    else if(window.innerWidth >= 768 && window.innerWidth < 1024) {
      if(window.scrollY > 7700) {
        setCounter(100);
      }
    }
    // else if(window.innerWidth >= 320 && window.innerWidth < 768) {
    //   if(window.scrollY > 8900) {
    //     setCounter(100);
    //   }
    // } 
    else if(window.innerWidth >= 375 && window.innerWidth < 768) {
            if(window.scrollY > 7900) {
              setCounter(100);
            }
          } 
          else if(window.innerWidth >= 320 && window.innerWidth < 375) {
            if(window.scrollY > 8400) {
              setCounter(100);
            }
          }
    
  }

    return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AI-Led Intelligent Document Processing (IDP) Solution | Amnet Digital </title>
        <meta name="description" content="IDP solution- We help businesses to extract, transform, and automate complex, unstructured, and semi-structured documents into business-usable data.
" />
        <meta name="keywords" content="Intelligent document processing, IDP, Automate documents processing, AI-Led intelligent document processing, Document 
management, IDP, Unstructered documents processing" />
      </Helmet>
       {/* Mobile Devices  */}
      <MediaQuery query="(max-width: 1024px)">
        <div className="bg-navyblue">
          <div className="w-85 mx-auto">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="heading-intelligent">Intelligent Document Processing (IDP)</h1>
                <Thirdsvg />
                <p className="lets-styling">Let's not manually process documents!</p>
                <p className="Free-styling justifying-text">Free up your critical teams from the day-to-day manual documenting process.
                  With our IDP solution, you can fully automate business-critical documents – with a mere focus on scale, efficiency,
                  and visibility as our solution understands and interprets both complex text, tables, images and documents.</p>
                <button className="light-green-button" href="/contactus">Fully Automate Document Processing</button>
                <p className="last-line mt-5"><span className="green-text">*</span> It will zero cost you until you see adequate results</p>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 1025px)">
        <div className="bg-navyblue">
          <div className="w-85 mx-auto">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="heading-intelligent">Intelligent Document Processing (IDP)</h1>
                <p className="lets-styling">Let's not manually process documents!</p>
                <p className="Free-styling justifying-text mb-5">Free up your critical teams from the day-to-day manual documenting process.
                  With our IDP solution, you can fully automate business-critical documents – with a mere focus on scale, efficiency,
                  and visibility as our solution understands and interprets both complex text, tables, images and documents.</p>
                <a className="light-green-button" href="/contactus">Fully Automate Document Processing</a>
                <p className="last-line mt-5 pt-2"><span className="green-text">*</span> It will zero cost you until you see adequate results</p>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-4 above-spacings">
              <div className="hero-image">
                <Thirdsvg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
    
      <div className="w-85 mx-auto">
      <h1 className="AI-extraction above-spacings">AI-Powered Data Extraction. At Scale.</h1>
        <div className="row mb-5 pb-5">
          <div className="col-lg-6">
          <img src={laptop} className="laptop-styling" />
          </div>
          <div className="col-lg-6 mt-5">
            <p className="text-extract justifying-text">Extract and structure data from complex documents automatically, giving you and team more time for high-impact work.</p>
            <p className="text-extract justifying-text">Our human-in-the-closed-loop approach helps solve your toughest operational and document processing challenges like claims processing, reduce error rates, handle different variations in multiple languages, advance field extraction accuracy, speed operations, and improve customer experience.  </p>
            <p className="text-extract justifying-text">We empower your resources to do more and achieve more than just entering data from positive and meaningful results. Amnet Digital’s content Analyzer solution powered by machine learning helps customers streamline the bill payment process pace.</p>
          </div>
        </div>
      </div>
      <Goway />

     
      <EmpowerService />
      {/* <Wesupport /> */}

      <Decode />
      <div id="customer-section">
      <Customer />
      </div>
      
     
      <div className="guarantee-section" id="guarantee-section">
      <Guarantee counter={counter} />
      </div>
      <div className="mt-5 mb-5">
        <Fewcases />
      </div>
     
      <Frequent />
      <Wecommit />

      <Resourceblogs />

      <Startdocument />
    </>
  )


}

export default IDP;