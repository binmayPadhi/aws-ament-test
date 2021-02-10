import React from "react";
import careerProfileRakesh from "../../images/careers-page/careers-rakesh.jpg";
import careerProfileProma from "../../images/careers-page/careers-proma.jpg";
import RakeshProfile from "../../images/careers-page/rakesh-dp.jpg";
import PromaProfile from "../../images/careers-page/proma-dp.jpg";

function EmployeesSay( ) {
    return (
        <>
                <div className="employeesSay new-all-margin">
                <div className="weValueInnovationCarousel">
                    <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">
                    <h1 className="card-title">Employees have their say</h1>
                        <ol class="carousel-indicators">
                            <li style={{backgroundImage:`url(${RakeshProfile})`,backgroundAttachment:"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
                            <li style={{backgroundImage:`url(${PromaProfile})`,backgroundAttachment:"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                        </ol>
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card employeeSayCard">
                                    <div className="card-body" style={{paddingLeft:"0px"}}>
                                        
                                        <p className="card-text">
                                        At Amnet Digital I am learning something new everyday. The friendly and inclusive working environment allows us to progress at the level best suited to our personality. It also implies that you look beyond the drawing board making something from nothing. 
                                        The collaboration between departments will make you feel that you’re truly an integral part of the organization's journey.
                                        </p>
                                        <div className="employee-details">
                                            <h1>- Rakesh Reddy, Technical Manager</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img loading="lazy"  class="d-block w-100" src={careerProfileRakesh} alt="Second slide" />
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card employeeSayCard">
                                    <div className="card-body" style={{paddingLeft:"0px"}}>
                                        
                                        <p className="card-text">
                                        Amnet with its fast-paced startup like culture, gives me a unique opportunity to grow my core skills and 
                                        work beyond my comfort zone taking on new responsibilities. The office environment is young in spirit but sincere to its future goals.
                                        </p>
                                        <div className="employee-details">
                                            <h1>- Proma Pal, Data Scientist</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img loading="lazy"  class="d-block w-100" src={careerProfileProma} alt="Second slide" />
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