import React from "react";
import privacypolicydata from "../../Data/Privacypolicy-Data/Privacpoliydata";

const Privacypolicy = () => {
  return (
    <>
      <div className="contact-us-intro container-fluid"></div>
      <div className="cookie-policy new-all-margin">
        <h1 className="cookie-policy-title">Privacy Policy</h1>
        <h4>Last updated: January 2023</h4>
        <div className="row about-us-page-row ml-0 mr-0">
          {privacypolicydata.map((list, index) => {
            return (
              <div className="col-12 about-us-details p-0" key={list.id}>
                <div className="about-us-desc">
                  <h2>{list.title}</h2>
                  <p>{list.description}</p>
                  <p>{list.description1}</p>
                  <p>{list.description2}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Privacypolicy;
