import emailjs from "emailjs-com";
import React, { useEffect, useState } from "react";
import "../../CSS/webinar.css";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Letsgetstart = (props) => {
  const header = new Headers();
  useEffect(() => {
    header.append("X-Content-Type-Options", "nosniff");
    header.append("X-Frame-Options", "Deny");
  });
  const [show, setShow] = useState(false);
  const [showSuccessmsg, setSuccessmsg] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setSuccessmsg(false);
    setShow(true);
  };

  const [registerDetails, setregisterDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    cName: "",
    jobTitle: "",
    phoneNumber: "",
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
    const phonenumberPattern =
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    if (
      aplhabetPattern.test(registerDetails.fName) &&
      aplhabetPattern.test(registerDetails.lName) &&
      emailpattern.test(registerDetails.email) &&
      aplhabetPattern.test(registerDetails.cName) &&
      phonenumberPattern.test(registerDetails.phoneNumber)
    ) {
      return emailjs
        .sendForm(
          "service_e7ig9fn",
          "template_at4mwq8",
          e.target,
          "yz7dQlM6o3Rz3cnB8"
        )
        .then(
          console.log("mail sent"),
          localStorage.setItem("cookie", 4),
          setSuccessmsg(true),
          setregisterDetails({
            fName: "",
            lName: "",
            email: "",
            cName: "",
            jobTitle: "",
            phoneNumber: "",
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
      <div className="mt-3-rem mb-3-rem">
        <div className="d-flex w-100 justify-content-center">
          <div className="w-75 bg-left  d-flex align-items-center">
            <div className="center-88">
              <p className="mb-0 text-white fs-20 font-weight-bold py-4">
                {props.componentFrom === "blog" ? (
                  <>
                    Do you want your AI & Data Analytics investment to bring
                    meaningful results with real ROI?
                  </>
                ) : (
                  <>
                    Leading retailers are experiencing the biggest challenge in
                    choosing the right AI/ML advisor toward digital
                    transformation, we can help you to overcome the problem by
                    offering you a personalized and no-obligation consultation.
                  </>
                )}
              </p>
              <p className="mb-0 text-white fs-20 font-weight-bold">
                Schedule your FREE consulation now!
              </p>
            </div>
          </div>
          <div className="w-25 bg-right  d-flex align-items-center">
            <div className="center-98">
              <p
                className="mb-0 text-white fs-20 font-weight-bold w-100 pl-md-4 pl-sm-2"
                onClick={handleShow}
              >
                Let's get started
                <i
                  className="fa fa-long-arrow-right text-white fs-18 pl-2"
                  aria-hidden="true"
                ></i>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="my-modal"
      >
        {showSuccessmsg === false ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title className="mx-auto">
                <div className="px-2">
                  <p className="mt-3-rem mb-3-rem fs-20 text-dark text-center font-weight-bold">
                    Let's connect to get started
                  </p>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="px-2">
                <form
                  name="webinarRegisterForm"
                  action="#"
                  method="post"
                  onSubmit={submitregisterDetails}
                >
                  <div className="row mb-3-rem">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <label>
                        First Name<span className="req">*</span>
                        <input
                          className="w-100 pl-1"
                          type="text"
                          name="fName"
                          onChange={handleChange}
                          value={registerDetails.fName}
                          style={{ backgroundColor: "rgb(245 238 245)" }}
                          required
                        />
                      </label>
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
                          style={{ backgroundColor: "rgb(245 238 245)" }}
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <div className="row mb-3-rem">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <label>
                        Email<span className="req">*</span>
                        <input
                          className="w-100 pl-1"
                          type="email"
                          name="email"
                          onChange={handleChange}
                          value={registerDetails.email}
                          style={{ backgroundColor: "rgb(245 238 245)" }}
                          required
                        />
                      </label>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <label>
                        Company<span className="req">*</span>
                        <input
                          type="text"
                          className="w-100 pl-1"
                          name="cName"
                          onChange={handleChange}
                          value={registerDetails.cName}
                          style={{ backgroundColor: "rgb(245 238 245)" }}
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <div className="row mb-3-rem">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <label>
                        Job Title
                        <input
                          className="w-100 pl-1"
                          type="text"
                          name="jobTitle"
                          onChange={handleChange}
                          value={registerDetails.jobTitle}
                          style={{ backgroundColor: "rgb(245 238 245)" }}
                        />
                      </label>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <label>
                        Phone Number
                        <input
                          type="text"
                          pattern="[6789][0-9]{9}"
                          title="Please enter valid phone number"
                          className="w-100 pl-1"
                          name="phoneNumber"
                          onChange={handleChange}
                          value={registerDetails.phoneNumber}
                          style={{ backgroundColor: "rgb(245 238 245)" }}
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <div className="w-100 d-flex mt-2-rem">
                    <div className="w-100 d-flex align-item-center pl-4">
                      <input
                        className="checkMark1"
                        type="checkbox"
                        name="acceptCheckbox"
                        onChange={handleChange}
                        checked={registerDetails.acceptCheckbox}
                        value={registerDetails.acceptCheckbox}
                        required
                      ></input>
                      <span className="lh-1-25 fs-10 pl-2">
                        I agree to Amnet Digital sending me relevant
                        invitations, product offers, blogs, news, and other
                        marketing information.
                      </span>
                    </div>
                  </div>
                  <div className="row mt-2-rem">
                    <p className="col-12 para-form d-flex">
                      <span className="ml-4 lh-1-25 fs-10">
                        By Submitting the form, you agree to us saving and
                        processing your information according to our
                        <span className="fs-10 d-line-block">
                          <Link
                            to={`/privacypolicy`}
                            className="fs-10 d-line-block pl-1"
                            target="_blank"
                          >
                            Privacy Policy
                          </Link>
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="row ml-0 mr-0 mt-3-rem mb-5-rem">
                    <div className="col-lg-4 col-md-4 col-sm-3 col-xs-3"></div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 text-center">
                      <button
                        className="submit-button cr-pointer d-table font-weight-normal w-100"
                        type="submit"
                      >
                        Let's Talk
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-3 col-xs-3"></div>
                  </div>
                </form>
              </div>
            </Modal.Body>
          </>
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title className="mx-auto"></Modal.Title>
            </Modal.Header>
            <Modal.Body className="h-75-px">
              <div className="exactCenter">
                <p className="text-dark font-weight-bold fs-24">
                  Thank you for your interest, we will get touch with you within
                  24 hours
                </p>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </>
  );
};

export default Letsgetstart;
