import { createTitle } from "../components/JobSelectionComponent/jobGenerator";

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
  petOwnerInput: "",
  petTypeInput: "",
  petNameInput: "",
  petOwnerInputSaved: "",
  petTypeInputSaved: "",
  petNameInputSaved: "",
  securityQuestionsAnswered: false,
  newBadgeReceived: false,
  workspaceVisible: false,
  phoneVisible: true,
  coffeeClicked: false,
  keyboardBroken: false,
  reactAngrily: false,
  easyNod: false,
  explanationHeard: true,
  beverageSelected: false,
  // all below were default, not game related
  jobItems: [
    { id: 1, title: createTitle() },
    { id: 2, title: createTitle() },
    { id: 3, title: createTitle() }
  ],
  wavesVisible: false,
  newItem: "",
  count: 0
};

// TODO add bindings for checking localstorage

export default initialState;
