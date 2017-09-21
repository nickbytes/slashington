import { Route } from "react-router-dom";
import { createProvider } from "funcup";
import React from "react";

import StartGame from "./components/StartGame/StartGame";
import Office from "./pages/The-Office";
import Train from "./pages/A-Train-to-Not-Washington";
import LeavingSlashington from "./pages/Slashington";
import Birthday from "./pages/Birthday";
import GoodMessengerScene from "./pages/Good-Messenger";
import Credits from "./pages/credits";

import TheCouncil from "./pages/The-Council";

import initialState from "./store/initialState";

const App = props => (
  <div>
    <Route exact path="/" component={StartGame} />
    <Route path="/The-Office" component={Office} />
    <Route path="/A-Train-to-Not-Washington" component={Train} />
    <Route path="/The-Council" component={TheCouncil} />
    <Route path="/Slashington" component={LeavingSlashington} />
    <Route path="/Birthday" component={Birthday} />
    <Route path="/Good-Messenger" component={GoodMessengerScene} />
    <Route path="/credits" component={Credits} />
  </div>
);

export default createProvider(initialState)(App);
