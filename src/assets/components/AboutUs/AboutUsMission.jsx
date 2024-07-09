import React from "react";
import About from "../../Data/AboutUs-Data/About";
import MediaQuery from "react-responsive";

const AboutUsMission = () => {
  return (
    <>
      <div className="row">
        {About.missionblock.map((list) => {
          let reverse = list.id % 2 === 0 ? "order-last" : "order-first";
          let reverse1 = list.id % 2 === 0 ? "order-first" : "order-last";
          return (
            <>
              {/* mobile views */}
              <MediaQuery query="(max-width: 1024px)">
                <>
                  <div className="col-sm-12 mt-5">
                    <p className="fw-bold-600 fs-35 text-black text-left">
                      {list.heading}
                    </p>
                    <p>
                      <img src={list.image} className="w-100" loading="lazy" />
                    </p>
                    <p className="fw-bold-300 fs-18 text-blackrock text-left">
                      {list.description}
                    </p>
                  </div>
                </>
              </MediaQuery>
              {/* desktop and large screens */}
              <MediaQuery query="(min-width: 1025px)">
                <>
                  <div className={"col-md-6 col-lg-6 mt-5" + " " + reverse}>
                    <div className="w-100 d-flex align-items-center">
                      <div className="w-100 mt-5">
                        <p className="fw-bold-600 fs-35 text-black text-left">
                          {list.heading}
                        </p>
                        <p className="fw-bold-300 fs-18 text-blackrock text-left">
                          {list.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={"col-md-6 col-lg-6 mt-5" + " " + reverse1}>
                    <p className="mb-0">
                      <img src={list.image} loading="lazy" />
                    </p>
                  </div>
                </>
              </MediaQuery>
            </>
          );
        })}
      </div>
    </>
  );
};

export default AboutUsMission;
