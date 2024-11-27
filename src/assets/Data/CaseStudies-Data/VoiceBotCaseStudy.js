import image from "../../images/Resources-page/blogcenter.png";
import image1 from "../../images/Resources-page/SupplyChainimg.png";
import image2 from "../../images/Resources-page/customer_predictionimg.png";
import InventoryManagement from "../../components/Resources/InventoryManagement";
// import VoiceBotCasestudy from "../../components/voicebotcasestudy";
const voicebotcasestudy = [
    {
        id: 1,
        type: 'paragraphs',
        header: 'Company Overview',
        header_text: 'The company is a B2B supplier specializing in electronic components for industrial applications. Serving over ~150,000 businesses, they are known for high-quality products in the category of automation, visibility & mobility (RFID scanners, printers etc) and exceptional customer service. However, maintaining active engagement with all clients was a growing concern. A large portion of their customers were going dormant & repeat sales were on the decline ',
        link: "https://www.statista.com/statistics/1197958/ai-use-cases-consumer-goods-retail-global/",
    },
    {
        id: 2,
        type: 'orderedList',
        sub_heading:"Challenges",
       sub_heading_description:"The company faced several issues affecting their business development: ",
        orderedlist: [
            {
              sidehead:"Inactive Clients: ",
              content: "About 60% of their clients had not made purchases in over a year. ",
            },
            {
              sidehead:"Lost Revenue Opportunities: ",
              content: "Dormant accounts represented missed chances for sales growth. ",
            },
            {
              sidehead:"Limited Sales Capacity: ",
              content:
                "The sales team lacked the resources to reengage inactive clients individually. ",
            },
            {
                sidehead:"Competitive Threats: ",
                content:
                  "Risked losing clients permanently to competitors actively pursuing the same market. ",
              },

          ],
      

    },




{
    id: 4,
    type: 'main_orderedList',
    sub_heading:"Solution",
    sub_heading_description:"The company implemented an AI-based voice bot to proactively reconnect with dormant clients. The goal was to understand their needs and reignite business relationships through personalized outreach. ",
    
    sub_heading_mains : [

        {
            Supersubheader: "Implementation Strategy ",
            subheader: "1. Data Synchronization:  ",
            content:[
                {
                  sidehead:"CRM Integration: ",
                  content: "The bot accessed historical data to personalize communications.",
                },
                {
                  sidehead:"Client Segmentation:  ",
                  content: "Identified and categorized dormant clients based on various factors.",
                },
        
              ],
        },


        {
            subheader: "2. Personalized Outreach: ",
            content:[
                {
                  sidehead:"Customized Messages: ",
                  content: "Addressed clients by name, referencing past interactions.",
                },
                {
                  sidehead:"Exclusive Offers: ",
                  content: "Provided tailored promotions to incentivize reengagement.",
                },
        
              ],
        },


        {
            subheader: "3. Interactive Communication:  ",
            content:[
                {
                  sidehead:"Two-Way Dialogue: ",
                  content: "Allowed clients to express needs and ask questions. ",
                },
                {
                  sidehead:"Feedback Collection:",
                  content: "Gathered insights on reasons for inactivity.",
                },
          
              ],
        },



        {
            subheader: "4. Follow-Up Processes:  ",
            content:[
                {
                  sidehead:"Lead Qualification: ",
                  content: "Flagged interested clients for sales team follow-up. ",
                },
                {
                  sidehead:"Appointment Scheduling: ",
                  content: "Assisted in arranging meetings with representatives.",
                },
             
        
              ],
        }
    ],
    
},

{
    id: 4,
    type: 'main_orderedList',
    sub_heading:"Outcomes and Benefits",
    sub_heading_description:  "The campaign led to notable successes: ",
    
    sub_heading_mains : [

        {
            subheader: "Client Reengagement: ",
            content:[
                {
                  sidehead:"Reactivated Accounts: ",
                  content: "Reengaged 12% of dormant clients within six months.",
                },
                {
                  sidehead:"Increased Sales:  ",
                  content: "Generated approximately ~ $850,000 in additional revenue. " ,
                },
             
        
              ],
        },


        {
            subheader: "Improved Understanding: ",
            content:[
                {
                  sidehead:"Client Feedback:  ",
                  content: "Identified common concerns, allowing for service improvements.",
                },
                {
                  sidehead:"Enhanced Offerings:  ",
                  content:
                    "Adjusted products and services based on client needs.  ",
                },
        
        
              ],
        },




        {
            subheader: "Operational Efficiency: ",
            content:[
                {
                  sidehead:"Cost Savings: ",
                  content:
                    "Saved an estimated ~ $90,000 in labor costs. ",
                },
                {
                  sidehead:"Scalable Outreach: ",
                  content: " Contacted numerous clients without additional staff.",
                },
        
              ],
        },



        {
            subheader: "Competitive Edge:   ",
            content:[
                {
                  sidehead:"Strengthened Relationships: ",
                  content: "Demonstrated commitment to clients, enhancing loyalty.",
                },
                {
                  sidehead:"Market Positioning: ",
                  content:
                    " Differentiated the company from competitors through proactive engagement. ",
                },
        
              ],
        }
    ],
    
},



   {
        id: 9,
        type: "conclusion",
        heading:"Conclusion ",
        description: "By utilizing our AI-based voice bot for reengagement, the customer revitalized relationships with dormant clients, leading to increased revenue, improved understanding of customer needs, higher operational efficiency and a stronger market position. "
    },





]
export default voicebotcasestudy;