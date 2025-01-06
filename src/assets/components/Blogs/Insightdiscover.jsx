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
        title: "AI for Retail - Discover how AI can revolutionize the retail industry and help businesses increase sales, improve customer experience, and optimize operations",
        heading1: "Unlocking the Potential of AI for Retail Businesses",
        description2: "The world of retail is constantly evolving, and businesses must keep up with the latest technology to stay competitive. One of the most promising advancements in recent years has been the rise of artificial intelligence. This powerful technology has the potential to transform retail operations and improve customer experiences in ways that were previously impossible. In this article, we'll explore the role of AI in retail and how businesses can unlock its potential to stay ahead in the ever-changing retail landscape",
    },
    {
        id: "heading2",
        "title": "Understanding the Role of AI in Retail",
        "description": "AI, or Artificial Intelligence, is a rapidly growing technology that has the potential to revolutionize the retail industry. It refers to computer systems that are designed to perform tasks that typically require human intelligence, such as perception, reasoning, and learning. In the context of retail, AI can be used to process and analyze vast amounts of data to identify patterns and insights that humans would struggle to recognize. This can help retailers make better decisions, improve efficiencies, and enhance the overall customer experience.",
        description10: "“Fact.MR, a market research and competitive intelligence provider, reveals that the global artificial intelligence in the retail market is set to achieve a valuation of US$ 85 billion by 2033, expanding at a noteworthy 30.3% CAGR from 2023 to 2033.”"

    },
    {
        id: "heading3",
        "title": "The Evolution of AI in Retail",
        "description": "The use of AI in retail is not a new concept. Retailers have been experimenting with AI-powered technologies for decades. However, recent developments in machine learning and natural language processing have made it easier and more cost-effective for retailers to implement AI solutions. This has led to a surge of interest in AI across the retail industry.",
        "description1": "One of the earliest examples of AI in retail was the barcode scanner, which was introduced in the 1970s. This technology allowed retailers to track inventory and sales data with greater accuracy and efficiency. Since then, AI has been used in a variety of applications in the retail industry, from personalized marketing to supply chain optimization.",
        heading1: "Key AI Technologies for Retail Businesses",
        description2: "There are several key AI technologies that retailers can use to improve their supply chain management and logistical operations:",
        orderedlist: [
            {
                "sidehead": "Machine Learning",
                "content": "This technology allows computer systems to automatically learn and improve from experience without being explicitly programmed. This can help retailers identify patterns and insights in data that would be difficult for humans to detect. For example, machine learning algorithms can be used to analyze customer data to identify patterns in purchasing behavior, allowing retailers to better understand their customers and tailor their offerings accordingly."
            },
            {
                "sidehead": "Natural Language Processing",
                "content": "This technology enables computers to understand and interpret human language. Retailers can use this to build AI-powered chatbots and virtual assistants that can handle customer inquiries and provide personalized recommendations. For example, a customer might ask a chatbot for recommendations on a particular product, and the chatbot could use natural language processing to understand the customer's preferences and provide relevant recommendations."
            },
            {
                "sidehead": "Computer Vision",
                "content": "This technology enables computers to interpret and understand visual data, such as images and videos. Retailers can use this to analyze customer behavior in-store and improve merchandising efforts. For example, computer vision algorithms can be used to analyze customer traffic patterns in a store, allowing retailers to optimize store layouts and improve the shopping experience."
            }
        ],
        btntext: "  On-Demand Webinar - See how leading Retailers are embracing AI & Analytics to win in 2023 -",
        watchnow: "WATCH NOW"

    },
    {
        id: "heading6",
        title: "Benefits of AI Adoption in Retail",
        heading1: "Adopting AI technologies can bring several benefits to retail businesses:",
        orderedlist: [
            {
                "sidehead": "Increased Efficiency",
                "content": "AI technologies can automate repetitive and time-consuming tasks, freeing up employees to focus on higher-level activities. For example, AI-powered chatbots can handle customer inquiries, reducing the workload on customer service representatives."
            },

            {
                "sidehead": "Improved Personalization",
                "content": "AI technologies can help retailers provide customers with personalized recommendations and marketing messages based on their past behavior and preferences. This can help retailers build stronger relationships with their customers and increase customer loyalty."
            },

            {
                "sidehead": "Better Decision-Making",
                "content": "AI technologies can analyze vast amounts of data and provide insights that would be difficult for humans to uncover. This can help retailers make better decisions and improve their bottom line. For example, retailers can use AI to analyze sales data and identify trends and patterns, allowing them to make more informed decisions about inventory management and pricing strategies."
            },

            {
                "sidehead": "Enhancing Customer Experience with AI",
                "content": "One of the most compelling use cases for AI in retail is to enhance the customer experience. By leveraging AI technologies, retailers can provide personalized experiences that are tailored to each customer's unique needs and preferences."
            },

            {
                "sidehead": "Personalized Recommendations and Marketing",
                "content": "One of the most common ways retailers use AI to enhance the customer experience is by providing personalized recommendations and marketing messages. By analyzing customer data, retailers can identify patterns and trends that can inform personalized product recommendations and marketing messages. This can improve customer engagement and drive sales."
            },

            {
                "sidehead": "AI-Powered Chatbots and Virtual Assistants",
                "content": "Another way retailers use AI to enhance the customer experience is by deploying AI-powered chatbots and virtual assistants. These digital assistants can handle customer inquiries, provide product recommendations, and even complete sales transactions. By automating these tasks, retailers can provide faster and more personalized service to customers."
            },

            {
                "sidehead": "Streamlining In-Store Experiences",
                "content": "AI can also be used to improve the in-store experience for customers. For example, retailers can use computer vision technologies to analyze customer behavior and optimize product placements and merchandising efforts. By understanding how customers move through the store and interact with products, retailers can make informed decisions about product placement and promotions.",
                "content1": "In addition, retailers can deploy AI-powered self-checkout systems to reduce wait times and improve the overall shopping experience. These systems can use computer vision and machine learning to scan products and process transactions quickly and accurately, allowing customers to complete their purchases quickly and easily.",
                "content2": "Overall, AI has the potential to revolutionize the retail industry by enhancing the customer experience and improving operational efficiency. By leveraging AI technologies, retailers can provide personalized and efficient service to customers, ultimately driving sales and improving customer loyalty.",
                image: image1,
            },
            {
                "sidehead": "Optimizing Inventory Management and Supply Chain",
                "content": "Inventory management and supply chain optimization are critical areas for retailers to ensure that they can meet customer demand and maintain profitability. One of the most effective ways to achieve these goals is by leveraging artificial intelligence technologies.",
                "content1": "AI can help retailers streamline their operations and ensure that they always have the right products in stock. Here are some ways AI can benefit retailers in inventory management and supply chain optimization:"
            },
            {
                "sidehead": "AI-Driven Demand Forecasting",
                "content": "Demand forecasting is one of the most impactful use cases for AI in inventory management. AI technologies can analyze historical sales data, market trends, and other factors to provide accurate demand forecasts. This helps retailers optimize their inventory levels and reduce waste.",
                "content1": "For example, if AI predicts that a certain product will experience a surge in demand, retailers can increase their inventory levels to meet that demand. On the other hand, if AI predicts that a product will experience a decline in demand, retailers can reduce their inventory levels to avoid overstocking."
            },
            {
                "sidehead": "Automated Replenishment and Stock Management",
                "content": "AI can also help retailers automate replenishment and stock management processes. Using Machine Learning algorithms to analyze demand data, retailers can automatically reorder products when stock levels are low. This reduces the risk of stockouts and missed sales opportunities.",
                content1: "For instance, if a retailer has a product that sells quickly, AI can automatically reorder the product when the stock level reaches a certain threshold. This ensures that the retailer always has enough stock to meet customer demand."
            },
            {
                "sidehead": "Improving Supplier Collaboration",
                "content": "AI can also help retailers improve collaboration with their suppliers. By providing real-time demand data to suppliers, retailers can work together to optimize inventory levels and reduce waste across the supply chain.",
                "content1": "For example, if a retailer shares demand data with a supplier, the supplier can adjust their production levels to meet the retailer's needs. This helps to avoid overproduction and reduces the risk of excess inventory.",
                "content2": "In conclusion, AI technologies offer significant benefits to retailers in inventory management and supply chain optimization. By leveraging AI, retailers can improve their operations, reduce waste, and meet customer demand more effectively."
            },
            {
                "sidehead": "Boosting Sales and Revenue with AI",
                "content": "Ultimately, the goal of AI in retail is to help businesses increase sales and revenue. By leveraging AI technologies, retailers can identify new selling opportunities, optimize pricing strategies, and improve merchandising efforts."
            },
            {
                "sidehead": "Dynamic Pricing and Promotions",
                "content": "One of the most impactful ways AI can increase sales and revenue is by enabling dynamic pricing and promotions. By analyzing customer data and market trends, retailers can determine the optimal price for each product in real-time, maximizing profits and minimizing surplus inventory."
            },
            {
                "sidehead": "AI-Enabled Visual Merchandising",
                "content": "Another way retailers use AI to boost sales is by optimizing their visual merchandising efforts. By analyzing customer data, retailers can determine which products to showcase on end caps and other prominent displays, improving cross-selling and upselling opportunities."
            }, {
                sidehead: "Cross-Selling and Upselling Opportunities",
                content: "Finally, AI can help retailers identify new cross-selling and upselling opportunities. By analyzing customer purchase behavior and preferences, retailers can recommend complementary products that the customer is likely to be interested in, improving the overall customer experience, and driving sales."
            }
        ]
    },
    {
        id: "heading7",
        title: "Quick Use Cases of AI in Retail",
        useCases: [
       "1.Adjust products' prices to present the best offers to drive sales and attract new customers.",
         "2.In-store assistance for your customers in the shopping process and also assist your staff.",
         "3.Conversational AI-powered chatbots to achieve a higher level of customer service.",
        "4.Stores can become cashier-free to reduce operational expenses and human staff.",
        "5.Products price prediction based on seasonal trends, demand, and new launches to build customer loyalty.",
        "6.Supply chain management can be paired with AI for restocking and stock forecasting & replenishment to reduce in-store shelf gaps.",
        "7.Machine Learning for product recognition, categorization, and classification of over a million items with relevant tagging and pricing.",
        "8.Unpack customer behavior with AI/ML engines to analyze individual customer psychology and emotions to foster purchases."
        ]
    },

    {
        id: "heading8",
        "title": "Conclusion",
        description:"Going forward, adopting AI for retail businesses will no longer be an option but leveraging and integrating artificial intelligence across organizational operations can help stay ahead of the game. AI is transforming the retail industry and businesses that fail to adopt this technology risk falling behind their competition. By leveraging AI technologies, retailers can improve efficiencies, enhance customer experiences, and boost sales and revenue consistently. The key is to understand the role of AI technology in the retail industry and identify use cases that will have the most impact on your business. With the right strategy and implementation, AI can unlock a wealth of potential for retail businesses of all sizes.",
    },
  


];




const Insightdiscover = () => {
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
        <title>Discover how AI can revolutionize the retail industry  | Amnet Digital</title>
        <meta name="description" content="Uncover the potential of AI in revolutionizing the retail industry. Dive into our comprehensive blog post to discover how AI is 
         reshaping the retail sector." />
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
                                {heading.description2 && <p>{heading.description2}</p>}
                                {heading.description3 && <p>{heading.description3}</p>}
                                {heading.description10 && <p>{heading.description10}</p>}
                                {heading.heading2 && <h3>{heading.heading2}</h3>}
                                {heading.heading3 && <h2>{heading.heading3}</h2>}
                                {heading.question && (
                                    <h5>
                                        <span className="question-style">{heading.question}</span>
                                        {heading.details && <span className="fs-14 fw-300">{heading.details}</span>}
                                    </h5>
                                )}
                                {heading.image && (
                                    <img src={heading.image} className='w-100' />

                                )}
                                {heading.useCases && (
                                    <ol>
                                        {heading.useCases.map((caseItem, idx) => (
                                            <li className='fs-14' key={idx}>{caseItem}</li>
                                        ))}
                                    </ol>
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

export default Insightdiscover;