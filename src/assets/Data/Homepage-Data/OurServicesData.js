// NEW HOME OUR SERVICE SECTION
import AimlDropdownIcon from "../../images/HomePage/aiml.png";
import DataManagementDropdownIcon from "../../images/HomePage/our-services/data-mgmt-icon.png";
import AdvancedAnalyticsDropdownIcon from "../../images/HomePage/our-services/advanced-analytics-icon.png";
import DataEngineeringDropdownIcon from "../../images/HomePage/our-services/data-engg-icon.png";
import cloud from "../../images/HomePage/cloud.png";
import UXDropdownIcon from "../../images/HomePage/our-services/ux-icon.png";

const OurServicesData = [
  {
    id: "ai-ml",
    serviceTitle: "AI & ML Services",
    serviceDesc:
      "Take advantage of the data-driven mindset that leverages cutting-edge technologies to develop world class solutions.",
    serviceIcon: AimlDropdownIcon,
    link: "ai-ml",
  },

  {
    id: "advanced-analytics",
    serviceTitle: "Advanced Analytics",
    serviceDesc:
      "Uncover complex patterns in your data to anticipate and prepare your business for the next business opportunity.",
    // serviceIMG : AdvancedAnalyticsIMG,
    serviceIcon: AdvancedAnalyticsDropdownIcon,
    link: "advanced-analytics",
  },
  {
    id: "data-management",
    serviceTitle: "Data Management",
    serviceDesc:
      "Ensuring available, accurate, and accessible data. Transformation needs to take place in the way businesses consume data protection and cloud needs to be at the center of that evolution.",
    // serviceIMG : DataManagementIMG,
    serviceIcon: DataManagementDropdownIcon,
    link: "data-management",
  },
  {
    id: "data-engineering",
    serviceTitle: "Data Engineering",
    serviceDesc:
      "Maximize the value of your data assets by leveraging modern approaches to make extraction of data insights a daily business process.",
    // serviceIMG : DataEngineeringIMG,
    serviceIcon: DataEngineeringDropdownIcon,
    link: "dataengineering",
  },
  {
    id: "cloud-services",
    serviceTitle: "Cloud",
    serviceDesc:
      "Discover the most efficient way to deliver highly available services that can scale with your business growth and keep you ahead of competition.",
    // serviceIMG : PlatformEngineeringIMG,
    serviceIcon: cloud,
    link: "cloud-services",
  },
  {
    id: "user-experience",
    serviceTitle: "User Experience",
    serviceDesc:
      "Deliver a complete digital experience like a glue binding together all the touch points creating omnichannel experiences using better practices.",
    // serviceIMG : UserExperienceIMG,
    serviceIcon: UXDropdownIcon,
    link: "user-experience",
  },
  // {
  //     id : "cloud",
  //     serviceTitle : "Cloud",
  //     serviceDesc : "Discover the most efficient way to deliver highly available services that can scale with your business growth and keep you ahead of competition.",
  //     // serviceIMG : CloudIMG,
  //     serviceIcon : CloudDropdownIcon
  // },
  // {
  //     id : "quality-assurance",
  //     serviceTitle : "Quality Assurance",
  //     serviceDesc : "Strive for quality shift left and high grade deliverables with optimized Cost of Quality (COQ) and significant Return on Investments.",
  //     // serviceIMG : QualityAssuranceIMG,
  //     serviceIcon : QADropdownIcon
  // },
  // {
  //     id : "consulting",
  //     serviceTitle : "Strategy & Consulting",
  //     serviceDesc : "Propel innovation & accelerate transformation by ensuring that the right digital capabilities are at the heart of everything you do. Every initiative you invest in pervades across the organization.",
  //     // serviceIMG : ConsultingIMG,
  //     serviceIcon : ConsultingDropdownIcon
  // }
];

export default OurServicesData;
