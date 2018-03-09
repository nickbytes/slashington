import "./index.css";

import { MemoryRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";

import App from "./App";
import ScrollToTop from "./components/ScrollToTop";

ReactGA.initialize("UA-68486925-2");

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);
