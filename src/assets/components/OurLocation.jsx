import React from "react";
import OurLocationBG from "../images/Contact-Us-Page/amnet-about-us-our-locations.jpg";
import OurLocationData from "../Data/ContactUs-Data/OurLocationData";


function OurLocation(){

    const ourLocationStyle = {
        backgroundImage:`url(${OurLocationBG})`,
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover" 
    }
    return (
        <>
             {/* <!-- CONTACT US PAGE LOCATION SECTION --> */}

            <div className="about-us-page-location contact-us-location" style = {ourLocationStyle}>
                <div className="all-margin">
                    <div className="about-us-page-header text-center mt-5 p-5">
                        <h3 className="section-header">WE'RE AVAILABLE</h3>
                        <h1 className="section-title mt-3">Our Locations</h1>
                    </div>
                    <div className="row about-us-page-location-row  ml-0 mr-0">

                        {OurLocationData.map(list => {
                            return (
                                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 " key = {list.id}>
                                        <div className="card ">
                                            <div className="card-body location-details">
                                                <span className="dot"><img className="img-fluid" src={list.locationIcon} alt="location"/> </span>
                                                <h2>{list.cityName}</h2>
                                                <p>{list.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurLocation;
