import AiMlIMG from "../../images/Service-Page/service-dropdown-icons/services-dd-ai-ml.png";
import DataManagementIMG from "../../images/Service-Page/service-dropdown-icons/services-dd-data-mgmt.png";
import AdvanceAnalyticsIMG from "../../images/Service-Page/service-dropdown-icons/services-dd-advanced-analytics.png";
import DataEngineeringIMG from "../../images/Service-Page/service-dropdown-icons/services-dd-data-engg.png";
import PlatformEngineeringIMG from "../../images/Service-Page/service-dropdown-icons/services-dd-platform-engg.png";
import UserExperienceIMG from "../../images/Service-Page/service-dropdown-icons/services-dd-ux.png";
import CloudIMG from "../../images/Service-Page/service-dropdown-icons/services-dd-cloud.png";
import QualityAssuranceIMG from "../../images/Service-Page/service-dropdown-icons/services-dd-qa.png";
import ConsultingIMG from "../../images/Service-Page/service-dropdown-icons/services-dd-strat-consult.png";
import DataAnnotationIMG from "../../images/Service-Page/service-dropdown-icons/services-dd-data-annotation.png";


const servicesData = [
    {
        id : "ai-ml",
        title : "Artificial Intelligence / Machine Learning",
        description : "We maintain a data-driven mindset all throughout the engagement, whether it is during strategy support phase or model development phase, and focus on utilization of big data and machine learning by empowered business users. We have capability to help evolve solutions that start as process automation to cognitive insight and finally cognitive engagement when systems work autonomously.",
        serviceIMG : AiMlIMG
    },
    {
        className : "service-icon-center",
        id : "data-management",
        title : "Data Management",
        description : "Competitive advantages are built from the efficient management, orchestration, and availability of accurate business-critical data, as well as processes which effectively leverage data. Amnet’s Data Management Services help you to enhance the quality of your master data. Whether data quality analytics, validation, duplication or verification.",
        description1 : "Our data management services span a wide range of business capabilities around data quality management. We help businesses create robust data management solutions that capture the most critical information within your organization 'master data' & create a single source of truth. Whether it is data governance, data quality, master data management or migration, Amnet Digital can assist you with the best quality of resources and services to help automate, and design the analytics that will help you track your data all the time.",
        serviceIMG : DataManagementIMG
    },
    {
        id : "advanced-analytics",
        title : "Advanced Analytics",
        description : "Our proven experience in delivering analytics solutions to enterprises can help your business gain a competitive advantage. Advanced analytics use data engineering and AI to get the most out of your data, whether to identify an anomaly in your data that can cause loss or to anticipate an adverse event. Amnet Digital can contribute in a crucial role to formulate the ways to improve business operations and make smart business decisions that result in competitive advantage.",
        serviceIMG : AdvanceAnalyticsIMG
    },

    {
        id : "test",
    },
   
    {
        className : "service-icon-center",
        id : "data-engineering",
        title : "Data Engineering",
        description : "Recent advancements in processing power, combined with dramatic data growth have made unprecedented thinking power a reality. Algorithms give us the ability to manipulate really large data sets and develop solutions for large scale data processing.",
        description1 : "Amnet Digital takes a business focused approach to data engineering to align analytics and technology. By leveraging modern techniques like fast cluster computing you can maximize the value of your data assets . Create foundation of data and transform extracted knowledge into insights for more informed and timely business decisions.",
        serviceIMG : DataEngineeringIMG
    },
    {
        className : "service-icon-center",
        id : "platform-engineering",
        title : "Platform Engineering",
        description : "Amnet Digital offers a palette of platform engineering services at all scale – small to enterprise level entities – and prepare them to leverage the digital opportunity. We are a proven provider of platform engineering services specializing in the design and development of digital experiences. Our expert teams blend the latest in technology, development methods and tools to deliver bespoke solutions that fit perfectly into your business and elevate your brand’s engagement with your customers.",
        description1 : "Our teams bring deep experience across a variety of technologies, systems, platforms and applications as well as working across multiple industry verticals, that ensures that no matter the need, we can provide a solution to accommodate. Our integration expertise ensures that the solutions we design integrate seamlessly with your existing systems.",
        serviceIMG : PlatformEngineeringIMG
    }
    ,
    {
        id : "user-experience",
        title : "User Experience",
        description : "Amnet Digital aims at designing products that deliver a positive experience by bridging the gap between the stakeholder goals and user expectations. With an emotionally balanced human-centered approach we empathize with the end users and leverage effective user-centric design techniques delivering the best experience for your users across all touch points of your business! We enable our clients to build a compelling online presence, spurring customer loyalty & retention and ever improving brand value whilst reducing development, bug fixing and marketing costs down the line.",
        serviceIMG : UserExperienceIMG
    },
    {
        id : "cloud",
        title : "Cloud",
        description : "We adopt a structured approach that offers the flexibility needed to unify your systems within an optimized environment that prioritizes the performance you want , yet at the lowest cost. Applying our deep technical expertise in designing work-centric architectures to fulfill the needs of your business stakeholders, we will design, implement and manage your cloud deployment to provide a highly available service.",
        serviceIMG : CloudIMG
    }
    ,
    {
        id : "quality-assurance",
        title : "Quality Assurance",
        description : "We provide dedicated Quality Assurance services aligned to latest agile, AI/ML and Digital Transformation trends and offer end-to-end  testing & report validation services. At Amnet Digital, we strive for quality shift left and high grade deliverables with optimized Cost of Quality and significant Return on Investments.",
        serviceIMG : QualityAssuranceIMG
    },
    {
        id : "consulting",
        title : "Startegy & Consulting",
        description : "The era of the standalone digital project is over. Amnet Digital can help you create solutions that influence your whole organization. Digital powers virtually every move a company makes. Analytics informs every high-stakes decision. And emerging technologies offer huge advantage to companies that adopt them first. We help you bring all this together, infusing every project with a set of digital capabilities that focus on fulfilling your strategy. We combine our diverse expertise in data science, automation, digital experiences, enterprise technology and related disciplines, to help you take a digital-first approach to every engagement.",
        serviceIMG : ConsultingIMG
    }
    ,
    {
        id : "data-annotation",
        title : "Data Annotation",
        description : "At Amnet Digital we combine our human-assisted approach with machine-learning and give you the high-quality training data you need. Our image & video annotation, text annotation, speech/audio annotation services will give you the confidence to deploy your AI and ML models at scale. We use proprietary or open source annotation tools and provide both automated & manual tagging with pixel level segmentation to deliver high quality results. Our services are tailor-made and customized to the requirement of every project.",
        serviceIMG : DataAnnotationIMG
    }
];

export default servicesData;