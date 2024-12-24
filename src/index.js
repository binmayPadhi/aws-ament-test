import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./assets/components/App";
import ScrollToTop from "./assets/components/ScrollTop";

ReactDOM.createRoot(document.getElementById("root"));
// document.getElementById("root").style.overflowX = "hidden";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
