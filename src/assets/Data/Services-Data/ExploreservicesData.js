import aiml from "../../images/Service-Page/aimlimage.png";
import de from "../../images/Service-Page/de.png";
import SA from "../../images/Service-Page/Statistical Analysis.png";
import SSAI from "../../images/Service-Page/Statistical_Analysis_Icon.png";
import VI from "../../images/Service-Page/Visualizations_Icon.png";
import visual from "../../images/Service-Page/Visualizations.png";
import ADI from "../../images/Service-Page/Anomaly_Detection_Icon.png";
import AD from "../../images/Service-Page/Anomaly_Detection.png";
import CAI from "../../images/Service-Page/Competitor_analysis_Icon.png";
import CA from "../../images/Service-Page/Competitor_analysis.png";
import EA from "../../images/Service-Page/Explainable AI.png";
import EAI from "../../images/Service-Page/Explainable AI Icon.png";
import AUD from "../../images/Service-Page/AutoML.png";
import AUDI from "../../images/Service-Page/AutoML Icon.png";
import MLO from "../../images/Service-Page/ML Ops.png";
import MLOI from "../../images/Service-Page/ML Ops Icon.png";
import SCO from "../../images/Service-Page/Supply Chain Optimization.png";
import SCOI from "../../images/Service-Page/Supply Chain Optimization Icon.png";
import SMAD from "../../images/Service-Page/Social Media Analytics.png";
import SMADI from "../../images/Service-Page/Social Media Analytics Icon.png";
import SR from "../../images/Service-Page/Smart Routing.png";
import SRI from "../../images/Service-Page/Smart Routing Icon.png";
import PB from "../../images/Service-Page/Product Bundling.png";
import PBI from "../../images/Service-Page/Product Bundling Icon.png";
import RE from "../../images/Service-Page/Recommendation Engine.png";
import REI from "../../images/Service-Page/Recommendation Engine Icon.png";
import PO from "../../images/Service-Page/Price Optimization.png";
import POI from "../../images/Service-Page/Price Optimization Icon.png";
import MBA from "../../images/Service-Page/Market Basket Analysis.png";
import MBAI from "../../images/Service-Page/Market Basket Analysis Icon.png";
import LO from "../../images/Service-Page/Logistics Optimization.png";
import LOI from "../../images/Service-Page/Logistics Optimization Icon.png";
import IO from "../../images/Service-Page/Inventory Optimizaton.png";
import IOI from "../../images/Service-Page/Inventory Optimizaton Icon.png";
import IA from "../../images/Service-Page/Image Analytics.png";
import IAI from "../../images/Service-Page/Image Analytics Icon.png";
import DF from "../../images/Service-Page/Demand Forecasting.png";
import DFI from "../../images/Service-Page/Demand Forecasting icon.png";
import CT from "../../images/Service-Page/Customer Targeting.png";
import CTI from "../../images/Service-Page/Customer Targeting Icon.png";
import CS from "../../images/Service-Page/Customer Segmentation.png";
import CSI from "../../images/Service-Page/Customer Segmentation Icon.png";
import CP from "../../images/Service-Page/Customer Profile.png";
import CPI from "../../images/Service-Page/Customer Profile Icon.png";
import CCA from "../../images/Service-Page/Customer Churn Analysis.png";
import CCAI from "../../images/Service-Page/Customer Churn Analysis Icon.png";
import CAVA from "../../images/Service-Page/Conversational AI & Virtual Assistant.png";
import CAVAI from "../../images/Service-Page/Conversational AI & Virtual Assistant Icon.png";
import dpl from "../../images/Service-Page/depl.png";
import depli from "../../images/Service-Page/depli.png";

