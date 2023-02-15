import React from "react";
import QuoteIcon from "../../images/About-Us-Page/Quotes.png";
import About from "../../Data/AboutUs-Data/About";

const Aboutclientsay = () => {
  return (
    <>
      <div className="client-img w-100 h-auto py-5">
        <h1 className="text-center py-5 fw-bold-600 fs-35 text-dark">
          WHAT OUR CLIENTS SAY
        </h1>
        <div className="w-90 mx-auto">
          <div className="row">
            {About.clientsay.map((list) => {
              return (
                <div key={list.id} className="col-md-4 col-lg-4 col-sm-12">
                  <p>
                    <img
                      loading="lazy"
                      src={QuoteIcon}
                      className="img-fluid w-25"
                      alt="icon"
                    />
                  </p>
                  <h4 className="text-black fw-bold-700 fs-18 mt-2 px-5">
                    {list.heading}
                  </h4>
                  <p className="text-black fw-bold-400 fs-16 px-5 pt-3">
                    {list.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutclientsay;
