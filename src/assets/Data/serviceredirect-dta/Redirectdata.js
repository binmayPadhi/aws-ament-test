import { redirect } from "react-router-dom";

const ServiceRedirectData = [
    {
        name: "aiml", redirecturl: "/services/ai-ml"
    },
    {
        name: "advancedanalytics", redirecturl: "/services/advanced-analytics"
    },
    {
        name: "strategyconsulting", redirecturl: "/services/strategy-consulting"
    },
    {
        name: "dataannotation", redirecturl: "/services/data-annotation"
    },
    {
        name: "dataengineering", redirecturl: "/services/data-engineering"
    },
    {
        name: "datamanagement", redirecturl: "/services/data-management"
    },
   
    {
        name: "userexperinces", redirecturl: "/services/user-experience"
    },
    {
        name: "cloudservices", redirecturl: "/services/cloud-services"
    },
    {
        name: "qualityassurance", redirecturl: "/services/quality-assurance"
    },
    {
        name: "/services/dataengineering/data-pipelines", redirecturl: "/services/data-engineering/data-pipelines"  // Added entry for sub-URL redirection
    },

    // {
    //     name: "imageannotation", redirecturl:"/services/data-annotation/image-annotation"
    // }


]

export default ServiceRedirectData;