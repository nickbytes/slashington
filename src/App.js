import { Route } from "react-router-dom";
import { createProvider } from "funcup";
import React from "react";

import StartGame from "./components/StartGame/StartGame";
import newInitialState from "./store/newInitialState";
import s01eWork from "./pages/s01eWork";
import s02eTrain from "./pages/s02eTrain";
import s03eSlashington from "./pages/s03eSlashington";
import s04eTheCouncil from "./pages/s04eTheCouncil";
import s05eSlashing2Washington from "./pages/s05eSlashing2Washington";
import s06eBirthdayParty from "./pages/s06eBirthdayParty";
import s07eGoodMessenger from "./pages/s07eGoodMessenger";

const App = props => (
  <div>
    <Route exact path="/" component={StartGame} />
    <Route path="/s01eWork" component={s01eWork} />
    <Route path="/s02eTrain" component={s02eTrain} />
    <Route path="/s03eSlashington" component={s03eSlashington} />
    <Route path="/s04eTheCouncil" component={s04eTheCouncil} />
    <Route
      path="/s05eSlashing2Washington"
      component={s05eSlashing2Washington}
    />
    <Route path="/s06eBirthdayParty" component={s06eBirthdayParty} />
    <Route path="/s07eGoodMessenger" component={s07eGoodMessenger} />
  </div>
);

export default createProvider(newInitialState)(App);
