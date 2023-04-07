import React from "react";
import CurrentJson from "../../Data/Careers-Data/CurrentOpeningsData";
import { useNavigate } from "react-router-dom";

const CurrentOpenings = () => {
  const history = useNavigate();
  const redirectTo = (e, name) => {
    e.preventDefault();
    history(`${name}`);
  };
  return (
    <>
      <div className="mt-5 text-center">
        <h1 className="fs-36 fw-bold-600">CURRENT OPENINGS</h1>
      </div>
      <div className="container">
        {/* <h1 className="fs-23 fw-bold-600">Filter by</h1> */}
        {/* <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <input
              type="text"
              className="input-round fs-14 fw-bold-400"
              placeholder="Search for jobs by skill or keyword"
            />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <input
              className="input-round  fs-14 fw-bold-400"
              type="text"
              placeholder="Select location"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <button className="search-button fs-14 fw-bold-400 text-white">
              Search
            </button>
            <button className="clear-button fs-14 fw-bold-600">Clear</button>
          </div>
        </div> */}

        <div className="row">
          {CurrentJson.map((response) => {
            return (
              <div key={response.id} className="col-lg-4 col-md-4 col-sm-12 ">
                <div className="mt-4 application-box">
                  <p className=" fs-12 fw-bold-400 text-green">
                    {response.heading}
                  </p>
                  <p className="fw-bold-600 fs-18 mt-2">{response.role}</p>
                  <div className="d-flex">
                    <p className="fw-bold-400 fs-12 text-grey">
                      {response.location}
                    </p>
                    <button
                      className="fw-bold-600 orange-border fs-12 cr-pointer"
                      onClick={(e) => redirectTo(e, response.link)}
                    >
                      {response.button}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center">
          <button className="fs-14 fw-bold-600 explore-button">
            Explore More Jobs
          </button>
        </div>
      </div>
    </>
  );
};

export default CurrentOpenings;
