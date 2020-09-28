import propensityIMG from "../../images/Case-Studies-Page/amnet-cs-propensity.jpg";
import preventiveIMG from "../../images/Case-Studies-Page/amnet-cs-preventive.jpg";
import virtualShoppingIMG from "../../images/Case-Studies-Page/amnet-cs-virtual-shopping.jpg";
import riskAnalyticsIMG from "../../images/Case-Studies-Page/amnet-cs-risk-analytics.jpg";
import propensityIcon from "../../images/Case-Studies-Page/amnet-propensity-cs-icon.png";
import preventiveIcon from "../../images/Case-Studies-Page/amnet-recom-system-cs-icon.png";
import virtualShoppingIcon from "../../images/Case-Studies-Page/amnet-virtual-shopping-cs-icon.png";
import riskAnalyticsIcon from "../../images/Case-Studies-Page/amnet-risk-analytics-cs-icon.png";


const caseStudiesData = [
    {
        id : 1,
        title : "PROPENSITY MODELLING & RECOMMENDATION SYSTEM",
        requirement : "REQUIREMENT",
        solution : "SOLUTION APPROACH",
        highlight : "HIGHLIGHTS/TECH COMPONENTS",
        benefits : "BENEFITS OBSERVED",
        requirementDesc : "Deliver a personalised recommendation experience to customers by displaying relevant products in insurance, healthcare and retail based on customer's purchase behaviour, past sales data, personal interests, gender, demographics and likelihood to buy based on intent signals.",
        solutionDesc : "Designed propensity models and recommendations leveraging ML tools and techniques.",
        highlightDesc : "Leveraging techniques like Machine learning, Random Forest, XGBoost collaborative filtering, content based filtering, hybrid filtering, deep learning.",
        benefitDesc : "Improved sales execution to enable cross-sell and up-sell, effective use of resources, improved campaign effectiveness, reduced costs and provided intelligent pricing.",
        caseStudiesIMG : propensityIMG,
        caseStudiesIcon : propensityIcon
    },
    {
        id : 2,
        title : "PREVENTIVE MAINTENANCE",
        requirement : "REQUIREMENT",
        solution : "SOLUTION APPROACH",
        highlight : "HIGHLIGHTS/TECH COMPONENTS",
        benefits : "BENEFITS OBSERVED",
        requirementDesc : "Develop an automated process solution that continuously monitors sensor data to predict upcoming downtime/faults and raise tickets ahead of time.",
        solutionDesc : "Developed classification and regression models using data from IOT sensors.",
        highlightDesc : "Leveraging sensors and machine learning techniques like classification and regression.",
        benefitDesc : "Minimize downtimes, increased customer satisfaction, reduced losses, maximized asset lifetime.",
        caseStudiesIMG : preventiveIMG,
        caseStudiesIcon : preventiveIcon
    },
    {
        id : 3,
        title : "VIRTUAL SHOPPING ASSISTANT",
        requirement : "REQUIREMENT",
        solution : "SOLUTION APPROACH",
        highlight : "HIGHLIGHTS/TECH COMPONENTS",
        benefits : "BENEFITS OBSERVED",
        requirementDesc : "Develop a virtual shopping assistant to help shoppers find the best products in the easiest way across multiple domains like retail, eCommerce and healthcare.",
        solutionDesc : "Conversational AI & Visual Search to help users intuitively find what they're searching for.",
        highlightDesc : "Deep learning techniques like Encoder-Decoder models, RNNs & deep Seq-2-Seq models to create conversational assistants. Used deep CNN to create image tagging and openCV\CNN classification to match similar products to implement visual search.",
        benefitDesc : "Enhanced customer shopping experience by providing customer centric search. Could run personalized loyalty programs that resulted in improved sales and customer loyalty.",
        caseStudiesIMG : virtualShoppingIMG,
        caseStudiesIcon : virtualShoppingIcon
    },
    {
        id : 4,
        title : "RISK ANALYTICS",
        requirement : "REQUIREMENT",
        solution : "SOLUTION APPROACH",
        highlight : "HIGHLIGHTS/TECH COMPONENTS",
        benefits : "BENEFITS OBSERVED",
        requirementDesc : "Client mandated a solution that can automate the lending process, automate credit checks, design alerts to monitor anomalies and outliers, identify high risk customers, screen for risky deals, simulate portfolios and evaluate potential impact of possible trades.",
        solutionDesc : "Developed classification models using Machine-learning techniques, such as deep learning, random forest, and XGBoost.",
        highlightDesc : "Machine-learning techniques like deep learning, random forest, and XGBoost.",
        benefitDesc : "Reduces risk of loss, higher interest incomes, lower sales and operating costs, reduced costs associated with risk mitigation, improved capital efficiency.",
        caseStudiesIMG : riskAnalyticsIMG,
        caseStudiesIcon : riskAnalyticsIcon
    }
]

export default caseStudiesData;