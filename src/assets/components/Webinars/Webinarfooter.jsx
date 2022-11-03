import React from "react";
import facebook from "../../images/Webinar-images/Facebook.png";
import linkedin from "../../images/Webinar-images/Linkedin.png";
import twitter from "../../images/Webinar-images/Twitter.png";
import instagram from "../../images/Webinar-images/Instagram.png";
import "../../CSS/webinar.css";

const Webinarfooter = () => {
  return (
    <>
      <div className="webinar-footer">
        <div className="row pl-0 pr-0">
          <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
            <div className="support-email">
              <p>info@amnetdigital.com</p>
            </div>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
            <div className="support-email">
              <p>© 2022 Amnet Digital</p>
            </div>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
            <div className="social-media d-inline-flex">
              <div className="w-100 ">
                <img
                  loading="lazy"
                  src={facebook}
                  className="w-15 mx-auto"
                  alt="company_logo"
                />
              </div>
              <div className="w-100 pl-5">
                <img
                  loading="lazy"
                  src={linkedin}
                  className="w-15 mx-auto"
                  alt="company_logo"
                />
              </div>
              <div className="w-100 pl-5">
                <img
                  loading="lazy"
                  src={twitter}
                  className="w-15 mx-auto"
                  alt="company_logo"
                />
              </div>
              <div className="w-100 pl-5 ">
                <img
                  loading="lazy"
                  src={instagram}
                  className="w-15 mx-auto"
                  alt="company_logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Webinarfooter;
