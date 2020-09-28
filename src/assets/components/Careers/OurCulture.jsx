import React from "react";
import OurCultureData from "../../Data/Careers-Data/OurCultureData";
import AmnetOfficeIMG from "../../images/careers-page/amnet-office.jpg";

function OurCulture (){
    return (
        <>
            {/* <!-- CAREER-PAGE-OUR-CULTURE --> */}

            <div class="careers-our-culture-header text-center">
                <h3 class="section-header">IT'S EXCITING</h3>
                <h1 class="section-title mt-3">Our Culture/Workspace</h1>     
            </div>


            <div class="our-culture-section all-margin">
                <div class="row ml-0 mr-0">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 culture-img-left">
                        <img class="img-fluid" src={AmnetOfficeIMG} alt="Amnet-Office" />
                    </div>

                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 culture-img-left">
                        <div class="row">

                            {OurCultureData.map(img => {
                                return (
                                    <div class="col-lg-12 amnet-images" key = {img.id}>
                                        <img class="img-fluid" src={img.amnetIMG} alt="Amnet-Culture" />
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