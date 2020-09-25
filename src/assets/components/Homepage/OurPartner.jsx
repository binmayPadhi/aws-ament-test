import React from "react";
import ourPartnerData from "../../Data/Homepage-Data/OurPartner";

function OurPartner (){
    return (
        <>
            <div className="our-partner container-fluid">
                <div className=" row all-margin">

                    {ourPartnerData.map(logo => {
                        return (
                            <div className="col-2 partner-logo" key = {logo.id}>
                                <img className="img-fluid mx-auto" src= {logo.partnerLogo} alt = "Partner"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default OurPartner;