const subservices = [
  {
    id: 1,
    serviceName: "aiml",
    serviceImgaetitle: "AI & ML Services",
    serviceImg: aiml,
    serviceSubheaading: "AI & ML Services for Business",
    servideSubdescription:
      "We maintain a data-driven mindset all throughout the engagement, whether it is during strategy support phase or model development phase, and focus on utilization of big data and machine learning by empowered business users. We have capability to help evolve solutions that start as process automation to cognitive insight and finally cognitive engagement when systems work autonomously.",
    sub: {
      data: [
        {
          id: 11,
          name: "Statistical Analysis",
          subimg: SA,
          subDes:
            "Leverage data science capabilities to get the maximum value from your data. Our data science teams use tools like Python, R, SAS etc for statistical analysis & modeling to analyze your data to uncover patterns and trends and to convert your data into information and knowledge.",
          subImgdata: SSAI,
        },
        {
          id: 12,
          name: "Visualizations",
          subimg: visual,
          subDes:
            "Rapidly integrate data from different sources and develop key metrics for faster decisions. We assist in data aggregation & management, managed reporting with leading platforms, automated data reporting, dashboard development and data visualization.",
          subImgdata: VI,
        },
        {
          id: 13,
          name: "Anomaly Detection",
          subimg: AD,
          subDes:
            "Identify, or even predict, abnormal patterns in unbounded data streams to discover positive buying behaviours, detect fraud or mitigate potential threats and more. We pre-determine anomalies with potential impacts eliminating false alerts resulting in less noise and more problem solving.",
          subImgdata: ADI,
        },
        {
          id: 14,
          name: "Competitor analysis",
          subimg: CA,
          subDes:
            "Identify, or even predict, abnormal patterns in unbounded data streams to discover positive buying behaviours, detect fraud or mitigate potential threats and more. We pre-determine anomalies with potential impacts eliminating false alerts resulting in less noise and more problem solving.",
          subImgdata: CAI,
        },
        {
          id: 15,
          name: "Conversational AI & Virtual Assistant",
          subimg: CAVA,
          subDes:
            "Use intelligent chatbots to assist customers throughout their shopping experience. We develop custom virtual assistants using NLP and machine learning algorithms with features like multipronged NLP engine, flexible deployment, conversational intelligence, omnichannel platform and extract insights through self-reporting dashboards.",
          subImgdata: CAVAI,
        },
        {
          id: 16,
          name: "Customer Churn Analysis",
          subimg: CCA,
          subDes:
            "Identify high, medium and low-risk customers to devise strategies for preventing customer attrition. We use supervised learning methods like data gathering/analysis (geographic, demographic, behavioural, transactional data), attrition stage analysis, engagement, responsiveness & feedback analysis, customer classification using trained models and retention strategies.",
          subImgdata: CCAI,
        },
        {
          id: 17,
          name: "Customer Profile",
          subimg: CP,
          subDes:
            "Get a holistic view of customer information to efficiently carry out real-time research improving selling experience. We use various machine learning clustering algorithms to profile and segment customers by their purchases, their experiences and behaviour with your product or service, their firmographics and more to achieve greater return on investment.",
          subImgdata: CPI,
        },
        {
          id: 18,
          name: "Customer Segmentation",
          subimg: CS,
          subDes:
            "Group customers based on the similarities observed from the data to improve customer service leading to customer loyalty and retention. We segment customers using un-supervised learning methods and specify ideal segments, collect & explore data, extract segments, profile segments, describe segments, choose segments of interest and customize sales & marketing efforts around them.",
          subImgdata: CSI,
        },
        {
          id: 19,
          name: "Customer Targeting",
          subimg: CT,
          subDes:
            "Target customers & prospects by drawing similarities with other customers to improve sales revenue by improved cross-sell and up-sell opportunities. We leverage supervised learning methods to analyze & select type of targeting, create propensity models, stratify customers, devise targeted marketing strategies & perform campaign effectiveness analysis to identify gaps and improve.",
          subImgdata: CTI,
        },
        {
          id: 20,
          name: "Demand Forecasting",
          subimg: DF,
          subDes:
            "Understand patterns, trends and seasonality in historical sales and predict future demand. We support demand forecasting by leveraging statistical time series algorithms' characteristics like time dependency audits, repeating trends analysis, seasonal patterns anatomization and impact of special events.",
          subImgdata: DFI,
        },
        {
          id: 21,
          name: "Image Analytics",
          subimg: IA,
          subDes:
            "Derive insights from images with AutoML or use pre-trained models to detect emotion, understand text and more. We offer text-in image detection, facial recognition and object recognition.",
          subImgdata: IAI,
        },
        {
          id: 22,
          name: "Inventory Optimizaton",
          subimg: IO,
          subDes:
            "Maintain optimum inventory levels to meet the current & expected demand without under/overstocking products. We power inventory optimization with product analysis, demand forecasting (product & average lead times), financial model development and outlier analysis.",
          subImgdata: IOI,
        },
        {
          id: 24,
          name: "Logistics Optimization",
          subimg: LO,
          subDes:
            "Optimize known and unpredictable variables to meet business requirements and ultimately process more shipments in the same window of time, reducing costs and improving efficiencies. We develop custom machine learning models that utilize historical data to accurately forecast/predict units to improve associate planning and save money.",
          subImgdata: LOI,
        },
        {
          id: 25,
          name: "Market Basket Analysis",
          subimg: MBA,
          subDes:
            "Understand the items that are purchased together to cross-sell, optimize pricing, derive relevant promotional campaigns and merchandizing decisions. We assist in loading the data, defining parameters to recognize buying patterns, embed analytics engine to identify most probable product bundles and generate thorough reports to cross-sell at customer level.",
          subImgdata: MBAI,
        },
        {
          id: 26,
          name: "Price Optimization",
          subimg: PO,
          subDes:
            "Analyze demand, seasonality, operating costs & other KPIs to determine optimal price for products generating maximum profits. We enable price optimization with data gathering/analysis (internal, external), intent analysis, anomalies detection, model generation and scheduled price updates.",
          subImgdata: POI,
        },
        {
          id: 27,
          name: "Product Bundling",
          subimg: PB,
          subDes:
            "Identify frequently occurring patterns in data majorly pertaining to transaction data to help make decisions related to marketing, sales, store management, inventory management and more. We pre-process the data using methods like data cleansing, transaction identification & classification, data transformation, data enrichment and apply association rule mining to understand what products sell best together.",
          subImgdata: PBI,
        },
        {
          id: 28,
          name: "Recommendation Engine",
          subimg: RE,
          subDes:
            "Understand customers purchase patterns, interests, preferences and similarities with other users to recommend relevant products for achieving increased cross-sell/up-sell opportunities. We build customized recommendation engines with data gathering/analysis (users, products), similarity analysis, product categorization and product ranking.",
          subImgdata: REI,
        },
        {
          id: 29,
          name: "Smart Routing",
          subimg: SR,
          subDes:
            "Reduce handling delays, prevent crisis, prioritize issues with intelligent information routing through semantic or mixed approach. We analyze topics, sentiment and customer behaviour to build algorithms for precise classification & routing of content.",
          subImgdata: SRI,
        },
        {
          id: 30,
          name: "Social Media Analytics",
          subimg: SMAD,
          subDes:
            "Collect, analyze and evaluate vast amount of semi-structured and unstructured social media data and turn it into insights for business with descriptive, predictive and prescriptive analytics. We support strategy development, tool identification, data gathering/analysis and track metrics related to content, timing, audience, sentiments and competitors to assess social media marketing efforts and improve them.",
          subImgdata: SMADI,
        },
        {
          id: 31,
          name: "Supply Chain Optimization",
          subimg: SCO,
          subDes:
            "Improve efficiency of supply chain activities to achieve the capability to cater to customers demands with accuracy and minimum possible investment. We support optimization of supply chain through demand forecasting, inventory management, preventive maintenance, quality inspections, production planning and disruption handling.",
          subImgdata: SCOI,
        },
        {
          id: 32,
          name: "ML Ops",
          subimg: MLO,
          subDes:
            "Create reproduceable workflows and machine learning models for easy deployment on any platform. We assist with development of enterprise architecture to deploy and maintain all machine learning solutions with versioning and monitoring controls.",
          subImgdata: MLOI,
        },
        {
          id: 33,
          name: "AutoML",
          subimg: AUD,
          subDes:
            "Enable automation of ML pipeline flow without manual intervention starting from raw data to deployment resulting in effortless and accurate machine learning solutions. We assist in pre-processing and cleansing of data, construction of appropriate features, selection of model family, optimization of model hyperparameters and post-processing of machine learning models.",
          subImgdata: AUDI,
        },
        {
          id: 34,
          name: "Explainable AI",
          subimg: EA,
          subDes:
            "Identify model accuracy, fairness, transparency, outcomes, it's expected impact and potential biases, to make your model insights accountable and effective. We develop individualized models with robust and validated algorithms that enable automated learning workflow keeping data & models in sync.",
          subImgdata: EAI,
        },
      ],
    },
  },
  {
    id: 2,
    serviceName: "dataengineering",
    serviceImgaetitle: "Data Engineering",
    serviceImg: de,
    serviceSubheaading: "Data Engineering for Business",
    servideSubdescription:
      "Amnet Digital takes a business focused approach to data engineering to align analytics and technology. By leveraging modern techniques like fast cluster computing you can maximize the value of your data assets. Create foundation of data and transform extracted knowledge into insights for more informed and timely business decisions.",
    sub: {
      data: [
        {
          id: 11,
          name: "Data Pipelines",
          subimg: dpl,
          subDes:
            "Automate the movement and transformation of data, eliminating manual intervention reducing errors during data transportation. We assist in data source identification & verification, data ingestion, batch & streaming ingestion, data transformation using ETL or ELT and data monitoring.",
          subImgdata: depli,
        },
        {
          id: 12,
          name: "Data Transformations",
          subimg: visual,
          subDes:
            "Support comprehensive and effective data warehousing & data migration solutions that enable efficient movement and management of data. We support seamless integrations, automatic failover, transformation versioning, transformation as a service, rule-based transformations and scalable architectures for bulk processing.",
          subImgdata: VI,
        },
        {
          id: 13,
          name: "Anomaly Detection",
          subimg: AD,
          subDes:
            "Identify, or even predict, abnormal patterns in unbounded data streams to discover positive buying behaviours, detect fraud or mitigate potential threats and more. We pre-determine anomalies with potential impacts eliminating false alerts resulting in less noise and more problem solving.",
          subImgdata: ADI,
        },
        {
          id: 14,
          name: "Competitor analysis",
          subimg: CA,
          subDes:
            "Identify, or even predict, abnormal patterns in unbounded data streams to discover positive buying behaviours, detect fraud or mitigate potential threats and more. We pre-determine anomalies with potential impacts eliminating false alerts resulting in less noise and more problem solving.",
          subImgdata: CAI,
        },
        {
          id: 15,
          name: "Conversational AI & Virtual Assistant",
          subimg: CAVA,
          subDes:
            "Use intelligent chatbots to assist customers throughout their shopping experience. We develop custom virtual assistants using NLP and machine learning algorithms with features like multipronged NLP engine, flexible deployment, conversational intelligence, omnichannel platform and extract insights through self-reporting dashboards.",
          subImgdata: CAVAI,
        },
        {
          id: 16,
          name: "Customer Churn Analysis",
          subimg: CCA,
          subDes:
            "Identify high, medium and low-risk customers to devise strategies for preventing customer attrition. We use supervised learning methods like data gathering/analysis (geographic, demographic, behavioural, transactional data), attrition stage analysis, engagement, responsiveness & feedback analysis, customer classification using trained models and retention strategies.",
          subImgdata: CCAI,
        },
        {
          id: 17,
          name: "Customer Profile",
          subimg: CP,
          subDes:
            "Get a holistic view of customer information to efficiently carry out real-time research improving selling experience. We use various machine learning clustering algorithms to profile and segment customers by their purchases, their experiences and behaviour with your product or service, their firmographics and more to achieve greater return on investment.",
          subImgdata: CPI,
        },
        {
          id: 18,
          name: "Customer Segmentation",
          subimg: CS,
          subDes:
            "Group customers based on the similarities observed from the data to improve customer service leading to customer loyalty and retention. We segment customers using un-supervised learning methods and specify ideal segments, collect & explore data, extract segments, profile segments, describe segments, choose segments of interest and customize sales & marketing efforts around them.",
          subImgdata: CSI,
        },
      ],
    },
  },
];

export default subservices;
