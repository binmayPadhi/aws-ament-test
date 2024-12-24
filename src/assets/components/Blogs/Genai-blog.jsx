import React, { useEffect, useRef, useState } from 'react';
import '../../CSS/Perplexity.css';
// import AboutUsBG from "../../images/About-Us-Page/worker-reading-news-with-tablet.png";
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
    id: 'heading1',
    title: 'Reinventing the Voice Assistant: How Our Next-Gen AI Voice Bot is Transforming Conversational AI?',
    description: "In an age where technology seamlessly integrates into our daily routines, voice-based AI assistants have emerged as indispensable tools. From asking about the weather to managing complex schedules, these digital companions have redefined convenience. Yet, as user expectations soar, traditional voice assistants often lag behind—struggling with contextual understanding, personalization, and emotional intelligence.",
    description2: "At Amnet Digital, we're thrilled to unveil our next-generation AI voice assistant, a revolutionary leap in conversational AI. Designed to overcome the limitations of current voice assistants, our AI voice bot leverages cutting-edge technologies like generative AI and GPT-4 architecture to deliver an experience that's more intuitive, empathetic, and human-like than ever before. ",
    // videourl: "https://www.youtube.com/embed/oOBETYjihPk",
  },
  {
    id: 'heading2',
    title: "The Evolution of Voice Assistants ",
    description: "Voice assistants have come a long way since their inception. Early iterations were limited to executing simple commands—setting alarms, making calls, or providing weather updates. With advancements in artificial intelligence and machine learning, they began to handle more complex interactions. However, significant challenges remain: ",
    orderedlist1: [
      {
        sidehead: "Context Retention: ",
        content:
          "Traditional voice assistants often fail to remember previous interactions, leading to disjointed conversations.   ",
      },
      {
        sidehead: "Emotional Intelligence: ",
        content:
          "A lack of understanding of user emotions results in impersonal and sometimes frustrating experiences.  ",
      },
      {
        sidehead: "Language Limitations: ",
        content:
          "Inadequate support for multiple languages and dialects hinders global usability.",
      },
    ]
  },
  {
    id: 'heading3',
    title: "Why Advanced Conversational AI Is Needed  ",
    description: "In today's fast-paced world, users demand more from their digital assistants: ",
    orderedlist: [
      {
        sidehead: "Elevated User Expectations:  ",
        content:
          "Consumers seek assistants that understand context, exhibit empathy, and provide personalized experiences. ",
      },
      {
        sidehead: "Business Implications: ",
        content:
          "According to Forrester Research, 53% of customers may abandon a purchase if they can't find quick answers to their questions. This statistic underscores the need for more advanced, user-centric voice solutions.   ",
      },
      {
        sidehead: "Competitive Advantage: ",
        content:
          "Businesses adopting advanced AI technologies can differentiate themselves, leading to increased customer loyalty and market share. ",
      },
    ],
  },
  {
    id: 'heading4',
    title: "Introducing Our Next-Generation AI Voice Assistant",
    description: "Our Generative AI voice bot is not just an incremental improvement—it's a transformative solution poised to redefine conversational AI. Here's how it stands out:   ",
    heading1: "1. Contextual Understanding",
    orderedlist: [
      {
        sidehead: "Maintains Conversation Flow: ",
        content:
          "Remembers and references previous interactions, allowing for coherent, multi-turn dialogues.  ",
      },
      {
        sidehead: "Intelligent Context Switching: ",
        content:
          "Seamlessly handles conversations involving multiple topics without losing track. ",
      },
      {
        sidehead: "Natural Language Processing (NLP): ",
        content:
          "Utilizes advanced NLP techniques to understand and process complex speech inputs, including idioms and colloquial expressions.",
      },
    ],
    heading4: "2. Emotional Intelligence",
    orderedlist1: [
      {
        sidehead: "Sentiment Analysis: ",
        content:
          " Detects emotions through voice tone, pitch, and language cues. ",
      },
      {
        sidehead: "Adaptive Responses: ",
        content:
          "Adjusts replies to match the user's emotional state, offering empathy and support when needed. ",
      },
      {
        sidehead: "Enhanced User Engagement: ",
        content:
          "Builds stronger connections with users by acknowledging and responding to their feelings. ",
      },
    ],
    heading5: "3. Personalized Interactions ",
    orderedlist2: [
      {
        sidehead: "Behavioral Learning: ",
        content:
          "Learns from user preferences and behaviors to tailor responses and recommendations. ",
      },
      {
        sidehead: "User Profiling: ",
        content:
          "Builds individualized profiles for a more personalized experience, enhancing user satisfaction. ",
      },
      {
        sidehead: "Predictive Suggestions: ",
        content:
          "Anticipates user needs based on past interactions and context. ",
      },
    ],
    heading6: "4. Multilingual Support",
    orderedlist3: [
      {
        sidehead: "Global Communication: ",
        content:
          " Supports over 05 languages and recognizes regional dialects, breaking down language barriers. ",
      },
      {
        sidehead: "Cultural Sensitivity: ",
        content:
          "Understands and respects cultural nuances in communication, providing appropriate responses. ",
      },
      {
        sidehead: "Accessibility: ",
        content:
          "Makes technology more accessible to non-English speakers and diverse populations. ",
      },

    ],
  },
  {
    id: 'heading5',
    title: "The Technology Behind Our Voice Assistant",
    description: "Our AI voice bot is built on a foundation of advanced technologies that set it apart from the competition:  ",
    heading1: "Generative AI and GPT-4 Architecture",
    orderedlist: [
      {
        sidehead: "Human-Like Text Generation: ",
        content:
          "Utilizes GPT-4 to produce natural, coherent, and contextually relevant responses.  ",
      },
      {
        sidehead: "Deep Neural Networks:  ",
        content:
          "Processes and understands complex speech inputs, enabling more sophisticated interactions.  ",
      },
      {
        sidehead: "Continuous Improvement: ",
        content:
          "Learns from vast datasets to enhance its language and conversation skills over time. ",
      },
    ],
    heading4: "Advanced Natural Language Processing ",
    orderedlist1: [
      {
        sidehead: "Semantic Analysis: ",
        content:
          " Interprets the meaning behind words, phrases, and sentences, including slang and idiomatic expressions. ",
      },
      {
        sidehead: "Pragmatic Understanding: ",
        content:
          "Considers context, intent, and situational factors for accurate communication. ",
      },
      {
        sidehead: "Disambiguation: ",
        content:
          "Resolves ambiguities in language to understand user queries precisely.",
      },
    ],
    heading5: "Machine Learning and Adaptive Algorithms ",
    orderedlist2: [
      {
        sidehead: "Continuous Learning: ",
        content:
          "Improves performance over time through user interactions and feedback.  ",
      },
      {
        sidehead: "Reinforcement Learning: ",
        content:
          "Uses positive and negative feedback loops to optimize responses and behaviors. ",
      },
      {
        sidehead: "Predictive Analytics: ",
        content:
          " Anticipates user needs and questions based on historical data. ",
      },

    ],
    heading6: "Security and Ethical Considerations ",
    orderedlist3: [
      {
        sidehead: "Data Privacy: ",
        content:
          " Implements robust security measures, including end-to-end encryption, to protect user data.   ",
      },
      {
        sidehead: "Compliance:  ",
        content:
          "Adheres to global data protection regulations like GDPR and CCPA. ",
      },
      {
        sidehead: "Ethical AI Practices: ",
        content:
          "Regularly audits algorithms to prevent biases and ensure fair, transparent interactions.  ",
      },

    ],
  },
  {
    id: 'heading6',
    title: "Applications Across Industries ",
    description: "Our AI voice assistant has versatile applications across various sectors, driving innovation and efficiency. ",
    heading1: "Customer Service Transformation",
    orderedlist: [
      {
        sidehead: "24/7 Support: ",
        content:
          "AI voice bots for customer support provide instant, around-the-clock assistance, reducing wait times and improving customer satisfaction by handling multiple interactions simultaneously. ",
      },
      {
        sidehead: "Multichannel Integration: ",
        content:
          "Operates seamlessly across phone systems, websites, mobile apps, and messaging platforms, offering a consistent customer experience without requiring customers to repeat information. ",
      },
      {
        sidehead: "Data Insight: ",
        content:
          "Collects and analyzes customer data to identify trends and areas for service improvement, informing strategic decisions. ",
      },
    ],
    heading4: "Retail and E-Commerce  ",
    orderedlist1: [
      {
        sidehead: "Personalized Shopping Experience: ",
        content:
          " Offers product recommendations based on user preferences and purchase history, increasing the likelihood of a purchase and fostering a deeper connection with the brand.",
      },
      {
        sidehead: "Streamlined Purchasing:  ",
        content:
          "Assists with the entire buying process, reducing cart abandonment rates and boosting sales. ",
      },
      {
        sidehead: "Customer Retention: ",
        content:
          "Engages customers with personalized promotions and loyalty programs, encouraging repeat business.",
      },
    ],
    heading5: "Food Delivery Services",
    orderedlist2: [
      {
        sidehead: "Simplified Ordering Process: ",
        content:
          "Enables voice-activated ordering, making the process faster and more convenient for customers. ",
      },
      {
        sidehead: "Real-Time Updates: ",
        content:
          "Provides live tracking of orders and timely notifications, enhancing transparency and customer satisfaction.",
      },
      {
        sidehead: "Upselling Opportunities: ",
        content:
          " Suggests complementary items and special offers during the ordering process, increasing the average order value.",
      },

    ],
    heading6: "Human Resources Applications",
    orderedlist3: [
      {
        sidehead: "Automated Recruitment: ",
        content:
          "Streamlines candidate screening and interview scheduling, reducing time-to-hire and allowing HR teams to focus on engaging with top candidates. ",
      },
      {
        sidehead: "Employee Onboarding: ",
        content:
          "Guides new hires through orientation and provides access to essential resources, helping them become productive more quickly. ",
      },
      {
        sidehead: "Training and Development: ",
        content:
          "Offers interactive learning modules and answers employee queries, enhancing productivity and fostering continuous improvement.  ",
      },

    ],
  },
  {
    id: 'heading7',
    title: "Commitment to Security and Ethics ",
    description: "At Amnet Digital, we understand that trust is the cornerstone of any successful relationship between users and technology. That's why we prioritize user trust through robust security measures and ethical practices. Ensuring the safety, privacy, and autonomy of our users isn't just a feature—it's a fundamental principle that guides every aspect of our AI voice bot's development and deployment. ",

    heading1: "Security and Privacy Measures",
    orderedlist: [
      {
        sidehead: "End-to-End Encryption: ",
        content:
          "Protecting your data is our top priority. We employ state-of-the-art end-to-end encryption to secure data during both transmission and storage. This means that from the moment your voice or text data leaves your device, it's converted into a secure code that's indecipherable to unauthorized parties. Even if intercepted, the encrypted data remains unreadable without the correct decryption key.",
      },
      {
        sidehead: "Compliance with Global Data Protection Regulations: ",
        content:
          "Our dedicated compliance team continuously monitors regulatory changes worldwide to ensure that our practices remain up-to-date. We conduct regular audits and assessments to verify that all aspects of our data handling—from collection and processing to storage and deletion—meet or exceed legal standards. This rigorous approach ensures that your data is handled responsibly and ethically, no matter where you are located. ",
      },
      {
        sidehead: "User Control and Consent Management: ",
        content:
          "We believe that you should have complete control over your personal data. Our AI voice bot is designed with user empowerment in mind, providing intuitive tools that allow you to manage your data and consent preferences easily. You can: ",
        "nestedOrderedList": [
          {
            "subhead": "Access Your Data: ",
            "content": "Review the information we've collected to ensure accuracy and transparency."
          },
          {
            "subhead": "Modify or Delete Information: ",
            "content": "Make changes to your personal data or request its deletion at any time."
          },
          {
            subhead: "Manage Consent Preferences:",
            content:
              " Opt-in or opt-out of data collection features, such as usage analytics or personalized recommendations. We provide clear, easy-to-understand privacy policies and settings interfaces, so you're never in the dark about how your data is used. By putting control back into your hands, we aim to foster a relationship built on trust and transparency.  ",
          },
        ]
      }
    ],
    heading4: "Ethical AI Practices ",
    orderedlist1: [
      {
        sidehead: "Bias Mitigation through Diverse Datasets and Audits: ",
        content:
          "AI systems can unintentionally perpetuate biases present in their training data, leading to unfair or discriminatory outcomes. To combat this, we utilize diverse and representative datasets that encompass a wide range of languages, dialects, cultures, and demographic groups. Our data scientists and ethicists work collaboratively to identify and eliminate biases at every stage of development. We conduct regular audits and testing to assess our AI voice bot's performance across different user groups and scenarios. This proactive approach helps us detect potential biases early and implement corrective measures promptly. By striving for fairness and inclusivity, we ensure that our AI provides equitable experiences for all users, regardless of their background.",
      },
      {
        sidehead: "Transparency and Explainable AI:  ",
        content:
          "We recognize that AI technologies can seem like a 'black box,' making it difficult for users to understand how decisions are made. To address this, we are committed to developing explainable AI systems that offer insights into how our voice bot processes information and generates responses. ",
        nestedOrderedList: [
          {
            subhead: "User-Friendly Explanations: ",
            content:
              "We provide clear explanations for the AI's actions and suggestions, helping you understand the reasoning behind them. ",
          },
          {
            subhead: "Accessible Information: ",
            content:
              "Detailed documentation and support resources are available to answer your questions about our AI's functionality. ",
          },

          {
            subhead: "Open Communication: ",
            content:
              "We encourage feedback and are transparent about how we address concerns related to AI behavior and decision-making. By demystifying our AI processes, we aim to build confidence in our technology and foster a more informed and empowered user base.  ",
          },
        ]
      },
      {
        sidehead: "User Autonomy and Opt-In Features: ",
        content:
          "Respecting your autonomy is fundamental to our ethical approach. We design our AI voice bot with opt-in features rather than assuming default consent. This means: ",
        nestedOrderedList: [
          {
            subhead: "No Presumptive Data Collection: ",
            content:
              "We don't collect personal data unless you've explicitly agreed to it.  ",
          },
          {
            subhead: "Customized Experiences by Choice: ",
            content:
              "Personalized recommendations and services are activated only when you choose to enable them.  ",
          },

          {
            subhead: "Easy Opt-Out Options: ",
            content:
              "You can withdraw your consent or disable features at any time without hassle. We avoid manipulative practices like 'dark patterns' that pressure users into making certain choices. Instead, we provide clear information and straightforward options, empowering you to make decisions that align with your preferences and comfort levels.  ",
          },
        ]

      },
    ],

  },
  {
    id: 'heading8',
    title: "Realizing Business Impact  ",
    description: "Implementing our AI voice assistant is not just a technological upgrade—it's a strategic investment that can drive substantial benefits across your organization. By harnessing the power of advanced AI, businesses can unlock new levels of efficiency, revenue growth, productivity, and competitive positioning. ",

    heading1: "Operational Efficiency",
    orderedlist: [
      {
        sidehead: "Cost Reduction through Automations: ",
        content:
          "Automating routine inquiries and customer interactions can significantly reduce the workload on human customer service agents. Our AI voice assistant is capable of handling a high volume of queries simultaneously, providing instant, accurate responses without the need for human intervention. This efficiency can lead to a reduction in customer service costs by up to 50%. By reallocating resources from repetitive tasks to more strategic initiatives, businesses can optimize operational budgets and improve service levels. The AI assistant operates 24/7, ensuring consistent support and eliminating the limitations of traditional working hours. This around-the-clock availability enhances customer satisfaction while keeping operational costs low. ",
      },
      {
        sidehead: "Streamlined Processes: ",
        content:
          "The AI assistant can integrate with existing systems such as CRM and inventory management, automating tasks like data entry and order processing. This integration reduces errors associated with manual input and accelerates transaction times, further contributing to operational efficiency. ",
      },
    ],
    heading4: "Revenue Growth ",
    orderedlist1: [
      {
        sidehead: "Enhanced Customer Satisfaction and Loyalty: ",
        content:
          " By providing quick, personalized, and empathetic interactions, our AI voice assistant elevates the customer experience. Satisfied customers are more likely to remain loyal and make repeat purchases, which can increase repeat business by up to 20%. The assistant's ability to remember past interactions and preferences allows for tailored recommendations, fostering a deeper connection with customers. ",
      },
      {
        sidehead: "Upselling and Cross-Selling Opportunities: ",
        content:
          "The AI assistant can analyze customer data to identify opportunities for upselling and cross-selling. By suggesting relevant products or services during interactions, it can increase the average transaction value and contribute to overall revenue growth. ",
      },
      {
        sidehead: "Market Expansion: ",
        content:
          "With multilingual support and cultural sensitivity, the AI assistant enables businesses to tap into new markets and reach a global audience. Expanding into international markets can open up additional revenue streams and diversify the customer base.",
      },
    ],
    heading4: "Competitive Advantage  ",
    orderedlist1: [
      {
        sidehead: "Innovation Leadership: ",
        content:
          "Early adopters of advanced AI technologies position themselves as industry innovators and thought leaders. Implementing our next-generation AI voice assistant signals to the market that your company is forward-thinking and committed to leveraging cutting-edge solutions. This perception can enhance brand reputation, attract top talent, and instill confidence in investors and stakeholders. ",
      },
      {
        sidehead: "Differentiation in the Market: ",
        content:
          "Offering superior customer experiences through advanced AI capabilities sets your business apart from competitors. Features like emotional intelligence, contextual understanding, and personalized interactions provide unique value propositions that are difficult for others to replicate quickly. ",
      },
      {
        sidehead: "Agility and Responsiveness: ",
        content:
          "The insights gained from the AI assistant's data analytics enable businesses to respond swiftly to market trends and customer needs. This agility allows for proactive adjustments in strategy, product offerings, and customer engagement approaches, keeping your company ahead of the curve. ",
      },
      {
        sidehead: "Building a Data-Driven Culture: ",
        content:
          " The AI assistant collects and analyzes vast amounts of data on customer interactions and preferences. Leveraging this data fosters a culture of informed decision-making within the organization. Businesses can identify patterns, predict customer behavior, and tailor their services accordingly, leading to better outcomes and a stronger market position.",
      },
    ],

  },
  {
    id: 'heading9',
    title: "Looking Ahead: Our Future Roadmap  ",
    description: "We are committed to continuous innovation and excellence: ",

    heading1: "Technological Advancements:",
    orderedlist: [
      {
        sidehead: "Hybrid AI Models: ",
        content:
          "Exploring the integration of symbolic AI with machine learning for more robust performance. ",
      },

      {
        sidehead: "Enhanced Emotional Intelligence: ",
        content:
          "Developing more sophisticated models to better understand and respond to human emotions.",
      },

    ],
    heading4: "User Experience Enhancements: ",
    orderedlist1: [
      {
        sidehead: "Emotionally Adaptive Interfaces: ",
        content:
          " Creating interfaces that adjust not just in response but in presentation based on user emotions. ",
      },
      {
        sidehead: "Accessibility Features: ",
        content:
          "Enhancing support for users with disabilities, ensuring inclusivity. ",
      },
    ],
    heading4: "Global Expansion  ",
    orderedlist1: [
      {
        sidehead: "Localization: ",
        content:
          "Adapting our AI voice assistant to meet the cultural and linguistic needs of new markets. ",
      },
      {
        sidehead: "Strategic Partnerships: ",
        content:
          "Collaborating with global tech companies and startups to expand our reach. ",
      },
      {
        sidehead: "Regulatory Compliance: ",
        content:
          "  Staying ahead of international regulations to ensure smooth market entry. ",
      },
    ],

  },
  {
    id: 'heading10',
    title: "conclusion ",
    description: "The future of conversational AI lies in creating interactions that are not only intelligent but also intuitive and emotionally resonant. Our next-generation AI voice assistant embodies this vision, setting a new standard for what users can expect from their digital companions. By addressing the limitations of current voice assistants and exceeding user expectations, we're paving the way for a more connected, personalized, and empathetic digital world. ",
    question: "Ready to transform your customer interactions with advanced AI technology? ",
    details: "Contact us at info@amnetdigital.com to discover how our AI voice assistant can revolutionize your business."
  },

];



