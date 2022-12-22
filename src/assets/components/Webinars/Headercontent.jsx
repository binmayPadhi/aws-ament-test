import React from "react";
import "../../CSS/webinar.css";
import companyIcon from "../../images/Webinar-images/AD-Logo-Full-Green.png";

const Headercontent = (props) => {
  console.log(props);
  return (
    <>
      <div className="webinar_main_img">
        <div className="w-100 d-flex pt-5-rem">
          <img
            loading="lazy"
            src={companyIcon}
            className="w-350 mx-auto"
            alt="company_logo"
          />
        </div>
        <div className="pb-3 center-90">
          <div className="row">
            <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12 mt-5-rem mb-10-rem">
              <div className="row mt-2 mb-5">
                {/* left-side-block */}
                {props.componentfrom === "thanks-webniar" ? (
                  <div className="col-6">
                    <p className="join-styles">On-Demand webinar video</p>
                    <p className="main_heading">
                      Reshaping the Retail Industry through Advanced Analytics
                      and AI!
                    </p>
                    {/* <p className="timing_webniar mt-3-rem">
                    11:30 AM - 12:15 PM EST, Thursday
                  </p>
                  <p className="timing_webniar">November 17, 2022</p> */}
                  </div>
                ) : (
                  <>
                    <div className="col-1"></div>
                    <div className="col-10">
                      <p className="main_heading fs-30">
                        Thank you for your interest in the webinar "Reshaping
                        the Retail <br /> Industry through Advanced Analytics
                        and Artificial intelligence (AI)"
                      </p>
                    </div>
                    <div className="col-1"></div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headercontent;
