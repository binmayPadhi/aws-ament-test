import React from "react";
import { Card } from "react-bootstrap";
import "../../CSS/Services.css";

const Uniqueapproch = () => {
  const uniqueapprochlist = [
    {
      id: 1,
      heading: "Turn your ideas into winning tech products",
      description:
        "We transform your business idea into a minimum viable product (MVP) in 90 days that make a real impact",
    },
    {
      id: 2,
      heading: "Innovate your technology and infrastructure",
      description:
        "We accelerate your business growth consistently by building and deploying relevant and meaningful technologies.",
    },
    {
      id: 3,
      heading: "Bridge tech skill gap",
      description:
        "We do all the heavy lifting to get you access to the best-in-class technology consultants for your niche business requirements.",
    },
  ];
  return (
    <>
      <div className="center text-center py-4 mt-5 mb-5 service_title">
        Our Unique Approach
      </div>
      <div className="uniqueBackground">
        <div className="center-88">
          <div className="row my-3">
            {uniqueapprochlist.map((list) => {
              return (
                <div
                  key={list.id}
                  className="col-md-4 col-lg-4 col-sm-12 col-xs-12 uniquecard"
                >
                  <Card className="p-2">
                    <Card.Header className="mt-3">
                      <p className="id_styles">0{list.id}</p>
                    </Card.Header>
                    <Card.Body className="p-0 pl-3">
                      <p className="header_styles w-50 mb-0">{list.heading}</p>
                    </Card.Body>
                    <Card.Footer>
                      <p className="desc_styles w-75 p-0">{list.description}</p>
                    </Card.Footer>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Uniqueapproch;
