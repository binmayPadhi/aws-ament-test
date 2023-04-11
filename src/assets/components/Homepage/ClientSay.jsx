import React from "react";
import QuoteIcon from "../../images/About-Us-Page/amnet-left-quote-icon.png";

function ClientSay() {
  return (
    <>
      <div className="client-say">
        <h1 className="section-title mt-3 text-center">WHAT OUR CLIENTS SAY</h1>
        <div className="client-say-row new-all-margin">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="card client-say-card">
                <div className="card-body">
                  <img
                    loading="lazy"
                    src={QuoteIcon}
                    className="img-fluid quote-icon"
                    alt="icon"
                  />
                  {/* <h3 className="card-title">Jamie Lorenzo</h3> */}
                  <p className="card-text client-role text-white fw-bold-700 fs-18">
                    Director of Data Science, Retail Marketplace
                  </p>
                  <p className="card-text client-desc text-white fs-16">
                    The assistance we got from Amnet Digital was the glue that
                    kept together our transformation initiatives for FY 2019-20.
                    They stayed on top of our challenging unstructured data and
                    provided world-class data analysis. We were able to unearth
                    hidden relationships in our customers buying patterns for
                    better forecast and bundling of products.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="card client-say-card">
                <div className="card-body">
                  <img
                    loading="lazy"
                    src={QuoteIcon}
                    className="img-fluid quote-icon"
                    alt="icon"
                  />
                  {/* <h3 className="card-title">Jamie Lorenzo</h3> */}
                  <p className="card-text client-role text-white fw-bold-700 fs-18">
                    VP Engineering, Information Management Company
                  </p>
                  <p className="card-text client-desc text-white fs-16">
                    We developed a great partnership with Amnet Digital and
                    their dedication towards our digital transformation was
                    commendable. We appreciate their attention to detail,
                    modernization approach, incorporation of machine learning &
                    automation of age-old and time-intensive documentation &
                    data deduplication processes.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 client-say-card-center">
              <div className="card client-say-card">
                <div className="card-body">
                  <img
                    loading="lazy"
                    src={QuoteIcon}
                    className="img-fluid quote-icon"
                    alt="icon"
                  />
                  {/* <h3 className="card-title">Jamie Lorenzo</h3> */}
                  <p className="card-text client-role text-white fw-bold-700 fs-18">
                    VP Engineering, eCommerce Company
                  </p>
                  <p className="card-text client-desc text-white fs-16">
                    We would like to express our satisfaction regarding the
                    development of our eCommerce web application. Amnet's
                    application engineering team did a very professional job. We
                    are satisfied with the solution given to us and with the
                    communication flow through the project. We look forward to
                    working with them in future projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientSay;
