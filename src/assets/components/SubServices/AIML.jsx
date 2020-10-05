import React from "react";
import DataLabeling from "../../Data/SubService-Data/DataLabeling";
import SupportIocn from "../../images/HomePage/homepage-about-details-IMG/amnet-support.png";
import SubServicesData from "../../Data/SubService-Data/SubServicesData";

function AIML ({match}){
    return (
        
        <>
        {console.log(match)}
            {/* SUB-SERVICE AI/ML INTRO */}
            <div className="sub-service-intro container-fluid">
            <div className="row all-margin">


            {/* <div className="col-lg-6 subService-AIML-intro-caption all-margin">
                <h2>Data Labeling</h2>
                <p>At Amnet Digital we combine our human-assisted approach with machine-learning and give you the high-quality training data you need. 
                    Our image & video annotation, 
                    text annotation, speech/audio annotation services will give you the confidence to deploy your AI and ML models at scale.
                </p>

                <div className="subService-AIML-intro-btn">
                    <a href="/casestudies">
                        <button type="button" className="btn btn-default">View Details</button>
                    </a>
                </div>
            </div> */}

            {SubServicesData.filter(data => data.id == match.params.id).map(serviceDetail => {
                return (
                    <>
                                <div className="col-lg-6 subService-AIML-intro-caption all-margin">
                <h2>{serviceDetail.title}</h2>
                <p>{serviceDetail.description}
                </p>

                <div className="subService-AIML-intro-btn">
                    <a href="/casestudies">
                        <button type="button" className="btn btn-default">View Details</button>
                    </a>
                </div>
            </div>
                    </>
                )
            })}
            
        </div>
            </div>

            <div className="sub-service-data-section">
            {DataLabeling.filter(data => data.name == match.params.id).map((dataDetail, index) => {
    return (
        !(index % 2) ?
        <div key={dataDetail.id} className="all-margin">
            <div className="row no-gutters">
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <img src={dataDetail.imgSrc} alt="image" className="img-fluid" />
                </div>
                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12">
                <h2>
                <span>
                    <img src= {SupportIocn} className="img-fluid about-icons" alt = "end to end" />
                </span>
                    
                    {dataDetail.title}</h2>
                    <p>{dataDetail.description}</p>
                </div>
            </div>
        </div> :
        <div style={{backgroundColor:"#F2F2F2", padding:"10px",marginTop:"20px"}}>
            <div key={dataDetail.id} className=" mt-3 all-margin">
        <div className="row" >
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 desc">
            <h2>
            <span>
                <img src= {SupportIocn} className="img-fluid about-icons" alt = "end to end" />
            </span>
            {dataDetail.title}</h2>
            <p>{dataDetail.description}</p>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12">
            <img src={dataDetail.imgSrc} alt="image" className="img-fluid" />
            </div>
        </div>
    </div>
        </div>
    )
})}
            </div>
        </>
    );
}

export default AIML;


