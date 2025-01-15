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
import image1 from "../../images/Resources-page/blogcenter.png";
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
        "description1": "Forward-thinking businesses across the globe effectively utilize AI, big data, and predictive analytics for targeted advertising, capitalizing on its vast subscriber base of 231 million users. By leveraging user search and watch data, the organization offers personalized messages and product pricing, discounts, and suggestions, showcasing its ability to understand and cater to individual preferences, thus solidifying the brand position, saving significant IT costs, uncovering business insights, and enhancing customer retention strategies.",
        "description2": "In today's fast-paced digital world, where data is the new oil, data migration projects have become an absolute game-changer for businesses aiming to thrive and stay ahead of the competition. The seamless transfer of data from one system to another can unlock valuable business insights, boost operational efficiency, and empower informed decision-making.",
        "description3": "In this blog post, we're going to break down the six key steps that are absolutely essential for your critical data migration project. Whether you're a C-suite executive, a decision-maker, or a tech-savvy influencer, this blog is packed with valuable insights to ensure your data migration journey is a roaring success.",
        "description4": "So, let's roll up our sleeves and explore these crucial steps together, empowering you to navigate your data migration journey with confidence and achieve a smooth and effective transition.",
        image: image1,
        orderedlist:[
                {
                    "sidehead": "Step 1: Assess Your Current Data Landscape",
                    "content": "Before embarking on a data migration project, it's essential to have a solid understanding of your current data landscape. This initial step sets the foundation for a successful migration process.",
                    "content1": "Time for a comprehensive inventory! Take a good look at all your existing data sources and systems. Think databases, applications, and storage locations. We want to know where your precious data is hanging out.",
                    "content2": "Analyze the quality, structure, and format of your data. Is it accurate, consistent, and complete? We need to make sure your data is up to snuff before we start moving it around. Also, check if the structure and format play nicely with the new target system.",
                    "content3": "Figure out how your different datasets and systems are connected. Any dependencies we need to be aware of? Changes in one dataset shouldn't wreak havoc on others. We want a smooth sailing transition, after all."
                },
                {
                    "sidehead": "Step 2: Define Migration Objectives and Scope",
                    "content": "Let's start by determining the goals and or objectives of your data migration project. What do you hope to achieve by migrating your data? Is it improving operational efficiency, enhancing data accessibility, or maybe consolidating systems? Whatever it is, let's get those objectives crystal clear.",
                    "content1": "Next up, we need to define the scope of the project. Be as specific as possible! Which data sets and systems are involved in the migration? Are there any particular timelines we need to keep in mind? The more precise we are, the smoother the process will be.",
                    "content2": "Don’t forget about regulations and compliance. Make sure to consider any regulatory or compliance requirements that may impact your project. We want to ensure everything is in line with the rules and regulations governing your industry."
                },
                {
                    "sidehead": "Step 3: Plan and Design the Migration Strategy",
                    "content": "Let's start by developing a super-detailed data migration plan. We want to cover all our bases here! Set scope of work (SOW), timelines, milestones, and gather the necessary resources to make this migration a success. Think of it as our game plan for victory!",
                    "content1": "Now, let's choose the best data migration approach for your unique situation. Will it be a big bang where we move everything at once, a phased approach where we tackle it bit by bit, or maybe a parallel migration where we test things out side by side?",
                    "content2": "Data mapping and transformation time - we need to figure out how to map your data from your legacy IT systems to the new environment. Think of it as translating from one language to another. Plus, we might need to transform the data along the way to fit the new system's requirements.",
                    "content3": "Last but not least, define our data validation and testing procedures. We need to make sure everything is running smoothly, and there are no hiccups along the data migration journey."
                },
                {
                    "sidehead": "Step 4: Execute the Data Migration Process",
                    "content": "First of all, we need to extract the data from the traditional source systems. Think of it like gathering all the ingredients for a delicious recipe. We'll use our fancy tools and methods to make sure we get every last bit of data.",
                    "content1": "Now, it's time to give that data a makeover! We'll cleanse and transform it as necessary to make sure it plays nicely with the new target system. It's like giving your data a shiny new outfit that fits perfectly.",
                    "content2": "With the data all spiffed up, it's time to load it into the target system. But hold your horses, we're not just gonna dump it in there. We'll handle it with care, ensuring data integrity and accuracy.",
                    "content3": "Monitoring and tracking the data migration process. We're not done yet! We'll keep a close eye on the data migration process, monitoring and tracking it like a detective on a mission. If any issues or discrepancies pop up, we'll be on them faster than a squirrel chasing a nut."
                },
                {
                    "sidehead": "Step 5: Validate and Verify Data",
                    "content": "Time for some data validation and verification tests. We're gonna put our capes on and go through every nook and cranny of the migrated data. We want to make sure it's all squeaky clean and up to snuff.",
                    "content1": "Next up, we'll compare the migrated data with the original source data. It's like doing a side-by-side comparison to make sure nothing got lost in translation. Accuracy is our middle name!",
                    "content2": "Handle data quality problems. If we stumble upon any data quality issues or inconsistencies, fear not! We'll tackle them head-on. It's like being a handyman, fixing any loose screws and making everything run smoothly."
                },
                {
                    "sidehead": "Step 6: Monitor and Maintain Data Quality",
                    "content": "Implement ongoing data governance practices to maintain data integrity. It's important to keep a watchful eye on your data, making sure it stays accurate, reliable, and secure.",
                    "content1": "Regular monitoring and validation are key! We'll periodically check in on the accuracy of the migrated data, like giving it a friendly check-up. If any issues pop up, we'll be there to fix them.",
                    "content2": "To keep things in tip-top shape, establish data quality metrics and performance indicators. It's like setting goals and benchmarks to ensure our data is always performing at its best."
                }
            ]
            
          
    },
    { 
        id: "heading2",
        "title": "Navigating Data Migration with Confidence and Success",
        "description": "We've taken you on a journey through the key steps to include in your data migration project. From assessing your current data landscape to monitoring and maintaining data quality, we've covered it all with a touch of friendliness and enthusiasm.",
        "description1": "Remember, data migration may seem like a daunting task, but with the right approach and guidance, it can be a successful and rewarding endeavour. By following these steps, you'll be well-equipped to navigate the challenges and ensure a smooth transition of your valuable data.",
        "description2": "We understand the critical importance of data migration projects and have established ourselves as a trusted data migration services provider in offering comprehensive data migration consulting services. With deep expertise in managing complex data migration projects, we help businesses streamline their data operations and maximise the value of their information assets.",
        "description3": "At Amnet Digital, our data migration services team ensures businesses moving data is successful and efficient, without impacting the business, whether it is to a new system, or location. We enable your entire organization to simplify your data operations to become more efficient as part of your digital transformation journey.",
        "description5": "Book your FREE and no-strings attached data migration assessment now!"
    }
    ,
   
     
      
];




const Datamigration = () => {
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
        <title>  6 Key Steps To Your Data Migration Project - Amnet Digital</title>
        <meta name="title" content=" Data Migration Strategy - 6 key steps to include in your data migration project" />
        <meta name="description" content="Unlock the secrets to seamless data migration with Amnet Digital. Learn the steps to assess, migrate, and maintain data quality for business success." />
        <meta name="keywords" content="data migration, data migration services, data migration assessment, data migration process, data migration consultation, data migration services provider, data migration solution" />
      </Helmet>
        <div className="scroll-class">
            <div class="background-container bg-container-migration">
                <div class="centered-text">
                    <h1>August 8, 2023</h1>
                    <p>6 Key Steps To Include In Your Data Migration Project</p>
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
                    {Insightdata.migrationdetails.map((list) => {
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

export default Datamigration;