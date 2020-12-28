import React from "react";
import OurServicesData from "../../Data/Homepage-Data/OurServicesData";
import OurServiceBG from "../../images/HomePage/our-services/our-services-bg.jpg";
import DataAnnotationDropdownIcon from "../../images/HomePage/our-services/data-annotation-icon.png";

// import {BrowserRouter as Router, Link} from "react-router-dom";

function OurServices (){
    return (
        <>
                {/* <!-- OUR SERVICES SECTION --> */}

                <div className="our-services" style={{backgroundImage:`url(${OurServiceBG})`,backgroundAttachment:"scroll",height:"auto",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
    <h1 className="section-title text-center">OUR SERVICES</h1>
    <hr></hr>
    <div className="new-all-margin">
    <div className="row">
    {OurServicesData.map(data => {
        return(
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 new-our-service-column" key={data.id}>
                    <div className="new-our-service-card">
                    <div className="card-img-top">
                        <img loading="lazy" src={data.serviceIcon} className="img-fluid text-center" alt="icon" />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">{data.serviceTitle}</h3>
                        <p className ="card-text">{data.serviceDesc}</p>
                        <a href={`/${data.id}`} className="learn-more-services">{`Learn More ->`}</a>
                    </div>
                </div>
                    </div>
        )
    })}

{/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12"></div> */}

    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mx-auto new-our-service-column">
                    <div className="new-our-service-card">
                    <div className="card-img-top">
                        <img loading="lazy" src={DataAnnotationDropdownIcon} className="img-fluid text-center Tilt-inner" alt="icon" />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">Data Annotation</h3>
                        <p className ="card-text">From complex documents to vital images & speech, precisely tag the data you need to 
                            train your models and explore a wide variety of business opportunities.
                        </p>
                        <a href="/data-annotation" className="learn-more-services">{`Learn More ->`}</a>
                    </div>
                </div>
                    </div>
                    {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12"></div> */}
</div>
    </div>
</div>
        </>
    )
}

export default OurServices;