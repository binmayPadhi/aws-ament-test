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
        description:"In this dynamic retail world, organizations constantly look for innovative ways to enhance customer experiences, optimize processes, and boost profitability. More than 70% of retailers have already adopted a digital-first approach to increase competitiveness, efficiency, and customer satisfaction.",
        description1:"While nearly 63% of retail decision-makers expect to spend more on data analytics, over 35% believe artificial intelligence is the game-changing technology holding tremendous potential for transforming the retail landscape.",
       description2:"Specifically, generative AI in the retail market predicts exponential growth from $395Mn in 2022 to $8386Mn in 2032 at a 36.8% CAGR. That’s because it helps in innovative product development, highly personalized product recommendations, 24/7 customer support, and increased workflow efficiency at a reduced cost.",
       description3:"Let’s dig into how retail organizations use generative AI and how to deploy this revolutionary technology to enjoy the maximum benefits.",
    },
    {
        "id": "heading2",
        "title": "How generative AI is used in the retail industry?",
        description:"Generative AI leverages deep learning, computer vision, and natural language processing algorithms to generate content, images, conversations, and designs that mimic human creativity. That’s why companies involved in customer service say that generative AI impacts their business performance positively.",
        "heading1": "Here’s how the global retail industry uses generative AI for enhanced productivity:",
        "orderedlist": [
            {
                "sidehead": " Personalized Customer Experiences: ",
                content:"The retail sector lies at the heart of delivering customized shopping experiences to its customers, and generative AI has made their tasks easier than ever before. Generative AI algorithms like ChatGPT can analyze large datasets from customer interactions, purchase histories, and online behavior to identify patterns and preferences accurately. That helps retailers personalize product recommendations, strategize tailored marketing campaigns, and provide customized offers and incentives to increase customer engagement and loyalty.",
                content1:"For example, the celebrated beverage brand Starbucks uses generative AI to promote its best-selling products, provide customized product catalogs, upsell and cross-sell items, and offer personalized incentives. Customers can even order coffee on the go and pick it up in-store to skip queues.",
            },
            {
                "sidehead": "Visual Merchandising and Store Layouts: ",
                content:"Generative AI can generate realistic images and designs that help retailers simulate store layouts and product placements. Merchants can experiment with various configurations to identify the most effective arrangement and optimize the in-store experience to increase customer engagement. Moreover, they can personalize product display options online and in-store to align with customer preferences, buying behaviors, and browsing habits. They can also use generative AI to answer customer queries and guide them to find their preferred products at the right place.",
               content1:"For instance, the fashion brand Macy’s uses AI-powered shopping assistants to answer customer questions regarding its stores’ inventory, products, special offers, and facilities. Its customers can get automatic responses on product availability and location, making their shopping experience frictionless and streamlined.",
            },
            {
                "sidehead": "Virtual Try-on and Fittings: ",
                content:"Though only 1% of retailers use AR and VR technologies to augment customer buying experience, generative AI influences enormously how customers interact with products before purchasing. Retailers can integrate generative AI with AR or VR to help potential customers try their products virtually and decide their fittings. They can see how clothing, accessories, or cosmetics will look on them without trying any physical samples. That way, retail organizations can create immersive and interactive customer experiences, reducing the chances of returns and enhancing customer satisfaction.",
               content1:"For example, the apparel retailer Stitch Fix uses generative AI to suggest which clothes received comments like “perfect fit”, “excellent quality”, “great price”, “fun color” and more positive comments from customers. Customers can also virtually pick clothes to try on and convey their preferences. Accordingly, the brand’s stylists find similar items in their inventory and recommend them to customers for repeat purchases",
               
            },
            {
                sidehead: " Inventory Management and Demand Forecasting: ",
                content:"Stocking high-demand products in sufficient quantities is business-critical for retailers to meet customer needs. In this situation, retailers can leverage generative AI to analyze historical sales data, seasonal trends, and external factors like weather or economic changes to make accurate demand forecasts.",
                content1:"It can also detect supply chain anomalies, assess supplier risks, forecast transportation and routing delays, and reduce overstock or stockouts to improve operational efficiency. Also, retailers can optimize stock levels, minimize waste, and ensure products are readily available when customers need them. Leading e-commerce giants use generative AI to automate demand forecasting, optimize stock levels, provide real-time customer assistance, and streamline supply chain management processes.",
            },
            {
                sidehead: " Product Design and Innovation: ",
                content:"Instead of manually researching market demands and trend reports, retailers can utilize generative AI to predict product demands and analyze customer sentiments. Both mass-market fashion brands and luxury retailers now rely on AI algorithms to generate fresh product ideas, test prototypes, and optimize designs. Moreover, generative AI also allows creative designers to play around with multiple product variations, styles and looks so they can develop expansive samples and signature products for their brands.",
                button:"Speak to our AI leader and unpack how Generative AI can advance your Retail business. Book your discovery call now!",
                content1:"Leading fashion brands, beauty products, wearables, and eyewear brands extensively use generative AI to innovate their product catalogs. Brands like Lenskart and Sephora use AI-powered chatbots to personalize product innovations based on customers’ facial features, skin tone, hair texture, and other factors.",
            },
            {
                sidehead: " Automated Content Generation: ",
                content:"Content creation is a necessary evil inevitable for retail success, but it consumes time and resources. That’s why generative AI comes to the rescue by automating content generation like product descriptions, social media posts, sales collaterals, and marketing copies. Gen AI can generate search-engine-optimized (SEO) content for increased brand awareness and online discoverability. It can help retail organizations optimize their websites and user interfaces for enhanced customer experience and easy navigation.",
                content1:"That, in turn, drives more relevant web traffic to their websites, increases lead-to-conversion rates, and improves brand perception for a positive brand image. B2C marketers say AI/ML helps ideate their marketing content, generate copies, images, videos, and ideas, and analyze customer engagement to optimize and strengthen their marketing campaigns.",
            },
            {  
                sidehead: "Dynamic Pricing Strategies:",  
                content: "Pricing products optimally is a complex task, involving multiple factors like product demand, brand positioning, competition, and market trends. Generative AI can analyze historical sales data and market conditions to forecast demand and suggest dynamic pricing strategies.",  
                content1: "It can analyze large datasets from social media, online forums, customer reviews, and other sources to identify emerging trends and customer sentiments. Using these insights, retailers can set prices that maximize profits, meet evolving customer demands, and give them a competitive edge.",  
                content2: "One of the world’s leading retail giants uses generative AI to implement effective price intelligence and change prices frequently across its vast product catalogs. It can forecast product demand, sales trends, and real-time consumer sentiments to offer price drops, festive discounts, and rewards to boost sales."  
            },  
            {  
                sidehead: " Remarketing and Retargeting:",  
                content: "Generative AI analyzes customers’ past purchases, browsing history, and preferences to nurture them with personalized marketing campaigns like digital ads, emails, offers, and discounts.",  
                content1: "It can predict which promotional content will resonate the most with a customer segment and automate customer engagement through in-app reminders, pop-up notifications, SMS marketing, and sales calls. That way retailers can reduce cart abandonments and lead dropouts while increasing customer lifetime value and sales.",  
                content2: "70% of marketers use remarketing ads to target 97% of prospective customers who leave their websites and never return. Interestingly, almost 70% of retargeted customers complete their purchases on a retailer’s website, increasing revenue by 40%. Also, generative AI can assist retailers in identifying suitable influencers and brand partnerships by analyzing social media data. It can match social media and digital influencers with the brand's target audience and values so retailers can leverage influencer marketing to advance brand visibility and reach new customer segments."  
            },  
            {  
                sidehead: "Customer Service Automation:",  
                content: "Large language models (LLM), conversational AI, and AI-powered chatbots can automate customer support thus retail brands can serve their customers and website visitors around the clock. They can converse with customers in a humanized way, provide tailored answers to customer queries, guide them through the sales process, and analyze sentiments from customer feedback.",  
                content1: "Also, generative AI can attract potential customers through compelling marketing videos, images, and advertisements and nurture leads through personalized conversations. It can address customer grievances promptly and help retailers recommend tailored products across various touch points like websites, social media, and emails. That way retailers can enhance customer journeys, increase conversion rates, maximize sales, and maintain a positive brand reputation." ,
                content2:"For instance, eBay uses an AI-powered chatbot to engage with customers through text, images, and product videos that align with their searches. The bot also converses with them to guide their shopping journey and offer tailored suggestions for enhanced customer experience.",
            },  
            {  
                sidehead: "Fraud Detection and Security:",  
                content: "Retail organizations face significant challenges concerning security and fraud prevention. Online retailers and e-commerce platforms lost over $41 billion globally in 2022 due to payment fraud and unauthorized intrusions. Here, Generative AI can help detect and prevent fraudulent activities by analyzing transactional data and identifying suspicious patterns. These algorithms continuously learn from new data and adapt to emerging fraudulent trends, improving their accuracy and safeguarding the retail business from potential threats.",  
                content2: "Moreover, generative AI can detect unknown fraud patterns, mitigating potential risks before they escalate. It can fortify security measures through AI-powered authentication systems to help retailers protect sensitive customer information and ensure safe and secure transactions. That way, retailers can build customer trust, maintain their brand reputation, and safeguard financial assets from potential threats and malicious invasions. Retailers can use generative AI for prescriptive analytics and fraud detection at their brick-and-mortar stores. It can detect employee theft, identity theft, and false returns while suggesting decisions about the next-best actions."  
            }  
        ]
    },
    {
        "id": "heading3",
        "title": "Now the real question is where do you start and how do you implement generative AI? ",
        description: "Deploying AI and ML tech stacks to automate your retail processes requires robust infrastructure, a data-driven mindset during the model development phase, and cognitive engagement when systems work autonomously.",  
        description1: "Partner with Amnet Digital for end-to-end AI implementation and management, from statistical data analysis to anomaly detection. We assist in rapid data aggregation from various sources, get actionable business insights, build hyper-personalized chatbots, email screening & automating, unpack customer behavior, deploy intelligent chatbots and virtual assistants, and predict future demand from patterns, trends, and seasonality.",  
        description2: "Our comprehensive Gen AI services also aid in customer segmentation for personalized marketing and product recommendations, logistics and inventory optimization, and social media analytics to understand customer sentiment and brand perception.",  
        description3: "This way, we help retailers position themselves as pioneers in the ever-evolving retail landscape and pave the way for their sustained growth, increased customer satisfaction, and competitive advantage."  
    },
];




const Generativeai = () => {
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
                <title>10 ways how Gen AI has a positive impact on Retail</title>
                <meta name="title" content="10 ways how Generative AI has a positive impact on Retail Organizations" />
                <meta name="description" content="Blog - Generative AI is revolutionizing retail by enhancing business outcomes and accelerating growth. Explore its potential and leverage our expertise to elevate your retail strategy!" />
                <meta name="keywords" content="Generative AI in Retail, Impact of AI in Retail, Retail Data Analysis, AI for Retail, AI sales Predictions, Retail Automation, Retail AI trends, AI for Fraud Detection in Retail, Chatbots in Retail, Retail Industry AI Trends, AI-Driven Customer Insights, Impact of AI on Retail." />
            </Helmet>
        <div className="scroll-class">
            <div class="background-container bg-container-generative">
                <div class="centered-text">
                    <h1>November 8, 2023</h1>
                    <p>10 ways how Generative AI has a positive impact on Retail organizations</p>
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
                                {heading.description4 & <p>{heading.description4}</p>}
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
                    {Insightdata.generativedetails.map((list) => {
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

export default Generativeai;