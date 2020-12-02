import React from "react";
import AIServiceIMG from "../../images/HomePage/home-vr.jpg";
import AIIcon from "../../images/HomePage/ai-icon.png";

function SolutionsServices(){
    return (
        <>
            {/* <!--HOMEPAGE AI PRODUCT, SOLUTIONS AND SERVICES--> */}
    
            <div className ="new-home-about-details new-all-margin" id="details">
                <h1>AI-Enabled Products, Solutions & Services</h1>
                <p>Amnet Digital is your innovation catalyst. We develop products and solutions that enable you to realize the true 
                    potential of AI. We offer you a comprehensive portfolio of services – innovation lab, consulting, 
                    research & execution, to deliver the solutions that matter to you and your customers.
                </p>
            </div>

            <div className="solutions-services new-all-margin" id ="details">
        <div className="row">

            <div className="col-xl-6 col-lg-12 col-sm-12 solutions-services-details-img">
            <img loading="lazy" className="img-fluid" src={AIServiceIMG} alt="Solutions and Service" />
                {/* <img className="img-fluid" src={AIServiceIMG} srcSet={`${AboutIcon} 300w, ${AIIcon} 768w, ${OurServiceBG} 1280w, ${IndustryIMG} 3200w`} alt="Solutions and Service" /> */}
            </div>

            <div className="col-xl-6 col-lg-12 col-sm-12 solutions-services-details">
                <ul className="new-solutions-services-lists">

                                <li className="ai-list">
                                    {/* <span>
                                        <img loading="lazy" src={AIIcon} className="img-fluid ai-icon" alt="icon"></img>
                                    </span>
                                    User-centered & research backed design Robust & Scalable Architecture and Infrastructure design Advanced Analytics, Data Engineering & Visualization practices */}
                                    <div className="AISolutionIcon">
                                    <span>
                                        <img loading="lazy" src={AIIcon} className="img-fluid ai-icon" alt="icon"></img>
                                    </span>
                                    </div>
                                    <div className="AISolutionInfoText">
                                    
                                        <p> User-centered & research backed design</p>
                        
                                    </div>
                                    
                                </li>
                                
                                <li className="ai-list">
                                <div className="AISolutionIcon">
                                    <span>
                                        <img loading="lazy" src={AIIcon} className="img-fluid ai-icon" alt="icon"></img>
                                    </span>
                                </div>
                                    <div className="AISolutionInfo">
                                    
                                        <p>Advanced Automation & Artificial Intelligence techniques</p>
                                   
                                    </div>
                                </li>
                                <li className="ai-list">
                                <div className="AISolutionIcon">
                                    <span>
                                        <img loading="lazy" src={AIIcon} className="img-fluid ai-icon" alt="icon"></img>
                                    </span>
                                </div>
                                    <div className="AISolutionInfo">
                                    
                                        <p>Robust & Scalable Architecture and Infrastructure design</p>
                        
                                    </div>
                                </li>
                                <li className="ai-list">
                                <div className="AISolutionIcon">
                                    <span>
                                        <img loading="lazy" src={AIIcon} className="img-fluid ai-icon" alt="icon"></img>
                                    </span>
                                </div>
                                    <div className="AISolutionInfo">
                                    
                                        <p>Advanced Analytics, Data Engineering & Visualization practices</p>
                        
                                    </div>
                                </li>
                            
                </ul>
            </div>
        </div>
    </div>
        </>
    )
}

export default SolutionsServices;