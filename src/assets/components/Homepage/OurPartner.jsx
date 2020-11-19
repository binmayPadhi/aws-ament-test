import React from "react";
import ourPartnerData from "../../Data/Homepage-Data/OurPartner";
import microsoftLogo from "../../images/HomePage/partner-logos/microsoft.png";

function OurPartner (){
    return (
        <>
            <div className="our-partner container-fluid">
                <div className=" row new-all-margin">

                    {ourPartnerData.map(logo => {
                        return (
                            <div className="col-2 partner-logo" key = {logo.id}>
                                <img className="img-fluid mx-auto" src= {logo.partnerLogo} alt = "Partner"/>
                            </div>
                        )
                    })}
                </div>
            </div>



            <div className="carousel-our-partner container-fluid" >
                <div className=" row new-all-margin">
                    <div className="our-partner-carousel mx-auto" style={{padding:"35px 0px"}}>
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="1000">
                            <div class="carousel-inner">
                                {ourPartnerData.map(logo => {
                                    return (
                                        <div class={`carousel-item ${logo.activeClass}`}>
                                            <img className="img-fluid mx-auto" src= {logo.partnerLogo} alt = "Partner"/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default OurPartner;