import React, { useState } from "react";
import { useRef } from "react";
import amnetLogo from "../images/HomePage/amnetdigitalblack.png";
import linkdein from "../images/HomePage/Linkedin.png";
import twitter from "../images/HomePage/Twitter.png";
import facebook from "../images/HomePage/Facebook.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import youtube from "../images/HomePage/Youtube.png";
import instagram from "../images/HomePage/Instagram.png";
import { Link } from "react-router-dom";
import top from "../images/HomePage/Icon ionic-ios-arrow-down.png";
import "../CSS/Footer.css";
import Modal from "react-bootstrap/Modal";
import MediaQuery from "react-responsive";
import emailjs from "emailjs-com";
import star from "../images/HomePage/star.png";
import send from "../images/HomePage/Sendicon.png";
import cross from "../images/HomePage/close-icon.png";
import { useLocation } from "react-router-dom";

function Footer() {
  const emailDetails = useRef();
  const { pathname } = useLocation();
  const footerlist = [
    {
      id: 1,
      headingName: "COMPANY",
      sublist: [
        {
          id: "11",
          name: "About Us",
          link: "/aboutus",
          target: "_balnk",
        },
        {
          id: "12",
          name: "Careers",
          link: "/careers",
          target: "_balnk",
        },
        // {
        //   id: "13",
        //   name: "",
        //   link: "",
        //   target: "_balnk",
        // },
        // {
        //   id: "14",
        //   name: "",
        //   link: "",
        //   target: "_balnk",
        // },
      ],
    },
    {
      id: 2,
      headingName: "ACCELERATORS",
      sublist: [
        {
          id: 21,
          name: "Swift Insights",
          link: "https://swiftinsights.ai/",
          target: "_balnk",
        },
        // {
        //   id: 22,
        //   name: "Swift Data",
        //   link: "",
        //   target: "_balnk",
        //   tooltip: "Coming Soon...",
        // },
        // {
        //   id: 23,
        //   name: "Intelligent Document Processor",
        //   link: "",
        //   target: "_blank",

        // }
      ],
    },
    {
      id: 3,
      headingName: "SERVICES",
      sublist: [
        {
          id: 31,
          name: "AI/ML",
          link: "/services/aiml",
          // target: "_balnk",
        },
        {
          id: 32,
          name: "Advanced Analytics",
          link: "/services/advancedanalytics",
          target: "_balnk",
        },
        {
          id: 33,
          name: "Data Engineering",
          link: "/services/dataengineering",
          target: "_balnk",
        },
        {
          id: 34,
          name: "Data Management",
          link: "/services/datamanagement",
          target: "_balnk",
        },
        {
          id: 35,
          name: "Cloud Services",
          link: "/services/cloudservices",
          target: "_balnk",
        },
        {
          id: 36,
          name: "User Experience",
          link: "/services/userexperinces",
          target: "_balnk",
        },
        {
          id: 37,
          name: "Strategy & Consulting",
          link: "/services/strategyconsulting",
          target: "_balnk",
        },
        {
          id: 38,
          name: "Data Annotation",
          link: "/services/dataannotation",
          target: "_balnk",
        },
        {
          id: 39,
          name: "Quality Assurance",
          link: "/services/qualityassurance",
          target: "_balnk",
        },
      ],
    },
    // {
    //   id: 4,
    //   headingName: "INDUSTRIES",
    //   sublist: [
    //     {
    //       id: 41,
    //       name: " Retail & Ecommerce",
    //       link: "",
    //       target: "_balnk",
    //     },
    //     {
    //       id: 42,
    //       name: "Information Management",
    //       link: "",
    //       target: "_balnk",
    //     },
    //     {
    //       id: 43,
    //       name: "Healthcare",
    //       link: "",
    //       target: "_balnk",
    //     },
    //     {
    //       id: 44,
    //       name: "HRMS",
    //       link: "",
    //       target: "_balnk",
    //     },
    //     {
    //       id: 45,
    //       name: "Financial Services",
    //       link: "",
    //       target: "_balnk",
    //     },
    //   ],
    // },
    {
      id: 4,
      headingName: "RESOURCES",
      sublist: [
        {
          id: 51,
          name: "Blogs",
          link: "/blogs",
          target: "_balnk",
        },
        {
          id: 52,
          name: "Webinars",
          link: "/webinars/reshaping-the-retail-industry-through-AI",
          target: "_balnk",
        },
        {
          id: 53,
          name: "Case Studies",
          link: "/casestudies",
          target: "_balnk",
        },
        // {
        //   id: 54,
        //   name: "",
        //   link: "",
        //   target: "_balnk",
        // },
      ],
    },
  ];

  const icons = [
    {
      id: 1,
      image: linkdein,
      link: "https://www.linkedin.com/company/amnet-digital",
    },
    {
      id: 2,
      image: twitter,
      link: "https://twitter.com/DigitalAmnet",
    },
    {
      id: 3,
      image: facebook,
      link: "https://www.facebook.com/amnetdigital",
    },
    {
      id: 4,
      image: youtube,
      link: "https://www.youtube.com/@amnetdigital",
    },
    {
      id: 5,
      image: instagram,
      link: "https://www.instagram.com/amnetdigital",
    },
  ];
  const closeModal = () => {
    setShow(false);
  };

  const handleScrolltoTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "email is not valid"
      )
      .required("email is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const submit = (data) => {
    return emailjs
      .sendForm(
        "service_h4akrmg",
        "template_h0xkqot",
        emailDetails.current,
        "yz7dQlM6o3Rz3cnB8"
      )
      .then(console.log("mail sent"), reset(), handleShow(), (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      {/* <!-- FOOTER SECTION --> */}
      <div className="container-fluid footer pt-5 pb-b-5">
        <div className="center-88">
          <p className="pt-4 text-center w-100">
            <img className="img-fluid logo" src={amnetLogo} alt="logo" />
          </p>
          <p className="pb-4 para_footer text-center fs-13 font-weight-bold w-100">
            Subscribe for latest AI & Analytics Insights
          </p>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-12"></div>
            <div className="col-md-6 col-lg-6 col-sm-12 w-100">
              <form ref={emailDetails} onSubmit={handleSubmit(submit)}>
                <p className="pb-4 input_field w-100">
                  <input
                    type="email"
                    className="text-width w-100 position-relative border-0"
                    placeholder="Enter your business email"
                    name="email"
                    {...register("email")}
                  />
                  <button
                    className="position-absolute icon-footer cr-pointer bgc-white"
                    type="submit"
                  >
                    <img src={send} width="25" />
                  </button>
                </p>
              </form>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12"></div>
          </div>
        </div>
        <div className=" mx-auto mb-5">
          <p className="row center-70 mt-3 mb-3">
            <div className="col-sm-12 col-xs-12"></div>
            {footerlist.map((list) => {
              return (
                <p
                  className="col-md-3 col-lg-3 col-sm-12 col-xs-12 text-md-left text-lg-left text-sm-left"
                  key={list.id}
                >
                  <h5 className="list-heading heading-padding">
                    {list.headingName}
                  </h5>
                  <ul className="pt-3 heading-padding">
                    {list.sublist.map((val) => {
                      return (
                        <li key={val.id}>
                          <Link
                            to={val.link}
                            target={
                              val.id !== 21 && val.id !== 52 ? "" : "_blank"
                            }
                            className="desName cr-pointer text-decoration-none fs-13 text-black"
                          >
                            {val.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </p>
              );
            })}
            <div className="col-sm-12 col-xs-12"></div>
          </p>
        </div>
      </div>
      <div className="container-fluid bg-white mt-5">
        <div className="center-88">
          <div className="row mb-5">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-3 text-left">
              <p className="listName">info@amnetdigital.com</p>
              <p className="listName">098765 12345</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3 text-md-center text-lg-center text-sm-left">
              <p className="listName text-md-center">
                660 South Bagdad Road #320, Leander, TX 78641 Austin, Texas
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-3 ">
              <div className="text-md-left text-lg-right text-sm-left ">
                <p className="listName">Follow Us</p>
                {icons.map((listedicon) => {
                  return (
                    <a
                      key={listedicon.id}
                      href={listedicon.link}
                      target="_blank"
                      className="p-1 p-lg-2"
                      style={{ cursor: "pointer" }}
                    >
                      <img src={listedicon.image} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <p className="footer-border"></p>
          <div className="row mb-5">
            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 mt-3 text-md-left text-lg-left text-sm-left">
              <p className="listName w-100">© 2023 Amnet Digital</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3 text-md-center text-lg-center text-sm-left">
              <MediaQuery minWidth={200} maxWidth={759}>
                <p className="listName w-sm-100">
                  <a href="/legalresources" className="fs-13 text-black">
                    Legal Resources
                  </a>
                </p>
                <p className="listName w-sm-100">
                  <a href="/Privacypolicy" className="fs-13 text-black">
                    Privacy Policy
                  </a>
                </p>
                <p className="listName w-sm-100">
                  <a href="/termsandconditions" className="fs-13 text-black">
                    Terms of Use
                  </a>
                </p>
              </MediaQuery>
              <MediaQuery minWidth={760}>
                <span className="px-2 listName w-sm-100">
                  <a href="/legalresources" className="fs-13 text-black">
                    Legal Resources
                  </a>
                </span>
                <span className="px-2 listName w-sm-100">
                  <a href="/Privacypolicy" className="fs-13 text-black">
                    Privacy Policy
                  </a>
                </span>
                <span className="px-2 listName w-sm-100">
                  <a href="/termsandconditions" className="fs-13 text-black">
                    Terms of Use
                  </a>
                </span>
              </MediaQuery>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-12 col-xs-12 mt-3 text-md-right text-lg-right text-sm-left">
              <MediaQuery minWidth={760}>
                <div
                  className="px-2 listName "
                  onClick={(e) => handleScrolltoTop(e)}
                >
                  Top
                  <img
                    src={top}
                    className="img-top ml-3"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </MediaQuery>
              <MediaQuery minWidth={280} maxWidth={759}>
                <a className="anchor_styles achorhover" href={pathname}>
                  <div className="px-2 listName ">
                    Top
                    <img
                      src={top}
                      className="img-top ml-3"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </a>
              </MediaQuery>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={closeModal} centered>
        <Modal.Body className="box-shadow-popup">
          <p className="text-black fw-bold-500 fs-18 text-right lh-26 my-3">
            <img
              alt="crossmark"
              src={cross}
              className="img-25 pr-3 cr-pointer"
              onClick={closeModal}
            />
          </p>
          <p className="text-black fw-bold-500 fs-18 text-center lh-26 my-3">
            <img alt="checkmark" src={star} className="img-25" />
          </p>
          <div className="text-black thank-style text-center my-3">
            Thank you for subscribing!
          </div>
          <p className="text-black fw-bold-500 fs-12 text-center mb-5">
            You have successfully subscribed to our AI & Analytics Insights
            newsletter
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Footer;
