import React from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef } from "react";

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
        "email is not valid"
      )
      .required("email is required"),
    phoneNumber: yup
      .string()
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        "phonenumber is not valid"
      )
      .required("phonenumber is required"),
    acceptCheckbox: yup.string().required("Please check the checkbox"),
    cName: yup
      .string()
      .matches(/^[a-zA-Z ]*$/, "Company Name is not valid")
      .required("Company is required"),
    selecteditem: yup.string().required("Please select the option"),
  })
  .required();

const Contactform = () => {
  const dropdownlist = [
    {
      id: 30,
      name: "",
      link: "",
    },
    {
      id: 31,
      name: "AI/ML",
      link: "aiml",
    },
    {
      id: 32,
      name: "Advanced Analytics",
      link: "",
    },
    {
      id: 33,
      name: "Data Engineering",
      link: "",
    },
    {
      id: 34,
      name: "Data Management",
      link: "",
    },
    {
      id: 35,
      name: "Cloud Services",
      link: "",
    },
    {
      id: 36,
      name: "User Experience",
      link: "",
    },
    {
      id: 37,
      name: "Strategy & Consulting",
      link: "",
    },
    {
      id: 38,
      name: "Data Annotation",
      link: "",
    },
    {
      id: 39,
      name: "Quality Assurance",
      link: "",
    },
  ];
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
        "service_h4akrmg",
        "template_h0xkqot",
        formDetails.current,
        "yz7dQlM6o3Rz3cnB8"
      )
      .then(
        console.log("mail sent"),
        localStorage.setItem("cookie", 4),
        reset(),
        (error) => {
          console.log(error.text);
        }
      );
  };

  const formDetails = useRef();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12 my-auto">
            <h1 className="fw-bold-700 fs-35">Let's get started</h1>
            <h5 className=" clr-black  fw-bold-700 fs-16 mt-4">
              Are you ready to become a digital-first <br /> organization?
            </h5>
            <p className=" clr-black  mt-5 fs-16 fw-bold-400">
              We are experts in solving complex business technology challenges
              in today's unprecedented situations, leveraging our digital
              frameworks and technology accelerators.
            </p>
            <p className=" clr-black fs-16 fw-bold-400">
              You can request any information about our digital products,
              services, and solutions by filling out this form. We will get in
              touch with you within 48 business hours.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 mt-3">
            <form ref={formDetails} onSubmit={handleSubmit(submit)}>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <label className="font-form">
                    First Name<span className="star-green">*</span>
                    <input
                      className="w-100 pl-1"
                      type="text"
                      name="fNmae"
                      {...register("fName")}
                    />
                  </label>
                  <p className="fs-13 text-danger fw-bold-400">
                    {errors.fName?.message}
                  </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <label className="font-form">
                    Last Name<span className="star-green">*</span>
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
              <div className="row mt-1">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <label className="font-form">
                    Business Email<span className="star-green">*</span>
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
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <label className="font-form">Phone Number*</label>
                  <p className="email_field mt-1">
                    <input
                      type="text"
                      className="pl-1"
                      name="phoneNumber"
                      {...register("phoneNumber")}
                    />
                  </p>
                  <p className="fs-13 text-danger fw-bold-400">
                    {errors.phoneNumber?.message}
                  </p>
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <label className="font-form">
                    Company<span className="star-green">*</span>
                  </label>
                  <p className="email_field">
                    <input
                      type="text"
                      className="pl-1 form-control form-control-lg"
                      name="cName"
                      {...register("cName")}
                    />
                  </p>
                  <p className="fs-13 text-danger fw-bold-400">
                    {errors.cName?.message}
                  </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <label className="font-form">
                    Job Title<span className="star-green">*</span>
                  </label>
                  <p className="email_field mt-1">
                    <input
                      type="text"
                      name="jobTitle"
                      className="pl-1 form-control form-control-lg "
                      {...register("jobTitle")}
                    />
                  </p>
                  <p className="fs-13 text-danger fw-bold-400">
                    {errors.jobTitle?.message}
                  </p>
                </div>
              </div>
              <div className="row ml-0 mr-0 mt-1">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pl-0 pr-0">
                  <label className="font-form">
                    Interested in<span className="star-green">*</span>
                  </label>
                  <p>
                    <select
                      className="form-select text-areainput select-height h-50px"
                      aria-label="Default select example"
                      isSearchable="true"
                      name="selecteditem"
                      {...register("selecteditem")}
                    >
                      {dropdownlist.map((list) => {
                        return (
                          <option key={list.id} value={list.name}>
                            {list.name}
                          </option>
                        );
                      })}
                    </select>
                  </p>
                  <p className="fs-13 text-danger fw-bold-400">
                    {errors.selecteditem?.message}
                  </p>
                </div>
              </div>
              <div className="row ml-0 mr-0 mt-1">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pl-0 pr-0">
                  <label className="font-form">Message</label>
                  <textarea
                    name="message"
                    rows="10"
                    className="text-areainput"
                    {...register("message")}
                  ></textarea>
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
                  <p className="fs-13 text-danger fw-bold-400">
                    {errors.acceptCheckbox?.message}
                  </p>
                </div>
                <div className="w-95 pl-4">
                  <div className="lh-1-25 fs-10">
                    I agree to Amnet Digital sending me relevant invitations,
                    product offers, blogs, news, and other marketing
                    information.
                  </div>
                </div>
              </div>
              <div className="row ml-3 mr-0 mt-2-rem">
                <div className="fs-10 pl-5">
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
                </div>
              </div>
              <div className="row ml-0 mr-0 mt-3-rem mb-3-rem">
                <div className="col-12 text-center">
                  <button
                    className="submit-button cr-pointer w-50"
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

export default Contactform;
