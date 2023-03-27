import React from "react";
import openquote from "../../images/careers-page/openquotes.png";
import closedquotes from "../../images/careers-page/closedquotes.png";
import vara from "../../images/careers-page/vara.png";
const Ourcore = () =>{
    return(
        <>
        <div className="container mt-5">
            <img src={openquote}/>
            <p className="fs-24 fw-bold-500 text-green">Our core values, diversity, and awesome work culture attract the best technology talent, 
                who will be a part of our leading journey in solving our customers' complex technology challenges. 
                Our meaningful investment in learning and development (L&D) 
                programs for employees redefine our workplace for better digital innovation.
            </p>
            <img src={closedquotes} className="img-center"/>
            <hr/>
            <div className="row">
            <img src={vara} className="vara-img"/>
            <div className=" mt-3">
            <p className="fs-14 fw-bold-500">Vara Prasad Tupalli</p>
            <p className="fs-15 fw-bold-400">Director - Human Resources </p>
            </div>
            </div>
        </div>
        
        
        </>
    )
}

export default Ourcore;