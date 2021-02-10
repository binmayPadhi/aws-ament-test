import propensityIMG from "../../images/Case-Studies-Page/cs-propensity.jpg";
import preventiveIMG from "../../images/Case-Studies-Page/cs-preventive-maintenance.jpg";
import virtualShoppingIMG from "../../images/Case-Studies-Page/cs-virtual-assistant.jpg";
import riskAnalyticsIMG from "../../images/Case-Studies-Page/cs-risk-analytics.jpg";



const caseStudiesData = [
    {
        id : "propensity-modelling",
        title : "PROPENSITY MODELLING & RECOMMENDATION SYSTEM",
        newTitle: "Propensity Modelling & Recommendation System",
        requirement : "Requirement",
        solution : "Solution Approach",
        highlight : "Highlights/Tech Components",
        benefits : "Benefits Observed",
        requirementDesc : "Deliver a personalised recommendation experience to customers by displaying relevant products in insurance, healthcare and retail based on customer's purchase behaviour, past sales data, personal interests, gender, demographics and likelihood to buy based on intent signals.",
        solutionDesc : "Designed propensity models and recommendations leveraging ML tools and techniques.",
        highlightDesc : "Leveraging techniques like Machine learning, Random Forest, XGBoost collaborative filtering, content based filtering, hybrid filtering, deep learning.",
        benefitDesc : "Improved sales execution to enable cross-sell and up-sell, effective use of resources, improved campaign effectiveness, reduced costs and provided intelligent pricing.",
        caseStudiesIMG : propensityIMG,
    },
    {
        id : "preventive-maintenance",
        title : "PREVENTIVE MAINTENANCE",
        newTitle: "Preventive Maintenance",
        requirement : "Requirement",
        solution : "Solution Approach",
        highlight : "Highlights/Tech Components",
        benefits : "Benefits Observed",
        requirementDesc : "Develop an automated process solution that continuously monitors sensor data to predict upcoming downtime/faults and raise tickets ahead of time.",
        solutionDesc : "Developed classification and regression models using data from IOT sensors.",
        highlightDesc : "Leveraging sensors and machine learning techniques like classification and regression.",
        benefitDesc : "Minimize downtimes, increased customer satisfaction, reduced losses, maximized asset lifetime.",
        caseStudiesIMG : preventiveIMG,
    },
    {
        id : "virtual-assistant",
        title : "VIRTUAL SHOPPING ASSISTANT",
        newTitle: "Virtual Shopping Assistant",
        requirement : "Requirement",
        solution : "Solution Approach",
        highlight : "Highlights/Tech Components",
        benefits : "Benefits Observed",
        requirementDesc : "Develop a virtual shopping assistant to help shoppers find the best products in the easiest way across multiple domains like retail, eCommerce and healthcare.",
        solutionDesc : "Conversational AI & Visual Search to help users intuitively find what they're searching for.",
        highlightDesc : `Deep learning techniques like Encoder-Decoder models, RNNs & deep Seq-2-Seq models to create conversational assistants. Used deep CNN to create image tagging and open CV\\CNN classification to match similar products to implement visual search.`,
        benefitDesc : "Enhanced customer shopping experience by providing customer centric search. Could run personalized loyalty programs that resulted in improved sales and customer loyalty.",
        caseStudiesIMG : virtualShoppingIMG,
    },
    {
        id : "risk-analytics",
        title : "RISK ANALYTICS",
        newTitle: "Risk Analytics",
        requirement : "Requirement",
        solution : "Solution Approach",
        highlight : "Highlights/Tech Components",
        benefits : "Benefits Observed",
        requirementDesc : "Client mandated a solution that can automate the lending process, automate credit checks, design alerts to monitor anomalies and outliers, identify high risk customers, screen for risky deals, simulate portfolios and evaluate potential impact of possible trades.",
        solutionDesc : "Developed classification models using Machine learning techniques, such as deep learning, random forest, and XGBoost.",
        highlightDesc : "Machine learning techniques like deep learning, random forest, and XGBoost.",
        benefitDesc : "Reduces risk of loss, higher interest incomes, lower sales and operating costs, reduced costs associated with risk mitigation, improved capital efficiency.",
        caseStudiesIMG : riskAnalyticsIMG,
    },
    
]

export default caseStudiesData;