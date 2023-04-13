import React from "react";
import imgbg from "../images/Contact-Us-Page/CTA-image.png";

const Gotocontact = () => {
  return (
    <div
      className="position-relative mt-6 mb-6 img-fluid"
      style={{
        backgroundImage: `url(${imgbg})`,
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "550px",
      }}
    >
      <div class="card-overlay"></div>
      <div className="text-center-img">
        <div className="w-90 mx-auto pb-8">
          <p className="letpara text-left pt-8">Let’s work & grow together</p>

          <p className="content-text fs-20 text-left w-75">
            We are on a mission to solve complex techonolgy problems and provide
            solutions that make a difference. Let us transform the world
            together!
          </p>
          <p className="d-flex flex-row justify-content-start pt-4">
            <a href="/careers">
              <button className="current-openings fs-16 fw-bold-600">
                Current Openings
              </button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gotocontact;
