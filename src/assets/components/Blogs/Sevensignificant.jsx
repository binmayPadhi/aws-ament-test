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
import image1 from "../../images/Webinar-images/CTA_AmnetDigital.jpg";
import Letsgetstart from '../Webinars/Letsgetstart.jsx';
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
        title:"Seven Significant ways Artificial Intelligence (AI) is Impacting the Retail Industry",
        description:"Artificial Intelligence is becoming the limelight practice for Retail businesses as online shopping replaces more and more physical establishments. In today's fast evolution of digitalization, Retailers are using artificial intelligence technologies to help them match their products and services to the expectations of their customers in the digital age when customers are continuously looking for bespoke goods and services. To master productivity and efficiency operations, Artificial Intelligence is becoming the most powerful tool.",
       description1:"Worldwide artificial intelligence software revenue is forecast to total $62.5 billion in 2022, an increase of 21.3% from 2021, according to a new forecast from Gartner, Inc.",
       heading1:"Inflating In-store Experience",
       description3:"One of the biggest ways AI is transforming the retail industry is by automating tasks that were previously completed by human workers. As a result, your personnel may engage more in handling difficult customers' problems and less in laborious activities. Potential to materialize real-time stock monitoring, digitizing retail displays and trial rooms, and replenishing inventory, to serve consumers in the business and shorten lines by accepting payments without a cashier. For retailers who wish to maximize their time and enhance customer experience, I recommend AI.",
    },
   
    {
        id: "heading2",
        "title": "Customer Service Assistance through Conversational AI/Virtual Assistant",
        description:"Customer interaction is ensured by omnichannel retail so that it doesn't begin and end at a location. By developing interactive chat programs, artificial intelligence solutions in retail may easily increase client engagement. Chatbots can be useful tools for consumer communication. AI-powered assistants that can deliver specialized shopping assistance and support to customers at scale and utilize natural language will play a significant role in this.They can respond to frequently asked questions, make product recommendations, address complaints, and gather insightful information from your consumers before transferring the call, if necessary, to a telesales executive.They offer a strong customer experience and are open round-the-clock.",
        orderedlist: [
            {
                "sidehead": "Price Adjustment Flexibility",
                content:"These potentials could lead to not only cost savings but also improvements in customer happiness, retention, and overall experience—all of which are critical in the retail industry. Another area where AI has advanced quickly is payments. AI not only makes payments easier but also prevents fraud. To proactively find and stop transaction fraud, PayPal's AI utilizes a deep learning model built on years of digital transactions. Retailers can also change their prices in response to seasonal patterns, rival items, and customer demand. It is undoubtedly a worthwhile investment when we consider the potential long-term revenue it can produce.",
            },
            {
                "sidehead": "Constructive Logistics and Supply Chain",
                content:"AI also has the caliber to streamline your in-store supply chain. For instance, this technology can analyze the purchasing patterns of your previous clients and notify you in advance when you will run out of specific products. This is important since clients may choose a different business if they don't feel certain that you'll always have the products they require. And that means you'll lose sales, which will hurt your bottom line. AI can also forecast when a particular product will be in more demand throughout the year. As a result, you can start stocking up now rather than rushing to secure and display these popular seasonal items when clients start asking about them.",
           
             },
        ],
        btntext: "On-Demand Webinar - See how leading Retailers are embracing AI & Analytics to win in 2023 -",
        watchnow: "WATCH NOW"
    },
    {
        id: "heading3",
        title: "Personalization, Customer Understanding, and Recommendation System",
        description:"Both customers and businesses are placing more and more value on tailored recommendations and purchase predictions. Retail artificial intelligence can provide customers with a personalized buying experience. Technologies like fingerprint and face recognition can recognize returning clients and keep track of their preferences. In order to understand consumers' preferences, cutting-edge AI algorithms can examine their demographic information, social media impressions, and digital imprints. According to statistics, 71% of users won't even open an impersonalised email. Additionally, companies claim that targeted campaigns raised their postal earnings by 760%. E-commerce and retail businesses leverage machine learning to recommend relevant products to clients based on their interests, searches, and past purchases.",
        orderedlist: [
            {
                "sidehead": "Robotic Product Searches",
                content:"Additionally, artificial intelligence in retail helps assist customers in being able to find products by taking pictures of a product they like in the real world and using that photo to look up online retailers selling that good. In just a few seconds, machine learning retail software can categorize millions of products from diverse vendors for clients, making product comparison and search simpler than ever",
            },

            {
                "sidehead": "Automating the Warehouse",
                content:"The complexity of store operations is a result of multichannel retail. In a warehouse, store employees need to perform a variety of tasks. Their duties now extend beyond simply receiving, stocking, and controlling inventory. They need to manage marketing, track promotional offers, and provide product information. A short examination of the products delivered by AI in warehouses and retail supply chains reveals pricing irregularities and out-of-stock items. It can take a while to realize a product has run out at large warehouses. Smart shelves are used in an AI- based inventory management system to notify personnel when there are product shortages or missing items in the inventory. The time saved can be successfully put to use for other fruitful tasks, which will cut down on the amount of time spent at the warehouse.",
               image: image1
            },

              ]
    },
    {
        id: "heading7",
        title: "AI - The future buzz for business continuity and growth",
        description:"AI has the power to completely change the retail industry. The retailers who can develop their retail channels will distinguish themselves as industry leaders when digital and physical purchase channels merge. It offers retailers a future-oriented perspective and takes the place of intuition with intelligence. When implementing AI, business executives must be practical in their approach. AI will help merchants comprehend customer psychology by bringing us closer to the current state of the human brain. A new AI algorithm can actually understand what someone is thinking by using deep learning networks. Last but not least, future research can concentrate on creating AI models to better comprehend consumer/shopper ideas using. For this study, researchers from several fields, including marketing, information systems, computer science, statistics, economics, and psychology, must work together and engage in cross-functional thinking."
    },

];




