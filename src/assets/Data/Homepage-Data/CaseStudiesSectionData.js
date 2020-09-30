import propensityIMG from "../../images/HomePage/case-studies/amnet-propensity-cs.jpg";
import riskAnalyticsIMG from "../../images/HomePage/case-studies/amnet-risk-analytics-cs.jpg";
import preventiveIMG from "../../images/HomePage/case-studies/amnet-recom-system-cs.jpg";
import propensityIcon from "../../images/HomePage/case-studies/amnet-propensity-cs-icon.png";
import riskAnalyticsIcon from "../../images/HomePage/case-studies/amnet-risk-analytics-cs-icon.png";
import preventiveIcon from "../../images/HomePage/case-studies/amnet-recom-system-cs-icon.png";

const CaseStudiesSectionData = [
    {
        id : "propensity-modelling",
        caseStudiesTitle : "PROPENSITY MODELLING",
        caseStudiesDesc : "Targeted marketing campaigns based on insights provided by propensity models for a large eCommerce client. Improved campaign effectiveness.",
        caseStudiesIMG : propensityIMG,
        caseStudiesIcon : propensityIcon
    },
    {
        id : "risk-analytics",
        caseStudiesTitle : "RISK ANALYTICS",
        caseStudiesDesc : "Client mandated solution that can automate the lending process, credit checks, design alerts to monitor anomalies & outliers and identify high risk customers.",
        caseStudiesIMG : riskAnalyticsIMG,
        caseStudiesIcon : riskAnalyticsIcon
    },
    {
        id : "preventive-maintenance",
        caseStudiesTitle : "PREVENTIVE MAINTENANCE",
        caseStudiesDesc : "Develop an automated process solution that continuously monitors sensor data to predict upcoming downtime/faults and raise tickets ahead of time.",
        caseStudiesIMG : preventiveIMG,
        caseStudiesIcon : preventiveIcon
    }
];

export default CaseStudiesSectionData;