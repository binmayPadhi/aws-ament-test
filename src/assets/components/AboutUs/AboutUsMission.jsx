import React from "react";
import aboutUsMissionData from "../../Data/AboutUs-Data/AboutUsMissionData";

function AboutUsMission (){
    return (
        <>
            <div class="about-us-page-details all-margin" >

                <div class="row about-us-page-row ml-0 mr-0">

                    {aboutUsMissionData.map(list => {
                        return (
                            <div class="col-12 about-us-details p-0" key = {list.id}>
                                <img class="img-fluid about-us-img-left " src={list.imgSrc} alt="mission" />
                                <div class="about-us-desc">
                                    <h2>{list.title}</h2>
                                    <p>{list.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default AboutUsMission;