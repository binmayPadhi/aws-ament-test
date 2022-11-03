import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Services from "./Services";
import CaseStudies from "./CaseStudies";
import Careers from "./Careers";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AIML from "./SubServices/AIML";
import Resources from "./Resources/Resources";
import CookiesPolicy from "../components/CookiesPolicy";
import Webinars from "./Webinars/Webinars";

function App() {
  const url = window.location.pathname;
  return (
    <>
      <Router forceRefresh={true}>
        {url != "/webinar-reshaping-the-retail-industry-through-AI" ? (
          <div>
            <Navbar />
          </div>
        ) : null}
        {/* <div>
          <Navbar />
        </div> */}
        <div>
          <Switch>
            <Route
              exact
              path="/webinar-reshaping-the-retail-industry-through-AI"
              component={Webinars}
            />
            <Route exact path="/" component={Homepage} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/services" component={Services} />
            <Route path="/casestudies" component={CaseStudies} />
            <Route path="/careers" component={Careers} />
            <Route
              path="/blog-seven-significant-ways-artificial-intelligence-is-impacting-the-retail-industry"
              component={Resources}
            />
            <Route path="/cookiespolicy" component={CookiesPolicy} />
            <Route path="/:id" component={AIML} />
          </Switch>
        </div>
        {url != "/webinar-reshaping-the-retail-industry-through-AI" ? (
          <div>
            <Footer />
          </div>
        ) : null}
        {/* <div>
          <Footer />
        </div> */}
      </Router>
    </>
  );
}

export default App;
