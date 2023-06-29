import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import "../CSS/ApplicationForm.css";
import clear from "../../assets/images/careers-page/clear.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef } from "react";
import Modal from "react-bootstrap/Modal";
import correct from "../images/careers-page/correct.png";
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

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
    phoneNumber: yup
      .string()
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        "phone number is invalid"
      )
      .required("phone number is required"),
    salaryExpectation: yup
      .string()
      .matches(/[0-9]+/, "salary expectation is not valid")
      .required("Salary Expectation is required"),
    avaliblityDate: yup.string().required("Date Avaliblity is required"),
    // resume: yup.string().required("Resume is required"),
    location: yup
      .string()
      .matches(/^[a-zA-Z ]*$/, "location is not valid")
      .required("location is required"),
    acceptCheckbox: yup.string().required("Please check the checkbox"),
  })
.required();

const ApplicationForm = () => {
  const applicationDetails = useRef();
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [errorImg, setErrorImg] = useState("");
  const onFileChange = (e) => {
    setErrorImg("");
    console.log(e.target.files[0].type)
    if (
      e.target.files[0].type === "application/pdf" ||
      e.target.files[0].type === "application/docx" ||
      e.target.files[0].type === "application/doc"  ||
      e.target.files[0].type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      e.target.files[0].type === "application/msword"
    ) {
      const files = e.target.files[0];
      setUploadedPhotos([...uploadedPhotos, files]);
    } else {
      setErrorImg("Please upload only pdf or doc, docx formatted files");
    }
  };

  const onSubmit = (data) => {
    data["resume"] = uploadedPhotos[0];
    return emailjs
      .sendForm(
        "service_h4akrmg",
        "template_h0xkqot",
        applicationDetails.current,
        "yz7dQlM6o3Rz3cnB8"
      )
      .then(
        console.log("mail sent"),
        reset(),
        handleShow(),
        setUploadedPhotos([]),
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const clearInformation = () => {
    reset({
      fName: "",
      lName: "",
      email: "",
      phoneNumber: "",
      location: "",
    });
  };

  const clearDetails = () => {
    reset({
      summary: "",
      coverLetter: "",
      salaryExpectation: "",
      avaliblityDate: "",
      acceptCheckbox: false,
      location: "",
    });
  };

  const clearProfile = () => {
    reset({
      summary: "",
    });
  };


  const [files,setFiles] = useState(null);
  const handleDragOver = (event) => {
    event.preventDefault()
  }
  const handleDrop = (event) => {
    event.preventDefault()
    setFiles(event.datatransfer.files);
    onFileChange(event)
  }
  
  const inputRef = useRef();
  return (
    <>
      <div className="container">
        <form ref={applicationDetails} onSubmit={handleSubmit(onSubmit)}>
          <h1 className="fs-16 fw-bold-400 mt-5">
            Required fields<span className="star-color">*</span>
          </h1>
          <div className="row mt-5">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="fs-20 fw-bold-400">Personal information</div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12"></div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div
                className="d-flex flex-row justify-content-end cr-pointer"
                onClick={clearInformation}
              >
                <img src={clear} className="width-clear" />
                <p className="fs-16 fw-bold-400 text-lightgrey ml-3">clear</p>
              </div>
            </div>
          </div>
          <div className="bottom-line mt-2"></div>
          <div className="row mt-5">
            <div className="col-md-12 col-sm-12">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <label>
                    First Name<span className="star-color">*</span>
                    <input
                      className="w-100"
                      type="text"
                      name="fName"
                      {...register("fName")}
                    />
                  </label>
                  <p className="fs-13 text-danger fw-bold-400">
                    {errors.fName?.message}
                  </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <label>
                    Last Name<span className="star-color">*</span>
                    <input
                      type="text"
                      className="w-100 pl-1"
                      name="lName"
                      {...register("lName")}
                    />
                  </label>
                  <p className="fs-13 text-danger fw-bold-400">
                    {errors.lName?.message}
                  </p>
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
                      {...register("email")}
                    />
                  </p>
                  <p className="fs-13 text-danger fw-bold-400">
                    {errors.email?.message}
                  </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-4">
                  <label>Phone Number</label>
                  <p className="email_field">
                    <input
                      type="text"
                      className="w-100"
                      name="phoneNumber"
                      {...register("phoneNumber")}
                    />
                  </p>
                  <p className="fs-13 text-danger fw-bold-400">
                    {errors.phoneNumber?.message}
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="fs-20 fw-bold-400">Profile</div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12"></div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div
                    className="d-flex flex-row justify-content-end cr-pointer"
                    onClick={clearProfile}
                  >
                    <img src={clear} className="width-clear" />
                    <p className="fs-16 fw-bold-400 text-lightgrey ml-3">
                      clear
                    </p>
                  </div>
                </div>
              </div>
              <div className="bottom-line mt-2"></div>
              <div className="mt-2">
              <label>
                    Resume<span className="star-color">*</span>
                  </label>
             
              <div className="dropzone"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => inputRef.current.click()}
                  >
                    <input
                    {...register("resume", {
                      validate: {
                        acceptedFormats: (files) =>
                          ["pdf", "docx", "doc"].includes(files[0]?.type) ||
                          "Please upload only PDF, DOCX",
                      },
                    })}
                      type="file"
                      multiple={false}
                      onChange={onFileChange}
                      hidden
                      ref={inputRef}>
                    </input>
                    
                <h1 className="text-center cr-pointer">Upload a file <span className="text-grey-text">or drag and drop here</span></h1>   
                
                </div>
                {errors.resume && (
                  <p className="fs-12 text-danger fw-bold-400">
                    {errors.resume.message}
                  </p>
                )}
                <p className="fs-12 text-danger fw-bold-400">{errorImg}</p>
                <p className="fs-12 text-dark fw-bold-400">
                  {uploadedPhotos.map((photo, i) => (
                    <p className="fs-12 text-dark fw-bold-400" key={i}>
                      {photo.name}
                    </p>
                  ))}
                </p>             
            
            </div>
              <div className="row mt-5">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <label>
                    Summary<span className="color-optional">(Optional)</span>
                  </label>
                  <textarea
                    rows="10"
                    className="text-height"
                    name="summary"
                    {...register("summary")}
                  />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="fs-20 fw-bold-400">Details</div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12"></div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div
                    className="d-flex flex-row justify-content-end cr-pointer"
                    onClick={clearDetails}
                  >
                    <img src={clear} className="width-clear" />
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
                  <textarea
                    rows="10"
                    className="text-height"
                    name="coverLetter"
                    {...register("coverLetter")}
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-4">
                  <label>
                    Salary Expectation(yearly gross salary)
                    <span className="star-color">*</span>
                  </label>
                  <p className="email_field">
                    <input
                      type="text"
                      className="w-100"
                      name="salaryExpectation"
                      {...register("salaryExpectation")}
                    />
                  </p>
                  <p className="fs-13 text-danger fw-bold-400">
                    {errors.salaryExpectation?.message}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-4">
                  <label>
                    Availability of the canditate
                    <span className="star-color">*</span>
                  </label>
                  <p className="email_field">
                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className="w-100"
                      placeholder="DD/MM/YYYY"
                      name="avaliblityDate"
                      {...register("avaliblityDate")}
                    />
                  </p>
                  <p className="fs-13 text-danger fw-bold-400">
                    {errors.avaliblityDate?.message}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-4">
                  <label>
                    Location of the candidate
                    <span className="star-color">*</span>
                  </label>
                  <p className="email_field">
                    <input
                      type="text"
                      className="w-100"
                      name="location"
                      {...register("location")}
                    />
                  </p>
                  <p className="fs-13 text-danger fw-bold-400">
                    {errors.location?.message}
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
                      className="form-select text-area-style select-height-form"
                      aria-label="Default select example"
                      name="workModel"
                      {...register("workModel")}
                    >
                      <option value="wfo">Work from Office</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="wfh">Work from Home</option>
                    </select>
                  </p>
                </div>
              </div>

              <div className="w-100 d-flex mt-2-rem">
                <div className="w-5">
                  <input
                    className="checkMark"
                    type="checkbox"
                    name="acceptCheckbox"
                    {...register("acceptCheckbox")}
                  ></input>
                </div>
                <div className="w-95 pl-4">
                  <div className="lh-1-25 fs-16">
                    I agree to Amnet Digital sending me relevant invitations,
                    product offers, blogs, news and other marketing information.
                  </div>
                  <br />
                  <div className="fs-16 pt-2">
                    By submitting the form, you agree to us saving and
                    processing your information according to our
                    <span className="fs-10 d-line-block">
                      <Link
                        to={`/Privacypolicy`}
                        className="fs-16 d-line-block pl-1"
                        target="_blank"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <p className="fs-13 text-danger fw-bold-400">
                {errors.acceptCheckbox?.message}
              </p>
              <div className="row ml-0 mr-0 mt-3-rem mb-3-rem">
                <div className="col-lg-12 w-100 text-center">
                  <button
                    className="submit-button-green cr-pointer w-100"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body className="p-3">
            <p className="text-black fw-bold-500 fs-18 text-center lh-26 my-3">
              Thank you for applying this job!
            </p>
            <p className="text-black fw-bold-500 fs-18 text-center lh-26 my-3">
              <img alt="checkmark" src={correct} className="img-35" />
            </p>
            <p className="text-black fw-bold-500 fs-18 text-center lh-26 my-3">
              Your application has been submitted successfully.
            </p>
            <p className="text-black fw-bold-500 fs-14 text-center mb-0">
              Appreciate your interest in applying for the position. One of our
              hiring team members will get in touch with you if your profile
              suits the open role.
            </p>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ApplicationForm;
