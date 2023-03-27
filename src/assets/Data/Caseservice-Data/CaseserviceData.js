import propensityimg from "../../images/Service-Page/PropensityM.png";
import preventiveimg from "../../images/Service-Page/PreventiveM.png";
import virtualimg from "../../images/Service-Page/VirtualM.png";
import riskimg from "../../images/Service-Page/RiskM.png";


const CaseserviceData = [
    {
        id : "propensity-modelling",
        caseStudiesTitle : "Propensity Modelling",
        caseStudiesDesc : "Targeted marketing campaigns based on insights provided by propensity models for a large eCommerce client. Improved campaign effectiveness.",
        caseImg: propensityimg,
    },
    {
        id : "risk-analytics",
        caseStudiesTitle : "Risk Analytics",
        caseStudiesDesc : "Client mandated solution that can automate the lending process, credit checks, design alerts to monitor anomalies & outliers and identify high risk customers.",
        caseImg : riskimg,
    },
    {
        id : "preventive-maintenance",
        caseStudiesTitle : "Preventive Maintenance",
        caseStudiesDesc : "Developed an automated process solution that continuously monitors sensor data to predict upcoming downtime/faults and raise tickets ahead of time.",
        caseImg : preventiveimg,
    },
    {
        id : "virtual-assistant",
        caseStudiesTitle : "Virtual Assistant",
        caseStudiesDesc : "Virtual shopping assistant to help shoppers find the best products in the easiest way across multiple domains like Retail, eCommerce and Healthcare.",
        caseImg : virtualimg,
      }
];

export default CaseserviceData;