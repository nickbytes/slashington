import StartGame from "./components/StartGame/StartGame";
import NoMatch from "./components/NoMatch";
import s1 from "./pages/s1";
import s2 from "./pages/s2";
import s3 from "./pages/s3";
import s4 from "./pages/s4";
import s5 from "./pages/s5";
import s6 from "./pages/s6";
import s7 from "./pages/s7";
import newInitialState from "./store/newInitialState";
import { createProvider } from "funcup";
import React from "react";
import { Route, Switch } from "react-router-dom";

const App = props => (
  <div>
    <Switch>
      <Route exact path="/" component={StartGame} />
      <Route path="/the-office" component={s1} />
      <Route path="/train-ride" component={s2} />
      <Route path="/slashington" component={s3} />
      <Route path="/the-council" component={s4} />
      <Route path="/to-washington" component={s5} />
      <Route path="/birthday-party" component={s6} />
      <Route path="/good-messenger" component={s7} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default createProvider(newInitialState)(App);
