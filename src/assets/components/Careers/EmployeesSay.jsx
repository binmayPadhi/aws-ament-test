import React from "react";
import HomeBG from "../../images/Home/home-bg.png";

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
                            <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                        </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="row">
                            <div className="col-lg-6">
                                <div className="card employeeSayCard">
                                    <div className="card-body">
                                        
                                        <p className="card-text">
                                            lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem 
                                            ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem
                                            lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem
                                            lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem
                                            lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem
                                        </p>

                                        <div className="employee-details">
                                            <h1>- Nishant, Lead Data Scientist</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img class="d-block w-100" src={HomeBG} alt="Second slide" />
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card employeeSayCard">
                                    <div className="card-body">
                                        
                                        <p className="card-text">
                                            lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem 
                                            ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem
                                            lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem
                                            lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem
                                            lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem
                                        </p>
                                        <div className="employee-details">
                                            <h1>- Nishant, Lead Data Scientist</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img class="d-block w-100" src={HomeBG} alt="Second slide" />
                            </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card employeeSayCard">
                                    <div className="card-body">
                                        
                                        <p className="card-text">
                                            lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem 
                                            ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem
                                            lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem
                                            lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem
                                            lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem
                                        </p>
                                        <div className="employee-details">
                                            <h1>- Nishant, Lead Data Scientist</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img class="d-block w-100" src={HomeBG} alt="Second slide" />
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