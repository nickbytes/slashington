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

// TODO add bindings for checking localstorage

export default initialState;
