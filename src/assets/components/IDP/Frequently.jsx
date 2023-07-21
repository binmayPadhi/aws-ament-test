import React, { useState } from 'react';

function Frequent() {

  return (
    <>
      <div className='row w-95 mx-auto above-spacings'>
        <h1 className='Resource-styling below-spacings'>Frequently Asked Question's</h1>
        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
          <div className='accordion' id="chapters">
            <div className='accordion-item mb-4 border-0'>
              <h1 className='accordion-header' id="heading-1">
                <button class="accordion-button bg-color-button pt-4 pb-4" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-1" aria-expaded="true"
                  aria-controls='chapter-1'>
                  What is Intelligent Document Processing and how does IDP work for your business?
                </button>
              </h1>
              <div id="chapter-1" class="accordion-collapse collapse" aria-labelledby='heading-1' data-bs-parent="#chapters">
                <div class="accordion-body fs-16 justifying-text">
                  Data is a goldmine. Intelligent document processing (IDP) solution is a workflow-led automation technology that scans, extracts, processes, and organises unstructured and semi-structured documents into meaningful information. IDP can process varieties of documents such as PDFs, handwritten papers, images, word docs, spreadsheets, emails, and more. IDP is the next-gen of basic automation, capable of extracting and processing data from different types of document formats.
                  IDP leverages AI technologies such as NLP, computer vision, machine learning (ML), deep learning, and advanced OCR to classify and categorise business-relevant information and validate the extracted data.
                </div>
              </div>
            </div>
            <div className='accordion-item mb-4 border-0'>
              <h1 className='accordion-header' id="heading-2">
                <button class="accordion-button bg-color-button pt-4 pb-4" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-2" aria-expaded="true"
                  aria-controls='chapter-2'>
                  Where is the IDP solution implemented? On-Prem or Cloud? What works best for my organisation?

                </button>
              </h1>
              <div id="chapter-2" class="accordion-collapse collapse" aria-labelledby='heading-2' data-bs-parent="#chapters">
                <div class="accordion-body fs-16 justifying-text">
                  A more mature and complex document will need a few servers either in the cloud or on-premise for better outcomes. If Data Privacy is your highest priority due to the data sensitivity, in this case, we strongly recommend an on-premise environment to safeguard your data locally with our enterprise-grade security. If cost is a criterion for your light-weight documents then we advise the cloud environment at an economical price with data security.


                </div>
              </div>
            </div>
            <div className='accordion-item mb-4 border-0'>
              <h1 className='accordion-header' id="heading-3">
                <button class="accordion-button bg-color-button pt-4 pb-5" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-3" aria-expaded="true"
                  aria-controls='chapter-3'>
                  What is Optical Character Recognition (OCR)?
                </button>
              </h1>
              <div id="chapter-3" class="accordion-collapse collapse" aria-labelledby='heading-3' data-bs-parent="#chapters">
                <div class="accordion-body fs-16 justifying-text">
                  Optical Character Recognition (OCR) technology is an efficient business process that transforms an image of complex text into a machine-readable format that free-up your resources and saves time & cost for positive business outcomes. Firstly, Intelligent OCR cleanses the image and curtails errors to make it ready for reading and text recognition. Simple OCR engine scans and converts an image into a text format document with its content stored as text data to automate processes, streamline operations, and elevate productivity.             </div>
              </div>
            </div>
            <div className='accordion-item mb-4 border-0'>
              <h1 className='accordion-header' id="heading-4">
                <button class="accordion-button bg-color-button pt-4 pb-5" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-4" aria-expaded="true"
                  aria-controls='chapter-4'>
                  What is the difference between IDP and OCR?
                </button>
              </h1>
              <div id="chapter-4" class="accordion-collapse collapse" aria-labelledby='heading-4' data-bs-parent="#chapters">
                <div class="accordion-body fs-16 justifying-text">
                  The difference between OCR and IDP is that the two leverage different technologies and methods to scan, read, and process text. IDP uses AI engines to extract and automate the data without manual intervention with utmost precision and accuracy. Also it will consume a little more time compared to OCR. Whereas OCR can be leveraged to turn text into digital files. OCR helps businesses to digitise old documents or books or handwritten text in digital form. One of the main benefits of using OCR is that it can be used to convert text that is difficult to read. In a nutshell, OCR is a technology that can be used by businesses to convert difficult-to-read text into digital files to streamline operations.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
          <div className='accordion' id="chapters-two">
          <div className='accordion-item mb-4 border-0'>
              <h1 className='accordion-header' id="heading-5">
                <button class="accordion-button bg-color-button pt-4 pb-5" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-5" aria-expaded="true"
                  aria-controls='chapter-5'>
               Does an IDP solution leverage OCR?

                </button>
              </h1>
              <div id="chapter-5" class="accordion-collapse collapse" aria-labelledby='heading-5' data-bs-parent="#chapters">
                <div class="accordion-body fs-16 justifying-text">
                IDP leverages five technologies, Natural Language Processing, Machine Learning, Predictive Analytics, Computer Vision, and advanced OCR engines to drive document automation at scale.
                </div>
              </div>
            </div>
            <div className='accordion-item mb-4 border-0'>
              <h1 className='accordion-header' id="heading-6">
                <button class="accordion-button bg-color-button pt-4 pb-5" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-6" aria-expaded="true"
                  aria-controls='chapter-6'>
                How is IDP better than OCR for businesses?
                </button>
              </h1>
              <div id="chapter-6" class="accordion-collapse collapse" aria-labelledby='heading-6' data-bs-parent="#chapters">
                <div class="accordion-body fs-16 justifying-text">
                Businesses are looking to improve data accuracy and efficiency when it comes to reading and parsing heavy and complex documents in today's data world. Nonetheless, traditional OCR technology will not be able to assist your business in achieving 100% document automation and streamlined business process operations. Intelligent Document Processing (IDP) is an optimal choice in these business-critical situations to advance overall documentation accuracy and efficiency as IDP can better understand and read the data than OCR toward identifying relevant data objects, phrases, and words making it easier to search and process specific content. IDP can instinctively auto-correct errors whilst scanning and or copying the text.
                </div>
              </div>
            </div>
            <div className='accordion-item mb-4 border-0'>
              <h1 className='accordion-header' id="heading-7">
                <button class="accordion-button bg-color-button pt-4 pb-5" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-7" aria-expaded="true"
                  aria-controls='chapter-7'>
                  What is Optical Character Recognition (OCR)?
                </button>
              </h1>
              <div id="chapter-7" class="accordion-collapse collapse" aria-labelledby='heading-7' data-bs-parent="#chapters">
                <div class="accordion-body fs-16 justifying-text">
                  Optical Character Recognition (OCR) technology is an efficient business process that transforms an image of complex text into a machine-readable format that free-up your resources and saves time & cost for positive business outcomes. Firstly, Intelligent OCR cleanses the image and curtails errors to make it ready for reading and text recognition. Simple OCR engine scans and converts an image into a text format document with its content stored as text data to automate processes, streamline operations, and elevate productivity.             </div>
              </div>
            </div>
            <div className='accordion-item mb-4 border-0'>
              <h1 className='accordion-header' id="heading-8">
                <button class="accordion-button bg-color-button pt-4 pb-5" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-8" aria-expaded="true"
                  aria-controls='chapter-8'>
                  What is the difference between IDP and OCR?
                </button>
              </h1>
              <div id="chapter-8" class="accordion-collapse collapse" aria-labelledby='heading-8' data-bs-parent="#chapters">
                <div class="accordion-body fs-16 justifying-text">
                  The difference between OCR and IDP is that the two leverage different technologies and methods to scan, read, and process text. IDP uses AI engines to extract and automate the data without manual intervention with utmost precision and accuracy. Also it will consume a little more time compared to OCR. Whereas OCR can be leveraged to turn text into digital files. OCR helps businesses to digitise old documents or books or handwritten text in digital form. One of the main benefits of using OCR is that it can be used to convert text that is difficult to read. In a nutshell, OCR is a technology that can be used by businesses to convert difficult-to-read text into digital files to streamline operations.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frequent;
