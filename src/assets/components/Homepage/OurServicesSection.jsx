import React from "react";
import "../../CSS/Services.css";
import OurServicesData from "../../Data/Homepage-Data/OurServicesData";
import { Card } from "react-bootstrap";

// import {BrowserRouter as Router, Link} from "react-router-dom";

function OurServices() {
  return (
    <>
      <div className="center text-center py-4 mt-5 mb-5 service_title">
        Services we offer
      </div>
      <div className="row">
        {OurServicesData.map((data) => {
          return (
            <div
              className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4 d-flex align-items-strech"
              key={data.id}
            >
              <Card className="cards">
                <Card.Header>
                  <div className="w-100 text-center my-4">
                    <img
                      loading="lazy"
                      src={data.serviceIcon}
                      className="rounded-img-corner w-25 text-center"
                      alt="icon"
                    />
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <h3 className="card-title-service my-3 card-body-heading">
                      {data.serviceTitle}
                    </h3>
                  </Card.Title>
                  <Card.Text>
                    <p className="card_body_description">{data.serviceDesc}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bgc-white border-0 mb-4">
                  <Card.Text>
                    <a
                      className="anchor_styles"
                      href={`/services/${data.link}`}
                    >{`Explore ->`}</a>
                  </Card.Text>
                </Card.Footer>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="center mt-5 mb-5">
        <div className="d-flex w-100 justify-content-center">
          <div className="new-explore-link text-center">
            <a href="/services">Explore All Services</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;
