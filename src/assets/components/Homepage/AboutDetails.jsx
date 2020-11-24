import React from "react";
import AboutDetailsFirstRowData from "../../Data/Homepage-Data/AboutDetailsFirstRowData";
import AboutDetailsSecondRowData from "../../Data/Homepage-Data/AboutDetailsSecondRowData";
import aboutDetailsBG from "../../images/HomePage/amnet-about-details.jpg";

function AboutDetails(){

    const aboutDetailsStyle = {
        backgroundImage:`url(${aboutDetailsBG})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover" 
    }

    return (
        <>
            {/* <!--HOMEPAGE ABOUT DETAILS--> */}

            <div className="homepage-about-details" style ={aboutDetailsStyle}>
                <div className="row all-margin ml-0 mr-0">
                    <div className="col-10 mx-auto">
                        <div className="row about-details-row mx-auto">
                
                            {AboutDetailsFirstRowData.map(list => {
                                return (
                                        <div className="col-lg-6 col-md-12 col-sm-12" key={list.id}>
                                            <h3 className="about-details-header">
                                                <span>
                                                    <img loading="lazy" src= {list.iconSrc} className="img-fluid about-icons" alt = "end to end" />
                                                </span>
                                                {list.title}
                                            </h3>
                                            <p>{list.description}</p>
                                        </div>
                                    )
                                })}

                        </div>

                        <div className="row about-details-row marginRow mx-auto">
            
                            {AboutDetailsSecondRowData.map(list => {
                                return (
                                        <div className="col-lg-6 col-md-12 col-sm-12" key={list.id}>
                                            <h3 className="about-details-header">
                                                <span>
                                                    <img loading="lazy" src= {list.iconSrc} className="img-fluid about-icons" alt = "end to end" />
                                                </span>
                                                {list.title}
                                            </h3>
                                            <p>{list.description}</p>
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

export default AboutDetails;
