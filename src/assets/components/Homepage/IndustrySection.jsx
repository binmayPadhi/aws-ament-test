import React from "react";
import IndusrtySectionData from "../../Data/Homepage-Data/IndustrySectionData";
import previous from "../../images/HomePage/homepage-industry-IMG/left-arrow.png";
import next from "../../images/HomePage/homepage-industry-IMG/right-arrow.png";

function IndustrySection() {
  return (
    <>
      {/* <!-- INDUSTRIES WE COVER --> */}

      <div className="industry-section w-90 mx-auto">
        <h1 className="section-title" style={{ marginTop: "60px" }}>
          INDUSTRIES WE COVER
        </h1>

        
      </div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  {/* <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="industry-section w-90 mx-auto">
    <div className="industry-section-row row mt-5">
          {IndusrtySectionData.SectionData.map((list) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 industry-section-column">
                <div className="card industry-section-card">
                  <img
                    loading="lazy"
                    className="card-img-top img-fluid"
                    src={list.industryIMG}
                    alt="Case Studies"
                  />
                  <div className="card-img-overlay new-industry-header">
                    <h5 class="card-title text-center">{list.industryTitle}</h5>
                  </div>
                </div>
              </div>
            );
          })}
    
        </div>
        </div>
    </div>
    <div class="carousel-item">
    <div className="industry-section w-90 mx-auto">
    <div className="industry-section-row row mt-5">
          {IndusrtySectionData.SectionDatasecond.map((list) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 industry-section-column">
                <div className="card industry-section-card">
                  <img
                    loading="lazy"
                    className="card-img-top img-fluid"
                    src={list.IMGindustry}
                    alt="Case Studies"
                  />
                  <div className="card-img-overlay new-industry-header">
                    <h5 class="card-title text-center">{list.Titleindustry}</h5>
                  </div>
                </div>
              </div>
            );
          })}
    
        </div>
        </div>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <img src={previous} className="w-25" loading="lazy" />
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  <img src={next} className="w-25" loading="lazy" />
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}

export default IndustrySection;
