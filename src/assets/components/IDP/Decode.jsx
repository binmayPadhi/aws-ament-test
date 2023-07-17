import React from "react";
import GowayData from "../../Data/Services-Data/GowayData";
import studybook from "../../images/Service-Page/studybook.png";
import MediaQuery from "react-responsive";


const Decode = () => {
    return (
        <>
        {/* Mobile devices */}
        <MediaQuery query="(max-width:1024px)">
        <div className="bg-goway">
            <div className="w-85 mx-auto">
                <div className="row goway-bottom padding-80">
                <h1 className="decode-heading mb-5 pb-5">Decode your challenging documents with Amnet Digital's IDP solution</h1>
                <div className="hr-grey-left">
                <div className="col-lg-4  pl-lg-5 ">
                      <img src={studybook} className="img-idp-mobile"/>
                    </div>               
                    <div className="col-lg-8  image-spacel">                            
                        <div className="above-space-40">
                        {GowayData.Decode.map((response) => {
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
                    <button className="light-green-button mt-5">Automate Complex Documents</button>
                </div>
            </div>
           </div>
        </MediaQuery>
        {/* large devices */}
        <MediaQuery query="(min-width:1025px)">
            <div className="bg-goway">
            <div className="w-85 mx-auto pt-4">
                <div className="row goway-bottom pt-5">
                <div className="col-lg-4 pl-lg-5 above-spacings">
                      <img src={studybook} className="img-idp"/>
                    </div>
                    <hr className="hr-grey-line  d-lg-none"/> 
                    <div className="col-lg-8 hr-grey-left image-spacel">
                        <h1 className="decode-heading">Decode your challenging documents with Amnet Digital's IDP solution</h1>
                        <div className="above-space-40 ">
                            <div className="mb-5 pb-2">
                        {GowayData.Decode.map((response) => {
                            return (
                                <>
                                    <ul className="goway-hlist ml-2">
                                        <li className="goway-list">{response.line}</li>
                                    </ul>
                                </>
                            )
                        })}
                        </div>
                        <a href="/contactus" className="light-green-button">Automate Complex Documents</a>
                      </div>
                    </div>  
                </div>
            </div>
           </div>
           </MediaQuery>
        </>
    )
}

export default Decode;



