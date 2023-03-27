import React from "react";
import Driveimg from "../../images/HomePage/Drive.jpg";

const Driveservices = () => {
    return (
        <>
          <div
        className="container-fluid space-drive "
        style={{
          backgroundImage: `url(${Driveimg})`,
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
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
            <p className="w-100 d-flex justify-content-center mt-4">
              <p className="btn_drive">
                Request your FREE Data Engineering consultation
              </p>
            </p>
          </div>
        </div>
        </>
    )
}

export default Driveservices;