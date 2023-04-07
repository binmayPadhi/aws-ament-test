import React from "react";
import { useNavigate } from "react-router-dom";

const Letsconnect = () => {
  const history = useNavigate();
  const redirectTo = (e) => {
    e.preventDefault();
    history(`/contactus`);
  };
  return (
    <>
      <div className="mt-5 w-100 ceo-img-section h-auto py-5">
        <div className="row">
          <div className="col-md-9 col-lg-9 col-sm-12">
            <div className="w-90 mx-auto">
              <p className="fw-bold-700 fs-18 text-white">
                Do you have any technology challenges that are slowing down your
                business growth?
              </p>
              <div className="w-90">
                <p className="mt-2 text-white fs-16 fw-bold-400">
                  If so, let's connect with one of our technical experts to
                  develop and deploy a custom solution or product and overcome
                  your business challenge!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12 text-center my-5">
            <span
              className="text-black lets-connect bg-white br-20 fs-18 fw-bold-700 pl-5 pr-5 p-3 cr-pointer"
              onClick={(e) => redirectTo(e)}
            >
              Let's connect
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Letsconnect;
