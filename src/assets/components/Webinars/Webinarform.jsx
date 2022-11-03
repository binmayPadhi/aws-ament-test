import React from "react";
import "../../CSS/webinar.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

const Webinarform = () => {
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
    const aplhabetPattern = /^[a-z]+$/i;
    const emailpattern =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (
      aplhabetPattern.test(registerDetails.fName) &&
      aplhabetPattern.test(registerDetails.lName) &&
      emailpattern.test(registerDetails.email) &&
      aplhabetPattern.test(registerDetails.cName) &&
      aplhabetPattern.test(registerDetails.jobTitle)
    ) {
      return emailjs
        .sendForm(
          "gmail",
          "template_opai50d",
          e.target,
          "user_gk2s5L3y9LhSSq66o6aWz"
        )
        .then(
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
                className="w-100"
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
              Second Name<span className="req">*</span>
              <input
                type="text"
                className="w-100"
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
            <label>
              Job Title<span className="req">*</span>
            </label>
            <p className="email_field">
              <input
                type="text"
                name="jobTitle"
                onChange={handleChange}
                value={registerDetails.jobTitle}
                required
              />
            </p>
          </div>
        </div>
        <div className="row ml-0 mr-0 mt-1">
          <p className="col-12 para-form pl-0 pr-0 d-flex">
            <span>
              <input
                className="checkMark"
                type="checkbox"
                name="acceptCheckbox"
                onChange={handleChange}
                checked={registerDetails.acceptCheckbox}
                value={registerDetails.acceptCheckbox}
                required
              ></input>
            </span>
            <span className="ml-3 lh-1">
              I agree to Amnet Digital sending me relevant invitations, product
              offers, blogs, news, and other marketing information.
            </span>
          </p>
        </div>
        <div className="row ml-0 mr-0">
          <p className="col-12 para-form pl-0 pr-0 d-flex">
            <span className="ml-3 lh-1">
              By Submitting the form, you agree to us saving and processing your
              data according to our{" "}
              <Link to={`/Privacypolicy`} activeClassName="active">
                Privacy Policy
              </Link>
            </span>
          </p>
        </div>
        <div className="row ml-0 mr-0">
          <button
            className="col-12 pl-0 pr-0 submit-button cr-pointer"
            type="submit"
          >
            Register for Webinar
          </button>
          <p className="condition-para">
            Thank you for registering, we will share an email with the details!
          </p>
        </div>
      </form>
    </>
  );
};

export default Webinarform;
