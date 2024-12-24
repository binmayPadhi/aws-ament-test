import React from "react";
import WeValueIMG from "../../images/careers-page/careers-body.jpg";

function WeValueInnovation() {
  return (
    <>
      <div className="weValueInnovation w-90 mx-auto">
        <div className="weValueInnovationCarousel">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className=" text-center">
                  <h1 className="section-title mt-3">WE VALUE INNOVATION</h1>
                </div>
              </div>
              <div class="carousel-item">
                <div className=" text-center">
                  <h1 className="section-title mt-3">WE VALUE INTEGRITY</h1>
                </div>
              </div>
              <div class="carousel-item">
                <div className=" text-center">
                  <h1 className="section-title mt-3">WE VALUE EMPATHY</h1>
                </div>
              </div>
              <div class="carousel-item">
                <div className=" text-center">
                  <h1 className="section-title mt-3">WE VALUE EXCELLENCE</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="d-block w-100 we-innovation-img"
          src={WeValueIMG}
          alt="First slide"
        />

        {/* <div className="weValueInnovationCarousel">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={WeValueIMG} alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={WeValueIMG} alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={WeValueIMG} alt="Third slide" />
                        </div>
                    </div>
                </div>
                </div> */}
      </div>
    </>
  );
}

export default WeValueInnovation;
