import React, { useState } from "react";
import emailjs from "emailjs-com";
import OurLocation from "../components/OurLocation";
import "../CSS/ContactUs.css";
import Contactform from "./ContactUs/Contactform";
import Gotocontact from "./Gotocontact";
import global from "../images/Contact-Us-Page/global.png";
import contactusbg from "../images/Contact-Us-Page/contactusbanner.svg";

function TestContactUs() {
  const [userDetails, setUserDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setUserDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitDetails(e) {
    e.preventDefault();
    const aplhabetPattern = /^[a-z]+$/i;
    const emailpattern =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (
      aplhabetPattern.test(userDetails.fName) &&
      aplhabetPattern.test(userDetails.lName) &&
      emailpattern.test(userDetails.email)
    ) {
      alert(
        "Your message has been recevied. We'll get in touch with you shortly!"
      );
      return emailjs
        .sendForm(
          "gmail",
          "template_opai50d",
          e.target,
          "user_gk2s5L3y9LhSSq66o6aWz"
        )
        .then(
          setUserDetails({
            fName: "",
            lName: "",
            email: "",
            message: "",
          }),
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert(
        "You have entered an invalid email or name, Please use only alphabets for name and enter valid email!"
      );
      return false;
    }
  }

  // setUserDetails({
  //     fName : "",
  //     lName : "",
  //     email : "",
  //     message : ""
  // }));

  return (
    <>
      <div
        className="sub-service-intro position-realtive"
        style={{
          backgroundImage: `url(${contactusbg})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "500px",
        }}
      >
        <div className="container">
          <div className="text-center-img w-100">
            <div className="w-90 mx-auto">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h2
                    className="fw-bold-700 text-white  fs-54"
                    data-text="contactus"
                  >
                    Contact Us
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="bg-footer pt-5 pb-5">
          <Contactform />
        </div>
      </div>

      <div className="mt-6">
        <h1 className="section-title text-center mb-4">Global Footprint</h1>
        <div>
          <img src={global} className="gload-title" />
        </div>
      </div>

      <div className="contact-us-intro container-fluid"></div>
      {/* <!-- CONTACT US PAGE CONTACT FORM --> */}

      {/* <!-- NEW ABOUT US PAGE LOCATION SECTION --> */}

      <OurLocation />

      <div className="mb-5 mt-5">
        <Gotocontact componentFrom="contactus" />
      </div>
    </>
  );
}

export default TestContactUs;
