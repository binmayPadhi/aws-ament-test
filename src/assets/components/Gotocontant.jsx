import React from "react";
import "../CSS/Unsplash.css";
import imgbg from "../images/About-Us-Page/CTA-image.png";

const Gotocontact = ({ componentFrom }) => {
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
      <div className="text-center-img ">
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
          {componentFrom === undefined ? (
            <>
              <div className="row">
                <div className="col-md-3 col-lg-3 col-sm-12 col-sm-center col-md-right mt-1"></div>
                <div className="col-md-3 col-lg-3 col-sm-12  mt-3">
                  <p className="content-button text-sm-center text-md-right">
                    <span className="current-openings py-3 px-4">Connect with us</span>
                  </p>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-12 mt-3">
                  <p className="content-button text-sm-center text-md-left">
                    <span className="current-openings py-3 px-4 ml-2">
                      Current openings
                    </span>
                  </p>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-12 col-sm-center col-md-right mt-1"></div>
              </div>
            </>
          ) : (
            <>
              <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12 mt-3">
                  <p className="content-button text-sm-center text-md-center">
                    <span className="current-openings py-3 px-4 ml-2">
                      Current openings
                    </span>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gotocontact;
