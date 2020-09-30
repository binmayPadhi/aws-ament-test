import React from "react";
import SolutionsServicesData from "../../Data/Homepage-Data/SolutionsServicesData";
import SolutionsServicesIMG from "../../images/HomePage/amnet-solutions-services.jpg"

function SolutionsServices(){
    return (
        <>
            {/* <!--HOMEPAGE AI PRODUCT, SOLUTIONS AND SERVICES--> */}
    
    <div className="solutions-services all-margin" id ="details">
        <div className="row">
            <div className="col-xl-6 col-lg-12 col-sm-12 solutions-services-details">
                <h6>MAKE A DIFFERENCE</h6>
                <h2>AI-Enabled Products, Solutions & Services</h2>
                <p>Amnet Digital is your innovation catalyst. We develop products and solutions that enable you to realize the 
                    true potential of AI. We offer you a comprehensive portfolio of services – innovation lab, consulting, 
                    research & execution, to deliver the solutions that matter to you and your customers.
                </p>
                <ul className="solutions-services-lists">

                    {
                        SolutionsServicesData.map(list => {
                            return (
                                <li key = {list.id}>
                                    <span>
                                        <img src= {list.listIconSrc} className="img-fluid list-icon" alt = "list-icon"/>
                                    </span>
                                    {list.listDesc}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="col-xl-6 col-lg-12 col-sm-12 solutions-services-details-img">
                <img className="img-fluid" src={SolutionsServicesIMG} alt="Solutions and Service" />
            </div>
        </div>
    </div>
        </>
    )
}

export default SolutionsServices;