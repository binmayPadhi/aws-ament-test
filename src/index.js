import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./assets/components/App";

ReactDOM.createRoot(document.getElementById("root"));
document.getElementById("root").style.overflowX = "hidden";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
