import React from "react";
import { Route } from "react-router-dom";
import { createProvider } from "funcup";

import Breakfast from "./pages/01-Breakfast";
import Office from "./pages/02-Office";
import Train from "./pages/02.5-Train";
import TheCouncil from "./pages/03-The-Council";
import LeavingSlashington from "./pages/04-Leaving-Slashington";
import Birthday from "./pages/05-Birthday";

import StartGame from "./components/00-StartGame/StartGame";

const App = props =>
  <div>
    <Route exact path="/" component={StartGame} />
    <Route path="/01-Breakfast" component={Breakfast} />
    <Route path="/02-Office" component={Office} />
    <Route path="/02.5-Train" component={Train} />
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
  preferredBeverage: "coffee",
  keyboardBroken: false,
  petOwner: "",
  petType: "",
  petName: "",
  initialItem: "",
  possibleItem: "",
  beverageSelection: "",
  phoneVisible: false,
  // all below were default, not game related
  items: [],
  newItem: "",
  count: 0
};

export default createProvider(initialState)(App);
