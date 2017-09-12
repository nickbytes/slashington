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
  voicemailDone: false,
  restartingWork: false,
  scottAtDesk: false,
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
  // Train to Not Washington
  wavesVisible: false,
  trainAnimationVisible: false,
  awakenAfterTrainRide: false,
  afterLookOutWindow: false,
  afterYouMustBeDreaming: false,
  afterWalkingOffTrain: false,
  afterSayingPetName: false,
  // The Council
  afterClickBlur: false,
  afterWhyTheHell: false,
  afterClickGoInside: false,
  easyNodClicked: false,
  reactAngrilyClicked: false,
  // Slashington

  // Birthday

  // Good Messenger

  newItem: "",
  count: 0
};

// TODO add bindings for checking localstorage

export default initialState;
