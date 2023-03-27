import React from "react";
import servicesJson from "../../Data/Services-Data/ExploreservicesData";

const Exploreservices = () => {
  return (
    <>
      <div className="row">
        {servicesJson.map((response) => {
          return (
            <div
              key={response.id}
              className={
                "col-sm-12 mt-5 col-container " +
                (response["side-image"] === null
                  ? "col-md-6 col-lg-6"
                  : "col-md-12 col-lg-12")
              }
            >
              <div className="container-box column-eq-height ">
                {response["side-image"] === null ? (
                  <>
                    <div className="p-5">
                      <p className="statistics-heading">{response.heading}</p>
                      <p className="statistics-para">{response.description}</p>
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                      <span className="small-grey-box">
                        <img src={response["arrow-image"]} />
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="row position-relative">
                      <div className="col-lg-6">
                        <img
                          src={response["side-image"]}
                          className="image-anaomaly"
                        />
                      </div>
                      <div className="col-lg-6">
                        <div className="p-3">
                          <p className="statistics-heading">
                            {response.heading}
                          </p>
                          <p className="statistics-para">
                            {response.description}
                          </p>
                        </div>
                        <div className="d-flex flex-row justify-content-end">
                          <span className="small-grey-box position-absolute bottom-0">
                            <img src={response["arrow-image"]} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Exploreservices;
