import React from "react";
import CareersDetailsData from "../../Data/Careers-Data/CareersDetailsData";

function CareersDetails() {
  return (
    <>
      {/* <!-- CAREER-PAGE-DETAILS-SECTION --> */}

      <div className="careers-page-header text-center mt-5" id="details">
        {/* <h3 className="section-header" >LET'S DO IT</h3> */}
        <h1 className="section-title mt-3">WORK WITH US</h1>
      </div>

      <div className="careers-page-details w-90 mx-auto">
        <p>
          Amnet Digital is made up of a bunch of passionate people whose sole
          focus is to reimagine & redefine products and solutions. Be a part of
          fun-loving and people friendly company. Write to
          <span>
            <a href="mailto:careers@amnetdigital.com">
              {" "}
              careers@amnetdigital.com
            </a>
          </span>
          .
        </p>

        <div className="careers-page-details-list-row row">
          {CareersDetailsData.map((list) => {
            return (
              <div
                className="col-lg-6 career-page-details-column"
                key={list.id}
              >
                <ul className="careers-details-lists">
                  <li>
                    <span>
                      <img
                        src={list.listIcon}
                        className="img-fluid list-icon"
                        alt="list-icon"
                      />
                    </span>
                    {list.listOne}
                  </li>
                  <li>
                    <span>
                      <img
                        src={list.listIcon}
                        className="img-fluid list-icon"
                        alt="list-icon"
                      />
                    </span>
                    {list.listTwo}
                  </li>
                  <li>
                    <span>
                      <img
                        src={list.listIcon}
                        className="img-fluid list-icon"
                        alt="list-icon"
                      />
                    </span>
                    {list.listThree}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CareersDetails;
