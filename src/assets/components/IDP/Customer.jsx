import React from "react";
import { useState } from "react";
import girlimg from "../../images/Service-Page/section_image_case-study.png";
import data from "../../Data/Services-Data/CustomerData";
import MediaQuery from "react-responsive";
const Customer = () => {
  const [selectedObject, replaceObject] = useState(data[0]);
  const [selectedtitle, changeselectedtitle] = useState(
    data[0].selectedtitle
  );
  const chooseData = (e, selectedData) => {
    e.preventDefault();
    replaceObject(selectedData);
    changeselectedtitle(selectedData.selectedtitle);
  }
  return (
    <>
    {/* Mobile devices */}
    <MediaQuery query="(max-width:1024px)">
    <div className="row w-85 mx-auto">
        <h1 className="Resource-styling above-spacings">Customer Success Stories</h1>
          <img src={girlimg} className="girlimg-styling"/>
        <div className="col-sm-12 col-md-3 mt-5">
          {data.map((list) => {
            return (
              <>
                <p key={list.id} className={"text-black impact-space mt-5 d-inline-block  cr-pointer  py-2 border-grey " +
                  (list["selectedtitle"] === selectedtitle
                    ? " text-bold"
                    : "border-grey")
                } onClick={(e) => chooseData(e,list)}>
                  {list.selectedtitle}
                  </p>
              </>
            )
          })}
        </div>
        <div className="col-sm-12 col-md-9">
          {selectedObject.hasOwnProperty("challengelist") === true ? (
            <>
              {
                <ul className="list-style-customer above-spacings">
                  {selectedObject.challengelist.map((res) => {
                    return (
                      <>
                        <li className="fs-16 fw-bold-400">
                          {res.content}
                        </li>
                      </>
                    );
                  })}
                </ul>
              }
            </>
          ) : (
            ""
          )}
          <h1 className="above-spacings fs-16 fw-bold-600">Director of Data Analytics & AI</h1>
          <p className="fs-16 fw-bold-400">Dubai-Based Real Estate Agency</p>
        </div> 
      </div>
    </MediaQuery >
    <MediaQuery query="(min-width:1025px)">
      <div className="row w-85 mx-auto">
        <h1 className="Resource-styling above-spacings">Customer Success Stories</h1>
        <div className="col-lg-2 mt-5">
          {data.map((list) => {
            return (
              <>
                <p key={list.id} className={"text-black impact-space mt-5 d-inline-block  cr-pointer px-3 py-2 border-grey " +
                  (list["selectedtitle"] === selectedtitle
                    ? " text-bold"
                    : "border-grey")
                } onClick={(e) => chooseData(e,list)}>
                  {list.selectedtitle}
                  </p>
              </>
            )
          })}
        </div>
        <div className="col-lg-4">
          {selectedObject.hasOwnProperty("challengelist") === true ? (
            <>
              {
                <ul className="list-style-customer above-spacings">
                  {selectedObject.challengelist.map((res) => {
                    return (
                      <>
                        <li className="fs-16 fw-bold-400">
                          {res.content}
                        </li>
                      </>
                    );
                  })}
                </ul>
              }
            </>
          ) : (
            ""
          )}
          <h1 className="above-spacings fs-16 fw-bold-600">Director of Data Analytics & AI</h1>
          <p className="fs-16 fw-bold-400">Dubai-Based Real Estate Agency</p>
        </div>
        <div className="col-lg-6 above-spacings">
          <img src={girlimg} />
        </div>
      </div>
      </MediaQuery>
    </>
  )
}

export default Customer;