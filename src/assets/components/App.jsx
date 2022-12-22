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
import Insight from "./Resources/Insight";
import CookiesPolicy from "../components/CookiesPolicy";
import Webinars from "./Webinars/Webinars";
import Privacypolicy from "./Privacypolicy/Privacypolicy";
import SwiftInisghtsWebinar from "./Swiftinsights/SwiftInisghtsWebinar";
import Thankswebinar from "./Webinars/Thankswebinar";
import Videowebinar from "./Webinars/Videowebinar";

function App() {
  const url = window.location.pathname;
  return (
    <>
      <Router forceRefresh={true}>
        {url != "/webinar-reshaping-the-retail-industry-through-AI" &&
        url != "/thanks-webinar" &&
        url != "/video-webinar" &&
        url != "/swiftinisghts-Webinar" ? (
          <div>
            <Navbar />
          </div>
        ) : null}
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
              component={Insight}
            />
            <Route
              exact
              path="/swiftinisghts-Webinar"
              component={SwiftInisghtsWebinar}
            />
            <Route path="/cookiespolicy" component={CookiesPolicy} />
            <Route path="/privacypolicy" component={Privacypolicy} />
            <Route path="/thanks-webinar" component={Thankswebinar} />
            <Route path="/video-webinar" component={Videowebinar} />
            <Route path="/:id" component={AIML} />
          </Switch>
        </div>
        {url != "/webinar-reshaping-the-retail-industry-through-AI" &&
        url != "/thanks-webinar" &&
        url != "/video-webinar" &&
        url != "/swiftinisghts-Webinar" ? (
          <div>
            <Footer />
          </div>
        ) : null}
      </Router>
    </>
  );
}

export default App;
