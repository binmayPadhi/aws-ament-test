import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../../CSS/webinar.css";
import { Link } from "react-router-dom";
import webniarClose from "../../images/Webinar-images/close_img.jpg";

const Webinarmodal = ({ isShow, closeModal, isCount }) => {
  const storeData = () => {
    localStorage.setItem("cookie", isCount);
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
              Reshaping the Retail Industry through Advanced Analytics and AI
            </p>
            <p className="fs-16 font-weight-bold clr-black mt-1">
              11:30 AM - 12:15 PM EST, Thursday, November 17, 2022
            </p>
            <div className="mt-3-rem  w-100">
              <p className="row">
                <div className="col-md-3 col-lg-3 col-sm-2 col-xs-2"></div>
                <div className="col-md-6 col-lg-6 col-sm-8 col-xs-8">
                  <Link
                    onClick={storeData}
                    to={`/reshaping-the-retail-industry-through-AI`}
                    className="fs-10 d-line-block pl-1 link-decoration-none"
                    target="_blank"
                  >
                    <span className="d-inline-block w-100 submit-button clr-orange cr-pointer px-4">
                      Register now
                    </span>
                  </Link>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-2 col-xs-2"></div>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Webinarmodal;
