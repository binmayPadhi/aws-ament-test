import React from "react";
import About from "../../Data/AboutUs-Data/About";

const Aboutvalues = () => {
  return (
    <>
      <div className="w-100 bg-black h-auto py-5 mt-5 space-read">
        <h1 className="text-center fs-35 fw-bold-600 py-3 text-white">
          OUR VALUES
        </h1>
        <div className="w-90 mx-auto">
          <div className="row">
            {About.aboutvalues.map((list) => {
              return (
                <div
                  key={list.id}
                  className="col-md-6 col-lg-6 col-sm-12 col-xs-12 mt-4"
                >
                  <div className="row">
                    <div className="col-2 text-right">
                      <img src={list.image} className="w-50px" loading="lazy" />
                    </div>
                    <div className="col-10">
                      <p className="fs-18 fw-bold-600 text-white mb-0">
                        {list.heading}
                      </p>
                      <p className="fs-18 fw-bold-400 text-white">
                        {list.description}
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
};

export default Aboutvalues;
