import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./Homepage";
import ContactUs from "./ContactUs";
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