import React, { useEffect, useRef, useState } from 'react';
import '../CSS/Perplexity.css';
import AboutUsBG from "../images/About-Us-Page/worker-reading-news-with-tablet.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import clock from "../images/perplexity-page/clock-image.png";
import Insightdata from "../Data/Resources-Data/Insightdata.js";
import linkedin from "../images/perplexity-page/linkedin.svg";
import facebook from "../images/perplexity-page/facebook.svg";
import twitter from "../images/perplexity-page/twitter.svg";
import instagram from "../images/perplexity-page/instagram.svg";

const schema = yup
  .object()
  .shape({
    fName: yup
      .string()
      .matches(/^[a-zA-Z ]*$/, "First Name is not valid")
      .required("First Name is required"),
    lName: yup
      .string()
      .matches(/^[a-zA-Z ]*$/, "Last Name is not valid")
      .required("Last Name is required"),
    email: yup
      .string()
      .email()
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "email is required"
      )
      .required("email is required"),
    // phoneNumber: yup.string().when("$exist", {
    //   is: (exist) => exist,
    //   then: yup
    //     .string()
    //     .matches(
    //       /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    //       "phonenumber is not valid"
    //     ),
    //   otherwise: yup.string(),
    // }),
    // acceptCheckbox: yup.bool().oneOf([true], "Checkbox selection is required"),
    cName: yup
      .string()
      .matches(/^[a-zA-Z ]*$/, "Company Name is not valid")
      .required("Company is required"),
  })
  .required();

const headings = [
  {
    id: "introText",
    description:
      "We’re excited to introduce the open-source version of ContextCheck, a tool designed to evaluate Retrieval-Augmented Generation (RAG) chatbots effectively. This release aligns with our mission to advance AI usability, focusing on transparency, performance, and groundedness in AI-driven interactions.",
  },
  {
    id: 'heading1',
    title: 'What does Perplexity offer to customers?',
    description: 'Perplexity’s “Buy with Pro” embodies a frictionless approach to online commerce by simplifying both product research and the purchase process. Users can search for products, review them, and complete purchases without leaving the Perplexity platform. The system allows users to save their shipping and billing information for convenient checkout.',
    description1: "Moreover, taking a page from Amazon Prime’s playbook, Perplexity offers free shipping on all purchases to Pro subscribers, who pay a monthly fee of $20.",
    videourl: "https://www.youtube.com/embed/oOBETYjihPk",
  },
  {
    id: 'heading2',
    title: 'How does Perplexity’s move impact the e-commerce market?',
    description: "Perplexity’s initiative represents a transformative shift in product search, moving away from traditional keyword-based searches toward a more intuitive, natural-language approach.",
    description1: "Users can now conduct comprehensive shopping inquiries using conversational queries like “Help me arrange my home office,” instead of relying on fragmented keyword searches that often yield irrelevant results, require specific terms, and need multiple refinements to produce satisfactory results.",
    description2: "This integration streamlines the shopping experience, providing consumers with tailored suggestions without the need to navigate multiple websites or deal with annoying checkout processes.",
    heading1: "Perplexity Merchant Program",
    description3: "To support this new shopping functionality, Perplexity is also launching a Merchant Program that allows retailers to share their product specifications directly with the platform.",
    heading2: "Key aspects include: ",
    orderedlist1: [
      {
        sidehead: "With the introduction",
        content: "Yet, rather than playing defense, Perplexity is doubling down on its ambitions. The launch of “Buy with Pro” sends an unmistakable message to the market."
      },
      {
        sidehead: "dfdf",
        content: "queries like “Help me arrange my home office,” instead of relying on fragmented keyword searches that often yield irrelevant results, require specific terms, and need multiple refinements to produce satisfactory results."
      },
      {
        sidehead: "dkjhd",
        content: "descriptioorr"
      },
      {
        sidehead: "kjehfks",
        content: "descriptioorr"
      },
    ]
  },
  {
    id: 'heading3',
    title: 'Perplexity’s poke at Google and Amazon',
    description: "With the introduction of the ‘Buy with Pro’ feature, Perplexity, already seen as a search disruptor nipping at Google’s heels, now seems to be going after another giant—Amazon. By offering free shipping and a straightforward purchasing process, Perplexity is positioning itself as a viable alternative to Google Shopping and Amazon, both of which have long been the go-to sources for online product searches.",
    description1: "While Google and Amazon have established their dominance through extensive product listings and integrated shopping experiences, Perplexity aims to differentiate itself by focusing on user-centric features. The platform emphasizes unbiased recommendations without sponsored placements, as it claims, appealing to consumers who seek objective information before making purchases.",
    description2: "Furthermore, Perplexity’s integration with Shopify allows it to tap into a vast network of merchants, enhancing its product offerings while maintaining a user-friendly interface.",
    orderedlist: [
      {
        sidehead: "Enhanced AI Performance: ",
        content: "Faster processing times and reduced latency."
      },
      {
        sidehead: "Robust Reliability:  ",
        content: "Superior inference speeds for critical tasks.",
      },
      {
        sidehead: "Versatile Deployment: ",
        content: " Flexibility across various operational scenarios. ",
      },
    ],
  },
  {
    id: 'heading4',
    title: 'Perplexity aims for all',
    description: "Perplexity’s bold push into e-commerce comes at a pivotal moment in the company’s trajectory. While the AI search engine grapples with serious allegations of plagiarism and copyright infringement, having prompted the launch of a Publishers Program to share advertising revenue with content creators, the company is showing no signs of retreating.",
    description1: "The accusations are substantial – ranging from unauthorized content scraping from major publishers like Forbes and The New York Times to generating responses that contain copyrighted material without proper attribution. Some responses have even been flagged as “hallucinations,” where the AI incorrectly attributed information sources, raising concerns about content reliability.",
    description2: "Yet, rather than playing defense, Perplexity is doubling down on its ambitions. The launch of “Buy with Pro” sends an unmistakable message to the market: despite the legal headwinds, Perplexity is charging full steam ahead with its vision to revolutionize digital commerce.",
    description3: "This aggressive expansion into e-commerce territory, traditionally dominated by giants like Amazon and Google, demonstrates that Perplexity isn’t just aiming to survive – it’s positioning itself to thrive and disrupt."
  },
];



