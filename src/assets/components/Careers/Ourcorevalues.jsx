import React from "react";
import openquotes from "../../images/careers-page/openquotes.png";
import closedquotes from "../../images/careers-page/closedquotes.png";
import vara from "../../images/careers-page/vara.png";

const Ourcorevalues = () => {
    return(
        <>
         <div className="w-90 mx-auto spacing-quotes">
          <div className="mt-5">
        <img alt="" src={openquotes} />
        <p className="fs-24 fw-bold-500 text-green">
          Our core values, diversity, and awesome work culture attract the best
          technology talent, who will be a part of our leading journey in
          solving our customers' complex technology challenges. Our meaningful
          investment in learning and development (L&D) programs for employees
          redefine our workplace for better digital innovation.
         <sub><img alt=" " src={closedquotes} className="margin-closedquotes pt-4" /></sub> 
        </p>
        <hr className="hr-separation" />  
        <div className="w-100 mx-auto mt-5"> 
        <div className="row ml-1">
          <img src={vara} className="vara-img" />
          <div className="mt-4 ml-3">
            <p className="fs-15 fw-bold-800">Vara Prasad Tupalli</p>
            <p className="fs-15 fw-bold-400">Chief Human Resources Officer</p>
          </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Ourcorevalues;