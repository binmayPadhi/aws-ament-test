import React from "react";
import blogImg from "../../images/Resources-page/blog-amnet.jpg";
import Blog from "../../Data/Resources-Data/Blog";


const Resources = () => {
    return (
        <>

            {/* Heading Name */}
            <div className="new-home-about-details new-all-margin margin-resources-top" id="details">
                <h1>How to stay compliant with SOX requirements on Microsoft Dynamics 365</h1>
            </div>

            <div className="about-us-page-details new-all-margin">
                <div className="row about-us-page-row ml-0 mr-0">
                    <div className="col-12 about-us-details p-0">
                        <img loading="lazy" className="img-fluid about-us-img-left " src={blogImg} alt="blog" />
                    </div>
                </div>
            </div>


            <div className="about-us-page-details new-all-margin" >

                <div className="row about-us-page-row ml-0 mr-0">

                    {Blog.map(list => {
                        return (
                            <div className="col-12 about-us-details p-0" key={list.id}>
                                <div className="about-us-desc">
                                    <h2>{list.title}</h2>
                                    <p>{list.description}</p>
                                    <p>{list.description1}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>








            {/* NEW HOMEPAGE CAREER SECTION */}

            <div className="new-career-section" style={{ width: "auto", height: "auto", backgroundColor: "#19AF8F", padding: "30px", marginTop: "60px" }}>

                <div className="new-career-section new-all-margin">

                    <div className="career-section-row row g-0">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 career-caption">
                            <h5>WORK WITH US</h5>
                            <h2>Let's Grow Together</h2>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 career-details">
                            <p>We are on a mission to solve complex problems and provide solutions
                                that make a difference, Come work with us.
                            </p>
                            <a href="/contactus">
                                <button type="button" className="btn btn-default contact-us-button" >Contact Us</button>
                            </a>
                            <a href="/careers">
                                <button type="button" className="btn btn-default careers-button">Careers</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resources