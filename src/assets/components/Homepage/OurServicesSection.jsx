import React from "react";
import "../../CSS/Services.css";
import OurServicesData from "../../Data/Homepage-Data/OurServicesData";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

// import {BrowserRouter as Router, Link} from "react-router-dom";

function OurServices() {
  const history = useHistory();
  const redirectTo = (e) => {
    e.preventDefault();
    history.push(`/services`);
  };
  return (
    <>
      <div className="center text-center py-4 mt-5 mb-5 service_title">
        Services we offer
      </div>
      <div className="row">
        {OurServicesData.map((data) => {
          return (
            <div
              className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4"
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
                    <h3 className="card-title-service my-3">
                      {data.serviceTitle}
                    </h3>
                  </Card.Title>
                  <Card.Text>
                    <p className="card-text">{data.serviceDesc}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Card.Text>
                    <a
                      href={`/${data.id}`}
                      className="more-explore pb-2"
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
          <div
            className="explore_services py-3 px-4 cr-pointer"
            onClick={(e) => redirectTo(e)}
          >
            Explore more services
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;
