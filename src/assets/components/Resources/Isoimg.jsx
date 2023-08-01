import React from "react";
import ISO from "../../images/Service-Page/ISOpage/ISOpage1024_1.jpg";
import EQUALITAS from "../../images/Service-Page/Equalitas/Equalitas1024_1.jpg";
import AboutUsBG from "../../images/Resources-page/certific.png";
import { Link } from "react-router-dom";
import pngim from "../../images/Resources-page/ISOpage.pdf";
import { Helmet } from "react-helmet";


const Isoimg = () =>{
  const redirectTo = (e) => {
    e.preventDefault();
   
  };
        return (
          <>
           <Helmet>
        <meta charSet="utf-8" />
        <title>ISO 27001:2013 | ISO/IEC 27001:2013 - Amnet Digital </title>
        <meta name="title" content="ISO 27001:2013 | ISO/IEC 27001:2013 - Amnet Digital" />
        <meta name="description" content="ISO 27001:2013 | ISO/IEC Information security Management Systems 27001:2013" />
        <meta name="keywords" content="" />
      </Helmet>
          <div
        className="position-realtive"
        style={{
          backgroundImage: `url(${AboutUsBG})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height:"600px"
         
        }}
      >
        {/* <div className="fs-35 text-white position-absolute top-0">
          <Navbar navChange={navColor} />
        </div> */}
        <div className="w-85 mx-auto">
          <div className="text-center-img">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-sm-12">
                <h2
                  className="fw-bold-600 text-white fs-35 text-capitalize"
                  data-text="Your Tech Innovation Catalyst"
                >
                 Registration Certificates
                </h2>
                <p className="fw-bold-400 fs-16 text-white mb-5 mr-5 mt-4">
                 
                </p>
               
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12"></div>
            </div>
          </div>
          <div className="bottom-img-about w-100">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
               
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12"></div>
            </div>
          </div>
        </div>
      </div>
          <div className="certificates-spacing">
          <div className="container">
            <div className="row  certificates-spacing ">
              <div className="col-lg-12">
           <img src={ISO} className="isoimg-styling"/>
           </div>
           <div className="col-lg-12">
           <img src={EQUALITAS} className="certification-styling" />
           </div>
           </div>
           </div>
           </div>
          </>
        );
      
      
}

export default Isoimg;