import React from "react";
import HomeBG from "../../images/Home/home-bg.png";

function WeValueInnovation (){
    return (
        <>
            <div className="weValueInnovation new-all-margin">
                <div className="careers-our-culture-header text-center">
                    <h1 className="section-title mt-3">WE VALUE INNOVATION</h1>    
                </div>
                <div className="description">
                    <p>lorem ipsulm lorem ipsulm lorem ipsulmlorem ipsulmlorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm 
                    lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulm lorem ipsulmlorem ipsulmlorem ipsulm lorem 
                    ipsulm lorem ipsulm lorem ipsulm 
                    lorem ipsulm lorem ipsulm lorem ipsulm
                    </p>
                </div>

                <div className="weValueInnovationCarousel">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={HomeBG} alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={HomeBG} alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={HomeBG} alt="Third slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                </div>
            </div>
        </>
    )
}

export default WeValueInnovation;