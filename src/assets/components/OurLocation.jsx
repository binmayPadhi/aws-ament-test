import React from "react";
import OurLocationData from "../Data/ContactUs-Data/OurLocationData";

function OurLocation() {
  return (
    <>
      {/* <!-- CONTACT US PAGE LOCATION SECTION --> */}

      <div className="about-us-page-location contact-us-location mb-3">
        <div className="new-all-margin">
          <div className="row about-us-page-location-row  ml-0 mr-0">
            {OurLocationData.map((list) => {
              let imgUrl = list.locationIcon;
              return (
                <div
                  className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-3"
                  key={list.id}
                >
                  <div
                    style={{
                      backgroundImage: "url(" + imgUrl + ")",
                      backgroundAttachment: "scroll",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      height: "350px",
                    }}
                  >
                    <div className="location-details new-location-card">
                      <img
                        loading="lazy"
                        className="img-fluid"
                        src={list.icon}
                        alt="location"
                      />
                      <h2 className="text-white px-2 fw-bold-700 fs-16">
                        {list.cityName}
                      </h2>
                      <p className="text-white px-2 fw-bold-500 fs-16">
                        {list.address}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurLocation;
