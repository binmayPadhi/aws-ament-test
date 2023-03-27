import React from "react";
import OurCultureData from "../../Data/Careers-Data/OurCultureData";
import AmnetOfficeIMG from "../../images/careers-page/amnet-office.jpg";

function OurCulture (){
    return (
        <>
            {/* <!-- CAREER-PAGE-OUR-CULTURE --> */}
         <div className="bg-grey mt-5 mb-5 pt-2 pb-5">
            <div className="careers-our-culture-header text-center">
                {/* <h3 className="section-header">IT'S EXCITING</h3> */}
                <h1 data-aos="fade-up" data-aos-offset="200" className="section-title mt-3">OUR WORKSPACE</h1>     
            </div>


            <div className="our-culture-section new-all-margin">
                <div className="row ml-0 mr-0">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 culture-img-left animation-card" style={{paddingLeft:"0px",paddingRight:"0px"}}>
                        <img loading="lazy" className="img-fluid" src={AmnetOfficeIMG} style={{maxWidth:"99%"}} alt="Amnet-Office" />
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 culture-img-right">
                        <div className="row">

                            {OurCultureData.map(img => {
                                return (
                                    <div className="col-lg-12 amnet-images animation-card" key = {img.id} style={{paddingLeft:"0px",paddingRight:"0px"}}>
                                        <img loading="lazy"  className="img-fluid" style={{maxWidth:"99%"}} src={img.amnetIMG} alt="Amnet-Culture" />
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

export default OurCulture;