import React from "react";
const Amnetfamily = () => {
    return (
        <>
            <div className="gradient-box">
                <div className="w-90 mx-auto">
                    <div className="row d-flex">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <h1 className="fs-35 fw-bold-600 text-white text-left">Join Our Amnet Family</h1>
                            <p className="fs-16 fw-bold-400 text-white text-left">Are you excited to work with industry leading technology leaders to elevate your career to the next level?</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 my-auto">
                            <button className="fs-18 fw-bold-700 mail-button" onClick={() => window.location = 'mailto:careers@amnetdigital.com'}>
                                Email My Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Amnetfamily;