import React from "react";
import "../CSS/Unsplash.css";
import imgbg from "../images/About-Us-Page/CTA-image.png";

const Gotocontact = () => {
  return (
    <div
      className="position-relative"
      style={{
        backgroundImage: `url(${imgbg})`,
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        width: "100%",
        height: "600px",
      }}
    >
      <div className="text-center-img position-relative">
        <p className="letpara text-center">Let’s work & grow together</p>

        <div className="w-90 mx-auto">
          <p className="content-text w-90 mx-auto">
            We are on a mission to solve complex tech problems and provide apt
            solutions that make a real difference. Together, we can build some
            great tech products and digital solutions. It’s time to be part of
            it!
          </p>
        </div>

        <div className="w-90 mx-auto my-3">
          <p className="content-button w-90 mx-auto">
            <span className="connect py-3 px-4">Connect with us</span>
            <span className="current-openings py-3 px-4 ml-2">
              Current openings
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gotocontact;