const Sevensignificant = () => {
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
        <title>Seven Significant ways AI is Impacting the Retail Industry | Amnet Digital</title>
        <meta name="description" content="There are numerous ways how AI in retail has impacted the picture of the retail sector. In this post, we'll explore how AI is used in 
         the retail sector along with some practical examples." />
        <meta name="keywords" content="" />
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
                                {heading.heading1 && <h2>{heading.heading1}</h2>}
                                {heading.description3 && <p>{heading.description3}</p>}
                                {heading.image && (
                                    <img src={heading.image} className='w-100' />

                                )}
                                {heading.orderedlist && heading.orderedlist.length > 0 && (
                                    <ol className="pl-4">
                                        {heading.orderedlist.map((response, responseIndex) => (
                                            <li key={response.sidehead} className="fs-14 pb-3 ">
                                                <span className="fs-14 fw-bold" >{response.sidehead}</span>
                                                {response.content && <p className="mt-3">{response.content}</p>}
                                                {response.content1 && <p className="mt-3">{response.content1}</p>}
                                                {response.content2 && <p className="mt-3">{response.content2}</p>}
                                                {response.content3 && <p className="mt-3">{response.content3}</p>}
                                                {response.content4 && <p className="mt-3">{response.content4}</p>}
                                                {response.image && (
                                                    <img src={response.image} className='w-100' />
                                                )}
                                            </li>
                                        ))}
                                    </ol>
                                )}
                                {heading.btntext && (
                                    <div style={btnColor} >
                                        <a className="achorhover text-black" href={`/webinars/reshaping-the-retail-industry-through-AI`}>
                                            <p className="mb-0 px-4 py-3">
                                                <span className="lh-1 fs-14">
                                                    {heading.btntext}
                                                    <span className="font-weight-bold fs-18 pl-1">
                                                        {heading.watchnow}
                                                    </span>
                                                </span>
                                            </p>
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}

                       <div className=''><Letsgetstart /></div>
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
                                        {/* <div className="card-footer border-0 bgc-white">
                      <p className="mb-2 anchor_styles">{`Read More ->`}</p>
                    </div> */}
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

export default Sevensignificant;