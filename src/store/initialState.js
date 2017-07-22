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
  phoneVisible: false,
  preferredBeverage: "coffee",
  keyboardBroken: false,
  reactAngrily: false,
  easyNod: false,
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
