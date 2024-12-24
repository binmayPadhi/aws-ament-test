import "../../CSS/swiftinisghts.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const SwiftlnisghtsWebinarform = ({ getSuccessResponse }) => {
  const [userDetails, setUserDetails] = useState({
    fName: "",
    email: "",
    cName: "",
    jobTitle: "",
    updates: false,
  });

  function handleChange(event) {
    const { value, name } = event.target;
    const { checked, name1 } = event.target;
    setUserDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: name != "updates" ? value : checked,
      };
    });
  }

  function submitDetails(e) {
    e.preventDefault();
    const aplhabetPattern = /^[a-z]+$/i;
    const emailpattern =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (
      aplhabetPattern.test(userDetails.fullName) &&
      aplhabetPattern.test(userDetails.company) &&
      aplhabetPattern.test(userDetails.role) &&
      emailpattern.test(userDetails.email)
    ) {
      return emailjs
        .sendForm(
          "service_e7ig9fn",
          "template_h0xkqot",
          e.target,
          "yz7dQlM6o3Rz3cnB8"
        )
        .then(
          console.log("SUCCESS!"),
          getSuccessResponse(true),
          setUserDetails({
            fName: "",
            email: "",
            cName: "",
            jobTitle: "",
            updates: false,
          }),
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("FAILED...");
      return false;
    }
  }

  return (
    <>
      <div className="w-100 justify-content-center d-flex">
        <div className="card card-box">
          <div className="card-header border-0 heading py-2">
            Please fill the below details to attend webinar
          </div>
          <div className="card-body my-3">
            <form
              name="contactForm"
              action="#"
              method="post"
              onSubmit={submitDetails}
            >
              <div className="row ml-0 mr-0">
                <div className="col-12 pl-0 pr-0">
                  <p className="mb-0">
                    <label>
                      Full Name<span className="req">*</span>
                    </label>
                  </p>
                  <p className="w-100">
                    <input
                      className="w-100 pl-1"
                      type="text"
                      name="fName"
                      onChange={handleChange}
                      value={userDetails.fName}
                      required
                    />
                  </p>
           
                </div>
              </div>
              <div className="row ml-0 mr-0">
                <div className="col-12 pl-0 pr-0">
                  <p className="mb-0">
                    <label>
                      Email<span className="req">*</span>
                    </label>
                  </p>
                  <p className="w-100">
                    <input
                      className="w-100 pl-1"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={userDetails.email}
                      required
                    />
                  </p>
                </div>
              </div>
              <div className="row ml-0 mr-0">
                <div className="col-12 pl-0 pr-0">
                  <p className="mb-0">
                    <label>Company</label>
                  </p>
                  <p className="w-100">
                    <input
                      className="w-100 pl-1"
                      type="text"
                      name="cName"
                      onChange={handleChange}
                      value={userDetails.cName}
                      required
                    />
                  </p>
                </div>
              </div>
              <div className="row ml-0 mr-0">
                <div className="col-12 pl-0 pr-0">
                  <p className="mb-0">
                    <label>Role</label>
                  </p>
                  <p className="w-100">
                    <input
                      className="w-100 pl-1"
                      type="text"
                      name="jobTitle"
                      onChange={handleChange}
                      value={userDetails.jobTitle}
                      required
                    />
                  </p>
                </div>
              </div>
              <div className="row ml-0 mr-0 pt-2">
                <div className="col-12 pl-0 pr-0">
                  <p className="w-100 d-flex align-items-center">
                    <input
                      className="w-100 pl-1 checkMark"
                      name="updates"
                      type="checkbox"
                      onChange={handleChange}
                      checked={userDetails.updates}
                      value={userDetails.updates}
                    />
                    <span className="submittext">
                      Send me updates about Swight Insights
                    </span>
                  </p>
                </div>
              </div>
              <div className="row ml-0 mr-0 pt-1">
                <div className="col-12 pl-0 pr-0">
                  <div className="w-100 d-flex justify-content-center">
                    <button className="subBtn px-4 border-0" type="submit">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwiftlnisghtsWebinarform;
