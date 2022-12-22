import React from "react";
import Headercontent from "./Headercontent";
import Webinarfooter from "./Webinarfooter";
import "../../CSS/webinar.css";

const Videowebinar = () => {
  const componentName = "video-webniar";
  const videoUrl = "https://youtube.com/embed/4tgDYmCh6lc";
  return (
    <>
      <Headercontent componentfrom={componentName} />
      <div className="row mt-3-rem mb-3-rem">
        <div className="col-12 text-center fs-24 font-weight-bold text-dark">
          Watch the webinar here
        </div>
      </div>
      <div className="row mt-3-rem mb-3-rem">
        <div className="col-12 text-center fs-24 font-weight-bold text-dark">
          <iframe width="1000" height="345" src={videoUrl}></iframe>
        </div>
      </div>
      <div className="mt-3-rem mb-3-rem">
        <div className="row">
          <div className="col-9 bg-left py-3">
            <div className="center-98">
              <p className="mb-0 text-white fs-14 font-weight-bold">
                Do you want your AI & Data Analytics investment to bring
                meaningful results with real ROI?
              </p>
              <p className="mb-0 text-white fs-14 font-weight-bold">
                Schedule your FREE consulation now!
              </p>
            </div>
          </div>
          <div className="col-3 bg-right py-3 d-flex w-100">
            <div className="center-98">
              <p className="mb-0 text-white fs-14 font-weight-bold w-100">
                Let's get started
                <i
                  class="fa fa-long-arrow-right text-white fs-16 pl-2"
                  aria-hidden="true"
                ></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Webinarfooter />
    </>
  );
};

export default Videowebinar;
