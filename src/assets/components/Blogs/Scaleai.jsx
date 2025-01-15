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
        title:"",
            "description": "The retail industry has witnessed a transformative shift worldwide, with the integration of cutting-edge technologies like AI, Data, & Analytics and sales best practices. Based on Statista’s statistics, the global retail market generated over $27 trillion in sales in 2022, projected to surpass $30 trillion by 2024.",
            "description1": "Specifically, adopting AI in the retail industry offers immense potential to drive profitable growth, supercharge customer retention, optimize operations, personalize customer experiences, and gain actionable insights. However, scaling AI in the retail industry effectively requires a robust data management strategy. Companies must acquire clean datasets, apply appropriate techniques, track a project's base opportunity value (BOV), reduce technical debts, and adopt hardware innovations to explore new business avenues.",
            "description2": "Let’s dive deeper into how AI transforms the retail industry, the importance of data management in scaling AI initiatives, and the key strategies retailers can adopt to thrive in this dynamic environment.",
          
    },
    {
        id:"heading2",
        "title": "How is AI used in the retail industry?",
        "description": "In this ever changing and challenging business landscape, AI has become the retail’s source of truth to optimize business processes, improve marketing strategies, analyze consumer behavior, and drive profitability.",
        description1:" As Intel says, “AI technologies like machine learning (ML), natural language processing (NLP), and computer vision are revamping the retail sector by transforming brick-and-mortar stores with near-real-time intelligence.",
        "heading1": "Some key applications of AI in the retail industry include ",
        "orderedlist": [
          {
            "sidehead": "Inventory management",
            "content": "AI enables retailers to accurately forecast demand, optimize inventory levels, and streamline supply chain operations by leveraging advanced algorithms and data analytics. With AI-powered solutions, retailers can track inventory in real-time, make data-driven decisions regarding stock replenishment, and ensure the right products are available at the right time.",
            "content1": "Global retail giants are embracing AI-driven robots to patrol their shelves and identify missing items, products to restock, and price tags that need changes. On the AI-powered chatbots to help store visitors locate items and employees monitor the store stock.",
            "content2": "Furthermore, AI-led systems facilitate dynamic pricing and promotions, supplier collaboration, and continuous improvement through machine learning. Retailers can identify seasonal patterns and trends and adjust inventory levels and assortment strategies accordingly."
          },
          {
            "sidehead": "Personalized marketing",
            "content": "The impact of AI on the retail industry is immense in revolutionizing marketing strategies. It enables retailers to analyze large volumes of customer data and deliver highly targeted marketing campaigns.",
            "content1": "Moreover, AI algorithms can process and understand customer preferences, purchase history, browsing behavior, and demographic information to segment customers into specific groups. Customer segmentation allows retailers to create personalized product recommendations, tailored promotions, and customized offers that resonate with individual buyers.",
            "content2": "For instance, leading grocery chains around the world are leveraging AI-powered applications assisting digital shoppers with recommending products based on their preferences and buying patterns. This AI solution notifies customers about their preferred items, price drops, discounts, or special offers, ensuring increased sales and improved customer experience.",
            "content3": "Additionally, AI-powered solutions help retailers to automate and optimize email marketing, social media targeting, and website personalization. It ensures omnichannel touchpoints to enhance customer satisfaction and loyalty and drive sales by delivering a seamless shopping experience."
          },
          {
            "sidehead": "Price optimization",
            "content": "Advanced analytics and machine learning algorithms enable retailers to analyze market trends, competitor pricing, and customer behavior to optimize pricing strategies. They can leverage the benefits of AI in retail by analyzing vast amounts of data like historical sales data, pricing elasticity, customer segmentation, and market conditions to identify the optimal price points for products.",
            "content1": "Moreover, AI-powered price optimization also helps retailers identify opportunities for promotional pricing, bundle offers, and discounts to drive sales and maximize revenue. They can adjust prices in real-time based on factors like demand, inventory levels, and competitor pricing."
          },
          {
            "sidehead": "Supply chain management",
            "content": "AI is pivotal in optimizing the supply chain by leveraging advanced algorithms and predictive analytics. Retailers can streamline supply chain operations and enhance overall efficiency with automation.",
            "content1": "Custom AI solutions help e-commerce businesses to automate its warehouse operations. The AI-programmed robots assist humans to streamline operations, increase productivity, analyze sales data, forecast market demands, and reduce labor costs and ensure agile production processes to maintain its stock.",
            "content2": "Furthermore, AI can analyze sales forecasts, historical data, inventory levels, supplier performance, and market trends to help retailers predict the precise demand, procurement, production, and distribution processes.",
            "content3": "It also enables predictive maintenance, helping retailers identify potential equipment failures or maintenance needs, reducing downtime, and improving operational reliability."
          }
        ]
      },
      {
        id:"heading3",
        "title": "How Data Management Helps in Scaling AI",
        "description": "Scaling AI in the retail market heavily relies on high-quality and well-organized data. Feeding AI algorithms with diverse, reliable, and meaningful data helps retailers predict their business processes.",
        "description1": "While data management is integral to scaling AI initiatives, let’s understand how it helps unlock the full potential of AI to drive innovation, efficiency, and success in a scalable manner.",
        "orderedlist": [
          {
            "sidehead": "Accessibility and integration",
            "content": "Data management includes collecting, organizing, and storing data in a centralized repository to enable easy access to relevant and high-quality data for AI systems. It makes data readily available so AI models can utilize the necessary information for training, inference, and decision-making processes.",
            "content1": "Moreover, effective data management consolidates data from various systems, departments, and external sources into a unified and coherent dataset. Diverse data integration provides a comprehensive view of the business, enabling AI models to derive insights and make accurate predictions across multiple domains."
          },
          {
            "sidehead": "Quality and cleansing",
            "content": "Assessing and improving data accuracy, completeness, consistency, and relevance ensure high data quality for training accurate AI models and making reliable predictions.",
            "content1": "By implementing processes like data cleansing, data validation, and data enrichment, retailers can enhance the performance and reliability of AI systems and simplify workflows.",
            "content2": "Certainly, AI needs smart data management to find reliable data sources, transform data to train the algorithm, provide trusted resources about customers, partners, stakeholders, and products, and provide end-to-end data lineage for smooth model operations."
          },
          {
            "sidehead": "Governance and Compliance",
            "content": "Data management establishes a framework for data governance, including policies, processes, and procedures for data security and privacy. It ensures retailers handle data responsibly to comply with relevant regulations and industry standards.",
            "content1": "Stringent data governance, in turn, safeguards sensitive information, protects customer privacy, and builds trust to ensure the successful scaling of AI in a retail business.",
            "content2": "On the other hand, compliance with relevant data protection laws like GDPR, CCPA, or industry-specific standards instills confidence among customers and stakeholders to do business with a company. It builds a strong culture of data transparency, auditability, and accountability, enabling retailers to demonstrate ethical and responsible data use."
          },
          {
            "sidehead": "Scalability and Infrastructure",
            "content": "Data management capacities involve the scalability and infrastructure required to handle the ever-increasing volume, velocity, and variety of data in the dynamic retail environment. They use cloud-based storage and processing solutions that can scale dynamically based on the needs of AI systems.",
            "content1": "Moreover, retailers deal with large volumes of data from various sources like sales transactions, customer interactions, inventory records, and external market data.",
            "content2": "In that case, they need a scalable data infrastructure to accommodate growing data requirements as their AI initiatives scale, ensuring that the models receive the right inputs to make accurate predictions and generate valuable insights."
          },
          {
            "sidehead": "Data Analytics capabilities",
            "content": "Effective data management leverages tools and technologies for data exploration, visualization, and advanced analytics. With robust data analytics capabilities, organizations can derive meaningful insights from their data, enabling AI models to make more informed decisions and drive scalable business processes.",
            "content1": "Moreover, data analytics enables retailers to explore and analyze large volumes of data to identify patterns, trends, and correlations. These insights help understand customer behavior, preferences, and demand patterns for personalized marketing, demand forecasting, and inventory optimization.",
            "content2": "Additionally, data analytics facilitates measuring AI performance and evaluating its impact on key retail metrics. Such an iterative process of refining AI models helps retailers continuously improve their algorithms, predictions, and recommendations."
          },
          {
            "sidehead": "Data retention and Lifecycle management",
            "content": "Data management establishes policies and practices to determine how long to retain data. It ensures data accuracy and relevance over time and defines data archiving and deletion processes.",
            "content1": "That’s why effective data lifecycle management helps manage data storage costs and ensures AI model training on the most up-to-date and relevant data.",
            "content2": "Additionally, data lifecycle management involves managing data throughout its lifecycle, from acquisition to disposal. It includes data cleansing, validation, accuracy, and relevance over time. This way, retailers can maintain data quality and consistency, enhancing the performance of AI in the retail market."
          },
          {
            "sidehead": "Collaboration and sharing",
            "content": "Data management facilitates collaboration and data sharing within and across organizations. Retailers can leverage data-sharing partnerships or marketplaces to access additional datasets that augment their data.",
            "content1": "Moreover, collaborative data efforts allow retailers to leverage collective intelligence and insights from industry peers, research institutions, or data consortiums. By sharing data, retailers can pool resources, knowledge, and expertise, accelerating AI model development and innovation.",
            "content2": "Furthermore, data sharing helps retailers benchmark their AI models against industry standards and best practices. That, in turn, promotes continuous improvement and drives competitiveness.",
            "content3": "However, retailers must ensure proper data governance, privacy, and security measures while collaborating and sharing data to protect sensitive information and maintain compliance with regulations."
          },
          {
            "sidehead": "Documentation and Metadata management",
            "content": "Properly documenting and managing metadata provide essential context and information on building AI applications in the retail industry. It includes data sources, data quality metrics, data lineage, transformation processes, and dependencies to access relevant data for AI model training and inference.",
            "content1": "Additionally, metadata management enables retailers to manage and maintain data dictionaries effectively, ensuring consistent and standardized terminology across the organization. It enhances collaboration, data sharing, and interoperability, supporting the scalability of AI across different teams and departments."
          },
          {
            "sidehead": "Agility and flexibility",
            "content": "As the retail landscape evolves rapidly, data agility helps retailers quickly adapt to changing business needs and incorporate emerging data sources. It allows them to collect and integrate data from social media, IoT, or customer sentiment analysis to understand market dynamics.",
            "content1": "Moreover, agile data collection and integration help train AI applications in retail industry trends to make more accurate predictions and identify the most effective approaches for specific business objectives. It also facilitates the adoption of advanced AI technologies like natural language processing or computer vision to enhance customer experiences and operational efficiency."
          },
          {
            "sidehead": "Visualization and reporting",
            "content": "Data visualization plays a vital role in scaling AI in the retail industry. As AI generates valuable insights and predictions from large volumes of data, effective data visualization techniques enable retailers to understand and communicate these insights clearly and concisely.",
            "content1": "Moreover, data visualization involves transforming complex data sets into visual representations like charts, graphs, and dashboards for quick interpretation. That enables stakeholders across the organization to grasp the key findings and make informed decisions.",
            "content2": "Additionally, data reporting tools help retailers track and measure the performance and impact of AI models on primary retail metrics. They can evaluate the effectiveness of AI implementations, identify areas for improvement, and fine-tune their strategies by fostering a data-driven culture throughout the organization."
          }
        ]
      },
      {
        "id": "heading4",
         title:"What is the future of AI in the retail industry?",
         description:"As AI algorithms become more sophisticated, retailers expect advancements in visual search, voice-enabled commerce, and predictive analytics to revamp personalized marketing, inventory management, supply chain optimization, and enhanced customer services.",
         description1:"They look to leverage AI to enhance security measures, combat fraud, and provide seamless checkout experiences. Additionally, AI-driven chatbots and virtual assistants will empower retailers with deeper insights into customer behavior, hyper-personalized services, and targeted marketing strategies.",
          description2:"However, in this dynamic landscape, retailers must also address ethical considerations, data privacy, and transparency in algorithm-based decision-making processes.", 
        description3:"That’s why Amnet Digital nurtures highly AI experienced teams to power retail businesses toward procuring well-organized data, deploying AI-powered solutions to data analysis, and unlocking actionable insights to make well informed decisions.",
         description4:"We believe leveraging intelligent AI technologies in a compliant fashion will drive retail industry growth, optimize operations, and deliver exceptional customer experiences in an increasingly digital world.", 
         description5:"Request your no-obligation AI consultation and discover how our AI leaders can reshape your retail business into a data-driven powerhouse.",
        
    },
      
      
      
];




const Scaleai = () => {
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
        <title> Scaling AI in the Retail Industry with Data Management - Amnet Digital</title>
        <meta name="title" content="Scaling AI in the retail industry with data management strategies | Amnet Digital
" />
        <meta name="description" content="The impact of AI on the retail industry is immense if leveraged strategically. Learn how data management can help retailers scale AI toward profitable business growth." />
        <meta name="keywords" content="AI in the retail industry, AI for the retail industry, data management strategies, data management strategy for retail sector, impact of AI on the retail" />
      </Helmet>
        <div className="scroll-class">
            <div class="background-container bg-container-scaleai">
                <div class="centered-text">
                    <h1>July 31, 2023</h1>
                    <p>How to Scale AI in the Retail Industry with Advanced Data Management Strategies</p>
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
                                {heading.image && (
                                                    <img src={heading.image}  className='w-100'/>
                                                    
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
                    {Insightdata.scaleaidetails.map((list) => {
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

export default Scaleai;