import { Route } from "react-router-dom";
import { createProvider } from "funcup";
import React from "react";

import StartGame from "./components/StartGame/StartGame";
import newInitialState from "./store/newInitialState";
import s1 from "./pages/s1";
import s2 from "./pages/s2";
import s3 from "./pages/s3";
import s4 from "./pages/s4";
import s5 from "./pages/s5";
import s6 from "./pages/s6";
import s7 from "./pages/s7";

const App = props => (
  <div>
    <Route exact path="/" component={StartGame} />
    <Route path="/the-office" component={s1} />
    <Route path="/train-ride" component={s2} />
    <Route path="/slashington" component={s3} />
    <Route path="/the-council" component={s4} />
    <Route path="/to-washington" component={s5} />
    <Route path="/birthday-party" component={s6} />
    <Route path="/good-messenger" component={s7} />
  </div>
);

export default createProvider(newInitialState)(App);
