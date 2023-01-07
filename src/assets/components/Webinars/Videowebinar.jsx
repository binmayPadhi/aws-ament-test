import React from "react";
import Headercontent from "./Headercontent";
import Webinarfooter from "./Webinarfooter";
import "../../CSS/webinar.css";
import Letsgetstart from "./Letsgetstart";
import { useEffect } from "react";

const Videowebinar = () => {
  const header = new Headers();
  useEffect(() => {
    header.append("X-Content-Type-Options", "nosniff");
    header.append("X-Frame-Options", "Deny");
  });
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
          <iframe className="w-75 mx-auto" height="500" src={videoUrl}></iframe>
        </div>
      </div>
      {/** let gets started */}
      <div className="mt-5-rem mb-5-rem">
        <Letsgetstart />
      </div>
      {/* Footer */}
      <Webinarfooter />
    </>
  );
};

export default Videowebinar;
