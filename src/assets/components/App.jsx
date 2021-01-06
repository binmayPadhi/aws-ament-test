import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./Homepage";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Services from "./Services";
import CaseStudies from "./CaseStudies";
import Careers from "./Careers";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AIML from "./SubServices/AIML";
import RetailEcommerce from "./Industries/RetailEcommerce";
import Healthcare from "./Industries/Healthcare";
import InformationManagement from "./Industries/InformationManagement";
import FinancialServices from "./Industries/FinancialServices";


function App(){
    return (
        <>
            <Router forceRefresh={true}>
              <div>
                <Navbar />
              </div>
            <div>
                <Switch>
                    <Route exact path = "/" component = {Homepage} />
                    <Route  path = "/contactus" component = {ContactUs} />
                    <Route  path = "/aboutus" component = {AboutUs} />
                    <Route  path = "/services" component = {Services} />
                    <Route  path = "/casestudies" component = {CaseStudies} />
                    <Route  path = "/careers" component = {Careers} />
                    <Route path = "/retail-ecommerce" component ={RetailEcommerce} />
                    <Route path = "/healthcare" component ={Healthcare} />
                    <Route path = "/information-management" component ={InformationManagement} />
                    <Route path = "/financial-services" component ={FinancialServices} />
                    <Route  path = "/:id" component = {AIML} />
                    
                    {/* <Route exact  path = "/data-labeling" component = {AIML} /> */}
                    {/* <Route exact  path = "/service/data-management" component = {AIML} /> */}
                </Switch>
            </div>
            <div>
                <Footer />
            </div>
        </Router>
        </>
    )
}

export default App;