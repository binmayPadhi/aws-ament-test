import React from "react";
import organization from "../../Data/Homepage-Data/OrganizationServiceData";
import MediaQuery from "react-responsive";
const OrganizationServices = () => {
  let organizationlist = [];
  organizationlist = [...organization];
  return (
    <>
      {organizationlist.map((response) => {
        let leftcontainer =
          response.id % 2 === 0 ? "order-last" : "order-first";
        let rightcontainer =
          response.id % 2 === 0 ? "order-first" : "order-last";
        return (
          <>
            {/* mobile views */}
            <MediaQuery query="(max-width: 1024px)">
              <>
                <div className="center-91">
                  <div className="col-sm-12 col-xs-12 mt-5">
                    <img src={response["banner"]} className="w-100" />
                    <h1 className="text-green fs-50 fw-bold-600">
                      0{response.id}
                    </h1>
                    <h1 className="fs-30 mt-1 fw-bold-600">
                      {response.heading}
                    </h1>
                    <p className="fs-18 fs-bold-400 text-grey mt-3">
                      {response.description}
                    </p>
                  </div>
                </div>
              </>
            </MediaQuery>

            {/* desktop and large screens */}
            <MediaQuery query="(min-width: 1025px)">
              <>
                <div className={response["id"] === 2 ? "bg" : " "}>
                  <div className="center-91 mt-4">
                    <div className="row" key={response.id}>
                      <div
                        className={
                          "col-md-6 col-lg-6 col-sm-12 col-xs-12 mt-5" +
                          " " +
                          leftcontainer
                        }
                      >
                        <img src={response["banner"]} className="w-100" />
                      </div>
                      <div
                        className={
                          "col-md-6 col-lg-6 col-sm-12 col-xs-12 my-auto " +
                          " " +
                          rightcontainer
                        }
                      >
                        <div className="w-90 mx-auto">
                          <h1 className="text-green fs-50 fw-bold-600">
                            0{response.id}
                          </h1>
                          <h1 className="fs-30 mt-1 fw-bold-600">
                            {response.heading}
                          </h1>
                          <p className="fs-18 fs-bold-400 text-grey mt-3">
                            {response.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </MediaQuery>
          </>
        );
      })}
    </>
  );
};

export default OrganizationServices;