const GenBlog = () => {
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
                <title>5 Ways AI Can Optimize Your Inventory Management | Amnet Digital</title>
                <meta name="title" content="5 Ways AI Can Optimize Your Inventory Management | Amnet Digital" />
                <meta name="description" content="AI will play a pivotal role in reshaping the retail landscape from personalizing customer experiences to optimizing supply chain and inventory management." />
                <meta name="keywords" content="AI for inventory management, AI to optimize inventory management, AI solutions for inventory management, inventory management AI solutions." />
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
                <p>{heading.description}</p>
                {heading.description1 && <p>{heading.description1}</p>}
                {heading.description2 && <p>{heading.description2}</p>}
                {heading.heading1 && <h2>{heading.heading1}</h2>}
                {heading.description3 && <p>{heading.description3}</p>}
                {heading.heading2 && <h3>{heading.heading2}</h3>}
                {heading.heading3 && <h2>{heading.heading3}</h2>}
                {heading.question && (<h5 ><span className='question-style'>{heading.question}</span>{heading.details && <span className="fs-14 fw-300 line-h">{heading.details}</span>} </h5> )}

                {heading.videourl && (
                  <p>
                    <iframe
                      title="video"
                      frameBorder="0"
                      allowFullScreen
                      src={heading.videourl}
                      className="lazyload pt-4 video-height"
                    ></iframe>
                  </p>
                )}
                {heading.orderedlist && heading.hasOwnProperty("orderedlist") && (
                  <>
                    <ol className="pl-4 list-style-dot">
                      {heading.orderedlist.map((response) => (
                        <li className="fs-14 pb-3" key={response.sidehead}>
                          <span className="fs-14 fw-bold">{response.sidehead}</span>
                          {response.content}

                          {/* Nested ordered list */}
                          {response.nestedOrderedList && response.nestedOrderedList.length > 0 && (
                            <ol className="pl-4 list-style-dot pt-3">
                              {response.nestedOrderedList.map((nestedItem) => (
                                <li className="fs-14 pb-3" key={nestedItem.subhead}>
                                  <span className="fs-14 fw-bold">{nestedItem.subhead}</span>
                                  {nestedItem.content}
                                </li>
                              ))}
                            </ol>
                          )}
                        </li>
                      ))}
                    </ol>
                  </>
                )}
                {heading.orderedlist1 && heading.hasOwnProperty("orderedlist1") && (
                  <>
                    <h2 >{heading.heading4}</h2>
                    <ol className="pl-4 list-style-dot">
                      {heading.orderedlist1.map((response) => (
                        <li className="fs-14 li-margin">
                          <span className="fs-14 fw-bold">{response.sidehead}</span>
                          <br /> {response.content}
                          {/* Nested ordered list */}
                          {response.nestedOrderedList && response.nestedOrderedList.length > 0 && (
                            <ol className="pl-4 list-style-dot pt-3">
                              {response.nestedOrderedList.map((nestedItem) => (
                                <li className="fs-14 pb-3" key={nestedItem.subhead}>
                                  <span className="fs-14 fw-bold">{nestedItem.subhead}</span>
                                  {nestedItem.content}
                                </li>
                              ))}
                            </ol>
                          )}
                        </li>
                      ))}
                    </ol>
                  </>
                )}
                {heading.orderedlist2 && heading.hasOwnProperty("orderedlist2") && (
                  <>
                    <h2 >{heading.heading5}</h2>
                    <ul className="list-style-dot">
                      {heading.orderedlist2.map((response) => (
                        <li className="fs-14 pb-3" key={response.sidehead}>
                          <span className="fs-14 fw-bold">{response.sidehead}</span>
                          {response.content}
                          {/* Nested ordered list */}
                          {response.nestedOrderedList && response.nestedOrderedList.length > 0 && (
                            <ol className="pl-4 list-style-dot pt-3">
                              {response.nestedOrderedList.map((nestedItem) => (
                                <li className="fs-14 pb-3" key={nestedItem.subhead}>
                                  <span className="fs-14 fw-bold">{nestedItem.subhead}</span>
                                  {nestedItem.content}
                                </li>
                              ))}
                            </ol>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {heading.orderedlist3 && heading.hasOwnProperty("orderedlist3") && (
                  <>
                    <h2 >{heading.heading6}</h2>
                    <ul className="list-style-dot">
                      {heading.orderedlist3.map((response) => (
                        <li className="fs-14 pb-3" key={response.sidehead}>
                          <span className="fs-14 fw-bold">{response.sidehead}</span>
                          {response.content}
                        </li>
                      ))}
                    </ul>
                  </>
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

export default GenBlog;