import React from "react";
import imgbg from "../images/Contact-Us-Page/CTA-image.png";

const Gotocontact = () => {
  return (
    <div
      className="position-relative mt-6 mb-6"
      style={{
        backgroundImage: `url(${imgbg})`,
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "450px",
      }}
    >
      <div className="text-center-img">
        <p className="letpara text-center">Let’s work & grow together</p>

        <div className="w-90 mx-auto">
          <p className="content-text w-90 mx-auto">
            We are on a mission to solve complex tech problems and provide apt
            solutions that make a real difference. Together, we can build some
            great tech products and digital solutions. It’s time to be part of
            it!
          </p>
          <p className="d-flex flex-row justify-content-center">
            <a href="/careers">
              <button className="current-openings fs-16 fw-bold-600 ">
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
