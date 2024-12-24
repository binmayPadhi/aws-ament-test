import React, { useEffect, useRef, useState } from 'react';
import '../../CSS/Perplexity.css';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import clock from "../../images/perplexity-page/clock-image.png";
import Insightdata from "../../Data/Resources-Data/Insightdata.js";
import linkedin from "../../images/perplexity-page/linkedin.svg";
import facebook from "../../images/perplexity-page/facebook.svg";
import twitter from "../../images/perplexity-page/twitter.svg";
import instagram from "../../images/perplexity-page/instagram.svg";
import { Helmet } from "react-helmet";

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
        "id": "heading1",
        title:"Medical Image / Video Data Annotation: How to go about it?",
        description:"In the realm of modern healthcare and medical research, the value of data is immeasurable. As medical technology advances, the vast amount of visual data, including medical images, reports, and videos, continues to grow exponentially. These visuals hold a treasure trove of invaluable information that can revolutionize diagnostics, treatment, and research outcomes. However, to unlock the full potential of this data, it must first be properly annotated.",
        description1:"There’s no exaggeration that GenAI, Machine Learning, Deep Learning, and Image Annotation have the power to transform the healthcare industry to deliver better patient outcomes. Medical applications are wide-ranging and include the entirety of the medical imaging life cycle starting from image creation, data analysis, and uncovering diagnosis to predict outcomes with accuracy. However, medical professionals are dealing with a multitude of obstacles that are preventing them from successfully implementing AI technology for clinical practice.",
        description2:"Medical data annotation, the process of labeling and categorizing visual data, plays a pivotal role in enabling machine learning algorithms and artificial intelligence systems to analyze and interpret these complex visuals accurately. Medical ",
        
    },
    {
        "id": "heading2",
        "title": "What is Medical Data Annotation",
        "description": "Before we embark on the intricacies of medical data annotation, let's start with the fundamental concept of data annotation itself. Data annotation is the process of adding metadata, labels, or tags to raw data to provide meaningful information and context to machines and algorithms. This metadata empowers computers to understand and interpret the data, enabling them to recognize patterns, make predictions, and perform various tasks autonomously.",
        "description1": "In the medical domain, data annotation is critical as it facilitates the analysis and comprehension of visual data, such as medical, research, diagnostic, and treatment images and videos. By assigning specific labels or annotations to the visual elements within these datasets, healthcare professionals, researchers, and AI systems can gain valuable insights that drive advancements in diagnostics, treatment, and research.",
        "heading1": "Types of Medical Data Requiring Annotation (Images, Videos, etc.)",
        "description4": "Medical data comes in various forms, and each type requires distinct annotation techniques to extract relevant information effectively. The two primary types of medical data that commonly necessitate annotation are medical images and medical videos. Both image and video annotation are set to dominate the data labeling industry, with an impressive compound annual growth rate (CAGR) of approximately 17% projected between 2020 and 2030.",
        "orderedlist": [
          {
            "sidehead": "Medical Images",
            "content": "Medical images, such as X-rays, CT scans, MRIs, and histopathological slides, serve as vital diagnostic tools for healthcare practitioners. Annotation of medical images involves identifying and marking specific regions of interest, anomalies, or structures within the images. The annotation tasks can range from simple image classification (e.g., identifying healthy vs. diseased tissues) to more complex tasks like object detection (e.g., locating tumors) and image segmentation (e.g., outlining organs or lesions). Accurate and detailed image annotation is crucial for training AI models to assist radiologists and other specialists in making accurate diagnoses and treatment decisions."
          },
          {
            "sidehead": "Medical Videos",
            "content": "Medical videos capture dynamic processes such as surgeries, endoscopic procedures, or patient movements over time. Annotating medical videos requires additional considerations due to their temporal nature. In this context, data annotation involves labeling specific events, actions, or objects within the video frames and tracking their movements across frames. For instance, annotating surgical videos may involve identifying surgical instruments, tissue manipulation, and tracking the progress of the procedure. This temporal annotation plays a vital role in improving surgical techniques, analyzing surgical outcomes, and advancing medical training programs."
          }
        ]
      },
      
      {
        "id": "heading3",
        "title": "Everyday Use Cases of Annotated Medical Visual Data",
        "description": "The applications of annotated medical visual data are extensive and hold the potential to revolutionize various aspects of healthcare and medical research.",
        "heading1": "Some everyday use cases of medical data annotation include:",
        "orderedlist": [
          {
            "sidehead": "Disease Diagnosis and Detection",
            "content": "Annotated medical images and videos are invaluable for training AI models to detect diseases and abnormalities. For instance, AI algorithms trained on annotated X-rays can aid radiologists in spotting fractures, tumors, or lung diseases with increased accuracy and speed. Similarly, annotated videos can assist in the early detection of diseases with distinct visual symptoms, such as Parkinson's disease."
          },
          {
            "sidehead": "Treatment Planning and Personalized Medicine",
            "content": "Detailed annotations of medical images help in planning surgeries and radiation treatments by providing precise information about tumor locations and surrounding healthy tissues. This data-driven approach enables personalized treatment plans that optimize patient outcomes and reduce risks.",
            button:"Book your free medical image annotation workshop now!",
        },
          {
            "sidehead": "Medical Research and Drug Development",
            "content": "Annotated medical data serves as a rich resource for researchers to study disease patterns, explore potential biomarkers, and develop new drugs. AI models trained on annotated data can accelerate drug discovery processes by identifying potential drug candidates and predicting their efficacy."
          },
          {
            "sidehead": "Training and Education",
            "content": "Annotated medical videos are invaluable for medical education and training purposes. Aspiring surgeons can learn from annotated surgical videos, gaining insights into different techniques and procedures. Additionally, medical students can benefit from annotated histopathological slides to improve their understanding of various diseases and cellular structures."
          },
          {
            "sidehead": "Annotating Medical Images",
            "content": "Medical images form the backbone of diagnostics and treatment in modern healthcare. Accurate and precise annotation of these images is essential for training AI models and enhancing medical decision-making."
          }
        ]
      },
      {
        "id": "heading4",
        "title": "Preparing the Dataset for Annotation",
        "orderedlist": [
          {
            "sidehead": "Data Collection and Curation",
            "content": "Building a robust and diverse dataset is the first step in medical image annotation. Medical images may come from various sources, including hospitals, clinics, research institutions, and public repositories. Curating a comprehensive dataset involves selecting relevant images that cover a wide range of pathologies, imaging modalities, and patient demographics to ensure the generalizability and effectiveness of the AI model."
          },
          {
            "sidehead": "Data Cleaning and Formatting",
            "content": "Raw medical image datasets often require pre-processing to remove artifacts, standardize image resolutions, and ensure consistent formatting. Data cleaning helps eliminate outliers and inaccuracies, creating a clean and reliable dataset for annotation."
          }
        ]
      },
      
      {
        "id": "heading5",
        "title": "Manual Annotation vs. Automated Annotation",
        "description": "The annotation of medical images can be performed either manually by human experts or automatically using AI-based algorithms, each approach offering distinct advantages and limitations.",
        "orderedlist": [
          {
            "sidehead": "Manual Annotation",
            "content": "Manual annotation involves trained medical professionals or experienced annotators marking the images' regions of interest and structures. This method ensures high accuracy and fine-grained annotations, especially for complex cases where expertise is required. However, manual annotation can be time-consuming and resource intensive."
          },
          {
            "sidehead": "Automated Annotation",
            "content": "With advancements in computer vision and machine learning, automated annotation methods are becoming more prevalent and are expected to grow at 18% CAGR by 2030. AI algorithms can perform image classification, object detection, and segmentation tasks, reducing the need for extensive manual labor. While automated annotation offers faster results and cost efficiency, it may require additional fine-tuning and validation to ensure accuracy, particularly for rare or complex cases."
          }
        ]
      },
      {
        "id": "heading6",
        "title": "Annotation Tools for Medical Image Annotation",
        description:"Various specialized tools and software platforms are available to facilitate the annotation process. These tools provide a user-friendly interface for annotators, making the annotation process more efficient and systematic. Some popular medical image annotation tools include:",
        "orderedlist": [
          {
            "sidehead": "ITK-SNAP",
            "content": "An open-source tool commonly used for 3D image segmentation and visualization in medical research."
          },
          {
            "sidehead": "Labelbox",
            "content": "A versatile platform that supports different annotation types, allowing users to label and collaborate on medical image datasets."
          },
          {
            "sidehead": "Annotate Medical",
            "content": "A web-based annotation tool designed explicitly for medical images, enabling accurate and detailed annotations."
          }
        ]
      },
      
      {
        "id": "heading7",
        "title": "Popular Annotation Techniques for Medical Images",
        "orderedlist": [
          {
            "sidehead": "Image Classification",
            "content": "Image classification involves assigning a label or category to an entire image. For example, classifying X-ray images as normal or abnormal or categorizing histopathological slides into different disease classes. This technique helps triage images and focus on areas of interest."
          },
          {
            "sidehead": "Object Detection",
            "content": "Object detection identifies and locates specific objects or regions within an image, such as detecting tumors, organs, or anatomical landmarks. This technique is crucial for precise diagnosis and treatment planning."
          },
          {
            "sidehead": "Segmentation",
            "content": "Segmentation involves outlining specific structures or regions of interest pixel by pixel. Commonly used for segmenting organs, lesions, or blood vessels, segmentation enables quantitative analysis and volumetric measurements."
          }
        ]
      },
      
      {
        "id": "heading8",
        "title": "Annotating Medical Videos",
        "description": "Medical videos offer a dynamic and real-time perspective of patient conditions, surgical procedures, and other medical interventions. Properly annotating medical videos is crucial for leveraging their rich visual content to drive medical research and clinical practice advancements.",
        "heading1": "Video Annotation Tools and Technologies",
        description4:"Video annotation tools are designed to address the temporal dimension of medical videos and simplify the annotation process. Some popular video annotation tools and technologies include:",
        "orderedlist": [
          {
            "sidehead": "VGG Image Annotator (VIA)",
            "content": "VIA is an open-source tool that supports image and video annotation. It allows users to mark regions of interest and add temporal labels to video segments."
          },
          {
            "sidehead": "Labelbox for Video",
            "content": "Labelbox is a specialized video annotation platform that facilitates the annotation of videos using a collaborative and user-friendly interface."
          },
          {
            "sidehead": "CVAT (Computer Vision Annotation Tool)",
            "content": "CVAT is a versatile platform supporting various annotation tasks, including object tracking and video action recognition."
          }
        ]
      } ,
      {
        "id": "heading9",
        "title": "Temporal Annotation for Medical Videos",
        "description": "Temporal annotation involves labeling events or objects that occur over time in a video. Key aspects of temporal annotation include:",
        "orderedlist": [
          {
            "sidehead": "Frame-Level Annotation",
            "content": "Annotators label individual video frames to identify objects, actions, or events within each frame."
          },
          {
            "sidehead": "Temporal Segmentation",
            "content": "Videos can be divided into segments; each segment is annotated with corresponding temporal labels."
          },
          {
            "sidehead": "Temporal Boundaries",
            "content": "Accurate identification of events or actions' start and end points is essential for precise temporal annotation."
          }
        ]
      },
      {
        "id": "heading10",
        "title": "Types of Annotations in Medical Videos",
        "description": "Medical video annotation encompasses various techniques to extract meaningful insights from dynamic visual content. Some common types of annotations in medical videos are:",
        "orderedlist": [
          {
            "sidehead": "Action Recognition",
            "content": "Annotating actions performed within a video, such as surgical steps or patient movements. Action recognition assists in understanding procedural workflows and can aid in surgical training."
          },
          {
            "sidehead": "Event Detection",
            "content": "Identifying specific events or occurrences in a video, like the onset of symptoms in patient monitoring or surgical tool usage."
          },
          {
            "sidehead": "Motion Tracking",
            "content": "Tracking the movement of objects or anatomical structures across video frames. Motion tracking is valuable for analyzing gait patterns, organ movements, or blood flow dynamics."
          }
        ],
        "description5": "Medical data annotation for images and videos stands at the forefront of healthcare innovation, opening doors to new possibilities and advancements in the field. By adding valuable metadata and context to these visuals, data annotation empowers AI systems and machine learning algorithms to analyze and interpret medical data accurately, leading to more informed diagnoses, personalized treatment plans, and groundbreaking medical discoveries."
      }
      
      
        
      
];




