import React, { useState } from "react";
import Whyamnet from "../../images/careers-page/whyament.png";
import valuesfrom from "../../Data/AboutUs-Data/About";

function WeValueInnovation() {
  const [selectedObj, replaceObject] = useState(valuesfrom.corevalues[0]);
  const [selectedName, changeSelectedname] = useState(
    valuesfrom.corevalues[0].selectedName
  );
  const chooseData = (e, selectedData) => {
    e.preventDefault();
    replaceObject(selectedData);
    changeSelectedname(selectedData.selectedName);
  };
  return (
    <>
      <div className="weValueInnovation">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="text-white amnet-styling ">Why Amnet Digital</h1>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex">
              <ul>
                {valuesfrom.corevalues.map((res) => {
                  return (
                    <li
                      key={res.id}
                      className={
                        "text-white impact-space d-inline-block cr-pointer px-3 py-2 border-grey " +
                        (res["selectedName"] === selectedName
                          ? "border-white"
                          : "border-grey")
                      }
                      onClick={(e) => chooseData(e, res)}
                    >
                      {res.selectedName}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="d-block w-100 wevalue-img"
                src={selectedObj.image}
                alt="First slide"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 my-auto">
              <h1 className="proven-styling">{selectedObj.heading}</h1>
              <h1 className="years-styling mt-4">{selectedObj.description}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeValueInnovation;

{
  /* <h2 className="text-white impact-space ">Impact</h2>
              <h2 className="text-white impact-space">Development</h2>
              <h2 className="text-white impact-space">Progress</h2>
              <h2 className="text-white impact-space">Support</h2> */
}
