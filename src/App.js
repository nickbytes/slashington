import { Route } from "react-router-dom";
import { createProvider } from "funcup";
import React from "react";

import Birthday from "./pages/05-Birthday";
import Breakfast from "./pages/01-Breakfast";
import LeavingSlashington from "./pages/04-Leaving-Slashington";
import Office from "./pages/01.5-Office";
import StartGame from "./components/00-StartGame/StartGame";
import TheCouncil from "./pages/03-The-Council";
import Train from "./pages/02-Train";

const App = props =>
  <div>
    <Route exact path="/" component={StartGame} />
    {/* <Route path="/01-Breakfast" component={Breakfast} /> */}
    <Route path="/01.5-Office" component={Office} />
    <Route path="/02-Train" component={Train} />
    <Route path="/03-The-Council" component={TheCouncil} />
    <Route path="/04-Leaving-Slashington" component={LeavingSlashington} />
    <Route path="/05-Birthday" component={Birthday} />
  </div>;

const initialState = {
  breakfastChoice: "Waffles",
  breakfastVisible: true,
  musicChoice: "",
  startBurning: false,
  playerNameVisible: false,
  playerNameInput: "",
  playerNameSaved: "",
  playerOccupationVisible: false,
  playerOccupationSaved: "",
  playerOccupationFinished: false,
  playerOccupationRadio: "",
  securityQuestionsVisible: false,
  securityQuestionsAnswered: true,
  newBadgeReceived: true,
  workspaceVisible: false,
  phoneVisible: true,
  preferredBeverage: "coffee",
  keyboardBroken: false,
  petOwner: "",
  petType: "",
  petName: "",
  initialItem: "",
  possibleItem: "",
  beverageSelection: "",
  // all below were default, not game related
  items: [],
  newItem: "",
  count: 0
};

export default createProvider(initialState)(App);
