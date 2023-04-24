import React from "react";
import { Card } from "react-bootstrap";
import "../../CSS/webinar.css";

const Legalterms = () => {
  const legalterms = [
    {
      id: 1,
      heading: "Privacy Policy",
      updated: "Last updated on January 2023",
      desc: "Amnet Digital attaches great importance to your right to privacy and the protection of your personal data...",
      link: "privacypolicy",
    },
    {
      id: 2,
      heading: "Cookies Policy",
      updated: "Last updated on January 2023",
      desc: "A cookie is a small text file that is stored on your computer or another internet-connected device in order to identify your browser, provide analytics...",
      link: "cookiespolicy",
    },
    {
      id: 3,
      heading: "Terms Of Use",
      updated: "Last updated on January 2023",
      desc: "This Site provides online access to information about our organization, products, solutions, services, and opportunities...",
      link: "termsandconditions",
    },
    // {
    //   id: 4,
    //   heading: "Trademarks",
    //   updated: "Last updated on 26 July 2022",
    //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    //   link: "privacy",
    // },
    // {
    //   id: 5,
    //   heading: "Licenses",
    //   updated: "Last updated on 26 July 2022",
    //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    //   link: "privacy",
    // },
  ];
  return (
    <>
      <div className="contact-us-intro container-fluid"></div>
      <div className="cookie-policy new-all-margin pt-5 pb-5">
        <h1 className="cookie-policy-title fs-42 py-5">Legal Resources</h1>
        <div className="row">
          {legalterms.map((data) => {
            return (
              <p className="col-lg-4 col-md-4 col-sm-12 col-xs-12 px-4 bx-shadow d-flex align-items-strech">
                <Card key={data.id}>
                  <Card.Header>
                    <div className="legal-header mb-0 fs-26 fw-bold-700 new-case-studies-card-heading">
                      {data.heading}
                    </div>
                    <div className="updated fs-16 fw-bold-400 new-case-studies-card-heading">
                      {data.updated}
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div className="description-legal fs-16 fw-bold-400 text-dark new-case-studies-card">
                      <p>{data.desc}</p>
                    </div>
                    <div className="description-legal new-case-studies-card pt-4 pb-2">
                      <a href={`/${data.link}`}>{`See More ->`}</a>
                    </div>
                  </Card.Body>
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
