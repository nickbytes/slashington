import { Route, Switch } from "react-router-dom";
import { createProvider } from "funcup";
import React from "react";

import NoMatch from "./components/NoMatch";
import credits from "./pages/credits";
import initialState from "./store/initialState";
import s0 from "./pages/s0";
import s1 from "./pages/s1";
import s2 from "./pages/s2";
import s3 from "./pages/s3";
import s4 from "./pages/s4";
import s5 from "./pages/s5";
import s6 from "./pages/s6";
import s7 from "./pages/s7";

const App = props => (
  <div>
    <Switch>
      <Route exact path="/" component={s0} />
      <Route path="/broken-keyboard" component={s1} />
      <Route path="/train-ride" component={s2} />
      <Route path="/slashington" component={s3} />
      <Route path="/the-council" component={s4} />
      <Route path="/to-washington" component={s5} />
      <Route path="/birthday-party" component={s6} />
      <Route path="/country-pop" component={s7} />
      <Route path="/credits" component={credits} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default createProvider(initialState)(App);
