import React from "react";

function AboutUsDetails(){
    return (
        <>
            {/* <!-- ABOUT US PAGE SECTION --> */}

{/* <!-- About us Page Section Header --> */}
<div className="about-us-page-header text-center mt-5" id="details">
    <h3 className="section-header">ROI MACHINE</h3>
    <h1 className="section-title mt-3">Who We Are</h1>
</div>

<div className="about-us-page-desc mt-5 all-margin">
    <p>We are an Artificial Intelligence Services and Solutions company that focuses on applying
        Machine Learning, Deep Learning and Advanced Analytics to solve the problems of businesses.
        <br />
        <br />
        Amnet Digital has highly experienced talent from world-leading institutions and technology companies.
        We have successfully applied AI Technologies in Enterprise Software, Retail, eCommerce and Healthcare.
        Our digital product engineering teams design and deploy enterprise solutions that are robust, secure and scalable!
    </p>
</div>


  {/* <!-- HOMEPAGE-QUOTE --> */}
  <div className="contaner-fluid homepage-quote p-3 about-us-page-quote" >
    <blockquote className="blockquote text-center all-margin">
        <p className="mb-0">We put your data at work using our tried-and-trusted approaches that yield maximum ROI in the shortest time possible!</p>
    </blockquote>
  </div>
        </>
    )
}

export default AboutUsDetails;