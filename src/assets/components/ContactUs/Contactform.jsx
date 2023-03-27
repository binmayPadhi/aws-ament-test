import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import About from "../../Data/AboutUs-Data/About";

const Contactform = () => {
  const [registerDetails, setregisterDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    cName: "",
    jobTitle: "",
    phoneNumber: "",
    message: "",
    selecteditem: "",
    acceptCheckbox: false,
  });

  const [validation, setValidation] = useState({
    fName: "",
    lName: "",
    email: "",
    selecteditem: "",
    cName: "",
  });

  useEffect(() => {
    validate();
  }, [registerDetails]);

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

  const validate = () => {
    let error = validation;
    if (!registerDetails.fName) {
      error.fName = "This field is required";
    } else {
      error.fName = "";
    }
    if (!registerDetails.lName) {
      error.lName = "This field is required";
    } else {
      error.lName = "";
    }
    if (!registerDetails.cName) {
      error.cName = "This field is required";
    } else {
      error.cName = "";
    }
    if (!registerDetails.selecteditem) {
      error.selecteditem = "This field is required";
    } else {
      error.selecteditem = "";
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!registerDetails.email || reg.test(registerDetails.email) === false) {
      error.email = "Email Field is Invalid ";
    } else {
      error.email = "";
    }
    if (
      error.selecteditem ||
      error.cName ||
      error.fName ||
      error.lName ||
      error.email
    ) {
      setValidation(error);

      return false;
    }
    return true;
  };

  const submitregisterDetails = (e) => {
    e.preventDefault();
    if (validate()) {
      return emailjs
        .sendForm(
          "service_h4akrmg",
          "template_h0xkqot",
          e.target,
          "yz7dQlM6o3Rz3cnB8"
        )
        .then(
          console.log("mail sent"),
          localStorage.setItem("cookie", 4),
          setregisterDetails({
            fName: "",
            lName: "",
            email: "",
            cName: "",
            jobTitle: "",
            phoneNumber: "",
            message: "",
            selecteditem: "",
            acceptCheckbox: false,
          }),
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      // console.log(validation);
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h1 className="clr-black fw-bold-700 fs-35 px-3">
            Let's get started
          </h1>
          <h5 className="px-3 clr-black  fw-bold-700 fs-16 mt-4">
            Are you ready to become a digital-first <br /> organization?
          </h5>
          <p className="px-3 clr-black  mt-5 fs-16 fw-bold-400">
            We are experts in solving complex business technology challenges in
            today's unprecedented situations, leveraging our digital frameworks
            and technology accelerators.
          </p>
          <p className="px-3 clr-black fs-16 fw-bold-400">
            You can request any information about our digital products,
            services, and solutions by filling out this form. We will get in
            touch with you within 48 business hours.
          </p>
        </div>
        <div className="col-md-6 col-sm-12">
          <form
            name="webinarRegisterForm"
            action="#"
            method="post"
            onSubmit={submitregisterDetails}
          >
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <label>
                  First Name<span className="req">*</span>
                  <input
                    className="w-100 pl-1"
                    type="text"
                    name="fName"
                    onChange={handleChange}
                    value={registerDetails.fName}
                  />
                </label>
                {validation.fName != "" ? (
                  <p className="text-danger fs-14">{validation.fName}</p>
                ) : null}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <label>
                  Last Name<span className="req">*</span>
                  <input
                    type="text"
                    className="w-100 pl-1"
                    name="lName"
                    onChange={handleChange}
                    value={registerDetails.lName}
                  />
                </label>
                {validation.lName && (
                  <p className="text-danger fs-14">{validation.lName}</p>
                )}
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <label>
                  Business Email<span className="req">*</span>
                </label>
                <p className="email_field">
                  <input
                    className="pl-1"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={registerDetails.email}
                  />
                </p>
                {validation.email && (
                  <p className="text-danger fs-14">{validation.email}</p>
                )}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <label>Phone Number</label>
                <p className="email_field mt-1">
                  <input
                    type="text"
                    className="pl-1"
                    name="phoneNumber"
                    onChange={handleChange}
                    value={registerDetails.phoneNumber}
                  />
                </p>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
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
                  />
                </p>
                {validation.cName && (
                  <p className="text-danger fs-14">{validation.cName}</p>
                )}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <label>Job Title</label>
                <p className="email_field mt-1">
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
            <div className="row ml-0 mr-0 mt-1">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pl-0 pr-0">
                <label>Interested in (Services/Products/Technologies)*</label>
                <p>
                  <select
                    className="form-select text-areainput select-height"
                    aria-label="Default select example"
                    onChange={handleChange}
                    isSearchable="true"
                    name="selecteditem"
                  >
                    {About.dropdownlist.map((list) => {
                      return (
                        <option key={list.id} value={list.name}>
                          {list.name}
                        </option>
                      );
                    })}
                  </select>
                </p>
                {validation.selecteditem && (
                  <p className="text-danger fs-14">{validation.selecteditem}</p>
                )}
              </div>
            </div>
            <div className="row ml-0 mr-0 mt-1">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pl-0 pr-0">
                <label>Message</label>
                <textarea
                  name="message"
                  onChange={handleChange}
                  rows="10"
                  className="text-areainput"
                  value={registerDetails.message}
                ></textarea>
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
                  I agree to Amnet Digital sending me relevant invitations,
                  product offers, blogs, news, and other marketing information.
                </span>
              </div>
            </div>
            <div className="row ml-0 mr-0 mt-2-rem">
              <p className="col-12 para-form pl-0 pr-0 d-flex">
                <span className="ml-3 lh-1-25 fs-10">
                  By Submitting the form, you agree to us saving and processing
                  your information according to our
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
                  Talk to an Expert
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactform;
