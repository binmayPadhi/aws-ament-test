import React from "react";
import careerBG from "../../images/HomePage/amnet-career-section-bg.jpg";
import styled from "styled-components";

function CareerSection() {


  const Content = styled.div`
    padding: 10px;
    background-image: url(${careerBG});
    backgroundattachment: scroll;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: red;

    @media (max-width: 768px) {
      background-image: none;
    }
  `;

  return (
    <>
      {/* <!--CAREER SECTION--> */}
      <Content className="career career-bg">
        <div className="career-section w-90 mx-auto">
          <div className="career-section-row row g-0">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 career-caption">
              <h5>WORK WITH US</h5>
              <h2>Let's Grow Together!</h2>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 career-details">
              <p>
                We are on a mission to solve complex problems and provide
                solutions that make a difference! Come work with us!
              </p>

              <a href="/careers">
                <button type="button" className="btn btn-primary">
                  Careers
                </button>
              </a>
              <a href="/contact-us">
                <button type="button" className="btn btn-default">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}

export default CareerSection;
