import React from "react";
import facebook from "../../images/Webinar-images/Facebook.png";
import linkedin from "../../images/Webinar-images/Linkedin.png";
import twitter from "../../images/Webinar-images/Twitter.png";
import instagram from "../../images/Webinar-images/Instagram.png";
import "../../CSS/webinar.css";

const Webinarfooter = () => {
  return (
    <>
      <div className="webinar-footer pb-3-rem">
        <div className="reverse-columns-mobile d-flex row pl-0 pr-0">
          <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4">
            <div className="support-email">
              <p>© 2022 Amnet Digital</p>
            </div>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-8 col-lg-8">
            <div className="row">
              <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                <div className="support-email">
                  <p>info@amnetdigital.com</p>
                </div>
              </div>
              <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
                <div className="social-media w-100 d-flex justify-content-center">
                  <div className="px-3 w-20">
                    <a
                      href=" https://www.linkedin.com/company/amnet-digital"
                      target="_blank"
                    >
                      <img
                        loading="lazy"
                        src={linkedin}
                        className="w-15 mx-auto"
                        alt="company_logo"
                      />
                    </a>
                  </div>
                  <div className="px-3 w-20">
                    <a
                      href="https://www.facebook.com/amnetdigital"
                      target="_blank"
                    >
                      <img
                        loading="lazy"
                        src={facebook}
                        className="w-15 mx-auto"
                        alt="company_logo"
                      />
                    </a>
                  </div>
                  <div className="px-3 w-20">
                    <a href=" https://twitter.com/DigitalAmnet" target="_blank">
                      <img
                        loading="lazy"
                        src={twitter}
                        className="w-15 mx-auto"
                        alt="company_logo"
                      />
                    </a>
                  </div>
                  <div className="px-3 w-20">
                    <a
                      href="https://www.instagram.com/amnetdigital"
                      target="_blank"
                    >
                      <img
                        loading="lazy"
                        src={instagram}
                        className="w-15 mx-auto"
                        alt="company_logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Webinarfooter;
