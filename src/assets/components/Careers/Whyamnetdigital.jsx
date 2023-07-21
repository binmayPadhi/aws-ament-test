import React, { useState } from "react";
import amnetdata from "../../Data/AboutUs-Data/About";

function Whyamnetdigital() {
  const [selectedObject, replaceObject] = useState(amnetdata.provendata[0]);
  const [selectedtitle, changeselectedtitle] = useState(
    amnetdata.provendata[0].selectedtitle
  );
  const chooseData = (e, selectedData) => {
    e.preventDefault();
    replaceObject(selectedData);
    changeselectedtitle(selectedData.selectedtitle);
  };
  return (
    <>
      <div className="whyamnetdigital">
        <div className="w-90 mx-auto">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="text-white amnet-styling">Why Amnet Digital</h1>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <ul>
                {amnetdata.provendata.map((list) => {
                  return (
                    <li
                      key={list.id}
                      className={
                        "text-white impact-space d-inline-block  cr-pointer px-3 py-2 border-grey " +
                        (list["selectedtitle"] === selectedtitle
                          ? "border-white"
                          : "border-grey")
                      }
                      onClick={(e) => chooseData(e, list)}
                    >
                      {list.selectedtitle}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="d-block w-100 valueimage"
                src={selectedObject.image}
                alt="First slide"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 my-auto">
              <h1 className="proven-tract-styling">{selectedObject.heading}</h1>
              <h1 className="years-styling mt-4">{selectedObject.description}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Whyamnetdigital;

{
  /* <h2 className="text-white impact-space ">Impact</h2>
              <h2 className="text-white impact-space">Development</h2>
              <h2 className="text-white impact-space">Progress</h2>
              <h2 className="text-white impact-space">Support</h2> */
}
