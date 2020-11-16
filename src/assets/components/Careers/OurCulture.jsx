import React from "react";
import OurCultureData from "../../Data/Careers-Data/OurCultureData";
import AmnetOfficeIMG from "../../images/careers-page/amnet-office.jpg";

function OurCulture (){
    return (
        <>
            {/* <!-- CAREER-PAGE-OUR-CULTURE --> */}

            <div className="careers-our-culture-header text-center">
                {/* <h3 className="section-header">IT'S EXCITING</h3> */}
                <h1 className="section-title mt-3">OUR CULTURE/WORKSPACE</h1>     
            </div>


            <div className="our-culture-section new-all-margin">
                <div className="row ml-0 mr-0">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 culture-img-left">
                        <img className="img-fluid" src={AmnetOfficeIMG} alt="Amnet-Office" />
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 culture-img-right">
                        <div className="row">

                            {OurCultureData.map(img => {
                                return (
                                    <div className="col-lg-12 amnet-images" key = {img.id}>
                                        <img className="img-fluid" src={img.amnetIMG} alt="Amnet-Culture" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurCulture;