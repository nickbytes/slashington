import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);
