import React from "react";
import { Link } from "react-router-dom";

const Exploreservices = ({ selectedServicesobj }) => {
  return (
    <>
      <div className="row">
        {selectedServicesobj.services.map((response) => {
          return (
            <div
              key={response.id}
              className={
                "col-sm-12 mt-5 col-container d-flex align-items-sterch" +
                (response["side-image"] === null
                  ? "col-md-6 col-lg-6"
                  : "col-md-12 col-lg-12")
              }
            >
              <div className="container-box column-eq-height position-relative">
                {response["side-image"] === null ? (
                  <>
                    <div className="p-5">
                      <p className="statistics-heading">{response.heading}</p>
                      <p className="statistics-para">{response.description}</p>
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                      <span className="small-grey-box position-absolute bottom-0 cr-pointer">
                        <Link
                          to={`/services/${selectedServicesobj.link}/${response.sublink}`}
                        >
                          <img src={response["arrow-image"]} />
                        </Link>
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="row position-relative">
                      <div className="col-lg-6">
                        <img
                          src={response["side-image"]}
                          className="image-anaomaly w-100"
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
                          <span className="small-grey-box position-absolute bottom-0 cr-pointer">
                            <Link
                              to={`/services/${selectedServicesobj.link}/${response.sublink}`}
                            >
                              <img src={response["arrow-image"]} />
                            </Link>
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
