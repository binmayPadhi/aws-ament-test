import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Homepage from "./Homepage";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Services from "./Services";
import CaseStudies from "./CaseStudies";
import Careers from "./Careers";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App(){
    return (
        <>
            <Router>
              <div>
                <Navbar />
              </div>
            <div>
                <Switch>
                    <Route exact path = "/" component = {Homepage} />
                    <Route exact path = "/contactus" component = {ContactUs} />
                    <Route  path = "/aboutus" component = {AboutUs} />
                    <Route  path = "/services" component = {Services} />
                    <Route  path = "/casestudies" component = {CaseStudies} />
                    <Route  path = "/careers" component = {Careers} />
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