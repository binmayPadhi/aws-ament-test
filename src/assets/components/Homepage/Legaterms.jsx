import React from "react";
import { Card } from "react-bootstrap";
import "../../CSS/webinar.css";

const Legalterms = () => {
  const legalterms = [
    {
      id: 1,
      heading: "Privacy Policy",
      updated: "Last updated on 26 July 2022",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      link: "privacy",
    },
    {
      id: 2,
      heading: "Cookies Policy",
      updated: "Last updated on 26 July 2022",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      link: "privacy",
    },
    {
      id: 3,
      heading: "Terms Of Use",
      updated: "Last updated on 26 July 2022",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      link: "privacy",
    },
    {
      id: 4,
      heading: "Trademarks",
      updated: "Last updated on 26 July 2022",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      link: "privacy",
    },
    {
      id: 5,
      heading: "Licenses",
      updated: "Last updated on 26 July 2022",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      link: "privacy",
    },
  ];
  return (
    <>
      <div className="contact-us-intro container-fluid"></div>
      <div className="cookie-policy new-all-margin pt-5 pb-5">
        <h1 className="cookie-policy-title py-5">Legal Resources</h1>
        <div className="row">
          {legalterms.map((data) => {
            return (
              <p className="col-lg-4 col-md-4 col-sm-12 col-xs-12 px-4 bx-shadow">
                <Card key={data.id}>
                  <Card.Header>
                    <div className="legal-header mb-0">{data.heading}</div>
                    <div className="updated">{data.updated}</div>
                  </Card.Header>
                  <Card.Body>
                    <div className="description-legal">{data.desc}</div>
                  </Card.Body>
                  <Card.Footer>
                    <div className="description-legal">{`See More ->`}</div>
                  </Card.Footer>
                </Card>
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Legalterms;
