import React from "react";

function Footer() {
  return (
    <>
      {/* <!-- FOOTER SECTION --> */}
      <div className="container-fluid footer">
        <div className="all-margin row  p-5">
          <div className="col-lg-6 col-sm-12">
            <h2>Who We Are</h2>
            <p>
              <a
                href="https://drive.google.com/uc?export=edit&id=18Z-3VS3AH13BoDqpVAhIY1SoIbsLXmXT"
                target="_blank"
                rel="noopener noreferrer"
                data-toggle="tooltip"
                title="ISO Certificate"
              >
                Amnet Digital
              </a>{" "}
              is a fast growing AI/ML based Product Development Company
              headquartered in Austin, Texas with ODCs in India.
            </p>
            <a
              href=" https://www.linkedin.com/company/amnet-digital"
              className="fa fa-linkedin"
              target="_blank"
            ></a>
            <a
              href=" https://www.facebook.com/amnetdigital"
              className="fa fa-facebook"
              target="_blank"
            ></a>
            <a
              href=" https://twitter.com/DigitalAmnet"
              className="fa fa-twitter"
              target="_blank"
            ></a>
            <a
              href="https://www.instagram.com/amnetdigital"
              className="fa fa-instagram"
              target="_blank"
            ></a>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 ">
            <ul className="useful-links">
              <h3>References</h3>
              <li>
                <a href="/aboutUs">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/caseStudies">Case Studies</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/blog-seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry">
                  Resources
                </a>
              </li>
              <li>
                <a href="/contactus">Contact Us</a>
              </li>
            </ul>
          </div>
          <hr></hr>
          <div className="amnet-email">
            <p className="amnet-email">info@amnetdigital.com</p>
          </div>
          <div className="amnet-copyright">
            <p>© 2022 Amnet Digital, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
