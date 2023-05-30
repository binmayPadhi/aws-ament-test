import React, { useEffect, useState } from "react";
import MediaQuery from "react-responsive";
import Aboutdata from "../../Data/AboutUs-Data/About";


  // const [count, setCount] = useState(0);

  // useEffect(
  //   () => {
  //     setCount(count + 1);
  //     list.map((x) => {
  //       if (x.id === 2) {
  //         x.count = count + "+";
  //       }
  //     });
  //     setglancelist(list);
  //   },
  //   count >= 251 ? [] : [count]
  // );
  const Amnetglance = () => {
  return (
    <>
    
     <MediaQuery query="(max-width: 1024px)">
     <div className="w-100 align-items-center d-flex space-above pb-5">
        <div className="row w-100">
          <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 mb-5">
            <p className="text-center glance_styles glances_position ">
              Amnet Digital <br />
              at a Glance
            </p>
          </div>
          <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12 text-center">
            <div className="row mt-10-rem">
              {Aboutdata.list.map((list) => {
                return (
                  <table className="col-6 mt-5" key={list.id}>
                    <tr>
                      <td className="border-0">
                        <p
                          style={{
                            height: "50px",
                          }}
                          className={list.count}
                        >
                          <img src={list.image} className="w-50px" />
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-0">
                        <p className="font-weight-bold fs-16 mt-3">
                          {list.count}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-0">
                        <p className="fs-12 mt-1-text">{list.text}</p>
                      </td>
                    </tr>
                  </table>
                );
              })}
            </div>
          </div>
        </div>
      </div>
     </MediaQuery>
    
    
     <MediaQuery query="(min-width: 1025px)">
      <div className="w-100 align-items-center d-flex space-above pb-5">
        <div className="row w-100">
          <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <p className="text-right glance_styles glances_position">
              Amnet Digital
              <p className="text-right glance_styles glances_position pt-5">
              at a Glance
              </p>
            </p>
          </div>
          <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12 text-center">
            <div className="row mt-10">
              {Aboutdata.list.map((list) => {
                return (
                  <table className="col-3" key={list.id}>
                    <tr>
                      <td className="border-0">
                        <p
                          style={{
                            height: "50px",
                          }}
                          className={list.count === "60" ? "mt-4" : ""}
                        >
                          <img src={list.image} className="w-50px" />
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-0">
                        <p className="font-weight-bold fs-16 mt-3">
                          {list.count}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border-0">
                        <p className="fs-12 mt-1-text">{list.text}</p>
                      </td>
                    </tr>
                  </table>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </MediaQuery>
      
    </>
  );
};

export default Amnetglance;