const Videoannotation = () => {
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

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        const sections = descriptionsRef.current;
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight) {
                setActiveHeading(section.id);
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>Medical Image / Video Data Annotation Services – Amnet Digital</title>
        <meta name="title" content="Medical Image / Video Data Annotation Provider | Amnet Digital" />
        <meta name="description" content="GenAI, Machine Learning, Deep Learning, and Image Annotation have the power to
transform the healthcare industry to deliver better patient outcomes." />
        <meta name="keywords" content="medical data annotation services, medical image annotation services, medical
video annotation services, data labeling services, data annotation" />
      </Helmet>
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

                    <div className="col-lg-6 col-sm-12 col-md-12 col-12 descriptions-column">
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
                                {heading.description && <p>{heading.description}</p>}
                                {heading.description1 && <p>{heading.description1}</p>}
                                {heading.description2 && <p>{heading.description2}</p>}
                                {heading.description3 && <p>{heading.description3}</p>}
                                {heading.heading1 && <h2>{heading.heading1}</h2>}
                                {heading.description4 && <p>{heading.description4}</p>}
                                {heading.heading2 && <h3>{heading.heading2}</h3>}
                                {heading.heading3 && <h2>{heading.heading3}</h2>}
                                {heading.question && (
                                    <h5>
                                        <span className="question-style">{heading.question}</span>
                                        {heading.details && <span className="fs-14 fw-300">{heading.details}</span>}
                                    </h5>
                                )}
                                {heading.orderedlist && heading.orderedlist.length > 0 && (
                                    <ol className="pl-4">
                                        {heading.orderedlist.map((response, responseIndex) => (
                                            <li key={response.sidehead} className="fs-14 pb-3 ">
                                                <span className="fs-14 fw-bold" >{response.sidehead}</span>
                                                {response.content && <p className="mt-3">{response.content}</p>}
                                                {response.button && (
                                                    <button className="border-green">
                                                      <a href="/contactus" className='btnn-styles'> {response.button}</a> 
                                                    </button>
                                                )}
                                                {response.content1 && <p className="mt-3">{response.content1}</p>}
                                                {response.content2 && <p className="mt-3">{response.content2}</p>}
                                                {response.content3 && <p className="mt-3">{response.content3}</p>}
                                                {response.content4 && <p className="mt-3">{response.content4}</p>}

                                            </li>
                                        ))}
                                    </ol>
                                )}
                                 {heading.description5 && <p>{heading.description5}</p>}
                            </div>
                        ))}


                        <div className="spacing-divs-ss"></div>
                        <div className='hr-line-category'></div>
                        <p className='category-font'>Category: <span className='ai-styles'>AI Industry News</span></p>
                        <div className='hr-line-category'></div>
                        <div className="share-container d-flex flex-row justify-content-between">
                            <div className='share-text'>Share this article:</div>
                            <div className="social-icons">
                                <span className="icon linkedin">
                                    <a href="https://www.linkedin.com" target='_blank'> <img src={linkedin} /></a>
                                </span>
                                <span className="icon linkedin">
                                    <a href="https://www.twitter.com" target='_blank'>  <img src={twitter} /></a>
                                </span>
                                <span className="icon linkedin">
                                    <a href="https://www.facebook.com" target='_blank'>  <img src={facebook} /></a>
                                </span>
                                <span className="linkedin">
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
        </>

    );
};

export default Videoannotation;