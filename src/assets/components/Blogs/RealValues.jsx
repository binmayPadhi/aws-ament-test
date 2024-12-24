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
import image1 from "../../images/Resources-page/SupplyChainimg.png";
import image2 from "../../images/Resources-page/customer_predictionimg.png";
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
        title:"The Real Value AI Can Bring to Your Retail Business",
         "description": "Did you know? Gartner predicts that by 2025, 80% of customer interactions will be managed by AI technologies, leading to more personalized experiences. In today's fast-paced and highly competitive retail landscape, simply offering high-quality products and exceptional customer service is no longer enough to stay ahead of the competition. To thrive in this digital era, retail businesses need to leverage advanced technologies that can provide them with invaluable insights, facilitate data-driven decision-making, and enhance the overall shopping experience.",
         "description1": "One such groundbreaking technology that has revolutionized the retail industry is Artificial Intelligence (AI). AI is transforming the way retailers operate helping them gain a deeper understanding of their customers, optimize operations, and drive revenue growth. By harnessing the power of AI, retail businesses can unlock a wealth of opportunities and stay ahead in a rapidly evolving market.",
         "description2": "As a leading AI, Data, & Analytics solutions company, we specialize in helping businesses leverage the transformative potential of AI in the retail sector. Our expertise lies in assisting retail businesses in making data-driven decisions and implementing AI technologies to gain a competitive edge. In this blog post, we will outline the real value AI can bring to your retail business and how it can revolutionize your retail business operations in an increasingly digital world.",
         "description3": "From understanding customer behavior to optimizing inventory management, and personalized shopping experiences to predictive analytics, and efficient operations to fraud detection, we will delve into various aspects of AI adoption in retail. So, let's dive in and discover the immense possibilities AI can unlock for your retail business.",
       orderedlist:[
             {
              "sidehead": " Enhanced Customer Understanding",
              "content": "Did you know? One of the pioneers in AI adoption, Amazon uses AI algorithms extensively in its recommendation engine. By analyzing customer browsing and purchase history, as well as billions of data points, Amazon offers personalized product recommendations that drive customer engagement and increase sales.",
              "content1": "The same goes for Nike as the brand leverages AI in its membership program. By analyzing customer data, including purchase history, browsing behavior, and fitness activities, the organization provides personalized product recommendations, tailored promotions, and customized training plans to its members, enhancing their overall experience and fostering loyalty.",
              "content2": "One of the key benefits of AI in the retail industry is its ability to provide businesses with a comprehensive understanding of their customers. By leveraging AI-powered algorithms, retailers can analyze massive volumes of customer data, including purchase history, browsing behavior, and social media interactions, to identify patterns and preferences.",
              "content3": "This valuable information empowers retailers to segment their customer base, personalize marketing campaigns, and deliver targeted product recommendations. By tailoring the shopping experience to individual customers, retailers can increase customer satisfaction and loyalty, resulting in higher conversion rates and repeat business."
            },
         {
              "sidehead": " Predictive Analytics and Demand Forecasting",
              "content": "AI-powered predictive analytics and demand forecasting are game-changers for the retail industry. Traditional methods of demand forecasting often rely on historical sales data and manual analysis, which can be time-consuming and prone to human error. AI, on the other hand, can analyze vast amounts of data from multiple sources in real-time, enabling retailers to accurately predict future customer demand.",
              "content1": "By leveraging AI algorithms, retailers can analyze historical sales data, market trends, customer behavior patterns, and even external factors such as weather conditions, holidays, or promotional events. This comprehensive analysis enables retailers to generate highly accurate demand forecasts, allowing them to make informed decisions about inventory management, production planning, and resource allocation.",
              "content2": "With AI-powered demand forecasting, retailers can optimize their supply chain efficiency by ensuring they have the right products available at the right time and in the right quantities. By accurately predicting future demand, retailers can reduce the risk of stockouts, minimize excess inventory, and optimize their ordering and replenishment processes. This not only improves operational efficiency but also helps in maximizing profitability by reducing carrying costs and minimizing wastage."
            },
         {
              "sidehead": " Dynamic Pricing and Competitor Analysis",
              "content": "AI-powered dynamic pricing and competitor analysis have revolutionized the way retailers approach pricing strategies and stay ahead of the competition. Traditionally, retailers would set static prices for their products, which may not reflect real-time market conditions or changes in customer demand. However, with AI-driven dynamic pricing, retailers can optimize their pricing strategies in real time based on various factors.",
              "content1": "AI algorithms analyze a multitude of data points, including market conditions, competitor pricing, historical sales data, customer behavior, and even external factors such as demand fluctuations or seasonality. By continuously monitoring and processing this data, AI can automatically adjust prices to maximize revenue and profitability while remaining competitive in the market.",
              "content2": "Dynamic pricing allows retailers to set prices that reflect changes in demand and supply, optimize profit margins, and respond quickly to market trends. For example, during times of high demand, AI algorithms can increase prices to capture additional profit, while during periods of low demand or to drive sales volume, prices can be dynamically adjusted downward."
            },
          {
              "sidehead": "Inventory Optimization and Supply Chain Efficiency",
              "content": "Retail businesses of all sizes can leverage AI-powered predictive analytics to optimize their inventory management and supply chain. By analyzing historical sales data, weather patterns, local events, and social media trends, brands can forecast demand accurately and ensure that each store has the right amount of inventory, minimizing waste and optimizing customer satisfaction.",
              "content1": "Managing inventory effectively is a critical aspect of retail success. AI-driven inventory optimization helps retailers strike the right balance between stocking enough products to meet customer demand without incurring excessive costs. By analyzing historical sales data, demand patterns, and external factors like promotions or seasonal trends, AI algorithms can generate accurate demand forecasts.",
              "content2": "This allows retailers to optimize their inventory levels, reduce stockouts and overstocking, and minimize storage and holding costs. AI can also improve supply chain efficiency by automating processes like procurement, warehousing, and logistics. This leads to streamlined operations, reduced lead times, and enhanced collaboration with suppliers.",
              image: image1
            },
            {
                "sidehead": " Personalized Shopping Experiences",
                "content": "AI can transform the way digital customers shop by offering personalized experiences both in-store and online. For example, physical stores can utilize AI-powered smart mirrors or interactive displays to suggest complementary products, provide personalized styling advice, or offer virtual try-on experiences.",
                "content1": "In e-commerce, AI algorithms can analyze customer behavior, preferences, and browsing patterns to deliver personalized product recommendations and tailored marketing messages. By offering personalized shopping experiences, retailers can create a unique and engaging environment that resonates with their customers, ultimately boosting customer satisfaction, retention, loyalty and driving sales.",
                "content2": "For example, as one of the largest retailers globally, Walmart has been investing in AI technologies to improve its operations. The company uses AI-powered systems for demand forecasting, inventory management, and supply chain optimization. Walmart's AI algorithms analyze historical sales data, market trends, and customer behavior to optimize product availability, reduce waste, and enhance the overall shopping experience."
              },
       {
                "sidehead": " Visual Search and Augmented Reality (AR) Experiences",
                "content": "AI-powered visual search and augmented reality (AR) experiences are transforming the way customers interact with products and make purchasing decisions in the retail industry.",
                "content1": "Visual search technology enables customers to search for products using images rather than text-based queries. By leveraging AI algorithms and image recognition capabilities, visual search allows customers to capture or upload an image of a product they're interested in and find similar or visually related items. This technology revolutionizes the shopping experience by eliminating the need for specific product names or descriptions. Customers can simply take a photo or screenshot of an item they like, and the AI-powered visual search engine will provide relevant product recommendations, enabling seamless discovery and enhancing customer convenience.",
                "content2": "On the other hand, AR experiences offer customers the ability to virtually interact with products in real-world environments. Through the camera view of a smartphone or tablet, AR technology empowers customers to overlay virtual objects onto the physical world, allowing them to envision the look and fit of products in their own spaces before making a purchase.",
                "content3": "By implementing visual search and AR experiences, retailers can enhance customer engagement, boost conversion rates, and reduce product returns. Visual search technology simplifies the product discovery process, enabling customers to find what they're looking for more efficiently and discover visually similar options they might not have considered. This helps retailers increase customer satisfaction and drive more conversions.",
                "content4": "For example, customers can use AR applications to see how furniture will look in their homes, try on virtual clothing items, or test cosmetics virtually. These immersive experiences provide customers with a more realistic and engaging shopping experience, reducing purchase hesitation and enhancing overall satisfaction."
              },
               {
                "sidehead": " Efficient Operations and Fraud Detection",
                "content": "AI can streamline retail operations and improve efficiency across various aspects of the business. For instance, AI-powered chatbots and virtual assistants can handle customer inquiries, provide real-time support, and assist in order tracking, freeing up human resources for more complex tasks.",
                "content1": "Additionally, AI can help detect and prevent fraudulent activities, such as identity theft or credit card fraud, by analyzing transactional data and identifying suspicious patterns. By automating routine tasks and mitigating fraud risks, retailers can enhance operational efficiency, reduce costs, and allocate resources more effectively.",
                "content2": "For example, Adidas, the global sports apparel brand, has integrated AI into various aspects of its business. They leverage AI algorithms for demand forecasting and inventory optimization to ensure their products are available when and where customers need them. Adidas also uses AI-powered chatbots to provide personalized customer support and enhance the shopping experience."
              },
      {
                "sidehead": " Customer Churn Prediction and Retention",
                "content": "Customer churn refers to the loss of customers or their decision to discontinue their relationship with a retail business. Customer retention is a critical aspect of business success, as it costs significantly more to acquire new customers than to retain existing ones. AI plays a crucial role in predicting customer churn and implementing effective retention strategies.",
                "content1": "AI algorithms analyze various customer data points, such as purchase history, browsing behavior, engagement metrics, and customer feedback, to identify patterns and indicators that suggest a customer is at risk of churning. By leveraging this information, retailers can proactively intervene and implement targeted retention measures to retain customers and maximize their lifetime value.",
                "content2": "Predictive models powered by AI can forecast the likelihood of individual customers churning within a specific timeframe. These models take into account various factors, including changes in customer behavior, a decrease in engagement, or the presence of dissatisfaction signals. Retailers can then design personalized retention strategies for at-risk customers, such as offering discounts, tailored promotions, or loyalty rewards to incentivize them to stay.",
                image: image2
            }
          
       ]    
    },
    {
        id:"heading2",
        "title": "Amnet Digital - Your trusted Data, Analytics, & AI consulting partner for retail businesses",
        "description": "When it comes to scaling high in the retail industry and harnessing the power of AI, partnering with a trusted and experienced AI, data, & analytics services partner is crucial. That's where Amnet Digital comes in, assisting retail businesses in making data-driven decisions and unlocking the full potential of AI technologies.",
        "description1": "With a deep understanding of the unique challenges and opportunities that retail businesses face, Amnet offers tailored AI solutions that address specific business needs and drive tangible results. By partnering with Amnet, retail businesses gain access to a team of AI experts who bring a wealth of industry knowledge and technical expertise to the table within no time.",
        "description2": "Our AI solutions empower retail businesses in multiple ways. For instance, by leveraging advanced predictive analytics, we help retailers accurately forecast customer demand, optimize inventory management, and improve supply chain efficiency. This ensures retail businesses can meet customer expectations, minimize stockouts, and maximize profitability.",
        "description3": "We also specialize in implementing cutting-edge technologies such as visual search and augmented reality (AR) experiences. By integrating these technologies into retail platforms, we assist businesses to offer seamless and engaging shopping experiences. Customers can enjoy the convenience of visual search, discovering products effortlessly, while AR experiences enable them to virtually interact with products before making a purchase decision. We ensure retail businesses stay at the forefront of innovation, providing customers with memorable and immersive experiences.",
        "description4": "Additionally, Amnet offers customer churn prediction and retention solutions for retailers. By leveraging AI algorithms, we help retail businesses identify customers at risk of churn and implement personalized retention strategies. This leads to enhanced customer loyalty, reduced churn rates, and increased long-term profitability."
    },
    {
        id:"heading3",
        "title": "Wrapping Up",
        "description": "AI's real value to the retail business is multi-faceted and extends beyond the points mentioned above. By leveraging AI technologies, retailers can enhance customer understanding, optimize pricing and inventory, improve supply chain efficiency, offer personalized experiences, predict customer churn, and more. Embracing AI empowers retailers to make data-driven decisions, stay competitive in a dynamic market, and deliver exceptional customer experiences.",
        "description1": "As a global Data, Analytics & AI solutions company, Amnet Digital is dedicated to helping businesses in the retail industry unlock the full potential of AI to accelerate profitable growth, deliver great customer experiences, streamline operations, advance teams’ productivity, reduce IT costs, minimize down-time, redefine tech-stack, and stay ahead of the curve.",
        "description5": "Contact us today to explore how our AI expertise can help transform your retail business into a data-driven powerhouse - Book your FREE AI assessment now!"
    }
    
    
      
];




const RealValues = () => {
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
        <title> The real value AI can bring to your retail business | Amnet Digital</title>
        <meta name="title" content=" The real value AI can bring to your retail business - Amnet Digital" />
        <meta name="description" content="Discover the power of AI in retail. Learn how AI enhances customer understanding, pricing strategies, inventory management, and more." />
        <meta name="keywords" content="AI in the retail, AI in the retail industry, AI for retail business, AI for retail, retail business, AI for retail, AI technology for retail businesses" />
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
                                               
                                                {response.content1 && <p className="mt-3">{response.content1}</p>}
                                                {response.content2 && <p className="mt-3">{response.content2}</p>}
                                                {response.content3 && <p className="mt-3">{response.content3}</p>}
                                                {response.content4 && <p className="mt-3">{response.content4}</p>}
                                                {response.image && (
                                                    <img src={response.image}  className='w-100'/>
                                                    
                                                )}
                                            </li>
                                        ))}
                                    </ol>
                                )}
                                 {heading.description5 && <p className='fw-bold'>{heading.description5}</p>}
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

export default RealValues;