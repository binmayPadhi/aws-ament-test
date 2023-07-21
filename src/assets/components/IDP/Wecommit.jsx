import React from "react";
import GowayData from "../../Data/Services-Data/GowayData";
import iso from "../../images/Service-Page/iso_72001.png";
import soc from "../../images/Service-Page/soc_type-2.png";
import MediaQuery from "react-responsive";


const Wecommit = () => {
    return (
        <>
        {/* mobile devices */}
        <MediaQuery query="(max-width:1024px)">
        <div className="bg-goway">
            <div className="w-85 mx-auto">
            <h1 className="goway-heading text-center pt-5 below-spacings">We Commit to Keep your Data Secure & Compliant</h1>
                <div className="row goway-bottom">   
                <div className="hr-grey-left">             
                <div className=" ">
                      <img src={iso} className="iso-styling"/>
                        <img src={soc} className="iso-styling pl-3"/>
                    </div>              
                    <div className="above-spacings image-spacel">
                        <h1 className="goway-subheading">Amnet Digital Offers Enterprise-Grade Security</h1>    
                        <div className="above-space-40">
                        {GowayData.Commit.map((response) => {
                            return (
                                <>
                                    <ul className="goway-hlist ml-2">
                                        <li className="goway-list">{response.line}</li>
                                    </ul>
                                </>
                            )
                        })} 
                      </div>
                    </div>
                    </div>   
                </div>
            </div>
           </div>  
        </MediaQuery>
         <MediaQuery query="(min-width:1025px)">
            <div className="bg-goway">
            <div className="w-85 mx-auto">
            <h1 className="goway-heading text-center guarantee-space above-spacings">We Commit to Keep your Data Secure & Complaint</h1>
                <div className="row goway-bottom">                   
                <div className="col-lg-2 iso-space pl-lg-5 above-spacings">
                      <img src={iso} className="iso-styling"/>
                    </div>
                    <div className="col-lg-2 iso-space above-spacings">
                        <img src={soc} className="iso-styling"/>
                    </div>              
                    <div className="col-lg-8 hr-grey-left above-spacings image-spacel">
                        <h1 className="goway-subheading">Amnet Digital Offers Enterprise-Grade Security</h1>    
                        <div className="above-space-40">
                        {GowayData.Commit.map((response) => {
                            return (
                                <>
                                    <ul className="goway-hlist ml-2">
                                        <li className="goway-list">{response.line}</li>
                                    </ul>
                                </>
                            )
                        })} 
                      </div>
                    </div>
                </div>
            </div>
           </div>
           </MediaQuery>
        </>
    )
}

export default Wecommit;



