import React from "react";
import careerProfileRakesh from "../../images/careers-page/careers-rakesh.jpg";
import careerProfileProma from "../../images/careers-page/careers-proma.jpg";

function EmployeesSay( ) {
    return (
        <>
                <div className="employeesSay new-all-margin">
                <div className="weValueInnovationCarousel">
                    <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">
                    <h1 className="card-title">Employee have their say</h1>
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                        </ol>
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card employeeSayCard">
                                    <div className="card-body">
                                        
                                        <p className="card-text">
                                        At Amnet Digital I am learning something new every day, The friendly and inclusive working 
                                        environment at Amnet Digital allows us to progress at the level best suited to our personality, 
                                        It also implies that you look beyond the drawing board making something from nothing. 
                                        the collaboration between departments will never make you feel that you’re truly an integral 
                                        part of the organization's journey.
                                        </p>
                                        <div className="employee-details">
                                            <h1>- Rakesh Reddy, Senior Application Engineer</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img class="d-block w-100" src={careerProfileRakesh} alt="Second slide" />
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card employeeSayCard">
                                    <div className="card-body">
                                        
                                        <p className="card-text">
                                        Amnet as a startup gives me a unique opportunity to grow my core skills and work beyond my comfort zone 
                                        taking on new responsibilities.The office environment is young in spirit but sincere to its future goals.
                                        </p>
                                        <div className="employee-details">
                                            <h1>- Proma Pal, Data Scientist</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img class="d-block w-100" src={careerProfileProma} alt="Second slide" />
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
                </div>
        </>
    )
}

export default EmployeesSay;