import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import About from "../../Data/AboutUs-Data/About";

const AboutUsMission = () => {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 1440) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <>
      <div className="row">
        {About.missionblock.map((list) => {
          let reverse = list.id % 2 === 0 ? "order-last" : "order-first";
          let reverse1 = list.id % 2 === 0 ? "order-first" : "order-last";
          return (
            <>
              {isMobile === false ? (
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
                      <img src={list.image} />
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* mobile view */}
                  <div className="col-sm-12 mt-5">
                    <p className="fw-bold-600 fs-35 text-black text-left">
                      {list.heading}
                    </p>
                    <p>
                      <img src={list.image} className="w-100" />
                    </p>
                    <p className="fw-bold-300 fs-18 text-blackrock text-left">
                      {list.description}
                    </p>
                  </div>
                </>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default AboutUsMission;
