import { Route } from "react-router-dom";
import { createProvider } from "funcup";
import React from "react";

import Birthday from "./pages/Birthday";
import Credits from "./pages/credits";
import GoodMessengerScene from "./pages/Good-Messenger";
import LeavingSlashington from "./pages/Slashington";
import StartGame from "./components/StartGame/StartGame";
import TheCouncil from "./pages/The-Council";
import newInitialState from "./store/newInitialState";
import s01eWork from "./pages/NewPages/s01eWork";
import s02eTrain from "./pages/NewPages/s02eTrain";

const App = props => (
  <div>
    <Route exact path="/" component={StartGame} />
    <Route path="/s01eWork" component={s01eWork} />
    <Route path="/s02eTrain" component={s02eTrain} />

    <Route path="/The-Council" component={TheCouncil} />
    <Route path="/Slashington" component={LeavingSlashington} />
    <Route path="/Birthday" component={Birthday} />
    <Route path="/Good-Messenger" component={GoodMessengerScene} />

    <Route path="/credits" component={Credits} />
  </div>
);

export default createProvider(newInitialState)(App);
