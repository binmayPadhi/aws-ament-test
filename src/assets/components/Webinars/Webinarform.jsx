import React from "react";
import "../../CSS/webinar.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

const Webinarform = ({ getSuccessResponse }) => {
  const [registerDetails, setregisterDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    cName: "",
    jobTitle: "",
    acceptCheckbox: false,
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    const { checked, name1 } = event.target;
    setregisterDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: name != "acceptCheckbox" ? value : checked,
      };
    });
  };

  const submitregisterDetails = (e) => {
    e.preventDefault();
    const aplhabetPattern = /^(?! )[A-Za-z ]*(?<! )$/;
    const emailpattern =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (
      aplhabetPattern.test(registerDetails.fName) &&
      aplhabetPattern.test(registerDetails.lName) &&
      emailpattern.test(registerDetails.email) &&
      aplhabetPattern.test(registerDetails.cName)
    ) {
      return emailjs
        .sendForm(
          "service_h4akrmg",
          "template_3xhvl04",
          e.target,
          "yz7dQlM6o3Rz3cnB8"
        )
        .then(
          console.log("mail sent"),
          localStorage.setItem("cookie", 4),
          getSuccessResponse(true),
          setregisterDetails({
            fName: "",
            lName: "",
            email: "",
            cName: "",
            jobTitle: "",
            acceptCheckbox: false,
          }),
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <>
      <form
        name="webinarRegisterForm"
        action="#"
        method="post"
        onSubmit={submitregisterDetails}
      >
        <div className="row ml-0 mr-0">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
            <label>
              First Name<span className="req">*</span>
              <input
                className="w-100 pl-1"
                type="text"
                name="fName"
                onChange={handleChange}
                value={registerDetails.fName}
                required
              />
            </label>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
            <label>
              Last Name<span className="req">*</span>
              <input
                type="text"
                className="w-100 pl-1"
                name="lName"
                onChange={handleChange}
                value={registerDetails.lName}
                required
              />
            </label>
          </div>
        </div>
        <div className="row ml-0 mr-0 mt-1">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pl-0 pr-0">
            <label>
              Email<span className="req">*</span>
            </label>
            <p className="email_field">
              <input
                className="pl-1"
                type="email"
                name="email"
                onChange={handleChange}
                value={registerDetails.email}
                required
              />
            </p>
          </div>
        </div>
        <div className="row ml-0 mr-0 mt-1">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pl-0 pr-0">
            <label>
              Company<span className="req">*</span>
            </label>
            <p className="email_field">
              <input
                type="text"
                className="pl-1"
                name="cName"
                onChange={handleChange}
                value={registerDetails.cName}
                required
              />
            </p>
          </div>
        </div>
        <div className="row ml-0 mr-0 mt-1">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pl-0 pr-0">
            <label>Job Title</label>
            <p className="email_field">
              <input
                type="text"
                name="jobTitle"
                className="pl-1"
                onChange={handleChange}
                value={registerDetails.jobTitle}
              />
            </p>
          </div>
        </div>
        <div className="w-100 d-flex mt-2-rem">
          <div className="w-5">
            <input
              className="checkMark"
              type="checkbox"
              name="acceptCheckbox"
              onChange={handleChange}
              checked={registerDetails.acceptCheckbox}
              value={registerDetails.acceptCheckbox}
              required
            ></input>
          </div>
          <div className="w-95 pl-4">
            <span className="lh-1-25 fs-10">
              I agree to Amnet Digital sending me relevant invitations, product
              offers, blogs, news, and other marketing information.
            </span>
          </div>
        </div>
        <div className="row ml-0 mr-0 mt-2-rem">
          <p className="col-12 para-form pl-0 pr-0 d-flex">
            <span className="ml-3 lh-1-25 fs-10">
              By Submitting the form, you agree to us saving and processing your
              information according to our
              <span className="fs-10 d-line-block">
                <Link
                  to={`/Privacypolicy`}
                  className="fs-10 d-line-block pl-1"
                  target="_blank"
                >
                  Privacy Policy
                </Link>
              </span>
            </span>
          </p>
        </div>
        <div className="row ml-0 mr-0 mt-3-rem mb-3-rem">
          <div className="col-12 text-center">
            <button className="submit-button cr-pointer w-75" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Webinarform;
