import vector from "../../images/Service-Page/Vector.png";
import AIMl from "../../images/Service-Page/AIML.png";
import DE from "../../images/Service-Page/dataengineering.png";
import DA from "../../images/Service-Page/dataannotation.png";
import DM from "../../images/Service-Page/datamanagement.png";
import CS from "../../images/Service-Page/cloudservices.png";
import PE from "../../images/Service-Page/platformengineering.png";
import QA from "../../images/services-images/QualityAssurance/quality-assurance-performance-testing.png";
import AD from "../../images/services-images/Advanced Analytics/advanced-analytics-graph-analysis.png";
import UE from "../../images/services-images/UserExperience/user-experience-experience-_-interaction-design.png";
import SC from "../../images/services-images/Strategy_Consulting/services-strategy_consulting-application-development.png";

const Homeservices = [
  {
    id: 30,
    name: "",
    link: "",
    services: [],
  },
  {
    id: 31,
    name: "AI & ML Services",
    heading: "AI & ML Services",
    metaname: 'Artificial Intelligence and Machine Learning Solutions',
    metadescription: "We offer Artificial Intelligence (AI) and Machine Learning (ML) solutions to empower your business operations and reporting to drive business value through the right data insights.",

    headingDescription:
      "We maintain a data-driven mindset all throughout the engagement, whether it is during strategy support phase or model development phase, and focus on utilization of big data and machine learning by empowered business users. We have capability to help evolve solutions that start as process automation to cognitive insight and finally cognitive engagement when systems work autonomously",
    link: "aiml",
    services: [
      {
        id: 311,
        heading: "Statistical Analysis",
        description:
          "Leverage data science capabilities to get the maximum value from your data...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "statistical-analysis",
      },
      {
        id: 321,
        heading: "Visualizations",
        description:
          "Rapidly integrate data from different sources and develop key metrics for faster decisions...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "visualizations",
      },
      {
        id: 331,
        heading: "Anomaly Detection",
        description:
          "Anomaly Detection Identify, or even predict, abnormal patterns in unbounded data streams to discover...",
        "arrow-image": vector,
        "side-image": AIMl,
        sublink: "anomaly-detection",
      },
      {
        id: 341,
        heading: "Competitor Analysis",
        description:
          "Collect, curate and get actionable competitor insights to empower sales...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "competitor-analysis",
      },
      {
        id: 351,
        heading: "Conversational AI & Virtual Assistant",
        description:
          "Use intelligent chatbots to assist customers throughout their shopping experience...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "conversational-ai-and-virtual-assistant",
      },
    ],
    description:
      "We blend our knowledge of diverse business domains and deep expertise in Data Management, AI/ML and Advanced Analytics to solve complex business problems.",
  },
  {
    id: 32,
    name: "Data Engineering",
    link: "dataengineering",
    heading: "Data Engineering",
    headingDescription:
      "Amnet Digital takes a business focused approach to data engineering to align analytics and technology. By leveraging modern techniques like fast cluster computing you can maximize the value of your data assets. Create foundation of data and transform extracted knowledge into insights for more informed and timely business decisions.",
    description:
      "We blend our knowledge of diverse business domains and deep expertise in Data Management, AI/ML and Advanced Analytics to solve complex business problems.",
    services: [
      {
        id: 320,
        heading: "Data Pipelines",
        description:
          "Automate the movement and transformation of data, eliminating manual intervention reducing...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "data-pipelines",
      },
      {
        id: 321,
        heading: "Data Transformations",
        description:
          "Support comprehensive and effective data warehousing & data migration solutions that enable efficient movement...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "data-transformations",
      },
      {
        id: 322,
        heading: "Data Cleansing",
        description:
          "Optimize the quality and accuracy of data by reconciling duplicate records, data validation...",
        "arrow-image": vector,
        "side-image": DE,
        sublink: "data-cleansing",
      },
      {
        id: 323,
        heading: "Data Integrity",
        description:
          "Ensure overall accuracy, completeness and consistency of data while complying...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "data-integrity",
      },
      {
        id: 324,
        heading: "Data Enrichment",
        description:
          "Incorporate new information in existing records to improve accuracy, value and reduce gaps...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "data-enrichment",
      },
    ],
  },
  {
    id: 33,
    name: "Data Annotation",
    link: "dataannotation",
    heading: "Data Annotation",
    headingDescription:
      "At Amnet Digital we combine our human-assisted approach with machine-learning and give you the high-quality training data you need. Our image & video annotation, text annotation, speech/audio annotation services will give you the confidence to deploy your AI and ML models at scale.",
    description:
      "We blend our knowledge of diverse business domains and deep expertise in Data Management, AI/ML and Advanced Analytics to solve complex business problems.",
    services: [
      {
        id: 331,
        heading: "Image Annotation",
        description:
          "Leverage human-assisted annotation approach to deliver higher quality data...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "image-annotation",
      },
      {
        id: 332,
        heading: "Video Annotation",
        description:
          "Annotate by capturing objects in a video frame-by-frame and reconstruct after completion... ",
        "arrow-image": vector,
        "side-image": null,
        sublink: "video-annotation",
      },
      {
        id: 333,
        heading: "Audio Annotation",
        description:
          "Determine audio content and classify it into a series of predetermined categories. We assist in sound annotation...",
        "arrow-image": vector,
        "side-image": DA,
        sublink: "audio-annotation",
      },
      {
        id: 334,
        heading: "Text Annotation",
        description:
          "Annotate text with metadata labeling to deliver high-quality datasets for machine learning...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "text-annotation",
      },
    ],
  },
  {
    id: 34,
    name: "Data Management",
    link: "datamanagement",
    heading: "Data Management",
    headingDescription:
      "Our data management services span a wide range of business capabilities around data quality management. We help businesses create robust data management solutions that capture the most critical information within your organization 'master data' & create a single source of truth.",
    description:
      "We blend our knowledge of diverse business domains and deep expertise in Data Management, AI/ML and Advanced Analytics to solve complex business problems.",
    services: [
      {
        id: 341,
        heading: "Data Architecture Management",
        description:
          "Build a robust enterprise data architecture and consolidate disparate warehouses...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "data-architecture-management",
      },
      {
        id: 342,
        heading: "Data Development",
        description:
          "Integrate your data into analytics-ready systems or build scalable solutions...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "data-development",
      },
      {
        id: 343,
        heading: "Data Governance",
        description:
          "Ensure proactive and efficient management of data throughout enterprise in a standardized format...",
        "arrow-image": vector,
        "side-image": DM,
        sublink: "data-governance",
      },
      {
        id: 344,
        heading: "Data Operations Management",
        description:
          "Get a consolidated view and control of data from all data sources covering business processes and applications.",
        "arrow-image": vector,
        "side-image": null,
        sublink: "data-operations-management",
      },
      {
        id: 335,
        heading: "Data Quality Management",
        description:
          "Improve the quality of data and establish the desired business...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "data-quality-management",
      },
    ],
  },
  {
    id: 35,
    name: "Cloud Services",
    link: "cloudservices",
    heading: "Cloud Services",
    headingDescription:
      "We adopt a structured approach that offers the flexibility needed to unify your systems within an optimized environment that prioritizes the performance you want , yet at the lowest cost.",
    description:
      "We blend our knowledge of diverse business domains and deep expertise in Data Management, AI/ML and Advanced Analytics to solve complex business problems.",
    services: [
      {
        id: 350,
        heading: "Cloud Advisory Services",
        description:
          "Craft a comprehensive cloud transformation roadmap and deploy a strategy...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "cloud-advisory-services",
      },
      {
        id: 351,
        heading: "Cloud Migration Services",
        description:
          "Achieve digital transformation and uncover growth opportunities...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "cloud-migration-services",
      },
      {
        id: 352,
        heading: "Cloud Integration",
        description:
          "Connect your systems and applications for seamless data sharing and better connectivity in dynamic business environments...",
        "arrow-image": vector,
        "side-image": CS,
        sublink: "cloud-integration",
      },
      {
        id: 353,
        heading: "Cloud Application Management",
        description:
          "Effectively manage, package and deploy applications across public & private cloud computing platforms",
        "arrow-image": vector,
        "side-image": null,
        sublink: "cloud-application-management",
      },
      {
        id: 354,
        heading: "Hybrid Cloud",
        description:
          "Connect on-premise private cloud services and third-party public cloud into a unique",
        "arrow-image": vector,
        "side-image": null,
        sublink: "hybrid-cloud",
      },
    ],
  },
  {
    id: 36,
    name: "Platform Engineering",
    link: "platformengineering",
    heading: "Platform Engineering",
    headingDescription:
      "We are a proven provider of platform engineering services specializing in the design & development of digital experiences. Our experts blend the latest in technology, development methods and tools to deliver bespoke solutions that fit perfectly into your business and elevate your brand’s engagement with your customers.",
    description:
      "We blend our knowledge of diverse business domains and deep expertise in Data Management, AI/ML and Advanced Analytics to solve complex business problems.",
    services: [
      {
        id: 360,
        heading: "Application Engineering",
        description:
          "Design, develop & maintain highly complex software applications with industry-standard best practices...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "application-engineering",
      },
      {
        id: 361,
        heading: "Infrastructure",
        description:
          "Enable Data Scientists, Engineers and DevOps teams to efficiently manage and operate various resources and processes",
        "arrow-image": vector,
        "side-image": null,
        sublink: "infrastructure",
      },
      {
        id: 362,
        heading: "Payment Gateways",
        description:
          "Develop or integrate creative and custom payment gateways with maximum security and enhanced convenience.",
        "arrow-image": vector,
        "side-image": PE,
        sublink: "payment-gateways",
      },
      {
        id: 363,
        heading: "DevOps & AIMLOps",
        description:
          "Improve agility & flexibility of your infrastructure with DevOps and automate the path from development...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "devops-and-aimlops",
      },
    ],
  },
  {
    id: 37,
    name: "Quality Assurance",
    link: "qualityassurance",
    heading: "Quality Assurance",
    headingDescription:
      "We provide dedicated Quality Assurance services aligned to latest agile, AI/ML and Digital Transformation trends and offer end-to-end testing & report validation services. At Amnet Digital, we strive for quality shift left and high-grade deliverables with optimized Cost of Quality and significant Return on Investments.",
    description:
      "We blend our knowledge of diverse business domains and deep expertise in Data Management, AI/ML and Advanced Analytics to solve complex business problems.",
    services: [
      {
        id: 371,
        heading: "Functional Testing",
        description:
          "Ensure verification and validation of applications for against defined specifications to achieve absolute end user acceptance.",
        "arrow-image": vector,
        "side-image": null,
        sublink: "functional-testing",
      },
      {
        id: 372,
        heading: "Compatibility Testing",
        description:
          "Ascertain if the developed product is adequate in a variety of environments like different operating systems",
        "arrow-image": vector,
        "side-image": null,
        sublink: "compatibility-testing",
      },
      {
        id: 373,
        heading: "Performance Testing",
        description:
          "Measure, verify and validate the operational capabilities of the application or product, delivering superior performance...",
        "arrow-image": vector,
        "side-image": QA,
        sublink: "performance-testing",
      },
      {
        id: 374,
        heading: "Security Testing",
        description:
          "Uncover vulnerabilities within your application, minimize the risks and paradigm your code...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "security-testing",
      },
      {
        id: 375,
        heading: "Automation Testing",
        description:
          "Design an automation strategy inline with business goals while leveraging test automation..",
        "arrow-image": vector,
        "side-image": null,
        sublink: "automation-testing",
      },
    ],
  },
  {
    id: 38,
    name: "Advanced Analytics",
    link: "advancedanalytics",
    heading: "Advanced Analytics",
    headingDescription:
      "Our proven experience in delivering analytics solutions to enterprises can help your business gain a competitive advantage. We can contribute in a crucial role to formulate the ways to improve business operations and make smart business decisions that result in best return on investments.",
    description:
      "We blend our knowledge of diverse business domains and deep expertise in Data Management, AI/ML and Advanced Analytics to solve complex business problems.",
    services: [
      {
        id: 380,
        heading: "Complex Event Processing",
        description:
          "Discover hard to find opportunities or threats from high-volume, rapidly occurring data spanning departments and different sources",
        "arrow-image": vector,
        "side-image": null,
        sublink: "complex-event-processing",
      },
      {
        id: 381,
        heading: "Deep Learning",
        description:
          "Control the power of unstructured data such as images, text, and speech to give transformative...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "deep-learning",
      },
      {
        id: 382,
        heading: "Graph Analysis",
        description:
          "Improve efficiency of machine learning algorithms with pre-connected data in graph models",
        "arrow-image": vector,
        "side-image": AD,
        sublink: "graph-analysis",
      },
      {
        id: 383,
        heading: "NLP",
        description:
          "Understand, interpret, and process natural human language with advanced machine learning models to build products",
        "arrow-image": vector,
        "side-image": null,
        sublink: "nlp",
      },
      {
        id: 384,
        heading: "Pattern Matching",
        description:
          "Recognize and extract specific types of entities in sequences of data of some pattern...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "pattern-matching",
      },
    ],
  },
  {
    id: 39,
    name: "User Experience",
    link: "userexperinces",
    heading: "User Experience",
    headingDescription:
      "Amnet Digital aims at designing products that deliver a positive experience by bridging the gap between the stakeholder goals and user expectations. With an emotionally balanced human-centered approach we empathize with the end users and leverage effective user-centric design techniques delivering the best experience for your users across all touch points of your business!",
    description:
      "We blend our knowledge of diverse business domains and deep expertise in Data Management, AI/ML and Advanced Analytics to solve complex business problems.",
    services: [
      {
        id: 390,
        heading: "Design Thinking",
        description:
          "An iterative approach to recognize patterns and construct ideas that are meaningful and intuitive...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "design-thinking",
      },
      {
        id: 391,
        heading: "User Research & Analysis",
        description:
          "Thoroughly understand customer behaviour, attitude, needs and pain points to deliver effective...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "user-research-and-analysis",
      },
      {
        id: 392,
        heading: "Experience & Interaction Design",
        description:
          "Meld usable interfaces which are mobile friendly with equally powerful back end architectures...",
        "arrow-image": vector,
        "side-image": UE,
        sublink: "experience-and-interaction-design",
      },
      {
        id: 393,
        heading: "Rapid Prototyping & Visual Design",
        description:
          "An accelerated and iterative approach to develop system mock-ups, giving potential end-users or stakeholders...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "rapid-prototyping-and-visual-design",
      },
      {
        id: 394,
        heading: "Usability Testing",
        description:
          "Optimize the products or solutions for best in-class user experience improving customer loyalty & life...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "usability-testing",
      },
    ],
  },
  {
    id: 40,
    name: "Strategy & Consulting",
    link: "strategyconsulting",
    heading: "Strategy & Consulting",
    headingDescription:
      "The era of the standalone digital project is over. We can help you create solutions that influence your whole organization. Digital powers virtually every move a company makes. Analytics informs every high-stakes decision. And emerging technologies offer huge advantage to companies that adopt them first...",
    description:
      "We blend our knowledge of diverse business domains and deep expertise in Data Management, AI/ML and Advanced Analytics to solve complex business problems.",
    services: [
      {
        id: 400,
        heading: "Data Strategy",
        description:
          "Enhance data visibility, sharing, and combination while incorporating data visualization/tracking methods",
        "arrow-image": vector,
        "side-image": null,
        sublink: "data-strategy",
      },
      {
        id: 401,
        heading: "AI Strategy",
        description:
          "Fully realize business benefits of AI by gaining valuable insights with collected data and by automating business process..",
        "arrow-image": vector,
        "side-image": null,
        sublink: "ai-strategy",
      },
      {
        id: 402,
        heading: "Application Development",
        description:
          "Develop scalable, secure and reliable applications that address complex business requirements...",
        "arrow-image": vector,
        "side-image": SC,
        sublink: "application-development",
      },
      {
        id: 403,
        heading: "AI Customization",
        description:
          "Implement custom artificial intelligence solutions to extract untapped value from vast amounts of data...",
        "arrow-image": vector,
        "side-image": null,
        sublink: "ai-customization",
      },
    ],
  },
];

export default Homeservices;
