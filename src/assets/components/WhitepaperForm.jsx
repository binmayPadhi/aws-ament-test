import React from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef } from "react";
import Modal from "react-bootstrap/Modal";
import correct from "../images/Contact-Us-Page/correct.png";
import { useState } from "react";

const schema = yup
  .object()
  .shape({
    fName: yup
      .string()
      .matches(/^[a-zA-Z ]*$/, "First Name is not valid")
      .required("First Name is required"),
    lName: yup
      .string()
      .matches(/^[a-zA-Z ]*$/, "Last Name is not valid")
      .required("Last Name is required"),
    email: yup
      .string()
      .email()
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "email is required"
      )
      .required("email is required"),
    // phoneNumber: yup.string().when("$exist", {
    //   is: (exist) => exist,
    //   then: yup
    //     .string()
    //     .matches(
    //       /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    //       "phonenumber is not valid"
    //     ),
    //   otherwise: yup.string(),
    // }),
    // acceptCheckbox: yup.bool().oneOf([true], "Checkbox selection is required"),
    cName: yup
      .string()
      .matches(/^[a-zA-Z ]*$/, "Company Name is not valid")
      .required("Company is required"),
  })
  .required();

const Whitepaperform = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    return emailjs
      .sendForm(
        "service_e7ig9fn",
        "template_g62rj9d",
        formDetails.current,
        "yz7dQlM6o3Rz3cnB8"
      )
      .then(
        console.log("mail sent"),
        localStorage.setItem("cookie", 4),
        reset(),
        handleShow(),
        (error) => {
          console.log(error.text);
        }
      );
  };

  const formDetails = useRef();

  return (
    <>
      <div className="w-90 mx-auto">
        <div className="row">
          <div className="col-md-12 col-sm-12 mt-3 container-table-box">
            <form
              ref={formDetails}
              onSubmit={handleSubmit(submit)}
              className="pt-4"
            >
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <label className="font-form text-start ">
                    First Name<span className="star-green">*</span>
                    <input
                      className="w-100 pl-1 border-rounded"
                      type="text"
                      name="fName"
                      {...register("fName")}
                    />
                  </label>
                  <p className="fs-13 text-danger fw-bold-400 text-start">
                    {errors.fName?.message}
                  </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <label className="font-form text-start">
                    Last Name<span className="star-green">*</span>
                    <input
                      type="text"
                      className="w-100 pl-1 border-rounded"
                      name="lName"
                      {...register("lName")}
                    />
                  </label>
                  <p className="fs-13 text-danger fw-bold-400 text-start">
                    {errors.lName?.message}
                  </p>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <label className="font-form text-start">
                    Business Email<span className="star-green">*</span>
                  </label>
                  <p className="email_field">
                    <input
                      className="pl-1 border-rounded"
                      type="email"
                      name="email"
                      {...register("email")}
                    />
                  </p>
                  <p className="fs-13 text-danger fw-bold-400 text-start">
                    {errors.email?.message}
                  </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <label className="font-form text-start">
                    Company<span className="star-green">*</span>
                  </label>
                  <p className="email_field">
                    <input
                      type="text"
                      className="pl-1 form-control form-control-lg border-0"
                      name="cName"
                      {...register("cName")}
                    />
                  </p>
                  <p className="fs-13 text-danger fw-bold-400 text-start">
                    {errors.cName?.message}
                  </p>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <label className="font-form text-start">
                    Job Title<span className="star-green">*</span>
                  </label>
                  <p className="email_field">
                    <input
                      type="text"
                      name="jobTitle"
                      className="pl-1 form-control form-control-lg border-rounded"
                      {...register("jobTitle")}
                    />
                  </p>
                  <p className="fs-13 text-danger fw-bold-400 text-start">
                    {errors.jobTitle?.message}
                  </p>
                </div>
              </div>
              <div className="row ml-0 mr-0 mt-3-rem mb-3-rem">
                <div className="col-12 text-center">
                  <button
                    className="submit-button cr-pointer px-5 br-4"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="p-5" style={{ border: "3px solid #FF6E31" }}>
          <p className="text-black fw-bold-500 fs-18 text-center lh-26 my-3">
            <img alt="checkmark" src={correct} className="img-35" loading="lazy" />
          </p>
          <p className="text-black fw-bold-500 fs-14 text-center mt-4">
            Thank you for your interest, we will get in touch with you shortly!
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Whitepaperform;
