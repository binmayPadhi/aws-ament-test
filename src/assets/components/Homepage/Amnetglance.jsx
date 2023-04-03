import React, { useEffect, useState } from "react";
import calender from "../../images/HomePage/amnet-glance/calendar.png";
import device from "../../images/HomePage/amnet-glance/device.png";
import forward from "../../images/HomePage/amnet-glance/forward.png";
import global from "../../images/HomePage/amnet-glance/global.png";
import universe from "../../images/HomePage/amnet-glance/universe.png";
import profile from "../../images/HomePage/amnet-glance/profile.png";
import todolist from "../../images/HomePage/amnet-glance/todolist.png";
import handshake from "../../images/HomePage/amnet-glance/hand-shake.png";

const Amnetglance = () => {
  let list = [
    {
      id: 1,
      image: calender,
      count: "2019",
      text: "Founded",
    },
    {
      id: 2,
      image: profile,
      count: "250+",
      text: "Employees",
    },
    {
      id: 3,
      image: handshake,
      count: "30+",
      text: "Clients",
    },
    {
      id: 4,
      image: forward,
      count: "33000+",
      text: "Hours of code",
    },
    {
      id: 5,
      image: todolist,
      count: "3",
      text: "R&D Labs",
    },
    {
      id: 6,
      image: global,
      count: "94%",
      text: "C-Sat Score",
    },
    {
      id: 7,
      image: universe,
      count: "4",
      text: "Countries on our global presence",
    },
    {
      id: 8,
      image: device,
      count: "60",
      text: "Digital Frameworks & Tech Accelerators",
    },
  ];
  const [count, setCount] = useState(0);
  const [glancelist, setglancelist] = useState(list);
  useEffect(
    () => {
      setCount(count + 1);
      list.map((x) => {
        if (x.id === 2) {
          x.count = count + "+";
        }
      });
      setglancelist(list);
    },
    count >= 251 ? [] : [count]
  );
  return (
    <>
      <div className="w-100 align-items-center d-flex margin-70">
        <div className="row w-100">
          <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
            <p className="text-right glance_styles glances_position">
              Amnet Digital <br />
              at a Glance
            </p>
          </div>
          <div className="col-md-8 col-lg-8 col-sm-12 col-xs-12 text-center">
            <div className="row mt-10">
              {glancelist.map((list) => {
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
                        <p className="fs-12 mt-1">{list.text}</p>
                      </td>
                    </tr>
                  </table>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amnetglance;
