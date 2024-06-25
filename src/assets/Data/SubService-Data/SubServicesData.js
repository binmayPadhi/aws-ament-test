import AIMLBG from "../../images/Sub-Service-Images/AI-ML-Images/ai-ml-bg.jpg";
// import dmBG from "../../images/Sub-Service-Images/Data-Labeling-Images/we-are-available-bg.jpg";
import dmBG1 from "../../images/Sub-Service-Images/Data-Labeling-Images/data-annotation-bg.jpg";
import CloudServiceBG from "../../images/Sub-Service-Images/Cloud-Images/cloud-services-bg.jpg";
import PlatformEngineeringBG from "../../images/Sub-Service-Images/Platform-Engineering-Images/platform-engineering-bg.jpg";
// import QualityAssuranceBG from "../../images/Sub-Service-Images/Quality-Assurance-Images/quality-assurance-bg.jpg";
import ConsultingBG from "../../images/Sub-Service-Images/Consulting-Images/consulting-bg.jpg";
import DataEngineeringBG from "../../images/Sub-Service-Images/Data-Engineering-Images/data-engg-bg.jpg";
import DataManagementBG from "../../images/Sub-Service-Images/Data-Management-Images/data-mgmt-bg.jpg";
import AdvancedAnalyticsBG from "../../images/Sub-Service-Images/Advanced-Analytics-Images/advanced-analytics-bg.jpg";
import SubServiceCareerBG from "../../images/Sub-Service-Images/AI-ML-Images/we-are-available-bg.jpg";
import CloudServiceCareerBG from "../../images/Sub-Service-Images/Cloud-Images/we-are-available-cloud-services.jpg";
import UXBG from "../../images/Sub-Service-Images/User-Experience-Images/ux-bg.jpg";
import QABG from "../../images/Sub-Service-Images/Quality-Assurance-Images/qa-bg.jpg";


const subServicesData = [
    {
        id : "ai-ml",
        title : "AI & ML Services",
        BG : AIMLBG,
        description : "We maintain a data-driven mindset all throughout the engagement, whether it is during strategy support phase or model development phase, and focus on utilization of big data and machine learning by empowered business users. We have capability to help evolve solutions that start as process automation to cognitive insight and finally cognitive engagement when systems work autonomously.",
        subCareerBG : SubServiceCareerBG
    }
    ,
    {
        id : "data-annotation",
        BG : dmBG1,
        title : "Data Annotation",
        description : "At Amnet Digital we combine our human-assisted approach with machine-learning and give you the high-quality training data you need. Our image & video annotation, text annotation, speech/audio annotation services will give you the confidence to deploy your AI and ML models at scale.",
        subCareerBG : SubServiceCareerBG
    }
    ,
    {
        id : "quality-assurance",
        title : "Quality Assurance",
        BG : QABG,
        description : "We provide dedicated Quality Assurance services aligned to latest agile, AI/ML and Digital Transformation trends and offer end-to-end testing & report validation services. At Amnet Digital, we strive for quality shift left and high-grade deliverables with optimized Cost of Quality and significant Return on Investments.",
        subCareerBG : SubServiceCareerBG
    }
    ,
    {
        id : "consulting",
        BG : ConsultingBG,
        title : "Strategy & Consulting",
        description : "The era of the standalone digital project is over. We can help you create solutions that influence your whole organization. Digital powers virtually every move a company makes. Analytics informs every high-stakes decision. And emerging technologies offer huge advantage to companies that adopt them first. We help you bring all this together, infusing every project with a set of digital capabilities that focus on fulfilling your strategy.",
        subCareerBG : SubServiceCareerBG
    }
    ,
    {
        id : "cloud",
        title : "Cloud Services",
        BG : CloudServiceBG,
        description : "We adopt a structured approach that offers the flexibility needed to unify your systems within an optimized environment that prioritizes the performance you want , yet at the lowest cost.",
        subCareerBG : CloudServiceCareerBG
    }
    ,
    {
        id : "user-experience",
        title : "User Experience",
        BG : UXBG,
        description : "Amnet Digital aims at designing products that deliver a positive experience by bridging the gap between the stakeholder goals and user expectations. With an emotionally balanced human-centered approach we empathize with the end users and leverage effective user-centric design techniques delivering the best experience for your users across all touch points of your business!",
        subCareerBG : SubServiceCareerBG
    }
    ,
    {
        id : "platform-engineering",
        title : "Platform Engineering",
        BG : PlatformEngineeringBG,
        description : "We are a proven provider of platform engineering services specializing in the design & development of digital experiences. Our experts blend the latest in technology, development methods and tools to deliver bespoke solutions that fit perfectly into your business and elevate your brand’s engagement with your customers.",
        subCareerBG : SubServiceCareerBG
    }
    ,
    {
        id : "data-engineering",
        title : "Data Engineering",
        BG : DataEngineeringBG,
        description : "Amnet Digital takes a business focused approach to data engineering to align analytics and technology. By leveraging modern techniques like fast cluster computing you can maximize the value of your data assets. Create foundation of data and transform extracted knowledge into insights for more informed and timely business decisions.",
        subCareerBG : SubServiceCareerBG
    }
    ,
    {
        id : "advanced-analytics",
        BG : AdvancedAnalyticsBG,
        title : "Advanced Analytics",
        description : "Our proven experience in delivering analytics solutions to enterprises can help your business gain a competitive advantage. We can contribute in a crucial role to formulate the ways to improve business operations and make smart business decisions that result in best return on investments.",
        subCareerBG : SubServiceCareerBG
    }
    ,
    {
        id : "data-management",
        BG : DataManagementBG,
        title : "Data Management",
        description : "Our data management services span a wide range of business capabilities around data quality management. We help businesses create robust data management solutions that capture the most critical information within your organization 'master data' & create a single source of truth.",
        subCareerBG : SubServiceCareerBG
    }
];

export default subServicesData;


// if('a nice string'.includes('nice')){
//     return console.log("working");
// }