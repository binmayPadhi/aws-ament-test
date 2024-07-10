import React from "react";
import ourPartnerData from "../../Data/Homepage-Data/OurPartner";
import microsoftLogo from "../../images/HomePage/partner-logos/microsoft.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TechnologyStack() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="our-partner container-fluid">
       
        <Slider {...settings}>
          {ourPartnerData.map((logo) => {
            return (
              <div key={logo.id}>
                <img
                  className="img-fluid mx-auto"
                  src={logo.partnerLogo}
                  alt="Partner"
                />
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="carousel-our-partner container-fluid">
        <div className=" row new-all-margin">
          <div
            className="our-partner-carousel mx-auto"
            style={{ padding: "35px 0px" }}
          >
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
              data-interval="1000"
            >
              <div class="carousel-inner">
                {ourPartnerData.map((logo) => {
                  return (
                    <div
                      class={`carousel-item ${logo.activeClass}`}
                      key={logo.id}
                    >
                      <img
                        className="img-fluid mx-auto"
                        src={logo.partnerLogo}
                        alt="Partner"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LOGO SLIDER TRY */}

      {/* <Slider {...settings}>
          <div>
          <img loading="lazy" className="img-fluid mx-auto" src= {microsoftLogo} alt = "Partner"/>
          </div>
          <div>
          <img loading="lazy" className="img-fluid mx-auto" src= {microsoftLogo} alt = "Partner"/>
          </div>
          <div>
          <img loading="lazy" className="img-fluid mx-auto" src= {microsoftLogo} alt = "Partner"/>
          </div>
          <div>
          <img loading="lazy" className="img-fluid mx-auto" src= {microsoftLogo} alt = "Partner"/>
          </div>
          <div>
          <img loading="lazy" className="img-fluid mx-auto" src= {microsoftLogo} alt = "Partner"/>
          </div>
          <div>
          <img loading="lazy" className="img-fluid mx-auto" src= {microsoftLogo} alt = "Partner"/>
          </div>
          <div>
          <img loading="lazy" className="img-fluid mx-auto" src= {microsoftLogo} alt = "Partner"/>
          </div>
          <div>
          <img loading="lazy" className="img-fluid mx-auto" src= {microsoftLogo} alt = "Partner"/>
          </div>
          </Slider> */}
    </>
  );
}

export default TechnologyStack;
