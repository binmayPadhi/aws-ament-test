import React from "react";
import aboutUsMissionData from "../../Data/AboutUs-Data/AboutUsMissionData";

function AboutUsMission (){
    return (
        <>
            <div className="about-us-page-details new-all-margin" >

                <div className="row about-us-page-row ml-0 mr-0">

                    {aboutUsMissionData.map((list,index)=> {
                        return (
                            !(index % 2) ?
                            <div className="col-12 about-us-details p-0" key = {list.id}>
                                <img className="img-fluid about-us-img-left " src={list.imgSrc} alt="mission" />
                                <div className="about-us-desc">
                                    <h2>{list.title}</h2>
                                    <p>{list.description}</p>
                                </div>
                            </div> :
                            <div className="col-12 about-us-details p-0" key = {list.id}>
                            <img className="img-fluid about-us-img-right " src={list.imgSrc} alt="mission" />
                            <div className="about-us-desc">
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