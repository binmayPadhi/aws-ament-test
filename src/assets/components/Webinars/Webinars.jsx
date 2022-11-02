import React from "react";
import "../../CSS/webinar.css";
import companyIcon from "../../images/Webinar-images/AD-Logo-Full-Green.png";
import zoomIcon from "../../images/Webinar-images/zoom.png";

const Webinars = () => {
  return (
    <>
      <div className="webinar_main_img">
        <div className="w-100 d-flex py-4">
          <img
            loading="lazy"
            src={companyIcon}
            className="w-200 mx-auto"
            alt="company_logo"
          />
        </div>
        <div className="container mt-5 clear">
          <div className="row">
            {/* left-side-block */}
            <div className="col-sm-12 col-xs-12 col-md-7 col-lg-7">
              <p className="main_heading">
                Reshaping the Retail Industry through AI to deliver meaningful
                customer experiences
              </p>
              <p className="timing_webniar">
                Monday, 21 November 2022 | 09:00 PM – 09:45 PM IST
              </p>
              <p className="pl-0">
                <img
                  loading="lazy"
                  src={zoomIcon}
                  className="w-40"
                  alt="company_logo"
                />
              </p>
            </div>
            {/* right-side-block */}
            <div className="col-sm-12 col-xs-12 col-md-5 col-lg-5">
              <div className="card w-100">
                <div class="card-header card_header_styles">Register Now!</div>
                <div class="card-body">
                  <form>
                    <div className="row ml-0 mr-0">
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
                        <label>
                          First Name<span className="req">*</span>
                          <input type="text" name="username" />
                        </label>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
                        <label>
                          Second Name<span className="req">*</span>
                          <input type="text" name="username" />
                        </label>
                      </div>
                    </div>
                    <div className="row ml-0 mr-0 mt-1">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pl-0 pr-0">
                        <label>
                          Email<span className="req">*</span>
                        </label>
                        <p className="email_field">
                          <input type="text" name="username" />
                        </p>
                      </div>
                    </div>
                    <div className="row ml-0 mr-0 mt-1">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pl-0 pr-0">
                        <label>
                          Company<span className="req">*</span>
                        </label>
                        <p className="email_field">
                          <input type="text" name="username" />
                        </p>
                      </div>
                    </div>
                    <div className="row ml-0 mr-0 mt-1">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pl-0 pr-0">
                        <label>
                          Job Title<span className="req">*</span>
                        </label>
                        <p className="email_field">
                          <input type="text" name="username" />
                        </p>
                      </div>
                    </div>
                    <div className="row ml-0 mr-0">
                      <p className="para-form col-12 pl-0 pr-0">
                        Lorem Epsom is dummy text and has to be updated with
                        actual content Lorem Epsom is dummy text and has to be
                        updated with actual content! Lorem Epsom is dummy text
                        and has to be updated with actual content Lorem Epsom is
                        dummy text and has to be updated with actual content!
                      </p>
                    </div>
                    <div className="row ml-0 mr-0">
                      <p className="col-12 para-form pl-0 pr-0 d-flex">
                        <span>
                          <input className="checkMark" type="checkbox"></input>
                        </span>
                        <span className="ml-3 lh-1">
                          Lorem Epsom is dummy text and has to be updated with
                          actual content Lorem Epsom is dummy text and has to be
                          updated with actual content!
                        </span>
                      </p>
                    </div>
                    <div className="row ml-0 mr-0">
                      <p className="col-12 para-form pl-0 pr-0 d-flex">
                        <span className="ml-3 lh-1">
                          Lorem Epsom is dummy text and has to be updated with
                          actual content Lorem Epsom is dummy text and has to be
                          updated with actual content!
                        </span>
                      </p>
                    </div>
                    <div className="row ml-0 mr-0">
                      <p className="col-12 pl-0 pr-0 submit-button">
                        Register for Webinar
                      </p>
                      <p className="condition-para">
                        Thank you for registering, we will share an email with
                        the details!
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="new-home-about-details row ml-5
        main-content-para"
      >
        <div calssName="col-12">
          <h1>Main Content Body</h1>
        </div>
        <div className="col-12">
          <p>
            The Retail industry is experiencing unprecedented change driven by
            consumer needs and demands enabled by technology. Artificial
            intelligence (AI) in retail has empowered businesses with key data
            that is leveraged to predict shifts in customer behavior, improve
            retail operations, and uncover new business opportunities. It is
            high time for both digital and traditional retailers need to engage
            customers through utmost personalization across all touchpoints to
            meet customer expectations, improve customer lifetime value, and
            foster business growth.
          </p>
        </div>
      </div>
    </>
  );
};

export default Webinars;
