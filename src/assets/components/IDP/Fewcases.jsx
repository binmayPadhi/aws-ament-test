import React from "react";
import "../../CSS/Fewcases.css";
import invoiceimg from "../../images/Service-Page/invoice.svg";
import shippingimg from "../../images/Service-Page/shipping_documents.svg";
import purchaseimg from "../../images/Service-Page/purchase_order.svg";
import insuranceimg from "../../images/Service-Page/insurance_cliams.svg";
import GowayData from "../../Data/Services-Data/GowayData";

const Fewcases = () => {
    return (
        <>
            <div className="w-90 mx-auto">
                <div className="row above-spacings">
                    <h1 className="Resource-styling below-spacings">Few Use Cases</h1>
                {GowayData.FewcaseData.map((list) => {
                  return(  
                  <>
                   <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card-cases-flip">
                            <div className="thefront">
                                <div className="d-flex flex-row justify-content-center">
                                <img src={list.image} className="invoice-image"/>
                                </div>
                                <p className="fs-20 fw-bold-600 above-spacings text-green d-flex flex-row justify-content-center pl-1">{list.heading}</p>
                            </div>
                            <div className="theback">
                                <div className="d-flex flex-row">
                                    <img src={list.image} className="svg-styling" />
                                    <h1 className="text-green-invoice mt-2">{list.heading}</h1>
                                </div>
                                <p className="fs-16 mt-3 text-black justifying-text">{list.content}</p>
                            </div>
                        </div>
                    </div>
                    </>
                  )
                })}
                </div>
            </div>

        </>
    )
}

export default Fewcases;