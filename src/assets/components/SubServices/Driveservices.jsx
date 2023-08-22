import React from "react";
import Driveimg from "../../images/Service-Page/Drive.jpg";
import { useNavigate } from "react-router-dom";

const Driveservices = () => {
  const history = useNavigate();
  const redirectTo = (e, name) => {
    
    e.preventDefault();
    if (name === "contact") {
      history(`/contactus`);
    } else {
      history(`/careers`);
    }
  };
    return (
        <>
          <div
        className="container-fluid space-drive"
        style={{
          backgroundImage: `url(${Driveimg})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      >
          <div className="p-4 text-center">
            <p className="drive">DRIVE REAL VALUE</p>
            <p className="drive_para mt-4">
              Start your digital journey today and become a forward-thinking
              organisation
            </p>
            <p className="drive_para fw-bold-600">Ready to go for growth?</p>
            <p className="w-100 d-flex justify-content-center mt-4">
              <p className="btn_drive cr-pointer"  onClick={(e) => redirectTo(e, "contact")}>
                Talk to our experts
              </p>
            </p>
          </div>
        </div>
        </>
    )
}

export default Driveservices;