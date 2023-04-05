import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import About from "../Data/AboutUs-Data/About";
import emailjs from "emailjs-com";

const Applicationform = () => {
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
  }, []);

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
      <div className="container">
        <div className="black-container mt-5">
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-12"></div>
            <div className="col-lg-5 col-md-5  col-sm-12 mt-3">
              <h1 className="fs-18 fw-bold-600 pt-4 pb-4">
                AUTOFILL APPLICATION
              </h1>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 mt-4 mb-4">
              <p className="fs-16 fw-bold-700 import-box">Import resume</p>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-12"></div>
          </div>
        </div>
        <h1 className="fs-16 fw-bold-400 mt-5">
          Required fields<span className="star-color">*</span>
        </h1>
        <div className="row mt-5">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="fs-20 fw-bold-400">Personal information</div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12"></div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="d-flex flex-row justify-content-end">
              <img src="" className="width-clear" />
              <p className="fs-16 fw-bold-400 text-lightgrey ml-3">clear</p>
            </div>
          </div>
        </div>
        <div className="bottom-line mt-2"></div>
        <div className="row mt-5">
          <div className="col-md-12 col-sm-12">
            <form
              name="webinarRegisterForm"
              action="#"
              method="post"
              onSubmit={submitregisterDetails}
            >
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <label>
                    First Name<span className="star-color">*</span>
                    <input
                      className="w-100"
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
                    Last Name<span className="star-color">*</span>
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
              <div className="row mt-4">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <label>
                    Email<span className="star-color">*</span>
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
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-4">
                  <label>Phone Number</label>
                  <p className="email_field mt-1">
                    <input
                      type="text"
                      className="w-100"
                      name="phoneNumber"
                      onChange={handleChange}
                      value={registerDetails.phoneNumber}
                    />
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="fs-20 fw-bold-400">Profile</div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12"></div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="d-flex flex-row justify-content-end">
                    <img src={""} className="width-clear" />
                    <p className="fs-16 fw-bold-400 text-lightgrey ml-3">
                      clear
                    </p>
                  </div>
                </div>
              </div>
              <div className="bottom-line mt-2"></div>
              <div className="row mt-5">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <label>
                    Summary<span className="color-optional">(Optional)</span>
                  </label>
                  <textarea className="text-height" />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="fs-20 fw-bold-400">Details</div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12"></div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="d-flex flex-row justify-content-end">
                    <img src={""} className="width-clear" />
                    <p className="fs-16 fw-bold-400 text-lightgrey ml-3">
                      clear
                    </p>
                  </div>
                </div>
              </div>
              <div className="bottom-line mt-3"></div>
              <div className="row mt-5">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <label>
                    Cover letter
                    <span className="color-optional">(Optional)</span>
                  </label>
                  <textarea className="text-height" />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-4">
                  <label>
                    Salary Expectation(yearly gross salary)
                    <span className="star-color">*</span>
                  </label>
                  <p className="email_field mt-1">
                    <input
                      type="text"
                      className="w-100"
                      name="phoneNumber"
                      onChange={handleChange}
                      value={registerDetails.phoneNumber}
                    />
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-4">
                  <label>
                    Availability of the canditate
                    <span className="star-color">*</span>
                  </label>
                  <p className="email_field mt-1">
                    <input
                      type="text"
                      className="w-100"
                      placeholder="DD/MM/YYYY"
                      name="phoneNumber"
                      onChange={handleChange}
                      value={registerDetails.phoneNumber}
                    />
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-4">
                  <label>
                    Location of the candidate
                    <span className="star-color">*</span>
                  </label>
                  <p className="email_field mt-1">
                    <input
                      type="text"
                      className="w-100"
                      name="phoneNumber"
                      onChange={handleChange}
                      value={registerDetails.phoneNumber}
                    />
                  </p>
                </div>
              </div>
              <div className="row ml-0 mr-0 mt-1">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pl-0 pr-0">
                  <label>
                    Desired Working Model
                    <span className="color-optional">(Optional)</span>
                  </label>
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
                    <p className="text-danger fs-14">
                      {validation.selecteditem}
                    </p>
                  )}
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
                <div className="w-95">
                  <span className=" fs-16 fw-bold-400">
                    I agree to Amnet Digital sending me relevant invitations,
                    product offers, blogs, news, and other marketing
                    information.
                  </span>
                </div>
              </div>
              <div className="row ml-0 mr-0 mt-2-rem">
                <p className="col-12 para-form pl-0 pr-0 d-flex">
                  <span className="ml-3 lh-1-25 fs-10">
                    By Submitting the form, you agree to us saving and
                    processing your information according to our
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
                  <button
                    className="submit-button cr-pointer w-75"
                    type="submit"
                  >
                    Talk to an Expert
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Applicationform;
