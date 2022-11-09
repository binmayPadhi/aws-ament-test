import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../../CSS/webinar.css";
import { Link } from "react-router-dom";
import webniarClose from "../../images/Webinar-images/close_img.png";

const Webinarmodal = ({ isShow, closeModal }) => {
  const storeData = () => {
    localStorage.setItem("cookie", true);
    closeModal(false);
  };
  return (
    <>
      <Modal show={isShow} className="modal-center">
        <Modal.Body>
          <div className="p-2">
            <p className="d-flex w-100 text right">
              <img
                loading="lazy"
                className="cr-pointer img-class"
                src={webniarClose}
                alt="webniar_close"
                onClick={() => {
                  closeModal(false);
                }}
              />
            </p>
            <p className="fs-16 font-weight-bold clr-black mt-2">
              Join our online webinar
            </p>
            <p className="fs-20 font-weight-bold clr-black mt-1">
              Reshaping the Retail Industry through Advanced Analytics and AI!
            </p>
            <p className="fs-16 font-weight-bold clr-black mt-1">
              11:30 AM - 12:15 PM EST, Thursday, November 17, 2022
            </p>
            <div className="mt-3-rem  w-100">
              <p className="w-50 mx-auto">
                <Link
                  onClick={storeData}
                  to={`/webinar-reshaping-the-retail-industry-through-AI`}
                  className="fs-10 d-line-block pl-1 link-decoration-none"
                  target="_blank"
                >
                  <span className="d-inline-block w-100 submit-button clr-orange cr-pointer px-4">
                    Register now
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Webinarmodal;
