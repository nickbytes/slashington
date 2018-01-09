import { Route } from "react-router-dom";
import { createProvider } from "funcup";
import React from "react";

import Credits from "./pages/credits";
import StartGame from "./components/StartGame/StartGame";
import newInitialState from "./store/newInitialState";
import s01eWork from "./pages/NewPages/s01eWork";
import s02eTrain from "./pages/NewPages/s02eTrain";
import s03eTheCouncil from "./pages/NewPages/s03eTheCouncil";
import s04eSlashington from "./pages/NewPages/s04eSlashington";
import s05eBirthday from "./pages/NewPages/s05eBirthday";
import s06eGoodMessenger from "./pages/NewPages/s06eGoodMessenger";

const App = props => (
  <div>
    <Route exact path="/" component={StartGame} />
    <Route path="/s01eWork" component={s01eWork} />
    <Route path="/s02eTrain" component={s02eTrain} />
    <Route path="/s03eTheCouncil" component={s03eTheCouncil} />
    <Route path="/s04eSlashington" component={s04eSlashington} />
    <Route path="/s05eBirthday" component={s05eBirthday} />
    <Route path="/s06eGoodMessenger" component={s06eGoodMessenger} />

    <Route path="/credits" component={Credits} />
  </div>
);

export default createProvider(newInitialState)(App);
