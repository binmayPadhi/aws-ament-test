import React from "react";
import achievement from "../../images/About-Us-Page/Achievements.png";

const Achievements = () => {
  return (
    <>
      <div className="w-100 bg-white h-auto">
        {/* <div className="w-90 mx-auto">
          <div className="row">
            {About.ourachivements.map((list) => {
              return (
                <>
                  <div key={list.id} className="col-md-5 col-lg-5">
                    {list.id % 2 === 0 ? (
                      <div>
                        <div className="d-flex w-100 align-items-center justify-content-end">
                          <img src={list.image} className="w-75px" />
                          <span className="fs-24 fw-bold-600 text-black">
                            {list.heading}
                          </span>
                        </div>
                        <div className="fs-16 fw-bold-400 text-black">
                          {list.description}
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div
                    key={list.id}
                    className="col-md-2 col-lg-2 text-center border-lines"
                  >
                    <img src={list.flag} className="w-30px img-circle mt-3" />
                  </div>
                  <div key={list.id} className="col-md-5 col-lg-5">
                    {list.id % 2 != 0 ? (
                      <div>
                        <div className="d-flex w-100 align-items-center">
                          <span className="fs-24 fw-bold-600 text-black">
                            {list.heading}
                          </span>
                          <img src={list.image} className="w-75px" />
                        </div>
                        <div className="fs-16 fw-bold-400 text-black">
                          {list.description}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </>
              );
            })}
          </div>
        </div> */}
        <img src={achievement} className="w-100" />
      </div>
    </>
  );
};

export default Achievements;