import React from "react";
import Whyamnet from "../../images/careers-page/whyament.png";

function WeValueInnovation (){
    return (
        <>
            <div className="weValueInnovation">
                <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                   <h1 className="text-white amnet-styling ">Why Amnet Digital</h1>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex">      
                 <h2 className="text-white impact-space ">Impact<hr className="hr-styling"/></h2>
                 <h2 className="text-white impact-space">Development <hr/></h2>
                 <h2 className="text-white impact-space">Progress <hr/></h2>
                 <h2 className="text-white impact-space">Support<hr/></h2>   
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
            <img className="d-block w-100 wevalue-img" src={Whyamnet} alt="First slide"/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 my-auto">
                     <h1 className="proven-styling">Proven track record</h1>
                     <h1 className="years-styling mt-4">4+ years, built 10+ AI-based Digital Solutions, and successfully servicing Fortune 1000 companies.</h1>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default WeValueInnovation;