const Perplexity = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const history = useNavigate();
  const btnColor = {
    backgroundColor: "#ecac27",
    borderRadius: "50px",
    cursor: "pointer",
  };

  const navigateTowebinarspage = (id) => {
    history(`/blogs/${id}`);
  };

  const [selectedId, setId] = useState("");
  const hightlightText = (id) => {
    setId(id);
  };

  const UnhightlightText = () => {
    setId("");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    return emailjs
      .sendForm(
        "service_e7ig9fn",
        "template_g62rj9d",
        formDetails.current,
        "yz7dQlM6o3Rz3cnB8"
      )
      .then(
        console.log("mail sent"),
        localStorage.setItem("cookie", 4),
        reset(),
        handleShow(),
        (error) => {
          console.log(error.text);
        }
      );
  };

  const formDetails = useRef();
  const [activeHeading, setActiveHeading] = useState(null);
  const descriptionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root  
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible  
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHeading(entry.target.id); // Set active heading when section is in view  
        }
      });
    }, observerOptions);

    // Observe each section  
    descriptionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      // Cleanup observer on component unmount  
      descriptionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const section = descriptionsRef.current.find((el) => el.id === id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <div className="scroll-class">
      <div class="background-container">
        <div class="centered-text">
          <h1>November 19, 2024</h1>
          <p>Perplexity: AI search diruptor is taking a big swing with new shopping feature</p>
        </div>
      </div>

      <div className='scrolling-bar'>
        <div className='row space-above w-93 mx-auto'>
          <div className="col-lg-3 col-md-12 col-sm-12 col-12 sticky-cls-first">
            {headings
              .filter((heading) => heading.title)
              .map((heading) => (
                <div
                  key={heading.id}
                  className={`heading ${activeHeading === heading.id ? "active" : ""}`}
                  onClick={() => scrollToSection(heading.id)}
                >
                  {heading.title}
                </div>
              ))}
            <button className='schedule-button'>Schedule a call</button>
          </div>

          <div className="col-lg-6 col-sm-12 col-md-12  col-12 descriptions-column">
            <h1 className="reading-text">Reading time:</h1>
            <div className="spacing-divs-xss"></div>
            <div className="fs-12 fw-bold minute-text">
              <img src={clock} className="me-2" />
              4 minutes
            </div>
            {headings.map((heading, index) => (
              <div
                key={heading.id}
                id={heading.id}
                ref={(el) => (descriptionsRef.current[index] = el)}
                className="description-section"
              >
                <div className="spacing-divs-l"></div>
                {heading.title && <h1>{heading.title}</h1>}
                <p>{heading.description}</p>
                {heading.description1 && <p>{heading.description1}</p>}
                {heading.description2 && <p>{heading.description2}</p>}
                {heading.heading1 && <h2>{heading.heading1}</h2>}
                {heading.description3 && <p>{heading.description3}</p>}
                {heading.heading2 && <h3>{heading.heading2}</h3>}

                {heading.videourl && (
                  <p>
                    <iframe title="video"  frameBorder="0" allowFullScreen
                      src={heading.videourl}
                      className="lazyload pt-4 video-height"
                    ></iframe>
                  </p>
                )}
                {heading.orderedlist && heading.hasOwnProperty("orderedlist") && (
                  <ol className="pl-4 list-style-dot">
                    {heading.orderedlist.map((response) => (
                      <li className="fs-14 pb-3" key={response.sidehead}>
                        <span className="fs-14 fw-bold">{response.sidehead}</span>
                        {response.content}
                      </li>
                    ))}
                  </ol>
                )}
                {heading.orderedlist1 && heading.hasOwnProperty("orderedlist1") && (
                  <ol className="pl-4 list-style-dot">
                    {heading.orderedlist1.map((response) => (
                      <li className="fs-14 li-margin" >
                        <span className="fs-14 fw-bold">{response.sidehead}</span>
                        <br /> {response.content}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
            <div className="spacing-divs-ss"></div>
            <div className='hr-line-category'></div>
            <p className='category-font'>Category: <span className='ai-styles'>AI Industry News</span></p>
            <div className='hr-line-category'></div>
            <div class="share-container d-flex flex-row justify-content-between">
              <div className='share-text'>Share this article:</div>
              <div class="social-icons">
                <span class="icon linkedin" >
                  <a href="https://www.linkedin.com" target='_blank'> <img src={linkedin} /></a>
                </span>
                <span class="icon linkedin" >
                  <a href="https://www.twitter.com" target='_blank'>  <img src={twitter} /></a>
                </span>
                <span class="icon linkedin" >
                  <a href="https://www.facebook.com" target='_blank'>  <img src={facebook} /></a>
                </span>
                <span class="linkedin" >
                  <a href="https://www.instagram.com" target='_blank'>  <img src={instagram} /></a>
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-12 col-sm-12 col-12 sticky-cls mt-4">
            <div className="card servicess">
              <a href="https://addepto.com/contextclue-ai-text-analysis-tool-by-addepto/">
                <div className="animation__img">
                  <img src="https://addepto.com/wp-content/uploads/2023/06/contextclue-featured-image.webp" alt="" data-scroll-zoom />
                </div>
                <div className="card__content">
                  <h5 className="h5">ContextClue: AI Text Analysis Tool by Addepto</h5>

                  <div className="flex justify-content-end">
                    <span className="h6 primary pt-3">check this service</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="flex fd-c ai-fs card newsletter">
              <h2 class="h5">Sign Up for Newsletter</h2>
              <form
                ref={formDetails}
                onSubmit={handleSubmit(submit)}
                className="pt-4"
              >
                <div className='row'>
                  <div className="col-xs-12 col-sm-12 col-12">
                    <label className="font-form text-start ">
                      Name<span className="green-star">*</span>
                      <input
                        className="w-100 spacing-input-l border-rounded"
                        type="text"
                        placeholder=' Name'
                        name="fName"
                        {...register("fName")}
                      />
                    </label>
                    <p className="fs-13 text-danger fw-bold-400 text-start">
                      {errors.fName?.message}
                    </p>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-12">
                    <label className="font-form text-start">
                      E-mail<span className="green-star">*</span>
                    </label>
                    <p className="email_field">
                      <input
                        className="w-100 spacing-input-l  border-rounded"
                        placeholder='Email address'
                        type="email"
                        name="email"
                        {...register("email")}
                      />
                    </p>
                    <p className="fs-13 text-danger fw-bold-400 text-start">
                      {errors.email?.message}
                    </p>
                  </div>
                </div>
                <div className="w-100 d-flex checkbox-space">
                  <div className="w-6">
                    <input
                    className='checkmarks-in'
                      type="checkbox"
                      name="acceptCheckbox"
                      {...register("acceptCheckbox")}
                    ></input>
                  </div>
                  <div className="w-94 pl-2">
                    <div className="pt-1 fs-12 ps-2">
                      * I want to receive newsletter
                    </div>
                    <br />
                  </div>
                </div>
                <p className="fs-13 text-danger fw-bold-400">
                  {errors.acceptCheckbox?.message}
                </p>
                <p className='fs-12'>See our <span className='fw-bold fs-12'>Pivacy Policy</span></p>
                <p className='signup-button'>Sign up</p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='grey-background'>
        <div className="row w-93 mx-auto new-case-studies-row ">
        <div className="d-flex justify-content-between align-items-center  mb-3">
          <div className="text-start related-articles">Related Articles</div>
          <div className="text-end check-articles">check all Articles</div>
        </div>
          {Insightdata.perplexitydetails.map((list) => {
            return (
              <div
                className="col-lg-3 col-md-6 col-sm-12 col-xs-12 cr-pointer highlight-text d-flex align-items-strech mb-4"
                key={list.id}
                onClick={() => {
                  navigateTowebinarspage(list.id);
                }}
                onMouseEnter={() => {
                  hightlightText(list.id);
                }}
                onMouseLeave={() => {
                  UnhightlightText();
                }}
              >
                <div className="border-0  card animation-card-image mr-4 ">
                  <a
                    className="anchor_styles achorhover"
                    href={`/blogs/${list.id}`}
                  >
                    <div className="card-header border-0 bgc-white p-0 position-relative">
                      <img
                        src={list.image}
                        alt={list.title}
                        className="blog_images"
                      />
                      <button className="btn btn-white position-absolute bottom-right-button">
                        AI Industry News
                      </button>
                    </div>
                    <div className="card-body propensity-modelling height-auto margin pb-2">
                      <h1 className="color-date">{list.date}</h1>
                      <h1 className="card-body-heading pb-0 pt-0">
                        {list.title}
                      </h1>
                      <p className="card_body_description">
                        {list.description}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Perplexity;