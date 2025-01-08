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
        "title": "",
        description: "Retail organizations are increasingly adopting advanced algorithms to streamline their product offerings, customer services, and inventory management in this evolving AI-driven business landscape",
        "description1": "While traditional manual approaches are no longer sufficient to handle supply chain complexities, more than 47% of global retail brands have already embraced AI to forecast demand, reduce stockouts, automate warehousing, and improve logistics efficiency. Because that helps them decrease carrying costs, maintain integrated supplier relationships, improve customer satisfaction, and stay competitive in this dynamic retail market.",
        description2: "Let’s dive deeper into how you can deploy AI to optimize your inventory management and enhance customer experience",
        "heading1": "How is AI used in inventory management?",
        description3: "Algorithms like AI, ML, NLP, and data science offer a window of opportunities to automate and simplify inventory management processes. Here are five ways you can use AI to make data-driven decisions and streamline your inventory operations:",
        "orderedlist": [
            {
                "sidehead": " Demand Forecasting: ",
                "content": "Demand forecasting is the backbone of inventory management that helps you accurately predict customer demands and maintain an optimal inventory level, avoiding stockouts or overstocking. In this effort, AI-powered forecasting models can significantly improve your prediction accuracy by analyzing historical sales data, market trends, seasonal patterns, and even external factors like weather and economic indicators.",
                content1: "Machine Learning algorithms like ARIMA (AutoRegressive Integrated Moving Average), exponential smoothing, and neural networks can continuously learn from new data, adapt to changing market dynamics, and generate accurate demand forecasts. That enables you to respond proactively to demand fluctuations, reduce inventory imbalances, cut carrying costs, and enhance customer satisfaction through improved product availability.",
                content2: "For example, leading retailers like Walmart and H&M use AI systems to enjoy accurate demand forecasting, inventory management, and enhanced business processes. They gain long-term benefits from improved supply chain planning and sustainability, reducing waste and anticipating future revenue.",
            },
            {
                "sidehead": "Inventory Optimization",
                "content": "Traditional inventory optimization methods rely on historical data and manual inputs. AI introduces dynamic adjustments based on real-time data, improving accuracy and efficiency.",
                content1: "They consider multiple factors like demand variability, lead times, supplier constraints, and seasonality to find the optimal balance between inventory costs and service levels. That way, you can achieve substantial cost savings, reduce waste, and improve resource allocation, making your operations more agile and profitable. Moreover, you can track your inventory levels in real-time, collect stock-level data using sensors and IoT, and optimize product movements using AI to meet customer demand.",
                content2: "For instance, brands like Zara and Kroger use AI-driven systems to optimize production, supply chains, inventory levels, and replenishment. They help them produce and deliver on-demand products, reduce wait times, and improve customer satisfaction with timely services.",
            },
            {
                "sidehead": "Smart Warehouse Management: ",
                content: "One significant revolution that AI has brought to stockpiling and warehouse automation is using AI-powered robots and drones for picking, packing, and shipping operations. These robots can navigate the warehouse autonomously, locate and retrieve items accurately, and reduce the time and labor required to fulfill your orders. Moreover, you can leverage AI to optimize your warehouse layout and storage arrangements according to your product velocity, storage capacity, and order frequency.",
                button: " Uncover how  AI can Optimize Your Inventory Management.",
                content1: "That allows you to place fast-moving items closer to the packing stations, leading to faster order processing and reduced travel time. Also, AI-driven predictive maintenance can identify and address equipment issues before they cause downtime. That way, you can continuously monitor machinery and make data-driven maintenance decisions to maximize warehouse productivity and minimize disruptions.",
                content2: "For example, the warehouse superstore Sam’s Club Now opened a smaller AI-driven outlet to let customers shop without any checkout queues. Their app can map the optimal route to deliver products from their store to customers’ shopping carts and offer them a streamlined buyer’s journey.",
            },
            {
                sidehead: "Supplier Management: ",
                content: "Smooth supplier relationships are vital for maintaining a stable inventory flow. In that case, AI can enhance your supplier management by analyzing supplier data, performance metrics, and market trends. It can identify potential risks like delivery delays or quality issues, allowing you to make informed decisions about your suppliers.",
                content1: "Also, AI can help you negotiate better contracts and pricing with suppliers by providing data-driven insights on market trends and benchmarking supplier performance against competitors. Thus, you can use these algorithms to optimize your procurement strategies, improve supplier collaboration, and achieve cost savings.",
                content2: "For instance, retail giants like Amazon and Alibaba use AI and advanced analytics to manage their supply chains. They delight customers by reducing logistics costs, improving timely service, and accelerating decision-making to fuel innovation.",
            },
            {
                sidehead: "Real-time Analytics and Decision Support: ",
                content: "AI-driven inventory management systems can empower you to respond swiftly to changing market conditions by providing real-time insights and decision support. You can integrate AI with IoT devices to capture and analyze instant data from diverse sources like point-of-sale terminals, RFID tags, and temperature sensors.",
                content1: "Moreover, your in-store managers can receive automated alerts and make data-driven decisions to adjust inventory levels, optimize pricing, or initiate marketing campaigns in response to demand fluctuations. That way, you can promptly identify emerging trends, stockouts, or slow-moving items and take immediate action to improve customer experience.",
                content2: "For example, India’s leading footwear retailer Bata deployed an AI-powered video analytics solution to optimize in-store sales, business operations, and customer services. The platform collects data from its stores and generates real-time insights into customer behavior, sentiments, and emotions.",
            }
        ]
    },
    {
        "id": "heading2",
        "title": "What is the future of AI in the retail industry? ",
        description: "AI will play a pivotal role in reshaping the retail landscape as technology evolves. From personalized customer experiences to optimized supply chain and inventory management, AI-powered solutions will help retailers operate efficiently and accurately like never before. That’s why it’s high time to embrace advanced AI algorithms to unlock new opportunities, boost revenue, and create a more engaging and convenient shopping experience for your customers worldwide.",
        description1: "Connect with Amnet Digital to get a trusted digital partner in configuring your AI infrastructure and helping you maintain data-driven mindsets across your business processes. Our end-to-end AI solutions cover your needs from the early model development phase to the final deployment phase, utilizing data-backed solutions for your inventory and logistics needs. We power your inventory management with product analysis, demand forecasting, outlier analysis, and financial model development to help you efficiently meet current and emerging market demands.",
        description2: "Moreover, our customized ML models accurately predict shipment schedules to optimize logistics processes and support preventive maintenance without service disruptions. That way, you can ensure optimal product availability, streamline supply chains, and enhance customer satisfaction to boost your brand perception.",
    },
];




const Inventorymanagement = () => {
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
                <title>Explore how AI can optimize your Supply Chain and Inventory Management</title>
                <meta name="title" content="5 Ways AI Can Optimize Your Inventory Management | Amnet Digital" />
                <meta name="description" content="AI will play a pivotal role in reshaping the retail landscape from personalizing customer experiences to optimizing supply chain and inventory management." />
                <meta name="keywords" content="AI for inventory management, AI to optimize inventory management, AI solutions for inventory management, inventory management AI solutions." />
            </Helmet>
        <div className="scroll-class">
            <div class="background-container bg-container-inventory">
                <div class="centered-text">
                    <h1>November 21, 2023</h1>
                    <p>5 Ways AI can Enhance and Optimize your Inventory Management</p>
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
                                {heading.heading1 && <h2>{heading.heading1}</h2>}
                                {heading.description3 && <p>{heading.description3}</p>}
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
                    {Insightdata.inventorydetails.map((list) => {
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
                                                {list.button}
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

export default Inventorymanagement;