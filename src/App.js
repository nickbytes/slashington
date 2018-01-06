import { Route } from "react-router-dom";
import { createProvider } from "funcup";
import React from "react";

import Birthday from "./pages/Birthday";
import Credits from "./pages/credits";
import GoodMessengerScene from "./pages/Good-Messenger";
import LeavingSlashington from "./pages/Slashington";
import Office from "./pages/The-Office";
import StartGame from "./components/StartGame/StartGame";
import TheCouncil from "./pages/The-Council";
import Train from "./pages/A-Train-to-Not-Washington";
import newInitialState from "./store/newInitialState";
import s01eWork from "./pages/NewPages/s01eWork";

const App = props => (
  <div>
    <Route exact path="/" component={StartGame} />
    <Route path="/s01eWork" component={s01eWork} />

    <Route path="/The-Office" component={Office} />
    <Route path="/A-Train-to-Not-Washington" component={Train} />
    <Route path="/The-Council" component={TheCouncil} />
    <Route path="/Slashington" component={LeavingSlashington} />
    <Route path="/Birthday" component={Birthday} />
    <Route path="/Good-Messenger" component={GoodMessengerScene} />

    <Route path="/credits" component={Credits} />
  </div>
);

export default createProvider(newInitialState)(App);
