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
        description:"If you want to make faster supply chain planning decisions and stay ahead of the business competition, you require strategic decision-making backed by data-driven demand forecasting insights. One such critical aspect that fuels success and drives growth is demand forecasting. In today’s customer-first strategic approach times, businesses across industries rely on demand forecasting methods to clearly understand future customer product needs, customer historical data, buying patterns, market trends, customer preferences, and sales expectations.",
        description1:"Make faster supply chain planning decisions with actionable Demand Forecasting insights.",
        description2:"Demand forecasting is the process of predicting future customer demand for a product or service. It involves analyzing historical sales data, market trends, and various influencing factors to project sales volumes accurately. By implementing effective demand forecasting and planning strategies, businesses can optimize their sales operations, enhance inventory management, and make informed decisions to meet customer demands efficiently.",
        description3:"Accurate demand forecasting is the backbone of sales optimization and business strategic planning. By accurately predicting customer demand, companies can ensure that they have the right amount of products or services available at the right time, avoiding stockouts or excess inventory. This improves customer satisfaction and optimizes costs and resource allocation, ultimately leading to higher profitability.",
    },
    {
        "id": "heading2",
        "title": "What is Demand Forecasting?",
        description:"Demand forecasting is a strategic process used by businesses to predict future demand for their products or services. It involves analyzing historical data, market trends, customer behavior, and other relevant factors to estimate the number of goods or services that customers are likely to purchase within a specific time frame.",
        description1:"The significance of demand forecasting methods in business cannot be overstated. It serves as a guiding compass, steering businesses in the right direction to make informed decisions and allocate resources effectively. Accurate demand forecasting empowers companies to plan production, manage inventory levels, optimize supply chains, and tailor marketing and sales strategies to meet anticipated customer demand.",
        heading1:"Benefits of Accurate Demand Forecasting for Sales Improvement",
        description4:"Accurate demand forecasting brings an array of benefits that directly impact sales improvement and overall business success:",
        "orderedlist": [
            {
                "sidehead": " Inventory Optimization:",
                "content": "Demand forecasting allows businesses to optimize their inventory levels by ensuring that the right amount of products is available when customers need them. This minimizes excess inventory costs and reduces the risk of stockouts, leading to higher sales and improved customer satisfaction."
              },
              {
                "sidehead": " Efficient Resource Allocation:",
                "content": "Forecasting customer demand enables businesses to allocate their resources efficiently. From production capacities to workforce scheduling and marketing budgets, businesses can align their resources with the expected demand, avoiding wasteful expenditures and maximizing sales opportunities."
              },
              {
                "sidehead": " Market Expansion:",
                "content": "By identifying trends and opportunities through demand forecasting, businesses can strategically expand into new markets and territories, targeting areas with potentially high demand for their products or services."
              },
              {
                "sidehead": " Sales and Marketing Strategies:",
                "content": "Demand forecasting provides valuable insights into customer preferences and buying patterns. Armed with this knowledge, businesses can tailor their sales and marketing strategies to reach target audiences effectively, enhance brand visibility, and drive sales growth."
              },
              {
                "sidehead": " Improved Customer Satisfaction:",
                "content": "Meeting customer demand promptly and consistently leads to enhanced customer satisfaction. Satisfied customers are more likely to become repeat buyers and advocates for the brand, fostering long-term customer loyalty and further boosting sales."
              }
        ]
    },
    {
        "id": "heading3",
        "title": "Key Factors Influencing Demand Forecasting",
        "description": "Several factors influence demand forecasting, and understanding these variables is essential for accurate predictions:",
        "orderedlist": [
          {
            "sidehead": " Historical Sales Data:",
            "content": "Past sales data serves as the foundation for demand forecasting. Analyzing historical trends helps identify seasonality, cyclical patterns, and other recurring fluctuations in demand."
          },
          {
            "sidehead": " Market Trends and Industry Changes:",
            "content": "Monitoring market trends, economic conditions, and industry developments enables businesses to anticipate shifts in consumer behavior and adapt their forecasting models accordingly."
          },
          {
            "sidehead": " External Factors:",
            "content": "Demand forecasting must take into account external factors such as weather conditions, geopolitical events, or regulatory changes, as these can significantly impact consumer demand."
          },
          {
            "sidehead": " Marketing and Promotional Activities:",
            "content": "The effectiveness of marketing campaigns and promotional activities can influence customer demand. Businesses should consider the impact of marketing efforts on demand forecasting to plan sales strategies effectively."
          },
          {
            "sidehead": " Customer Feedback and Surveys:",
            "content": "Gathering customer feedback and conducting surveys provide valuable insights into customer preferences, allowing businesses to fine-tune their forecasts to match customer expectations better."
          }
        ]
      },
      {
        "id": "heading4",
        "title": "Demand Forecasting Methods and Techniques",
        "description": "Accurate demand forecasting is essential for businesses to make informed decisions and optimize their sales strategies. Various methods and techniques are employed to predict customer demand, each offering distinct advantages and limitations. This section will explore some of the most commonly used demand forecasting methods.",
        "orderedlist": [
          {
            "sidehead": " Time Series Analysis:",
            "content": "Time series analysis is a classic and widely used method for demand forecasting. It involves analyzing historical sales data over a specific period to identify patterns, trends, and seasonality. By extrapolating these patterns into the future, businesses can make predictions about future demand."
          },
          {
            "sidehead": " Market Research and Customer Surveys:",
            "content": "Market research and customer surveys are valuable tools for demand forecasting. Conducting surveys and collecting feedback from customers can provide insights into their preferences, needs, and purchasing behavior. By understanding customer sentiments, businesses can gauge potential demand for new products or variations of existing offerings.",
            button:"Predict your sales volume & demand trends. Book your free demand forecasting assessment!",
        },
          {
            "sidehead": " Machine Learning and AI-driven Forecasting:",
            "content": "With advancements in technology, machine learning, and AI-driven forecasting have become increasingly popular for demand forecasting. These methods leverage algorithms to analyze vast amounts of historical data, market trends, and other relevant factors to make accurate predictions."
          },
          {
            "sidehead": " Sales Team Input and Collaborative Forecasting:",
            "content": "Incorporating input from the sales team and involving cross-functional collaboration is another approach to demand forecasting. Sales representatives possess valuable insights from direct interactions with customers and can provide qualitative information on customer demand."
          }
        ],
        description5:"Each demand forecasting method offers its unique set of advantages and limitations. Time series analysis is simple and effective for products with stable demand patterns but may struggle to adapt to market changes. Market research and customer surveys provide direct insights into customer preferences but may be time-consuming and not suitable for long-term forecasting. AI-driven forecasting provides accurate predictions and adapts to changing market conditions but may require significant computational resources and expertise. Collaborative forecasting harnesses frontline knowledge but may be limited by subjective input and potential biases."
      },
      {
        "id": "heading5",
        "title": "Aligning Forecasting with Sales Planning",
        "description": "Demand forecasting serves as the compass that guides businesses in their sales planning endeavors. By aligning demand forecasting methods with sales planning strategies, companies can optimize their inventory management, streamline production, and create efficient supply chain operations. This section will explore how businesses can seamlessly integrate demand forecasting into their sales planning processes for enhanced performance and increased profitability."
      },
      {
        "id": "heading6",
        "title": "Linking Demand Forecasting with Inventory Management",
        "description": "Demand forecasting plays a critical role in inventory management by helping businesses maintain optimal stock levels. By accurately predicting future demand, businesses can avoid the pitfalls of overstocking, which ties up valuable capital and incurs additional storage costs. Conversely, understocking can lead to stockouts and missed sales opportunities.",
         heading1:"By aligning demand forecasting with inventory management, businesses can:",
         "orderedlist":[
            {
                "sidehead": "Reduce Holding Costs",
                "content": "Keeping excess inventory incurs holding costs such as storage fees, insurance, and depreciation. Demand forecasting ensures that businesses maintain lean inventories, minimizing holding costs and optimizing working capital."
              },
              {
                "sidehead": "Improve Order Fulfillment",
                "content": "Meeting customer demand promptly enhances order fulfillment rates, resulting in higher customer satisfaction and improved brand reputation."
              },
              {
                "sidehead": "Minimize Stockouts",
                "content": "By accurately predicting demand, businesses can avoid stockouts and ensure products are available when customers need them, preventing lost sales opportunities."
              }
         ]
    },
    {
        "id": "heading7",
        "title": "The Impact of Demand Forecasting on Production and Supply Chain Management",
        "description": "Demand forecasting significantly influences production planning and supply chain management. By integrating demand forecasts into production planning, businesses can optimize production schedules, minimize production bottlenecks, and efficiently allocate resources.",
        "heading1": "Supply chain management benefits from demand forecasting methods by enabling businesses to:",
        "orderedlist": [
          {
            "sidehead": "Enhance Supplier Collaboration",
            "content": "Accurate demand forecasts enable businesses to collaborate effectively with suppliers, ensuring timely deliveries and preventing supply chain disruptions."
          },
          {
            "sidehead": "Reduce Lead Times",
            "content": "With precise demand forecasts, businesses can streamline supply chain processes, reducing lead times and enhancing overall operational efficiency."
          },
          {
            "sidehead": "Mitigate Bullwhip Effect",
            "content": "Demand forecasting helps businesses anticipate demand fluctuations, reducing the risk of the bullwhip effect—a phenomenon where demand variability magnifies as it moves upstream in the supply chain."
          }
        ]
      },
      {
        "id": "heading8",
        "title": "Balancing Sales Promotions and Discounts with Forecasted Demand",
        "description": "Sales promotions and discounts are common strategies employed to drive customer engagement and boost sales. However, implementing these strategies without considering forecasted demand can lead to significant challenges such as stockouts, excess inventory, and revenue loss.",
        "heading1": "By aligning sales promotions and discounts with forecasted demand, businesses can:",
        "orderedlist": [
          {
            "sidehead": "Optimize Inventory Levels",
            "content": "Sales promotions can result in a surge in demand. Accurate forecasting helps businesses plan inventory levels accordingly, ensuring sufficient stock to meet increased demand."
          },
          {
            "sidehead": "Plan Marketing Strategies",
            "content": "Forecasted demand allows businesses to time sales promotions strategically, maximizing their impact and avoiding the risk of offering discounts during periods of high demand."
          },
          {
            "sidehead": "Mitigate Inventory Write-offs",
            "content": "Aligning sales promotions with forecasted demand reduces the likelihood of overstocking, preventing inventory write-offs due to unsold items."
          }
        ]
      },
      {
        "id": "heading9",
        "title": "Collaborative Planning to Optimize Sales and Operations",
        "description": "Collaborative planning brings together different departments, such as sales, marketing, and operations, to work collectively toward common goals. Integrating demand forecasting methods into collaborative planning enables businesses to leverage cross-functional expertise and insights for more accurate forecasts and better decision-making.",
        "heading1": "Through collaborative planning, businesses can:",
        "orderedlist": [
          {
            "sidehead": "Gather Diverse Perspectives",
            "content": "Involving various stakeholders fosters a comprehensive understanding of market dynamics, customer behavior, and external factors, leading to more accurate forecasts."
          },
          {
            "sidehead": "Enhance Forecast Accuracy",
            "content": "Sales representatives possess frontline knowledge about customer preferences and behaviors. Collaborative planning allows sales teams to share this information, leading to more reliable forecasts."
          },
          {
            "sidehead": "Optimize Resource Allocation",
            "content": "Collaborative planning ensures that resources are allocated efficiently to support forecasted sales, preventing resource shortages or wasteful expenditures."
          }
        ],
        description5:"Incorporating effective demand forecasting methods is the key to unlocking the untapped potential for businesses aiming to uplift their sales and optimize operations. Throughout this blog, we have explored the significance of demand forecasting and its direct impact on sales improvement, inventory management, production planning, and supply chain operations. Integrating demand forecasting with sales planning enables businesses to make informed decisions, allocate resources efficiently, and achieve customer-centric operational excellence. Through accurate demand forecasting, businesses can optimize inventory levels, streamline production schedules, and ensure timely delivery, resulting in heightened customer satisfaction and enhanced brand loyalty.",
      }
        
      
];




const ForeCasting = () => {
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
                <title>Foster Supply Chain Planning Decisions with Actionable Demand Forecasting Insights</title>
                <meta name="title" content="Foster Supply Chain Planning Decisions with Actionable Demand Forecasting Insights" />
                <meta name="description" content="Master demand forecasting methods for sales optimization. Explore techniques, technologies & strategies, and uplift your sales performance." />
                <meta name="keywords" content="demand planning services, demand forecasting services provider, sales performance dashboards, optimize inventory operations, demand forecasting methods, products demand forecasting dashboards, supply chain planning decisions, demand forecasting insights" />
            </Helmet>
        <div className="scroll-class">
            <div class="background-container bg-container-forecast">
                <div class="centered-text">
                    <h1>November 2, 2023</h1>
                    <p>Foster Supply Chain Planning Decisions with Actionable Demand Forecasting Insights</p>
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
                    {Insightdata.forecastdetails.map((list) => {
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

export default ForeCasting;