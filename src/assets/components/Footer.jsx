import React from "react";
import amnetLogo from "../images/HomePage/amnetdigitalblack.png";
import submit_icon from "../images/HomePage/Send.png";
import linkdein from "../images/HomePage/Linkedin.png";
import twitter from "../images/HomePage/Twitter.png";
import facebook from "../images/HomePage/Facebook.png";
import youtube from "../images/HomePage/Youtube.png";
import instagram from "../images/HomePage/Instagram.png";
import { Link } from "react-router-dom";
import top from "../images/HomePage/Icon ionic-ios-arrow-down.png";

function Footer() {
  const footerlist = [
    {
      id: 1,
      headingName: "COMPANY",
      sublist: [
        {
          id: "11",
          name: "About Us",
          link: "",
        },
        {
          id: "12",
          name: "Careers",
          link: "",
        },
        {
          id: "13",
          name: "Our Partners",
          link: "",
        },
        {
          id: "14",
          name: "Leadership Team",
          link: "",
        },
      ],
    },
    {
      id: 2,
      headingName: "PRODUCTS",
      sublist: [
        {
          id: 21,
          name: "Swift Insights",
          link: "",
        },
        {
          id: 22,
          name: "Swift Data",
          link: "",
        },
      ],
    },
    {
      id: 3,
      headingName: "SERVICES",
      sublist: [
        {
          id: 31,
          name: "AI/ML",
          link: "",
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
      ],
    },
    {
      id: 4,
      headingName: "INDUSTRIES",
      sublist: [
        {
          id: 41,
          name: " Retail & Ecommerce",
          link: "",
        },
        {
          id: 42,
          name: "Inforamtion Management",
          link: "",
        },
        {
          id: 43,
          name: "Healthcare",
          link: "",
        },
        {
          id: 44,
          name: "HRMS",
          link: "",
        },
        {
          id: 45,
          name: "Financial Services",
          link: "",
        },
      ],
    },
    {
      id: 5,
      headingName: "RESOURCES",
      sublist: [
        {
          id: 51,
          name: "Blogs",
          link: "",
        },
        {
          id: 52,
          name: "Webinars",
          link: "",
        },
        {
          id: 53,
          name: "Case Studies",
          link: "",
        },
        {
          id: 54,
          name: "news",
          link: "",
        },
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
      link: "https://www.youtube.com/amnetdigital",
    },
    {
      id: 5,
      image: instagram,
      link: "https://www.instagram.com/amnetdigital",
    },
  ];
  const topscroll = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {/* <!-- FOOTER SECTION --> */}
      <div className="container-fluid footer">
        <div className="center-88">
          <p className="pt-4 text-center w-100">
            <img className="img-fluid logo w-25" src={amnetLogo} alt="logo" />
          </p>
          <p className="pb-4 para_footer text-center w-100">
            Subscribe for latest AI & Analytics News & Trends!
          </p>
          <p className="pb-4 input_field text-center w-100">
            <input placeholder="Enter your business email" />
            <span className="sub-icon">
              <img src={submit_icon} />
            </span>
          </p>
          <p className="row mx-0 mt-3 mb-3">
            {footerlist.map((list) => {
              return (
                <p
                  className="col-md-2 col-lg-2 col-sm-12 col-xs-12"
                  key={list.id}
                >
                  <h5 className="list-heading">{list.headingName}</h5>
                  <ul className="pt-3">
                    {list.sublist.map((val) => {
                      return (
                        <li key={val.id} className="listName">
                          {val.name}
                        </li>
                      );
                    })}
                  </ul>
                </p>
              );
            })}
          </p>
        </div>
      </div>
      <div className="container-fluid bg-white">
        <div className="center-88">
          <div className="row mb-5">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-3 text-left">
              <p className="listName">info@amnetdigital.com</p>
              <p className="listName">098765 12345</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3 text-center">
              <p className="listName">
                660 South Bagdad Road #320, Leander, TX 78641 Austin, Texas
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-3 text-left">
              <p className="listName px-3">Follow Us</p>
              {icons.map((listedicon) => {
                return (
                  <a
                    key={listedicon.id}
                    href={listedicon.link}
                    target="_blank"
                    className="p-3"
                    style={{ cursor: "pointer" }}
                  >
                    <img src={listedicon.image} />
                  </a>
                );
              })}
            </div>
          </div>
          <p className="footer-border"></p>
          <div className="row mb-5">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-3 text-left">
              <p className="listName">© 2023 Amnet Digital</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3 text-center">
              <span className="px-3 listName">Sitemap</span>
              <span className="px-3 listName">Legal</span>
              <span className="px-3 listName">Privacy</span>
              <span className="px-3 listName"> Terms of Use</span>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-3 text-right">
              <div className="px-3 listName" onClick={(e) => topscroll(e)}>
                Top
                <img
                  src={top}
                  className="img-top"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
