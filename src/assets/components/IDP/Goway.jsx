import React from "react";
import GowayData from "../../Data/Services-Data/GowayData";
import working from "../../images/Service-Page/workinglady.png";
import MediaQuery from "react-responsive";


const Goway = () => {
    return (
        <>
            {/* Mobile devices */}
            <MediaQuery query="(max-width:1024px)">
                <div className="bg-goway">
                    <div className="w-85 mx-auto">
                        <div className="row above-spacings below-spacingsp">
                            <div className="col-lg-7">
                                <h1 className="goway-heading">Go Way Beyond OCR.</h1>
                                <span className="goway-heading mb-5">Powered by AI.</span>
                                <div className="hr-grey-left ps-5">
                                <div className="col-lg-5 above-spacings  image-spacel">
                                    <img src={working} className="img-idp-mobile" />
                                </div>                               
                                <div className="above-space-40">
                                    {GowayData.IDPgoway.map((response) => {
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
            {/* large devices */}
            <MediaQuery query="(min-width:1025px)">
                <div className="bg-goway">
                    <div className="w-85 mx-auto">
                        <div className="row goway-spacing">
                            <div className="col-lg-7">
                                <h1 className="goway-heading ">Go Way Beyond OCR.</h1>
                                <span className="goway-heading mb-5">Powered by AI.</span>
                                <div className="above-space-40">
                                    {GowayData.IDPgoway.map((response) => {
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
                            <hr className="hr-grey-right  d-lg-none" />
                            <div className="col-lg-5 above-spacings hr-grey-left image-spacel">
                                <img src={working} className="img-idp" />
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </>
    )
}

export default Goway;



