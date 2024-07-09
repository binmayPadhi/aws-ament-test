import React from "react";
import amnetData from '../Data/AboutUs-Data/About';
import MediaQuery from "react-responsive";

let data = amnetData.whyamnet.map(response => {
  return (
    response.placement === 'left' ? (
      <div className="w-100 d-flex text-left">
        <span>
          <img src={response.image} loading="lazy" />
        </span>
        <span>
          <p className="heading_why pl-4 mb-0">{response.heading}</p>
          <p className="paragraph_why pl-4 width_query text-justify">
            {response.description}
          </p>
        </span>
      </div>
    ) : (
      <div className="w-100 d-flex text-right mt-3">
        <span>
          <p className="heading_why pr-4 mb-0">{response.heading}</p>
          <p className="w-100 justify-content-end d-flex">
            <p className="paragraph_why pr-4 width_query text-justify">
              {response.description}
            </p>
          </p>
        </span>
        <span>
          <img src={response.image} loading="lazy" />
        </span>
      </div>
    )
  )
});

const Whyamnet = () => {
  return (
    <>
    <MediaQuery minWidth={1024}>
      <div className="row pb-3 pt-5">
        <div className="col-md-5 col-lg-5 col-xs-12 col-sm-12 border-col1 mb-5">
          <p className="text-left glance_styles glances_position">
            Why
            <p className="text-left mb-5 glance_styles">
              Amnet Digital?
            </p>
          </p>
        </div>
        <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12 margin-amnet mb-5">
          {data}
        </div>
      </div>
    </MediaQuery>
    <MediaQuery maxWidth={1023}>
        <div className="col-xs-12 col-sm-12">
          <p className="text-left glance_styles mb-5">
            Why<br />
            Amnet Digital?
          </p>      
        </div>
        <hr className="hr-grey-line" />
        <div className="col-xs-12 col-sm-12 mb-5">
          {data}
        </div>
      </MediaQuery>
    </>
  );
};


export default Whyamnet;
