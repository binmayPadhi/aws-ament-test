import React from "react";
import MediaQuery from "react-responsive";
import { ReactSVG } from "react-svg";
import Empowers from "../../Data/Services-Data/Empower";
import Wesupport from "./SvgImg";
import Strong from "./Svgtwo";
import Fourthsvg from "./Svgfour";
import Fifthsvg from "./Svgfive";
const EmpowerService = () => {
  let Empowerdata = [];
  Empowerdata = [...Empowers];
  return (
    <>
      <div className="row mx-auto w-90">
        <h1 className="empower-style above-spacings">EMPOWER YOUR DATA JOURNEY</h1>
        <p className="decode-style">Decode, Enchance & Cut Costs</p>
      </div>
      <MediaQuery query="(max-width:1024px)">
      <div className="row mx-auto w-90">
        <div className="col-sm-12">
        <div className="border-greyish">
        <Wesupport />
        </div></div>
        <div className="col-sm-12">
          <h1 className="fs-30 mt-1 fw-bold-600">Unpack Unstructured Data</h1>
          <p className="fs-18 fs-bold-400 text-grey  mt-3 justifying-text">Amnet Digital’s IDP solution simplifies complex data processing tasks to handle and solve real-world data extraction challenges using our proprietary AI technology with the blend of advanced Machine Learning, Computer vision, and Natural Language Processing frameworks for meaningful results.</p>
        </div>
        <div className="col-sm-12">
        <div className="col-sm-12">
        <div className="border-greyish">
        <Strong />
        </div></div>
        <h1 className="fs-30 mt-1 fw-bold-600">From Any Document Type</h1>
          <p className="fs-18 fs-bold-400 text-grey  mt-3 justifying-text">Our IDP solutions help businesses across industries to streamline document-heavy processes to deliver end-to-end process automation. Furthermore, you can easily integrate your existing systems with our custom AI-Driven IDP accelerator within no time to get started and achieve your business goals.</p>
        </div>
        <div className="col-sm-12">
        <div className="border-greyish">
        <Fourthsvg />
        </div>
        </div>
        <div className="col-sm-12">
          <h1 className="fs-30 mt-1 fw-bold-600">Saving Time & Cost. Improving Data Accuracy</h1>
          <p className="fs-18 fs-bold-400 text-grey  mt-3 justifying-text">Our custom AI-led IDP workflows and pre-trained APIs can quickly adapt and fit into your business rules to save 100+ hours per month and reduce the tons of operations time. Our self-serve framework can extract, ingest, classify, prioritise, and pre-process any type of complex document to precisely identify and capture key values and tables for positive impact.</p>
        </div>
        <div className="col-sm-12">
        <div className="col-sm-12">
        <div className="border-greyish">
        <Fifthsvg />
        </div></div>
        <h1 className="fs-30 mt-1 fw-bold-600">For A Positive Impact</h1>
          <p className="fs-18 fs-bold-400 text-grey  mt-3 justifying-text">Our unique data processing cloud factory with the blend of proprietary NLP - based classification framework will guide your datasets and integrate with your existing systems to achieve 95% touch less processing leveraging smart validation models and rules. Improve contextual data validation on extracted complex data to categorize key-value pairs and line items for meaningful and positive business outcomes.</p>
        </div>
      </div>
        </MediaQuery>
        {/* large devices */}
        <MediaQuery query="(min-width:1025px)">
        <div className="row mx-auto w-90 below-spacings padding-80">
        <div className="col-lg-6 mb-5">
          <div className="border-greyish">
        <Wesupport />
        </div>
        </div>
        <div className="col-lg-6 mb-5">
          <h1 className="fs-30  fw-bold-600">Unpack Unstructured Data</h1>
          <p className="fs-18 fs-bold-400 text-grey   pt-4 justifying-text">Amnet Digital’s IDP solution simplifies complex data processing tasks to handle and solve real-world data extraction challenges using our proprietary AI technology with the blend of advanced Machine Learning, Computer vision, and Natural Language Processing frameworks for meaningful results.</p>
        </div>
        <div className="col-lg-6  mb-5 mt-5">
        <h1 className="fs-30  fw-bold-600">From Any Document Type</h1>
          <p className="fs-18 fs-bold-400 text-grey pt-4 justifying-text">Our IDP solutions help businesses across industries to streamline document-heavy processes to deliver end-to-end process automation. Furthermore, you can easily integrate your existing systems with our custom AI-Driven IDP accelerator within no time to get started and achieve your business goals.</p>
        </div>
        <div className="col-lg-6  mb-5 mt-5">
        <div className="border-greyish">
        <Strong />
        </div>
        </div>
        <div className="col-lg-6 mt-5 mb-5">
        <div className="border-greyish">
        <Fourthsvg />
        </div>
        </div>
        <div className="col-lg-6 mt-5  mb-5">
          <h1 className="fs-30 fw-bold-600">Saving Time & Cost. Improving Data Accuracy</h1>
          <p className="fs-18 fs-bold-400 text-grey  pt-4 justifying-text">Our custom AI-led IDP workflows and pre-trained APIs can quickly adapt and fit into your business rules to save 100+ hours per month and reduce the tons of operations time. Our self-serve framework can extract, ingest, classify, prioritise, and pre-process any type of complex document to precisely identify and capture key values and tables for positive impact.</p>
        </div>
        <div className="col-lg-6 mt-5 mb-5">
        <h1 className="fs-30  fw-bold-600">For A Positive Impact</h1>
          <p className="fs-18 fs-bold-400 text-grey  pt-4 justifying-text">Our unique data processing cloud factory with the blend of proprietary NLP - based classification framework will guide your datasets and integrate with your existing systems to achieve 95% touch less processing leveraging smart validation models and rules. Improve contextual data validation on extracted complex data to categorize key-value pairs and line items for meaningful and positive business outcomes.</p>
        </div>
        <div className="col-lg-6 mt-5 mb-5">
        <div className="border-greyish">
        <Fifthsvg />
        </div>
        </div>
      </div>
          </MediaQuery>
    </>
  );
};

export default EmpowerService;
