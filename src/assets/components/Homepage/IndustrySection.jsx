import React from "react";
import IndusrtySectionData from "../../Data/Homepage-Data/IndustrySectionData";
import Trolly from "../../images/HomePage/Trolly.png";
import "../../CSS/Services.css";

function IndustrySection() {
  return (
    <>
      {/* <!-- INDUSTRIES WE COVER --> */}
      <div className="center text-center py-4 mt-5 mb-5 service_title">
        Industries we serve
      </div>
      <div className="container-fluid">
      <div className="box-industries">
       
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
           <img src={Trolly} className="w-100"/>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 my-auto">
             <h1 className="fs-20 fw-bold-500">AI/ML and Data Analytics solutions for Retail</h1>
             <p className="fs-14 fw-bold-400">We help retail businesses to unpack the power of artificial intelligence and accelerate digital transformation with our custom AI and Data Analytics solutions. We design and deploy 
              advanced AI algorithms to reduce costs, streamline processes and automate workflows leveraging machine learning.</p>
        <div className="d-flex pt-5">
         <div className="box-green">
           <p  className="fs-14 fw-bold-500 text-white">Retail</p>
         </div>
         <div className="box-grey">
           <p  className="fs-14 fw-bold-500 text-black">Finance</p>
         </div>
         <div className="box-healthcare">
           <p  className="fs-14 fw-bold-500 text-black">Healthcare</p>
         </div>
         <div className="box-info">
           <p  className="fs-14 fw-bold-500 text-black">Information Management</p>
         </div>
         <div className="box-hrms">
           <p  className="fs-14 fw-bold-500 text-black">HRMS</p>
         </div>
        </div>
        </div>
      </div>
        </div>
      </div>
    </>
  );
}

export default IndustrySection;
